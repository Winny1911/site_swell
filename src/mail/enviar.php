<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $para = 'fernando.borelli@swellitsolutions.com.br';
    $assunto = 'Novo contato';
    $mensagem = "Nome do Solicitante: " . $_POST['nome_do_solicitante'] . "\n" .
                "Empresa Solicitante: " . $_POST['empresa_solicitante'] . "\n" .
                "WhatsApp / Telefone de contato: " . $_POST['telefone_de_contato'] . "\n" .
                "E-mail Solicitante: " . $_POST['email_solicitante'];
    $cabecalhos = 'From: no-reply@swellitsolutions.com.br' . "\r\n" .
        'Reply-To: no-reply@swellitsolutions.com.br' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    if (mail($para, $assunto, $mensagem, $cabecalhos)) {
        echo "E-mail enviado com sucesso!";
    } else {
        echo "Erro ao enviar o e-mail.";
    }
}
?>
