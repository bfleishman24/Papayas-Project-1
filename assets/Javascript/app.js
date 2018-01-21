$('document').ready(function() {
  var playlistCategories = [
    'dinner',
    'romance',
    'chill',
    'hip hop',
    'latin',
    'party',
  ];


  $('.dropdown-toggle').on('click', function(event) {
    event.preventDefault();
        for (i = 0; i < playlistCategories.length; i++) {
          var playlistName = playlistCategories[i];
          console.log(playlistName);
          var newPlaylist = $('<button>');
          newPlaylist
            .addClass('dropdown-item playlist-dropdown')
            .attr('value', playlistName)
            .html(playlistName);
          $('.playlist-list').append(newPlaylist);
          console.log(newPlaylist);
        }
    console.log('Dropdown Clicked');
    $('#title').html('');
    $('#movieP').html('');
    $('#plot').html('');

    var genre = $(this).attr('value');
    /*
  for (i = 0; i < playlistCategories.length; i++) {
        var playlistName=playlistCategories[i]
        var newMood= $("<div>");
            newMood
              .addClass('dropdown-item mood-dropdown')
              .attr('value', playlistName)
              .html(playlistName);
            $('.playlist-lits').append(newMood);
    console.log(playlistName);
    console.log(newMood);
  };*/

    // creating a for loop to run throug all the genre ids
    // once we have each genre seperated from the id we will append the genre name to the dropdown
    /*for (i = 0; i < movieGenres.length ; i++) {
        var genreName=movieGenres[i]
        var newLi= $("<button>");
            newLi.addClass("dropdown-item genre-dropdown").attr("value", genreName.id).html(genreName.name);
            $('.genre-list').append(newLi);
    };*/

    /*$('.dropdown-toggle').on('click', function(event) {
        event.preventDefault();
        console.log('clicked');
        $('.playlist-list').html(playlistCategories);

        var genre = $(this).attr('value');
        console.log(genre);
      });*/

    // function displayMovieInfo() {
    /*$('.dropdown-item').on('click', function(event) {
        event.preventDefault();
        $("#title").html("");
        $("#movieP").html("");
        $("#plot").html("");

        var genre = $(this).attr("value");*/

    var authSettings = {
      async: true,
      crossDomain: true,
      url: 'https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/api/token',
      method: 'POST',
      headers: {
        Authorization: 'Basic NjIyYTUwNDZkN2ZkNDM2Njk4MGNhZDgyNDJiNTYzY2U6ZjA2YWNhNzUxNGI5NDI1ZDk3MTc3MGIzMDMwNGZkMzE=',
        'Content-Type': 'application/x-www-form-urlencoded'
      }, data: {
        grant_type: 'client_credentials'
      }
    };

    $.ajax(authSettings).done(function(response) {
      //console.log(response);

      var accessToken = response.access_token;
      console.log(response.access_token);
});
      $('.playlist-dropdown').on('click', function(event) {
        event.preventDefault();
        var getPlaylist = {
          async: true,
          crossDomain: true,
          url: 'https://api.spotify.com/v1/browse/categories/' + 'dinner' + '/playlists?limit=10',
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + accessToken + "'"}
        };

        $.ajax(getPlaylist).done(function(data) {
          console.log(data);
          //console.log(JSON.stringify(data));
          //console.log(data.playlists.items[Math.floor(Math.random() * 10) + 1]);
          //console.log(data.playlists.items[Math.floor(Math.random() * 10) + 1].external_urls.spotify);
          //console.log(data.playlists.items[Math.floor(Math.random() * 10)].uri);

          var playlistDiv = $('<iframe>');
          playlistDiv
            .attr(
              'src',
              'https://open.spotify.com/embed?uri=' + data.playlists.items[Math.floor(Math.random() * 10)].external_urls.spotify)
            .css({
              width: '300',
              height: '380',
              frameborder: '0',
              allowtransparency: 'true',
            });
          $('.playlist').append(playlistDiv);
          console.log(playlistDiv);
          //console.log('https://open.spotify.com/embed?uri=' + data.playlists.item[Math.floor(Math.random() * 10)].uri);
        });
      });
    });

});