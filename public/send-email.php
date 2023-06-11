<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.sendgrid.net';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'apikey';                     //SMTP username
    $mail->Password   = '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';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('support@comparemysupplies.com', 'Mailer');
    $mail->addAddress('support@comparemysupplies.com', 'User');

    $mail->addReplyTo('support@comparemysupplies.com', 'Reply');

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Message from ' . $name;
    $mail->Body    = nl2br($message . "\n\n" . "From, " . "\n" .$email);
    $mail->send();
    header("Location: contact-process");
} catch (Exception $e) {
    header("Location: contact-fail");
}
?>