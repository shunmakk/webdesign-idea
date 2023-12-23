$(window).on('load', function(){
 
$("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述

//=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
$("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述

$('body').addClass('appear');
});

//=====背景が伸びた後に動かしたいJSをまとめる
$('.splashbg').on('animationend', function() { 
//この中に動かしたいJSを記載
});


});