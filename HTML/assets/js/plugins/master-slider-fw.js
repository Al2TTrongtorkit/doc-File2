var MSfullWidth = function () {

  return {
    //Master Slider - Full Width
    initMSfullWidth: function () {
      var slider = new MasterSlider();
        slider.setup('masterslider' , {
        width:1024,
        height:500,
        fullwidth:true,
        centerControls:false,
        speed:10,
        view:'fade',
        loop:true,
      });
      slider.control('arrows');

    } // end initMSfullWidth
  }; // end return

}();