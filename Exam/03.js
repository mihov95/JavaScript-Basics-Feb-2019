function solve(input) {
    let movie = input.shift();
    let hall = input.shift();
    let ticketsCount = Number(input.shift());

    let result = 0;

    switch (movie) {
        case "A Star Is Born":
            if (hall == "normal") {
                result = 7.50 * ticketsCount;
            } else if (hall == "luxury") {
                result = 10.50 * ticketsCount;
                
            } else if (hall == "ultra luxury") {
                result = 13.50 * ticketsCount;
                
            }
            break;
        case "Bohemian Rhapsody":
            if (hall == "normal") {
                result = 7.35 * ticketsCount;
            } else if (hall == "luxury") {
                result = 9.45 * ticketsCount;
                
            } else if (hall == "ultra luxury") {
                result = 12.75 * ticketsCount;
                
            }
            break;
        case "Green Book":
            if (hall == "normal") {
                result = 8.15 * ticketsCount;
            } else if (hall == "luxury") {
                result = 10.25 * ticketsCount;
                
            } else if (hall == "ultra luxury") {
                result = 13.25 * ticketsCount;
                
            }
            break;
        case "The Favourite":
            if (hall == "normal") {
                result = 8.75 * ticketsCount;
            } else if (hall == "luxury") {
                result = 11.55 * ticketsCount;
                
            } else if (hall == "ultra luxury") {
                result = 13.95 * ticketsCount;
                
            }
            break;
    }

    console.log(`${movie} -> ${result.toFixed(2)} lv.`)
}

solve(['A Star Is Born', 'luxury', 42]);