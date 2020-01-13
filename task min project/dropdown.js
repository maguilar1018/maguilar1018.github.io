$("nav").on('click',".dropBtn",function (evt) {
    // console.log("clicked on "+$(evt.target).text());
    var sib = $(evt.target).next().one();
    var shown = sib.hasClass('show');
    closeAllDropDowns();
    // open our dropdown, if not shown
    if(!shown) {
        sib.addClass('show');
    }
});


function closeAllDropDowns() {
    // console.log("closing all dropdowns");
    $(".dropContent,.dropClickContent").removeClass('show');
}

// This closes all drop-downs if you click anywhere outside the dropContent

$(window).click(function (evt) { 
    var dcc = $(evt.target).closest(".dropClickContent");
    var inDcc = (dcc.length === 1);
    if (!evt.target.matches('.dropBtn') &&
        !inDcc) {
       closeAllDropDowns();
    }
});