$(document).ready(function(){
    $('.hr').click(function(){
        $('.popup_box').css({"opacity" : "1", "pointer-event":"auto"});
    });
    $('.btn1').click(function(){
        $('.popup_box').css({"opacity" : "0", "pointer-events":"none"
        });
    });
    $('.btn2').click(function(){
        $('.popup_box').css({"opacity" : "0", "pointer-events":"none"
        });
    });
});