function newHouse(input) {
    let flower = input[0];
    let quantityFlower = Number(input[1]);
    let budget = Number(input[2]);

    let sum = 0;

    if (flower == "Roses") {
        sum = quantityFlower * 5.00;
        if (quantityFlower > 80) {
            sum -= 0.1 * sum;
        }
    } else if (flower == "Dahlias") {
        sum = quantityFlower * 3.80;
        if (quantityFlower > 90) {
            sum -= 0.15 * sum;
        }
    } else if (flower == "Tulips") {
        sum = quantityFlower * 2.80;
        if (quantityFlower > 80) {
            sum -= 0.15 * sum;
        }
    } else if (flower == "Narcissus") {
        sum = quantityFlower * 3.00;
        if (quantityFlower < 120) {
            sum += 0.15 * sum;
        }
    } else if (flower == "Gladiolus") {
        sum = quantityFlower * 2.50;
        if (quantityFlower < 80) {
            sum += 0.20 * sum;
        }
    }

    let difference = Math.abs(budget - sum);

    if (budget < sum) {
        console.log(`Not enough money, you need ${difference.toFixed(2)} leva more.`);
        
    } else {
        console.log(`Hey, you have a great garden with ${quantityFlower} ${flower} and ${difference.toFixed(2)} leva left.`);
        
    }
}
