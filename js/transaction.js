document
  .getElementById("btnWithdraw")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const withdrawAmountFiled = document.getElementById("withdrawAmount");
    const withdrawPin = document.getElementById("withdrawPin");
    const amountField = document.getElementById("Amount");
    let amount = Number(amountField.innerText);
    let withdrawAmount = Number(withdrawAmountFiled.value);
    
    if(withdrawPin.value === '1122') {
        if(amount < withdrawAmount) {
            alert('No Sufficient Balance');
        }
        else {
            let updatedAmount = amount - withdrawAmount;
            amountField.innerText = updatedAmount;
        }
    }
    else {
        alert('Invalid Pin');
    }
    
  });
