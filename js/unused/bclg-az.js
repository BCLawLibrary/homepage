$(document).ready(function() {
setTimeout(function(){
  $('.s-lg-az-result').each(function() {
    if ($(this).find('.s-lg-content-more-info').attr('id')) {
      var myID = $(this).find('.s-lg-content-more-info').attr('id').replace('s-lg-1-more-info-database-moreinfo-','');
      $(this).attr('id',myID);
      }
      else {
      }
      });
    if(window.location.hash) {
        $('html, body').animate({scrollTop:$(window.location.hash).offset().top}, 'slow');
      } else {
      }
    }, 1000);
});
