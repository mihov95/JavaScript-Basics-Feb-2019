function getMoneyNeeded(data) {
    let whiskeyPrice = Number(data[0]);
    let beerLitres = Number(data[1]);
    let wineLitres = Number(data[2]);
    let rakijaLitres = Number(data[3]);
    let whiskeyLitres = Number(data[4]);
    
    let rakijaPrice = whiskeyPrice / 2;
    let winePrice = rakijaPrice - (40/100 * rakijaPrice);
    let beerPrice = rakijaPrice - (80/100 * rakijaPrice);

    let allSum = whiskeyPrice * whiskeyLitres +
        beerPrice * beerLitres +
        rakijaPrice * rakijaLitres + 
        winePrice * wineLitres;
    
    console.log(allSum.toFixed(2))
}
