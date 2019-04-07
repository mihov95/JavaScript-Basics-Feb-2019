function solve(input) {
    let movieBudget = Number(input.shift());
    let statsCount = Number(input.shift());
    let statWearPrice = Number(input.shift());
    let wearMoney = 0;

    let decorMoney = movieBudget * 10/100;

    if (statsCount > 150) {
        wearMoney = statsCount * statWearPrice;
        wearMoney -= 10 / 100 * wearMoney;
    } else {
        wearMoney = statsCount * statWearPrice;

    }

    let sumForMovie = decorMoney + wearMoney;

    let diff = Math.abs(movieBudget - sumForMovie);

    if (sumForMovie > movieBudget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
        
    } else if (sumForMovie <= movieBudget) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`); 
    }
}

solve([15437.62, 186, 57.99]);