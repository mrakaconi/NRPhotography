// $('body').on('mouseenter mouseleave', '.dropdown', function (e) {
//   var _d = $(e.target).closest('.dropdown'); _d.addClass('show');
//   setTimeout(function () {
//     _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
//     $('[data-toggle="dropdown"]', _d).attr('aria-expanded', _d.is(':hover'));
//   }, 300);
// });

$(document).ready(function () {
    var $item = $('.carousel-item');
    var $wHeight = $(window).height();
    $item.eq(0).addClass('active');
    $item.height($wHeight);
    $item.addClass('full-screen');

    $('.carousel img').each(function () {
      var $src = $(this).attr('src');
      var $color = $(this).attr('data-color');
      $(this).parent().css({
        'background-image': 'url(' + $src + ')',
        'background-color': $color
      });
      $(this).remove();
    });

    $(window).on('resize', function () {
      $wHeight = $(window).height();
      $item.height($wHeight);
    });
    
    $("#footer").hover(function(){
		$("div").animate({bottom:'0'}, 1000);
	});
  });