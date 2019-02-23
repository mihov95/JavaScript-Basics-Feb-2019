function catTom(restDays) {
    restDays = Number(restDays);
    const normOfTom = 30000;
    //workDays = 63min/day; restDays = 127min/day

    let workDays = 365 - restDays;
    let playTime = workDays * 63 + restDays * 127; //mins
    let difference = Math.abs(playTime - normOfTom);
    let hours = difference / 60;
    let minutes = difference % 60;

    if (normOfTom < playTime) {
        console.log("Tom will run away");
        console.log(`${Math.floor(hours)} hours and ${Math.floor(minutes)} minutes more for play`);
    } else {
        console.log("Tom sleeps well");
        console.log(`${Math.floor(hours)} hours and ${Math.floor(minutes)} minutes less for play`);
    }
}
