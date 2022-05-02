
$("body").append(`
<div class="modal fade" id="mainModal" tabindex="-1" aria-labelledby="mainModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header alert-success">
                <h5 class="modal-title" id="mainModalLabel">Sikeres!</h5>
                <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
            </div>
            <div class="modal-body">
                
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-success" data-bs-dismiss="modal" id="okBtn">Ok!</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="confirmModal" tabindex="-1" aria-labelledby="confirmModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header alert-success">
                <h5 class="modal-title" id="confirmModalLabel"></h5>
                <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
            </div>
            <div class="modal-body">
            
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal" id="confirmCancelBtn">Cancel!</button>
                <button type="button" class="btn btn-success" data-bs-dismiss="modal" id="confirmOkBtn">Ok!</button>
            </div>
        </div>
    </div>
</div>
`);

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

$('#mainModal #okBtn')[0].onclick = function() {
    $('#mainModal').modal("hide");
};

$('#confirmModal #confirmCancelBtn')[0].onclick = function() {
    $('#confirmModal').modal("hide");
};


function displayConfirmModal(bodyText, headerText = "Are you sure?", callback = function() {}, className = "warning") {
    $('#confirmModal .modal-body').html(bodyText);
    $('#confirmModal .modal-title').html(headerText);
    document.querySelector("#confirmModal .modal-header").className = "modal-header alert-" + className;
    //$('#confirmModal .btn').prop("className", "btn btn-" + className);
    $('#confirmModal').modal({
        show: true,
        backdrop: true,
        keyboard: true,
        focus: true
    });
    $("#confirmOkBtn")[0].onclick = function() {
        $('#confirmModal').modal("hide");
        callback();
    }
}