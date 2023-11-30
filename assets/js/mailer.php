<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mail_to = "wordpressriver@gmail.com";

    $name    = trim($_POST["name"]);
    $email   = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = $_POST["subject"];
    $message = trim($_POST["message"]);
    
    if (empty($name) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Please complete the form correctly and try again.";
        exit;
    }
    
    $content = "Name: $name\n";
    $content .= "Subject: $subject\n\n";
    $content .= "Email: $email\n\n";
    $content .= "Message:\n$message\n";

    $headers = "From: $email";

    $success = mail($mail_to, $subject, $content, $headers);
    if ($success) {
        http_response_code(200);
        echo "Thank You! Your message has been sent.";
    } else {
        http_response_code(500);
        echo "Oops! Something went wrong, we couldn't send your message.";
    }

} else {
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}
?>
