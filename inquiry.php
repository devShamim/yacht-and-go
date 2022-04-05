<?php
$data = [];
if($_POST) {
    $user_name = "";
    $visitor_email = "";
    $start_date = "";
    $end_date = "";
    $cabins = "";
    $budget = "";
    $message = "";
    $email_body = "<div>";

    if(isset($_POST['user_name'])) {
        $user_name = filter_var($_POST['user_name'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $email_body .= "<div>
                           <label><b>Visitor Name:</b></label>&nbsp;<span>".$user_name."</span>
                        </div>";
    }

    if(isset($_POST['visitor_email'])) {
        $visitor_email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['visitor_email']);
        $visitor_email = filter_var($visitor_email, FILTER_VALIDATE_EMAIL);
        $email_body .= "<div>
                           <label><b>Visitor Email:</b></label>&nbsp;<span>".$visitor_email."</span>
                        </div>";
    }

    if(isset($_POST['start_date'])) {
        $start_date = filter_var($_POST['start_date'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $email_body .= "<div>
                           <label><b>Start Date:</b></label>&nbsp;<span>".$start_date."</span>
                        </div>";
    }

    if(isset($_POST['end_date'])) {
        $end_date = filter_var($_POST['end_date'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $email_body .= "<div>
                           <label><b>End Date:</b></label>&nbsp;<span>".$end_date."</span>
                        </div>";
    }

    if(isset($_POST['cabins'])) {
        $cabins = filter_var($_POST['cabins'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $email_body .= "<div>
                           <label><b>Cabins:</b></label>&nbsp;<span>".$cabins."</span>
                        </div>";
    }

    if(isset($_POST['budget'])) {
        $budget = filter_var($_POST['budget'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        $email_body .= "<div>
                           <label><b>Budget:</b></label>&nbsp;<span>".$budget."</span>
                        </div>";
    }

    if(isset($_POST['visitor_message'])) {
        $visitor_message = htmlspecialchars($_POST['visitor_message']);
        $email_body .= "<div>
                           <label><b>Visitor Message:</b></label>
                           <div>".$visitor_message."</div>
                        </div>";
    }

    $recipient = "shamimeforb@gmail.com";

    $email_body .= "</div>";

    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $visitor_email . "\r\n";
    $success = mail($recipient, $user_name, $email_body, $headers);
    if($success) {
        echo "<p>Thank you for contacting us, $user_name. You will get a reply within 24 hours.</p>";
    } else {
        echo '<p>We are sorry but the email did not go through.</p>';
    }

} else {
    echo '<p>Something went wrong</p>';
}
?>