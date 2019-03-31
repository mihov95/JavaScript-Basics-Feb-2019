function beerAndChips(input) {
    const beerPrice = 1.20;

    let name = input.shift();
    let budget = Number(input.shift());
    let countBeers = Number(input.shift());
    let countChips = Number(input.shift());

    let beerSum = countBeers * beerPrice;
    let chipsPrice = 0.45 * beerSum;
    let chipsSum = Math.ceil(chipsPrice * countChips);

    let allSum = chipsSum + beerSum;

    let diff = Math.abs(budget - allSum);

    if (budget >= allSum) {
        console.log(`George bought a snack and has ${diff.toFixed(2)} leva left.`);
        
    } else {
        console.log(`Valentin needs ${diff.toFixed(2)} more leva!`);
        
    }

}

beerAndChips(["George",
    10,
    2,
    3
    ])