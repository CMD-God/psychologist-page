
<?php

require_once "php/config.php";

if (!$is_logged_in) {
    force_login();
}

?>

<html>

    <head>
        <title>Admin Console</title>
        <script src="https://kit.fontawesome.com/43a967615b.js" crossorigin="anonymous"></script>
		<link href="css/bootstrap.min.css" rel="stylesheet">
		<link href="css/bootstrap-icons.css" rel="stylesheet">
		<link href="css/admin.css" rel="stylesheet">
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
    </head>

    <body>
        <div id="mainContent">
            <div id="navLine">
                <div class="navItem selected" data-page="commentsPage">Comments</div>
                <div class="navItem" data-page="appointmentsPage">Appointments</div>
            </div>
            <div id="topMenu">Stuff goes here later</div>
            <div id="commentsPage" class="page activePage">
                <h1 id="noComments">There are no comments on the database!</h1>
                <table id="commentsTable">
                    <tr class="tableHeader">
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Body</td>
                        <td>Is Safe</td>
                        <td>Actions</td>
                    </tr>
                </table>
            </div>
            <div id="appointmentsPage" class="page">
                <h1 id="noAppointments">There are no appointments on the database!</h1>
                <table id="appointmentsTable">
                    <tr class="tableHeader">
                        <td>Id</td>
                        <td>Name</td>
                        <td>Phone Number</td>
                        <td>Email</td>
                        <td>Day</td>
                        <td>Hour</td>
                        <td>Actions</td>
                    </tr>
                </table>
            </div>
        </div>

        <script src="js/jquery-3.6.0.min.js"></script>
		<script src="js/bootstrap.min.js"></script>
        <script src="js/modal_manager.js"></script>
        <script src="js/admin/comments.js"></script>
        <script src="js/admin/appointments.js"></script>
        <script src="js/admin/pages.js"></script>
    </body>

</html>

