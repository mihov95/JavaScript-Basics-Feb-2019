function birthday(input) {
    let lenght = Number(input[0]);
    let widght = Number(input[1]);
    let h = Number(input[2]);
    let percent = Number(input[3]);

    let volume = lenght * widght * h;
    let allLitres = volume * 0.001;
    percent = percent * 0.01;
    let result = allLitres * (1 - percent);

    console.log(result.toFixed(3));

}
