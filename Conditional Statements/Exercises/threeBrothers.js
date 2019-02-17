function cleaningTime(input) {
    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);
    let fishingTime = Number(input[3]);

    let sum = 1 / (1 / first + 1 / second + 1 / third);
    sum += 0.15 * sum;
    
    let leftTime = null;

    console.log(`Cleaning time: ${sum.toFixed(2)}`);
    
    if (sum <= fishingTime) {
        leftTime = Math.floor(fishingTime - sum);
        console.log(`Yes, there is a surprise - time left -> ${leftTime} hours.`);
    } else {
        leftTime = Math.ceil(sum - fishingTime);
        console.log(`No, there isn't a surprise - shortage of time -> ${leftTime} hours.`);
        
    }
}
