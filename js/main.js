$(document).ready(function () {
  var $item = $('.carousel-item');
  var $wHeight = $(window).height();
  $item.eq(0).addClass('active');
  $item.height($wHeight);
  $item.addClass('full-screen');

  // $("#myModal").modal('show');

  $('#click').on('click', function () {
    $('#mainbody').removeClass("darken");
    $("#myModal").modal('hide');
  })
  $('#close').on('click', function () {
    $("#mainbody").addClass("black");
    $("#myModal").modal('hide');
  })

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

  $("#footer").hover(function () {
    $("div").animate({ bottom: '0' }, 1000);
  });
});

$(document).ready(function () {
  // Get saved data from sessionStorage
  var visited = sessionStorage.getItem('visited');
  if (visited !== "true") {
    $('#myModal').modal('show');
    sessionStorage.setItem('visited', "true"); // Save data to sessionStorage
}
});
// setTimeout(function() {
//   $('#myModal').modal('hide');
// }, 20000);
