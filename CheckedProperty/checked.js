const mycheckbox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn");
const mastercard = document.getElementById("mastercard");
const paypalbtn = document.getElementById("paypalbtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");


mySubmit.onclick = function(){
    if(mycheckbox.checked){
        subResult.textContent =`YOu Are Subscribed!`; 
    }else{
        subResult.textContent =`YOu Are  Not Subscribed!`;
    } 
    if(visabtn.checked){
        paymentResult.textContent =`You are paying With VISA`;

    }else if(mastercard.checked){
        paymentResult.textContent =`You are paying With MasterCard`;

    }else if(paypalbtn.checked){
        paymentResult.textContent =`You are paying With PayPal`;
    }else{
        paymentResult.textContent =`You muat select a payment Type`;

    }
 }
