function cinema(input) {
    let projection = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let sum = 0.0;

    switch (projection) {
        case "Premiere":
           sum = (rows * columns) * 12.00; 
            break;
        case "Normal":
            sum = (rows * columns) * 7.50;
                break;
        case "Discount":
            sum = (rows * columns) * 5.00;
            break;
    }

    console.log(`${sum.toFixed(2)} leva`);
    
}

