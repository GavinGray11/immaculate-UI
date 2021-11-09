$(document).ready(function () {
  $('.itab').on('click', function () {
    $('.itab').removeClass('active-tab');
    $(this).addClass('active-tab');
  });
});


const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})