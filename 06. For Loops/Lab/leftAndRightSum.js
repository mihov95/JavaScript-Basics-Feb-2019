function leftAndRightSum(input) {
    let n = Number(input.shift());
    let leftSum = 0;
    let rightSum = 0;

    for (let index = 0; index < n; index++) {
        let currNum = Number(input.shift());
        leftSum+=currNum;
    }

    for (let index = 0; index < n; index++) {
        let currNum = Number(input.shift());
        rightSum+=currNum;
        
    }

    let diff = Math.abs(leftSum - rightSum);
    
    if (leftSum == rightSum) {
        console.log(`Yes, sum = ${leftSum}`);
        
    } else {
        console.log(`No, diff = ${diff}`);
        
    }
}

leftAndRightSum([2,
    90,
    9,
    50,
    50
    ])