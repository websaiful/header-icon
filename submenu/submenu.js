$(document).ready(function(){
    $('.sub-btn').click(function(){
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.dropdwon').toggleClass('rotate');
    });
    $('.menu-btn').click(function(){
        $('.side-bar').addClass('active');
        $('.menu-btn').css('visibility','hidden');
       });
    $('.close-btn').click(function(){
        $('.side-bar').removeClass('active',3000);
        $('.menu-btn').css('visibility','visible');
       });
});