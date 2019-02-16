function getDancers(data) {
    let hallLenght = Number(data[0]);
    let hallWidght = Number(data[1]);
    let wardrobeSide = Number(data[2]);

    let hallAreaCM = (hallLenght * 100) * (hallWidght * 100);
    wardrobeSide *= 100;
    let wardrobeArea = Math.pow(wardrobeSide, 2);
    let benchArea = hallAreaCM / 10;
    
    let freeArea = hallAreaCM - wardrobeArea - benchArea;

    let dancersCount = freeArea / (40 + 7000);

    console.log(Math.floor(dancersCount));
}
