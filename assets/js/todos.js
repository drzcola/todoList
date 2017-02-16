// check off specific todos by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

// click on X to delete todos
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});


$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        // grabbing new todos from text input
        var todoText = $(this).val();
        // clear text input
        $(this).val("");
        // create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").on("click", function() {
    $("input[type='text']").fadeToggle(500);
})