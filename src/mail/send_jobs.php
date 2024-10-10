<?php 

    // Importar as classes 
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    // Carregar o autoloader do composer
    require '../vendor/autoload.php';

    // send email for People (RECURSOS HUMANOS)
    function sendPeople($titleJob, $attachFile, $emailJobseeker)
    {
        // Instância da classe
        $mail = new PHPMailer(true);

        try {
            // Configurações do servidor
            $mail->isSMTP();        //Devine o uso de SMTP no envio
            $mail->SMTPAuth = false; //Habilita a autenticação SMTP
            $mail->Username   = 'no-reply@swellitsolutions.com.br';
            $mail->Host = 'mail.swellitsolutions.com.br';
            $mail->Port = 587;
            // Define o remetente
            $mail->setFrom('no-reply@swellitsolutions.com.br');
            // Define o destinatário
            $mail->addAddress('vagas@swellitsolutions.com.br');
            // Conteúdo da mensagem
            $mail->isHTML(true);  // Seta o formato do e-mail para aceitar conteúdo HTML
            //$subjectEmail
            $mail->Subject = 'Candidatura para: ' . $titleJob;
            $mail->Body    = '<br><strong>T&iacute;tulo da Vaga: </strong>' . $titleJob . '<br>
            <strong>E-mail do candidato: </strong>' . $emailJobseeker;
            $mail->AltBody = '<br><strong>T&iacute;tulo da Vaga: </strong>' . $titleJob;
            $mail->addAttachment($attachFile['tmp_name'], $attachFile['name']);

            // Enviar
            $mail->send();

            echo 'sucesso';
        } catch (Exception $e) {
            echo $mail->ErrorInfo;
        }
    }

    // send email for applicant (CANDIDATO)
    function sendJobseeker($emailJobseeker, $attachFile)
    {
        // Instância da classe
        $mail = new PHPMailer(true);

        try {
            // Configurações do servidor
            $mail->isSMTP();        //Devine o uso de SMTP no envio
            $mail->SMTPAuth = false; //Habilita a autenticação SMTP
            $mail->Username   = 'no-reply@swellitsolutions.com.br';
            $mail->Host = 'mail.swellitsolutions.com.br';
            $mail->Port = 587;
            // Define o remetente
            $mail->setFrom('no-reply@swellitsolutions.com.br');
            // Define o destinatário
            $mail->addAddress($emailJobseeker);
            // Conteúdo da mensagem
            $mail->isHTML(true);  // Seta o formato do e-mail para aceitar conteúdo HTML
            //$subjectEmail
            $mail->Subject = 'Swell It Solutions [Vagas]';
            $mail->Body    = 'Aloha,<br><br>
            Ficamos felizes em receber seu cadastro em nosso Banco de Talentos através de nosso site.<br><br>
            Nós da Swell, com todo carinho e transparência entendemos que pessoas são o caminho para o sucesso e respeitamos muito você, que está em busca de uma nova jornada no mercado de trabalho.<br><br>
            Como somos uma consultoria especializada em Alocações, nossas oportunidades surgem quando fechamos um projeto com um de nossos clientes. Então, queremos que você fique tranquilo, pois seu currículo será muito bem cuidado pela nossa área de People, e quando vier aquele “match” faremos contato com você!<br><br>
            Obrigada por querer surfar conosco nas ondas da Tecnologia!<br><br>
            Mahalo!';

            $mail->AltBody = 'Aloha,<br><br>
            Ficamos felizes em receber seu cadastro em nosso Banco de Talentos através de nosso site.<br><br>
            Nós da Swell, com todo carinho e transparência entendemos que pessoas são o caminho para o sucesso e respeitamos muito você, que está em busca de uma nova jornada no mercado de trabalho.<br><br>
            Como somos uma consultoria especializada em Alocações, nossas oportunidades surgem quando fechamos um projeto com um de nossos clientes. Então, queremos que você fique tranquilo, pois seu currículo será muito bem cuidado pela nossa área de People, e quando vier aquele “match” faremos contato com você!<br><br>
            Obrigada por querer surfar conosco nas ondas da Tecnologia!<br><br>
            Mahalo!';

            $mail->addAttachment($attachFile['tmp_name'], $attachFile['name']);

            // Enviar
            $mail->send();

            // echo 'sucesso';
        } catch (Exception $e) {
            // echo $mail->ErrorInfo;
        }
    }

    $arquivoDevAndroid = $_FILES['arquivoDevAndroid'];
    $vagaDevAndroid = $_POST['vagapessoadevAndroid'];
    $emailDevAndroid = $_POST['emailpessoaDevAndroid'];

    if($arquivoDevAndroid && $vagaDevAndroid)
    {
        // na função vc coloca nome da vaga e o arquivo (NESTA SEQUENCIA)
        sendPeople($vagaDevAndroid, $arquivoDevAndroid, $emailDevAndroid);

        // na função vc coloca email do candidato e arquivo (NESTA SEQUENCIA)
        sendJobseeker($emailDevAndroid, $arquivoDevAndroid);

    }

    $arquivoDevIos = $_FILES['arquivoDevIos'];
    $vagaDevIos = $_POST['vagapessoaDevIos'];
    $emailDevIos = $_POST['emailpessoaDevIos'];

    if($arquivoDevIos && $vagaDevIos)
    {
        // na função vc coloca nome da vaga e o arquivo (NESTA SEQUENCIA)
        sendPeople($vagaDevIos, $arquivoDevIos, $emailDevIos);

        // na função vc coloca email do candidato e arquivo (NESTA SEQUENCIA)
        sendJobseeker($emailDevIos, $arquivoDevIos);

    }

    $arquivoDevSecopsJava = $_FILES['arquivoDevSecopsJava'];
    $vagaDevSecopsJava = $_POST['vagapessoaDevSecopsJava'];
    $emailJava = $_POST['emailpessoaDevSecopsJava'];

    if($arquivoDevSecopsJava && $vagaDevSecopsJava)
    {
        // na função vc coloca nome da vaga e o arquivo (NESTA SEQUENCIA)
        sendPeople($vagaDevSecopsJava, $arquivoDevSecopsJava, $emailJava);

        // na função vc coloca email do candidato e arquivo (NESTA SEQUENCIA)
        sendJobseeker($emailJava, $arquivoDevSecopsJava);
    }
        
    $arquivoDevFrontEnd = $_FILES['arquivoDevFrontEnd'];
    $vagaDevFrontEnd = $_POST['vagapessoaDevFrontEnd'];
    $emailFrontend = $_POST['emailpessoaDevFrontEnd'];

    if($arquivoDevFrontEnd && $vagaDevFrontEnd)
    {
        // na função vc coloca nome da vaga e o arquivo (NESTA SEQUENCIA)
        sendPeople($vagaDevFrontEnd, $arquivoDevFrontEnd, $emailFrontend);

        // na função vc coloca email do candidato e arquivo (NESTA SEQUENCIA)
        sendJobseeker($emailFrontend, $arquivoDevFrontEnd);
    }

    $arquivoEspecialistaInfraMainframe = $_FILES['arquivoEspecialistaInfraMainframe'];
    $vagapessoaEspecialistaInfraMainframe = $_POST['vagapessoaEspecialistaInfraMainframe'];
    $emailMainframe = $_POST['emailpessoaEspecialistaInfraMainframe'];

    if($arquivoEspecialistaInfraMainframe && $vagapessoaEspecialistaInfraMainframe)
    {
        // na função vc coloca nome da vaga e o arquivo (NESTA SEQUENCIA)
        sendPeople($vagapessoaEspecialistaInfraMainframe, $arquivoEspecialistaInfraMainframe, $emailMainframe);

        // na função vc coloca email do candidato e arquivo (NESTA SEQUENCIA)
        sendJobseeker($emailMainframe, $arquivoEspecialistaInfraMainframe);
    }

    $arquivoEspecialistaProgramadorSAP = $_FILES['arquivoEspecialistaProgramadorSAP'];
    $vagapessoaespecialistaProgramadorSAP = $_POST['vagapessoaespecialistaProgramadorSAP'];
    $emailProgramadorSAP = $_POST['emailpessoaespecialistaProgramadorSAP'];

    if($arquivoEspecialistaProgramadorSAP && $vagapessoaespecialistaProgramadorSAP)
    {
        // na função vc coloca nome da vaga e o arquivo (NESTA SEQUENCIA)
        sendPeople($vagapessoaespecialistaProgramadorSAP, $arquivoEspecialistaProgramadorSAP, $emailProgramadorSAP);

        // na função vc coloca email do candidato e arquivo (NESTA SEQUENCIA)
        sendJobseeker($emailProgramadorSAP, $arquivoEspecialistaProgramadorSAP);
    }

    $arquivoDesenvolvedoraCSharp = $_FILES['arquivoDesenvolvedoraCSharp'];
    $vagapessoadesenvolvedoraCSharp = $_POST['vagapessoadesenvolvedoraCSharp'];
    $emailDesenvolvedorCSharp = $_POST['emailpessoadesenvolvedoraCSharp'];

    if($arquivoDesenvolvedoraCSharp && $vagapessoadesenvolvedoraCSharp)
    {
        // na função vc coloca nome da vaga e o arquivo (NESTA SEQUENCIA)
        sendPeople($vagapessoadesenvolvedoraCSharp, $arquivoDesenvolvedoraCSharp, $emailDesenvolvedorCSharp);

        // na função vc coloca email do candidato e arquivo (NESTA SEQUENCIA)
        sendJobseeker($emailDesenvolvedorCSharp, $arquivoDesenvolvedoraCSharp);
    }

    $arquivoDevOpsCloud = $_FILES['arquivoDevOpsCloud'];
    $vagapessoadevOpsCloud = $_POST['vagapessoadevOpsCloud'];
    $emailDevOpsCloud = $_POST['emailDevOpsCloud'];

    if($arquivoDevOpsCloud && $vagapessoadevOpsCloud)
    {
        // na função vc coloca nome da vaga e o arquivo (NESTA SEQUENCIA)
        sendPeople($vagapessoadevOpsCloud, $arquivoDevOpsCloud, $emailDevOpsCloud);

        // na função vc coloca email do candidato e arquivo (NESTA SEQUENCIA)
        sendJobseeker($emailDevOpsCloud, $arquivoDevOpsCloud);
    }

    $arquivoTableau = $_FILES['arquivoTableau'];
    $vagapessoaTableau = $_POST['vagapessoaTableau'];
    $emailTableau = $_POST['emailTableau'];

    if($arquivoTableau && $vagapessoaTableau)
    {
        // na função vc coloca nome da vaga e o arquivo (NESTA SEQUENCIA)
        sendPeople($vagapessoaTableau, $arquivoTableau, $emailTableau);

        // na função vc coloca email do candidato e arquivo (NESTA SEQUENCIA)
        sendJobseeker($emailTableau, $arquivoTableau);
    }

    $arquivoFuncoesSAPGRC = $_FILES['arquivoFuncoesSAPGRC'];
    $vagapessoaFuncoesSAPGRC = $_POST['vagapessoaFuncoesSAPGRC'];
    $emailFuncoesSAPGRC = $_POST['emailFuncoesSAPGRC'];

    if($arquivoFuncoesSAPGRC && $vagapessoaFuncoesSAPGRC)
    {
        // na função vc coloca nome da vaga e o arquivo (NESTA SEQUENCIA)
        sendPeople($vagapessoaFuncoesSAPGRC, $arquivoFuncoesSAPGRC, $emailFuncoesSAPGRC);

        // na função vc coloca email do candidato e arquivo (NESTA SEQUENCIA)
        sendJobseeker($emailFuncoesSAPGRC, $arquivoFuncoesSAPGRC);
    }

    $arquivoDesenvolvedorPHP = $_FILES['arquivoDesenvolvedorPHP'];
    $vagapessoaDesenvolvedorPHP = $_POST['vagapessoaDesenvolvedorPHP'];
    $emailDesenvolvedorPHP = $_POST['emailDesenvolvedorPHP'];

    if($arquivoDesenvolvedorPHP && $vagapessoaDesenvolvedorPHP)
    {
        // na função vc coloca nome da vaga e o arquivo (NESTA SEQUENCIA)
        sendPeople($vagapessoaDesenvolvedorPHP, $arquivoDesenvolvedorPHP, $emailDesenvolvedorPHP);

        // na função vc coloca email do candidato e arquivo (NESTA SEQUENCIA)
        sendJobseeker($emailDesenvolvedorPHP, $arquivoDesenvolvedorPHP);
    }

    $arquivoGerentedeProjetos = $_FILES['arquivoGerentedeProjetos'];
    $vagapessoaGerentedeProjetos = $_POST['vagapessoaGerentedeProjetos'];
    $emailGerentedeProjetos = $_POST['emailGerentedeProjetos'];

    if($arquivoGerentedeProjetos && $vagapessoaGerentedeProjetos)
    {
        // na função vc coloca nome da vaga e o arquivo (NESTA SEQUENCIA)
        sendPeople($vagapessoaGerentedeProjetos, $arquivoGerentedeProjetos, $emailGerentedeProjetos);

        // na função vc coloca email do candidato e arquivo (NESTA SEQUENCIA)
        sendJobseeker($emailGerentedeProjetos, $arquivoGerentedeProjetos);
    }

    $arquivoconhecimentoemGRC = $_FILES['arquivoconhecimentoemGRC'];
    $vagapessoaconhecimentoemGRC = $_POST['vagapessoaconhecimentoemGRC'];
    $emailconhecimentoemGRC = $_POST['emailconhecimentoemGRC'];

    if($arquivoconhecimentoemGRC && $vagapessoaconhecimentoemGRC)
    {
        // na função vc coloca nome da vaga e o arquivo (NESTA SEQUENCIA)
        sendPeople($vagapessoaconhecimentoemGRC, $arquivoconhecimentoemGRC, $emailconhecimentoemGRC);

        // na função vc coloca email do candidato e arquivo (NESTA SEQUENCIA)
        sendJobseeker($emailconhecimentoemGRC, $arquivoconhecimentoemGRC);
    }

    $arquivoAnalistadeBI = $_FILES['arquivoAnalistadeBI'];
    $vagapessoaAnalistadeBI = $_POST['vagapessoaAnalistadeBI'];
    $emailAnalistadeBI = $_POST['emailAnalistadeBI'];

    if($arquivoAnalistadeBI && $vagapessoaAnalistadeBI)
    {
        // na função vc coloca nome da vaga e o arquivo (NESTA SEQUENCIA)
        sendPeople($vagapessoaAnalistadeBI, $arquivoAnalistadeBI, $emailAnalistadeBI);

        // na função vc coloca email do candidato e arquivo (NESTA SEQUENCIA)
        sendJobseeker($emailAnalistadeBI, $arquivoAnalistadeBI);
    }

    $arquivoScrumMaster = $_FILES['arquivoScrumMaster'];
    $vagaPessoaScrumMaster = $_POST['vagaPessoaScrumMaster'];
    $emailPessoaScrumMaster = $_POST['emailPessoaScrumMaster'];

    if($arquivoScrumMaster && $vagaPessoaScrumMaster)
    {
        // na função vc coloca nome da vaga e o arquivo (NESTA SEQUENCIA)
        sendPeople($vagaPessoaScrumMaster, $arquivoScrumMaster, $emailPessoaScrumMaster);

        // na função vc coloca email do candidato e arquivo (NESTA SEQUENCIA)
        sendJobseeker($emailPessoaScrumMaster, $arquivoScrumMaster);
    }

    $arquivoDesenvolvedoraSalesforces = $_FILES['arquivoDesenvolvedoraSalesforces'];
    $vagaDesenvolvedoraSalesforces = $_POST['vagaDesenvolvedoraSalesforces'];
    $emailDesenvolvedoraSalesforces = $_POST['emailDesenvolvedoraSalesforces'];

    if($arquivoDesenvolvedoraSalesforces && $vagaDesenvolvedoraSalesforces)
    {
        // na função vc coloca nome da vaga e o arquivo (NESTA SEQUENCIA)
        sendPeople($vagaDesenvolvedoraSalesforces, $arquivoDesenvolvedoraSalesforces, $emailDesenvolvedoraSalesforces);

        // na função vc coloca email do candidato e arquivo (NESTA SEQUENCIA)
        sendJobseeker($emailDesenvolvedoraSalesforces, $arquivoDesenvolvedoraSalesforces);
    }

    

?>