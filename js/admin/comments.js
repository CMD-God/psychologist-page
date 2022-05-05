
function refreshComments() {
    $.getJSON("php/getComments.php", {}, function(data) {
        $("#commentsTable tr:not(.tableHeader)").remove();
        if (data.length > 0) {
            $("#commentsTable").css("display", "table");
            $("#noComments").css("display", "none");
            var tBody = $("#commentsTable tbody");
            for (var i=0; i < data.length; i++) {
                var row = data[i];
                tBody.append(`
                    <tr>
                        <td>${row.id}</td>
                        <td>${row.name}</td>
                        <td>${row.email}</td>
                        <td>${row.body.replaceAll("\n", "<br>")}</td>
                        <td class="text-${row.isSafe == '1' ? "success" : "danger"}">${row.isSafe == '1' ? "Safe" : "Unsafe"}</td>
                        <td>
                            <button class="btn btn-success" onclick="markSafe(${row.id}, true)"><i class="bi bi-eye"></i></button>
                            <button class="btn btn-danger" onclick="markSafe(${row.id}, false)"><i class="bi bi-eye-slash"></i></button>
                            <button class="btn btn-danger" onclick="askCommentDelete(${row.id})"><i class="bi bi-trash"></i></button>
                        </td>
                    </tr>
                `)
            }
        } else {
            $("#commentsTable").css("display", "none");
            $("#noComments").css("display", "block");
        }
    })
}

function markSafe(id, safe) {
    $.post("php/setCommentSafeness.php", {id: id.toString(), isSafe: safe ? '1' : '0'}, function(data) {
        console.log(data);
        if (data == "SUCCESS") {
            displayMainModal(`Successfully marked comment #${id} as <span class="text-${safe ? "success" : "danger"}">${safe ? "Safe" : "Unsafe"}</span>!`, "success", "Success!");
            refreshComments();
        } else {
            displayMainModal(data, "danger", "An error occurred!");
        }
    })
}

function askCommentDelete(id) {
    var cb = function() {
        deleteComment(id);
    }
    displayConfirmModal(`Are you sure you want to delete comment #${id}?`, "Are you sure?", cb);
}

function deleteComment(id) {
    $.post("php/deleteComment.php", {id: id.toString()}, function(data) {
        console.log(data);
        if (data == "SUCCESS") {
            displayMainModal(`Successfully deleted comment #${id}!`, "success", "Success!");
            refreshComments();
        } else {
            displayMainModal(data, "danger", "An error occurred!");
        }
    })
}

refreshComments();

