import Scene from '../engine/Scene'
import ScenesManager from '../engine/ScenesManager'
import logo from 'img/logo.png'

export default class IntroScene extends Scene {
  constructor() {
    super();
    this.setBackgroundColor(0xffffff);
    
    this.logo = PIXI.Sprite.fromImage(logo);
    this.addChild(this.logo);

    
    this.logo.scale.x = ScenesManager.defaultWidth/230;
    this.logo.scale.y = this.logo.scale.x;

    this.logo.anchor.x = 0.5;
    this.logo.anchor.y = 0.5;
    this.logo.alpha = 0;

    // move the sprite to the center of the screen
    this.logo.position.x = ScenesManager.defaultWidth / 2;
    this.logo.position.y = ScenesManager.defaultHeight /2;

    
}

update() {
  super.update();
  if (this.logo.alpha < 1) this.logo.alpha += 0.01;
  else ScenesManager.goToScene('menu');
}
}