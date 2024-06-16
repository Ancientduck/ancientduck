let player = document.getElementById('player');
let gameover = document.getElementById('GAMEOVER');
let thegame = document.getElementById('thegame');
let movement = document.getElementById('movement')
let blockzones = Array.from(document.querySelectorAll('.block'))
let gigachadsound = document.getElementById('gigachadsound')
let gigachadblock = document.getElementById('block10')
let wave = document.getElementById('wave')
let goku = document.getElementById('goku')
let gokuhit = document.getElementById('goku-hit')
let kamehameha = document.getElementById('kamehameha')


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

Displayscore = -1;
function score() {
  
  let showscore = document.getElementById('game-score');
  Displayscore++

  showscore.textContent = `score: ${Displayscore}`  

  
}

function fortheblocks() {
 

let randomblock = Math.floor(Math.random() * blockzones.length);
let theblock = blockzones[randomblock];

if (!theblock.classList.contains("movement")) {
  theblock.style.display = "block";
  theblock.classList.add('movement');

  theblock.addEventListener('animationend', function() {
    theblock.style.display = 'none';
    theblock.classList.remove('movement');
  }, { once: true });
}

if(gigachadblock.style.display === "block") {

  gigachadsound.play();
  gigachadsound.volume = 0.3 ;

  gigachadblock.addEventListener('animationend', function() {

    gigachadsound.pause();
  }  )
}
}

function addanotherblock() {

  let randomDelay = Math.random() * 1000 + 500; 
 addanotherblocktime = setTimeout(() => {
    fortheblocks();
     addanotherblock(); 
  }, randomDelay);
}


let animationSpeed = 1.5; 
const speedMultiplier = 0.99; 

function iamspeed() {
    animationSpeed *= speedMultiplier; 
    console.log(`Animation speed decreased to ${animationSpeed}s`);
    
 
    blockzones.forEach(block => {
        block.style.animationDuration = animationSpeed + 's';
    });
}


 
function checkdeath() {


let playerzone = player.getBoundingClientRect();
let wavezone = wave.getBoundingClientRect();

  for(let block of blockzones ) {
    let blockzone = block.getBoundingClientRect();

  if (
    playerzone.right > blockzone.left &&
    playerzone.left < blockzone.right &&
    playerzone.bottom > blockzone.top &&
    playerzone.top < blockzone.bottom 
  ) { 

    console.log(`lol`)
    
    gameend();
    
  }}
  
   if (
    playerzone.right > wavezone.left &&
    playerzone.left < wavezone.right &&
    playerzone.bottom > wavezone.top &&
    playerzone.top < wavezone.bottom 
    )
  {
    console.log(`you got blasted into oblivion`)
    gameend();
  }

}

 
  let startbutton = document.getElementById('startbutton');
  let restartbutton = document.getElementById('restartbutton')
  function startthegame() {

    
    startbutton.style.display='none';
    Displayscore = -1 ;

    addanotherblock()
    fortheblocks()
    forscore = setInterval(score, 50)
    setInterval(iamspeed, 10000);
    checkwave();
    forcheckdeath = setInterval(checkdeath, 50);

    
  }
  function restartthegame() {

    thegame.style.display = 'none'
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
    gigachadsound.pause();
    kamehameha.pause();

    console.log(window.innerWidth);
    if(window.innerWidth >= 1024){
    document.body.style.backgroundPositionX = "0px";
    }
     else if 
    
    (window.innerWidth <= 423) {

      document.body.style.backgroundPositionX = "-760px"
    }
    else  {
      document.body.style.backgroundPositionX = "-1060px";
    }
    console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`);

    clearInterval(forscore);
    clearInterval(forcheckdeath);
    clearInterval(iamspeed);
    clearTimeout(addanotherblocktime); 
  }
  
  function loadwave() {
  
    goku.style.display = "block";
    gokuhit.style.display = "none";
    wave.style.display = "none";
    goku.classList.add('gokumoveanimation');
}

function hitwave() {
    
    gokuhit.style.display = "block";
    goku.style.display = "none";
    wave.style.display = "block";
    wave.classList.add('waveanimation');
}

function checkwave() {
    if (Displayscore > 500) {
        console.log('Kah...Me...Ha....Meeee... ');
        loadwave();

        kamehameha.play();
        kamehameha.volume = 0.3;
      
        clearInterval(iamspeed);
        clearTimeout(addanotherblocktime);
        clearInterval(fortheblocks);
        clearTimeout(forcheckwave)

       
        goku.addEventListener("animationend", function waveend() {
            console.log('HAAAAAAAAAAA');
            hitwave();
            

        });
        
        wave.addEventListener('animationend' , function goodreflex() {
          
          wave.style.display="none";
          gokuhit.style.display = "none";


          kamehameha.pause()
          
          setInterval(iamspeed , 10000);
          addanotherblock()
          fortheblocks()


        })


        return;
    }
    forcheckwave = setTimeout(checkwave, 50);
}
