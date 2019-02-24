function timeAfter15min(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);
    let timeInMins = hour * 60 + minutes + 15;  

    let finalHour = Math.floor(timeInMins / 60);

    if (finalHour >= 24) {
        finalHour -= 24;
    }

    let finalMins = timeInMins % 60;

    if (finalMins < 10) {
        console.log(`${finalHour}:0${finalMins}`);
    } else {
        console.log(`${finalHour}:${finalMins}`);

    }
}
