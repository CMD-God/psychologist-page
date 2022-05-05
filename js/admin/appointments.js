
var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
]

function refreshAppointments() {
    $.getJSON("php/getAppointments.php", {}, function(data) {
        $("#appointmentsTable tr:not(.tableHeader)").remove();
        if (data.length > 0) {
            $("#appointmentsTable").css("display", "table");
            $("#noAppointments").css("display", "none");
            var tBody = $("#appointmentsTable tbody");
            for (var i=0; i < data.length; i++) {
                var row = data[i];
                tBody.append(`
                    <tr>
                        <td>${row.id}</td>
                        <td>${row.name}</td>
                        <td>${row.phone_number}</td>
                        <td>${row.email}</td>
                        <td>${days[Number(row.day)-1]}</td>
                        <td>${row.hour < 10 ? "0" : ""}${row.hour}:00</td>
                        <td>
                            <button class="btn btn-danger" onclick="askAppointmentDelete(${row.id})"><i class="bi bi-trash"></i></button>
                        </td>
                    </tr>
                `)
            }
        } else {
            $("#appointmentsTable").css("display", "none");
            $("#noAppointments").css("display", "block");
        }
    })
}

function askAppointmentDelete(id) {
    var cb = function() {
        deleteAppointment(id);
    }
    displayConfirmModal(`Are you sure you want to delete appointment #${id}?`, "Are you sure?", cb);
}

function deleteAppointment(id) {
    $.post("php/deleteAppointment.php", {id: id.toString()}, function(data) {
        console.log(data);
        if (data == "SUCCESS") {
            displayMainModal(`Successfully deleted appointment #${id}!`, "success", "Success!");
            refreshAppointments();
        } else {
            displayMainModal(data, "danger", "An error occurred!");
        }
    })
}

refreshAppointments();