function gettingScholarship(input) {
    let income = Number(input[0]);
    let average = Number(input[1]);
    let minWage = Number(input[2]);

    let social = 0;
    let excellent = 0;

    if (income < minWage && average > 4.5) {
        social = 0.35 * minWage;

    } 
    
    if (average >= 5.5) {
        excellent = average * 25;

    } 
    if (social !== 0 && social > excellent) {
        console.log(`You get a Social scholarship ${Math.floor(social)} BGN`);
        
    }
    else if (excellent !== 0 && excellent >= social) {
        console.log(`You get a scholarship for excellent results ${Math.floor(excellent)} BGN`);
        
    } else {
        console.log("You cannot get a scholarship!");
        
    }
}

