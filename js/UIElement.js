import * as PIXI from 'pixi.js'
import { Tower } from './tower'
import { stageMatrix } from './matrix'
import * as LEVEL from './level'


// function Tower (sprite, x, y, shootSpeed, range, damage) {
//   this.shootSpeed = shootSpeed;
//   this.range = range;
//   this.sprite = sprite;
//   this.x = x;
//   this.y = y;
//   this.sprite.position.x = x - 32;
//   this.sprite.position.y = y - 32;
//   this.sprite.pivot.x = 32;
//   this.sprite.pivot.y = 32;
//   this.target = null;
//   this.targetIndex = -1;
//   this.damage = damage;
//   var tower = this;
//   this.toSpriteCoordinates = function (x, y) {
//       tower.sprite.position.x = x - 32;
//       tower.sprite.position.y = y - 32;
//   };
//   this.fromSpriteCoordinates = function (x, y) {
//       tower.x = x + 32;
//       tower.y = y + 32;
//   };
//   this.rotate = function (angle) {
//       tower.sprite.rotation = angle;
//   };
//   this.getTarget = function (index) {
//       if (index == -1) return;
//       var distance = Math.sqrt((tower.x - enemies[index].x) * (tower.x - enemies[index].x) + (tower.y - enemies[index].y) * (tower.y - enemies[index].y));
//       if (distance > tower.range) {
//           tower.target = null;
//           tower.targetIndex = -1;
//           tower.getTarget(index - 1);
//       }
//       if (distance < tower.range) {
//           tower.targetIndex = index;
//           tower.target = enemies[index];
//           if (!stage.contains(tower.target.sprite)) {
//               tower.target = null;
//               tower.targetIndex = -1;
//               return;
//           }

//           var angle = Math.atan((tower.target.y - tower.y) / (tower.target.x - tower.x));
//           if (tower.target.x < tower.x) angle += 3.14;
//           tower.rotate(angle);
//       }
//   };
//   this.shootTarget = function () {
//       if (tower.target == null) return;
//       tower.getTarget(enemies.length - 1);
//       if (tower.target == null) return;
//       var toRemove = tower.target.sprite;
//       shoot.play();
//       var bullet = new Bullet(tower.sprite.position.x, tower.sprite.position.y, tower.target, tower);
//       bullets.push(bullet);
//       stage.addChild(bullet.sprite);
//       return;
//   }

// }

export default class UIElement {
  constructor({sprite, x, y, price, shootSpeed, range, damage}, app) {
    this.text = new PIXI.Text(price, { font: 'bold 20px Galindo', fill: '#d6c069'})
    this.texture = new PIXI.Texture.from(sprite)
    this.sprite = new PIXI.Sprite(this.texture)
    this.range = range;
    this.damage = damage;
    this.x = x;
    this.y = y;
    this.shootSpeed = shootSpeed;
    this.sprite.position.x = x - 32;
    this.sprite.position.y = y - 32;
    this.sprite.pivot.x = 32;
    this.sprite.pivot.y = 32;
    this.spriteLocation = sprite;
    this.price = price;
    this.app = app;
    this.text.position.y = this.y;
    this.text.position.x = this.x - 50;
  }

  placeSprite() {
    
    this.setup()
  }

  setup() {
    this.sprite.interactive = true;
    this.sprite.buttonMode = true;
    
    this.mousedownEvent()
    this.mouseupEvent()
    this.mousemoveEvent()
    
    this.app.stage.addChild(this.sprite);
  }

  dim() {
    this.sprite.alpha = 0.5;
    this.sprite.interactive = false;
  }

  dimOut() {
    this.sprite.alpha = 1;
    this.sprite.interactive = true;
  }

  mousedownEvent() {
    this.sprite.on('mousedown', (data) => {
      this.data = data;
      this.sprite.alpha = 0.5;
      this.sprite.dragging = true;
    })
  }

  mouseupEvent() {
    this.sprite.on('mouseup', (data) => {
      this.sprite.alpha = 1
      this.sprite.dragging = false;
      console.log('this', this)
      const newPosition = this.data.data.getLocalPosition(this.sprite.parent);
      if (LEVEL.getMoney() >= this.price) {
        if (stageMatrix[Math.floor(newPosition.y / 64)][Math.floor(newPosition.x / 64)] === 1) {
            var tmpX = (Math.floor(newPosition.x / 64) + 1) * 64;
            console.log("mouseupEvent -> tmpX", tmpX)
            var tmpY = (Math.floor(newPosition.y / 64) + 1) * 64;
            console.log("mouseupEvent -> tmpY", tmpY)

            var t = new Tower(new PIXI.Sprite(PIXI.Texture.from(this.spriteLocation)), tmpX, tmpY, this.shootSpeed, this.range, this.damage, this.app);
            t.drawRange()
            LEVEL.getTowers().push(t);
            this.app.stage.addChild(t.sprite);
            LEVEL.updateMoney(this.price)
            this.sprite.position.x = this.x - 32;
            this.sprite.position.y = this.y - 32;
            stageMatrix[Math.floor(newPosition.y / 64)][Math.floor(newPosition.x / 64)] = 0;
        } else {
            this.sprite.position.x = this.x - 32;
            this.sprite.position.y = this.y - 32;
        }
    } else {
        this.sprite.position.x = this.x - 32;
        this.sprite.position.y = this.y - 32;
    }
    this.data = null;
    })
  }

  mousemoveEvent() {
    this.sprite.on('mousemove', () => {
      if (this.sprite.dragging) {
        const newPosition = this.data.data.getLocalPosition(this.sprite.parent);
        this.sprite.position.x = newPosition.x;
        this.sprite.position.y = newPosition.y;
      }
    })
    
  }
}

