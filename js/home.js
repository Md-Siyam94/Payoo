// step-1: access the add btn
document.getElementById('add-money-btn').addEventListener('click',function(event){
        event.preventDefault();
        
// step-2 get the money quantity
        const numberOfMoney = document.getElementById('money-quantity').value;
        console.log(numberOfMoney);
// step-3 get the pin number
        const pinNumber = document.getElementById('pin-number').value;
        console.log(pinNumber);
})