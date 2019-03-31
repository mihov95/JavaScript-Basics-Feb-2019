function bestPlayer(input) {
    let isHatTrick = false;
    let winner = "";
    let max = -1;

    while (true) {
        let name = input.shift();
        if (name == "END") {
            break;
        }
        var countGoals = Number(input.shift());


        if (countGoals > max) {
            max = countGoals;
            winner = name;
        }

        if (countGoals >= 3) {
            isHatTrick = true;
        }
        
        if (countGoals >= 10) {
            break;
        }
    }

    console.log(`${winner} is the best player!`)
    if (isHatTrick) {
        console.log(`He has scored ${countGoals} goals and made a hat-trick !!!`);
        
    } else {
        console.log(`He has scored ${max} goals.`)
    }
}

bestPlayer(['Neymar',
    2,
    'Ronaldo',
    1,
    'Messi',
    3,
    'END'
    ])