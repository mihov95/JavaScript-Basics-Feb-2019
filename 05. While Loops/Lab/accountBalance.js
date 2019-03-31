function accBalance(input) {
    let countIncome = Number(input.shift());

    let transactions = 1;
    let sumIncome = 0;

    while (transactions <= countIncome) {
        let income = Number(input.shift());

        if (income < 0) {
            console.log("Invalid operation!");
            break;
        } else {
            sumIncome += income;
            console.log(`Increase: ${income.toFixed(2)}`);
        }

        transactions++;
    }

    console.log(`Total: ${sumIncome.toFixed(2)}`);

}

accBalance([5,
    120,
    45.55,
    -150]);