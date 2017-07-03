$(function(){

  // Console Message for Curious Devs 
  // ===================================================================
  var consoleCSS = 'color:#111;'; 
  var message = "%c \n =================================\n David J. Davis \n =================================\n\n Hello. I see your curious. Take a look around.  \n You will find that I don't reinvent the wheel \n and that I take advantage of some pretty cool \n libraries to accomplish things quickly and \n efficiently. \n\n\n\n"
  console.info( message, consoleCSS);

  // Smooth Scrolling using Velocity JS 
  // ===================================================================
  $('a[href*="#"]').on('click', function (e) {
      // prevent default action and bubbling
      e.preventDefault();
      e.stopPropagation();

      // set target to anchor's "href" attribute
      var target = $(this).attr('href');
      
      // scroll to each target
      $(target).velocity('scroll', {
          duration: 500,
          offset: -40,
          easing: 'ease-in-out'
      });
  });

});