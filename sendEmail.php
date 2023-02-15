<?php

$destination = "nguyenjordan89@gmail.com";

$firstname = $_POST['prénom'];
$lastname = $_POST['nom'];
$number = $_POST['number'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$header = "Envoi depuis le formulaire de contact";
$messageComplete = "\n Prénom :" . $firstname . "\n" . "Email :" . $email . "\n" . "Telephone :" . $number . "\n" .
  "Subject :" . $subject . "\n" . "Message" . $message;
mail($destination, $subject, $messageComplete, $header);
header('Location: index.html');