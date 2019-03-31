function solve(input) {
    let countPassagers = Number(input.shift());
    let countStops = Number(input.shift());

    let people = 0;

    for (let i = 1; i <= countStops; i++) {
        let down = Number(input.shift());
        let up = Number(input.shift());

        if (i == 1) {
            people = countPassagers - down + up + 2;
            
        } else {
            if (i % 2 != 0) {
                people = people - down + up + 2;
            } else {
                people = people - down + up - 2;
            }

        }


    }

    console.log(`The final number of passengers is : ${people}`);
    
}

solve([
    17,
3,
6,
7,
8,
9,
3,
4


])