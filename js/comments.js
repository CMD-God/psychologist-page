
var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

var feedbackStrings = {
    ["php/sendComment.php"] : "A megjegyzés sikeresen el lett küldve!"
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
            displayMainModal(errorMessages[data], "danger", "Hiba!");
        }
        console.log(data);
    })
}

function displayMainModal(bodyText, className = "success", headerText = "Sikeres!") {
    $('#mainModal .modal-body').html(bodyText);
    $('#mainModal .modal-title').html(headerText);
    document.querySelector("#mainModal .modal-header").className = "modal-header alert-" + className;
    $('#mainModal .btn').prop("className", "btn btn-" + className);
    $('#mainModal').modal({
        show: true,
        backdrop: true,
        keyboard: true,
        focus: true
    });
}

$('#mainModal #okBtn').click(
    function() {
        $('#mainModal').modal("hide");
    }
);