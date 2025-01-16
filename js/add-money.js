document.getElementById('add-amount').addEventListener('click', function(){
    
    const myBalance = getTextAmount('my-balance');
    const addMoney = getInputAmount('input-amount');
    
    if(isNaN(addMoney) || myBalance < addMoney || addMoney < 0){
        alert('Failed');
        return;
    }
    const newMyBalance = myBalance - addMoney;
    document.getElementById('my-balance').innerText = newMyBalance.toFixed(2);
    const currentBalance = getTextAmount('current-balance');
    const newBalance = addMoney + currentBalance;
    document.getElementById('current-balance').innerText = newBalance.toFixed(2);


    const historyTran = document.getElementById('history-section');

    const div = document.createElement('div');
    div.classList.add("border", "p-8", "space-y-6", "rounded-lg")
    div.innerHTML = `
    <h4 class="text-xl font-bold">${addMoney} Taka is Donate for Flood at Noakhali, Bangladesh</h4>
    <p>Date :${new Date().toLocaleTimeString()} ${new Date().toLocaleDateString()} GMT +0600 (Bangladesh Standard Time)</p>
    `
    historyTran.appendChild(div);
    
    document.getElementById('input-amount').value= "";

    document.getElementById('Successfully').showModal();
});

// add money 2nd 
document.getElementById('add-amount2').addEventListener('click', function(){
    
    const myBalance = getTextAmount('my-balance');
    const addMoney = getInputAmount('input-amount2');
    
    if(isNaN(addMoney) || myBalance < addMoney || addMoney < 0){
        alert('Failed');
        return;
    }
    const newMyBalance = myBalance - addMoney;
    document.getElementById('my-balance').innerText = newMyBalance.toFixed(2);
    const currentBalance = getTextAmount('current-balance2');
    const newBalance = addMoney + currentBalance;
    document.getElementById('current-balance2').innerText = newBalance.toFixed(2);


    const historyTran = document.getElementById('history-section');

    const div = document.createElement('div');
    div.classList.add("border", "p-8", "space-y-6", "rounded-lg")
    div.innerHTML = `
    <h4 class="text-xl font-bold">${addMoney} Taka is Donated for famine-2024 at Feni, Bangladesh</h4>
    <p>Date :${new Date().toLocaleTimeString()} ${new Date().toLocaleDateString()} GMT +0600 (Bangladesh Standard Time)</p>
    `
    historyTran.appendChild(div);
    
    document.getElementById('input-amount2').value= "";

    document.getElementById('Successfully').showModal();
});

// add money 3rd
document.getElementById('add-amount3').addEventListener('click', function(){
    
    const myBalance = getTextAmount('my-balance');
    const addMoney = getInputAmount('input-amount3');
    
    if(isNaN(addMoney) || myBalance < addMoney || addMoney < 0){
        alert('Failed');
        return;
    }
    const newMyBalance = myBalance - addMoney;
    document.getElementById('my-balance').innerText = newMyBalance.toFixed(2);
    const currentBalance = getTextAmount('current-balance3');
    const newBalance = addMoney + currentBalance;
    document.getElementById('current-balance3').innerText = newBalance.toFixed(2);


    const historyTran = document.getElementById('history-section');

    const div = document.createElement('div');
    div.classList.add("border", "p-8", "space-y-6", "rounded-lg")
    div.innerHTML = `
    <h4 class="text-xl font-bold">${addMoney} Taka is Donated Aid for Injured in the Quota Movement Bangladesh</h4>
    <p>Date :${new Date().toLocaleTimeString()} ${new Date().toLocaleDateString()} GMT +0600 (Bangladesh Standard Time)</p>
    `
    historyTran.appendChild(div);
    
    document.getElementById('input-amount3').value= "";

    document.getElementById('Successfully').showModal();
});














