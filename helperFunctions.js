let genres = [
  {
    id: 28,
    name: "Action"
  },
  {
    id: 12,
    name: "Adventure"
  },
  {
    id: 16,
    name: "Animation"
  },
  {
    id: 35,
    name: "Comedy"
  },
  {
    id: 80,
    name: "Crime"
  },
  {
    id: 99,
    name: "Documentary"
  },
  {
    id: 18,
    name: "Drama"
  },
  {
    id: 10751,
    name: "Family"
  },
  {
    id: 14,
    name: "Fantasy"
  },
  {
    id: 36,
    name: "History"
  },
  {
    id: 27,
    name: "Horror"
  },
  {
    id: 10402,
    name: "Music"
  },
  {
    id: 9648,
    name: "Mystery"
  },
  {
    id: 10749,
    name: "Romance"
  },
  {
    id: 878,
    name: "Science Fiction"
  },
  {
    id: 10770,
    name: "TV Movie"
  },
  {
    id: 53,
    name: "Thriller"
  },
  {
    id: 10752,
    name: "War"
  },
  {
    id: 37,
    name: "Western"
  }
];

export let getNameById = {};
export let getIDByName = {};

genres.forEach(function(obj) {
  getNameById[obj.id] = obj.name;
  getIDByName[obj.name] = obj.id;
});

export function getLargestID(objects) {
  if (objects.length === 0) {
    return 0;
  }
  const largestIDinObjects = objects.reduce((prev, curr) => {
    return curr.id > prev.id ? curr : prev;
  });

  return largestIDinObjects.id;
}

export  function isValidYear(year) {
  // for any year between 1800 to (current year) 2023+5 as there are films scheduals in future / some times

  var currentYear = new Date().getFullYear();
  var maxYear = currentYear + 5;
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

export function isValidTextInput(inp,type) {
  //any sentence 
  let wrdRegex;
  if(type=="title")
   wrdRegex =   /^(?=.*[\w\d]).+$/ ;  // any sentence and it could be just numbers like 21 , film in 2008 . 
  else if(type=="about")
   wrdRegex =   /^(?=.*\w).+$/;   // in this regex any sence it could have numbers but not only numbers 
  else if(type=="director")
   wrdRegex =   /^(?=.*[a-zA-Z])[^\d]+$/;  // any chars or (speacial chars) but without numbers

  if (wrdRegex.test(inp)) {
    return true;
  } else {
    return false;
  }
}

export function isValidGenreChoice(inp){
  let genreChoices=[1,2,3,4];
  return genreChoices.includes(Number(inp))
}

function toDate(dString) {
  const [day, month, year] = dString.split("/");
  return new Date(`${year}-${month}-${day}`).getTime();
}

