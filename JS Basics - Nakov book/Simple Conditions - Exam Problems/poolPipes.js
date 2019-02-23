function poolPipes(input) {
    let volume = Number(input[0]);
    let pipe1 = Number(input[1]);
    let pipe2 = Number(input[2]);
    let hours = Number(input[3]);

    let waterFull = (pipe1 + pipe2) * hours;
    let percentFull = Math.trunc(waterFull / volume * 100);
    let pipe1Full = Math.trunc(hours * pipe1 / waterFull * 100);
    let pipe2Full = Math.trunc(hours * pipe2 / waterFull * 100);

    if (volume >= waterFull) {
        console.log(`The pool is ${percentFull}% full. Pipe 1: ${pipe1Full}%. Pipe 2: ${pipe2Full}%`);

    } else {
        let diff = waterFull - volume;
        console.log(`For ${hours} hours the pool overflows with ${diff} litres.`);

    }
}
