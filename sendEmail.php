<?php

$destination = "nguyenjordan89@gmail.com";

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$number = $_POST['number'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$header = "Envoi depuis le formulaire de contact du portfolio";

$messageComplete = "Nom : $firstname $lastname \n";
$messageComplete .= "Téléphone : $number \n";
$messageComplete .= "Email : $email \n";
$messageComplete .= "Sujet : $subject \n";
$messageComplete .= "Message : $message";

mail($destination, $header, $messageComplete);
header('Location: index.html');