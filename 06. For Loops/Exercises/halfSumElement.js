function halfSumElement(input) {
    let n = Number(input.shift());
    let sum = 0;
    let currNum = 0;

    for (let i = 0; i < n; i++) {
        currNum = Number(input.shift());
        sum += currNum;

        
    }
            if (currNum == (sum / 2)) {
                console.log(`Yes`);
                console.log(`Sum = ${currNum}`);
                
            } else {
                console.log(`No`);
                let diff = currNum - sum;
                console.log(`Diff = ${diff}`);
    
                
            }
}

halfSumElement([
    3,
5,
5,
1

])