function solve(input) {
    let widght = Number(input.shift());
    let lenght = Number(input.shift());
    let height = Number(input.shift());
    let astroHeight = Number(input.shift());

    let volume = widght * lenght * height;
    let roomVolume = (astroHeight + 0.40) * 2 * 2;
    let astronauts = Math.floor(volume / roomVolume);

    if (astronauts > 3 && astronauts < 10) {
        console.log(`The spacecraft holds ${astronauts} astronauts.`);
        
    } else if (astronauts < 3) {
        console.log(`The spacecraft is too small.`);
        
    } else if (astronauts > 10) {
        console.log(`The spacecraft is too big.`);
        
    }
}