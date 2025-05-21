"use client"
//importing libraries
import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';

//importing the Menu scenes
import PreloadScene from "./menus/preload-scene"
import MainMenu from "./menus/main-menu"
import LevelSelect from "./menus/level-select"
import ControlsMenu from "./menus/controls-menu"
import PauseMenu from "./menus/pause-menu"
import CreditsMenu from "./menus/credits-menu"

//importing the level scenes
import Level1 from "./levels/level1"
import Level2 from "./levels/level2"
import Level3 from "./levels/level3"
import Level4 from "./levels/level4"
import Level5 from "./levels/level5"

/***  This is the controlling game. Each scene sends
****  information over to game2 when it is started
****  and then restarts game2 which gives the impression
*///  that game2 has changed scenes as well.

const Game1 = () => {
  const gameContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Only run the game initialization on the client
    if (typeof window === 'undefined') return;
    
    // Your Phaser game configuration
    const config = {
      type: Phaser.AUTO,
      parent: "game1",
      width: (window.innerWidth/2-2),
      height: ((window.innerWidth/2-2)*(600/800)),
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 300 * ((window.innerWidth/2-50)/800) },
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

    // Game instance
    const game = new Phaser.Game(config);

    gameContainerRef.current.appendChild(game);

    // Cleanup function to destroy the game when component unmounts
    return () => {
      game.destroy(true);
    };
  }, [gameContainerRef]);

  return <div ref={gameContainerRef} />;
};

export default Game1;