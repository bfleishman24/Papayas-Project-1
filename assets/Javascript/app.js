$('document').ready(function() {
    // Initialize Firebase
    var config = {
        apiKey: 'AIzaSyCacnSxWt5028xJ6wkWR-1KeHNFbc8Ytws',
        authDomain: 'papayas-project-1.firebaseapp.com',
        databaseURL: 'https://papayas-project-1.firebaseio.com',
        projectId: 'papayas-project-1',
        storageBucket: 'papayas-project-1.appspot.com',
        messagingSenderId: '795888444944',
    };
    firebase.initializeApp(config);


});

var movieGenres = [{
    "id": 28,
    "name": "Action"
    },
    {
    "id": 12,
    "name": "Adventure"
    },
    {
    "id": 16,
    "name": "Animation"
    },
    {
    "id": 35,
    "name": "Comedy"
    },
    {
    "id": 80,
    "name": "Crime"
    },
    {
    "id": 99,
    "name": "Documentary"
    },
    {
    "id": 18,
    "name": "Drama"
    },
    {
    "id": 10751,
    "name": "Family"
    },
    {
    "id": 14,
    "name": "Fantasy"
    },
    {
    "id": 36,
    "name": "History"
    },
    {
    "id": 27,
    "name": "Horror"
    },
    {
    "id": 10402,
    "name": "Music"
    },
    {
    "id": 9648,
    "name": "Mystery"
    },
    {
    "id": 10749,
    "name": "Romance"
    },
    {
    "id": 878,
    "name": "Science Fiction"
    },
    {
    "id": 10770,
    "name": "TV Movie"
    },
    {
    "id": 53,
    "name": "Thriller"
    },
    {
    "id": 10752,
    "name": "War"
    },
    {
    "id": 37,
    "name": "Western"
    }
    ];
    console.log("helo")

// creating a for loop to run throug all the genre ids
// once we have each genre seperated from the id we will append the genre name to the dropdown
    for (i = 0; i < movieGenres.length ; i++) {
        var genreName=movieGenres[i]
        var newLi= $("<a>");
            newLi.addClass("dropdown-item").attr("value", genreName.id).text(genreName.name);
            $('.dropdown-menu').append(newLi);
            console.log(movieGenres[i])


        

    }
    

// function displayMovieInfo() {

//     var genre = $(this).attr("data-name");
//     var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=13fb7053b108732df8330eeb99f8a1f2&page=1&with_genres="+ genre +"&primary_release_date.lte=2016-1-1";

//     // Creating an AJAX call for the specific movie button being clicked
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).done(function(response) {

//       // Creating a div to hold the movie
//       var movieDiv = $("<div class='movie'>");

//       // Storing the rating data
//       var rating = response.Rated;

//       // Creating an element to have the rating displayed
//       var pOne = $("<p>").text("Rating: " + rating);

//       // Displaying the rating
//       movieDiv.append(pOne);

//       // Storing the release year
//       var released = response.Released;

//       // Creating an element to hold the release year
//       var pTwo = $("<p>").text("Released: " + released);

//       // Displaying the release year
//       movieDiv.append(pTwo);

//       // Storing the plot
//       var plot = response.Plot;

//       // Creating an element to hold the plot
//       var pThree = $("<p>").text("Plot: " + plot);

//       // Appending the plot
//       movieDiv.append(pThree);

//       // Retrieving the URL for the image
//       var imgURL = response.Poster;

//       // Creating an element to hold the image
//       var image = $("<img>").attr("src", imgURL);

//       // Appending the image
//       movieDiv.append(image);

//       // Putting the entire movie above the previous movies
//       $("#movies-view").prepend(movieDiv);
//     });

//   }

//   // Function for displaying movie data
//   function renderButtons() {

//     // Deleting the movies prior to adding new movies
//     // (this is necessary otherwise you will have repeat buttons)
//     $("#buttons-view").empty();

//     // Looping through the array of movies
//     for (var i = 0; i < movies.length; i++) {

//       // Then dynamicaly generating buttons for each movie in the array
//       // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
//       var a = $("<button>");
//       // Adding a class of movie to our button
//       a.addClass("movie");
//       // Adding a data-attribute
//       a.attr("data-name", movies[i]);
//       // Providing the initial button text
//       a.text(movies[i]);
//       // Adding the button to the buttons-view div
//       $("#buttons-view").append(a);
//     }
//   }