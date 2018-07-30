// check off selected todos
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Delete Todo
$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Add new Todo
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

//Click the plus icon to remove input area
$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});
