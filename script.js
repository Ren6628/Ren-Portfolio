$(function () {
  $('.burger-btn').on('click',function(){
    $('.burger-btn').toggleClass('close');
    $('.nav-wrapper').toggleClass('slide-in'); 
    $('body').toggleClass('noscroll');
  });
});
$(function () {
  $('.nav-item').on('click',function(){
    $('.burger-btn').toggleClass('close');
    $('.nav-wrapper').toggleClass('slide-in'); 
    $('body').toggleClass('noscroll');
  });
});
$(function () {
  $('.works-img').mouseover(function() {
    $('.works-text').removeClass("none");
  })
});
$(function () {
  $('.works-img').mouseout(function(e) {
    $('.works-text').addClass("none");
})
});
