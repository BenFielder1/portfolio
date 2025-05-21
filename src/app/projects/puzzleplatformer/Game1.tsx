"use client";
import { useEffect, useRef } from 'react';
import Phaser from 'phaser';

//importing the Menu scenes
import PreloadScene from "./menus/preload-scene.js"
import MainMenu from "./menus/main-menu.js"
import LevelSelect from "./menus/level-select.js"
import ControlsMenu from "./menus/controls-menu.js"
import PauseMenu from "./menus/pause-menu.js"
import CreditsMenu from "./menus/credits-menu.js"

//importing the level scenes
import Level1 from "./levels/level1.js"
import Level2 from "./levels/level2.js"
import Level3 from "./levels/level3.js"
import Level4 from "./levels/level4.js"
import Level5 from "./levels/level5.js"

export default function Game1() {
  const gameRef = useRef<Phaser.Game | null>(null);
  
  useEffect(() => {
    // Only initialize the game once
    if (gameRef.current) return;

    const width = window.innerWidth / 2 - 10;
    const height = width * (600 / 800);
    
    // Basic Phaser config
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
            parent: "game1",
            width: width,
            height: height,
            physics: {
              default: 'arcade',
              arcade: {
                gravity: { x: 0, y: 300 * ((window.innerWidth/2-50)/800) },
                debug: false
              }
            },
            scene: [
              PreloadScene,
              MainMenu,
              LevelSelect,
              ControlsMenu,
              CreditsMenu,
              PauseMenu,
              Level1,
              Level2,
              Level3,
              Level4,
              Level5,
          ]
    };
    
    // Initialize game
    gameRef.current = new Phaser.Game(config);
    
    // Cleanup function
    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, []);
  
  return <div id="game1" className="flex justify-center items-center" style={{ marginRight: "4px", flex: "1", justifyContent: "center", alignItems: "center" }} />;
}