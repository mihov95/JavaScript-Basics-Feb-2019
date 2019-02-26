function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermens = Number(input[2]);

    let rentPrice = 0;

    switch (season) {
        case "Spring":
            rentPrice = 3000;
            if (fishermens <= 6) {
                rentPrice -= 0.1 * rentPrice;
            } else if (fishermens > 7 && fishermens <= 11) {
                rentPrice -= 0.15 * rentPrice;
                
            } else if (fishermens > 12) {
                rentPrice -= 0.25 * rentPrice;
            }
            break;
        case "Summer":
        case "Autumn":
            rentPrice = 4200;
            if (fishermens <= 6) {
                rentPrice -= 0.1 * rentPrice;
            } else if (fishermens > 7 && fishermens <= 11) {
                rentPrice -= 0.15 * rentPrice;
                
            } else if (fishermens > 12) {
                rentPrice -= 0.25 * rentPrice;
            }
            break;
        case "Winter":
            rentPrice = 2600;
            if (fishermens <= 6) {
                rentPrice -= 0.1 * rentPrice;
            } else if (fishermens > 7 && fishermens <= 11) {
                rentPrice -= 0.15 * rentPrice;
                
            } else if (fishermens > 12) {
                rentPrice -= 0.25 * rentPrice;
            }
            break;
    }

    if (fishermens % 2 == 0 && season != "Autumn") {
                rentPrice -= 0.05 * rentPrice;
    }

    let difference = Math.abs(budget - rentPrice);

    if (budget >= rentPrice) {
        console.log(`Yes! You have ${difference.toFixed(2)} leva left.`);
        
    } else {
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`);
        
    }
}
