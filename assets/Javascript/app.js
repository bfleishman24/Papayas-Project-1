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

    var settings = { async: true, crossDomain: true, url: 'https://api.spotify.com/v1/browse/categories/dinner/playlists?country=US&limit=1&offset=5', method: 'GET', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer BQBZ-Jd9BEaudBsskaabCOfWElj3KOlMUbafIrEFxeC1cdjlolhvr0PMBYFcLgMg0SBmpCoiyvQaBpvwgEiiKoU2cAOSz8eKKTG7iV8FWMF0hMYatjYDvAjeFLkiH_uh_A2J-v8choLz56NOsA' } };

    $.ajax(settings).done(function(response) {

        console.log(response);
        console.log(JSON.stringify(response));
        console.log(response.playlists.items[0].external_urls.spotify);
        var results = response.playlists.items.external_urls;

        //console.log(results);


        //for (var i = 0; i < results.length; i++) {
        // Creating a div to hold the Playlists
        var playlistDiv = $("<div class='player'>");
        //var resultPlaylist = JSON.stringify(results[i]);

        // Putting the entire Playlist above the previous Playlists
        //playlistDiv.prepend(response.playlists.items[0].external_urls.spotify);
        $('.playlist').prepend(response.playlists.items[0].external_urls.spotify);

        //}

    });

});