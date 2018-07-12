// javascript + jquery code goes here

// check off to-dos by clicking them

$("li").click(function(){
	$(this).toggleClass("checked");
});

// click on "X" to delete to-do

$("span").click(function(event){
	// console.log("ta-hee"); for testing purposes
	$(this).parent().fadeOut(500, function(){
		$(this).remove(); // "this" refers to the parent element, not the span
	}); // removes the li which the span is contained in
	event.stopPropagation(); 
	// prevents any events firing after the current event (event bubbling) e.g. toggling the "checked" class
});