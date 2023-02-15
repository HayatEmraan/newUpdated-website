function inputField(input){
    const inputFieldActive = document.getElementById(input);
    const inputFieldActiveFloat = parseFloat(inputFieldActive.value);
    inputFieldActive.value = '';
    return inputFieldActiveFloat;
}
function elementField(element){
    const elementFieldActive = document.getElementById(element);
    const elementFieldActiveFloat = parseFloat(elementFieldActive.innerText);
    return elementFieldActiveFloat;
}
function setElementAmount (elementValue, newValue){
    const elementValueAmountZ = document.getElementById(elementValue);
    elementValueAmountZ.innerText = newValue;
}

document.getElementById('depositButton').addEventListener('click', function(){
    const inputFieldActiveFloatSelect = inputField('inputAmountValue');
    const elementFieldActiveFloatSelect = elementField('depositAmountSet');
    const totalAmountActive = inputFieldActiveFloatSelect + elementFieldActiveFloatSelect;
    setElementAmount('depositAmountSet', totalAmountActive);
    const balanceAmountSetZ = elementField('balanceAmountSet');
    const totalBalanceAmountSet = balanceAmountSetZ + totalAmountActive;
    setElementAmount('balanceAmountSet', totalBalanceAmountSet);
})
document.getElementById('withdrawButton').addEventListener('click', function(){
    const inputFieldActiveFloatSelect = inputField('depositAmountValue');
    const elementFieldActiveFloatSelect = elementField('WithDrawAmountSet');
    const totalAmountActive = inputFieldActiveFloatSelect + elementFieldActiveFloatSelect;
    setElementAmount('WithDrawAmountSet', totalAmountActive);
    const balanceAmountSetZ = elementField('balanceAmountSet');
    const totalBalanceAmountSet = balanceAmountSetZ - totalAmountActive;
    setElementAmount('balanceAmountSet', totalBalanceAmountSet);
})