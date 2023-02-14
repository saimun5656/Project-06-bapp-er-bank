document.getElementById('deposite-btn').addEventListener('click',function(){
const newDeposite =document.getElementById('deposite-amount').value
const prevoiusDeposite = document.getElementById('current-deposite').innerText
const result = parseInt(newDeposite)+parseInt(prevoiusDeposite);
document.getElementById('current-deposite').innerText=result
document.getElementById('deposite-amount').value = ''
const balancElement =document.getElementById('Balance')
const balanceTotal =parseFloat(balancElement.innerText);
balancElement.innerText= balanceTotal+parseFloat(newDeposite)
})


document.getElementById('withdrow-btn').addEventListener('click',function(){
const withdrowFIeld =document.getElementById('withdrow-amount');
const withdrowAmount =parseFloat(withdrowFIeld.value);
const balancElement =document.getElementById('Balance');
const balance = parseFloat(balancElement.innerText);
const currentwithdrow =document.getElementById('current-withdrow');
const currentwithdrowAmount =parseFloat(currentwithdrow.innerText);
withdrowFIeld.value=''
if(withdrowAmount>balance){
    alert('not enough balance')
    return;
}
balancElement.innerText =balance-withdrowAmount
currentwithdrow.innerText=currentwithdrowAmount+withdrowAmount

})