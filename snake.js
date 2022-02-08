import { getInputDirection } from "./input.js";


export const SPEED_SNAKE = 6;
const snakeBody = [{ x:11, y:11 }]
let newSegments = 0

export function update(){
    addSegments()
    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--){
        snakeBody[i + 1] = {...snakeBody[i]}
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y

}

export function draw(gameBoard){
    snakeBody.forEach(segment =>{
        const snakeElmnt = document.createElement('div')
        snakeElmnt.style.gridRowStart = segment.y
        snakeElmnt.style.gridColumnStart = segment.x
        snakeElmnt.classList.add('snake')
        gameBoard.appendChild(snakeElmnt)
    })
}

export function expandSnake(amount){
    newSegments = newSegments + amount
}

export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
      if (ignoreHead && index === 0) return false
      return equalPositions(segment, position)
    })
  }

export function getSnakeHead() {

    return snakeBody[0]
}

export function snakeIntersectioin() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}

function equalPositions(pos1, pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
      }
    
      newSegments = 0
}