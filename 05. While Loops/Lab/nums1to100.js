function nums1to100(input) {
    let number = Number(input.shift());

    while (number < 1 || number > 100) {
        console.log("Invalid number!");
        number = Number(input.shift());
    }

    console.log(`The number is: ${number}`);
}

nums1to100([105, 0, -200, 77]);