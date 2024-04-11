$(document).ready(function(){
    var i=0;
$('.sec1_rit').click(function(){
    i++;
    if(i>1) {
        i=0;
    }
    console.log(i);
    
    $('.sec1_con').animate({
        left:(-100*i)+ "%"
    });
});

$('.sec1_lft').click(function(){
    i--;
    if(i<0) {
        i=1;
    }
    console.log(i);
    
    $('.sec1_con').animate({
        left:(-100*i)+ "%"
    });
});

});


$(document).ready(function(){
    var i=0;
    $('.sec3_but1>div').each(function(index){
        $(this).attr({
            "data-index" : index,
        }).click(function(){
            var indexnum = $(this).attr('data-index');
            console.log(indexnum);

      
        $('.sec3_790_imgwrap').animate({
        left: (-100*indexnum)+ "%"
        });


            $('.sec3_but1>div').removeClass('color');
            $('.sec3_but1>div').eq(indexnum).addClass('color');
        })
    });

});

$(document).ready(function(){
    var i=0;
    $('.sec3_but2>div').each(function(index){
        $(this).attr({
            "data-index" : index,
        }).click(function(){
            var indexnum = $(this).attr('data-index');
            console.log(indexnum);

      
        $('.sec3_790_imgwrap2').animate({
        left: (-100*indexnum)+ "%"
        });


            $('.sec3_but2>div').removeClass('color');
            $('.sec3_but2>div').eq(indexnum).addClass('color');
        })
    });

});

