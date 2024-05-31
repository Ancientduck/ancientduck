function displaydate() {
   var dateElement= document.getElementById("date");
    dateElement.innerHTML = new Date();
    
    setTimeout(function() {
        dateElement.innerHTML = "";
    }, 3000); 

}

function bulb() {
   var element1 = document.getElementById('Tommy').style.display='block'
   var element2 = document.getElementById('off').style.display='block'

}

function bulb2 () {

    var element1 = document.getElementById('Tommy').style.display='none'
    var element2 = document.getElementById('off').style.display='none'
}
