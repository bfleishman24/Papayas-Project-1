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
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer BQClqUO3xlnfN23dUxk484_eH7gKoALRABLAfyVD49s5EQ6OPNT3gVbCftPIHiqzY3J3DwFhn7wQay20aZr_oqcMNOTtzfOAcSNpLjtYR6DqyhiYdZKT8QpL_PbGuvLDkJP0lVHnv-YnLG25-eGyUDOFIinKZSmdMA&refresh_token=AQBR0uyMhkMxr-86O-qcDf8Tbislg29r7_c4GX0pccgpp2lkPNaGSWZwO7Zei14vMd0Yr35fEpyzBzJCDZmv4DXnH_rdeaNPGfwscyYuIpjsNlKF9cGAsL9GLTeOvhgQpok' }
    };

    $.ajax(settings).done(function(response) {

        console.log(response);
        console.log(JSON.stringify(response));
        console.log(response.playlists.items[0].external_urls.spotify);
        var results = response.playlists.items.external_urls;

        //console.log(results);


        //for (var i = 0; i < results.length; i++) {
        // Creating a div to hold the Playlists
        var playlistDiv = $("<iframe>");
        playlistDiv.attr('src', 'https://open.spotify.com/embed?uri=' + response.playlists.items[0].uri).css({ width: '300', height: '380', frameborder: '0', allowtransparency: 'true' });

        /*var playlistDiv = $("<iframe>");
        playlistDiv.attr('src', 'https://open.spotify.com/embed?uri=' + response.playlists.items[0].uri + '&view=coverart').css({ width: '300', height: '380', frameborder: '0', allowtransparency: 'true' });*/
        /*<iframe src="https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:3rgsDhGHZxZ9sB9DQWQfuf" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
         */
        //var resultPlaylist = JSON.stringify(results[i]);

        // Putting the entire Playlist above the previous Playlists
        //playlistDiv.prepend(response.playlists.items[0].external_urls.spotify);
        //$('.playlist').prepend(response.playlists.items[0].uri);
        $('.playlist').prepend(playlistDiv);
        console.log(playlistDiv);
        console.log('https://open.spotify.com/embed?uri=' + response.playlists.items[0].uri);

        //}

    });

});