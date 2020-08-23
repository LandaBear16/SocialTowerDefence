import { money, towers } from './level'
import { Tower } from './tower'
import { app } from './setup'

let element = {}
let application;

var stageMatrix = [
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 1]];

export const UIElement = (values, app) => {
  console.log('values', values)
  application = app;

  element = {
    ...values,
    text: new PIXI.Text(values.price, { fontFamily: 'Arial', fontSize: 24, fill: "#d6c069", align: 'center' }),
    tooltip: new PIXI.Text(values.tooltip, { fontFamily: 'Arial', fontSize: 18, fill: "#d6c069", align: 'center' }),
    spriteLocation: values.sprite
  }

  element.sprite = spriteSetup(values)

  setupUI(element);

  return element
}

const setupUI = (element) => {
  setElement(element);
}

const setElement = (element) => {
  element.text.position.y = element.y;
  element.text.position.x = element.x - 50;
  element.tooltip.position.y = element.sprite.position.y;
  element.tooltip.position.x = element.sprite.position.x + 50;
}

const spriteSetup = (element) => {
  let { sprite, x, y } = element
  sprite = new PIXI.Sprite(PIXI.Texture.from(sprite));
  sprite.position.x = x - 32;
  sprite.position.y = y - 32;
  sprite.pivot.x = 32;
  sprite.pivot.y = 32;

  sprite.interactive = true;
  sprite.buttonMode = true;

  sprite
    .on('pointerdown', onDragStart)
    .on('pointerup', onDragEnd)
    .on('pointerupoutside', onDragEnd)
    .on('pointermove', onDragMove);

    console.log('sprite', sprite)
  return sprite
}

function onDragStart (event) {

  this.data = event.data;
  this.alpha = 0.5;
  this.dragging = true;
  console.log('event', this)
}

function onDragEnd (event) {
  console.log('element', element)
  this.alpha = 1;
  this.dragging = false;
  const newPosition = event.data.getLocalPosition(this.parent);
  console.log('newPosition', newPosition)
  if(money >= element.price) {
    console.log('application', application.stage)
    if(stageMatrix[Math.floor(newPosition.y / 64)][Math.floor(newPosition.x / 64)]){
      const tmpX = (Math.floor(newPosition.x / 64) + 1) * 64;
      const tmpY = (Math.floor(newPosition.y / 64) + 1) * 64;
      const t = Tower(new PIXI.Sprite(PIXI.Texture.from(element.spriteLocation)), tmpX, tmpY, element.shootSpeed, element.range, element.damage);
      console.log('t', t)
      towers.push(t);
      application.stage.addChild(t.sprite);
      money -= element.price;
      element.position.x = x - 32;
      element.position.y = y - 32;
      stageMatrix[Math.floor(newPosition.y / 64)][Math.floor(newPosition.x / 64)] = 0;
    }
    // stageMatrix[Math.floor(newPosition.y / 64)][newPosition.x / 64]
  }
  // // set the interaction data to null
  // this.data = null;

}

function onDragMove () {
  if (this.dragging) {
    const newPosition = this.data.getLocalPosition(this.parent);
    this.x = newPosition.x;
    this.y = newPosition.y;
  }
}