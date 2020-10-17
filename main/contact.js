$('.btn button').click(function (e) { 
    e.preventDefault();

    if($('.ms-name')[0].value == ""){
        $('.ms-name').attr('placeholder', '!That Filed Cant Be Empty');
    }
    if ($('.ms-email')[0].value == ""){
        $('.ms-email').attr('placeholder', '!That Filed Cant Be Empty');
    }
    if ($('.ms-content')[0].value == ""){
        $('.ms-content').attr('placeholder', '!That Filed Cant Be Empty');
    }
    
});


/* menu */

$('.menu-img').click(function (e) { 
    e.preventDefault();
    $('a').addClass('active-a');
    $('.menu ul li').css("display", "block");
    $('.menu ul li a').css("margin", "10px 0 0 0");
    $('.menu-img').animate(
        { deg: 90 },
        {
          duration: 1200,
          step: function(now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' ,
            margin: '0 15px 10px'});
          }
        }
      );
});
