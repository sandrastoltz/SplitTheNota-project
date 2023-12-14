document.getElementById('calculateButton').addEventListener('click', function () {
    document.getElementById('inputForm').classList.toggle('hide');
    document.getElementById('showSum').classList.toggle('hide');
    const tip = parseFloat(document.getElementById('tip').value);
    const sum = parseFloat(document.getElementById('sum').value);
    const numberOfFriends = parseFloat(document.getElementById('numberOfFriends').value);
    const total = calculateTip(sum, tip);
    showDividedSum(divideTotal(total, numberOfFriends));
});
function calculateTip(sum, tip) {
    const calculatedTip = sum * tip;
    const total = sum + calculatedTip;
    return total;
}
function divideTotal(total, numberOfFriends) {
    const sumDivided = total / numberOfFriends;
    return sumDivided;
}
function showDividedSum(sum) {
    const friendSum = document.getElementById('friendSum').innerHTML = sum + ' kr';
}
