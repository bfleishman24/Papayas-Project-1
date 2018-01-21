$('document').ready(function() {
  var playlistCategories = [
    'dinner',
    'romance',
    'chill',
    'hip hop',
    'latin',
    'party',
  ];

  for (i = 0; i < playlistCategories.length; i++) {
      var playlistName = playlistCategories[i];
      //console.log(playlistName);
      var newPlaylist = $('<div>');
      newPlaylist
        .addClass('dropdown-item playlist-dropdown')
        .attr('value', playlistName)
        .html(playlistName);
      $('.playlist-list').append(newPlaylist);
      //console.log(newPlaylist);
    }

  $('.dropdown-toggle').on('click', function(event) {
    event.preventDefault();
    $('.playlist').html('');

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