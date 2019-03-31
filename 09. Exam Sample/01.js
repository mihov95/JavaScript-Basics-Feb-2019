function solve(input) {
    let foodMoney = Number(input.shift());
    let souvenirsMoney = Number(input.shift());
    let hotelMoney = Number(input.shift());
    
    let fuelNeeded = 420 / 100 * 7;
    let fuelMoney = fuelNeeded * 1.85;

    let foodAndSouvenirs = foodMoney * 3 + souvenirsMoney * 3;

    let firstDay = hotelMoney * 0.9;
    let secondDay = hotelMoney * 0.85;
    let thirdDay = hotelMoney * 0.8;

    let sum = fuelMoney + foodAndSouvenirs + firstDay + secondDay + thirdDay;

    console.log(`Money needed: ${sum.toFixed(2)}`);
}

solve([100, 50, 500])