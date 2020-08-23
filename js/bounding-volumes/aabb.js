const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})

// Objects
class Circle {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
  }

  update() {
    this.draw()
  }
}

class AABB {
  constructor(x, y, width, height, colour) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.colour = colour
  }

  drawRect() {
    // Blue rectangle
    c.beginPath();
    c.lineWidth = "10";
    c.fillStyle = this.colour;
    c.rect(this.x, this.y, this.width, this.height);
    c.fill();
  }

  update() {
    this.drawRect()
  }
}

function checkBV(rect1, rect2) {
  console.log('checking', )
  if (rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y) {
    // collision detected!
    rect1.colour = "green"
  } else {
    rect1.colour = "blue"
  }
}

// Implementation
let objects
let aabb1, aabb2
function init() {
  objects = []
  aabb1 = new AABB(150, 150, 150, 100, "blue")
  aabb2 = new AABB(undefined, undefined, 150, 100, "red")
  for (let i = 0; i < 400; i++) {
    // objects.push()
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)

  aabb1.update()

  aabb2.x = mouse.x;
  aabb2.y = mouse.y;
  aabb2.update()

  checkBV(aabb1, aabb2)

  // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
  // objects.forEach(object => {
  //  object.update()
  // })
}

init()
animate()