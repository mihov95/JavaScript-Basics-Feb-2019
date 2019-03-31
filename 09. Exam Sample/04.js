function solve(input) {
    let sum = Number(input.shift());
    let couvert = 0;
    let allMoney = 0;
    let guestCounter = 0;

    while (true) {
        let countGroup = input.shift();
        
        if (countGroup == "The restaurant is full") {
            break;
        }

        countGroup = Number(countGroup);

        let groupMoney = 0;
        guestCounter += countGroup;



        if (countGroup < 5) {
            couvert = 100;
        } else if (countGroup >= 5) {
            couvert = 70;
        }

        groupMoney = countGroup * couvert;
        allMoney += groupMoney;

    }

    let diff = Math.abs(allMoney - sum);

    if (allMoney >= sum) {
        console.log(`You have ${guestCounter} guests and ${diff} leva left.`)
    } else {
        console.log(`You have ${guestCounter} guests and ${allMoney} leva income, but no singer.`)
    }
}

solve([3200,
    5,
    12,
    6,
    6,
    12,
    'The restaurant is full'
    ])