$(function() {
  $('.menu-toggle, .fa-times').on('click', function() {
    $('nav').toggleClass('active');
    $('.overlay').toggleClass('menu-open');
  })

  $('.overlay').on('click', function() {
    $('nav').removeClass('active');
    $(this).removeClass('menu-open');
  })

  $(window).on("scroll", function() {
    if($(window).scrollTop() > 100) {
      $("nav").addClass("scroll-navbar");
    } else {
      $("nav").removeClass("scroll-navbar");
    }
  });
});
