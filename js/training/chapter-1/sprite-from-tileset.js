import * as PIXI from 'pixi.js'
import tileset from 'img/tileset.png'

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
  console.log('loader', loader)
  // renderer.view.style.position = "absolute"
  // renderer.view.style.width = window.innerWidth + "px"
  // renderer.view.style.height = window.innerHeight + "px"
  // renderer.view.style.display = "block"

  document.body.appendChild(renderer.view)

  stage = new Container()

  loader.add(tileset).load(setup)

}

  const setup = () => {
    let texture = TextureCache[tileset]

    console.log('texture', texture)
    let rectangle = new Rectangle(160, 256, 32, 32)


    texture.frame = rectangle

    let adventuress = new Sprite(texture)

    adventuress.x = 64
    adventuress.y = 64

    adventuress.scale.set(3, 3)

    stage.addChild(adventuress)

    renderer.render(stage)
  }