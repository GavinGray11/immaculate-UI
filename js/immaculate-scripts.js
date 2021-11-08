$(document).ready(function () {
  $('.itab').on('click', function () {
    $('.itab').removeClass('active-tab');
    $(this).addClass('active-tab');
  });
});