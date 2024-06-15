let player = document.getElementById('player')
let block = document.getElementById('block')


function jump () {
 
  if(player.classList !="jump") {
    player.classList.add('jump')

  setTimeout(function() {
    
    player.classList.remove('jump')
  } , 500)
} }

setInterval( () => {
  
} , 500)

document.addEventListener('keydown' , (space) => {
if(space.key === " ") {

  jump()

}})

function checkdeath() {

let playerzone = player.getBoundingClientRect();
let blockzone = block.getBoundingClientRect();


if (
  playerzone.right > blockzone.left &&
  playerzone.left < blockzone.right &&
  playerzone.bottom > blockzone.top &&
  playerzone.top < blockzone.bottom 
) { 
  alert(`GAME OVER`)
  Displayscore = -1;
  
}}

setInterval(checkdeath , 10);

let Displayscore = 0;
function score() {
  
  let showscore = document.getElementById('game-score');
  Displayscore++

  showscore.innerHTML = `score: ${Displayscore}`
}

setInterval(() => {

  score()
}  ,500)

   