
// $("#commentsPage").addClass("activePage");

function changePage(e) {
    $(".page").removeClass("activePage");
    $("#" + e.getAttribute("data-page")).addClass("activePage");
    $(".navItem").removeClass("selected");
    $(e).addClass("selected");
}

$(".navItem").each(function(i, e) {
    const elem = e;
    e.onclick = function() {changePage(elem);};
});

