const billInput  = document.querySelector('.bill-input')
const peopleInput  = document.querySelector('.people-input')
const tipPerPerson  = document.getElementById('tip-amount')
const totalPerPerson  = document.getElementById('total-amount')
const tips = document.querySelectorAll('.tips');
const tipCustom = document.querySelector('.tip-custom');
const resetBtn = document.querySelector('.reset');
const error = document.querySelector(".error");

billInput.addEventListener('input', billInputFun);
peopleInput.addEventListener('input', peopleInputFun);
tips.forEach(function(val){
    val.addEventListener('click', handleClick)
})
tipCustom.addEventListener('input', tipInputFun);

resetBtn.addEventListener('click', reset);

billInput.value ='0.0'
peopleInput.value ='1'
tipPerPerson.innerHTML = '$' +(0.0).toFixed(2);
totalPerPerson.innerHTML = '$' + (0.0).toFixed(2);

let billvalue = 0.0;
let peoplevalue = 1;
let tipvalue = 0.15;

function billInputFun(){
    billvalue = parseFloat(billInput.value);
    calculateTip();
}

function peopleInputFun(){
    peoplevalue = parseFloat(peopleInput.value);
   
}
   if (peoplevalue < 1){
    error.style.display = 'flex';
    peopleInput.style.border = 'thick solid red';
   }else{
    error.style.display = 'none';
    peopleInput.style.border = 'none';
    calculateTip();
   }

function tipInputFun(){
    tipvalue=parseFloat(tipCustom.value / 100);

    tips.forEach(function(val){
    val.classList.remove('active-tip');
    });
    calculateTip();
}
function handleClick(event){
    tips.forEach(function(val){
        val.classList.remove('active-tip')
        if(event.target.innerHTML == val.innerHTML){
            val.classList.add('active-tip');
            tipvalue = parseFloat(val.innerHTML)/100
        }
    });
    calculateTip()
}

function calculateTip(){
    if(peoplevalue >=1){
        let tipAmount = (billvalue * tipvalue) / peoplevalue
        let total = (billvalue * tipAmount) / peoplevalue
        tipPerPerson.innerHTML = '$' + tipAmount.toFixed(2);
        totalPerPerson.innerHTML = '$' + total.toFixed(2);
    }
}

function reset(){
billInput.value ="0.0";
billInputFun()
peopleInput.value ="1";
peopleInputFun()
tipCustom.value = "";
}