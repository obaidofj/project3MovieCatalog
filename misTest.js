function isValidYear(year) {
    // for any year between 1800 to (current year) 2023+5 as there are films scheduals in future / some times
  
    var currentYear = new Date().getFullYear();
    var maxYear = currentYear + 5;
    // console.log("^(18[0-9][0-9]|19[0-9][0-9]|20[0-" + maxYear.toString().slice(-2) + "])$");
    // let yearRegex=/^(18[0-9][0-9]|19[0-9][0-9]|20[0-28])$/
    //console.log(maxYear.toString().slice(-2,-1));
    var yearRegex = new RegExp(
        "^(18[0-9][0-9]|19[0-9][0-9]|20[0-"+ maxYear.toString().slice(-2,-1) +"]" +
        "[0-" + maxYear.toString().slice(-1) + "]|20[0-1][0-9])$"
      );
  
    if (yearRegex.test(year)) {
      return true;
    } else {
      return false;
    }
  }

  // console.log(isValidYear(2027));
 
  let xx={
    "id": 18,
    "original_server_film_id": 758323,
    "title": "The Pope's Exorcist",
    "director": "-",
    "about": "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
    "release_year": 2023,
    "genre": ""
};

console.log( xx.genre.split(','));