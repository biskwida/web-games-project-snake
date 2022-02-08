import { onSnake, expandSnake } from './snake.js'
import {getRandGridPos} from './grid.js'

let food = getRandFoodPos()
const GROWING_RATE = 1

export function update(){
    if (onSnake(food)){
    expandSnake(GROWING_RATE)
    food = getRandFoodPos()
    }
}

export function draw(gameBoard){

        const foodElmnt = document.createElement('div')
        foodElmnt.style.gridRowStart = food.y
        foodElmnt.style.gridColumnStart = food.x
        foodElmnt.classList.add('food')
        gameBoard.appendChild(foodElmnt)
}

function getRandFoodPos(){
    let newFoodPosition
    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = getRandGridPos()
    }
    return newFoodPosition
}
