function sumNumbers(input) {
    let n = Number(input.shift());
    let sum = 0;

    for (let index = 0; index < n; index++) {
        let currNumber = Number(input[index]);
        
        sum += currNumber;
    }

    console.log(sum);
    
}

sumNumbers([
    2,10,20
]);