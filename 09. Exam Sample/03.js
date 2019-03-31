function solve(input) {
    let kind = input.shift();
    let restaurant = input.shift();
    let count = Number(input.shift());
    let order = input.shift();

    let price = 0;
    let sum = 0;

    switch (restaurant) {
        case "Sushi Zone":
            if (kind == "sashimi") {
                price = 4.99;
            } else if (kind == "maki") {
                price = 5.29;
            } else if (kind == "uramaki") {
                price = 5.99;
            } else if (kind == "temaki") {
                price = 4.29;
            }
            break;
        case "Sushi Time":
            if (kind == "sashimi") {
                price = 5.49;
            } else if (kind == "maki") {
                price = 4.69;
            } else if (kind == "uramaki") {
                price = 4.49;
            } else if (kind == "temaki") {
                price = 5.19;
            }
            break;
        case "Sushi Bar":
            if (kind == "sashimi") {
                price = 5.25;
            } else if (kind == "maki") {
                price = 5.55;
            } else if (kind == "uramaki") {
                price = 6.25;
            } else if (kind == "temaki") {
                price = 4.75;
            }
            break;
        case "Asian Pub":
            if (kind == "sashimi") {
                price = 4.50;
            } else if (kind == "maki") {
                price = 4.80;
            } else if (kind == "uramaki") {
                price = 5.50;
            } else if (kind == "temaki") {
                price = 5.50;
            }
            break;
        default:
            console.log(`${restaurant} is invalid restaurant!`)
            break;
    }

    sum = price * count;

    if (order == 'Y' && sum != 0) {
        sum += (20/100) * sum;
        console.log(`Total price: ${Math.ceil(sum)} lv.`)
    } else if (order == 'N' && sum != 0) {
        console.log(`Total price: ${Math.ceil(sum)} lv.`)
    }
}

solve([
    'maki',
'Sushi Zone',
4,
'Y'

])