
var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

var feedbackStrings = {
    ["php/sendComment.php"] : "A megjegyzés sikeresen el lett küldve!",
    ["php/sendAppointment.php"] : "Az időpont kérelmezése rögzítve!"
}

var errorMessages = {
    "INVALID_INPUT_ERROR": "A bemeneti adatok hibások. Kérem ellenőrizze őket és próbálja meg újra!"
}

function sendFormData(event, address) {
    event.preventDefault();
    const formData = new FormData(event.srcElement);
    var data = {};
    formData.forEach( function(e, i) {data[i] = e;});

    $.post(address, data, function(data) {
        if (data == "SUCCESS") {
            displayMainModal(feedbackStrings[address]);
            event.srcElement.reset();
        } else {
            displayMainModal(errorMessages[data.trim()] || "Egy hiba történt. Kérem próbálja meg később!", "danger", "Hiba!");
        }
        console.log(data);
    })
}

var commentsCarousel;

function setupCarousel() {
    var inner = $("#commentsCarousel .carousel-inner");
    $.getJSON("php/getCommentsSite.php", {}, function(data) {
        console.log("DATA", data);
        for (var i=0; i < data.length; i++) {
            var row = data[i];
            inner.append(`
                <div class="carousel-item">
                    <div class="comment">
                        <div class="commentBody">"${row.body.replaceAll("\n", "<br>")}"</div>
                        <div class="commentAuthor">${row.name}</div>
                    </div>
                </div>
            `);
        }

        $("#commentsCarousel .carousel-inner .carousel-item:first-child").addClass("active");
        
        commentsCarousel = $('#commentsCarousel').carousel({ // The return value is simply the carousel element. You will have to call the carousel method on this every single time still.
            interval: false,
            keyboard: false,
            pause: false,
            ride: false,
            wrap: true
        });
    });
}

function moveCarousel(is_next = true) {
    commentsCarousel.carousel(is_next ? "next" : "prev");
}

setupCarousel();