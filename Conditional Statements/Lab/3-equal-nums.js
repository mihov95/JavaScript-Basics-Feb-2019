function isEqual(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let num3 = Number(input[2]);

    if (num1 == num2 && num2 == num3 && num1 == num3 ) {
        console.log("yes");
    }
    else{
        console.log("no");
    }
}

