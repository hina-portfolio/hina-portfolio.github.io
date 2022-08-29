$(function(){
  // ページ下部固定ボタン表示非表示
  $(window).on('load resize',function(){
      flameTop = $('.offset').offset().top;
      winH = $(window).height();
  });
  $(function() {
      var flameBottom = $('.picture2');
      flameBottom.hide();
      $(window).scroll(function () {
          if ($(this).scrollTop() > flameTop - winH) {
              flameBottom.fadeIn();
          } else {
              flameBottom.fadeOut();
          }
      });
  });
});

