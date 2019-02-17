function sumSeconds(input) {
    let firstRacerSec = Number(input[0]);
    let secondRacerSec = Number(input[1]);
    let thirdRacerSec = Number(input[2]);

    let totalTime = firstRacerSec + secondRacerSec + thirdRacerSec;

    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}
