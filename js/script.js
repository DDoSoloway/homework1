jQuery ( function () {
   $('.col-sm-3, #schedule').on('click', function () {
     $('.overlay').fadeIn(300);
    
         $('.modal').animate( {
             //opacity:"show",
             height:"toggle"

         },800);
    $('.close').on('click', function () {
        // $('.modal').fadeOut(300);
        $('.modal').animate( {
            opacity:"hide",
            height:"hide"
        });
            $('.overlay').fadeOut(300);

    });     

  });

});