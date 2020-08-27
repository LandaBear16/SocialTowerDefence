import button from 'img/button.png'
import buttonDown from 'img/buttonDown.png'
import buttonOver from 'img/buttonOver.png'
import ScenesManager from '../engine/ScenesManager'

export default class MenuScene extends Scene {
  constructor() {
    super();
    this.setBackgroundColor(0xffffff);

    this.textureButton = PIXI.Texture.fromImage(button);
    this.textureButtonDown = PIXI.Texture.fromImage(buttonDown);
    this.textureButtonOver = PIXI.Texture.fromImage(buttonOver);

    this.button = new PIXI.Sprite(this.textureButton);
    // Scaling and positionning 
    this.button.scale.x = ScenesManager.defaultWidth / 400;
    this.button.scale.y = this.button.scale.x;

    this.button.anchor.x = 0.5;
    this.button.anchor.y = 0.5;
    
    // move the sprite to the center of the screen
    this.button.position.x = ScenesManager.defaultWidth / 2;
    this.button.position.y = ScenesManager.defaultHeight / 2;



    
    // make the button interactive..
    this.button.setInteractive(true);

    this._registerEvents();


    this.addChild(this.button);

    this.setInteractive(true);
  }

  _registerEvents() {
    var _this = this;
    // set the mousedown and touchstart callback..
    this.button.mousedown = this.button.touchstart = function (data) {
        if (_this.isPaused()) return;

        this.isdown = true;
        this.setTexture(_this.textureButtonDown);
        this.alpha = 1;
    }

    // set the mouseup and touchend callback..
    this.button.mouseup = this.button.touchend = function (data) {
        if (_this.isPaused()) return;

        this.isdown = false;

        if (this.isOver) {
            this.setTexture(_this.textureButtonOver);
        }
        else {
            this.setTexture(_this.textureButton);
        }
    }

    // set the mouseover callback..
    this.button.mouseover = function (data) {
        if (_this.isPaused()) return;

        this.isOver = true;

        if (this.isdown) return;

        this.setTexture(_this.textureButtonOver)
    }

    // set the mouseout callback..
    this.button.mouseout = function (data) {
        if (_this.isPaused()) return;

        this.isOver = false;
        if (this.isdown) return
        this.setTexture(_this.textureButton)
    }

    this.button.click = this.button.tap = function (data) {
        if (_this.isPaused()) return;

        
        ScenesManager.goToScene('game');
    }
}

}