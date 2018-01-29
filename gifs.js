// On page load:
	//set variables:
		//buttonTitles = ["", "", "", ""]
	//function displayButtons
		//clear previous buttons from screen
		//for loop through buttonTitles
			//create a jquery button
			//add attribute to jquery button created (attribute title: "button-")
			//put the current buttonTitle that we're looping through in the button (.html)
			//append the button to the page
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
					


