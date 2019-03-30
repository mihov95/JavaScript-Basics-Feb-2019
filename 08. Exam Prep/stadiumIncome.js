function stadiumIncome(input) {
    let countSectors = Number(input.shift());
    let stadiumCapacity = Number(input.shift());
    let ticketPrice = Number(input.shift());

    let income = stadiumCapacity * ticketPrice;
    let sectorIncome = income / countSectors;

    let charityMoney = (income - (sectorIncome * 0.75)) / 8;

    console.log(`Total income - ${income.toFixed(2)} BGN`);
    console.log(`Money for charity - ${charityMoney.toFixed(2)} BGN`);
}

stadiumIncome([4,5000,5])