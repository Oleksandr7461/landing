$(function() {

	// Custom JS
   function blueasyMenu() {
      var $trigger = $('.trigger-nav'),
          $menu = $('.trigger-victim');

           $trigger.click(function() {
        $(this).next($menu).slideToggle();
      });
	$menu.click(function() { 
        $(this).slideUp();
      });
      
     $(window).resize(function(){
        if ($(window).width() > 992 ){
          $menu.removeAttr('style')
          }
	 $menu.click(function() {
            $(this).slideUp();
          });
      });
    }
    blueasyMenu();
    
    
 /* }); //end ready*/

   /* smooth scroll to the block
  ===============================*/
  $("#js-nav li a, #js-button a").on("click", function(e) {
    
    e.preventDefault();
    
    var currentBlock = $(this).attr("href"),
        currentBlockOffset = $(currentBlock).offset().top;
    
      $("html, body").animate({
        scrollTop: currentBlockOffset + (-61)
      }, 3000);
  });


  $('.slid').slick({
  infinite: true,
  slidesToShow: 2,
  arrows: true,
  variableWidth: true,
  slidesToScroll: 1,
  
  });


});
