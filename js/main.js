$(document).ready(function() {
  $('a[href="#"]').click(function (e){
    e.preventDefault();
  });

  // scrolling anchors for nav
  $(document).on('click', '.main-nav-item a', function() {
    $('.main-nav-item').removeClass('active');
    $(this).parent().addClass('active');
  });

  $(document).on('click', '.main-nav-item a', function() {
      if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
          let target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              $('html, body').animate({
                  scrollTop: target.offset().top
              }, 1000);
              return false;
          }
      }
  });

  function toggleMenu () {
    var  mainNav = $('.main-nav');
      $('.burger-btn').click(function(event) {
        event.preventDefault();
        
        $(mainNav).toggleClass('active');
      });

      $(document).on('click', '.main-nav-item a', function(e) {
        e.preventDefault();

        $(mainNav).toggleClass('active');
      });
  }

  // sliding nav-menu init
  toggleMenu();
});