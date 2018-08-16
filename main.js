$(document).ready(function() {
	$('.fa-times').click(function() {
		$('.sidebar-menu').addClass('hide-menu');
		$('.toggle-menu').addClass('opacity-one');
	});
	$('toggle-menu').click(function() {
		$('.sidebar-menu').removeClass('hide-menu');
		$('.toggle-menu').removeClass('opacity-one');
	});
});