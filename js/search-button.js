//run the feeds function on document ready
$(document).ready(function() {
	searchButton = document.getElementsByClassName('s-lg-btn-api-drop');
    console.log(searchButton);
    searchButton.innerHTML = '<i class="fa fa-search"></i>';
    console.log('fa fa-search redux');
});
