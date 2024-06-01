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
   var element1 = document.getElementById('Tommy').style.display='block';
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


