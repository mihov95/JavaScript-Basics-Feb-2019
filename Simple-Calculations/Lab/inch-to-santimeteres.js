function converter(input) {
    let inch = Number(input.shift());
    let cm = inch * 2.54;

    console.log(cm.toFixed(2));
}
