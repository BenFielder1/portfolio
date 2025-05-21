//importing Phaser library
import Phaser from "phaser"

//importing functions from other scripts
import { createNewButton, createNewText } from "./components/components"
import { checkButtonPress } from "./components/frame-events"

//functions to communicate with puppet scene
import { restartScene } from "../Game2"

//function to restart game save file
import { restartGame } from "../saving/saving-system"


//Creating the Main Menu scene. The create function is called at the start of the scene and the update function is called every frame
class MainMenu extends Phaser.Scene{
    constructor(){
        super("MainMenu")
    }
    preload(){
        //loading all the sprites for use in the scene
        this.load.spritesheet("ui-button", "/assets/ui-button/ui-button.png", {frameWidth: 190, frameHeight: 49})

        this.load.image("background", "/assets/background/grass.png")
    }
    create(){

        this.gameScale = this.scale.canvas.width/800

        this.add.sprite(512*this.gameScale, 300*this.gameScale, "background").setDisplaySize(1024*this.gameScale, 1024*this.gameScale).setDepth(-2)

        //Create the text for the title
        this.texts = this.add.group()
        this.titleText = createNewText(this, this.texts, {x:400,y:100}, this.gameScale, {text: "Menu", font: "75px Future", fill: "#552eff"})

        //create the buttons for new game, load game, minigame and to see the controls
        this.buttons = this.add.group()
        this.newGameButton = createNewButton(this, this.buttons, {x:400, y:200, w:300, h:50}, this.gameScale, {text:"New Game", font: "40px Future", fill: "#00ff00"}, 0xff0000, restartSave, this, "ui-button")
        this.startButton = createNewButton(this, this.buttons, {x:400, y:300, w:300, h:50}, this.gameScale, {text:"Load Game", font: "40px Future", fill: "#00ff00"}, 0xff0000, continueGame, this, "ui-button")
        this.controlsButton = createNewButton(this, this.buttons, {x:400, y:500, w:300, h:50}, this.gameScale, {text:"Settings", font: "40px Future", fill: "#00ff00"}, 0xff0000, seeControls, this, "ui-button")

        //restart the puppet scene and tell it not to run
        restartScene(false)
    }
    update(){
        //checks for button presses in the buttons group
        checkButtonPress(this, this.buttons)
    }
}

function continueGame(game){
    //load the scene Level Select
    game.scene.start("LevelSelect")
}

function restartSave(game){
    //restarts the saved game
    restartGame()
    //load the scene Level Select
    game.scene.start("LevelSelect")
}

function seeControls(game){
    //load the controls menu
    game.scene.start("ControlsMenu")
}

export default MainMenu