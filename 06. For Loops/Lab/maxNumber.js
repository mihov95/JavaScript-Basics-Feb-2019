function maxNumber(input) {
    let n = Number(input.shift());
    let max = Number.MIN_SAFE_INTEGER;

    for (let index = 0; index < n; index++) {
        let currNumber = Number(input.shift());

        if (currNumber > max) {
            max = currNumber;
        }
        
    }

    console.log(max);
    
}

maxNumber([3,100,99,150])