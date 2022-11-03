$(document).ready(function(){
   $('.sub-menu').click(function(){
   $(this).next('.sub-item').slideToggle();
   $(this).find('.dropdwon').toggleClass('rotate');
   });
   
});