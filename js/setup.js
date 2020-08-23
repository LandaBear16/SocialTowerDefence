import bunny from 'img/bunny.png'
import towerOne from 'img/t1.png'
import floortileset from 'img/floortileset.png'
import * as PIXI from 'pixi.js'

import { towers } from '../js/towerObject'

let app;
let texture;
let container;
let rect;
let world;
let tileTextures;

const tileSize = 32;
const mapSize = 8;
const interactiveTile = 6;

let displayMenu = false;


let map = {
  width: 25,
  height: 19,
  tiles: [
    57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 6, 25, 6, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57,
    57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 6, 25, 6, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57,
    57, 57, 57, 57, 57, 57, 57, 57, 57, 6, 6, 6, 25, 6, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57,
    57, 57, 57, 57, 57, 57, 57, 57, 57, 6, 25, 25, 25, 6, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57,
    57, 57, 57, 57, 57, 57, 57, 57, 57, 6, 25, 6, 6, 6, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57,
    57, 57, 57, 57, 57, 57, 57, 57, 57, 6, 25, 6, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57,
    57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57,
    57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57,
    57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57,
    57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57,
    57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57,
    57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57,
    57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57,
    57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57,
    57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57,
    57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57,
    57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57,
    57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57,
    57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57, 57,
  ]
}

export const setup = () => {

  console.log('PIXI', PIXI)
  app = new PIXI.Application({ backgroundColor: 0x1099bb, width: 920, height: 640 });
  // container = new PIXI.Container();
  // container.interactive = true;
  // container.hitArea = new PIXI.Rectangle(0, 0, 600, 600);

  // container.click = clickToPlace;
  // let rect = new PIXI.Graphics();
  // rect.beginFill(0xFF000);
  // rect.drawRect(0, 0, app.view.width, app.view.height);
  // container.addChild(rect);
  // container.visible = false;
  // console.log('container', container)

  // app.stage.addChild(container);

  document.body.appendChild(app.view);


  // create a texture from an image path
  // texture = PIXI.Texture.from(bunny);
  app.loader.add('tileset', floortileset);
  app.loader.load(() => {
    createTileMap();
    createWorldMap();
  

    // var uiElements = [UIElement(towers.towers.t1, app), UIElement(towers.towers.t2, app), UIElement(towers.towers.t3, app)];
    // for (var i = 0; i < uiElements.length; i++) {
    //   app.stage.addChild(uiElements[i].sprite);
    //   app.stage.addChild(uiElements[i].text);
    //   app.stage.addChild(uiElements[i].tooltip);
    // }
    

    app.stage.addChild(world);
  });
  // app.loader.onComplete.add(createTileMap);

  // const test = new UIElement("images/PNG/3.png", 720, 175, 100, 100, 150, 100, "A somewhat slower\nbut powerfull tower!")
  // console.log('test', test)
  // Scale mode for pixelation
  // texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

  // window.addEventListener("click", clickToPlace);

  // for (let i = 0; i < 10; i++) {
  //   createBunny(
  //     Math.floor(Math.random() * app.screen.width),
  //     Math.floor(Math.random() * app.screen.height),
  //   );
  // }
}

const createTileMap = () => {
  tileTextures = [];
  for (let i = 0; i < mapSize * mapSize; i++) {
    let x = i % mapSize;
    let y = Math.floor(i / mapSize);
    tileTextures[i] = new PIXI.Texture(
      app.loader.resources.tileset.texture,
      new PIXI.Rectangle(x * tileSize, y * tileSize, tileSize, tileSize)
    );

  }
}

const createWorldMap = () => {
  world = new PIXI.Container();
  for (let y = 0; y < map.width; y++) {
    for (let x = 0; x < map.width; x++) {
      let tile = map.tiles[y * map.width + x];
      
      let sprite = new PIXI.Sprite(tileTextures[tile]);
      sprite.x = x * tileSize;
      sprite.y = y * tileSize;
      if(tile === 6) {
        makeTileInteractive(sprite)
      }
      world.addChild(sprite);
    }

  }
}

const makeTileInteractive = (tile) => {
  tile.interactive = true;
  tile.buttonMode = true;
  tile.on('pointerdown', displayTowerMenu)  
}

const displayTowerMenu = (e) => {
  console.log('display tower', e)
  displayMenu = !displayMenu
  console.log('displayMenu', displayMenu)
  let container = buildTowerMenu(e)
  container.visible = displayMenu;

  app.stage.addChild(container);
}

const buildTowerMenu = (e) => {
  if(container === undefined) {
    container = new PIXI.Container();
    container.interactive = true;
    rect = new PIXI.Graphics();
    rect.beginFill(0xFF000);
    let tower = createTower()
    rect.addChild(tower)
    rect.drawRect(e.data.global.x, e.data.global.y, 100, 50);
    container.addChild(rect);
  }
 
  if(displayMenu === true && container !== undefined) {
    container.removeChildAt(0)
    rect.destroy({children:true, texture:true, baseTexture:true})
    rect = new PIXI.Graphics();
    rect.beginFill(0xFF000);
    let tower = createTower()
    rect.addChild(tower)
    rect.drawRect(e.data.global.x, e.data.global.y, 100, 50);
    container.addChild(rect);
  }
  
  return container
}

const createTower = () => {
  texture = PIXI.Texture.from(towerOne);
  const tower = new PIXI.Sprite(texture);
  tower.interactive = true
  tower.buttonMode = true
  tower.on('pointerdown', displayTowerMenu)
  return tower
}



function createBunny (x, y) {
  console.log('creat bunny', x)
  // create our little bunny friend..
  const bunny = new PIXI.Sprite(texture);

  // enable the bunny to be interactive... this will allow it to respond to mouse and touch events
  bunny.interactive = true;

  // this button mode will mean the hand cursor appears when you roll over the bunny with your mouse
  bunny.buttonMode = true;

  // center the bunny's anchor point
  bunny.anchor.set(0.5);

  // make it a bit bigger, so it's easier to grab
  bunny.scale.set(3);

  // setup events for mouse + touch using
  // the pointer events
  bunny
    .on('pointerdown', clickToPlace)
    .on('pointerup', onDragEnd)
    .on('pointerupoutside', onDragEnd)
    .on('pointermove', onDragMove);

  // For mouse-only events
  // .on('mousedown', onDragStart)
  // .on('mouseup', onDragEnd)
  // .on('mouseupoutside', onDragEnd)
  // .on('mousemove', onDragMove);

  // For touch-only events
  // .on('touchstart', onDragStart)
  // .on('touchend', onDragEnd)
  // .on('touchendoutside', onDragEnd)
  // .on('touchmove', onDragMove);

  // move the sprite to its designated position
  bunny.x = x;
  bunny.y = y;

  // add it to the stage
  app.stage.addChild(bunny);
}

const clickToPlace = (e) => {
  console.log('clicked', e.data.global.x);
  createBunny(e.data.global.x, e.data.global.y);
}


function onDragStart (event) {
  // store a reference to the data
  // the reason for this is because of multitouch
  // we want to track the movement of this particular touch
  this.data = event.data;
  this.alpha = 0.5;
  this.dragging = true;
}

function onDragEnd () {
  this.alpha = 1;
  this.dragging = false;
  // set the interaction data to null
  this.data = null;
}

function onDragMove () {
  if (this.dragging) {
    const newPosition = this.data.getLocalPosition(this.parent);
    this.x = newPosition.x;
    this.y = newPosition.y;
  }
}

