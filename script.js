document.addEventListener('DOMContentLoaded', () => {
    const datehover = document.getElementById('datehover');
    const audio = document.getElementById('enterVC');

    // Hover event listener setup
    datehover.addEventListener('mouseover', () => {
        audio.currentTime = 0;
        audio.play();
    });

    // Click event listener setup
    datehover.addEventListener('click', () => {
        displaydate();
        audio.currentTime = 0;
        audio.play();
    });
});

function displaydate() {
    var date = document.getElementById("date");
    date.innerHTML = new Date();

    setTimeout(function() {
        date.innerHTML = "";
    }, 5000);
}
function tommy() {
   var element1 = document.getElementById('Tommy').style.display='flex';
   var element2 = document.getElementById('off').style.display='block';

    var audio = document.getElementById('enterVC');
     audio.currentTime = 0;
    audio.play();  
}


function sound() {
    var audio = document.getElementById('enterVC')
    var sound = document.getElementById('enterVC')// Corrected the creation of Audio object
    audio.currentTime= 0;
    audio.play();
    
}

function tommy2 () {

    var element1 = document.getElementById('Tommy').style.display='none'
    var element2 = document.getElementById('off').style.display='none'
    var audio = document.getElementById('exitVC');
    audio.currentTime = 0;

    audio.play();
}

document.addEventListener('DOMContentLoaded', () => {
    const rocket= document.getElementById('rocket');
    const audio = document.getElementById('enterVC')

    rocket.addEventListener("mouseover" , () => {
        audio.play();
        audio.currentTime= 0;
    })
})


document.addEventListener('DOMContentLoaded', () => {
    const date = document.getElementById('date');
    const audio = document.getElementById('enterVC')

    date.addEventListener("mouseover" , () => {
        audio.play();
        audio.currentTime= 0;
    })
})
{
document.addEventListener('DOMContentLoaded' , () => {
    
    const musicbutton = document.getElementById('musicbuttonON');
    const audio = document.getElementById('music');
    const musicbuttonoff = document.getElementById('musicbuttonOFF')
    musicbutton.addEventListener('click' , () => {
        audio.play();
        audio.volume = 0.5;
        musicbuttonoff.style.display="block" ;
        musicbutton.style.display="none";
    
    })
    
    musicbuttonoff.addEventListener('click' , () => {

        audio.pause();
        audio.currentTime= 0;
        musicbuttonoff.style.display="none" ;
        musicbutton.style.display="block";
    })

    
})
}

{
    function updateClock() {
      const time = new Date();

      const timecode = time.toLocaleTimeString('en-US', { hour: 'numeric', minute:'numeric', second:"numeric"  } )
    

    const clock = document.getElementById ('Dclock');
    clock.textContent = timecode;
   
}

setInterval(updateClock, 1000);
updateClock(); 
}
//*  this is the function for name

document.addEventListener('DOMContentLoaded' , () => {

const name = document.getElementById('username');
const submitbtn = document.getElementById('submitbtn');
const sayname  = document.getElementById('sayname');
const audio   = document.getElementById('enterVC')


submitbtn.onclick = function() {
    const name = document.getElementById('username').value;

        const audio = document.getElementById('enterVC');
        audio.currentTime = 0;
        audio.play();
   
    if (!name) {

        alert (`Please, type your name`)

   }
   
    else {
        sayname.textContent = `hello, ${name}`}

        setTimeout( () => {
            sayname.textContent = ``
        } , 2000) 
        

};


})  

document.addEventListener ('DOMContentLoaded' , () => {

    const starttime = performance.now ();

    function updatetime() {

     const thetime = performance.now() - starttime ;
     const seconds = Math.floor(thetime/1000);  
     const minutes = Math.floor(seconds/60);
     const hours = Math.floor(minutes/60);
     
     const thetimer = `${hours} hours | ${minutes % 60} minutes | ${seconds % 60} seconds`;

        document.getElementById('timer').textContent = thetimer;
    }

setInterval(updatetime, 1000);
updatetime();
});

//* calculator
const display = document.querySelector('.displaybox');

function tap(input) {
    display.value += input


}

function calculate() {
    try{
    display.value = eval(display.value);
    }
    catch(ERROR) {
        display.value = 'Syntax error,try Chat GPT'
    }
}

function backspace() {
    display.value = display.value.slice(0,-1)
}

function reset() {

    display.value = "" ;
}

const calbtn = document.getElementById('calbtn')
const cal = document.getElementById('wrap')
const uncalbtn = document.getElementById('uncalbtn');
const audio = document.getElementById('enterVC') 

 calbtn.addEventListener('click' , function () {
    
    audio.currentTime = 0;
    audio.play()
    cal.style.display="block" ;
    cal.style.display='flex' ;
    uncalbtn.style.display='block';
    calbtn.style.display='none'
      
 })
{
const uncalbtn = document.getElementById('uncalbtn')
const uncal = document.getElementById('wrap')
const calbtn = document.getElementById('calbtn')

uncalbtn.addEventListener('click', function() {
      audio.currentTime = 0;
      audio.play()
      uncal.style.display='none'
      calbtn.style.display='block'
      uncalbtn.style.display='none'

        
})

}

function Aclock() {
    const now = new Date()
 //getting time part
    const second = now.getSeconds()
    const minute = now.getMinutes()
    const hour = now.getHours()

// calculating the degree part
    const secondangle = second * 6 ;
    const minuteangle = (minute * 6) + (second * 0.1);
    const hourangle =  (hour * 30) + (minute * 0.4);


    //rotate part

    document.getElementById('second-hand').style.transform = `rotate(${secondangle}deg)`;
    document.getElementById('minute-hand').style.transform = `rotate(${minuteangle}deg)`;
    document.getElementById('hour-hand').style.transform = `rotate(${hourangle}deg)`;

}
    Aclock();

    setInterval(Aclock, 1000);


