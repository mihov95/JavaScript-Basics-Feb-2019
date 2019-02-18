function swimmingTime(input) {
    let record = Number(input[0]); // sec
    let distance = Number(input[1]); // metres
    let swimTime = Number(input[2]); // in sec for 1 m

    // water slows him every 15m. -> result Math.floor()
    // to do -> calculate swimming time and difference with record [.toFixed(2)]

    let time = distance * swimTime;
    let slowTime = Math.floor(distance / 15) * 12.5;
    let allTime = time + slowTime;

    if (record <= allTime) {
        let diff = allTime - record;
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
        
    } else {
        console.log(`Yes, he succeeded! The new world record is ${allTime.toFixed(2)} seconds.`);
        
    }
}

swimmingTime([
    55555.67,
3017,
5.03

]);