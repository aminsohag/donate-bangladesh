function getInputAmount(id){
    const addMoney1 = document.getElementById(id).value;
    const addMoney = parseFloat(addMoney1)
    return addMoney;
}

function getTextAmount(id){
    const addMoney1 = document.getElementById(id).innerText;
    const addMoney = parseFloat(addMoney1)
    return addMoney;
}