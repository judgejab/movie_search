// BUILD A MOVIE SEARCH APP WITH THE OMDB API

// Request data from the OMDb API to display movie information
$('form').submit(function(evt) {

	evt.preventDefault();

	var searchTerm = $('#search');
	var submitButton = $('#submit');

	var omdbAPI = 'http://www.omdbapi.com/?';
	var title = searchTerm.val();
	var movieOptions = {
		s: title,
		r: "json"	
	};

	// Display search results on the page
	function displayMovies(data){
		var movieHTML = '';

		// If a result comes back
		if(data.Response) {

			$.each(data.Search, function(i, movie) {	

				movieHTML += '<li><div class="poster-wrap">';

				// Show placeholder for poster if not available
				if(movie.Poster != "N/A"){
					movieHTML += '<img class="movie-poster" src="' + movie.Poster + '"></div>';
				} else {
					movieHTML += '<i class="material-icons poster-placeholder">crop_original</i>';
				}
				movieHTML += '<span class="movie-title">' + movie.Title + '</span><span class="movie-year">' + movie.Year + '</span></li>';
			});

		// If there aren't any results	
		} else if (data.Response == "False" || typeof data.Response == "undefined") {
			movieHTML += "<li class='no-movies'> <i class='material-icons icon-help'>help_outline</i>No movies found that match: " + title + "</li>";
		}

		// The data should load inside the #movies <ul>
		$('#movies').html(movieHTML);
	
	}

	$.getJSON(omdbAPI, movieOptions, displayMovies);
});


// EXTRA CREDIT:
	// Filter the search by year of release
		// See search form comments in index.html to display the 'year' field

	// Link a movie to its IMDb page
		// Wrap the poster image -- or everything in the <li> -- in a <a> tag that links a movie to its imdb.com page
		// For example: The Amazing Spider-Man

	// Create a movie description page
		// Load or link to a description page displaying a movie's title, year, poster, plot information, and IMDb rating
		// You'll need to write the CSS for this new page
		// See the 'description-page.png' mockup in the 'examples' folder of the project files