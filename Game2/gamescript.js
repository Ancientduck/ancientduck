let rocket = document.getElementById("rocket")
let bomb = document.getElementById("bomb")
let enemies = document.querySelectorAll(".enemy")
let screenwidth = window.innerWidth; console.log(screenwidth)
let screenheight = window.innerHeight; console.log(screenheight)
let x = parseFloat(window.getComputedStyle(rocket).left)
let y = 500
let key = {};
let bombnow = true
let bombable = document.getElementById("bombable")

function gameloop() 
{
    requestAnimationFrame(movements)
    requestAnimationFrame(checkhit)
}
requestAnimationFrame(gameloop)

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


document.addEventListener("keydown", (f) => {
    if(f.key=='f' && bombnow == true)
    {
       
       bomb.style.display = 'block'
       if(!bomb.classList.contains('shooting'))
       {
        bomb.classList.add("shooting")
        
       forbomb = setTimeout(() => {
           bomb.classList.remove("shooting") 
           bomb.style.display ='none'
        }, 200);
       }
       
      
       bomb.onanimationend = () => {
        bomb.style.display ='none'
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

//collision check

function checkhit()
{
    let bombzone = bomb.getBoundingClientRect();
    enemies.forEach(enemy => {
   let enemyzone = enemy.getBoundingClientRect()
   if(bombzone.left < enemyzone.right &&
      bombzone.right > enemyzone.left &&
      bombzone.top < enemyzone.bottom &&
      bombzone.bottom > enemyzone.top
   ) 
   {
     enemy.remove()
     console.log(`OMG PRO PLAYER`)
   }
    })
requestAnimationFrame(checkhit)
}
// collision check done
function bombunavailable()
{
   bomb.onanimationend = () => {
    bombable.style.display = 'none'
    bomb.style.display = 'none'
    bombnow = true;
    //setTimeout(bombavailable, 1000)
   }
}
function bombavailable()
{
    bombable.style.display = 'block'
    bombnow = true;
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
for( let i=0; i<5; i++)
{
    spawnaliens();
}
}
setInterval(() => {
    spawnmorealiens();
}, 5000);