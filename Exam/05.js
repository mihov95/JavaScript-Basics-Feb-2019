function solve(input) {
    let countMovies = Number(input.shift());

    let max = -1;
    let min = Number.MAX_SAFE_INTEGER;

    let ratingsSum = 0;
    let maxRatingName = "";
    let minRatingName = "";

    for (let i = 0; i < countMovies; i++) {
        let movieName = input.shift();
        let rating = Number(input.shift());
        ratingsSum += rating;
        

        if (rating > max) {
            max = rating;
            maxRatingName = movieName;
        }

        if (rating < min) {
            min = rating;
            minRatingName = movieName;
        }
    }

    let averageRating = ratingsSum / countMovies;

    console.log(`${maxRatingName} is with highest rating: ${max.toFixed(1)}`);
    console.log(`${minRatingName} is with lowest rating: ${min.toFixed(1)}`);
    console.log(`Average rating: ${averageRating.toFixed(1)}`);
    
}

solve([5, 'A Star is Born', 7.8, 'Creed 2', 7.3, 'Mary Poppins', 7.2, 'Vice', 7.2, 'Captain Marvel', 7.1]);