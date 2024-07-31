import React, { useEffect, useState } from 'react';
import bannerCarreira from '../../assets/images/background-jobs.svg'
import "./career-style.css"
import "../Careers-page/style_work.css"

const loadScript = (src, type = 'text/javascript', defer = true) => {
    return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
            resolve();
            return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.type = type;
        script.defer = defer;
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Script load error: ${src}`));
        document.body.appendChild(script);
    });
};

const CareerPage = () => {
    const [scriptsLoaded, setScriptsLoaded] = useState(false);

    useEffect(() => {
        const link1 = document.createElement('link');
        link1.rel = 'stylesheet';
        link1.href = '//fonts.googleapis.com/css?family=Poppins:400,500,600%7CTeko:300,400,500%7CMaven+Pro:500';
        document.head.appendChild(link1);

        const link2 = document.createElement('link');
        link2.rel = 'stylesheet';
        link2.href = 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css';
        link2.integrity = 'sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2';
        link2.crossOrigin = 'anonymous';
        document.head.appendChild(link2);

        const link3 = document.createElement('link');
        link3.rel = 'stylesheet';
        link3.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css';
        document.head.appendChild(link3);

        const link4 = document.createElement('link');
        link4.rel = 'stylesheet';
        link4.href = 'https://cdn.jsdelivr.net/npm/sweetalert2@11.7.2/dist/sweetalert2.min.css';
        document.head.appendChild(link4);

        Promise.all([
            loadScript('https://code.jquery.com/jquery-3.6.0.min.js','text/javascript'),
            loadScript('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js'),
            loadScript('./newjobs.js')
        ]).then(() => {
            setScriptsLoaded(true);
        }).catch(error => {
            console.error('Error loading scripts:', error);
        });

        return () => {
            document.head.removeChild(link1);
            document.head.removeChild(link2);
            document.head.removeChild(link3);
            document.head.removeChild(link4);
        };
    }, []);

    useEffect(() => {
        if (scriptsLoaded) {
            const container = document.getElementById('dynamic-content');
            console.log('Scripts loaded, setting innerHTML');

            if (container) {

        container.innerHTML = `
        <section class="career-page-wrapper section section-lg bg-default" id="nossas_vagas">
            <div class="container">
                <div class="accordion" id="accordionExample">
                    <div class="card">
                        <div class="card" id="headingOne">
                            <h2 class="mb-0">
                                <button class="accordion-button collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    <strong>Pessoa Desenvolvedora Android</strong>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne"
                            data-parent="#accordionExample">
                            <div class="card-body text-left">
                                <strong class="titulos-vagas">Contratação:</strong> PJ <br>
                                <strong class="titulos-vagas">Tempo:</strong> Indeterminado. <br>
                                <br>
                                <strong class="titulos-vagas">Requisitos:</strong>
                                <li>Experiência em desenvolvimento com Java Android/ Kotlin, pelo menos 3 anos de
                                    experiência, conceitos de OOP e de Functional Programming;</li>
                                <li>Guidelines de desenvolvimento e usabilidade da plataforma Android;</li>
                                <li>Desenvolver aplicativos do seu início ao fim;</li>
                                <li>Desenvolvimento de interface dentro do Android;</li>
                                <li>Arquiteturas de desenvolvimento;</li>
                                <li>Orientação a objetos, padrões de projeto (design patterns) e arquitetura de
                                    software;</li>
                                <li>Java Android Kotlin MVVM / MVP Android Studio Android API;</li>
                                <li>Componentes UI;</li>
                                <li>Construção de componentes visuais customizados;</li>
                                <li>Construção de telas responsivas;</li>
                                <li>Consumo WebServices e Web Api (Soap e Rest);</li>
                                <li>SQLite e banco de dados em geral SQL;</li>
                                <li>Estrutura de dados e algoritmos de ordenação;</li>
                                <li>Ferramentas de controle de versionamento de software (TFS/Git/gitflow); ferramentas
                                    de gestão de bugs; automatização de testes; trabalho em projetos com metodologia
                                    Ágil;</li>
                                <li>Firebase CrashLytics, Analytcs, DataBase e KPIs.
                                    ‌</li>
                                <br>
                                <strong class="titulos-vagas">Diferencial não obrigatório:</strong><br>
                                <li>Inglês Fluente</li>
                                <li>Apps CrossPlatform (Flutter / Ionic / ReactNative / Xamarin)</li>
                                <br>
                                <strong class="titulos-vagas">Benefícios:</strong>
                                <br>
                                Plano de Carreira<br>
                                <p class="text-enviar">Caso você queira, pode nos enviar seu CV também direto por e-mail para <a class="link-email" href="mailto:vagas@swellitsolutions.com.br">vagas@swellitsolutions.com.br</a> e não se esqueça de colocar o nome da vaga. Mahalo!</p><br>
                                <p>Ao enviar seu currículo você confere pleno consentimento ao tratamento de dados
                                    pessoais nos termos da nossa <a
                                        href="http://swellitsolutions.com.br/politica_privacidade">política de
                                        privacidade</a></p>
                                
                                <div class="container">
                                    <form action="./mail/send_jobs.php" method="post" enctype="multipart/form-data"
                                        class="container gap-0" id="formAndroid">
                                        <div class="control-group col-sm-6 col-md-6 col-lg-6 col-xxl-6 mt-2">
                                            <div class="form-group">
                                                <input class="form-control"
                                                    data-validation-required-message="Por favor, digite seu e-mail."
                                                    id="emailpessoaDevAndroid" name="emailpessoaDevAndroid"
                                                    placeholder="E-mail" required="required" type="email" />
                                                <small class="help-block"></small>
                                            </div>
                                        </div>
                                        <div class="row-cols-auto">
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1">
                                                <input type="hidden" name="vagapessoadevAndroid" class="devAndroid"
                                                    id="vagapessoadevAndroid">
                                                <script>
                                                    const inputDevAndroid = "Pessoa Desenvolvedora Android";
                                                    document.getElementById('vagapessoadevAndroid').value = inputDevAndroid;
                                                </script>
                                            </div>
                                        </div>
                                        <div class="row-cols-auto">
                                            <label class="col-sm-12 col-md-12 col-lg-12 arquivo" for="arquivoDevAndroid"
                                                tabindex="0">
                                                <i class="bi bi-upload mr-2"></i>
                                                <input type="file" accept=".pdf,.doc" name="arquivoDevAndroid"
                                                    class="form-control" id="arquivoDevAndroid"
                                                    onchange="toggleButtonAndroid()">
                                                <span class="arquivo-devAndroid"></span>
                                            </label>
                                            <div class="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between">
                                                <small>O arquivo deve possuir o tamanho máximo de 25MB.</small>
                                                <small id="tamanhoExcedido"></small>
                                            </div>
                                        </div>
                                        <div class="row row-cols-auto mb-5">
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1"></div>
                                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-4">
                                                <!-- Button trigger modal -->
                                                <button type="button" class="btn-shared shadow-sm">
                                                    Compartilhe nossas vagas
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" style="margin-left: 5px;"
                                                        class="bi bi-share" viewBox="0 0 16 16">
                                                        <path
                                                            d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                                    </svg>
                                                    <a href="" id="whatsapp-share-android"
                                                        rel="noopener external nofollow" target="_blank"
                                                        class="link-whatsapp"></a>
                                                </button>
                                            </div>
                                            <div class="col-sm-2 col-md-2 col-lg-2 col-xxl-2 my-2"></div>
                                            <div class="col-sm-4 col-md-4 col-lg-4 col-lg-4">
                                                <button type="submit" class="btn-send shadow-sm" disabled
                                                    id="buttonAndroid">
                                                    Envie seu currículo
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        style="margin-left: 5px;" fill="currentColor" class="bi bi-send"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1"></div>
                                        </div>
                                        <div class="col-sm-12 col-md-12 col-lg-12">
                                            <div id="android"></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card" id="headingTwo">
                            <h2 class="mb-0">
                                <button class="accordion-button collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <strong>Pessoa Desenvolvedora IOS</strong>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                            data-parent="#accordionExample">
                            <div class="card-body text-left">
                                <strong class="titulos-vagas">Contratação:</strong> PJ <br>
                                <strong class="titulos-vagas">Tempo:</strong> Indeterminado. <br>
                                <br>
                                <strong class="titulos-vagas">Requisitos:</strong> <br>
                                <li>Experiência com aplicativos em iOS nativo, Apple Design Guide Lines;</li>
                                <li>Experiência com Auto Layout e diferentes resoluções de tela (iPad, iPhone, AppleTv,
                                    AppleWatch);</li>
                                <li>Repositórios: GIT/TFS;</li>
                                <li>Experiência em realizar testes, code-review e integração contínua.
                                    Experiência com Swift;</li>
                                <li>Ter boas práticas de desenvolvimento (SOLID, KISS e DRY);</li>
                                <li>Conhecimento em bibliotecas comuns ao desenvolvimento iOS (RXSwift, Alamo Fire);
                                </li>
                                <li>Apps CrossPlatform ( Flutter / Ionic / ReactNative / Xamarin ).</li>
                                <br>
                                <strong class="titulos-vagas">Diferencial não obrigatório:</strong> <br>
                                <li>Inglês Fluente</li><br>
                                <strong class="titulos-vagas">Benefícios:</strong>
                                <br>
                                Plano de Carreira<br>
                                <p class="text-enviar">Caso você queira, pode nos enviar seu CV também direto por e-mail para <a class="link-email" href="mailto:vagas@swellitsolutions.com.br">vagas@swellitsolutions.com.br</a> e não se esqueça de colocar o nome da vaga. Mahalo!</p><br>
                                <p>Ao enviar seu currículo você confere pleno consentimento ao tratamento de dados
                                    pessoais nos termos da nossa <a
                                        href="http://swellitsolutions.com.br/politica_privacidade">política de
                                        privacidade</a></p>

                                <!-- FORMULARIO -->
                                <div class="container">
                                    <form action="./mail/send_jobs.php" method="POST" enctype="multipart/form-data"
                                        class="container gap-0" id="formPessoaIOS">
                                        <div class="control-group col-sm-6 col-md-6 col-lg-6 col-xxl-6 mt-2">
                                            <div class="form-group">
                                                <input class="form-control"
                                                    data-validation-required-message="Por favor, digite seu e-mail."
                                                    id="emailpessoaDevIos" name="emailpessoaDevIos" placeholder="E-mail"
                                                    required="required" type="email" />
                                                <small class="help-block"></small>
                                            </div>
                                        </div>
                                        <div class="row-cols-auto">
                                            <div class="col-sm-12 col-md-12 col-lg-12 col-xxl-12">
                                                <input type="hidden" name="vagapessoaDevIos" class=""
                                                    id="vagapessoaDevIos">
                                                <script>
                                                    const inputDevIos = "Pessoa Desenvolvedora IOS";
                                                    document.getElementById('vagapessoaDevIos').value = inputDevIos;
                                                </script>
                                            </div>
                                        </div>
                                        <div class="row-cols-auto">
                                            <label class="col-sm-12 col-md-12 col-lg-12 arquivo" for="arquivoDevIos"
                                                tabindex="0">
                                                <i class="bi bi-upload mr-2"></i>
                                                <input type="file" accept=".pdf,.doc" name="arquivoDevIos"
                                                    onchange="toggleButtonIos()" class="form-control"
                                                    id="arquivoDevIos">
                                                <span class="arquivo-devIos"></span>
                                            </label>
                                            <div class="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between">
                                                <small>O arquivo deve possuir o tamanho máximo de 25MB.</small>
                                                <small id="tamanhoExcedido"></small>
                                            </div>
                                        </div>
                                        <div class="row row-cols-auto mb-5">
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1"></div>
                                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-4">
                                                <!-- Button trigger modal -->
                                                <button type="button" class="btn-shared shadow-sm">
                                                    Compartilhe nossas vagas
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" style="margin-left: 5px;"
                                                        class="bi bi-share" viewBox="0 0 16 16">
                                                        <path
                                                            d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                                    </svg>
                                                    <a href="" id="whatsapp-share-ios" rel="noopener external nofollow"
                                                        target="_blank" class="link-whatsapp"></a>
                                                </button>
                                            </div>
                                            <div class="col-sm-2 col-md-2 col-lg-2 col-xxl-2 my-2"></div>
                                            <div class="col-sm-4 col-md-4 col-lg-4 col-lg-4">
                                                <button type="submit" disabled class="btn-send shadow-sm"
                                                    id="buttonIos">
                                                    Envie seu currículo
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        style="margin-left: 5px;" fill="currentColor" class="bi bi-send"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1"></div>
                                        </div>
                                        <div class="col-sm-12 col-md-12 col-lg-12">
                                            <div id="desenvolvedorIOS"></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card" id="headingThree">
                            <h2 class="mb-0">
                                <button class="accordion-button collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <strong id="vaga">Pessoa DevSecops Full Stack Java (linux) Java (Windows)</strong>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                            data-parent="#accordionExample">
                            <div class="card-body text-left">
                                <strong class="titulos-vagas">Contratação:</strong> PJ <br>
                                <strong class="titulos-vagas">Tempo:</strong> Indeterminado. <br>
                                <br>
                                <strong class="titulos-vagas">Requisitos:</strong><br>
                                <li>Estamos com vagas para alocação com perfil na linguagem das aplicações Java (linux)
                                    Java (Windows);</li>
                                <li>Ferramentas utilizadas: Fortify, Splunk, IBM-Voltage e Webinspect, SonarQube,
                                    Cypress, Selenium;</li>
                                <br>

                                <strong class="titulos-vagas">Diferencial não obrigatório:</strong><br>
                                <li>Inglês Fluente</li>
                                <li>Conhecimento de OWASP</li>
                                <li>Azure Devops</li>
                                <li>GitAction</li>
                                <br>

                                <strong class="titulos-vagas">Benefícios:</strong>
                                <br>
                                Plano de Carreira
                                  <p class="text-enviar">Caso você queira, pode nos enviar seu CV também direto por e-mail para <a class="link-email" href="mailto:vagas@swellitsolutions.com.br">vagas@swellitsolutions.com.br</a> e não se esqueça de colocar o nome da vaga. Mahalo!</p><br>

                                <p>Ao enviar seu currículo você confere pleno consentimento ao tratamento de dados
                                    pessoais nos termos da nossa <a
                                        href="http://swellitsolutions.com.br/politica_privacidade">política de
                                        privacidade</a></p>

                                <div class="container">
                                    <form action="./mail/send_jobs.php" method="post" enctype="multipart/form-data"
                                        class="container gap-0" id="contactForm">
                                        <div class="control-group col-sm-6 col-md-6 col-lg-6 col-xxl-6 mt-2">
                                            <div class="form-group">
                                                <input class="form-control"
                                                    data-validation-required-message="Por favor, digite seu e-mail."
                                                    id="emailpessoaDevSecopsJava" name="emailpessoaDevSecopsJava"
                                                    placeholder="E-mail" required="required" type="email" />
                                                <small class="help-block"></small>
                                            </div>
                                        </div>


                                        <div class="row-cols-auto">
                                            <div class="col-sm-12 col-md-12 col-lg-12 col-xxl-12">
                                                <input type="hidden" name="vagapessoaDevSecopsJava"
                                                    class="devSecopsJava" id="vagapessoaDevSecopsJava">
                                                <script>
                                                    const inputDevSecopsJava = "Pessoa DevSecops Full Stack Java (linux) Java (Windows)";
                                                    document.getElementById("vagapessoaDevSecopsJava").value = inputDevSecopsJava;
                                                </script>
                                            </div>
                                        </div>
                                        <div class="row-cols-auto">
                                            <label class="col-sm-12 col-md-12 col-lg-12 arquivo control-group"
                                                for="arquivoDevSecopsJava" tabindex="0">
                                                <i class="bi bi-upload mr-2"></i>
                                                <input type="file" accept=".pdf,.doc" name="arquivoDevSecopsJava"
                                                    onchange="toggleButtonJava()" class="form-control input_arquivo"
                                                    id="arquivoDevSecopsJava" required>
                                                <span class="arquivo__picture"></span>
                                            </label>
                                            <div class="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between">
                                                <small>O arquivo deve possuir o tamanho máximo de 25MB.</small>
                                                <small id="tamanhoExcedido"></small>
                                            </div>
                                        </div>
                                        <div class="row row-cols-auto mb-5">
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1"></div>
                                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-4 mt-1">
                                                <!-- Button trigger modal -->
                                                <button type="button" class="btn-shared shadow-sm">
                                                    Compartilhe nossas vagas
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" style="margin-left: 5px;"
                                                        class="bi bi-share" viewBox="0 0 16 16">
                                                        <path
                                                            d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                                    </svg>
                                                    <a href="" id="whatsapp-share-btt" rel="noopener external nofollow"
                                                        target="_blank" class="link-whatsapp"></a>
                                                </button>
                                            </div>
                                            <div class="col-sm-2 col-md-2 col-lg-2 col-xxl-2 my-2"></div>
                                            <div class="col-sm-4 col-md-4 col-lg-4 col-lg-4">
                                                <button type="submit" disabled class="btn-send shadow-sm"
                                                    id="buttonJava">
                                                    Envie seu currículo
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        style="margin-left: 5px;" fill="currentColor" class="bi bi-send"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1"></div>
                                        </div>
                                        <div class="col-sm-12 col-md-12 col-lg-12">
                                            <div id="success"></div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card" id="headingFour">
                            <h2 class="mb-0">
                                <button class="accordion-button collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    <strong>Pessoa Desenvolvedora Front-End</strong>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseFour" class="collapse" aria-labelledby="headingFour"
                            data-parent="#accordionExample">
                            <div class="card-body text-left">
                                <strong class="titulos-vagas">Contratação:</strong> PJ <br>
                                <strong class="titulos-vagas">Tempo:</strong> Indeterminado. <br>
                                <br>
                                <strong class="titulos-vagas">Requisitos:</strong> <br>
                                Pelo menos 3 anos como desenvolvedor front-end, conhecimento em pelo menos 1 das
                                tecnologias abaixo: <br><br>
                                <li>Angular 2+;</li>
                                <li>JavaScript;</li>
                                <li>HTML;</li>
                                <li>Pré-processadores CSS (Sass, Stylus, Less, etc), aplicar testes unitários,
                                    integração com APIs, desenvolvimento web responsivo;</li>
                                <li>Repositórios: Git / TFS</li>
                                <li>Vue (preferência que já tenha atuado com composition API) </li>
                                <li>Reactjs</li>
                                <br>
                                <strong class="titulos-vagas">Diferencial não obrigatório:</strong><br>
                                <li>Inglês Fluente</li>
                                <li>Frameworks de testes (Karma, Jasmine, Jest, Mocha)</li>
                                <li>Quasar</li>
                                <li>Multilingua</li>
                                <li>SSR, SSG e PWA</li>
                                <li>Infra: Docker, Pipeline p/ CI/CD (teste, homologação e produção)</li>
                                <li>Testes e2e</li>
                                <li> Html/Css: Flexbox, Material Design, Sass/SCSS</li>
                                <br>
                                <strong class="titulos-vagas">Benefícios:</strong>
                                <br>
                                Plano de Carreira<br>
                                  <p class="text-enviar">Caso você queira, pode nos enviar seu CV também direto por e-mail para <a class="link-email" href="mailto:vagas@swellitsolutions.com.br">vagas@swellitsolutions.com.br</a> e não se esqueça de colocar o nome da vaga. Mahalo!</p><br>
                                <p>Ao enviar seu currículo você confere pleno consentimento ao tratamento de dados
                                    pessoais nos termos da nossa <a
                                        href="http://swellitsolutions.com.br/politica_privacidade">política de
                                        privacidade</a></p>
                                <!-- formulário -->
                                <div class="container">
                                    <form action="./mail/send_jobs.php" method="POST" enctype="multipart/form-data"
                                        class="container gap-0" id="formFrontEnd">
                                        <div class="control-group col-sm-6 col-md-6 col-lg-6 col-xxl-6 mt-2">
                                            <div class="form-group">
                                                <input class="form-control"
                                                    data-validation-required-message="Por favor, digite seu e-mail."
                                                    id="emailpessoaDevFrontEnd" name="emailpessoaDevFrontEnd"
                                                    placeholder="E-mail" required="required" type="email" />
                                                <small class="help-block"></small>
                                            </div>
                                        </div>
                                        <div class="row-cols-auto">
                                            <div class="col-sm-12 col-md-12 col-lg-12 col-xxl-12">
                                                <input type="hidden" name="vagapessoaDevFrontEnd" class=""
                                                    id="vagapessoaDevFrontEnd">
                                                <script>
                                                    const inputDevFrontEnd = "Pessoa Desenvolvedora Front-End";
                                                    document.getElementById('vagapessoaDevFrontEnd').value = inputDevFrontEnd;
                                                </script>
                                            </div>
                                        </div>
                                        <div class="row-cols-auto">
                                            <label class="col-sm-12 col-md-12 col-lg-12 arquivo"
                                                for="arquivoDevFrontEnd" tabindex="0">
                                                <i class="bi bi-upload mr-2"></i>
                                                <input type="file" accept=".pdf,.doc" name="arquivoDevFrontEnd"
                                                    onchange="toggleButtonFrontend()" class="form-control"
                                                    id="arquivoDevFrontEnd">
                                                <span class="arquivo-devFrontEnd"></span>
                                            </label>
                                            <div class="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between">
                                                <small>O arquivo deve possuir o tamanho máximo de 25MB.</small>
                                                <small id="tamanhoExcedido"></small>
                                            </div>
                                        </div>
                                        <div class="row row-cols-auto mb-5">
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1"></div>
                                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-4">
                                                <!-- Button trigger modal -->
                                                <button type="button" class="btn-shared shadow-sm">
                                                    Compartilhe nossas vagas
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" style="margin-left: 5px;"
                                                        class="bi bi-share" viewBox="0 0 16 16">
                                                        <path
                                                            d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                                    </svg>
                                                    <a href="" id="whatsapp-share-frontend"
                                                        rel="noopener external nofollow" target="_blank"
                                                        class="link-whatsapp"></a>
                                                </button>
                                            </div>
                                            <div class="col-sm-2 col-md-2 col-lg-2 col-xxl-2 my-2"></div>
                                            <div class="col-sm-4 col-md-4 col-lg-4 col-lg-4">
                                                <button type="submit" class="btn-send shadow-sm" disabled
                                                    id="buttonFrontend">
                                                    Envie seu currículo
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        style="margin-left: 5px;" fill="currentColor" class="bi bi-send"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1"></div>
                                        </div>
                                        <div class="col-sm-12 col-md-12 col-lg-12">
                                            <div id="frontend"></div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card" id="headingFive">
                            <h2 class="mb-0">
                                <button class="accordion-button collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    <strong>Pessoa Especialista em InfraEstrutura Mainframe</strong>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseFive" class="collapse" aria-labelledby="headingFive"
                            data-parent="#accordionExample">
                            <div class="card-body text-left">
                                <strong class="titulos-vagas">Contratação:</strong> PJ <br>
                                <strong class="titulos-vagas">Tempo:</strong> Indeterminado. <br>
                                <br>
                                <strong class="titulos-vagas">Requisitos:</strong> <br>
                                Recurso especializado em infra-estrutura Mainframe (CICS, Storage, Z/Os, etc.) para nos
                                apoiar:
                                <li>Estabilização de ambientes HA não-produtivos.</li>
                                <li>Implementação de HA na produção</li>
                                <li> Experiência na análise e descoberta de problemas de produção (abends) que vinham
                                    afetando a estabilidade das regiões CICS para VisionPLUS e MCA</li>
                                <br>
                                <strong class="titulos-vagas">Benefícios:</strong><br>
                                Plano de Carreira<br>
                                  <p class="text-enviar">Caso você queira, pode nos enviar seu CV também direto por e-mail para <a class="link-email" href="mailto:vagas@swellitsolutions.com.br">vagas@swellitsolutions.com.br</a> e não se esqueça de colocar o nome da vaga. Mahalo!</p><br>
                                <p>Ao enviar seu currículo você confere pleno consentimento ao tratamento de dados
                                    pessoais nos termos da nossa <a
                                        href="http://swellitsolutions.com.br/politica_privacidade">política de
                                        privacidade</a></p>
                                <!-- formulário -->
                                <div class="container">
                                    <form action="./mail/send_jobs.php" method="POST" enctype="multipart/form-data"
                                        class="container gap-0" id="formIfra">
                                        <div class="control-group col-sm-6 col-md-6 col-lg-6 col-xxl-6 mt-2">
                                            <div class="form-group">
                                                <input class="form-control"
                                                    data-validation-required-message="Por favor, digite seu e-mail."
                                                    id="emailpessoaEspecialistaInfraMainframe"
                                                    name="emailpessoaEspecialistaInfraMainframe" placeholder="E-mail"
                                                    required="required" type="email" />
                                                <small class="help-block"></small>
                                            </div>
                                        </div>
                                        <div class="row-cols-auto">
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1">
                                                <input type="hidden" name="vagapessoaEspecialistaInfraMainframe"
                                                    class="" id="vagapessoaEspecialistaInfraMainframe">
                                                <script>
                                                    const inputEspecialistaInfra = "Especialista em Infra estrutura";
                                                    document.getElementById('vagapessoaEspecialistaInfraMainframe').value = inputEspecialistaInfra;
                                                </script>
                                            </div>
                                        </div>
                                        <div class="row-cols-auto">
                                            <label class="col-sm-12 col-md-12 col-lg-12 arquivo"
                                                for="arquivoEspecialistaInfraMainframe" tabindex="0">
                                                <i class="bi bi-upload mr-2"></i>
                                                <input type="file" accept=".pdf,.doc"
                                                    name="arquivoEspecialistaInfraMainframe"
                                                    onchange="toggleButtonInfraMainframe()"
                                                    class="form-control devCAnsi_input"
                                                    id="arquivoEspecialistaInfraMainframe">
                                                <span class="arquivo-EspecialistaInfraMainframe"></span>
                                            </label>
                                            <div class="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between">
                                                <small>O arquivo deve possuir o tamanho máximo de 25MB.</small>
                                                <small id="tamanhoExcedido"></small>
                                            </div>
                                        </div>
                                        <div class="row row-cols-auto mb-5">
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1"></div>
                                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-4">
                                                <!-- Button trigger modal -->
                                                <button type="button" class="btn-shared shadow-sm">
                                                    Compartilhe nossas vagas
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" style="margin-left: 5px;"
                                                        class="bi bi-share" viewBox="0 0 16 16">
                                                        <path
                                                            d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                                    </svg>
                                                    <a href="" id="whatsapp-share-testes"
                                                        rel="noopener external nofollow" target="_blank"
                                                        class="link-whatsapp"></a>
                                                </button>
                                            </div>
                                            <div class="col-sm-2 col-md-2 col-lg-2 col-xxl-2 my-2"></div>
                                            <div class="col-sm-4 col-md-4 col-lg-4 col-lg-4">
                                                <button type="submit" class="btn-send shadow-sm" disabled
                                                    id="buttonEspecialistaInfra">
                                                    Envie seu currículo
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        style="margin-left: 5px;" fill="currentColor" class="bi bi-send"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1"></div>
                                        </div>
                                        <div class="col-sm-12 col-md-12 col-lg-12">
                                            <div id="mainframe"></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card" id="headingSix">
                            <h2 class="mb-0">
                                <button class="accordion-button collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    <strong>Pessoa Especialista Programador SAP/ABAP</strong>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseSix" class="collapse" aria-labelledby="headingSix"
                            data-parent="#accordionExample">
                            <div class="card-body text-left">
                                <strong class="titulos-vagas">Contratação:</strong> PJ <br>
                                <strong class="titulos-vagas">Tempo:</strong> Indeterminado. <br>
                                <br>
                                <strong class="titulos-vagas">Requisitos:</strong> <br>
                                Experiência com adaptação das interfaces existentes, que busque soluções que gerem boa
                                performance, com baixo tempo de resposta para o usuário final, que saiba cuidar da
                                arquitetura e da engenharia dos projetos.
                                <li>Perfil de liderança para orientar o time de SAP</li>
                                <li>Boa capacidade de análise e tomada de decisão para atuar com legado e diferentes
                                    cenários</li>
                                <li>Perfil proativo e auto gerenciável</li>
                                <li>Excelente comunicação e que saiba trabalhar em equipe</li>
                                <li>Profissional preparado para assumir responsabilidades, desafios, cumprir prazos e
                                    propor soluções</li>
                                <br>
                                <strong class="titulos-vagas">Benefícios:</strong><br>
                                Plano de Carreira<br>
                                  <p class="text-enviar">Caso você queira, pode nos enviar seu CV também direto por e-mail para <a class="link-email" href="mailto:vagas@swellitsolutions.com.br">vagas@swellitsolutions.com.br</a> e não se esqueça de colocar o nome da vaga. Mahalo!</p><br>
                                <p>Ao enviar seu currículo você confere pleno consentimento ao tratamento de dados
                                    pessoais nos termos da nossa <a
                                        href="http://swellitsolutions.com.br/politica_privacidade">política de
                                        privacidade</a></p>
                                <!-- formulário -->
                                <div class="container">
                                    <form action="./mail/send_jobs.php" method="POST" enctype="multipart/form-data"
                                        class="container gap-0" id="formProgramadorSap">
                                        <div class="control-group col-sm-6 col-md-6 col-lg-6 col-xxl-6 mt-2">
                                            <div class="form-group">
                                                <input class="form-control"
                                                    data-validation-required-message="Por favor, digite seu e-mail."
                                                    id="emailpessoaespecialistaProgramadorSAP"
                                                    name="emailpessoaespecialistaProgramadorSAP" placeholder="E-mail"
                                                    required="required" type="email" />
                                                <small class="help-block"></small>
                                            </div>
                                        </div>
                                        <div class="row-cols-auto">
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1">
                                                <input type="hidden" name="vagapessoaespecialistaProgramadorSAP"
                                                    class="especialistaProgramador"
                                                    id="vagapessoaespecialistaProgramadorSAP">
                                                <script>
                                                    const inputEspecialistaProgramador = "Especialista Programador SAP";
                                                    document.getElementById('vagapessoaespecialistaProgramadorSAP').value = inputEspecialistaProgramador;
                                                </script>
                                            </div>
                                        </div>
                                        <div class="row-cols-auto">
                                            <label class="col-sm-12 col-md-12 col-lg-12 arquivo"
                                                for="arquivoEspecialistaProgramadorSAP" tabindex="0">
                                                <i class="bi bi-upload mr-2"></i>
                                                <input type="file" accept=".pdf,.doc"
                                                    name="arquivoEspecialistaProgramadorSAP"
                                                    onchange="toggleButtonProgramadorSAP()" class="form-control "
                                                    id="arquivoEspecialistaProgramadorSAP">
                                                <span class="arquivo-especialistaProgramadorSAP"></span>
                                            </label>
                                            <div class="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between">
                                                <small>O arquivo deve possuir o tamanho máximo de 25MB.</small>
                                                <small id="tamanhoExcedido"></small>
                                            </div>
                                        </div>
                                        <div class="row row-cols-auto mb-5">
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1"></div>
                                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-4">
                                                <!-- Button trigger modal -->
                                                <button type="button" class="btn-shared shadow-sm">
                                                    Compartilhe nossas vagas
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" style="margin-left: 5px;"
                                                        class="bi bi-share" viewBox="0 0 16 16">
                                                        <path
                                                            d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                                    </svg>
                                                    <a href="" id="whatsapp-share-sap" rel="noopener external nofollow"
                                                        target="_blank" class="link-whatsapp"></a>
                                                </button>
                                            </div>
                                            <div class="col-sm-2 col-md-2 col-lg-2 col-xxl-2 my-2"></div>
                                            <div class="col-sm-4 col-md-4 col-lg-4 col-lg-4">
                                                <button type="submit" class="btn-send shadow-sm" disabled
                                                    id="buttonEspecialistaProgramadorSAP">
                                                    Envie seu currículo
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        style="margin-left: 5px;" fill="currentColor" class="bi bi-send"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1"></div>
                                        </div>
                                        <div class="col-sm-12 col-md-12 col-lg-12">
                                            <div id="programadorSap"></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card" id="headingSeven">
                            <h2 class="mb-0">
                                <button class="accordion-button collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                    <strong>Pessoa Desenvolvedora C#.Net</strong>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven"
                            data-parent="#accordionExample">
                            <div class="card-body text-left">
                                <strong class="titulos-vagas">Contratação:</strong> PJ <br>
                                <strong class="titulos-vagas">Tempo:</strong> Indeterminado. <br>
                                <br>
                                <strong class="titulos-vagas">Requisitos:</strong> <br>
                                Buscamos profissionais, perfis Pleno para Sênior, que mandem super bem em C#, .Net Core
                                e possuam experiência com OOP, API Restful, Azure Services e Domain-Driven Design.
                                <br> O que esperamos de você:
                                <li>Perfil autogerenciável, proativo e "mão na massa";</li>
                                <li>Que jogue muito como time, priorizando a comunicação e entendendo que os prazos,
                                    entregas e problemas são responsabilidades de todos;</li>
                                <li>Boa capacidade de análise para lidar com cenários onde existem sistemas diversos.
                                </li>
                                <br>
                                <strong class="titulos-vagas">Benefícios:</strong><br>
                                Plano de Carreira<br>
                                  <p class="text-enviar">Caso você queira, pode nos enviar seu CV também direto por e-mail para <a class="link-email" href="mailto:vagas@swellitsolutions.com.br">vagas@swellitsolutions.com.br</a> e não se esqueça de colocar o nome da vaga. Mahalo!</p><br>
                                <p>Ao enviar seu currículo você confere pleno consentimento ao tratamento de dados
                                    pessoais nos termos da nossa <a
                                        href="http://swellitsolutions.com.br/politica_privacidade">política de
                                        privacidade</a></p>
                                <!-- formulário -->
                                <div class="container">
                                    <form action="./mail/send_jobs.php" method="POST" enctype="multipart/form-data"
                                        class="container gap-0" id="formDesenvolvedoraCSharp">
                                        <div class="control-group col-sm-6 col-md-6 col-lg-6 col-xxl-6 mt-2">
                                            <div class="form-group">
                                                <input class="form-control"
                                                    data-validation-required-message="Por favor, digite seu e-mail."
                                                    id="emailpessoadesenvolvedoraCSharp"
                                                    name="emailpessoadesenvolvedoraCSharp" placeholder="E-mail"
                                                    required="required" type="email" />
                                                <small class="help-block"></small>
                                            </div>
                                        </div>
                                        <div class="row-cols-auto">
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1">
                                                <input type="hidden" name="vagapessoadesenvolvedoraCSharp"
                                                    class="desenvolvedoraCSharp" id="vagapessoadesenvolvedoraCSharp">
                                                <script>
                                                    const inputDesenvolvedoraCSharp = "Desenvolvedora CSharp";
                                                    document.getElementById('vagapessoadesenvolvedoraCSharp').value = inputDesenvolvedoraCSharp;
                                                </script>
                                            </div>
                                        </div>
                                        <div class="row-cols-auto">
                                            <label class="col-sm-12 col-md-12 col-lg-12 arquivo"
                                                for="arquivoDesenvolvedoraCSharp" tabindex="0">
                                                <i class="bi bi-upload mr-2"></i>
                                                <input type="file" accept=".pdf,.doc" name="arquivoDesenvolvedoraCSharp"
                                                    onchange="toggleButtoncsharp()" class="form-control devCAnsi_input"
                                                    id="arquivoDesenvolvedoraCSharp">
                                                <span class="arquivo-Desenvolvedoracsharp"></span>
                                            </label>
                                            <div class="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between">
                                                <small>O arquivo deve possuir o tamanho máximo de 25MB.</small>
                                                <small id="tamanhoExcedido"></small>
                                            </div>
                                        </div>
                                        <div class="row row-cols-auto mb-5">
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1"></div>
                                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-4">
                                                <!-- Button trigger modal -->
                                                <button type="button" class="btn-shared shadow-sm">
                                                    Compartilhe nossas vagas
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" style="margin-left: 5px;"
                                                        class="bi bi-share" viewBox="0 0 16 16">
                                                        <path
                                                            d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                                    </svg>
                                                    <a href="" id="whatsapp-share-c" rel="noopener external nofollow"
                                                        target="_blank" class="link-whatsapp"></a>
                                                </button>
                                            </div>
                                            <div class="col-sm-2 col-md-2 col-lg-2 col-xxl-2 my-2"></div>
                                            <div class="col-sm-4 col-md-4 col-lg-4 col-lg-4">
                                                <button type="submit" class="btn-send shadow-sm" disabled
                                                    id="buttonDesenvolvedoraCSharp">
                                                    Envie seu currículo
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        style="margin-left: 5px;" fill="currentColor" class="bi bi-send"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1"></div>
                                        </div>
                                        <div class="col-sm-12 col-md-12 col-lg-12">
                                            <div id="csharp"></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card" id="headingEight">
                            <h2 class="mb-0">
                                <button class="accordion-button collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                    <strong>Pessoa DevOps Cloud</strong>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseEight" class="collapse" aria-labelledby="headingEight"
                            data-parent="#accordionExample">
                            <div class="card-body text-left">
                                <strong class="titulos-vagas">Contratação:</strong> PJ <br>
                                <strong class="titulos-vagas">Tempo:</strong> Indeterminado. <br>
                                <br>
                                <strong class="titulos-vagas">Requisitos:</strong> <br>
                                Buscamos profissional DevOps, perfil Sênior, com bastante experiência com AWS e Oracle
                                Cloud. Que já tenha expertise em virtualização e orquestração de containers, Terraform e
                                implementação de infra em ambiente de produção.
                                <br>
                                <br><strong class="titulos-vagas"> O que esperamos de você:</strong> <br>
                                <li>Perfil proativo e mão na massa</li>
                                <li>Autonomia para pedir ajuda quando necessário</li>
                                <li>Perfil resiliente, que saiba lidar com cenários de pressão</li>
                                <li>Nível (Senioridade): Senior.</li>
                                <br>
                                <strong class="titulos-vagas">Benefícios:</strong><br>
                                Plano de Carreira<br>
                                  <p class="text-enviar">Caso você queira, pode nos enviar seu CV também direto por e-mail para <a class="link-email" href="mailto:vagas@swellitsolutions.com.br">vagas@swellitsolutions.com.br</a> e não se esqueça de colocar o nome da vaga. Mahalo!</p><br>
                                <p>Ao enviar seu currículo você confere pleno consentimento ao tratamento de dados
                                    pessoais nos termos da nossa <a
                                        href="http://swellitsolutions.com.br/politica_privacidade">política de
                                        privacidade</a></p>
                                <!-- formulário -->
                                <div class="container">
                                    <form action="./mail/send_jobs.php" method="POST" enctype="multipart/form-data"
                                        class="container gap-0" id="formCloud">
                                        <div class="control-group col-sm-6 col-md-6 col-lg-6 col-xxl-6 mt-2">
                                            <div class="form-group">
                                                <input class="form-control"
                                                    data-validation-required-message="Por favor, digite seu e-mail."
                                                    id="emailDevOpsCloud" name="emailDevOpsCloud" placeholder="E-mail"
                                                    required="required" type="email" />
                                                <small class="help-block"></small>
                                            </div>
                                        </div>
                                        <div class="row-cols-auto">
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1">
                                                <input type="hidden" name="vagapessoadevOpsCloud" class=""
                                                    id="vagapessoadevOpsCloud">
                                                <script>
                                                    const inputDevOps = "Pessoa DevOps Cloud";
                                                    document.getElementById('vagapessoadevOpsCloud').value = inputDevOps;
                                                </script>
                                            </div>
                                        </div>
                                        <div class="row-cols-auto">
                                            <label class="col-sm-12 col-md-12 col-lg-12 arquivo"
                                                for="arquivoDevOpsCloud" tabindex="0">
                                                <i class="bi bi-upload mr-2"></i>
                                                <input type="file" accept=".pdf,.doc" name="arquivoDevOpsCloud"
                                                    onchange="toggleButtonCloud()" class="form-control"
                                                    id="arquivoDevOpsCloud">
                                                <span class="arquivo-DevOpsCloud"></span>
                                            </label>
                                            <div class="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between">
                                                <small>O arquivo deve possuir o tamanho máximo de 25MB.</small>
                                                <small id="tamanhoExcedido"></small>
                                            </div>
                                        </div>
                                        <div class="row row-cols-auto mb-5">
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1"></div>
                                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-4">
                                                <!-- Button trigger modal -->
                                                <button type="button" class="btn-shared shadow-sm">
                                                    Compartilhe nossas vagas
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" style="margin-left: 5px;"
                                                        class="bi bi-share" viewBox="0 0 16 16">
                                                        <path
                                                            d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                                    </svg>
                                                    <a href="" id="whatsapp-share-cloud"
                                                        rel="noopener external nofollow" target="_blank"
                                                        class="link-whatsapp"></a>
                                                </button>
                                            </div>
                                            <div class="col-sm-2 col-md-2 col-lg-2 col-xxl-2 my-2"></div>
                                            <div class="col-sm-4 col-md-4 col-lg-4 col-lg-4">
                                                <button type="submit" class="btn-send shadow-sm" disabled
                                                    id="buttonCloud">
                                                    Envie seu currículo
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        style="margin-left: 5px;" fill="currentColor" class="bi bi-send"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1"></div>
                                        </div>
                                        <div class="col-sm-12 col-md-12 col-lg-12">
                                            <div id="Cloud"></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card" id="headingNine">
                            <h2 class="mb-0">
                                <button class="accordion-button collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                    <strong>Pessoa Especialista em Tableau</strong>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseNine" class="collapse" aria-labelledby="headingNine"
                            data-parent="#accordionExample">
                            <div class="card-body text-left">
                                <strong class="titulos-vagas">Contratação:</strong> PJ <br>
                                <strong class="titulos-vagas">Tempo:</strong> Indeterminado. <br>
                                <br>
                                <strong class="titulos-vagas">Requisitos:</strong> <br>
                                <li>Análise dos dados armazenados sobre a operação;</li>
                                <li>Desenvolver a análise de indicadores, relatórios e painéis de BI;</li>
                                <li>Atuar na análise e desenvolvimento de novas integrações entre sistemas e bancos de
                                    dados;</li>
                                <li>Desenvolvimento de rotinas automatizadas para sincronização de dados entre
                                    diferentes plataformas;</li>
                                <li>Experiência comprovada na ferramenta Tableau em diferentes projetos;</li>
                                <li>Experiência em trabalhos com ferramentas de BI e ETL;</li>
                                <li>Conhecimento em Lógica de Programação;</li>
                                <li>Conhecimento em desenvolvimento Tableau;</li>
                                <li>Conhecimentos de instalação, migração e gestão do Tableau Server;</li>
                                <li>Conhecimento em banco de dados Oracle, MySQL, SQL Server e demais bancos
                                    relacionais.</li> <br>

                                <strong class="titulos-vagas">O que esperamos de você:</strong> <br>
                                Conhecimento em modelagem de dados; <br>
                                Experiência com levantamento de requisitos e entendimento de negócios; <br>
                                Atuação com Tableau e conhecimento em Looker / Data Studio. <br>
                                <br>
                                <strong class="titulos-vagas">Benefícios:</strong><br>
                                Plano de Carreira<br>
                                  <p class="text-enviar">Caso você queira, pode nos enviar seu CV também direto por e-mail para <a class="link-email" href="mailto:vagas@swellitsolutions.com.br">vagas@swellitsolutions.com.br</a> e não se esqueça de colocar o nome da vaga. Mahalo!</p><br>
                                <p>Ao enviar seu currículo você confere pleno consentimento ao tratamento de dados
                                    pessoais nos termos da nossa <a
                                        href="http://swellitsolutions.com.br/politica_privacidade">política de
                                        privacidade</a></p>
                                <!-- formulário -->
                                <div class="container">
                                    <form action="./mail/send_jobs.php" method="POST" enctype="multipart/form-data"
                                        class="container gap-0" id="formTableau">
                                        <div class="control-group col-sm-6 col-md-6 col-lg-6 col-xxl-6 mt-2">
                                            <div class="form-group">
                                                <input class="form-control"
                                                    data-validation-required-message="Por favor, digite seu e-mail."
                                                    id="emailTableau" name="emailTableau" placeholder="E-mail"
                                                    required="required" type="email" />
                                                <small class="help-block"></small>
                                            </div>
                                        </div>
                                        <div class="row-cols-auto">
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1">
                                                <input type="hidden" name="vagapessoaTableau" class=""
                                                    id="vagapessoaTableau">
                                                <script>
                                                    const inputTableau = "Pessoa Tableau";
                                                    document.getElementById('vagapessoaTableau').value = inputTableau;
                                                </script>
                                            </div>
                                        </div>
                                        <div class="row-cols-auto">
                                            <label class="col-sm-12 col-md-12 col-lg-12 arquivo" for="arquivoTableau"
                                                tabindex="0">
                                                <i class="bi bi-upload mr-2"></i>
                                                <input type="file" accept=".pdf,.doc" name="arquivoTableau"
                                                    onchange="toggleButtonTableau()" class="form-control"
                                                    id="arquivoTableau">
                                                <span class="arquivo-Tableau"></span>
                                            </label>
                                            <div class="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between">
                                                <small>O arquivo deve possuir o tamanho máximo de 25MB.</small>
                                                <small id="tamanhoExcedido"></small>
                                            </div>
                                        </div>
                                        <div class="row row-cols-auto mb-5">
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1"></div>
                                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-4">
                                                <!-- Button trigger modal -->
                                                <button type="button" class="btn-shared shadow-sm">
                                                    Compartilhe nossas vagas
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" style="margin-left: 5px;"
                                                        class="bi bi-share" viewBox="0 0 16 16">
                                                        <path
                                                            d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                                    </svg>
                                                    <a href="" id="whatsapp-share-cloud"
                                                        rel="noopener external nofollow" target="_blank"
                                                        class="link-whatsapp"></a>
                                                </button>
                                            </div>
                                            <div class="col-sm-2 col-md-2 col-lg-2 col-xxl-2 my-2"></div>
                                            <div class="col-sm-4 col-md-4 col-lg-4 col-lg-4">
                                                <button type="submit" class="btn-send shadow-sm" disabled
                                                    id="buttonTableau">
                                                    Envie seu currículo
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        style="margin-left: 5px;" fill="currentColor" class="bi bi-send"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1"></div>
                                        </div>
                                        <div class="col-sm-12 col-md-12 col-lg-12">
                                            <div id="Tableau"></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card" id="headingTen">
                            <h2 class="mb-0">
                                <button class="accordion-button collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                    <strong>Pessoa Analista de Risco de Segregação de Funções SAP GRC</strong>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseTen" class="collapse" aria-labelledby="headingTen"
                            data-parent="#accordionExample">
                            <div class="card-body text-left">
                                <strong class="titulos-vagas">Contratação:</strong> PJ <br>
                                <strong class="titulos-vagas">Tempo:</strong> Indeterminado. <br>
                                <br>
                                <strong class="titulos-vagas">Requisitos:</strong> <br>
                                <li>Experiência em SQL Análise de tempo de execução de rastreamento SAP Depuração de
                                    conjuntos de informações de consulta ABAP;</li>
                                <li>Experiência com modificação de ajuste de desempenho de desenvolvimento de relatório
                                    e suporte de programação SAP customizada e padrão;</li>
                                <li>Bom conhecimento em tabelas SAP, domínios de campos e na criação de ajudas de
                                    pesquisa. O que estamos procurando na pessoa que vai fazer parte do
                                    time: Conhecimentos em Módulos SAP integrando com GRC BI;</li>
                                <li>Experiência mínima de 3 anos em implementação de SAP GRC BI.</li>
                                <br> <strong class="titulos-vagas"> O que esperamos de você:</strong> <br>
                                <li>Planejar, monitorar e gerenciar todas as tarefas de desenvolvimento;</li>
                                <li>Criar padrões de desenvolvimento e listas de verificação;</li>
                                <li>Supervisão, resolução de problemas e treinamento de membros da equipe;</li>
                                <li>Análise com a equipe funcional e usuários de negócios para definir os requisitos de
                                    desenvolvimento;</li>
                                <li>Desenvolvimento de especificações técnicas para relatório personalizado SAP ou
                                    interface ou aprimoramento ou formulário para resolver problemas de negócios
                                    complexos com base nos requisitos funcionais do usuário final;</li>
                                <li>Desenvolver programas em conformidade com a especificação funcional e técnica;</li>
                                <li>Planejamento e execução de teste de unidade, teste de string e teste de integração;
                                </li>
                                <li>Suporte a todos os níveis de teste, resolução de problemas e correção de bugs;</li>
                                <li>Ajuste de desempenho de programas.O que você precisa ter?Experiência em SAP GRC ABAP
                                    com BI;</li>
                                <li>Programação com ferramentas de desenvolvimento SAP GRC.
                                    ‌</li>
                                <br>
                                <strong class="titulos-vagas">Benefícios:</strong><br>
                                Plano de Carreira<br>
                                  <p class="text-enviar">Caso você queira, pode nos enviar seu CV também direto por e-mail para <a class="link-email" href="mailto:vagas@swellitsolutions.com.br">vagas@swellitsolutions.com.br</a> e não se esqueça de colocar o nome da vaga. Mahalo!</p><br>
                                <p>Ao enviar seu currículo você confere pleno consentimento ao tratamento de dados
                                    pessoais nos termos da nossa <a
                                        href="http://swellitsolutions.com.br/politica_privacidade">política de
                                        privacidade</a></p>
                                <!-- formulário -->
                                <div class="container">
                                    <form action="./mail/send_jobs.php" method="POST" enctype="multipart/form-data"
                                        class="container gap-0" id="formSap">
                                        <div class="control-group col-sm-6 col-md-6 col-lg-6 col-xxl-6 mt-2">
                                            <div class="form-group">
                                                <input class="form-control"
                                                    data-validation-required-message="Por favor, digite seu e-mail."
                                                    id="emailFuncoesSAPGRC" name="emailFuncoesSAPGRC"
                                                    placeholder="E-mail" required="required" type="email" />
                                                <small class="help-block"></small>
                                            </div>
                                        </div>
                                        <div class="row-cols-auto">
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1">
                                                <input type="hidden" name="vagapessoaFuncoesSAPGRC" class=""
                                                    id="vagapessoaFuncoesSAPGRC">
                                                <script>
                                                    const inputFuncoesSAPGRC = "Pessoa Analista de Risco de Segrega&ccedil;&atilde;o de Fun&ccedil;&otilde;es SAP GRC";
                                                    document.getElementById('vagapessoaFuncoesSAPGRC').value = inputFuncoesSAPGRC;
                                                    console.log(inputFuncoesSAPGRC)
                                                </script>
                                            </div>
                                        </div>
                                        <div class="row-cols-auto">
                                            <label class="col-sm-12 col-md-12 col-lg-12 arquivo"
                                                for="arquivoFuncoesSAPGRC" tabindex="0">
                                                <i class="bi bi-upload mr-2"></i>
                                                <input type="file" accept=".pdf,.doc" name="arquivoFuncoesSAPGRC"
                                                    onchange="toggleButtonSAPGRC()" class="form-control"
                                                    id="arquivoFuncoesSAPGRC">
                                                <span class="arquivo-FuncoesSAPGRC"></span>
                                            </label>
                                            <div class="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between">
                                                <small>O arquivo deve possuir o tamanho máximo de 25MB.</small>
                                                <small id="tamanhoExcedido"></small>
                                            </div>
                                        </div>
                                        <div class="row row-cols-auto mb-5">
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1"></div>
                                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-4">
                                                <!-- Button trigger modal -->
                                                <button type="button" class="btn-shared shadow-sm">
                                                    Compartilhe nossas vagas
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" style="margin-left: 5px;"
                                                        class="bi bi-share" viewBox="0 0 16 16">
                                                        <path
                                                            d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                                    </svg>
                                                    <a href="" id="whatsapp-share-cloud"
                                                        rel="noopener external nofollow" target="_blank"
                                                        class="link-whatsapp"></a>
                                                </button>
                                            </div>
                                            <div class="col-sm-2 col-md-2 col-lg-2 col-xxl-2 my-2"></div>
                                            <div class="col-sm-4 col-md-4 col-lg-4 col-lg-4">
                                                <button type="submit" class="btn-send shadow-sm" disabled
                                                    id="buttonSAPGRC">
                                                    Envie seu currículo
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        style="margin-left: 5px;" fill="currentColor" class="bi bi-send"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1"></div>
                                        </div>
                                        <div class="col-sm-12 col-md-12 col-lg-12">
                                            <div id="Sapgrc"></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card" id="headingEleven">
                            <h2 class="mb-0">
                                <button class="accordion-button collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                    <strong>Pessoa Desenvolvedor PHP</strong>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseEleven" class="collapse" aria-labelledby="headingEleven"
                            data-parent="#accordionExample">
                            <div class="card-body text-left">
                                <strong class="titulos-vagas">Contratação:</strong> PJ <br>
                                <strong class="titulos-vagas">Tempo:</strong> Indeterminado. <br>
                                <br>
                                <strong class="titulos-vagas">Requisitos:</strong> <br>
                                <li>Experiência comprovada em desenvolvimento de softwares em PHP;</li>
                                <li>Compreensão de projetos de código aberto, como Joomla, Drupal, Wikis, osCommerce
                                    etc;</li>
                                <li>Conhecimento comprovado de tecnologias web, como HTML, CSS, JavaScript, AJAX etc;
                                </li>
                                <li>Bom conhecimento de bancos de dados relacionais, ferramentas de controle de versão e
                                    de desenvolvimento de serviços web;</li>
                                <li>Experiência em APIs comuns de terceiros (Google, Facebook, eBay etc.);</li>
                                <li>Paixão pelas melhores práticas de projeto e codificação e aspiração para desenvolver
                                    ideias novas e ousadas;</li>
                                <li>Bacharelado/mestrado em Ciência da Computação, Engenharia ou área relacionada.</li>
                                <br><strong class="titulos-vagas"> O que esperamos de você:</strong> <br>
                                <li>Escrever códigos bem estruturados, “limpos” e eficientes;</li>
                                <li>Elaborar especificações detalhadas;</li>
                                <li>Diagnosticar, testar e manter softwares e bancos de dados do produto principal para
                                    assegurar forte otimização e funcionalidade;</li>
                                <li>Contribuir em todas as fases do ciclo de vida de desenvolvimento;</li>
                                <li>Seguir as melhores práticas da indústria;</li>
                                <li>Desenvolver e implementar novos recursos para simplificar procedimentos relacionados
                                    e ferramentas, se necessário.</li>
                                <br>
                                <strong class="titulos-vagas">Benefícios:</strong><br>
                                Plano de Carreira<br>
                                  <p class="text-enviar">Caso você queira, pode nos enviar seu CV também direto por e-mail para <a class="link-email" href="mailto:vagas@swellitsolutions.com.br">vagas@swellitsolutions.com.br</a> e não se esqueça de colocar o nome da vaga. Mahalo!</p><br>
                                <p>Ao enviar seu currículo você confere pleno consentimento ao tratamento de dados
                                    pessoais nos termos da nossa <a
                                        href="http://swellitsolutions.com.br/politica_privacidade">política de
                                        privacidade</a></p>
                                <!-- formulário -->
                                <div class="container">
                                    <form action="./mail/send_jobs.php" method="POST" enctype="multipart/form-data"
                                        class="container gap-0" id="formPhp">
                                        <div class="control-group col-sm-6 col-md-6 col-lg-6 col-xxl-6 mt-2">
                                            <div class="form-group">
                                                <input class="form-control"
                                                    data-validation-required-message="Por favor, digite seu e-mail."
                                                    id="emailDesenvolvedorPHP" name="emailDesenvolvedorPHP"
                                                    placeholder="E-mail" required="required" type="email" />
                                                <small class="help-block"></small>
                                            </div>
                                        </div>
                                        <div class="row-cols-auto">
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1">
                                                <input type="hidden" name="vagapessoaDesenvolvedorPHP" class=""
                                                    id="vagapessoaDesenvolvedorPHP">
                                                <script>
                                                    const inputDesenvolvedorPHP = "Pessoa Desenvolvedor PHP";
                                                    document.getElementById('vagapessoaDesenvolvedorPHP').value = inputDesenvolvedorPHP;
                                                </script>
                                            </div>
                                        </div>
                                        <div class="row-cols-auto">
                                            <label class="col-sm-12 col-md-12 col-lg-12 arquivo"
                                                for="arquivoDesenvolvedorPHP" tabindex="0">
                                                <i class="bi bi-upload mr-2"></i>
                                                <input type="file" accept=".pdf,.doc" name="arquivoDesenvolvedorPHP"
                                                    onchange="toggleButtonPhp()" class="form-control"
                                                    id="arquivoDesenvolvedorPHP">
                                                <span class="arquivo-DesenvolvedorPHP"></span>
                                            </label>
                                            <div class="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between">
                                                <small>O arquivo deve possuir o tamanho máximo de 25MB.</small>
                                                <small id="tamanhoExcedido"></small>
                                            </div>
                                        </div>
                                        <div class="row row-cols-auto mb-5">
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1"></div>
                                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-4">
                                                <!-- Button trigger modal -->
                                                <button type="button" class="btn-shared shadow-sm">
                                                    Compartilhe nossas vagas
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" style="margin-left: 5px;"
                                                        class="bi bi-share" viewBox="0 0 16 16">
                                                        <path
                                                            d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                                    </svg>
                                                    <a href="" id="whatsapp-share-cloud"
                                                        rel="noopener external nofollow" target="_blank"
                                                        class="link-whatsapp"></a>
                                                </button>
                                            </div>
                                            <div class="col-sm-2 col-md-2 col-lg-2 col-xxl-2 my-2"></div>
                                            <div class="col-sm-4 col-md-4 col-lg-4 col-lg-4">
                                                <button type="submit" class="btn-send shadow-sm" disabled
                                                    id="buttonPhp">
                                                    Envie seu currículo
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        style="margin-left: 5px;" fill="currentColor" class="bi bi-send"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1"></div>
                                        </div>
                                        <div class="col-sm-12 col-md-12 col-lg-12">
                                            <div id="Php"></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card" id="headingTwelve">
                            <h2 class="mb-0">
                                <button class="accordion-button collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                    <strong>Pessoa Gerente de Projetos</strong>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseTwelve" class="collapse" aria-labelledby="headingTwelve"
                            data-parent="#accordionExample">
                            <div class="card-body text-left">
                                <strong class="titulos-vagas">Contratação:</strong> PJ <br>
                                <strong class="titulos-vagas">Tempo:</strong> Indeterminado. <br>
                                <br>
                                <strong class="titulos-vagas">Requisitos:</strong> <br>
                                <li>Ensino superior completo em Administração, Gestão Empresarial, Engenharias ou áreas
                                    relacionadas à tecnologia;</li>
                                <li>MBA ou especialização em gestão de projetos;</li>
                                <li>Bons conhecimentos em metodologias ágeis;</li>
                                <li>Bons conhecimentos em ferramentas de gestão e de organização;</li>
                                <li>Inglês avançado, pois atenderá clientes internacionais;</li>
                                <li>Experiência em gerenciamento de riscos.</li>
                                <br><strong class="titulos-vagas"> O que esperamos de você:</strong> <br>
                                <li>Gerenciar projetos prezando pelo cumprimento dos prazos e garantindo que estejam
                                    dentro dos custos preestabelecidos;</li>
                                <li>Conduzir ações estratégicas e analisar seus impactos para a empresa;</li>
                                <li>Fazer a distribuição de tarefas e possíveis remanejamentos durante a execução das
                                    atividades;</li>
                                <li>Levantar métricas adequadas e apresentá-las aos stakeholders, de modo que eles
                                    acompanhem o desenvolvimento das ações voltadas aos projetos;</li>
                                <li>Ocasionalmente, trazer soluções para situações adversas que aconteçam e que podem
                                    envolver colaboradores, fornecedores ou custos;</li>
                                <li>Acompanhar a evolução das atividades e o nível de produtividade dos executores;</li>
                                <li>Fazer relatórios de acompanhamento e de entrega de cada projeto.</li>
                                <br>
                                <strong class="titulos-vagas">Diferencial não obrigatório:</strong> <br>
                                <li>Certificado de PMP</li>
                                <li>Conhecimentos em gestão de pessoas</li> <br>

                                <strong class="titulos-vagas">Benefícios:</strong><br>
                                Plano de Carreira<br>
                                  <p class="text-enviar">Caso você queira, pode nos enviar seu CV também direto por e-mail para <a class="link-email" href="mailto:vagas@swellitsolutions.com.br">vagas@swellitsolutions.com.br</a> e não se esqueça de colocar o nome da vaga. Mahalo!</p><br>
                                <p>Ao enviar seu currículo você confere pleno consentimento ao tratamento de dados
                                    pessoais nos termos da nossa <a
                                        href="http://swellitsolutions.com.br/politica_privacidade">política de
                                        privacidade</a></p>
                                <!-- formulário -->
                                <div class="container">
                                    <form action="./mail/send_jobs.php" method="POST" enctype="multipart/form-data"
                                        class="container gap-0" id="formGerente">
                                        <div class="control-group col-sm-6 col-md-6 col-lg-6 col-xxl-6 mt-2">
                                            <div class="form-group">
                                                <input class="form-control"
                                                    data-validation-required-message="Por favor, digite seu e-mail."
                                                    id="emailGerentedeProjetos" name="emailGerentedeProjetos"
                                                    placeholder="E-mail" required="required" type="email" />
                                                <small class="help-block"></small>
                                            </div>
                                        </div>
                                        <div class="row-cols-auto">
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1">
                                                <input type="hidden" name="vagapessoaGerentedeProjetos"
                                                    class=""
                                                    id="vagapessoaGerentedeProjetos">
                                                <script>
                                                    const inputarquivoGerentedeProjetos = "Pessoa Gerente de Projetos";
                                                    document.getElementById('vagapessoaGerentedeProjetos').value = inputarquivoGerentedeProjetos;
                                                </script>
                                            </div>
                                        </div>
                                        <div class="row-cols-auto">
                                            <label class="col-sm-12 col-md-12 col-lg-12 arquivo"
                                                for="arquivoGerentedeProjetos" tabindex="0">
                                                <i class="bi bi-upload mr-2"></i>
                                                <input type="file" accept=".pdf,.doc" name="arquivoGerentedeProjetos"
                                                    onchange="toggleButtonGerente()" class="form-control"
                                                    id="arquivoGerentedeProjetos">
                                                <span class="arquivo-GerentedeProjetos"></span>
                                            </label>
                                            <div class="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between">
                                                <small>O arquivo deve possuir o tamanho máximo de 25MB.</small>
                                                <small id="tamanhoExcedido"></small>
                                            </div>
                                        </div>
                                        <div class="row row-cols-auto mb-5">
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1"></div>
                                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-4">
                                                <!-- Button trigger modal -->
                                                <button type="button" class="btn-shared shadow-sm">
                                                    Compartilhe nossas vagas
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" style="margin-left: 5px;"
                                                        class="bi bi-share" viewBox="0 0 16 16">
                                                        <path
                                                            d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                                    </svg>
                                                    <a href="" id="whatsapp-share-cloud"
                                                        rel="noopener external nofollow" target="_blank"
                                                        class="link-whatsapp"></a>
                                                </button>
                                            </div>
                                            <div class="col-sm-2 col-md-2 col-lg-2 col-xxl-2 my-2"></div>
                                            <div class="col-sm-4 col-md-4 col-lg-4 col-lg-4">
                                                <button type="submit" class="btn-send shadow-sm" disabled
                                                    id="buttonGerente">
                                                    Envie seu currículo
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        style="margin-left: 5px;" fill="currentColor" class="bi bi-send"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1"></div>
                                        </div>
                                        <div class="col-sm-12 col-md-12 col-lg-12">
                                            <div id="Gerente"></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card" id="headingThirteen">
                            <h2 class="mb-0">
                                <button class="accordion-button collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapseThirteen" aria-expanded="false"
                                    aria-controls="collapseThirteen">
                                    <strong>Pessoa consultor SAP ABAP Hanna com conhecimento em GRC</strong>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseThirteen" class="collapse" aria-labelledby="headingThirteen"
                            data-parent="#accordionExample">
                            <div class="card-body text-left">
                                <strong class="titulos-vagas">Contratação:</strong> PJ <br>
                                <strong class="titulos-vagas">Tempo:</strong> Indeterminado. <br>
                                <br>
                                <strong class="titulos-vagas">Requisitos:</strong> <br>
                                <li>Experiência Implementação do fluxo de revisão periódica dos acessos concedidos e o
                                    workflow de aprovações, com todos os atores envolvidos (gestores hierárquicos,
                                    gestores da informação e gestores de risco);</li>
                                <li>Experiência com Conexão com OneID, SAP ECC, BW/BO, GRC NF-e, PI/PO, SOLMAN;</li>
                                <li>Seja capaz de efetuar treinamento dos usuários na administração de todos os
                                    componentes do SAP Business Objects GRC Access Control 12.0 e a capacitação técnica
                                    na ferramenta SAP Business Objects GRC Access Control 12.0.</li>
                                <br><strong class="titulos-vagas"> O que esperamos de você:</strong> <br>
                                <li>Realizar todos os procedimentos, tarefas e ações para disponibilização e utilização
                                    da instalação do GRC AC V.12.0 e Banco Hana, conectado com as ferramentas SAP;</li>
                                <li>Atualização, validação e disponibilização GRC AC V.12.0 até o último/penúltimo
                                    enhancement package;</li>
                                <li>Atualização, validação e disponibilização Banco Hana até o último/penúltimo
                                    enhancement package;</li>
                                <li>Configuração e customização da solução SAP Businessobjects Access Control 12.0 e
                                    respectivo Banco Hana para suportar o processo de gestão e controle de perfis de
                                    acesso;</li>
                                <li>Configuração e customização dos módulos do SAP Business Objects GRC Access Control
                                    com o objetivo de manter a adequação dos perfis de segurança (BRM), de estrutura e
                                    automatizar o processo de provisionamento de acessos (ARM), de fazer a gestão do
                                    acesso privilegiado (EAM) e a detecção e das violações SoD (ARA);</li>
                                <li>Modelagem dos processos suportados pelos módulos ARA, EAM, ARM e BRM relacionados a
                                    controle de acesso, utilizando o SAP GRC Access Control 12.0;O que você precisa
                                    ter?Experiência com Implementação do fluxo de gerenciamento de riscos de segregação,
                                    com a definição dos responsáveis pela análise e aprovação de transações conflitantes
                                    e com a definição clara dos papéis de cada agente do processo.</li>
                                <br>
                                <strong class="titulos-vagas">Benefícios:</strong><br>
                                Plano de Carreira<br>
                                  <p class="text-enviar">Caso você queira, pode nos enviar seu CV também direto por e-mail para <a class="link-email" href="mailto:vagas@swellitsolutions.com.br">vagas@swellitsolutions.com.br</a> e não se esqueça de colocar o nome da vaga. Mahalo!</p><br>
                                <p>Ao enviar seu currículo você confere pleno consentimento ao tratamento de dados
                                    pessoais nos termos da nossa <a
                                        href="http://swellitsolutions.com.br/politica_privacidade">política de
                                        privacidade</a></p>
                                <!-- formulário -->
                                <div class="container">
                                    <form action="./mail/send_jobs.php" method="POST" enctype="multipart/form-data"
                                        class="container gap-0" id="formGRC">
                                        <div class="control-group col-sm-6 col-md-6 col-lg-6 col-xxl-6 mt-2">
                                            <div class="form-group">
                                                <input class="form-control"
                                                    data-validation-required-message="Por favor, digite seu e-mail."
                                                    id="emailconhecimentoemGRC" name="emailconhecimentoemGRC"
                                                    placeholder="E-mail" required="required" type="email" />
                                                <small class="help-block"></small>
                                            </div>
                                        </div>
                                        <div class="row-cols-auto">
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1">
                                                <input type="hidden" name="vagapessoaconhecimentoemGRC" class=""
                                                    id="vagapessoaconhecimentoemGRC">
                                                <script>
                                                    const inputconhecimentoemGRC = "Pessoa consultor SAP ABAP Hanna com conhecimento em GRC";
                                                    document.getElementById('vagapessoaconhecimentoemGRC').value = inputconhecimentoemGRC;
                                                </script>
                                            </div>
                                        </div>
                                        <div class="row-cols-auto">
                                            <label class="col-sm-12 col-md-12 col-lg-12 arquivo"
                                                for="arquivoconhecimentoemGRC" tabindex="0">
                                                <i class="bi bi-upload mr-2"></i>
                                                <input type="file" accept=".pdf,.doc" name="arquivoconhecimentoemGRC"
                                                    onchange="toggleButtonGRC()" class="form-control"
                                                    id="arquivoconhecimentoemGRC">
                                                <span class="arquivo-conhecimentoemGRC"></span>
                                            </label>
                                            <div class="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between">
                                                <small>O arquivo deve possuir o tamanho máximo de 25MB.</small>
                                                <small id="tamanhoExcedido"></small>
                                            </div>
                                        </div>
                                        <div class="row row-cols-auto mb-5">
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1"></div>
                                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-4">
                                                <!-- Button trigger modal -->
                                                <button type="button" class="btn-shared shadow-sm">
                                                    Compartilhe nossas vagas
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" style="margin-left: 5px;"
                                                        class="bi bi-share" viewBox="0 0 16 16">
                                                        <path
                                                            d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                                    </svg>
                                                    <a href="" id="whatsapp-share-cloud"
                                                        rel="noopener external nofollow" target="_blank"
                                                        class="link-whatsapp"></a>
                                                </button>
                                            </div>
                                            <div class="col-sm-2 col-md-2 col-lg-2 col-xxl-2 my-2"></div>
                                            <div class="col-sm-4 col-md-4 col-lg-4 col-lg-4">
                                                <button type="submit" class="btn-send shadow-sm" disabled
                                                    id="buttonGRC">
                                                    Envie seu currículo
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        style="margin-left: 5px;" fill="currentColor" class="bi bi-send"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1"></div>
                                        </div>
                                        <div class="col-sm-12 col-md-12 col-lg-12">
                                            <div id="GRC"></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card" id="headingFourteen">
                            <h2 class="mb-0">
                                <button class="accordion-button collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapseFourteen" aria-expanded="false"
                                    aria-controls="collapseFourteen">
                                    <strong>Pessoa Analista de BI</strong>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseFourteen" class="collapse" aria-labelledby="headingFourteen"
                            data-parent="#accordionExample">
                            <div class="card-body text-left">
                                <strong class="titulos-vagas">Contratação:</strong> PJ <br>
                                <strong class="titulos-vagas">Tempo:</strong> Indeterminado. <br>
                                <br>
                                <strong class="titulos-vagas">Requisitos:</strong> <br>
                                <li>Superior completo em: Administração, Engenharia, Matemática, Estatística ou
                                    Tecnologia da Informação;</li>
                                <li>Vivência com Big Data;</li>
                                <li>Experiência em empresas de tecnologia;</li>
                                <li>Conhecimentos atuais do mercado de tecnologia;</li>
                                <li>Conhecimentos sólidos em Power BI e na criação de dashboards;</li>
                                <li>Conhecimento avançado em Excel.</li>
                                <br><strong class="titulos-vagas"> O que esperamos de você:</strong> <br>
                                <li>Ter um olhar analítico</li>
                                <li>Ser um bom comunicador</li>
                                <li>Visão estratégica</li>
                                <br>
                                <strong class="titulos-vagas">Diferencial não obrigatório:</strong> <br>
                              <li>Pós-graduação em Big Data</li>
                              <li>Conhecimento básico em SQL</li>
                              <li>Inglês à partir do intermediário</li>
                              <br>
                                <strong class="titulos-vagas">Benefícios:</strong><br>
                                Plano de Carreira<br>
                                  <p class="text-enviar">Caso você queira, pode nos enviar seu CV também direto por e-mail para <a class="link-email" href="mailto:vagas@swellitsolutions.com.br">vagas@swellitsolutions.com.br</a> e não se esqueça de colocar o nome da vaga. Mahalo!</p><br>
                                <p>Ao enviar seu currículo você confere pleno consentimento ao tratamento de dados
                                    pessoais nos termos da nossa <a
                                        href="http://swellitsolutions.com.br/politica_privacidade">política de
                                        privacidade</a></p>
                                <!-- formulário -->
                                <div class="container">
                                    <form action="./mail/send_jobs.php" method="POST" enctype="multipart/form-data"
                                        class="container gap-0" id="formBi">
                                        <div class="control-group col-sm-6 col-md-6 col-lg-6 col-xxl-6 mt-2">
                                            <div class="form-group">
                                                <input class="form-control"
                                                    data-validation-required-message="Por favor, digite seu e-mail."
                                                    id="emailAnalistadeBI" name="emailAnalistadeBI" placeholder="E-mail"
                                                    required="required" type="email" />
                                                <small class="help-block"></small>
                                            </div>
                                        </div>
                                        <div class="row-cols-auto">
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1">
                                                <input type="hidden" name="vagapessoaAnalistadeBI" class=""
                                                    id="vagapessoaAnalistadeBI">
                                                <script>
                                                    const inputpessoaAnalistadeBI = "Pessoa Analista de BI";
                                                    document.getElementById('vagapessoaAnalistadeBI').value = inputpessoaAnalistadeBI;
                                                    console.log(inputpessoaAnalistadeBI)
                                                </script>
                                            </div>
                                        </div>
                                        <div class="row-cols-auto">
                                            <label class="col-sm-12 col-md-12 col-lg-12 arquivo"
                                                for="arquivoAnalistadeBI" tabindex="0">
                                                <i class="bi bi-upload mr-2"></i>
                                                <input type="file" accept=".pdf,.doc" name="arquivoAnalistadeBI"
                                                    onchange="toggleButtonBi()" class="form-control devCAnsi_input"
                                                    id="arquivoAnalistadeBI">
                                                <span class="arquivo-AnalistadeBI"></span>
                                            </label>
                                            <div class="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between">
                                                <small>O arquivo deve possuir o tamanho máximo de 25MB.</small>
                                                <small id="tamanhoExcedido"></small>
                                            </div>
                                        </div>
                                        <div class="row row-cols-auto mb-5">
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1"></div>
                                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-4">
                                                <!-- Button trigger modal -->
                                                <button type="button" class="btn-shared shadow-sm">
                                                    Compartilhe nossas vagas
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" style="margin-left: 5px;"
                                                        class="bi bi-share" viewBox="0 0 16 16">
                                                        <path
                                                            d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                                    </svg>
                                                    <a href="" id="whatsapp-share-cloud"
                                                        rel="noopener external nofollow" target="_blank"
                                                        class="link-whatsapp"></a>
                                                </button>
                                            </div>
                                            <div class="col-sm-2 col-md-2 col-lg-2 col-xxl-2 my-2"></div>
                                            <div class="col-sm-4 col-md-4 col-lg-4 col-lg-4">
                                                <button type="submit" class="btn-send shadow-sm" disabled id="buttonBi">
                                                    Envie seu currículo
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        style="margin-left: 5px;" fill="currentColor" class="bi bi-send"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1"></div>
                                        </div>
                                        <div class="col-sm-12 col-md-12 col-lg-12">
                                            <div id="Bi"></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card" id="headingFifteen">
                            <h2 class="mb-0">
                                <button class="accordion-button collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapseFifteen" aria-expanded="false"
                                    aria-controls="collapseFifteen">
                                    <strong>Pessoa Scrum Master</strong>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseFifteen" class="collapse" aria-labelledby="headingFifteen"
                            data-parent="#accordionExample">
                            <div class="card-body text-left">
                                <strong class="titulos-vagas">Contratação:</strong> PJ <br>
                                <strong class="titulos-vagas">Tempo:</strong> Indeterminado. <br>
                                <br>
                                <strong class="titulos-vagas">Requisitos:</strong> <br>
                                <li>Conhecimento profundo da metodologia Scrum e das práticas ágeis de desenvolvimento
                                    de software.</li>
                                <li>Habilidade de liderar, motivar e orientar a equipe para alcançar seus objetivos.
                                </li>
                                <li>Habilidade de comunicação clara e eficaz com a equipe e os stakeholders.</li>
                                <li>Capacidade de identificar e remover impedimentos para o progresso da equipe.</li>
                                <li>Conhecimento e habilidade em facilitação de reuniões, resolução de conflitos e
                                    tomada de decisões.</li>
                                <li>Habilidade de identificar e solucionar problemas em tempo hábil.</li>
                                <br><strong class="titulos-vagas"> O que esperamos de você:</strong> <br>
                                <li>Facilitar e liderar as reuniões diárias de Scrum (Daily Stand-up), planejamentos de
                                    Sprint, revisões de Sprint e retrospectivas de Sprint.</li>
                                <li>Orientar a equipe sobre as melhores práticas de Scrum e garantir que a equipe esteja
                                    aderindo aos princípios e valores ágeis.</li>
                                <li>Remover quaisquer obstáculos que estejam impedindo a equipe de atingir seus
                                    objetivos de sprint.</li>
                                <li>Assegurar que os processos de desenvolvimento de software estejam sendo seguidos
                                    pela equipe e que os prazos estipulados para as entregas da sprint sejam atingidos.
                                </li>
                                <li>Manter a transparência e a visibilidade do progresso da equipe e do produto, tanto
                                    para a equipe quanto para os stakeholders.</li>
                                <li>Identificar e implementar melhorias contínuas no processo Scrum para aumentar a
                                    eficiência e a qualidade do produto.</li> <br>
                                <strong class="titulos-vagas">Benefícios:</strong><br>
                                Plano de Carreira<br>
                                  <p class="text-enviar">Caso você queira, pode nos enviar seu CV também direto por e-mail para <a class="link-email" href="mailto:vagas@swellitsolutions.com.br">vagas@swellitsolutions.com.br</a> e não se esqueça de colocar o nome da vaga. Mahalo!</p><br>
                    
                                <p>Ao enviar seu currículo você confere pleno consentimento ao tratamento de dados
                                    pessoais nos termos da nossa <a
                                        href="http://swellitsolutions.com.br/politica_privacidade">política de
                                        privacidade</a></p>

                                <!-- FORMULARIO -->
                                <div class="container">
                                    <form action="./mail/send_jobs.php" method="POST" enctype="multipart/form-data"
                                        class="container gap-0" id="formMaster">
                                        <div class="control-group col-sm-6 col-md-6 col-lg-6 col-xxl-6 mt-2">
                                            <div class="form-group">
                                                <input class="form-control"
                                                    data-validation-required-message="Por favor, digite seu e-mail."
                                                    id="emailPessoaScrumMaster" name="emailPessoaScrumMaster"
                                                    placeholder="E-mail" required="required" type="email" />
                                                <small class="help-block"></small>
                                            </div>
                                        </div>
                                        <div class="row-cols-auto">
                                            <div class="col-sm-12 col-md-12 col-lg-12 col-xxl-12">
                                                <input type="hidden" name="vagaPessoaScrumMaster" class=""
                                                    id="vagaPessoaScrumMaster">
                                                <script>
                                                    const inputScrumMaster = "Pessoa Scrum Master";
                                                    document.getElementById('vagaPessoaScrumMaster').value = inputScrumMaster;
                                                </script>
                                            </div>
                                        </div>
                                        <div class="row-cols-auto">
                                            <label class="col-sm-12 col-md-12 col-lg-12 arquivo"
                                                for="arquivoScrumMaster" tabindex="0">
                                                <i class="bi bi-upload mr-2"></i>
                                                <input type="file" accept=".pdf,.doc" name="arquivoScrumMaster"
                                                    onchange="toggleButtonMaster()" class="form-control"
                                                    id="arquivoScrumMaster">
                                                <span class="arquivo-ScrumMaster"></span>
                                            </label>
                                            <div class="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between">
                                                <small>O arquivo deve possuir o tamanho máximo de 25MB.</small>
                                                <small id="tamanhoExcedido"></small>
                                            </div>
                                        </div>
                                        <div class="row row-cols-auto mb-5">
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1"></div>
                                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-4">
                                                <!-- Button trigger modal -->
                                                <button type="button" class="btn-shared shadow-sm">
                                                    Compartilhe nossas vagas
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" style="margin-left: 5px;"
                                                        class="bi bi-share" viewBox="0 0 16 16">
                                                        <path
                                                            d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                                    </svg>
                                                    <a href="" id="whatsapp-share-ios" rel="noopener external nofollow"
                                                        target="_blank" class="link-whatsapp"></a>
                                                </button>
                                            </div>
                                            <div class="col-sm-2 col-md-2 col-lg-2 col-xxl-2 my-2"></div>
                                            <div class="col-sm-4 col-md-4 col-lg-4 col-lg-4">
                                                <button type="submit" disabled class="btn-send shadow-sm"
                                                    id="buttonMaster">
                                                    Envie seu currículo
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        style="margin-left: 5px;" fill="currentColor" class="bi bi-send"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1"></div>
                                        </div>
                                        <div class="col-sm-12 col-md-12 col-lg-12">
                                            <div id="Master"></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card" id="headingseventeen">
                            <h2 class="mb-0">
                                <button class="accordion-button collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapseseventeen" aria-expanded="false" aria-controls="collapseseventeen">
                                    <strong>Pessoa Desenvolvedora Salesforces</strong>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseseventeen" class="collapse" aria-labelledby="headingseventeen"
                            data-parent="#accordionExample">
                            <div class="card-body text-left">
                                <strong class="titulos-vagas">Contratação:</strong> PJ <br>
                                <strong class="titulos-vagas">Tempo:</strong> Indeterminado. <br>
                                <br>
                                <strong class="titulos-vagas">Requisitos:</strong> <br>
                               <li>Graduação em andamento em Computação, Engenharia de Software, ou em áreas correlatas;
                            </li>
                               <li>Noções de funcionalidades e limitações do Salesforce;</li>
                               <li>Programação;</li>
                               <li>Configuração e personalização de SalesCloud, ServiceCloud, e Communities;</li>
                               <li>Triggers e DataLoader.</li>
                                <br>
                                <strong class="titulos-vagas">Diferencial não obrigatório:</strong> <br>
                                <li>Salesforce Apex programming language e Visualforce;</li>
                                <li>Desenvolvimento em Javascript, XML, HTML, Java e SQL;</li>
                                <li>Front, back e APIs;</li>
                                <li>Ferramentas de versionamento de código (GIT,SVN).</li>
                                <br>
                                <strong class="titulos-vagas">Benefícios:</strong><br>
                                Plano de Carreira<br>
                                <p class="text-enviar">Caso você queira, pode nos enviar seu CV também direto por e-mail para <a class="link-email" href="mailto:vagas@swellitsolutions.com.br">vagas@swellitsolutions.com.br</a> e não se esqueça de colocar o nome da vaga. Mahalo!</p><br>
                                <p>Ao enviar seu currículo você confere pleno consentimento ao tratamento de dados
                                    pessoais nos termos da nossa <a
                                        href="http://swellitsolutions.com.br/politica_privacidade">política de
                                        privacidade</a></p>

                                <!-- FORMULARIO -->
                                <div class="container">
                                    <form action="./mail/send_jobs.php" method="POST" enctype="multipart/form-data"
                                        class="container gap-0" id="formSalesforces">
                                        <div class="control-group col-sm-6 col-md-6 col-lg-6 col-xxl-6 mt-2">
                                            <div class="form-group">
                                                <input class="form-control"
                                                    data-validation-required-message="Por favor, digite seu e-mail."
                                                    id="emailDesenvolvedoraSalesforces" name="emailDesenvolvedoraSalesforces" placeholder="E-mail"
                                                    required="required" type="email" />
                                                <small class="help-block"></small>
                                            </div>
                                        </div>
                                        <div class="row-cols-auto">
                                            <div class="col-sm-12 col-md-12 col-lg-12 col-xxl-12">
                                                <input type="hidden" name="vagaDesenvolvedoraSalesforces" class=""
                                                    id="vagaDesenvolvedoraSalesforces">
                                                <script>
                                                    const inputDesenvolvedoraSalesforces = "Pessoa Desenvolvedora Salesforces";
                                                    document.getElementById('vagaDesenvolvedoraSalesforces').value = inputDesenvolvedoraSalesforces;
                                                </script>
                                            </div>
                                        </div>
                                        <div class="row-cols-auto">
                                            <label class="col-sm-12 col-md-12 col-lg-12 arquivo" for="arquivoDesenvolvedoraSalesforces"
                                                tabindex="0">
                                                <i class="bi bi-upload mr-2"></i>
                                                <input type="file" accept=".pdf,.doc" name="arquivoDesenvolvedoraSalesforces"
                                                    onchange="toggleButtonSalesforces()" class="form-control"
                                                    id="arquivoDesenvolvedoraSalesforces">
                                                <span class="arquivo-DesenvolvedoraSalesforces"></span>
                                            </label>
                                            <div class="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between">
                                                <small>O arquivo deve possuir o tamanho máximo de 25MB.</small>
                                                <small id="tamanhoExcedido"></small>
                                            </div>
                                        </div>
                                        <div class="row row-cols-auto mb-5">
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1"></div>
                                            <div class="col-sm-4 col-md-4 col-lg-4 col-xxl-4">
                                                <!-- Button trigger modal -->
                                                <button type="button" class="btn-shared shadow-sm">
                                                    Compartilhe nossas vagas
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" style="margin-left: 5px;"
                                                        class="bi bi-share" viewBox="0 0 16 16">
                                                        <path
                                                            d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                                    </svg>
                                                    <a href="" id="whatsapp-share-ios" rel="noopener external nofollow"
                                                        target="_blank" class="link-whatsapp"></a>
                                                </button>
                                            </div>
                                            <div class="col-sm-2 col-md-2 col-lg-2 col-xxl-2 my-2"></div>
                                            <div class="col-sm-4 col-md-4 col-lg-4 col-lg-4">
                                                <button type="submit" disabled class="btn-send shadow-sm"
                                                    id="buttonSalesforces">
                                                    Envie seu currículo
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        style="margin-left: 5px;" fill="currentColor" class="bi bi-send"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="col-sm-1 col-md-1 col-lg-1 col-xxl-1"></div>
                                        </div>
                                        <div class="col-sm-12 col-md-12 col-lg-12">
                                            <div id="Salesforces"></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
        }
    }
}, [scriptsLoaded]);

    useEffect(() => {
    if (scriptsLoaded) {
        const fileInput = document.querySelector("#arquivoDevSecopsJava");
        const fileNameDisplay = document.querySelector(".arquivo__picture");
        const message = document.getElementById("tamanhoExcedido");

        const arquivoText = "Selecione seu arquivo...";
        fileNameDisplay.innerHTML = arquivoText;

        const handleFileChange = (e) => {
            const file = e.target.files[0];
            if (file) {
                if (file.size > 26214400) { // 25MB in bytes
                    message.innerHTML = "Tamanho Excedido";
                } else {
                    fileNameDisplay.innerHTML = file.name;
                    message.innerHTML = ""; // Clear the error message
                }
            } else {
                fileNameDisplay.innerHTML = arquivoText;
            }
        };

        if (fileInput) {
            fileInput.addEventListener("change", handleFileChange);
        }

        return () => {
            if (fileInput) {
                fileInput.removeEventListener("change", handleFileChange);
            }
        };
    }
}, [scriptsLoaded]);

    return (
    <>
        <div className="banner-container">
        <img src={bannerCarreira} className="banner-image" alt="carreiras swell" />
            <div className="banner-text">
                <h2 className="banner-title">Carreiras Swell</h2>
                <span className="banner-subtitle">Surfe as Melhores Oportunidades com a Swell.</span>
            </div>
        </div>

        <div id="dynamic-content" />

    </>
  );
};

export default CareerPage;