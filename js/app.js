$(document).ready(function() {
	addRemoveItemsToTheList();
});

function addRemoveItemsToTheList() {
	var addItem = function() {
		var inputItem = $('#item').val();
		var createListItem = $('<li>');
		var addToList = $('<span class="check"><i class="fa fa-check fa-lg"></i></span>' + inputItem + '<span class="remove"><i class="fa fa-times fa-lg"></i></span>');
		if ( (inputItem) == '' ) {
			alert("Looks like you didn't type anything");
		} else {
			createListItem.html(addToList).appendTo('.list');
			$('.clear-list').css('display', 'block');
			$('#how-to').show();
		};
		$('#item').val('');
	};
	$('#add').click(addItem);
	$('#item').keypress(function(enter) {
		if ( enter.keyCode == 13 ) {
			addItem();
		};
	});
	$('.clear-list').click(function() {
		$('.list').empty();
		$('.clear-list').css('display', 'none');
		$('#how-to').hide();
	});
	$('.list').on('click', '.remove', function(event) {
		event.preventDefault();
		$(this).parent().remove();
	});
	$('.list').on('click', '.check', function(event) {
		event.preventDefault();
		$(this).parent().css('text-decoration', 'line-through').css('background-color', 'gray');
	});
};