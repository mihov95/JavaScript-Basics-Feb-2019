function oddEvenSum(input) {
    let n = Number(input.shift());
    let odd = 0;
    let even = 0;

    for (let index = 1; index < n; index++) {
        let currNum = Number(input.shift());

        if (index % 2 == 0) {
            even += currNum;
        } else {
            odd += currNum;
        }
    }

    let diff = Math.abs(even - odd);

    if (diff == 0) {
        console.log("Yes");
        console.log(`Sum = ${odd}`);
        
    } else {
        console.log("No");
        console.log(`Diff = ${diff}`);
    }
}

oddEvenSum([
    4,
10,
50,
60,
20

])