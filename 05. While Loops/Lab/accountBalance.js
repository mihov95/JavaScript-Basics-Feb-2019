function accBalance(input) {
    let countIncome = Number(input.shift());

    let transactions = 1;
    let sumIncome = 0;

    while (transactions <= countIncome) {
        let income = Number(input.shift());

        sumIncome += income;

        if (income < 0) {
            console.log("Invalid operation!");
        } else {
            console.log(`Increase: ${income}`);
        }

        transactions++;
    }

    console.log(`Total: ${sumIncome.toFixed(2)}`);

}

accBalance([3, 5.51, 69.42, 100]);