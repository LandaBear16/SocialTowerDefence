import GameMenu from './GameMenu'
import * as PIXI from 'pixi.js'
export const menuSetup = () => { 
  var stage = new PIXI.Stage(0xFFFFFF, true);
  var renderer = PIXI.autoDetectRenderer(800, 480);

  var mainMenu = new GameMenu(60, 'button.png');
  mainMenu._onAssetsLoadedCallback = function() {
      // The Assets must have been loaded before adding buttons is possible!

      mainMenu.addButton("Start Game", stage, 'startGame');
      mainMenu.addButton("Settings", stage, 'settings');
      mainMenu.addButton("Credits", stage, 'credits');
      mainMenu.driveIn();

      mainMenu._onDriveOutFinishedCallback = function(pressedButton) {
          // Do something, the menu is driven out and pressedButton has been pressed!
          // We simply drive in the menu now...
          mainMenu.driveIn();
      };

      document.body.appendChild(renderer.view);
      requestAnimFrame(loop);
  };
  mainMenu.loadAssets();

  function loop() {
      mainMenu.animate();
      renderer.render(stage);
      requestAnimFrame(loop);
  }
}