// NEED FIX!

function onTimeForExam(input) {
    let examHour = Number(input[0]);
    let examMins = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMins= Number(input[3]);

    let examTimeMins = examHour * 60 + examMins;
    let arriveTimeMins = arriveHour * 60 + arriveMins;

    let finalTimeMins = Math.abs(arriveTimeMins - examTimeMins);

    let minutes = finalTimeMins % 60;
    let hours = Math.floor(finalTimeMins / 60);

    if (arriveTimeMins > examTimeMins) {
        console.log("Late");
        if (hours > 0) {
            if (minutes < 10) {
                
                console.log(`${hours}:0${minutes} minutes after the start`);
            } else {
                console.log(`${hours}:${minutes} minutes after the start`);
                
            }   
        } else {
            console.log(`${minutes} minutes after the start`);
               
        }
            
        
    } else if ((arriveTimeMins == examTimeMins) || arriveTimeMins <= examTimeMins - 30) {
        console.log("On time");
        console.log(`${minutes} minutes before the start`);
            
        
    } else if (examTimeMins > arriveTimeMins) {
        console.log("Early");
        if (hours > 0) {
            if (minutes < 10) {
                
                console.log(`${hours}:0${minutes} minutes before the start`);
            } else {
                console.log(`${hours}:${minutes} minutes before the start`);
                
            }   
        } else {
            console.log(`${minutes} minutes before the start`);
               
        }
        
    }
}

onTimeForExam([11,30,8,12]);