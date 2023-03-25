<?php
if(isset($_POST['submit'])){
    $to = "takinyemi79@gmail.com"; // your email address
    $subject = "New message from your website";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $headers = "From: " . $name . " <" . $email . ">\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    if(mail($to, $subject, $message, $headers)){
        echo "Thank you for contacting us!";
    } else{
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>
