$(document).ready(function() {

    // Javascript code goes in here
    var list_of_characters = [];

    $("li > img").each(function() {
        list_of_characters.push({
            source: $(this).attr("src"),
            name:   $(this).attr("data-name"),
            age:    $(this).attr("data-age"),
            gender: $(this).attr("data-gender"),
            parent_class: $(this).parent().attr("class")
        });
    });

    console.log(list_of_characters);

});