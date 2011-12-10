// AUTHOR: Drew Dahlman ( www.drewdahlman.com )
// BACKGROUND.js v2.0

var background = function () {

    // OPTIONS
    var startHeight = 3;
    var startWidth = 4;

    return {
      // INIT
      init: function () {
        // Calculates the ratio
        ratio = startHeight / startWidth;

        // GRAB DIMENSIONS					   
        var browserwidth = $(window).width();
        var browserheight = $(window).height();

        //Resize image to proper ratio
        if ((browserheight / browserwidth) > ratio) {
          $("#background img").height(browserheight);
          $("#background img").width(browserheight / ratio);

        } else {
          $("#background img").width(browserwidth);
          $("#background img").height(browserwidth * ratio);

        }
      },

      newBG: function (e) {
        $("#background").fadeOut();
        $.ajax({
          url: e,
          success: function (msg) {

            $("#background").html("<img src='" + e + "'/>");

            // GRAB DIMENSIONS					   
            var browserwidth = $(window).width();
            var browserheight = $(window).height();

            //Resize image to proper ratio
            if ((browserheight / browserwidth) > ratio) {
              $("#background img").height(browserheight);
              $("#background img").width(browserheight / ratio);

            } else {
              $("#background img").width(browserwidth);
              $("#background img").height(browserwidth * ratio);

            }
            $("#background").fadeIn();
          }
        });
      }
    }
  }();

background.init();
	// RESIZE
window.onresize = function() {
      // GRAB DIMENSIONS					   
      var browserwidth = $(window).width();
      var browserheight = $(window).height();

      //Resize image to proper ratio
      if ((browserheight / browserwidth) > ratio) {
        $("#background img").height(browserheight);
        $("#background img").width(browserheight / ratio);

      } else {
        $("#background img").width(browserwidth);
        $("#background img").height(browserwidth * ratio);

      }
}