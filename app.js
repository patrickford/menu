$(document).ready(function() {

  $('.menu-item').click(function() {
    $('.menu-item').removeClass('active');
    $(this).addClass('active');
    var selected = $(this).text();
    console.log(selected);
  });

});