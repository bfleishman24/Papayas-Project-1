$('document').ready(function() {

  // ---------------------------------------------------------------------------
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAI2qL3fFcDg0LTKusDg6G6SLnqTWr6TUY",
    authDomain: "login-3ab83.firebaseapp.com",
    databaseURL: "https://login-3ab83.firebaseio.com",
    projectId: "login-3ab83",
    storageBucket: "",
    messagingSenderId: "804779896412"
  };
  firebase.initializeApp(config);
  // ---------------------------------------------------------------------------
  // End Initialize Firebase----------------------------------------------------

  $("#4").hide();
  $("#5").hide();
  // ---------------------------------------------------------------------------
  // Spotify Start--------------------------------------------------------------
  var playlistCategories = [
    'dinner',
    'romance',
    'chill',
    'hiphop',
    'latin',
    'party',
    'soul',
    'mood'
  ];

  for (i = 0; i < playlistCategories.length; i++) {
      var playlistName = playlistCategories[i];
      //console.log(playlistName);
      var newPlaylist = $('<div>');
      newPlaylist
        .addClass('playlist-dropdown topic-dropdown')
        .attr('value', playlistName)
        .html(playlistName);
      $('.playlist-list').append(newPlaylist);
      //console.log(newPlaylist);
    }

  $('.dropdown-toggle').on('click', function(event) {
    event.preventDefault();
    //$('.playlist').html('');

    //console.log('Dropdown Clicked');

    var authSettings = {
      async: true,
      crossDomain: true,
      url: 'https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/api/token',
      method: 'POST',
      headers: {
        Authorization: 'Basic NjIyYTUwNDZkN2ZkNDM2Njk4MGNhZDgyNDJiNTYzY2U6ZjA2YWNhNzUxNGI5NDI1ZDk3MTc3MGIzMDMwNGZkMzE=',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        grant_type: 'client_credentials'
      }
    };

    $.ajax(authSettings).done(function(response) {
      //console.log(response);

      var accessToken = response.access_token;
      //console.log(response.access_token);

      $('.playlist-dropdown').on('click', function(event) {
        event.preventDefault();

        var playlistSelected = $(this).attr('value');
        //console.log(playlistSelected);
        var getPlaylist = {
          async: true,
          crossDomain: true,
          url: 'https://api.spotify.com/v1/browse/categories/' + playlistSelected + '/playlists?limit=50',
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + accessToken + "'"
          }
        };

        $.ajax(getPlaylist).done(function(data) {
          console.log(data);
          var randomPlaylist = data.playlists.items[Math.floor(Math.random() * 10)];
          localStorage.setItem("playlist", "spotify/playlists/" + randomPlaylist.id);
          var playlistDiv = $('<iframe>');
          playlistDiv
            .attr(
              'src',
              'https://open.spotify.com/embed?uri=' +
                randomPlaylist
                  .external_urls.spotify
            )
            .css({
              width: '300',
              height: '380',
              frameborder: '0',
              allowtransparency: 'true',
            });
          $('.playlist').html('');
          $('.playlist').append(playlistDiv);
          console.log(playlistDiv);
          //console.log('https://open.spotify.com/embed?uri=' + data.playlists.item[Math.floor(Math.random() * 10)].uri);
        });
      });
    });
  });
  // ---------------------------------------------------------------------------
  // Spotify End----------------------------------------------------------------

  // ---------------------------------------------------------------------------
  // Recipes Start--------------------------------------------------------------
  var suggestions = [
    'african',
    'chinese',
    'japanese',
    'korean',
    'vietnamese',
    'thai',
    'indian',
    'french',
    'italian',
    'mexican',
    'spanish',
    'middle\ eastern',
    'american',
    'southern',
    'german',
    'caribbean'
  ];
for (i = 0; i < suggestions.length; i++) {
    $('#cuisine-dropdown').append("<option value=" + suggestions[i] + "/>");
};

$('#recipe-button').on('click', function() {
    event.preventDefault();
    var filter = '';
    var checkboxes = document.getElementsByName('check');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            filter += "%2C" + checkboxes[i].value;
        };
    };
    var recipeSearch = $("#recipe-input").val();

    $.ajax({
        method: 'GET',
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=1&tags=' + recipeSearch + '%2Cmain+course%2C+instructions%2Cpreparation+minutes' + filter,
        headers: { "X-Mashape-Key": 'n884na5hymmshNJQPRr9e1VpysDQp1p3GaVjsnkHuZgYB165gY', "Accept": 'application/json' },
        success: function(data) {
            console.log(data);
            var recipe = data.recipes[0];
            localStorage.setItem("recipe", recipe.id);
            $(".title").html(recipe.title);
            $(".recipe-picture").html("<img src='" + recipe.image + "'>");
            $(".big-picture").html("<img src='" + recipe.image + "'>")
            $(".cooking").html("<p>Ready In: " + recipe.readyInMinutes + " Minutes</p>");
            var ingredients = recipe.extendedIngredients;
                for (i = 0; i < ingredients.length; i++) {
                  var ingredientList = $("<li>");
                  ingredientList.html(ingredients[i].originalString);
                  $(".ingredients").append(ingredientList);
                };
                var instructions = recipe.analyzedInstructions[0].steps;
                for (j = 0; j < instructions.length; j++) {
                    $(".instructions").append(" " + instructions[j].step);
                };
                $("#4").show();
                $("#5").show();
        },
        error: function(data) {
            console.log(data);
        }
    });
});
  // ---------------------------------------------------------------------------
  // Recipes End----------------------------------------------------------------

  // ---------------------------------------------------------------------------
  // Movies Start---------------------------------------------------------------
var movieGenres = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Adventure',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentary',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Family',
  },
  {
    id: 14,
    name: 'Fantasy',
  },
  {
    id: 36,
    name: 'History',
  },
  {
    id: 27,
    name: 'Horror',
  },
  {
    id: 10402,
    name: 'Music',
  },
  {
    id: 9648,
    name: 'Mystery',
  },
  {
    id: 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Science Fiction',
  },
  {
    id: 10770,
    name: 'TV Movie',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'War',
  },
  {
    id: 37,
    name: 'Western',
  },
];

// creating a for loop to run through all the genre ids
// once we have each genre seperated from the id we will append the genre name to the dropdown
for (i = 0; i < movieGenres.length; i++) {
  var genreName = movieGenres[i];
  var newLi = $('<div>');
  newLi
    .addClass('dropdown-item topic-dropdown')
    .attr('value', genreName.id)
    .text(genreName.name);
  $('.genre-list').append(newLi);
};

// function displayMovieInfo() {
$('.dropdown-item').on('click', function(event) {
  event.preventDefault();

  $('#title').html('');
  $('.movieP').html('');
  $('#plot').html('');

  var genre = $(this).attr('value');
  var queryURL =
    'https://api.themoviedb.org/3/discover/movie?api_key=13fb7053b108732df8330eeb99f8a1f2&page=1&with_genres=' +
    genre +
    '&primary_release_date.lte=2016-1-1';
  // var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key=13fb7053b108732df8330eeb99f8a1f2&page=1&with_genres=28&primary_release_date.lte=2016-1-1";

  // Creating an AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: 'GET',
  }).done(function(response) {

    console.log(response);
    // console.log(JSON.stringify(response));

    var randomMovie = Math.floor(Math.random() * response.results.length);

    var movieTitle = response.results[randomMovie].original_title;

    var movieI = response.results[randomMovie].poster_path;

    localStorage.setItem("movie", response.results[randomMovie].id);

    var imgaeURL = 'http://image.tmdb.org/t/p/w185/';

    var imgURL = imgaeURL + movieI;

    console.log(imgURL);

    var moviePlot = response.results[randomMovie].overview;
    console.log(moviePlot);

    // Creating a div to hold the movie title
    var title = $('<h1>').text(movieTitle);

    // creating a imge to store the movie photo
    var image = $('<img>').attr('src', imgURL);
    image.addClass('picture-size');

    //creating a p to hold the movie plot
    var plot = $('<p>').text(moviePlot);

    // prepending all the movie data to the page
    $('#title').prepend(title);
    $('.movieP').prepend(image);
    $('#plot').prepend(plot);
  });
});
  // ---------------------------------------------------------------------------
  // Movies End-----------------------------------------------------------------
  $('.thumbs-up').on('click', function(event) {
    event.preventDefault();
    var name = $("#firebase-name").val();
    if (name !== "") {
      var newEntry = {
        name: name,
        playlist: localStorage.getItem("playlist"),
        recipe: localStorage.getItem("recipe"),
        movie: localStorage.getItem("movie"),
        likes: 1
      };

      database.ref("/favorites").push(newEntry);
      $(".hide-me").html("<h2 class='recipe'>Great!!!</h2>");

    };
  });

  $('.thumbs-down').on('click', function(event) {
    event.preventDefault();
    $("#5").hide();
  });
});
  // ---------------------------------------------------------------------------
  // Document Ready End---------------------------------------------------------
