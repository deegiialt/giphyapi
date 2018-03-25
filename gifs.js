// set variables:
var buttonTitles = ["thor", "captain america", "avengers", "iron man"];
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
		buttons.text(buttonTitles[i]);
		//append the button to the page
		$(".panel-body").append(buttons);
	}
};

displayButtons();
	
function getImages(event) {
    event.preventDefault();
    displayButtons();
    // get the attribute of the button clicked, and store in a variable
    var nameOfMovie = $(this).attr('button-');
    // clear out old images from the page (.empty)
    $('.showGifs').empty();

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Mp5TBPxTZUhzOHCk8vZxCsXD1ZhPHdH7&q=" + nameOfMovie;
    // AJAX call to GIPHY
    $.ajax({
	url: queryURL,
	method: "GET"
    }).then (function(movieData) {
	console.log(movieData);
	var movies = movieData.data;
	// loop through response.data
	for (var j = 0; j < movies.length; j++) {
	    // create a jQuery div
	    var newDiv = $("<div class='col-md-3 imageDiv'>");
	    // create a jQuery image
	    var newImage = $("<img class='img-thumbnail gif'>");
	    // Set the src attribute of the jQuery image to be image that the function is looping through
	    newImage.attr("src", movies[j].images.original_still.url);
	    // Add data-state attribute to jQuery image = "still"
	    newImage.attr("data-state", "still");
			// Add data-animateurl attribute to jQuery image
			newImage.attr("data-animateurl", movies[j].images.original.url);
			// Add data-stillurl attribute to jQuery image
			newImage.attr("data-stillurl", movies[j].images.original_still.url);
		// create a jQuery paragrapgh
		var p = $("<p class='panel'>");
	    // Put the rating from GIPHY response into the paragrapgh created
	    p.text("Rating: " + movies[j].rating.toUpperCase());
	    // Append jQuery image to jQuery div
	    newDiv.append(newImage);
	    // Append jQuery paragrapgh to jQuery div
	    newDiv.append(p);
	    // Append jQuery div to page
	    $(".showGifs").append(newDiv);
	}
    })
}

// On click of form submit button - function
$('#submitButton').click(function (event) {
	event.preventDefault();
    // Create variable of user input text field
    var userInput = $("#add-movie-input").val().trim();
    // Push variable just created to array (buttonTitles)
    buttonTitles.push(userInput);
    // Run displayButtons function
    displayButtons();
})	

function gif() {
    // Set variable equal to image clicked data-state attribute
    var imageState = $(this).attr("data-state");
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
}
	
$(document).on("click", ".buttonPressed", getImages);
$(document).on("click", ".gif", gif);
