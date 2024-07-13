let rocket = document.getElementById("rocket")
let laser = document.getElementById("laser")
let enemies = document.querySelectorAll(".enemy")
let screenwidth = window.innerWidth; console.log(screenwidth)
let screenheight = window.innerHeight; console.log(screenheight)
let x = parseFloat(window.getComputedStyle(rocket).left)
let y = 500
let key = {};
let lasernow = true
let laserable = document.getElementById("laserable")
let score = document.getElementById('score')
let number = 1;
let left = document.getElementById('left-btn')
let right = document.getElementById('right-btn')
let up = document.getElementById('up-btn')
let down = document.getElementById('down-btn')
let moveleft = false
let moveright = false
let movedown = false
let moveup = false
let start = document.getElementById('start')
let controls = document.getElementById('controls')
let fire = document.getElementById('fire')
let dead = document.getElementById('dead')
function gameloop() 
{
    requestAnimationFrame(movements)
    requestAnimationFrame(checkhit)
    requestAnimationFrame(movealiendown)
    checkmobilemovement()
   invading = setInterval(() => {
    spawnmorealiens();
}, 5000);
}
start.onclick = function(){
gameloop()
rocket.style.display='block'
start.style.display = 'none'
}

rocket.style.display='none'

document.addEventListener('keydown', (e) => {
    key[e.key] = true;
})
document.addEventListener('keyup', (e) => {
    key[e.key] = false;
})
function movements() {
    let rocketsize = rocket.offsetWidth
    if(key['d'] && rocketsize + x + 5 < document.documentElement.clientWidth) x+=5
    if(key['a'] && x-5> 0 ) x-=5
    if(key['s'] && y+rocketsize+5 < document.documentElement.clientHeight)y += 5;
    if(key['w'] && y+5 > 0)y -= 5;
    rocket.style.left = `${x}px`
    rocket.style.top = `${y}px`
    requestAnimationFrame(movements)
}

function checkmobilemovement()
{
    let rocketsize = rocket.offsetWidth
    if(moveright && rocketsize + x + 5 < document.documentElement.clientWidth) x+=10
    if(moveleft && x-5> 0 ) x-=10
    if(movedown && y+rocketsize+5 < document.documentElement.clientHeight)y += 10;
    if(moveup && y+5 > 0)y -= 10;
    rocket.style.left = `${x}px`
    rocket.style.top = `${y}px`

    requestAnimationFrame(mobilemovement)
    
}

function mobilemovement()
{
    left.addEventListener('touchstart', function() { moveleft = true})
    right.addEventListener('touchstart', function() { moveright = true})
    up.addEventListener('touchstart', function() { moveup = true})
    down.addEventListener('touchstart', function() { movedown = true})

    left.addEventListener('touchend', function() { moveleft = false})
    right.addEventListener('touchend', function() { moveright = false})
    up.addEventListener('touchend', function() { moveup = false})
    down.addEventListener('touchend', function() { movedown = false})
    requestAnimationFrame(checkmobilemovement)
}

document.addEventListener("keydown", (f) => {
    if(f.key=='f' && lasernow == true)
    {
       
       laser.style.display = 'block'
       if(!laser.classList.contains('shooting'))
       {
        laser.classList.add("shooting")
        fire.currentTime = 0;
        fire.play()
        
        
       forlaser = setTimeout(() => {
           laser.classList.remove("shooting") 
           laser.style.display ='none'
           fire.pause()
        }, 200);
       }
       
      
       laser.onanimationend = () => {
        laser.style.display ='none'
       }
       }
    }
)
let spawn;
function place()
{
    
    enemies.forEach(enemy => {
    let position = Math.floor(Math.random()*window.innerWidth)
    enemy.style.left= `${position}px`
    
    
})}

place()

let screensize = document.documentElement.clientWidth
function alienmoveright(enemy)
{
    let spawn = parseFloat(window.getComputedStyle(enemy).left)
    let enemysize = enemy.offsetWidth;
    
    if(spawn+enemysize < screensize)
    {
    enemy.style.left= `${spawn + 1}px`
 enemy.animationFrameID = requestAnimationFrame(() => alienmoveright(enemy))
    }
    else
    {
        enemy.style.left = `${0}px`
    }
    
}

function alienmoveleft(enemy)
{
    let spawn = parseFloat(window.getComputedStyle(enemy).left)
    if(spawn>0)
    {
    enemy.style.left= `${spawn - 1}px`
   enemy.animationFrameID = requestAnimationFrame(() => alienmoveleft(enemy))
    }
    else{
        enemy.style.left= `${document.documentElement.clientWidth - enemy.offsetWidth}px`
    }
    
}

function randommove(enemy)
{
let way = Math.floor(Math.random() * 2);
if(way == 0)
{
 return() => alienmoveleft(enemy)
}
else
{
 return() => alienmoveright(enemy)
}
}

enemies.forEach(enemy => {
    enemy.animationFrameID = null;
    let moving = randommove(enemy)
    
    moving()


    setInterval(() => {
        if(enemy.animationFrameID)
        {
            cancelAnimationFrame(enemy.animationFrameID)
        }
        moving = randommove(enemy)
        moving()
    }, 1000);
})



  enemies.forEach( enemy => {
    let alienY = parseFloat(window.getComputedStyle(enemy).top)
    console.log(alienY)
  })

  function movealiendown()
  {
    
    enemies.forEach(enemy => {
        let alienY = parseFloat(window.getComputedStyle(enemy).top)
        enemy.style.top = `${alienY + 2}px`
        if(alienY + enemy.offsetHeight > document.documentElement.clientHeight)
        {
          enemy.style.top = '0px';
          
        }
    })
    requestAnimationFrame(movealiendown)
  }


//collision check

function checkhit()
{
    let laserzone = laser.getBoundingClientRect();
    let rocketzone = rocket.getBoundingClientRect();
    enemies.forEach(enemy => {
   let enemyzone = enemy.getBoundingClientRect()
   if(laserzone.left < enemyzone.right &&
      laserzone.right > enemyzone.left &&
      laserzone.top < enemyzone.bottom &&
      laserzone.bottom > enemyzone.top
   ) 
   {
    console.log(`Removing enemy at position: ${enemyzone.top}px`);
     enemy.remove()
     dead.play()
     dead.currentTime = 0;
     console.log(`OMG PRO PLAYER`)
     score.innerHTML = number++
     
   }
   else if(rocketzone.left < enemyzone.right &&
    rocketzone.right > enemyzone.left &&
    rocketzone.top < enemyzone.bottom &&
    rocketzone.bottom > enemyzone.top)
    {
        console.log('U SUCK')
        gameover()
    }
    })
requestAnimationFrame(checkhit)
}
// collision check done
function laserunavailable()
{
   laser.onanimationend = () => {
    laserable.style.display = 'none'
    laser.style.display = 'none'
    lasernow = true;
    //setTimeout(laseravailable, 1000)
   }
}
function laseravailable()
{
    laserable.style.display = 'block'
    lasernow = true;
}
function spawnaliens()
{
    let enemy = document.createElement('div');
    enemy.className = 'enemy';
    let position = Math.floor(Math.random()*1000+500)
    enemy.style.left= `${position}px`

    document.body.appendChild(enemy);
    enemies = document.querySelectorAll(".enemy");
    let moving = randommove(enemy)
    moving()
    setInterval(() => {
        
        if (enemy.animationFrameId) {
            cancelAnimationFrame(enemy.animationFrameId);
        }

        // Start a new movement
        moving = randommove(enemy);
        moving(); 
    }, 1000);
}
function spawnmorealiens()
{
for( let i=0; i<10; i++)
{
    spawnaliens();
}
}


function checkscreen()
{
    if(window.innerWidth > 1280)
    {
        controls.style.display='none'
        laserable.style.display='none'
    }
}
checkscreen()

laserable.addEventListener("touchstart", (f) => {
    if(lasernow == true)
    {
       
       laser.style.display = 'block'
       if(!laser.classList.contains('shooting'))
       {
        laser.classList.add("shooting")
        fire.currentTime = 0;
        fire.play()
        
       forlaser = setTimeout(() => {
           laser.classList.remove("shooting") 
           laser.style.display ='none'
           fire.pause()
        }, 200);
       }
       
      
       laser.onanimationend = () => {
        laser.style.display ='none'
       }
       }
    }
)
let gameoverimage = document.getElementById('gameover')
let endscorenumber = document.getElementById('endscorenumber')
let endscore = document.getElementById('endscore')
let restart = document.getElementById('restart')
let gamearea = document.getElementById('gamearea')
let gameoversound = document.getElementById('gameoversound')
function gameover()
{
    gamearea.remove()
    endscorenumber.innerHTML = `${number}`
    endscore.style.display= 'block'
    gameoverimage.style.display = 'block'
    restart.style.display='block'
    clearInterval(invading)
    gameoversound.play()
    
}

restart.onclick = () => 
    {
        location.reload()
    }

