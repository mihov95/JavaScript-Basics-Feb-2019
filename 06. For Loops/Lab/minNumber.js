function minNumber(input) {
    let n = Number(input.shift());
    let min = Number.MAX_SAFE_INTEGER;

    for (let index = 0; index < n; index++) {
        let currNum = Number(input.shift());

        if (currNum < min) {
            min = currNum;
        }
        
    }

    console.log(min);
    
}

minNumber([2,100,99]);