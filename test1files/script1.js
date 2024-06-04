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

 calbtn.addEventListener('click' , function () {
   
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

      uncal.style.display='none'
      calbtn.style.display='block'
      uncalbtn.style.display='none'

        
})

}

