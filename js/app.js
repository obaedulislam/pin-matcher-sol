function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const randomNumber = Math.round(Math.random()*10000);
    return randomNumber;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
});

document.getElementById('calculator').addEventListener('click', function(event){
    const btnNumber = event.target.innerText;
    const typedNumberField = document.getElementById('typed-number');
    const prevTypedNumber = typedNumberField.value;
    if(isNaN(btnNumber)){
        if(btnNumber === 'C'){
            typedNumberField.value = '';
        }
        else if(btnNumber === '<'){
            const digits = prevTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else{
        const newTypedNumber = prevTypedNumber + btnNumber; 
        typedNumberField.value = newTypedNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-number');
    const typedNumber = typedNumberField.value;

    const pinSuccessMsg = document.getElementById('pin-success');
    const pinFailureMsg = document.getElementById('pin-failure');
    if(typedNumber === currentPin){
        pinSuccessMsg.style.display = 'block';
        pinFailureMsg.style.display = 'none';
    }
    else{
        pinFailureMsg.style.display = 'block';
        pinSuccessMsg.style.display = 'none';
    }
});