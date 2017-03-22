$(document).ready(function($) {
	var chatCode='<iframe src="//www.bc.edu/content/dam/bc1/schools/law/js/library/chatCode.html" seamless frameborder=0 height=220></iframe>';
	$(".margin-bottom-xlg")
        .find(".pad-bottom-sm:contains('Help is Just a Click Away')")
    	.parent()
    	.parent()
        .html(chatCode);
});


    
