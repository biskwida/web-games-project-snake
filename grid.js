export function getRandGridPos() {
return{
x: Math.floor(Math.random() * 21) + 1,
y: Math.floor(Math.random() * 21) + 1
}

}

export function outsideGrid(positition) {
return (

    positition.x < 1 || positition.x > 21 ||
    positition.y < 1 || positition.y > 21 
)

}