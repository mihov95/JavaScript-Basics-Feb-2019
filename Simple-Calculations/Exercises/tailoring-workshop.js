function getPrice(data) {
    let tables = Number(data[0]);
    let tablesLenght = Number(data[1]);
    let tablesWidght = Number(data[2]);

    let tablesArea = tables * (tablesLenght + 2 * 0.30) * (tablesWidght + 2 * 0.30);
    let squareArea = tables * (tablesLenght / 2) * (tablesLenght /2);

    let usdPrice = tablesArea * 7 + squareArea * 9;
    let bgnPrice = usdPrice * 1.85;

    console.log(`${usdPrice.toFixed(2)} USD`)
    console.log(`${bgnPrice.toFixed(2)} BGN`)
}