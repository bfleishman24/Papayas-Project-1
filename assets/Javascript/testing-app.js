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

  var settings = {
    async: true,
    crossDomain: true,
    url:
      'https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/api/token',
    method: 'POST',
    headers: {
      Authorization:
        'Basic NjIyYTUwNDZkN2ZkNDM2Njk4MGNhZDgyNDJiNTYzY2U6ZjA2YWNhNzUxNGI5NDI1ZDk3MTc3MGIzMDMwNGZkMzE=',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: {
      grant_type: 'client_credentials',
    },
  };

  $.ajax(settings).done(function(response) {
    //console.log(response);

    var accessToken = response.access_token;
    console.log(response.access_token);

    var getPlaylist = {
      async: true,
      crossDomain: true,
      url:
        'https://api.spotify.com/v1/browse/categories/dinner/playlists?limit=10',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken + "'",
      },
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
          'https://open.spotify.com/embed?uri=' +
            data.playlists.items[Math.floor(Math.random() * 10)].external_urls
              .spotify
        )
        .css({
          width: '300',
          height: '380',
          frameborder: '0',
          allowtransparency: 'true',
        });
      $('.playlist').prepend(playlistDiv);
      console.log(playlistDiv);
      //console.log('https://open.spotify.com/embed?uri=' + data.playlists.item[Math.floor(Math.random() * 10)].uri);
    });
  });
});
