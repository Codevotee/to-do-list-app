// javascript + jquery code goes here

// check off to-dos by clicking them

$("li").click(function(){
	$(this).toggleClass("checked");
});