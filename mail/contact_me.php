<?php
// Check for empty fields
if (empty($_POST['name']) ||
    empty($_POST['email']) ||
    empty($_POST['phone']) ||
    empty($_POST['company']) ||
    empty($_POST['message']) ||
    !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    echo "No arguments provided!";
    return false;
}

// Sanitize form inputs
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$company = strip_tags(htmlspecialchars($_POST['company']));
$message = strip_tags(htmlspecialchars($_POST['message']));
$email = "no-reply@swellitsolutions.com.br";

// Email details
$to = 'comercial@swellitsolutions.com.br'; 
$email_subject = "Formulário de Contato Web $name";
$email_body = "Você recebeu uma mensagem nova de seu formulário de contato do site.\n\n".
              "Aqui estão os detalhes:\n\n".
              "Name: $name\n".
              "Email: $email_address\n".
              "Company: $company\n".
              "Phone: $phone\n".
              "Message:\n$message";

// Set email headers
$headers = "From: $email\r\n"; // The email address from which the message will appear to come
$headers .= "Reply-To: $email_address\r\n"; // The user’s email will be used for replying
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n"; // This ensures the email is plain text and UTF-8 encoded

// Send the email
if(mail($to, $email_subject, $email_body, $headers)) {
    echo "Message sent successfully!";
    return true;
} else {
    echo "Message could not be sent.";
    return false;
}
?>
