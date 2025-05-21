//importing the phaser library
import Phaser from "phaser"

//The PreloadScene class. The use for this scene is to start the music and to load in the font.
class PreloadScene extends Phaser.Scene{
    constructor(){
        super("PreloadScene")
    }
    preload(){
        this.add.text(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            'Loading...',
            { 
                fontSize: '32px',
                fill: '#FFF'
            }
        ).setOrigin(0.5);

        //loading in the song
        this.load.audio("worldmap", "/assets/music/worldmap.mp3");

        this.load.font("Future", "/assets/fonts/Kenney_Future_Narrow.ttf")

        // new FontFace("Future", "url(/assets/fonts/Kenney_Future_Narrow.ttf)").load().then((font)=>{
        //     document.fonts.add(font)
        // })
    }
    create(){
        //setting the music variable
        this.music = this.sound.add("worldmap")
        //starting the music
        this.music.play({loop:true})

        //starting the main menu
        this.scene.start("MainMenu")
    }
}

export default PreloadScene