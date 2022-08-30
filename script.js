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


$(window).on('scroll load', function(){        /* ページロード時、またはスクロールされた時*/
  var scroll = $(this).scrollTop();            /* 現在のスクロール量を測定 */
  var windowHeight = $(window).height();       /* ウィンドウの高さを測定 */
  $('.fadeIn').each(function(){                /* 「fadeIn」のクラスがついているものを1つずつ確認し・・・ */
    var cntPos = $(this).offset().top;         /* 対象の要素の上からの距離を測定 */
    if(scroll > cntPos - windowHeight + windowHeight / 3){  /* 要素がある位置までスクロールされていたら */
      $(this).addClass('active');              /* 「active」のクラスを付与 */
    }
  });
});
