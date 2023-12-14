
document.getElementById('calculateButton').addEventListener('click', function() {
    document.getElementById('inputForm').classList.toggle('hide');
    document.getElementById('showSum').classList.toggle('hide');

    const tip: number = parseFloat((document.getElementById('tip') as HTMLInputElement).value);
    const sum: number = parseFloat((document.getElementById('sum') as HTMLInputElement).value);
    const numberOfFriends: number = parseFloat((document.getElementById('numberOfFriends') as HTMLInputElement).value);

    const total: number = calculateTip(sum, tip);
    showDividedSum(divideTotal(total, numberOfFriends));
});

function calculateTip(sum: number, tip: number): number {
    const calculatedTip = sum * tip;
    const total = sum + calculatedTip; 
    return total;
}

function divideTotal(total: number, numberOfFriends: number): number {
    const sumDivided = total / numberOfFriends;
    return sumDivided;
}

function showDividedSum(sum: number): void {
    const friendSum = document.getElementById('friendSum').innerHTML = sum + ' kr';
}