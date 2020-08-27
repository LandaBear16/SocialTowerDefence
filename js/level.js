export let money = 500;
export const towers = [];
export const enemies = [];
export let health = 100;
export let score = 0;
export let enemyHP = 40;
export let enemySpeed = 11;
let enemiesN = 6;
let enemyID = 0;
let bullets = []

export class LevelManagement {
  constructor(money) {
    this.money = money
  }

  getMoney() {
    return money
  }

  deductFromMoney() {
    return money -= price
  }
  
}

export const getMoney = () => {
  return money
}

export const updateMoney = (price) => {
  return money -= price
}

export const increaseMoney = (price) => {
  return money += price
}

export const getScore = () => {
  return score
}

export const updateScore = (points) => {
  return score += points
}

export const getHealth = () => {
  return health
}

export const minusHealth = () => {
  return health--;
}

export const getEnemies = () => {
  return enemies
}

export const getEnemyHP = () => {
  return enemyHP
}

export const getEnemySpeed = () => {
  return enemySpeed
}

export const getEnemniesN = () => {
  return enemiesN
}

export const getEnemyId = () => {
  return enemyID
}

export const getBulletsArray = () => {
  return bullets
}

export const getTowers = () => {
  return towers
}

export const increaseEnemyHP = (number) => {
  return enemyHP += number
}

export const increaseEnempySpeed = (number) => {
  return enemySpeed *= number
}

export const increaseEnemiesN = (number) => {
  return enemiesN += number
}

export const increaseEnemyID = () => {
  return enemyID++
}

export const setHealth = () => {
  return health = 0
}


export const levelManager = () => {
  
}