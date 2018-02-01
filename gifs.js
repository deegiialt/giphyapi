// On page load:
$(document).ready( function() {
	// set variables:
	buttonTitles = ["thor", "captain america", "avengers", "iron man"];
	//function displayButtons
	function displayButtons() {	
		//clear previous buttons from screen
		$('.panel-body').empty();
		//for loop through buttonTitles
		for(var i = 0; i < buttonTitles.length; i++) {
			//create a jquery button
			var buttons = $("<button class='btn btn-primary buttonPressed'>");
			//add attribute to jquery button created (attribute title: "button-")
			buttons.attr("button-", buttonTitles[i]);
			//put the current buttonTitle that we're looping through in the button (.html)
			buttons.html(buttonTitles[i]);
			//append the button to the page
			$(".panel-body").append(buttons);
		};
	};

	displayButtons();
	 // When the user clicks one of the buttons - function
	$('.buttonPressed').click(function(event) {
	    // prevent default
	    event.preventDefault();
	    // get the attribute of the button clicked, and store in a variables
	    var nameOfMovie = $(this).attr('button-');
	    // clear out old images from the page (.empty)
	    $('.showGifs').empty();

	    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Mp5TBPxTZUhzOHCk8vZxCsXD1ZhPHdH7&q=" + nameOfMovie;
	    // AJAX call to GIPHY
	    $.ajax({
	    	url: queryURL,
	    	method: "GET"
	    }).done (function(movieData) {
	    	console.log(movieData);
	    	var results = movieData.data
	        // loop through response.data
	        for (var j = 0; j < results.length; j++) {
	            // create a jQuery div
	            var newDiv = $("<div class='col-md-3 imageDiv'>");
	            // create a jQuery image
	            var newImage = $("<img class='img-thumbnail gif'>");
	            // Set the src attribute of the jQuery image to be image that we are looping through
	            newImage.attr("src", results[j].images.original_still.url);
	            // Add data-state attribute to jQuery image = "still"
	            newImage.attr("data-state", "still");
				// Add data-animateurl attribute to jQuery image
				newImage.attr("data-animateurl", results[j].images.original.url);
				// Add data-stillurl attribute to jQuery image
				newImage.attr("data-stillurl", results[j].images.original_still.url);
	        	// create a jQuery paragrapgh
	        	var p = $("<p class='panel'>");
	            // Put the rating from GIPHY response into the paragrapgh created
	            p.text("Rating: " + results[j].rating.toUpperCase());
	            // Append jQuery image to jQuery div
	            newDiv.append(newImage);
	            // Append jQuery paragrapgh to jQuery div
	            newDiv.append(p);
	            // Append jQuery div to page
	            $(".showGifs").append(newDiv);
	        }
	    })

	// On click of form submit button - function
	$('#submitButton').click(function(event) {
		event.preventDefault();
	    // Create variable of user input text field
	    var userInput = $("#add-movie-input").val().trim();
	    // Push variable just created to array (buttonTitles)
	    buttonTitles.push(userInput);
	    console.log(buttonTitles);
	    // Run displayButtons function
	    displayButtons();
	})
	// On click of image div - function
	$('.gif').click(function() {
	    // Set variable equal to image clicked data-state attribute
	    var imageState = $(this).attr("data-state");
	    // if (imageState == "still")
	    if (imageState == "still") {
	        // Set src attribute of image clicked to be data-animateurl attribute of the image clicked
	        $(this).attr("src", $(this).attr('data-animateurl'));
	        // Set data-state attribute of image clicked to be "animated" 
	        $(this).attr("data-state", "animated");   	
	    } else if (imageState == "animated") {
			// Set src attribute of image clicked to be data-stillurl attribute of the image clicked
			$(this).attr('src', $(this).attr('data-stillurl'));
			// Set data-state attribute of image clicked to be "still"
			$(this).attr("data-state", "still");  
	    }
	})
});



		
		//function: when the user clicks on one of the buttons
			//prevent default
			//get the attribute of the button clicked and store in variable
			//clear out old images (.empty())
			//ajax call to giphy
				//url: https//api.giphy.com/v1/gifs/search?api_key= //API KEY// &q= //ATTRIBUTE//
					//can use postman for api viewing
				//method: "GET",
				//.done
					//loop through response.data
						//create a jquery div
						//create jquery img
						//set the src attribute of the jquery img to be the image from giphy response
						//add data-state attribute to jQuery image = "still"
						//add data-animateurl attribute to jQuery image = response.data[i].images.original.url
						//add data-stillurl attribute to jQuery image = response.data[i].images.original_still.url
						//create jquary paragraph (store ratings)
							//put giphy response into paragraph (response.data.ratings)
							//append jquery paragraph to jquery div
							//append jquery image to jquery div
							//apend jquery div to the image
				//on click of form submit button -function
					//create var of user input text field
					//push variable just created to array (buttonTitles)
					//re-run displayButtons function
				//on click of image div - function
					//data-still or data-animated or data-state (moving or still) (set attributes)
					//set variable equal to image clicked data-state attribute
					//if (imageStat == "still")
						//set src attribute of image clicked to be the data-animateurl attribute of the image clicked
						//set data-state attribute of image clicked to be "animated"
					//else if (imageState == " animated")
						//set src attribute of image clicked to be the data-stillurl attribute of the image clicked
						//set data-state attribute of image clicked to be "still"
});
					

 // On page load:
            // Set variables:
                // buttonTitles = ["baseball", "hockey", "football"]
            // Run displayButtons function
        // displayButtons - function
            // Clear previous buttons from screen
            // for loop through buttonTitles
                // Create a jQuery button
                // Add attribute to jQuery button created (attribute name: "button-title", attribute value: the button title at that index)
                // Put the current buttonTitle that we are looping through in the button
                // Append button to page
        // When the user clicks one of the buttons - function
            // prevent default
            // get the attribute of the button clicked, and store in a variables
            // clear out old images from the page (.empty)
            // AJAX call to GIPHY
                // Method | GET
                // URL | https://api.giphy.com/v1/gifs/search?api_key=YOUR_API_KEY&q=(THE BUTTON ATTRIBUTE WE GOT EARLIER)
                // .done
                    // loop through response.data
                        // create a jQuery div
                        // create a jQuery image
                        // Set the src attribute of the jQuery image to be image that we are looping through
                        // Add data-state attribute to jQuery image = "still"
						// Add data-animateurl attribute to jQuery image
						// Add data-stillurl attribute to jQuery image
                    	// create a jQuery paragrapgh
                        // Put the rating from GIPHY response into the paragrapgh created
                        // Append jQuery image to jQuery div
                        // Append jQuery paragrapgh to jQuery div
                        // Append jQuery div to page
        // On click of form submit button - function
            // Create variable of user input text field
            // Push variable just created to array (buttonTitles)
            // Run displayButtons function
        // On click of image div - function
            // Set variable equal to image clicked data-state attribute
            // if (imageState == "still")
                // Set src attribute of image clicked to be data-animateurl attribute of the image clicked
                // Set data-state attribute of image clicked to be "animated"
            // else if (imageState == "animated")
				// Set src attribute of image clicked to be data-stillurl attribute of the image clicked
				// Set data-state attribute of image clicked to be "still"
