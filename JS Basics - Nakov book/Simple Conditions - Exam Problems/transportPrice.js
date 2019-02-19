function transportPrice([distance, dayOrNight]) {
    
    //Автобус. Дневна / нощна тарифа: 0.09 лв./км. Може да се използва за разстояния минимум 20 км.
    //Влак. Дневна / нощна тарифа: 0.06 лв./км. Може да се използва за разстояния минимум 100 км.
    
    distance = Number(distance);

    let price = 0;
    let taxiRate = 0;

    if (dayOrNight === "day") {
        taxiRate = 0.79;
    } else {
        taxiRate = 0.90;
    }
    
    if (distance < 20) {
        price = 0.70 + (distance * taxiRate);
    } else if (distance < 100) {
        price = 0.09 * distance;
    } else {
        price = 0.06 * distance;
    }
    console.log(price);
    
}
