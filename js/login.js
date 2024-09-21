document.getElementById('login-btn').addEventListener('click',function (event){
    event.preventDefault();
    
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin').value;

    console.log(phoneNumber, pinNumber
    );
    if(phoneNumber === '01789478967' && pinNumber === '1234'){
        console.log('You are login')
        window.location.href='/home.html'
    }
    else{
        alert("You are Entered wrong Number or Pin")
    }
})