function tradeCommisions(input) {
    let city = input[0];
    let sales = Number(input[1]);

    let commision = -1;

    switch (city) {
        case "Sofia":
            if (sales >= 0 && sales <= 500) {
                commision = sales * 0.05;
            } else if (sales > 500 && sales <= 1000) {
                commision = sales * 0.07;
                
            } else if (sales > 1000 && sales <= 10000) {
                commision = sales * 0.08;
                
            } else if (sales > 10000) {
                commision = sales * 0.12;
                
            }
            break;
        case "Varna":
            if (sales >= 0 && sales <= 500) {
                commision = sales * 0.045;
            } else if (sales > 500 && sales <= 1000) {
                commision = sales * 0.075;
                
            } else if (sales > 1000 && sales <= 10000) {
                commision = sales * 0.1;
                
            } else if (sales > 10000) {
                commision = sales * 0.13;
                
            }
            break;
        case "Plovdiv":
            if (sales >= 0 && sales <= 500) {
                commision = sales * 0.055;
            } else if (sales > 500 && sales <= 1000) {
                commision = sales * 0.08;
                
            } else if (sales > 1000 && sales <= 10000) {
                commision = sales * 0.12;
                
            } else if (sales > 10000) {
                commision = sales * 0.145;
                
            }           
            break;
    
        default:
            console.log("error");
            break;
    }

    if (commision < 0) {
        console.log("error");
        
    } else {
        console.log(commision.toFixed(2));

    }

}
