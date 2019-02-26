function volleyball(input) {
    let year = input[0];
    let holiday = Number(input[1]);
    let weekends = Number(input[2]);

    let weekendsInSofia = 48 - weekends;
    weekendsInSofia *= (3/4);

    let holidayGames = holiday * (2/3);

    let allGames = weekendsInSofia + weekends + holidayGames;

    if (year == "leap") {
        allGames += allGames * 0.15;
    }

    console.log(Math.floor(allGames));
}
