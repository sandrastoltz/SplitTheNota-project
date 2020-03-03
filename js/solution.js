function calculateTip(sum, tip) {
    const calculatedTip = parseInt(sum) * parseFloat(tip);
    return calculatedTip;
}

function divideTotal(total, numberOfFriends) {
    const sumDivided = total / parseInt(numberOfFriends);
    return sumDivided;
}

function showDividedSum(sum) {
    document.getElementById('showSum').classList.toggle('hide');
    document.getElementById('inputForm').classList.toggle('hide');
    document.getElementById('friendSum').innerHTML = sum + ' kr';
}

document.getElementById('calculateButton').addEventListener('click', function() {
    console.log('Sum är: ' + sum);
    const sum = document.getElementById('sum').value;
    const numberOfFriends = document.getElementById('numberOfFriends').value;
    const tip = document.getElementById('tip').value;
    const calculatedTip = calculateTip(sum, tip);
    const total = parseInt(sum) + calculatedTip;

    const friendSum = divideTotal(total, numberOfFriends);

    showDividedSum(friendSum);
});
