function displaydate() {
    document.getElementById("date").innerHTML = Date();
    
    setTimeout(function() {
        dateElement.innerHTML = ""; // Clear the content
    }, 3000); // 3000 mill
}

function bulb() {
   var element1 = document.getElementById('bulb').style.display='block'
   var element2 = document.getElementById('off').style.display='block'

}

function bulb2 () {

    var element1 = document.getElementById('bulb').style.display='none'
    var element2 = document.getElementById('off').style.display='none'
}