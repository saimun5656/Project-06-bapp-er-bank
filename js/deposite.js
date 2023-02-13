document.getElementById('deposite-btn').addEventListener('click',function(){
const newDeposite =document.getElementById('deposite-amount').value
const prevoiusDeposite = document.getElementById('current-deposite').innerText
const result = parseInt(newDeposite)+parseInt(prevoiusDeposite) 
document.getElementById('current-deposite').innerText=result
document.getElementById('deposite-amount').value = ''
})