import * as PIXI from 'pixi.js'
import * as LEVEL from './level'
import { Bullet } from './Bullet'
import Vector  from './collision-detection/Vector'

export class Tower{
  constructor(sprite, x, y, shootSpeed, range, damage, app) {
    this.shootSpeed = shootSpeed;
    this.range = range;
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.pos = new Vector(x, y)
    this.distanceVector = new Vector(0, 0)
    // this.sprite.position.x = x - 32;
    // this.sprite.position.y = y - 32;
    this.sprite.position = new Vector(x - 32, y - 32)
    this.sprite.pos = new Vector(x - 32, y - 32)
    this.sprite.pivot.x = 32;
    this.sprite.pivot.y = 32;
    this.target = null;
    this.targetIndex = -1;
    this.damage = damage;
    this.app = app
  }

  drawRange(){
    const graphics = new PIXI.Graphics();
    graphics.lineStyle(2, 0xFEEB77, 1);
    graphics.drawCircle(this.sprite.position.x, this.sprite.position.y, this.range);
    graphics.endFill();
    this.app.stage.addChild(graphics);
  }
  

  toSpriteCoordinates(x, y) {
      this.sprite.position.x = x - 32;
      this.sprite.position.y = y - 32;
  };
  fromSpriteCoordinates(x, y) {
      this.pos.x = x + 32;
      this.pos.y = y + 32;
  };
  rotate (angle) {
      this.sprite.rotation = angle;
  };
  getTarget(index) {
      const enemies = LEVEL.getEnemies()
      if (index == -1) return;
      // ********   distance is the VECTOR Magnitude ***********
      this.distanceVector = enemies[index].pos.subtr(this.pos)
      if(this.range + enemies[index].getRange() >= this.distanceVector.mag()) {
        this.targetIndex = index;
          
        this.target = enemies[index];
        
        if (!(this.app.stage.getChildIndex(this.target.sprite) >= 0)) {
            this.target = null;
            this.targetIndex = -1;
            return;
        }

        var angle = Math.atan((this.target.y - this.pos.y) / (this.target.x - this.pos.x));
        
        if (this.target.x < this.pos.x) angle += 3.14;
        
        this.rotate(angle);
      } else {
        this.target = null;
        this.targetIndex = -1;
        this.getTarget(index - 1);
      }
  };

  shootTarget() {
    const enemies = LEVEL.getEnemies()
    const bullets = LEVEL.getBulletsArray()
      if (this.target == null) return;
      this.getTarget(enemies.length - 1);
      if (this.target == null) return;
      var toRemove = this.target.sprite;
      // shoot.play();
      var bullet = new Bullet(this.sprite.position.x, this.sprite.position.y, this.target, this, this.app);
      bullets.push(bullet);
      this.app.stage.addChild(bullet.sprite);
      return;
  }

}