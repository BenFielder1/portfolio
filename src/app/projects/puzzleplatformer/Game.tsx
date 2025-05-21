'use client';
import { useEffect, useRef } from 'react';
import Phaser from 'phaser';

export default function Game() {
  const gameRef = useRef<Phaser.Game | null>(null);
  
  useEffect(() => {
    // Only initialize the game once
    if (gameRef.current) return;
    
    // Basic Phaser config
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { x:0, y: 300 },
          debug: false
        }
      },
      scene: {
        preload: preload,
        create: create,
        update: update
      },
      parent: 'game-container', // This will be the ID of our div
    };
    
    // Game functions
    function preload(this: Phaser.Scene) {
      // Load assets here
      // this.load.image('sky', 'assets/sky.png');
    }
    
    function create(this: Phaser.Scene) {
      // Create game objects
      this.add.text(400, 300, 'My Phaser Game', { 
        color: '#ffffff' 
      }).setOrigin(0.5);
    }
    
    function update(this: Phaser.Scene) {
      // Game logic
    }
    
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
  
  return <div id="game-container" style={{ width: '800px', height: '600px' }} />;
}