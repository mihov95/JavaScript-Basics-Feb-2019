function bonusScore(input) {
    let firstScore = Number(input[0]);
    let bonus = 0.0;

    if (firstScore <= 100) {
        bonus = 5;
    } if (firstScore > 100) {
        bonus = 0.2 * firstScore;
    } if (firstScore > 1000) {
        bonus = 0.1 * firstScore;
    } if (firstScore % 2 == 0) {
        bonus++;
    } else if (firstScore % 10 == 5) {
        bonus += 2;
    }
    
    console.log(bonus);
    console.log(firstScore + bonus);
}