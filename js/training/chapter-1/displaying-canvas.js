import * as PIXI from 'pixi.js'
import {scaleToWindow} from '../../scale-to-window/scaleToWindow'

export const displayingCanvas = () => {
  let renderer = PIXI.autoDetectRenderer(256, 256)
  renderer.view.style.border = "1px dashed black"
  renderer.backgroundColor = 0xFFFFFF
  
  // renderer.view.style.position = "absolute"
  // renderer.view.style.width = window.innerWidth + "px"
  // renderer.view.style.height = window.innerHeight + "px"
  // renderer.view.style.display = "block"

  document.body.appendChild(renderer.view)

  let stage = new PIXI.Container()

  renderer.render(stage)

  var scale = scaleToWindow(renderer.view, "blue")
}