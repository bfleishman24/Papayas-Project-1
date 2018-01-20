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

    // Recipe Search
    var suggestions = ['African', 'Chinese', 'Japanese', 'Korean', 'Vietnamese', 'Thai', 'Indian', 'French', 'Italian', 'Mexican', 'Spanish', 'Middle\ Eastern', 'American', 'Southern', 'German', 'Caribbean'];
    for (i = 0; i < suggestions.length; i++) {
        $('#cuisine-dropdown').append("<option value=" + suggestions[i] + "/>");
    };

    $('#recipe-button').on('click', function() {
        var filter = '';
        var checkboxes = document.getElementsByName('check');
        for (var i = 0; i < checkboxes.length ; i++) {
            if (checkboxes[i].checked) {
                filter += "%2C" + checkboxes[i].value;
            };   
        };
        var recipeSearch = $("#recipe-input").val();
        if (suggestions.indexOf(recipeSearch) >=0) {
            var cuisine = recipeSearch;
            recipeSearch = '';
        };

        $.ajax({
            method: 'GET',
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=1&cuisine=' + cuisine + '&tags=' + recipeSearch + '%2Cmain+course%2C+instructions%2Cpreparation+minutes' + filter,
            headers: {"X-Mashape-Key": 'n884na5hymmshNJQPRr9e1VpysDQp1p3GaVjsnkHuZgYB165gY', "Accept": 'application/json'},
            success: function(data) {
                    console.log(data);
                    var recipe = data.recipes[0];
                    $(".title").html(recipe.title);
                    $(".title").prepend("<img src='" + recipe.image + "'>");
                    $(".ingredients").html("<p>Preparation Time: " + recipe.preparationMinutes + " Minutes</p>");
                    $(".instructions").html("<p>Cooking Time: " + recipe.cookingMinutes + " Minutes</p>");
                },
            error: function(data) {
                    console.log(data);
                }
        });
    });

/*
                var ingredients = recipe.extendedIngredients;
                for (i = 0; i < ingredients.length; i++) {
                    $(".ingredients").append(ingredients[i].originalString);
                };
                var instructions = recipe.analyzedInstructions[0].steps;
                for (j = 0; j < instructions.length; j++) {
                    $(".instructions").append(instructions[j].step);
              
*/
});


