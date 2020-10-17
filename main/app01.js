var i = 1;

$('.btn-2').click(function (e) { 
    e.preventDefault();
    if(i != 2) {
        $('.btn-2').addClass('active-btn');
        $('.btn-1').removeClass('active-btn');
        $('.btn-3').removeClass('active-btn');
        var head2 = "Messaging";
        $('.header')[0].innerText = head2;
        $('.header').fadeIn();
        var content2 = "Lorem ipsum dolor sit amet, consectetur<br>adipiscing elit, sed do eiusmod tempor<br>incididunt aliqua.";
        $('.content-p').html(content2);
        $('.right-content img').attr('src', 'images/home/Messaging 1.png');
        i=2;
    }    
});

$('.btn-3').click(function (e) { 
    e.preventDefault();
    if(i != 3) {
        $('.btn-3').addClass('active-btn');
        $('.btn-1').removeClass('active-btn');
        $('.btn-2').removeClass('active-btn');
        var head3 = "Personal text";
        $('.header')[0].innerText = head3;
        $('.header').fadeIn();
        var content3 = "Lorem ipsum dolor sit amet, consectetur<br>adipiscing elit, sed do eiusmod tempor<br>incididunt aliqua. laboris nisi ut aliquip<br>ex ea commodo consequat.";
        $('.content-p').html(content3);
        $('.right-content img').attr('src', 'images/home/Personal text 1.png');
        i=3;
    }    
});

$('.btn-1').click(function (e) { 
    e.preventDefault();
    if(i != 1) {
        $('.btn-1').addClass('active-btn');
        $('.btn-2').removeClass('active-btn');
        $('.btn-3').removeClass('active-btn');
        var head1 = "Group Chating";
        $('.header')[0].innerText = head1;
        $('.header').fadeIn();
        var content1 = "Lorem ipsum dolor sit amet, consectetur<br>adipiscing elit, sed do eiusmod tempor<br>incididunt ut labore et dolore magna<br>aliqua.";
        $('.content-p').html(content1);
        $('.right-content img').attr('src', 'images/home/Group chat 1.png');
        i=1;
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
