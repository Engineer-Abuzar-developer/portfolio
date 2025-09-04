<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer classes manually if not using Composer
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mail = new PHPMailer(true);

    try {
        // SMTP Configuration
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'm.abuzarbadarsheikh@gmail.com'; // Must match setFrom
        $mail->Password   = 'igsy tzmi ohdi ybvx';            // Gmail App Password
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;
        $mail->CharSet    = 'UTF-8';

        // Sender and recipient
        $mail->setFrom('m.abuzarbadarsheikh@gmail.com', 'Contact Form'); // Must match Username
        $mail->addAddress('m.abuzarbadarsheikh@gmail.com');              // Receiving email
        $mail->addReplyTo($_POST['email'], $_POST['name']);              // Reply to sender

        // Email content
        $mail->isHTML(false);
        $mail->Subject = 'New Contact Form Submission';

        $name    = htmlspecialchars($_POST["name"]);
        $email   = htmlspecialchars($_POST["email"]);
        $service = htmlspecialchars($_POST["service"]);
        $budget  = htmlspecialchars($_POST["budget"]);
        $details = htmlspecialchars($_POST["details"]);

        $body  = "Name: $name\n";
        $body .= "Email: $email\n";
        $body .= "Service Needed: $service\n";
        $body .= "Budget Range: $budget\n";
        $body .= "Project Details:\n$details\n";

        $mail->Body = $body;

        // Send the email
        $mail->send();
        echo "<script>alert('Thank you! Your message has been sent.');window.location.href='index.html';</script>";
    } catch (Exception $e) {
        echo "<script>alert('Message could not be sent. Mailer Error: {$mail->ErrorInfo}');window.location.href='index.html';</script>";
    }
} else {
    header("Location: index.html");
    exit();
}
?>
