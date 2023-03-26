<?php
if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $to = 'takinyemi79@gmail.com'; // replace with your email address
  $subject = 'New message from ' . $name;
  $body = "Name: $name\n\nEmail: $email\n\nMessage: $message";
  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
    echo '<p>Your message has been sent.</p>';
  } else {
    echo '<p>Sorry, there was an error sending your message. Please try again later.</p>';
  }
}
?>
 
