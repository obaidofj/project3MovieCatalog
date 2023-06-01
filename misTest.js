function isValidYear(year) {
    // for any year between 1800 to (current year) 2023+5 as there are films scheduals in future / some times
  
    var currentYear = new Date().getFullYear();
    var maxYear = currentYear + 5;
    // console.log("^(18[0-9][0-9]|19[0-9][0-9]|20[0-" + maxYear.toString().slice(-2) + "])$");
    // let yearRegex=/^(18[0-9][0-9]|19[0-9][0-9]|20[0-28])$/
    //console.log(maxYear.toString().slice(-2,-1));
    var yearRegex = new RegExp(
        "^(18[0-9][0-9]|19[0-9][0-9]|20[0-"+ maxYear.toString().slice(-2,-1) +"]" +
        "[0-" + maxYear.toString().slice(-1) + "])$"
      );
  
    if (yearRegex.test(year)) {
      return true;
    } else {
      return false;
    }
  }

  console.log(isValidYear(2026));