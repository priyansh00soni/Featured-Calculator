const display = document.getElementById("display");
function pressNum(num) {
    display.innerHTML += num;
    console.log(display.innerHTML);
    }
    function clearr() {
    display.innerHTML = "";
    }
    function calculate() {
    try {
    let result = eval(display.innerHTML);
    display.innerHTML = result;
    } 
    catch (Error) {
    display.innerHTML = "Error";
}
}
let saved;
let calculatorr=document.getElementById("calculatorr");
let currencyy=document.getElementById("currency");
let cryptoo=document.getElementById("crypto");
let temperaturee=document.getElementById("temperature");
let rupees1=document.getElementById("rupees");
let dollar=document.getElementById("dollar");
let euro=document.getElementById("euro");
let yen=document.getElementById("yen");
let rupees2=document.getElementById("rupees2");
let bitcoin=document.getElementById("bitcoin");
let ethereum=document.getElementById("ethereum");
let dogecoin=document.getElementById("dogecoin");
let celsius=document.getElementById("celcius");
let fahrenheit=document.getElementById("fahrenheit");
let kelvin=document.getElementById("kelvin");
let full=document.getElementById("full");
function change(response){
if(response=="calculator"){
calculatorr.style.display='block';
cryptoo.style.display = "none";
currencyy.style.display = "none";
temperaturee.style.display = "none";
full.style.transition="transform 0.17s linear";
full.style.transform="scale(1)";
}
else if(response=="currency"){
    full.style.transform = "scale(1)";
    currencyy.style.display="block";
    calculatorr.style.display = "none";
    cryptoo.style.display = "none";
    temperaturee.style.display="none";   
    full.style.transition = "transform 0.17s linear";
    full.style.transform = "scale(1.02)";

}
else if(response=="crypto"){
    full.style.transform = "scale(1.5)";
    cryptoo.style.display="block";
    calculatorr.style.display = "none";
    currencyy.style.display = "none";
    temperaturee.style.display = "none";
    full.style.transition = "transform 0.17s linear";
    full.style.transform = "scale(1.04)";
}
else if(response=="temp"){
    
    temperaturee.style.display = "block";
    currencyy.style.display = "none";
    calculatorr.style.display = "none";
    cryptoo.style.display = "none";
    full.style.transition = "transform 0.17s linear";
    full.style.transform = "scale(1.06)";
}
}
function enter1() {
    dollar.textContent = rupees1.value / 83.90;
    euro.textContent = rupees1.value / 93.31;
    yen.textContent = rupees1.value / 0.57;
}
function enter2(){
    bitcoin.textContent=rupees2.value/5126169.70;
    ethereum.textContent=rupees2.value/223840.66;
    dogecoin.textContent=rupees2.value/8.94;
}
function enter3(){
    fahrenheit.textContent=celsius.value*1.8+32;
    kelvin.textContent=celsius.value+273.15;
}
