function choreography(input) {
    let steps = Number(input[0]);
    let dancers = Number(input[1]);
    let days = Number(input[2]);
    
    //all dancers can learn no more than 13% per day
    //stepsPerDayPercent -> Math.ceil();
    
    let stepsPerDayPercent = ((steps / days) / steps) * 100;
    stepsPerDayPercent = Math.ceil(stepsPerDayPercent);

    let stepsPerDancerPercent = stepsPerDayPercent / dancers;
    
    if (stepsPerDayPercent < 13) {
        console.log(`Yes, they will succeed in that goal! ${stepsPerDancerPercent.toFixed(2)}%.`);
        
    } else {
        console.log(`No, they will not succeed in that goal! Required ${stepsPerDancerPercent.toFixed(2)}% steps to be learned per day.`);
        
    }
    
}

choreography([
    55555,
    30,
    7
    
])