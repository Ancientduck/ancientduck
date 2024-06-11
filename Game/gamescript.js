let player = document.getElementById('player')
let block = document.getElementById('block')
let gameover = document.getElementById('GAMEOVER')
let thegame = document.getElementById('thegame')


function jump () {
 
  if(player.classList !="jump") {
    player.classList.add('jump')

  setTimeout(function() {
    
    player.classList.remove('jump')
  } , 500)
} }


document.addEventListener('keydown' , (space) => {
if(space.key === " ") {

  jump()

}})

setInterval(checkdeath , 50);


Displayscore = -1;
function score() {
  
  
  
  let showscore = document.getElementById('game-score');
  Displayscore++

  showscore.textContent = `score: ${Displayscore}`

  
  
}
setInterval(() => {

  score()
}  ,50)


function checkdeath() {

  let playerzone = player.getBoundingClientRect();
  let blockzone = block.getBoundingClientRect();
  
  
  if (
    playerzone.right > blockzone.left &&
    playerzone.left < blockzone.right &&
    playerzone.bottom > blockzone.top &&
    playerzone.top < blockzone.bottom 
  ) { 
    
    gameover.style.display="flex"
    thegame.style.display="none"
    endscore.style.display='flex'
    endscore.textContent = `Score: ${Displayscore}`
    document.body.style.backgroundImage = "url('Gameoverscreen.avif')"
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    restartbutton.style.display = 'block';

    console.log(window.innerWidth);
    if(window.innerWidth >= 1024){
    document.body.style.backgroundPositionX = "0px";
    }
    else {
      document.body.style.backgroundPositionX = "-1000px";
    }
    console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`);
    if 
    
    (window.innerWidth === 422 && window.innerHeight === 751) {

      document.body.style.backgroundPositionX = "-700px"

    }
    
    
  }}
  
 
  let startbutton = document.getElementById('startbutton');
  let restartbutton = document.getElementById('restartbutton')
  function startthegame() {

    thegame.style.display='block';
    startbutton.style.display='none';
  }

  function restartthegame() {

    thegame.style.display = 'block'
    restartbutton.style.display = 'none'
    location.reload()
  }