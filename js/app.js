$(document).ready(function() {
	addRemoveItemsToTheList();
});

function addRemoveItemsToTheList() {
	//Function for adding an item
	var addItem = function() {
		var inputItem = $('#item').val();
		var createListItem = $("<li>");
		var checkMark = '<span class="check"><i class="fa fa-check fa-lg"></i></span>';
		var deleteItem = '<span class="remove"><i class="fa fa-times fa-lg"></i></span>';
		var addToList = $(checkMark + inputItem + deleteItem);
		if ( (inputItem) == '' ) {
			alert("Looks like you didn't type anything");
		} else {
			createListItem.fadeTo("slow", 1).html(addToList).appendTo('.list');
			$('.clear-list').css('display', 'block');
			$('#how-to').show();
		};
		$('#item').val('');
	};
	// Added click and keypress function for input
	$('#add').click(function() {
		addItem();
	});
	$('#item').keypress(function(enter) {
		if ( enter.keyCode == 13 ) {
			addItem();
		};
	});
	//Button to clear list and start over
	$('.clear-list').click(function() {
		$('.list').empty();
		$('.clear-list').css('display', 'none');
		$('#how-to').hide();
	});
	//Removes item from the list
	$('.list').on('click', '.remove', function(event) {
		event.preventDefault();
		$(this).parent().fadeOut(150, function() {
			$(this).remove();
		});
	});
	//Checks an item off the list
	$('.list').on('click', '.check', function(event) {
		event.preventDefault();
		$(this).parent().toggleClass("cross-off");
		$()
	});
};