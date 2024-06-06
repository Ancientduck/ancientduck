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

    let submitbtn = document.getElementById ('submitbtn')
    let sayname = document.getElementById('sayname')
    let audio = document.getElementById('enterVC')
    let mosarof = document.getElementById('mosarof')
    let hysam = document.getElementById('hysam')
    let vaiya = document.getElementById('vaiya')
    let vabi = document.getElementById('vabi')
    let hamim = document.getElementById('hamim')
    let turjo = document.getElementById('turjo')
    let apurbo = document.getElementById('apurbo')
    
    submitbtn.addEventListener('click' , () => {
    
        let name = document.getElementById('username').value
        let quotes = [
            "The art of living is more like wrestling than dancing. - Marcus Aurelius",
            "The soul becomes dyed with the color of its thoughts. - Marcus Aurelius",
            "The journey of a thousand miles begins with one step. - Lao Tzu ",
            "The best way to predict your future is to create it. - Abraham Lincoln",
            "Life is inherently uncertain. Embrace the uncertainty, and you will find endless possibilities. - unknown",
            "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
            "Don't stop when you are tired, stop when you are done - David Goggins",
            "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
            "Before you take the advice, understand the person",
            "The mind is the most powerful tool you have; it can work for you or against you. Train it well - David Goggins",
            "Your body is the reflection of your mindset",
            "Be comfortable being uncomfortable",
            "Tommy Vercetti, remember the name. - Tommy Vercetti from vice city"
            
        ];
          let generatequote = Math.floor(Math.random() * quotes.length)
          let gettingquotes = quotes[generatequote]
          let lname = name.toLowerCase();
          
          audio.play()
        audio.currentTime = 0 ;
          
        apurbo.style.display = 'none';
        vaiya.style.display = 'none';
        vabi.style.display = 'none';
        hamim.style.display = 'none';
        hysam.style.display = 'none';
        turjo.style.display = 'none';
        mosarof.style.display = 'none';
    
        if(!name) {
              alert(`type name`)
        }
        else if(lname === 'apurbo') {
        sayname.innerHTML = `Greetings, Apurbo Da Vinci`
        apurbo.style.display='block'
          }
         else if(lname === 'oishorjo') {
            sayname.innerHTML = `heeelo vaiya`
            showquote.textContent = `A quote for you , "${gettingquotes}"`
            vaiya.style.display='block'
            
         }
    
         else if(lname === 'mou') {
                sayname.innerHTML = `heeeeello vabi` 
                showquote.textContent = `A quote for you , "${gettingquotes}"`
                vabi.style.display='block'
         }
         
         else if(lname === 'hamim') {
            sayname.innerHTML = `BOLOD`
            showquote.textContent = `A quote for you , "being stupid has a new meaning because of you"`
            hamim.style.display='block'
              }
              else if(lname === 'hisam') {
                sayname.innerHTML = `My nigga`
                showquote.textContent = `A quote for you , "Do 100 pushups"`
                hysam.style.display='block'
                  }
                  else if(lname === 'hysam') {
                    sayname.innerHTML = `My nigga`
                    showquote.textContent = `A quote for you , "do 200 pushups"`
                    hysam.style.display='block'
                      }
                      else if(lname === 'turjo') {
                        sayname.innerHTML = `Yo dude, `
                        showquote.textContent = `A quote for you , "ghurte jai ekdin dude :)"`
                        turjo.style.display='block'
                          } 
                          else if(lname === 'tommy') {
                            sayname.innerHTML = `Tommy`
                            showquote.textContent = `Remember that name`
                              } 
                              else if(lname === 'tommy vercetti') {
                                sayname.innerHTML = `Tommy vercetti`
                                showquote.textContent = `Remember that name`
                                  }
                                   
                                  else if(lname === 'mosharrof sir') {
                                    sayname.innerHTML = `Math homework`
                                    showquote.textContent = `10,000 ta mcq kathai kore asbi sobai`
                                    mosarof.style.display='block'
                                      } 
                                      else if(lname === 'mosarrof') {
                                        sayname.innerHTML = `Math homework`
                                        showquote.textContent = `10,000 ta mcq kathai kore asbi sobai`
                                        mosarof.style.display='block'
                                          
                                          } 
                                          else if(lname === 'mosarof') {
                                            sayname.innerHTML = `Math homework`
                                            showquote.textContent = `10,000 ta mcq kathai kore asbi sobai`
                                            mosarof.style.display='block'
                                              } 
                                              else if(lname === 'mosarof sir') {
                                                sayname.innerHTML = `Math homework`
                                                showquote.textContent = `10,000 ta mcq kathai kore asbi sobai`
                                                mosarof.style.display='block'
                                                  } 
                                        
                                          
                                    
                                
                                        
        
        else {
            sayname.innerHTML =  `hello ${name} ! <br> A quote for you ,`
            showquote.textContent = `"${gettingquotes}"`
        }

        
        
       
        
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            sayname.textContent = '';
            showquote.textContent = '';
        }, 2000);
    
        })
    
    
       

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


