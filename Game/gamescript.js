let player = document.getElementById('player');
let gameover = document.getElementById('GAMEOVER');
let thegame = document.getElementById('thegame');




function jump () {
 
  if(player.classList !="jump") {
    player.classList.add('jump')

  setTimeout(function() {
    
    player.classList.remove('jump')
  } , 900)
} }


document.addEventListener('keydown' , (space) => {
if(space.key === " ") {

  jump()

}})




Displayscore = -1;
function score() {
  
  
  
  let showscore = document.getElementById('game-score');
  Displayscore++

  showscore.textContent = `score: ${Displayscore}`

  
  
}
setInterval(() => {

  score()
}  ,50)


setInterval(() => {

  checkdeath()
}, 50)


let [block , block2, block3 ] = ['block' , 'block2' , 'block3'].map(blocks => document.getElementById(blocks)) ;
function fortheblocks() {
  let blockzones = [ 
     block,
     block2,
     block3

  ];
  
let randomblock = Math.floor(Math.random() * blockzones.length);
let theblock = blockzones[randomblock];


if(theblock.classList != "movement") {

theblock.style.display ="block";
theblock.classList.add('movement');
}


if(theblock.classList.contains('movement')) {
setTimeout(() => {

theblock.style.display="none";
theblock.classList.remove('movement');
}, 2900)
}

}

function checkdeath() {


let playerzone = player.getBoundingClientRect();
let blockzones = [ 
  block.getBoundingClientRect(),
  block2.getBoundingClientRect() 
];

  for(let blockzone of blockzones) {
  if (
    playerzone.right > blockzone.left &&
    playerzone.left < blockzone.right &&
    playerzone.bottom > blockzone.top &&
    playerzone.top < blockzone.bottom 
  ) { 
    
    gameend();
    
  }}}

 
  let startbutton = document.getElementById('startbutton');
  let restartbutton = document.getElementById('restartbutton')
  function startthegame() {

    thegame.style.display='block';
    startbutton.style.display='none';
    Displayscore = -1 ;
    fortheblocks()
    fortheblockstime = setInterval(() => {
      fortheblocks()
    }, 3000);
    
  }

  function restartthegame() {

    thegame.style.display = 'block'
    restartbutton.style.display = 'none'
    location.reload()
  }

  function gameend() {
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
    clearInterval(fortheblockstime);
  }
  