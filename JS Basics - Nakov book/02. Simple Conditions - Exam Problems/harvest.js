function harvest(input) {
    let wineArea = Number(input[0]);
    let grapePerSqM = Number(input[1]);
    let littreWineNeed = Number(input[2]);
    let workers = Number(input[3]);

    //area - 40/100 * area = forMakingWine
    //1littWine need 2.5kg grape
    
    let grapesKg = 0.4 * (wineArea * grapePerSqM);
    let wineLitres = grapesKg / 2.5;


    if (wineLitres >= littreWineNeed) {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wineLitres)} liters.`);

        let diff = wineLitres - littreWineNeed;
        let winePerWorker = diff / workers;
        console.log(`${Math.ceil(diff)} liters left -> ${Math.ceil(winePerWorker)} liters per person.`);
        
        
    } else {
        let diff = littreWineNeed - wineLitres;
        console.log(`It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`);
        
    }
    
}

harvest([
    1020,
1.5,
425,
4
]);