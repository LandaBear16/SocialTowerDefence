import _ from 'lodash'
import { setup } from '../js/setup'
import { displayingCanvas } from '../js/training/chapter-1/displaying-canvas'
import { displaySprite } from '../js/training/chapter-1/display-sprite'
import { displayTileset } from '../js/training/chapter-1/sprite-from-tileset'
// import { axisAligned } from '../js/bounding-volumes/aabb'
import UIElement from '../js/UIElement'
import bunny from 'img/bunny.png'
import * as PIXI from 'pixi.js'
import { cd } from '../js/collision-detection/index'


function component () {
  const element = document.getElementById('gameDiv');

  cd

  return element;
}
component()
// document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    console.log('Updating print.js...');
  })
}