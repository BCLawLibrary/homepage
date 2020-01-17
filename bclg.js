$(document).ready(function($) {
	var chatCode='<div id="libchat_fe40219deb0b08ee428db6be50489036"></div><script type="text/javascript" src="https://v2.libanswers.com/load_chat.php?hash=fe40219deb0b08ee428db6be50489036"></script>';
	$(".marging-bottom-xlg")
        .find(".pad-bottom-sm:contains('Help is Just a Click Away')")
    	.parent()
    	.parent()
        .html(chatCode);
});
