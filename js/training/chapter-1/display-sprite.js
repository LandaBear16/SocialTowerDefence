import * as PIXI from 'pixi.js'
import {scaleToWindow} from '../../scale-to-window/scaleToWindow'
import pixieImage from 'img/pixie96x48.png'

let app = PIXI.Application
let Container = PIXI.Container
let autoDetectRenderer = PIXI.autoDetectRenderer
let Loader = PIXI.Loader
let Sprite = PIXI.Sprite

let stage
let loader
let renderer

export const displaySprite = () => {
  
  renderer = autoDetectRenderer(256, 256)
  renderer.view.style.border = "1px dashed black"
  loader = new Loader()
  console.log('loader', loader)
  // renderer.view.style.position = "absolute"
  // renderer.view.style.width = window.innerWidth + "px"
  // renderer.view.style.height = window.innerHeight + "px"
  // renderer.view.style.display = "block"

  document.body.appendChild(renderer.view)

  stage = new Container()

  loader.add(pixieImage).load(setup)

}

function setup() {
  console.log('setup')
  let pixie = new Sprite(loader.resources[pixieImage].texture)

  pixie.scale.x = 0.5
  pixie.scale.y = 0.5

  stage.addChild(pixie)

  renderer.render(stage)
}