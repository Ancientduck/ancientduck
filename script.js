document.addEventListener('DOMContentLoaded', () => {
    const datehover = document.getElementById('datehover');
    const audio = document.getElementById('enterVC');

    
    datehover.addEventListener('mouseover', () => {
        audio.currentTime = 0;
        audio.play();
    });

    
    datehover.addEventListener('click', () => {
        displaydate();
        audio.currentTime = 0;
        audio.play();
    });
});


let outaudio = document.getElementById('exitVC')


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
        audio.volume = 0.4;
        musicbuttonoff.style.display="block" ;
        musicbutton.style.display="none";

    
    })
    
    musicbuttonoff.addEventListener('click' , () => {

        audio.pause();
        audio.currentTime= 0;
        musicbuttonoff.style.display="none" ;
        musicbutton.style.display="block";
    })

    audio.addEventListener('ended' , () => {
        musicbutton.style.display="block"
        musicbuttonoff.style.display="none"
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
    let julu = document.getElementById('julu')
    let pranto = document.getElementById('pranto')
    let kasem = document.getElementById('kasem')
    let vaiya = document.getElementById('vaiya')
    let vabi = document.getElementById('vabi')
    let hamim = document.getElementById('hamim')
    let turjo = document.getElementById('turjo')
    let apurbo = document.getElementById('apurbo')
    let nonameaudio = document.getElementById('exitVC')
    let gigachad = document.getElementById('gigachad')
    
    
   let thesubmit = () => {
    
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
    julu.style.display= 'none';
    pranto.style.display= 'none';
    kasem.style.display= 'none';
    gigachad.pause()

    if(name === '') {
          nonameaudio.play()
          nonameaudio.currentTime = 0;
          sayname.innerHTML = `You have a name, right?`
          showquote.style.display="none"
    }
    else if(lname === 'apurbo' || lname === 'vinci' || lname === 'apurbo da vinci' || lname === `prachurjo`) {
    sayname.innerHTML = `Greetings, Apurbo Da Vinci. <br> Welcome to your website`
    apurbo.style.display='block'
    gigachad.currentTime = 0;
    gigachad.play()
    gigachad.volume = 0.3 ;
    showquote.innerHTML="Apurbo Da Vinci";
      }
     else {
        showquote.style.display="block"

          
      if(lname === 'oishorjo') {
        sayname.innerHTML = `heeelo vaiya`
        vaiya.style.display='block'
        showquote.textContent = `A quote for you , "${gettingquotes}"`
        
        
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
                    showquote.textContent = `ki obosta?`
                    turjo.style.display='block'
                      } 
                      else if(lname === 'tommy' || lname === 'tommy vercetti') {
                        sayname.innerHTML = `Tommy`
                        showquote.textContent = `Remember that name`
                          }    
                        else if (lname === 'mosharrof sir' || lname === 'mosarrof' || lname === 'mosarof' || lname === 'mosarof sir') {
                                  sayname.innerHTML = 'Math homework';
                                  showquote.textContent = '10,000 ta mcq kathai kore asbi sobai';
                                  mosarof.style.display = 'block';
                              }
                          else if(lname === 'julfikar' || lname === 'julu' || lname === 'julfucker' || lname === 'julfucking' || lname === 'zulfikar') 
                          {
                                   sayname.innerHTML = 'HMMMMMM NIGGGGGGGGGGA'
                                   showquote.textContent = 'EVERYTHING IS FAIR AND LOVELY';
                                   julu.style.display = 'block';
                          }
                          else if(lname === 'pranto')
                          {
                            sayname.innerHTML = 'hmmmm PRANTOOO'
                            showquote.textContent = 'A quote of you, i do not remember the quote :)'
                            pranto.style.display = 'block'
                          }
                        else if(lname === 'kasem' || lname === 'Kashem' || lname === 'quasem')
                        {
                            sayname.innerHTML = 'No introduction needed'
                            showquote.textContent = 'AMON PITAN DIBO TUI 10 din phone tipte parbi na, ja porte bosh sala'
                            kasem.style.display = 'block'
                        }
                          
                                    
    
                          else {
                                sayname.innerHTML =  `hello ${name} ! <br> A quote for you ,`
                                showquote.textContent = `"${gettingquotes}"`
                                }



                            }
    
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        sayname.textContent = '';
        showquote.textContent = '';
    }, 2000);
   }

   submitbtn.onclick = thesubmit

   document.addEventListener('keydown' , (e) => {
     
    if(e.key === 'Enter') {
        
        thesubmit();
    }
   })

})  


//* this is the function for the timer

document.addEventListener ('DOMContentLoaded' , () => {

    function updatetime() {

     const thetime = performance.now() 
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


// start of reflex test
let testbutton = document.getElementById('starttestbtn')
let reflextest = document.getElementById('thereactionbox')
let reflexresult = document.getElementById('yourreactiontime')

function wrongclick()  {
  alert(`NO`)
  clearTimeout(forreflex)
  reflextest.style.background = 'black'
  reflextest.removeEventListener('click' , wrongclick)
}
  testbutton.onclick = function () {
    reflextest.style.background = 'grey'
    console.log(`pressed`)
    checkreflexclick()
  }

  function checkreflexclick() {
    if(reflextest.style.background === 'grey') {
      let reflexdelay = Math.floor(Math.random() * 10000 + 500)
      console.log(reflexdelay)
      reflextest.innerHTML = `Wait`
     forreflex = setTimeout(makeitgreen , reflexdelay)
    }

    if(reflextest.style.background === 'grey') {
      reflextest.addEventListener('click' , wrongclick )
      }
    }
    
  
  function makeitgreen() {
    console.log(`its green`)
    reflextest.innerHTML = `CLICK <br> NOW!!`
    reflextest.style.background = 'green'
    starttime = Date.now();
    reflextest.removeEventListener('click' , wrongclick)
    reflextime();
  }

 function reflextime() {
  if(reflextest.style.background === 'green') {
   
    reflextest.addEventListener(`click` , function reactionclick() {
      
      let endtime = Date.now()
      let reflex = ((endtime - starttime) - 100 )
      console.log(reflex)
      reflextest.style.background = 'black'
      reflextest.innerHTML = ``
      yourreactiontime.innerHTML = `Your reaction time is ${reflex} milliseconds`
      reflextest.removeEventListener('click' , reactionclick)
        console.log(`removed click`)
    })
  }
 }

let reflexbtn = document.getElementById('reflexbtn')
let reflexcontainer = document.getElementById('reflexcontainer')

reflexbtn.addEventListener('click' , function showtest() {

    audio.play()
    audio.currentTime = 0;
if(reflexcontainer.style.display === "none") {
    
    reflexcontainer.style.display = "block";
} else {
    reflexcontainer.style.display = "none";
    outaudio.play()
    outaudio.currentTime =0;
    
}
})
// end of reflex test