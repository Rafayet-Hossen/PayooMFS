document.getElementById('btnLogin').addEventListener('click',function(event){
    event.preventDefault(); // here we prevent the default behave of web browser.
    const numberField = document.getElementById('phone-number');
    const passwordFiled = document.getElementById('password');
    const phoneNumber = numberField.value;//input filed so we use .value 
    const password = passwordFiled.value;
    
    if(phoneNumber === '01973456826' && password === '1122') {
        console.log("you are log in");
        window.location.href = './homepage.html'
    }
    else {
        alert('Wrong Phone number or Pin');
    }
    
})