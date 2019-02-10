function getMoney(data) {
    let days = Number(data[0]);
    let bakers = Number(data[1]);
    let cakes = Number(data[2]);
    let waffles = Number(data[3]);
    let pancakes = Number(data[4]);

    let cakesPrice = cakes * 45.00;
    let wafflesPrice = waffles * 5.80;
    let pancakesPrice = pancakes * 3.20;

    let sum = (cakesPrice + wafflesPrice + pancakesPrice) * days * bakers;
    let totalSum = sum - (sum / 8);

    console.log(totalSum.toFixed(2))

}