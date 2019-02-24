function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);

    let sum = 0;

    if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
        if (fruit == "banana") {
            sum = 2.50 * quantity;
        } else if (fruit == "apple") {
            sum = 1.20 * quantity;
        } else if (fruit == "orange") {
            sum = 0.85 * quantity;
        } else if (fruit == "grapefruit") {
            sum = 1.45 * quantity;
        } else if (fruit == "kiwi") {
            sum = 2.70 * quantity;
        } else if (fruit == "pineapple") {
            sum = 5.50 * quantity;
        } else if (fruit == "grapes") {
            sum = 3.85 * quantity;
        } else {
            console.log("error");
            
        }
    } else if (day == "Saturday" || day == "Sunday") {
        if (fruit == "banana") {
            sum = 2.70 * quantity;
        } else if (fruit == "apple") {
            sum = 1.25 * quantity;
        } else if (fruit == "orange") {
            sum = 0.90 * quantity;
        } else if (fruit == "grapefruit") {
            sum = 1.60 * quantity;
        } else if (fruit == "kiwi") {
            sum = 3.00 * quantity;
        } else if (fruit == "pineapple") {
            sum = 5.60 * quantity;
        } else if (fruit == "grapes") {
            sum = 4.20 * quantity;
        } else {
            console.log("error");
            
        }
    } else {
        console.log("error");
        
    }
    if (sum != 0) {
        console.log(sum.toFixed(2));
    }
    
}
