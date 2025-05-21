"use client"

// pages/snake.tsx
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
// import { Header } from "../components/header";

// Import p5 dynamically with no SSR to avoid server-side rendering issues
const Sketch = dynamic(() => import('react-p5').then(mod => mod.default), {
  ssr: false
});

// Import PathFinding with a type assertion since it's a CommonJS module
import PF from 'pathfinding';

// TypeScript interfaces
interface P5Instance {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createCanvas: (width: number, height: number) => any;
  background: (color: number) => void;
  stroke: (color: number) => void;
  fill: (r: number, g: number, b: number) => void;
  line: (x1: number, y1: number, x2: number, y2: number) => void;
  square: (x: number, y: number, size: number) => void;
  textSize: (size: number) => void;
  text: (text: string, x: number, y: number) => void;
  noLoop: () => void;
  loop: () => void;
  frameRate: (rate: number) => void;
  width: number;
  height: number;
  keyCode: number;
}

// Game state and variables
let snakeX: number[] = [5, 4, 3, 2, 1];
let snakeY: number[] = [1, 1, 1, 1, 1];
let direction: string = "r";
let appleCaught: boolean = true;
let appleX: number = 0;
let appleY: number = 0;
let score: number = 0;
let isDead: boolean = false;
let width1: number = 0;
let height1: number = 0;
let lastDirection: string = "r";
let lastActualDirection: string = "d";
let taken: boolean = true;

let grid: number[][] = [];
let usefulGrid: PF.Grid;
const finder: PF.AStarFinder = new PF.AStarFinder();
let path: number[][] | null;

const Snake: React.FC = () => {
  const [isBrowser, setIsBrowser] = useState(false);
  
  useEffect(() => {
    setIsBrowser(true);
    // Initialize dimensions based on browser window
    width1 = Math.floor(window.innerWidth/20) - 1;
    height1 = Math.floor(window.innerHeight/20) - 5;
    
    // Initialize grid
    initializeGrid();
  }, []);
  
  // Initialize the grid
  const initializeGrid = (): void => {
    grid = [];
    for(let y = 0; y < height1; y++){
      grid.push([]);
      for(let x = 0; x < width1; x++){
        grid[y].push(0);
      }
    }
  };

  const setup = (p5: P5Instance, canvasParentRef: Element) => {
    p5.createCanvas(width1*20, height1*20).parent(canvasParentRef);
  };

  const draw = (p5: P5Instance) => {
    p5.background(220);

    // Reset grid
    initializeGrid();
  
    p5.stroke(0);
    for (let x = 0; x < p5.width; x += 20){
      p5.line(x, 0, x, p5.height);
    }
    for (let y = 0; y < p5.height; y += 20){
      p5.line(0, y, p5.width, y);
    }
  
    if(snakeX[0] === appleX && snakeY[0] === appleY){
      appleCaught = true;
      taken = true;
      score++;
      snakeX.push(snakeX[snakeX.length - 1]);
      snakeY.push(snakeY[snakeY.length - 1]);
    }

    p5.fill(255, 0, 0);
    p5.square(snakeX[0]*20, snakeY[0]*20, 20);
    for (let x = 1; x < snakeX.length; x++){
      p5.square(snakeX[x]*20, snakeY[x]*20, 20);
      grid[snakeY[x]][snakeX[x]] = 1;
    }
  
    p5.fill(0, 255, 0);
    if(appleCaught){
      while(taken){
        appleX = Math.floor(Math.random()*(width1-4))+2;
        appleY = Math.floor(Math.random()*(height1-4))+2;
        if(grid[appleY][appleX] === 1){
          // Position already taken, try again
        }
        else{
          usefulGrid = new PF.Grid(grid);
          path = finder.findPath(snakeX[0], snakeY[0], appleX, appleY, usefulGrid);
          if(path.length > 2){
            taken = false;
          }
        }
      }
      appleCaught = false;
    }
    p5.square(appleX*20, appleY*20, 20);
  
    if(snakeX[0] < 0 || snakeX[0] >= width1 || snakeY[0] < 0 || snakeY[0] >= height1){
      isDead = true;
      p5.noLoop();
    }
  
    for(let i = 1; i < snakeX.length; i++){
      if(snakeX[i] === snakeX[0] && snakeY[i] === snakeY[0]){
        isDead = true;
        p5.noLoop();
      }
    }
  
    p5.fill(0, 0, 255);
    p5.textSize(32);
    p5.text("Score " + score, 20, 40);

    // Implementing pathfinding library
    usefulGrid = new PF.Grid(grid);
    path = finder.findPath(snakeX[0], snakeY[0], appleX, appleY, usefulGrid);
  
    checkDirection();
    checkForWallCollision();
    checkForBodyCollision();
    moveSnake(path);
  
    if(isDead){
      p5.fill(255, 255, 0);
      p5.textSize(20);
      p5.text("You died, hit space to play again", 150, 300);
      console.log(direction);
      console.log(lastDirection);
      console.log(lastActualDirection);
      reset();
    }
  
    p5.frameRate(60);

    if(p5.keyCode === 32){ // Space key
      if(isDead){
        isDead = false;
        p5.loop();
      }
    }
  };

  // If not in browser, don't render the sketch
  if (!isBrowser) {
    return (
      <div>
        <div className="App">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="App">
        <Sketch setup={setup} draw={draw} />
      </div>
    </div>
  );
};

function moveSnake(path: number[][] | null): void {
  for(let i = snakeX.length - 1; i > 0; i--){
    snakeX[i] = snakeX[i - 1];
  }
  for(let i = snakeY.length - 1; i > 0; i--){
    snakeY[i] = snakeY[i - 1];
  }

  if(path === null || path.length < 2){
    if (direction === "r"){
      snakeX[0] = snakeX[0] + 1;
    }
    else if (direction === "l"){
      snakeX[0] = snakeX[0] - 1;
    }
    else if (direction === "u"){
      snakeY[0] = snakeY[0] - 1;
    }
    else if (direction === "d"){
      snakeY[0] = snakeY[0] + 1;
    }
  }
  else{
    snakeX[0] = path[1][0];
    snakeY[0] = path[1][1];
  }
}

function reset(): void {
  snakeX = [5, 4, 3, 2, 1];
  snakeY = [1, 1, 1, 1, 1];
  direction = "r";
  appleCaught = true;
  appleX = 0;
  appleY = 0;
  score = 0;
}

function checkDirection(): void {
  if (snakeX[0] < appleX){
    if(direction!=="l"){
      lastDirection = direction;
      direction = "r";
    }
  }
  else if (snakeX[0] > appleX){
    if(direction!=="r"){
      lastDirection = direction;
      direction = "l";
    }
  }
  else if (snakeY[0] < appleY){
    if(direction!=="u"){
      lastDirection = direction;
      direction = "d";
    }
  }
  else if (snakeY[0] > appleY){
    if(direction!=="d"){
      lastDirection = direction;
      direction = "u";
    }
  }
  if(lastDirection !== direction){
    lastActualDirection = lastDirection;
  }
}
  
function checkForWallCollision(): void {
  if (direction === "r"){
    if(snakeX[0] + 1 >= width1){
      lastDirection = direction;
      if(snakeY[0] + 1 >= height1){
        direction = "u";
      }
      else if(snakeY[0] - 1 < 0){
        direction = "d";
      }
      else{
        direction = lastActualDirection;
      }
    }
  }
  if (direction === "l"){
    if(snakeX[0] - 1 < 0){
      lastDirection = direction;
      if(snakeY[0] + 1 >= height1){
        direction = "u";
      }
      else if(snakeY[0] - 1 < 0){
        direction = "d";
      }
      else{
        direction = lastActualDirection;
      }
    }
  }
  if (direction === "u"){
    if(snakeY[0] - 1 < 0){
      lastDirection = direction;
      if(snakeX[0] + 1 >= width1){
        direction = "l";
      }
      else if(snakeX[0] - 1 < 0){
        direction = "r";
      }
      else{
        direction = lastActualDirection;
      }
    }
  }
  if (direction === "d"){
    if(snakeY[0] + 1 >= height1){
      lastDirection = direction;
      if(snakeX[0] + 1 >= width1){
        direction = "l";
      }
      else if(snakeX[0] - 1 < 0){
        direction = "r";
      }
      else{
        direction = lastActualDirection;
      }
    }
  }
  if(lastDirection !== direction){
    lastActualDirection = lastDirection;
  }
}

function checkForBodyCollision(): void {
  for(let i = 0; i < snakeX.length; i++){
    if(direction === "r"){
      if(snakeX[0] + 1 === snakeX[i] && snakeY[0] === snakeY[i]){
        lastDirection = direction;
        if(snakeY[0] + 1 === snakeY[i] && snakeX[0] === snakeX[i]){
          direction = "u";
        }
        else if(snakeY[0] - 1 === snakeY[i] && snakeX[0] === snakeX[i]){
          direction = "d";
        }
        else{
          direction = lastActualDirection;
        }
      }
    }
    if(direction === "l"){
      if(snakeX[0] - 1 === snakeX[i] && snakeY[0] === snakeY[i]){
        lastDirection = direction;
        if(snakeY[0] + 1 === snakeY[i] && snakeX[0] === snakeX[i]){
          direction = "u";
        }
        else if(snakeY[0] - 1 === snakeY[i] && snakeX[0] === snakeX[i]){
          direction = "d";
        }
        else{
          direction = lastActualDirection;
        }
      }
    }
    if(direction === "u"){
      if(snakeY[0] - 1 === snakeY[i] && snakeX[0] === snakeX[i]){
        lastDirection = direction;
        if(snakeX[0] + 1 === snakeX[i] && snakeY[0] === snakeY[i]){
          direction = "l";
        }
        else if(snakeX[0] - 1 === snakeX[i] && snakeY[0] === snakeY[i]){
          direction = "r";
        }
        else{
          direction = lastActualDirection;
        }
      }
    }
    if(direction === "d"){
      if(snakeY[0] + 1 === snakeY[i] && snakeX[0] === snakeX[i]){
        lastDirection = direction;
        if(snakeX[0] + 1 === snakeX[i] && snakeY[0] === snakeY[i]){
          direction = "l";
        }
        else if(snakeX[0] - 1 === snakeX[i] && snakeY[0] === snakeY[i]){
          direction = "r";
        }
        else{
          direction = lastActualDirection;
        }
      }
    }
  }
  if(lastDirection !== direction){
    lastActualDirection = lastDirection;
    checkForWallCollision();
  }
}

export default Snake;