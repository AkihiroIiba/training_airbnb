// 'use strict';
$(function() {

  const open = $('#navicon1');
  const close = $('#navicon3');
  const modal = $('#modal');

  open.click(function() {
    modal.removeClass('hidden');
  });
  close.click(function() {
    modal.addClass('hidden');
  });


  var start1 = $('#start1');   
  start1.hide();
  //スクロールが500-6075ならボタン表示
  $(window).scroll(function () {
      if (500 < $(this).scrollTop() && $(this).scrollTop() < 6075) {
          start1.fadeIn();
      } else {
          start1.fadeOut();
      }
  });
});
