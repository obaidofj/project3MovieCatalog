



var genres = [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 12,
        "name": "Adventure"
      }
    ];
  
  // Create lookup objects based on id and name
  var getNameById = {};
  var getIDByName = {};
  
  genres.forEach(function(obj) {
    getNameById[obj.id] = obj.name;
    getIDByName[obj.name] = obj.id;
  });
  
  // Perform lookups
  var id = 28;
  var name = "Action";
  
//   var getNameById = getNameById[28];
//   var getIDByName = getIDByName[name];
  
  console.log(getNameById[28]);
  // Output: { "id": 28, "name": "Action" }
  
  console.log(getIDByName["Action"]);
  // Output: { "id": 28, "name": "Action" }
  
  let genre_ids = [
    28,
    12,
    26
  ];

//   console.log(getNameById[28].name);
  console.log( genre_ids.map((el)=>{
    return getNameById[el];
  }).join(","));


  
let idOfChoice={
    1:28,
    2: 35,
    3: 99,
    4: 18
  }

  let gener=1;
  console.log( "id of cho: ", idOfChoice[gener]);