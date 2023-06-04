let vr=[
        {
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/h8gHn0OzBoaefsYseUByqsmEDMY.jpg",
        "genre_ids": [
          28,
          53,
          80
        ],
        "id": 603692,
        "original_language": "en",
        "original_title": "John Wick: Chapter 4",
        "overview": "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
        "popularity": 8361.829,
        "poster_path": "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
        "release_date": "2023-03-22",
        "title": "John Wick: Chapter 4",
        "video": false,
        "vote_average": 8,
        "vote_count": 2263
      },
      {
        "adult": false,
        "backdrop_path": "/2klQ1z1fcHGgQPevbEQdkCnzyuS.jpg",
        "genre_ids": [
          16,
          10751,
          12,
          14,
          35
        ],
        "id": 502356,
        "original_language": "en",
        "original_title": "The Super Mario Bros. Movie",
        "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
        "popularity": 5236.756,
        "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
        "release_date": "2023-04-05",
        "title": "The Super Mario Bros. Movie",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 3778
      },
      {
        "adult": false,
        "backdrop_path": "/4t0oBFrJyweYPt0hocW6RUa0b6H.jpg",
        "genre_ids": [
          28,
          80,
          53
        ],
        "id": 385687,
        "original_language": "en",
        "original_title": "Fast X",
        "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
        "popularity": 3879.447,
        "poster_path": "/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
        "release_date": "2023-05-17",
        "title": "Fast X",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 607
      }
      
    ],
    "total_pages": 38521,
    "total_results": 770405
  }
]

let vr2=vr[0].results;
let newMovies=[];
let movie;
vr2.forEach((el)=>{
     movie= {
        "id":2,
        "original_server_id": el.id,
        "title": el.title ,
        "director": "-",
        "about":el.overview,
        "release_year": new Date(el.release_date).getFullYear() ,
        "genre": el.genre_ids.join(',')
      };
      newMovies.push(movie);
})

let data=[];
data= data.concat(newMovies)

console.log(data.length);
console.log(data);
