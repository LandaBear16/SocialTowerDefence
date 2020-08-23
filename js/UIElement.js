import * as PIXI from 'pixi.js'
import { Tower } from './tower'

export class UIElement {
  // constructor(height, width) {
  //   this.height = height;
  //   this.width = width;
  // }
  // // Getter
  // get area() {
  //   return this.calcArea();
  // }
  // // Method
  // calcArea() {
  //   return this.height * this.width;
  // }
  constructor({sprite, x, y, price, shootSpeed, range, damage}, app) {
    console.log('sprite', sprite)
    this.text = new PIXI.Text(price, { font: 'bold 20px Galindo', fill: '#d6c069'})
    this.sprite = new PIXI.Sprite(PIXI.Texture.from(sprite))
    this.range = range
    this.damage = damage
    this.x = x - 32
    this.y = y - 32
    this.shootSpeed = shootSpeed
  }

}