function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let studioPrice = 0.0;
    let apartmentPrice = 0.0;
    let sum = 0.0;
    let discount = 0.0;

    if (month == "May" || month == "October") {
        studioPrice = 50 * nights;
        apartmentPrice = 65 * nights;
        if (nights > 7 && nights < 14) {
            studioPrice -= (0.05 * studioPrice);
        } else if (nights > 14) {
            studioPrice -= 0.3 * studioPrice;
            
        }
    } else if (month == "June" || month == "September") {
        studioPrice = 75.20 * nights;
        apartmentPrice = 68.70 * nights;
        if (nights > 14) {
            studioPrice -= 0.2 * studioPrice;
        }
    } else if (month == "July" || month == "August") {
        studioPrice = 76 * nights;
        apartmentPrice = 77 * nights;
    }

    if (nights > 14) {
        apartmentPrice -= 0.1 * apartmentPrice;
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
    
}

hotelRoom(['May', 15])