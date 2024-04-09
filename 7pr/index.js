const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];
// function giveParcel() {
//     if (peopleWaiting.length > 0) {
//         const nextClient = peopleWaiting.shift();
//         alert(nextClient + ' получил(а) посылку. В очереди осталось ' + peopleWaiting.length + ' человек.');
//     } else {
//         alert('Очередь пуста.');
//     }
// }

// function leaveQueueWithoutParcel() {
//     if (peopleWaiting.length > 0) {
//         const leavingClient = peopleWaiting.pop();
//         alert(leavingClient + ' не получил(ла) посылку и ушел из очереди.');
//     } else {
//         alert('Очередь пустая');
//     }
// }

// giveParcel();
// giveParcel();
// giveParcel();

// while (peopleWaiting.length > 0) {
//     leaveQueueWithoutParcel();
// }

// function getSumOfSequence(number) {
//     let arr = [];

//     for (let i = 1; i <= number; i++) {
//         arr.push(i);
//     }

//     return arr[0] + arr[arr.length - 1];
// }

// console.log(getSumOfSequence(5));

// const coffees = ['Latte', 'Cappuccino', 'Americano'];
// const prices = [1.5, 1, 2];

// const updatedPrices = prices.map(price => price + 0.5);

// coffees.forEach((coffee, index) => {
//     alert(`Кофе ${coffee} сейчас стоит ${updatedPrices[index]} евро`);
// });

let clientsEstimations = [];

function askClientToGiveEstimation() {
    let estimation = prompt("Как вы оцениваете нашу кофейню от 1 до 10?");
    if (estimation >= 1 && estimation <= 10) {
        clientsEstimations.push(Number(estimation));
    }
}

for (let i = 0; i < 5; i++) {
    askClientToGiveEstimation();
}

let goodEstimations = clientsEstimations.filter(estimation => estimation > 5).length;
let notGoodEstimations = clientsEstimations.filter(estimation => estimation <= 5).length;

alert(`Всего положительных оценок: ${goodEstimations}; Всего отрицательных оценок: ${notGoodEstimations}`);

let numbers = [1, 2, 3, 4, 5, 6, 7];

let sumFor = 0;
for (let i = 0; i < numbers.length; i++) {
    sumFor += Math.pow(numbers[i], 3);
}
console.log(sumFor);

let sumForOf = 0;
for (let num of numbers) {
    sumForOf += Math.pow(num, 3);
}
console.log(sumForOf);

let sumForEach = 0;
numbers.forEach(num => {
    sumForEach += Math.pow(num, 3);
});
console.log(sumForEach);

const sumReduce = numbers.reduce((acc, num) => acc + Math.pow(num, 3), 0);
console.log(sumReduce);
