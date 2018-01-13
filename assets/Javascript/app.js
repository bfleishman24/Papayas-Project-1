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
        url: 'https://api.spotify.com/v1/browse/categories/dinner/playlists?country=US&limit=1&offset=5',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer BQBFsp8aA4OW05H8vjU4rT4EACqX93BUxnopleEVU528T7RhgwoWb5krLy2OzqFy-Php45c1eZd5ghT7rlnSaYYsdiP-mUdvgJ34FFbPJC1vhGbsHJktmXW3ku5wv1b0Ra3tSmR5DYA17J3Krg'
        },
    };

    $.ajax(settings).done(function(response) {

        console.log(response);

        var results = response.playlists.items.external_urls;

        console.log(results);


        //for (var i = 0; i < results.length; i++) {
        // Creating a div to hold the Playlists
        //var playlistDiv = $("<div class='player'>");
        //var resultPlaylist = JSON.stringify(results[i]);

        // Putting the entire Playlist above the previous Playlists
        //playlistDiv.prepend(resultPlaylist);
        $('.playlist').prepend(response);

        //}

    });

});