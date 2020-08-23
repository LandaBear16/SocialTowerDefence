import * as PIXI from 'pixi.js'
import tileset from 'img/treasureHunter.json'

let app = PIXI.Application
let Container = PIXI.Container
let autoDetectRenderer = PIXI.autoDetectRenderer
let Loader = PIXI.Loader
let Sprite = PIXI.Sprite
let TextureCache = PIXI.utils.TextureCache
let Rectangle = PIXI.Rectangle

let stage
let loader
let renderer

export const displayTileset = () => {
  
  renderer = autoDetectRenderer(256, 256)
  renderer.view.style.border = "1px dashed black"
  loader = new Loader()

  document.body.appendChild(renderer.view)

  stage = new Container()

  loader.add(tileset).load(setup)

}

  const setup = () => {
   
  }