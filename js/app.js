$(document).ready(function() {

    // Javascript code goes in here
    var list_of_characters = [
        {
            "source": "http://www.cartoonnetwork.co.uk/sites/www.cartoonnetwork.co.uk/files/imagecache/tv_show_character_thumb/finn_thumb.png",
            "name": "Finn",
            "age": "8",
            "gender": "male",
            "parent_class": "js-finn-image"
        },
        {
            "source": "http://www.cartoonnetwork.co.uk/sites/www.cartoonnetwork.co.uk/files/imagecache/tv_show_character_thumb/jake_thumb.png",
            "name": "Jake",
            "age": "30",
            "gender": "male",
            "parent_class": "js-jake-image"
        },
        {
            "source": "http://www.cartoonnetwork.co.uk/sites/www.cartoonnetwork.co.uk/files/imagecache/tv_show_character_thumb/beemo_thumb.png",
            "name": "Beemo",
            "age": "2",
            "gender": "female",
            "parent_class": "js-beemo-image"
        },
        {
            "source": "http://www.cartoonnetwork.co.uk/sites/www.cartoonnetwork.co.uk/files/imagecache/tv_show_character_thumb/ice_king_thumb.png",
            "name": "Ice King",
            "age": "40",
            "gender": "male",
            "parent_class": "js-ice-king-image"
        },
        {
            "source": "http://www.cartoonnetwork.co.uk/sites/www.cartoonnetwork.co.uk/files/imagecache/tv_show_character_thumb/gunther_thumb.png",
            "name": "Gunther",
            "age": "4",
            "gender": "male",
            "parent_class": "js-gunther-image"
        },
        {
            "source": "http://www.cartoonnetwork.co.uk/sites/www.cartoonnetwork.co.uk/files/imagecache/tv_show_character_thumb/princess_bubblegum_thumb.png",
            "name": "Princess Bubblegum",
            "age": "18",
            "gender": "female",
            "parent_class": "js-princess-bubblegum-image"
        },
        {
            "source": "http://www.cartoonnetwork.co.uk/sites/www.cartoonnetwork.co.uk/files/imagecache/tv_show_character_thumb/lemongrab_thumb.png",
            "name": "Lemon Grab",
            "age": "30",
            "gender": "male",
            "parent_class": "js-lemon-grab-image"
        }
    ];

    // Create the list on the page using the data above
    $("body").append("<ul />");
    $.each(list_of_characters, function(index, character) {
        $("ul").append('<li class="'+character.parent_class+'"><img src="'+character.source+'" data-name="'+character.name+'" data-age="'+character.age+'" data-gender="'+character.gender+'" /></li>');
    });

    // Use jQuery UI
    $("ul").sortable().disableSelection();

    // Reset the order when the reset button is clicked
    $(".reset").click(function() {
        $.each(list_of_characters, function(index, character) {
            var destination = $("ul").children().eq(index),
                source = $("." + character.parent_class);
            source.insertBefore(destination);
        });
    });

});