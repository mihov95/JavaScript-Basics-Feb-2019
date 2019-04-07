function solve(input) {
    let rent = Number(input.shift());

    let statuetkiPrice= rent - 30 / 100 * rent;
    let cateringPrice = statuetkiPrice - 15 / 100 * statuetkiPrice;
    let soundPrice = cateringPrice / 2;

    let sum = rent + statuetkiPrice + cateringPrice + soundPrice;

    console.log(sum.toFixed(2));
    
}

solve([3500])