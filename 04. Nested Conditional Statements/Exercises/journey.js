function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination;
    let holidayType;

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season == "summer") {
            budget *= 0.3;
            holidayType = "Camp";
        } else if (season == "winter") {
            budget *= 0.7;
            holidayType = "Hotel";
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season == "summer") {
            budget *= 0.4;
            holidayType = "Camp";
        } else if (season == "winter") {
            budget *= 0.8;
            holidayType = "Hotel";
        }
    } else if (budget > 1000) {
            destination = "Europe";
            season = "winter";
            holidayType = "Hotel";
            budget *= 0.9;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${holidayType} - ${budget.toFixed(2)}`);
    
}

journey([50,"summer"])