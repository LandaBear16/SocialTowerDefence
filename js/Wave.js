import * as PIXI from 'pixi.js'
import wave from 'img/newWave.png'
import * as LEVEL from './level'
import {Enemy} from './Enemy'

export class Wave{
  constructor(app) {
    console.log('fuck ', app)
    this.sprite = new PIXI.Sprite(PIXI.Texture.from(wave));
    this.sprite.position.x = 64 * 10 + 10;
    this.sprite.position.y = 540;
    this.sprite.scale.y = 0.8;
    this.sprite.interactive = true;
    this.app = app
    this.setup()
  }
  
  setup() {
    this.sprite.on('mousedown', (data) => {
      console.log('hello', )
      if (this.sprite.interactive) {
        if (LEVEL.getHealth() > 0) {
          LEVEL.increaseEnemyHP(10);
          LEVEL.increaseEnempySpeed(0.95)
          LEVEL.increaseEnemiesN(2)
          for (var i = 0; i < LEVEL.getEnemniesN(); i++) {
              var enemy = new Enemy(64 * 9, (64 - (20 * LEVEL.getEnemniesN())) + (i * 20), LEVEL.getEnemyHP(), LEVEL.getEnemySpeed(), LEVEL.getEnemyId(), this.app);
              LEVEL.getEnemies().push(enemy);
              this.app.stage.addChild(enemy.sprite);
              LEVEL.increaseEnemyID();
          }
        }
        this.sprite.interactive = false;
        this.sprite.alpha = 0.5;
    }
    })
  }
};