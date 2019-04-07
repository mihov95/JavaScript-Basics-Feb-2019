function solve(input) {
    let voucher = Number(input.shift());

    let tickets = 0;
    let others = 0;
    let isStopped = false;

    

    while (true) {
        let product = input.shift();
        if (product == undefined) {
            break;
        }
        let sum = 0;
        let lenght = product.length;

        if (product == "End") {
            isStopped = true;
            break;
        }

        if (lenght > 8) {
            sum = product.charCodeAt(0) + product.charCodeAt(1);

            if (voucher >= sum) {
                tickets++;
                voucher -= sum;
            } else if (sum > voucher) {
                console.log(tickets);
                console.log(others);
            }

        } else if (lenght <= 8) {
            sum = product.charCodeAt(0);

            if (voucher >= sum) {
                others++;
                voucher -= sum;
            } else if (sum > voucher) {
                console.log(tickets);
                console.log(others);
            }
        }
    }

    if (isStopped) {
        console.log(tickets);
                console.log(others);
    }
}

solve([1500, 'Avengers: Endgame', 'Bohemian Rhapsody', 'Deadpool 2', 'End']);