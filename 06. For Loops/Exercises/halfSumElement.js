function halfSumElement(input) {
    let n = Number(input.shift());
    let sum = 0;
    let currNum = 0;
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < n; i++) {
        currNum = Number(input.shift());
        sum += currNum;
        
        if (currNum > max) {
            max = currNum;
        }  
    }

    if (max == (sum / 2)) {
        console.log(`Yes`);
        console.log(`Sum = ${max}`);
        
    } else {
        sum -= max;
        console.log(`No`);
        let diff = max - sum;
        console.log(`Diff = ${Math.abs(diff)}`);
    
    }
}
