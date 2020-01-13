function updateTags(){
    //make radio button dom element, add .keys() as text of radio button, and use these instead of the static ones
    //it's gotta do forEach through tag colors
    $(".dynamic-tags").empty();
    var tagsArr = Object.keys(tagColors);
    console.log(tagsArr);
    tagsArr.forEach (function(elt) {
        var $radioButton = $("<input></input>", {'type': 'radio','name':'tag', 'value':elt});
        var $label = $("<span></span>");
        $($label).text(elt).append("<br>");
        $(".dynamic-tags").append($radioButton);
        $(".dynamic-tags").append($label);
    })
}