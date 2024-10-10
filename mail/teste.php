<?php

  // evitar email injection
  function clean_string($string) {
    $bad = array(
      "content-type",
      "bcc:",
      "to:",
      "cc:",
      "href"
    );
    return str_replace($bad, "", $string);
  }

  // variáveis
  $status = false;
  $linkedin = $_POST['linkedin'];
  $vaga = $_POST['vaga'];
  $assunto = "Contato";
  $mensagem = "Enviado pelo formulário";

  // destinatário e remetente
  $remetente = "no-reply@swellitsolutions.com.br";
  $destinatário = "walter.pina@swellitsolutions.com.br";

  if(file_exists($_FILES['arquivo__input']['tmp_name']) and !empty($_FILES['arquivo__input'])) {

    $file = $_FILES['arquivo__input']['tmp_name'];
    $originalFile = $_FILES['arquivo__input']['name'];
    $file_size = filesize($file);
    $handle = fopen($file, "rb");
    $content = fread($handle, $file_size);
    fclose($handle);
    $content = chunk_split(base64_encode($content));

    $separator = md5(time());

    $eol = PHP_EOL;

    $headers = "From: $remetente" . $eol;
    $headers .= "MIME-Version: 1.0" . $eol;
    $headers .= "Content-type: multipart/mixed; boundary=\"" . $separator . "\"" . $eol . $eol;
    $headers .= "Content-Transfer-Encoding: 8bit" . $eol;
    $headers .= "This is a MIME encoded message." .$eol .$eol;

    $headers .= "--" . $separator . $eol;
    $headers .= "Content-type: text/html; charset=\"utf-8\"" . $eol;
    $headers .= $mensagem . $eol . $eol;

    $headers .= "--" . $separator . $eol;
    $headers .= "Content-Type: application/octet-stream; name=\"" . $separator . "\"" .$eol;
    $headers .= "Content-Transfer-Encoding: base64" . $eol;
    $headers .= "Content-Disposition: attachment" .$eol .$eol;
    $headers .= $content . $eol . $eol;
    $headers .= "--" . $separator . "--";

    $status = mail($destinatário, $assunto, "", $headers);
  }

  if($status) {
    echo "<script>alert('Currículo enviado com sucesso.'); location.href=\"trabalhe_conosco.html\";</script>";
  } else {
    echo "<script>alert('Seu currículo não foi enviado. Tente novamente por favor!'); location.href=\"trabalhe_conosco.html\";</script>";
  }
?>