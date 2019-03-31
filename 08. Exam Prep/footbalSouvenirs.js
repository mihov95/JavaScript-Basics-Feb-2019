function footballSouvenirs(input) {
    let team = input.shift();
    let kind = input.shift();
    let countSouvenirs = Number(input.shift());

    let price = 0;
    let result = 0;

    switch (team) {
        case "Argentina":
            if (kind == "flags") {
                price = 3.25;
            } else if (kind == "caps") {
                price = 7.20;
            } else if (kind == "posters") {
                price = 5.10;
            } else if (kind == "stickers") {
                price = 1.25;
            } else {
                console.log("Invalid stock!")
            }
            break;
        case "Brazil":
            if (kind == "flags") {
                price = 4.20;
            } else if (kind == "caps") {
                price = 8.50;
            } else if (kind == "posters") {
                price = 5.35;
            } else if (kind == "stickers") {
                price = 1.20;
            } else {
                console.log("Invalid stock!")
            }
            break;
        case "Croatia":
            if (kind == "flags") {
                price = 2.75;
            } else if (kind == "caps") {
                price = 6.90;
            } else if (kind == "posters") {
                price = 4.95;
            } else if (kind == "stickers") {
                price = 1.10;
            } else {
                console.log("Invalid stock!")
            }
            break;
        case "Denmark":
            if (kind == "flags") {
                price = 3.10;
            } else if (kind == "caps") {
                price = 6.50;
            } else if (kind == "posters") {
                price = 4.80;
            } else if (kind == "stickers") {
                price = 0.90;
            } else {
                console.log("Invalid stock!")
            }
            break;
        default:
            console.log("Invalid country!");
            break;
    }

    result = countSouvenirs * price;
    if (result != 0) {
        
        console.log(`Pepi bought ${countSouvenirs} ${kind} of ${team} for ${result.toFixed(2)} lv.`)
    }
}

footballSouvenirs(['Brazil', 'stickers', 5])