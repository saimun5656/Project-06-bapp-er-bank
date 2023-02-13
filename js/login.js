document.getElementById('submit-btn').addEventListener('click',function(){
const email = document.getElementById('input-email').value;
const password =document.getElementById('user-pass').value;
if(email=='sh@gmail.com' && password=='2242'){
    window.location.href ='bank.html';
}
else{console.log('invalid user');}
})