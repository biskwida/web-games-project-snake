import {update as updateSnake, draw as drawSnake, SPEED_SNAKE, getSnakeHead, snakeIntersectioin} from 
'./snake.js'
import {update as updateFood, draw as drawFood} from './food.js'
import {outsideGrid} from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime){
	if (gameOver) {
		if (confirm('You are not the new girlfriend xxx')) {
		  window.location = '/'
		}
		return
	  }
	
	window.requestAnimationFrame(main)
	const secFromLastRenderTime = (currentTime - lastRenderTime) / 1000 
	if(secFromLastRenderTime < 1 / SPEED_SNAKE) return

	lastRenderTime = currentTime

	update()
	draw()
}

window.requestAnimationFrame(main)

function draw(){
	gameBoard.innerHTML = ''
	drawSnake(gameBoard)
	drawFood(gameBoard)
	}

	function checkForDeath(){
		gameOver = outsideGrid(getSnakeHead()) || snakeIntersectioin()
	
	}

function update(){
updateSnake()
updateFood()
checkForDeath()
}

