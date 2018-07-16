// javascript + jquery code goes here

// check off to-dos by clicking them

$("ul").on("click", "li", function(){ 
// event listener to a ul that exists when the page loads so that it accounts for li elements that are not added yet
	$(this).toggleClass("checked"); // adds or removes the checked class
});

// click on "X" to delete to-do

$("ul").on("click", "span", function(event){ // click event listener for spans within a ul
	// console.log("ta-hee"); for testing purposes
	$(this).parent().fadeOut(500, function(){
		$(this).remove(); // "this" refers to the parent element, not the span
	}); // removes the li which the span is contained in
	event.stopPropagation(); 
	// prevents any events firing after the current event (event bubbling) e.g. toggling the "checked" class
});

// decides what happens when user gives input

$("input[type='text']").keypress(function(event){
	if(event.which === 13){ // checks if the enter key is pressed
		var toDoValue = $(this).val(); // grabs the new to-do value from user input
		// creates a new to-do and adds to the list
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + toDoValue + "</li>"); // adds a new to-do from user's input
		$(this).val('');
	}
});

// toggles the form

$(".fa-times").click(function(){
	$("input[type='text']").fadeToggle();
	$(this).toggleClass("fa-times fa-plus");
});