$('document').ready(function() {
<<<<<<< HEAD
=======

  // ---------------------------------------------------------------------------
  // Initialize Firebase--------------------------------------------------------
  var config = {
    apiKey: 'AIzaSyCacnSxWt5028xJ6wkWR-1KeHNFbc8Ytws',
    authDomain: 'papayas-project-1.firebaseapp.com',
    databaseURL: 'https://papayas-project-1.firebaseio.com',
    projectId: 'papayas-project-1',
    storageBucket: 'papayas-project-1.appspot.com',
    messagingSenderId: '795888444944',
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  // ---------------------------------------------------------------------------
  // End Initialize Firebase----------------------------------------------------

  $("#4").hide();
  $("#5").hide();
  $(".recipe-icon").hide();
  localStorage.clear();
  // ---------------------------------------------------------------------------
  // Spotify Start--------------------------------------------------------------
>>>>>>> 1840b745aad0113f803402dd256bae45120b0495
  var playlistCategories = [
    'dinner',
    'romance',
    'chill',
    'hiphop',
    'latin',
    'party',
<<<<<<< HEAD
=======
    'soul',
    'mood'
>>>>>>> 1840b745aad0113f803402dd256bae45120b0495
  ];

  for (i = 0; i < playlistCategories.length; i++) {
      var playlistName = playlistCategories[i];
      //console.log(playlistName);
      var newPlaylist = $('<div>');
      newPlaylist
<<<<<<< HEAD
        .addClass('dropdown-item playlist-dropdown')
=======
        .addClass('playlist-dropdown topic-dropdown')
>>>>>>> 1840b745aad0113f803402dd256bae45120b0495
        .attr('value', playlistName)
        .html(playlistName);
      $('.playlist-list').append(newPlaylist);
      //console.log(newPlaylist);
    }

  $('.dropdown-toggle').on('click', function(event) {
    event.preventDefault();
<<<<<<< HEAD
    $('.playlist').html('');
=======
    //$('.playlist').html('');
>>>>>>> 1840b745aad0113f803402dd256bae45120b0495

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
<<<<<<< HEAD
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
          url: 'https://api.spotify.com/v1/browse/categories/' + playlistSelected + '/playlists?limit=10',
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + accessToken + "'"
          }
        };

        $.ajax(getPlaylist).done(function(data) {
          //console.log(data);

          var playlistDiv = $('<iframe>');
          playlistDiv
            .attr(
              'src',
              'https://open.spotify.com/embed?uri=' +
                data.playlists.items[Math.floor(Math.random() * 10)]
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
});
=======
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
                $(".recipe-icon").show();
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
    localStorage.setItem("favorite", false);

    var imgaeURL = 'http://image.tmdb.org/t/p/w185/';

    var imgURL = imgaeURL + movieI;

    //console.log(imgURL);

    var moviePlot = response.results[randomMovie].overview;
    //console.log(moviePlot);

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

  // ---------------------------------------------------------------------------

  // Our Picks Table------------------------------------------------------------
  var userDataRef = firebase.database().ref("favorites").orderByKey();
  userDataRef.once("value").then(function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    var key = childSnapshot.key;
    var childData = childSnapshot.val();               
      // console.log(key)
      // console.log(childData)
    
    var likes_val = childSnapshot.val().likes;
    // console.log(likes_val)
    
    var name_val = childSnapshot.val().name;
    // console.log(name_val)

    $("#picksTable > tbody").append('<tr class="firebase-pick" id = "' + key + '"><td>' + name_val + '</td><td>' + likes_val + '</td><td>');

    });
  });  

  // Populating a pick
  $('#picksTable').on('click', '.firebase-pick', function(event) {
    event.preventDefault();
    var chosenKey = this.id;
    var favoritesKey = database.ref("/favorites/" + chosenKey);
    favoritesKey.once("value").then(function(snapshot) {
      var favoritePlaylist = snapshot.val().playlist;
      var favoriteRecipe = snapshot.val().recipe;
      var favoriteMovie = snapshot.val().movie;
      var favoriteName = snapshot.val().name;
      var favoriteLikes = snapshot.val().likes;
      $(".favorite-name").html("<h2 class='thank-you'>" + favoriteName + "</h2>");
      localStorage.setItem("favorite", true);
      localStorage.setItem("likes", favoriteLikes);
      localStorage.setItem("key", chosenKey);
      $("#4").show();
      $("#5").show();
      $(".recipe-icon").show();
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
        var accessToken = response.access_token;
        var getPlaylist = {
          async: true,
          crossDomain: true,
          url: 'https://api.spotify.com/v1/users/' + favoritePlaylist,
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + accessToken + "'"
          }
        };
        $.ajax(getPlaylist).done(function(data) {
          console.log(data);
          
          var playlistDiv = $('<iframe>');
          playlistDiv
            .attr(
              'src',
              'https://open.spotify.com/embed?uri=' +
                data
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
        });
      });
      $.ajax({
        method: 'GET',
        url: "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/" + favoriteRecipe + "/information?includeNutrition=false",
        headers: { "X-Mashape-Key": 'n884na5hymmshNJQPRr9e1VpysDQp1p3GaVjsnkHuZgYB165gY', "Accept": 'application/json' },
        success: function(data) {
            console.log(data);
            var recipe = data;
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
          },
          error: function(data) {
              console.log(data);
          }
      });
      $('#title').html('');
      $('.movieP').html('');
      $('#plot').html('');
      $.ajax({
        url: 'https://api.themoviedb.org/3/movie/' + favoriteMovie + '?api_key=13fb7053b108732df8330eeb99f8a1f2',
        method: 'GET',
      }).done(function(response) {
        console.log(response);
        var movieTitle = response.original_title;
        var movieI = response.poster_path;
        var imgaeURL = 'http://image.tmdb.org/t/p/w185/';
        var imgURL = imgaeURL + movieI;
        var moviePlot = response.overview;
        var title = $('<h1>').text(movieTitle);
        var image = $('<img>').attr('src', imgURL);
        image.addClass('picture-size');
        var plot = $('<p>').text(moviePlot);
        $('#title').prepend(title);
        $('.movieP').prepend(image);
        $('#plot').prepend(plot);
        });
      });
      $('html, body').animate({ scrollTop: $('#2').offset().top }, 'slow');
    });

  // Voting Section
  $('.thumbs-up').on('click', function(event) {
    event.preventDefault();
    var name = $("#firebase-name").val();
    var favorite = localStorage.getItem("favorite");
    if (favorite === "true") {
      var likes = localStorage.getItem("likes");
      likes++;
      var chosenKey = localStorage.getItem("key");
      var favoritesKey = database.ref("/favorites/" + chosenKey);
      favoritesKey.child("likes").set(likes);
      $(".hide-me").html("<h2 class='thank-you'>Thanks For Your Feedback!!</h2>");
    }
    else if (favorite === "false" && name !== "") {
      var newEntry = {
        name: name,
        playlist: localStorage.getItem("playlist"),
        recipe: localStorage.getItem("recipe"),
        movie: localStorage.getItem("movie"),
        likes: 1
      };
      database.ref("/favorites").push(newEntry);
      $(".hide-me").html("<h2 class='thank-you'>Thanks For Your Feedback!!</h2>");
    
    }
    else {};
  });

  $('.thumbs-down').on('click', function(event) {
    event.preventDefault();
    $("#5").hide();
  });
});
  // ---------------------------------------------------------------------------
  // Document Ready End---------------------------------------------------------
<<<<<<< HEAD
>>>>>>> 1840b745aad0113f803402dd256bae45120b0495
=======

>>>>>>> c91758f6f7be5146fe4f36614cc01f33d85eb0c2
