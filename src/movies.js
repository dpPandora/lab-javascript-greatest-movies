// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(function(movie) {
        return movie.director;
    })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return (moviesArray.filter(function(movie) {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
    })).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;
    var num = moviesArray.reduce(function(sum, current) {
        if (current.score === undefined) return sum;
        return sum + current.score;
    }, 0);
    num /= moviesArray.length;
  
    num = Math.round(num * 100) / 100;

    return num;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0) return 0;
    var red = 0;

    var num = moviesArray.reduce(function(sum, current) {
        if (current.score === undefined) return sum;
        if (!current.genre.includes("Drama")) {
            red++;
            return sum;
        }
        return sum + current.score;
    }, 0);
    num /= moviesArray.length - red;
    
    num = Math.round(num * 100) / 100;
    if (red === moviesArray.length) return 0;
    
    return num;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    var movies = Array.from(moviesArray);

    try {
        movies.sort((a, b) =>{
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      }
      else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      }
      else {
        return 0;
      }
    });
    }
    catch {
      
    }

    movies.sort((a, b) =>{return a.year - b.year});

    return movies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    var movies = Array.from(moviesArray);


    movies.sort((a, b) =>{
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
        }
        else if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1;
        }
        else {
          return 0;
        }
      });

    var titles = [];

    for (var i = 0; i < movies.length && i < 20; i++) {
        titles.push(movies[i].title);
    }

    return titles;
}

//i really would do the bonus but i am just so freaking tired T~T

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
