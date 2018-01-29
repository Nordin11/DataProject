// ALL THE FUNCTIONS THAT HAS TO DO WITH THE INTERACTIONS

// hide everything that has to be hidden at start
$('#finance-matrix').hide();
$('#tech-matrix').hide();
$('#services-matrix').hide();
$('#materials-matrix').hide();
$('#goods-matrix').hide();
$('#placeholder-linegraph').hide();
$('#linegraph').hide();
$('#about-div').hide();

// function that shows matrix when clicked on dropdown option
function showonlyone(thechosenone) {
	$('.showmatrix').each(function(index) {
		// show the matrix with the id of the option that is clicked
		if ($(this).parent().attr("id") == thechosenone) {
			$(this).parent().show(200);
			$('#linegraph').hide();
			$('#placeholder-correlation').hide();
			$('#placeholder-linegraph').show();
			// slide down to bottom of page
			$('html, body').animate({ 
				scrollTop: $(document).height()-$(window).height() + 410}, 
				1000, 
			);
		}
		else {
			$(this).parent().hide(600);
		}
	});
}

// close the matrix div
function hideMatrix() {
	$('#placeholder-correlation').show();
	$('#finance-matrix').hide();
	$('#tech-matrix').hide();
	$('#services-matrix').hide();
	$('#materials-matrix').hide();
	$('#goods-matrix').hide();
}

// show the about div
function showAbout() {
	$('#about-div').show();
}

// hide about div
function hideAbout() {
	$('#about-div').hide();
}

// close the chart div
function hideChart() {
	$('#placeholder-linegraph').show();
	$('#linegraph').hide();
}

