import Scene from '../engine/Scene'
import ScenesManager from '../engine/ScenesManager'
import bunny from 'img/bunny.png'
import MenuButton from 'img/MenuButton.png'

export default class GameScene extends Scene {
  constructor() {
    super();

    //add a bunny :) 
    this.bunny = PIXI.Sprite.fromImage(bunny);
    // center the sprites anchor point
    this.bunny.anchor.x = 0.5;
    this.bunny.anchor.y = 0.5;            
    this.bunny.position.x = 50;
    this.bunny.position.y = 50;
    this.addChild(this.bunny);

    var _this = this;
    var button = new PIXI.Sprite(PIXI.Texture.fromImage(MenuButton));
    button.position.x = ScenesManager.defaultWidth - 200;
    button.scale.x = 0.5;
    button.scale.y = 0.5;
    button.click = button.tap = function (data) {
        if (_this.isPaused()) return;                
        ScenesManager.goToScene('menu');
    }
    button.setInteractive(true);
    this.addChild(button);
    
    this.setInteractive(true);
}

update() {
    super.update();
    this.bunny.rotation += 0.1;
}
}