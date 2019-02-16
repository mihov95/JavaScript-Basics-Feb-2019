function toyShop(input) {
    const puzzlePrice = 2.60;
    const speakingDollPrice = 3.00;
    const bearPrice = 4.10;
    const minionPrice = 8.20;
    const truckPrice = 2.00;

    let excursionPrice = Number(input[0]);
    let puzzleQuantity = Number(input[1]);
    let speakingDollsQuantity = Number(input[2]);
    let bearsQuantity = Number(input[3]);
    let minionsQuantity = Number(input[4]);
    let trucksQuantity = Number(input[5]);

    let sum = puzzlePrice * puzzleQuantity +
        speakingDollPrice * speakingDollsQuantity +
        bearPrice * bearsQuantity +
        minionPrice * minionsQuantity +
        truckPrice * trucksQuantity;


    let totalQuantity = puzzleQuantity +
        speakingDollsQuantity +
        bearsQuantity +
        minionsQuantity +
        trucksQuantity;

    let discount = sum * 0.25; 

    if (totalQuantity >= 50) {
        sum -= discount;

    }

    sum -= sum * (10 / 100);

    let moneyNeeded = Math.abs(excursionPrice - sum);
    let moneyLeft = Math.abs(excursionPrice - sum);


    if (excursionPrice <= sum) {
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);

    }

}
