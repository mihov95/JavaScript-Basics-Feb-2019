function ticketCombination(input) {
    let combinationNumber = Number(input.shift());

    let combinations = 0;
    let sum = 0;

    for (let i = "B".charCodeAt(); i <= "L".charCodeAt(); i++) {
        for (let j = "f".charCodeAt(); j >= "a".charCodeAt(); j--) {
            for (let k = "A".charCodeAt(); k <= "C".charCodeAt(); k++) {
                for (let l = 1; l <= 10; l++) {
                    for (let m = 10; m >= 1; m--) {
                        if (i % 2 == 0) {
                            combinations++;
                        }

                        if (combinations == combinationNumber) {
                            sum = i + j + k + l + m;
                            console.log(`Ticket combination: ${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(k)}${l}${m}`)
                            console.log(`Prize: ${sum} lv.`)
                        }
                        
                    }
                    
                }
                
            }
            
        }
        
    }
}

ticketCombination([17])