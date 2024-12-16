import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  pt: {
    translation: {
      "Home": "Home",
      "A Swell": "A Swell",
      "Wave AI": "Wave AI",
      "Wave Payments": "Wave Payments",
      "Cases Swell": "Cases Swell",
      "Carreiras Swell": "Carreiras Swell",
      "Login": "Login",
      "swell_title": "A Swell",
      "swell_description": "Com mais de 20 anos de experiência, cultivamos uma comunidade de talentos diversos, impulsionada pela inovação e dedicada a fornecer soluções personalizadas. Nossa jornada tecnológica é marcada pela contínua evolução, onde cada avanço nos leva mais perto do amanhã.",
      "know_button": "CONHECER",
      "waveStudioDescription": "Reunimos a expertise de nossos profissionais para criar uma equipe multidisciplinar que tem como pilares a cultura ágil, a customização de processos e a capacidade de geração de valor. Nosso foco é promover a melhoria contínua e oferecer soluções de negócios únicas para o mercado, agregando qualidade aos produtos e serviços digitais de nossos clientes.",
      "waveStudioImageAlt": "Círculo contendo qualidades da Wave Studio",
      "See More": "VER MAIS",
      "clients": "Clientes",
      "DISCOVERY": "DISCOVERY",
      "discoveryDescription": "Desde a compreensão do contexto até a definição de objetivos, KPIs, personas, protótipos, e roadmap, garantindo soluções relevantes e eficazes.",
      "TECH": "TECH",
      "techDescription": "Expertise tecnológica e parceria estratégica para impulsionar a inovação, estabilidade e transformação digital em todas as fases do ciclo de vida do software.",
      "BUSINESS": "BUSINESS",
      "businessDescription": "Soluções fundamentais para aprimoramento contínuo. Catalisadores da transformação dos processos de negócios, garantindo resultados mensuráveis e duradouros.",
      "Transform Vision into Innovation with us!": "Transforme Visão em Inovação!",
      "We are ready to boost your company's success!": "Estamos prontos para impulsionar o sucesso da sua empresa!",
      "Fill out the form below and allow our team to get in touch.": "Preencha o formulário e dê o primeiro passo para soluções personalizadas que vão elevar o seu negócio!",
      "Name": "Nome*",
      "Whatsapp": "Whatsapp*",
      "Email": "E-mail*",
      "Company": "Empresa*",
      "Subject": "Assunto*",
      "Type your message here (optional)": "Digite sua mensagem aqui (opcional)",
      "Send": "Solicite nosso contato",
      "The Controller of personal data is Swell IT Solutions. The data entered in the form will be processed solely and exclusively to maintain contact.": "O Controlador dos dados pessoais é a Swell IT Solutions. Os dados inseridos no formulário serão processados única e exclusivamente para manter contato.",
      "You can withdraw any consent given at any time. For additional information or to exercise your rights, please visit the": "Você pode retirar qualquer o consentimento dado a qualquer momento. Para obter informações adicionais ou para exercer os seus direitos, visite o",
      "privacy notice": "aviso de privacidade",
      "Swell does not use contact information to send any type of SPAM.": "A Swell não utiliza informações de contato para enviar qualquer tipo de SPAM.",
      "about_section1_title": "A Swell",
      "about_section1": "Somos a <span className='blue-text'>Swell It Solutions</span>. Mais do que uma consultoria em Tecnologia e Gestão, uma comunidade de talentos diversos. Unidos pela paixão em superar desafios complexos, nosso DNA é uma mistura inigualável de inovação, expertise e comprometimento.",
      "about_section2_title": "Nossa Experiência de Mais de 20 Anos",
      "about_section2": "Com uma sólida história de mais de duas décadas no mercado, <span className='blue-text'>a Swell It Solutions</span> acumulou uma vasta experiência em Desenvolvimento e Gestão de Software. Nossa jornada é marcada por parcerias de sucesso com uma ampla gama de setores, desde Startups ágeis e inovadoras até grandes Empresas.",
      "about_section3_title": "A Jornada da Inovação",
      "about_section3": "Somos pioneiros na aplicação das últimas tendências em tecnologia e melhores práticas de gestão, adaptando-as às necessidades específicas de nossos clientes.",
      "about_section4_title": "Nossa Abordagem Holística",
      "about_section4": "Nossa abordagem holística nos diferencia pois não apenas entregamos soluções, mas também criamos parcerias duradouras baseadas na confiança mútua. Colaboramos de perto com nossos clientes, entendendo profundamente seus objetivos e desafios para oferecer soluções sob medida que impulsionam o sucesso a longo prazo.",
      "about_section5_title": "Um Mundo de Possibilidades",
      "about_section5": "Na <span className='blue-text'>Swell It Solutions</span>, acreditamos que não há desafio muito grande nem problema muito complexo. Cada desafio é uma oportunidade de inovação, cada problema uma porta para soluções criativas. Construímos nossa jornada de constante evolução, onde o futuro é moldado por nossa paixão pela tecnologia e nossa dedicação ao seu sucesso.",
      "about_section5.1": "Juntos, estamos prontos para explorar um mundo infinito de possibilidades.",
      "Procuramos pessoas talentosas e": "Procuramos pessoas talentosas e",
      "apaixonadas para se juntar à equipe.": "apaixonadas para se juntar à equipe.",
      "privPol": "Política de Privacidade",
      "cookiesPol": "Política de Cookies",
      "RUA": "RUA",
      "Contact": "CONTATO",
      "Invalid email": "Email inválido" ,
      "Invalid phone number": "Número de telefone inválido",
      "Name is required": "Nome é obrigatório",
      "Company is required": "Nome da empresa obrigatório", 
      "Sending...": "Enviando...",
      "Carreiras": {
        "CareersDescription": "Surfe as Melhores Oportunidades com a Swell."
      },
      "WavePayments": {
        "Intro": "Concentre, Gerencie e Simplifique suas Transações.",
        "AdvantagesTitle": "Mais vantagem e competitividade de acordo com sua necessidade!",
        "Advantage1": "- Desenvolva APIs Personalizadas;",
        "Advantage2": "- Integre pagamentos com Criptomoedas;",
        "Advantage3": "- Permita transações rápidas sem inserir o cartão com Tap On;",
        "Advantage4": "- Conte com serviços de Compliance e Gestão de Riscos;",
        "Advantage5": "- Tenha seu próprio Hub de Pagamentos centralizado e realize a gestão de múltiplos métodos e serviços de pagamentos, permitindo que transações sejam processadas de forma eficiente, segura e simplificada.",
        "AcquirerTitle": "ADQUIRENTE",
        "AcquirerDescription": "Torne-se um dos principais processadores de transações!",
        "AcquirerIntro": "Realize o processamento direto de transações conectando clientes e bandeiras de cartão.",
        "AcquirerAdvantage1": "- Autorização de Transações;",
        "AcquirerAdvantage2": "- Liquidação de Fundos;",
        "AcquirerAdvantage3": "- Conformidade e Segurança;",
        "AcquirerAdvantage4": "- Gestão de Riscos;",
        "AcquirerAdvantage5": "- Contrato Direto com Comerciantes.",
        "SubAcquirerTitle": "SUB - ADQUIRENTE",
        "SubAcquirerDescription": "Simplifique o acesso aos serviços de pagamento!",
        "SubAcquirerIntro": "Atue como intermediário facilitando a integração e reduzindo requisitos de conformidade entre comerciantes e adquirentes.",
        "SubAcquirerAdvantage1": "- Integração Simplificada;",
        "SubAcquirerAdvantage2": "- Conta de Sub-Merchant;",
        "SubAcquirerAdvantage3": "- Gerenciamento de Transações;",
        "SubAcquirerAdvantage4": "- Serviços adicionais como antifraude, análise de dados e suporte ao cliente;",
        "SubAcquirerAdvantage5": "- Responsabilidade pela Conformidade.",
        "DigitalPaymentsTitle": "PAGAMENTOS DIGITAIS",
        "DigitalPaymentsDescription": "Ofereça suporte a diversas formas de pagamento digital!",
        "DigitalAdvantage1": "- Tenha alcance global e atenda clientes de diferentes regiões com preferências variadas de pagamento.",
        "DigitalAdvantage2": "- Ofereça flexibilidade e conveniência com múltiplas opções de pagamento e aumente as chances de conversão.",
        "DigitalAdvantage3": "- Garanta segurança com implementação de medidas de segurança adaptadas a cada método, reduzindo fraudes.",
        "DigitalAdvantage4": "- Inove e seja competitivo com suporte a novas tecnologias de pagamento e transferências instantâneas.",
        "DigitalAdvantage5": "- Integre e processe pagamentos com criptomoedas.",
        "FooterMessage": "Conte com nossos serviços para eliminar a complexidade e solucionar seus desafios de pagamentos.",
      },
      "WaveStudio": {
        "Intro": "Inovação Sob Medida, Resultados Extraordinários.",
        "Description": "Reunimos a expertise de nossos profissionais para criar uma equipe multidisciplinar que tem como pilares a cultura ágil, a customização de processos e a capacidade de geração de valor. Nosso foco é promover a melhoria contínua e oferecer soluções de negócios únicas para o mercado, agregando qualidade aos produtos e serviços digitais de nossos clientes",
        "ContractTerms": {
          "Title": "Termos de Contratação:",
          "Description": "Os detalhes sobre termos e condições de contratação devem ser consultados diretamente conosco. Estamos aqui para fornecer todas as informações necessárias para que você tome a melhor decisão para o seu negócio."
        },
        "Discovery": {
          "TitlePart1": "Transforme Ideias",
          "TitlePart2": "em Estratégia de Sucesso.",
          "Introduction": {
            "Part1": "Na ",
            "StrongPart": "Wave Discovery",
            "Part2": ", entendemos que o sucesso de qualquer iniciativa começa com uma compreensão profunda do contexto e uma definição clara dos objetivos. Desde a captura de insights até a criação de protótipos e o desenvolvimento de um roadmap estratégico, nosso objetivo é garantir soluções relevantes e eficazes que estejam perfeitamente alinhadas com a visão e metas de sua organização."
          },
          "Benefits": {
            "Title": "Os principais benefícios da ",
            "StrongPart": "Wave Discovery",
            "Title.1": " são",
            "List0": "Alinhamento Organizacional.",
            "List1": "Tomada de Decisão Informada.",
            "List2": "Desenvolvimento de Estratégia e Plano de Entrega Eficazes.",
            "List3": "Redução de Custo e Risco.",
            "List4": "Melhoria na Qualidade de Solução.",
            "OperatingModel": "Nosso modelo de atuação:"
          },
          "ContactUs": {
            "Title": "Pronto para transformar suas ideias em realidade?",
            "Description": "Entre em contato conosco hoje mesmo e descubra como a <strong class='text-primaryBlue'>Wave Discovery</strong> pode impulsionar a inovação e o crescimento na sua organização."
          },
          "Model1": {
            "Title": "EXPLORATION | Alinhamento Estratégico",
            "Description": "Na etapa de <strong>EXPLORATION</strong>, focamos em alinhar as iniciativas da sua empresa com os OKRs organizacionais. Fornecemos suporte completo na criação e implementação de OKRs, além de orientação e facilitação no processo de captura e seleção de iniciativas para que estejam em sinergia com os objetivos estratégicos:",
            "ListItems": [
              "Suporte na Implementação de OKRs.",
              "Critérios de Seleção Personalizados.",
              "Facilitação do Processo de Decisão."
            ]
          },
          "Model2": {
            "Title": "ABSTRACTION | Do Insight à Ação",
            "Description": "Durante a fase de <strong>ABSTRACTION</strong>, focamos na transformação de insights em decisões informadas, transformando Ideias em Planos Concretos. Com o uso de técnicas avançadas de facilitação, ferramentas de prototipagem e modelagem de UI/UX, promovemos o entendimento profundo das opções disponíveis. Envolvemos equipes multidisciplinares em sessões de brainstorming direcionadas, garantindo que todos os ângulos sejam considerados e que as soluções sejam robustas e viáveis:",
            "ListItems": [
              "Sessões de Brainstorming Facilitadas.",
              "Ferramentas de Prototipagem e UI/UX.",
              "Compreensão Ampla e Profunda."
            ]
          },
          "Model3": {
            "Title": "BALANCE | Equilíbrio e Prioridade para Geração de Valor",
            "Description": "A etapa de <strong>BALANCE</strong> é crucial para o sucesso do projeto. Nesta fase, ajudamos a equilibrar as opções disponíveis, evoluindo os critérios existentes ou implementando novos modelos de ponderação e priorização. Também facilitamos a análise de viabilidade técnica, financeira e de risco, garantindo que o roadmap esteja perfeitamente alinhado com os objetivos do projeto e que o MVP seja claramente definido:",
            "ListItems": [
              "Critérios de Priorização Customizados.",
              "Análise de Viabilidade."
            ]
          },
          "Model4": {
            "Title": "VISION ROADMAP | Planejamento Estratégico",
            "Description": "Na fase de <strong>VISION ROADMAP</strong>, concentramos nossos esforços em transformar direcionamentos e prioridades Organizacionais em Visão Estratégica orientada a resultados. Trabalhamos junto à sua equipe para definir de forma clara o Produto Mínimo Viável (MVP), para que reflita os principais objetivos do negócio orientando a criação de um roadmap que estabeleça marcos e metas para cada entrega, de acordo com as expectativas estabelecidas e orientada à entrega contínua de valor.",
            "ListItems": [
              "Definição Clara do MVP e Planejamento Estratégico do Roadmap.",
              "Estabelecimento de Marcos e Metas.",
              "Abordagem dinâmica e flexível possibilitando adequações."
            ]
          },
          "Model5": {
            "Title": "INTEGRATED BACKLOG | Consistência, Previsibilidade e Integração",
            "Description": "No <strong>INTEGRATED BACKLOG</strong>, nosso foco é garantir que cada item do backlog esteja detalhado, orientado para os resultados esperados e alinhado com a visão estratégica da organização. Através de um processo colaborativo, trabalhamos para que o backlog integre as necessidades de diferentes áreas, times e especialistas, mapeando riscos potenciais e identificando impedimentos. Nosso objetivo é criar um ambiente de trabalho fluido e previsível, onde todos os envolvidos tenham clareza sobre os pré-requisitos técnicos, habilitadores e o caminho para a entrega de valor.",
            "ListItems": [
              "Detalhamento Orientado a Resultados.",
              "Integração com Áreas e Especialistas.",
              "Mapeamento de Riscos e Impedimentos.",
              "Identificação de Pré-requisitos Técnicos e Habilitadores.",
              "Implementação e Aprimoramento de Técnicas de Estimativa e Previsibilidade."
            ]
          }
        },
        "Business": {
          "TitlePart1": "Maximização de Resultados",
          "TitlePart2": "e Inovação para Seu Negócio.",
          "Introduction": {
            "Part1": "Na ",
            "StrongPart": "Wave Business",
            "Part2": ", combinamos conhecimento tecnológico de ponta com uma parceria estratégica para impulsionar a inovação, garantir a estabilidade e promover a transformação digital em todas as fases do ciclo de vida do software. Nossa abordagem é projetada para atender às suas necessidades específicas, com flexibilidade e escalabilidade, permitindo que sua equipe interna se concentre no core business enquanto nós cuidamos da tecnologia."
          },
          "Benefits": {
            "Title": "Os principais benefícios da ",
            "StrongPart": "Wave Business & Process",
            "List0": "Inovação Contínua.",
            "List1": "Otimização Operacional e Adaptabilidade.",
            "List2": "Qualidade e Segurança Aprimoradas.",
            "OperatingModel": "Modelos e Abordagens:"
          },
          "Model1": {
            "Title": "TRANSFORMAÇÃO DIGITAL, AUTOMAÇÃO E INOVAÇÃO | Implemente o Futuro",
            "Description": "Leve sua empresa ao próximo nível com soluções robustas de transformação digital e automação, desenhadas para criar novas oportunidades de negócio, otimizar processos e melhorar a experiência do cliente. Implementamos tecnologias de ponta que impulsionam a inovação e modernizam sua operação",
            "ListItems": [
              "<strong>Digital Transformation:</strong> Realize uma transformação completa que abrange processos, cultura e tecnologia, conduzindo sua organização para a era digital. Medimos o sucesso com indicadores como a adoção tecnológica e a eficiência operacional pós-implementação.",
              "<strong>Artificial Intelligence & Machine Learning:</strong> Automatize processos e obtenha insights valiosos com inteligência artificial e aprendizado de máquina. Nossas implementações focam em KPIs como redução de custos e melhoria na tomada de decisões.",
              "<strong>Internet of Things (IoT):</strong> Conecte dispositivos e sistemas para melhorar a eficiência operacional e criar novas oportunidades de negócio. Utilizamos métricas como a redução de downtime e o aumento da produtividade.",
              "<strong>Cloud Migration:</strong> Migre seus sistemas para a nuvem com segurança, flexibilidade e redução de custos. Acompanhamos a implementação com indicadores de redução de TCO (Total Cost of Ownership) e melhorias em escalabilidade.",
              "<strong>Robotic Process Automation (RPA):</strong> Liberte sua equipe de tarefas manuais e repetitivas com RPA, permitindo foco em atividades estratégicas. Medimos o sucesso com a redução do tempo de ciclo e aumento na capacidade produtiva."
            ]
          },
          "Model2": {
            "Title": "GESTÃO E OTIMIZAÇÃO DE PROCESSOS| Aumente sua Capacidade de Geração de Valor",
            "Description": "Maximize o valor de suas operações com práticas de gestão e otimização de processos adaptadas às necessidades do seu negócio. Implementamos modelos eficazes de agilidade, qualidade e segurança, apoiados por métricas de desempenho e uma equipe experiente:",
            "ListItems": [
              "<strong>DevSecOps Implementation Model:</strong> Integre segurança ao longo do ciclo de desenvolvimento, assegurando produtos mais seguros e processos mais ágeis. Monitoramos a eficácia por meio de métricas como redução de vulnerabilidades e melhorias na entrega contínua.",
              "<strong>Quality Assurance Implementation Model:</strong> Assegure que seus produtos atendam aos mais altos padrões com práticas robustas de garantia de qualidade. Indicadores de sucesso incluem a redução de defeitos e aumento na satisfação do cliente.",
              "<strong>Business Agility:</strong> Adapte seu negócio às mudanças do mercado com práticas ágeis customizadas para sua organização. Medimos o impacto com a melhoria do time-to-market e a capacidade de resposta a novas demandas.",
              "<strong>Value Stream Mapping:</strong> Elimine desperdícios e aumente a eficiência com a análise detalhada dos seus processos. O sucesso é medido por meio de indicadores como a redução de lead time e o aumento no valor entregue ao cliente."
            ]
          },
          "ContactUs": {
            "Title": "Pronto para transformar suas ideias em realidade?",
            "Description": "Entre em contato conosco hoje mesmo e descubra como a Wave Business pode impulsionar a inovação e o crescimento na sua organização."
          },
        },
        "Talent": {
          "TitlePart1": "Potencialize o desempenho",
          "TitlePart2": "e o crescimento do seu negócio.",
          "Introduction": {
            "Part1": "Encontre o melhor talento para o seu sucesso com ",
            "StrongPart": "Wave Talent.",
            "Part2": " A nossa estratégia dinâmica de recrutamento garante o ajuste perfeito entre talento e organização."
          },
          "Benefits": {
            "Title": "Os principais benefícios da ",
            "StrongPart": "Wave Talent ",
            "Title.1": " são",
            "List0": "Agilidade na contratação.",
            "List1": "Maior Aderência entre Profissional e Organização.",
            "List2": "Crescimento de Capital Intelectual.",
            "List3": "Aumento da Performance.",
            "OperatingModel": "Modelos de contratação:"
          },
          "Model1": {
            "Title": "SHARED TALENT | Parceria Adaptada, Flexibilidade e Eficiência",
            "Description": "O melhor dos dois mundos: Nosso modelo de Shared Talent permite que as empresas beneficiem-se da flexibilidade e da segurança ao contratar talentos qualificados que são inicialmente alocados atuando no Cliente no formato Staff Augmentation, após um período de avaliação acordado, o Cliente tem total liberdade para decidir pela internalização do profissional.",
            "ListItems": [
              "Avaliação de Desempenho em Tempo Real.",
              "Redução de Riscos de Contratação.",
              "Suporte Swell para o desenvolvimento do Profissional.",
              "Adaptação às Necessidades do Projeto.",
              "Decisão Informada para Internalização."
            ]
          },
          "Model2": {
            "Title": "TARGET TALENT | Seleção Especializada",
            "Description": "O Target Talent é a solução ideal para empresas que precisam de apoio especializado na identificação e contratação de talentos altamente qualificados. Identificamos e selecionamos os profissionais que melhor se encaixam nessas necessidades. Após a aprovação, os profissionais são contratados diretamente pelo Cliente, sem necessidade de alocação prévia ou período de avaliação.",
            "ListItems": [
              "Recrutamento Personalizado.",
              "Foco na Excelência Profissional.",
              "Redução do Tempo de Contratação.",
              "Consultoria e Suporte Durante a Seleção.",
              "Contratação Direta pelo Cliente.",
            ]
          },
          "ContactUs": {
            "Title": "Pronto para transformar suas ideias em realidade?",
            "Description": "Entre em contato conosco hoje mesmo e descubra como a <strong className='text-primaryBlue'>Wave Talent</strong> pode impulsionar a inovação e o crescimento na sua organização."
          }
        },
        "Tech": {
          "TitlePart1": "Inovação, Estabilidade",
          "TitlePart2": "e Transformação Digital",
          "TitlePart3": "para o Sucesso do Seu Negócio",
          "Introduction": {
            "Part1": "Na ",
            "StrongPart": "Wave Tech, ",
            "Part2": " combinamos conhecimento tecnológico de ponta com uma parceria estratégica para impulsionar a inovação, garantir a estabilidade e promover a transformação digital em todas as fases do ciclo de vida do software. Nossa abordagem é projetada para atender às suas necessidades específicas, com flexibilidade e escalabilidade, permitindo que sua equipe interna se concentre no core business enquanto nós cuidamos da tecnologia."
          },
          "Benefits": {
            "Title": "Os principais benefícios da ",
            "StrongPart": "Wave Tech ",
            "Title.1": " são",
            "List0": "Profissionais Altamente Qualificados.",
            "List1": "Flexibilidade e Escalabilidade.",
            "List2": "Práticas de Qualidade de Alto Padrão.",
            "List3": "Redução de Custos Operacionais.",
            "OperatingModel": "Modelos de contratação:"
          },
          "Model1": {
            "Title": "DEVELOPMENT SQUAD | Inovação e Eficiência",
            "Description": "Para empresas que buscam acelerar a inovação sem comprometer a qualidade, nosso modelo <strong>Development Squad</strong> oferece uma equipe dedicada de especialistas. Através de uma abordagem flexível para a criação de aplicações, sistemas e soluções digitais customizadas para empresas que buscam excelência tecnológica, inovação ágil e otimização de recursos:",
            "ListItems": [
              "Experiência com as principais e mais inovadoras tecnologias do mercado.",
              "Equipes com know-how em desenvolvimento ágil, híbrido e em waterfall.",
              "Investimos no aprofundamento de conhecimento no negócio do Cliente.",
              "Treinamento contínuo para garantir a atualização e a excelência da Equipe.",
            ]
          },
          "Model2": {
            "Title": "MAINTENANCE SQUAD | Estabilidade e Eficiência",
            "Description": "A manutenção contínua é vital para garantir que suas aplicações e sistemas funcionem com a máxima eficiência. Nosso modelo <strong>Maintenance Squad</strong> é formatado para garantir o desempenho contínuo e a eficiência das aplicações digitais que impulsionam os negócios, atendendo à constante evolução das expectativas de qualidade e tempo de resposta:",
            "ListItems": [
              "Equipe dedicada, experiente e altamente qualificada.",
              "Redução de Custos Operacionais em contratações.",
              "Monitoramento proativo: estabilidade e desempenho das soluções.",
              "Reduzindo o tempo de inatividade das soluções.",
            ]
          },
          "Model3": {
            "Title": "SOFTWARE FACTORY | Transformação Digital Sob Medida",
            "Description": "Para empresas que necessitam de soluções tecnológicas sob medida, nossa <strong>Software Factory</strong> é a resposta. Nossos especialistas trabalham em estreita colaboração com você para entender sua visão e transformar suas necessidades em software de alta qualidade:",
            "ListItems": [
              "Amplo domínio de tecnologias diversas.",
              "Metodologias de desenvolvimento voltadas a eficiência e qualidade do projeto.",
              "Atenção ao negócio do cliente e particularidades para efetividade do Software.",
              "Desenvolvimento constante e especializado da equipe.",
            ]
          },
          "Model4": {
            "Title": "STAFF AUGMENTATION | Talento Especializado e Versátil",
            "Description": "Para empresas que precisam de expertise de forma flexível, nosso modelo de <strong>Staff Augmentation</strong> fornece profissionais altamente qualificados, prontos para integrar sua equipe e impulsionar projetos críticos minimizando o tempo de adaptação e maximizando a produtividade desde o início. Nossos profissionais são cuidadosamente selecionados para atender uma ampla gama de necessidades:",
            "ListItems": [
              "<strong>Especialistas em Desenvolvimento:</strong> Contamos com desenvolvedores full-stack, front-end, back-end, engenheiros de software, entre outros com profundo conhecimento em diversas linguagens e frameworks, prontos para transformar ideias em soluções robustas e escaláveis.",
              "<strong>Expertise em Qualidade:</strong> Nossos profissionais de QA são especializados em garantir a excelência do software, utilizando metodologias avançadas de automação, testes manuais e garantia de qualidade contínua.",
              "<strong>Liderança em Projetos e Produtos:</strong> Gerentes de Projeto, Product Owners, Product Managers, entre outros. Profissionais experientes, com habilidades comprovadas em metodologias ágeis e tradicionais, assegurando que os projetos sejam entregues dentro do prazo, escopo e orçamento definidos.",
              "<strong>Infraestrutura e DevSecOps:</strong> Profissionais especializados em automação de infraestrutura, CI/CD, monitoramento, segurança e DevSecOps, que garantem a estabilidade, escalabilidade e segurança dos ambientes de TI.",
              "<strong>Liderança Ágil e Gestão de Portfólio:</strong> Gerentes de portfólio, Agile Coaches, Scrum Masters, entre outros, com profundo conhecimento em frameworks ágeis, capazes de orientar equipes e organizações na transformação ágil e na gestão eficaz de múltiplos projetos.",
              "<strong>Designers UX/UI:</strong> Profissionais focados em criar interfaces intuitivas e experiências envolventes.",
            ]
          },
          "ContactUs": {
            "Title": "Pronto para transformar suas ideias em realidade?",
            "Description": "Entre em contato conosco hoje mesmo e descubra como a <strong className='text-primaryBlue'>Wave Talent</strong> pode impulsionar a inovação e o crescimento na sua organização."
          }
        },
      }
    }
  },
  en: {
    translation: {
      "Home": "Home",
      "A Swell": "About Swell",
      "Wave Studio": "Wave Studio",
      "Wave AI": "Wave AI",
      "Wave Payments": "Wave Payments",
      "Cases Swell": "Swell Cases",
      "Carreiras Swell": "Swell Careers",
      "Login": "Login",
      "swell_title": "About Swell",
      "swell_description": "With over 20 years of experience, we have cultivated a community of diverse talent, driven by innovation and dedicated to providing customized solutions. Our technological journey is marked by continuous evolution, where each advancement takes us closer to tomorrow.",
      "know_button": "SEE MORE",
      "waveStudioDescription": "We brought together the expertise of our professionals to create a multidisciplinary team whose pillars are agile culture, process customization and the ability to generate value. Our focus is to promote continuous improvement and offer unique business solutions to the market, adding quality to our customers' digital products and services.",
      "waveStudioImageAlt": "Circle containing qualities of Wave Studio",
      "See More": "SEE MORE",
      "clients": "Clients",
      "DISCOVERY": "DISCOVERY",
      "discoveryDescription": "From understanding the context to defining objectives, KPIs, personas, prototypes, and roadmap, ensuring relevant and effective solutions.",
      "TECH": "TECH",
      "techDescription": "Technological expertise and strategic partnership to drive innovation, stability and digital transformation at every stage of the software lifecycle.",
      "BUSINESS": "BUSINESS",
      "businessDescription": "Fundamental solutions for continuous improvement. Catalysts for the transformation of business processes, ensuring measurable and lasting results.",
      "Transform Vision into Innovation with us!": "Transform Vision into Innovation with us!",
      "We are ready to boost your company's success!": "We are ready to boost your company's success!",
      "Fill out the form below and allow our team to get in touch.": "Fill out the form below and allow our team to get in touch.",
      "Name": "Name*",
      "Whatsapp": "Whatsapp*",
      "Email": "Email*",
      "Company": "Company*",
      "Subject": "Subject*",
      "Type your message here (optional)": "Type your message here (optional)",
      "Send": "Contact Us",
      "The Controller of personal data is Swell IT Solutions. The data entered in the form will be processed solely and exclusively to maintain contact.": "The Controller of personal data is Swell IT Solutions. The data entered in the form will be processed solely and exclusively to maintain contact.",
      "You can withdraw any consent given at any time. For additional information or to exercise your rights, please visit the": "You can withdraw any consent given at any time. For additional information or to exercise your rights, please visit the",
      "privacy notice": "privacy notice",
      "Swell does not use contact information to send any type of SPAM.": "Swell does not use contact information to send any type of SPAM.",
      "about_section1_title": "About Swell",
      "about_section1": "We are <span className='blue-text'>Swell It Solutions</span>. More than just a Technology and Management consultancy, we are a community of diverse talents. United by a passion for overcoming complex challenges, our DNA is an unparalleled blend of innovation, expertise, and commitment.",
      "about_section2_title": "Our 20+ Years of Experience",
      "about_section2": "With a solid history of over two decades in the market, <span className='blue-text'>Swell It Solutions</span> has amassed extensive experience in Software Development and Management. Our journey is marked by successful partnerships across a wide range of sectors, from agile and innovative Startups to large Enterprises.",
      "about_section3_title": "The Journey of Innovation",
      "about_section3": "We are pioneers in applying the latest technology trends and best management practices, tailoring them to the specific needs of our clients.",
      "about_section4_title": "Our Holistic Approach",
      "about_section4": "Our holistic approach sets us apart as we do not just deliver solutions but also create lasting partnerships based on mutual trust. We work closely with our clients, deeply understanding their objectives and challenges to offer tailored solutions that drive long-term success.",
      "about_section5_title": "A World of Possibilities",
      "about_section5": "At <span className='blue-text'>Swell It Solutions</span>, we believe that no challenge is too great or problem too complex. Every challenge is an opportunity for innovation, every problem a doorway to creative solutions. We build our journey of constant evolution, where the future is shaped by our passion for technology and our commitment to your success.",
      "about_section5.1": "Together, we are ready to explore an infinite world of possibilities.",
      "Procuramos pessoas talentosas e": "We are looking for talented and",
      "apaixonadas para se juntar à equipe.": "passionate people to join the team.",
      "privPol": "Privacy Policy",
      "RUA": "St",
      "Contact": "CONTACT",
      "Invalid email": "Invalid email" ,
      "Invalid phone number": "Invalid phone number",
      "Name is required": "Name is required",
      "Company is required": "Company is required", 
      "Sending...": "Sending...",
      "Carreiras": {
        "CareersDescription": "Surf on the best opportunities with Swell."
      },
      "WavePayments": {
        "Intro": "Concentrate , Manage and Simplify your Transactions.",
        "AdvantagesTitle": "More advantage and competitiveness according to your needs!",
        "Advantage1": "- Develop Custom APIs;",
        "Advantage2": "- Integrate payments with Cryptocurrencies;",
        "Advantage3": "- Allow fast transactions without inserting the card with Tap On;",
        "Advantage4": "- Count on Compliance and Risk Management services;",
        "Advantage5": "- Have your own centralized Payment Hub and manage multiple payment methods and services, allowing transactions to be processed efficiently, securely and simply.",
        "AcquirerTitle": "ACQUIRER",
        "AcquirerDescription": "Become one of the main transaction processors!",
        "AcquirerIntro": "Perform direct transaction processing by connecting customers and card brands.",
        "AcquirerAdvantage1": "- Transaction Authorization;",
        "AcquirerAdvantage2": "- Fund Settlement;",
        "AcquirerAdvantage3": "- Compliance and Security;",
        "AcquirerAdvantage4": "- Risk Management;",
        "AcquirerAdvantage5": "- Direct Contract with Merchants.",
        "SubAcquirerTitle": "SUB - ACQUIRER",
        "SubAcquirerDescription": "Simplify access to payment services!",
        "SubAcquirerIntro": "Act as an intermediary, facilitating integration and reducing compliance requirements between merchants and acquirers.",
        "SubAcquirerAdvantage1": "- Simplified Integration;",
        "SubAcquirerAdvantage2": "- Sub-Merchant Account;",
        "SubAcquirerAdvantage3": "- Transaction Management;",
        "SubAcquirerAdvantage4": "- Additional services such as anti-fraud, data analysis and customer support;",
        "SubAcquirerAdvantage5": "- Compliance Accountability.",
        "DigitalPaymentsTitle": "DIGITAL PAYMENTS",
        "DigitalPaymentsDescription": "Support multiple forms of digital payment!",
        "DigitalAdvantage1": "- Reach a global audience and serve customers from different regions with varied payment preferences.",
        "DigitalAdvantage2": "- Offer flexibility and convenience with multiple payment options and increase conversion chances.",
        "DigitalAdvantage3": "- Ensure security by implementing security measures adapted to each method, reducing fraud.",
        "DigitalAdvantage4": "- Innovate and be competitive with support for new payment technologies and instant transfers.",
        "DigitalAdvantage5": "- Integrate and process payments with cryptocurrencies.",
        "FooterMessage": "Count on our services to eliminate complexity and solve your payment challenges."
      },
      "WaveStudio": {
        "Intro": "Tailored Innovation, Extraordinary Results.",
        "Description": "We have brought together the expertise of our professionals to create a multidisciplinary team that is based on agile culture, process customization and the ability to generate value. Our focus is to promote continuous improvement and offer unique business solutions to the market, adding quality to our clients' digital products and services",
        "ContractTerms": {
          "Title": "Contract Terms:",
          "Description": "Details on contract terms and conditions should be consulted directly with us. We are here to provide all the information you need to make the best decision for your business."
        },
        "Discovery": {
          "TitlePart1": "Transform Ideas",
          "TitlePart2": "into Successful Strategy.",
          "Introduction": {
            "Part1": "At ",
            "StrongPart": "Wave Discovery",
            "Part2": ", we understand that the success of any initiative begins with a deep understanding of the context and a clear definition of objectives. From capturing insights to prototyping and developing a strategic roadmap, our goal is to ensure relevant and effective solutions that are perfectly aligned with your organization’s vision and goals."
          },
          "Benefits": {
            "Title": "The main benefits of ",
            "StrongPart": "Wave Discovery",
            "Title.1": " are:",
            "List0": "Organizational Alignment.",
            "List1": "Informed Decision Making.",
            "List2": "Development of Effective Strategy and Delivery Plan.",
            "List3": "Reduction of Cost and Risk.",
            "List4": "Improved Solution Quality.",
            "OperatingModel": "Our operating model:"
          },
          "ContactUs": {
            "Title": "Ready to turn your ideas into reality?",
            "Description": "Contact us today and find out how Wave Discovery can drive innovation and growth in your organization."
          },
          "Model1": {
            "Title": "EXPLORATION | Strategic Alignment",
            "Description": "In the <strong>EXPLORATION</strong> phase, we focus on aligning your company’s initiatives with organizational OKRs. We provide full support in creating and implementing OKRs, along with guidance and facilitation in the process of capturing and selecting initiatives to ensure they are in sync with strategic objectives:",
            "ListItems": [
              "Support in OKR Implementation.",
              "Custom Selection Criteria.",
              "Facilitation of the Decision-Making Process."
            ]
          },
          "Model2": {
            "Title": "ABSTRACTION | From Insight to Action",
            "Description": "During the <strong>ABSTRACTION</strong> phase, we focus on transforming insights into informed decisions, transforming Ideas into Concrete Plans. Using advanced facilitation techniques, prototyping tools and UI/UX modeling, we foster a deep understanding of the available options. We engage multidisciplinary teams in targeted brainstorming sessions, ensuring that all angles are considered and that solutions are robust and viable:",
            "ListItems": [
              "Facilitated Brainstorming Sessions.",
              "Prototyping and UI/UX Tools.",
              "Broad and Deep Understanding."
            ]
          },
          "Model3": {
            "Title": "BALANCE | Balance and Priority for Value Generation",
            "Description": "The <strong>BALANCE</strong> stage is crucial for the success of the project. In this phase, we help balance the available options, evolving existing criteria or implementing new weighting and prioritization models. We also facilitate the analysis of technical, financial and risk feasibility, ensuring that the roadmap is perfectly aligned with the project objectives and that the MVP is clearly defined:",
            "ListItems": [
              "Customized Prioritization Criteria.",
              "Feasibility Analysis."
            ]
          },
          "Model4": {
            "Title": "VISION ROADMAP | Strategic Planning",
            "Description": "In the <strong>VISION ROADMAP</strong> phase, we focus our efforts on transforming organizational directions and priorities into a results-oriented Strategic Vision. We work with your team to clearly define the Minimum Viable Product (MVP), so that it reflects the main business objectives, guiding the creation of a roadmap that establishes milestones and goals for each delivery, in accordance with established expectations and oriented towards continuous value delivery.",
            "ListItems": [
              "Clear Definition of the MVP and Strategic Planning of the Roadmap.",
              "Establishment of Milestones and Goals.",
              "Dynamic and flexible approach enabling adjustments."
            ]
          },
          "Model5": {
            "Title": "INTEGRATED BACKLOG | Consistency, Predictability and Integration",
            "Description": "At <strong>INTEGRATED BACKLOG</strong>, our focus is to ensure that each item in the backlog is detailed, oriented towards the expected results and aligned with the strategic vision of the organization. Through a collaborative process, we work so that the backlog integrates the needs of different areas, teams and specialists, mapping potential risks and identifying impediments. Our goal is to create a fluid and predictable work environment, where everyone involved has clarity about the technical prerequisites, enablers and the path to value delivery.",
            "ListItems": [
              "Results-Oriented Detailing.",
              "Integration with Areas and Specialists.",
              "Mapping of Risks and Impediments.",
              "Identification of Technical Prerequisites and Enablers.",
              "Implementation and Improvement of Estimation and Predictability Techniques."
            ]
          }
        },
        "Business": {
          "TitlePart1": "Maximization of Results",
          "TitlePart2": "and Innovation for Your Business.",
          "Introduction": {
            "Part1": "At ",
            "StrongPart": "Wave Business",
            "Part2": ", we combine cutting-edge technological knowledge with a strategic partnership to drive innovation, ensure stability, and promote digital transformation at every stage of the software lifecycle. Our approach is designed to meet your specific needs with flexibility and scalability, allowing your internal team to focus on the core business while we handle the technology."
          },
          "Benefits": {
            "Title": "The main benefits of ",
            "StrongPart": "Wave Business & Process",
            "Title.1": " are:",
            "List0": "Continuous Innovation.",
            "List1": "Operational Optimization and Adaptability.",
            "List2": "Enhanced Quality and Security.",
            "OperatingModel": "Models and Approaches:"
          },
          "Model1": {
            "Title": "DIGITAL TRANSFORMATION, AUTOMATION, AND INNOVATION | Implement the Future",
            "Description": "Take your business to the next level with robust digital transformation and automation solutions designed to create new business opportunities, optimize processes, and improve the customer experience. We implement cutting-edge technologies that drive innovation and modernize your operation.",
            "ListItems": [
              "<strong>Digital Transformation:</strong> Achieve a comprehensive transformation encompassing processes, culture, and technology, propelling your organization into the digital era. We measure success with indicators such as technological adoption and post-implementation operational efficiency.",
              "<strong>Artificial Intelligence & Machine Learning:</strong> Automate processes and gain valuable insights with artificial intelligence and machine learning. Our implementations focus on KPIs such as cost reduction and improved decision-making.",
              "<strong>Internet of Things (IoT):</strong> Connect devices and systems to improve operational efficiency and create new business opportunities. We utilize metrics like reduced downtime and increased productivity.",
              "<strong>Cloud Migration:</strong> Securely migrate your systems to the cloud with flexibility and cost reduction. We track implementation with indicators of reduced TCO (Total Cost of Ownership) and improvements in scalability.",
              "<strong>Robotic Process Automation (RPA):</strong> Free your team from manual, repetitive tasks with RPA, allowing focus on strategic activities. Success is measured by cycle time reduction and increased productive capacity."
            ]
          },
          "Model2": {
            "Title": "PROCESS MANAGEMENT AND OPTIMIZATION | Increase Your Value Generation Capacity",
            "Description": "Maximize the value of your operations with management and process optimization practices tailored to your business needs. We implement effective models of agility, quality, and security, supported by performance metrics and an experienced team:",
            "ListItems": [
              "<strong>DevSecOps Implementation Model:</strong> Integrate security throughout the development cycle, ensuring safer products and more agile processes. Effectiveness is monitored through metrics such as reduced vulnerabilities and improved continuous delivery.",
              "<strong>Quality Assurance Implementation Model:</strong> Ensure your products meet the highest standards with robust quality assurance practices. Success indicators include defect reduction and increased customer satisfaction.",
              "<strong>Business Agility:</strong> Adapt your business to market changes with agile practices customized for your organization. We measure impact with improved time-to-market and responsiveness to new demands.",
              "<strong>Value Stream Mapping:</strong> Eliminate waste and increase efficiency with a detailed analysis of your processes. Success is measured by indicators such as reduced lead time and increased value delivered to the customer."
            ]
          },
          "ContactUs": {
            "Title": "Ready to transform your ideas into reality?",
            "Description": "Contact us today and discover how <strong class='text-primaryBlue'>Wave Business</strong> can drive innovation and growth in your organization."
          }
        },
        "Talent": {
          "TitlePart1": "Enhance the performance",
          "TitlePart2": "and growth of your business.",
          "Introduction": {
            "Part1": "Find the best talent for your success with ",
            "StrongPart": "Wave Talent.",
            "Part2": " Our dynamic recruitment strategy ensures the perfect match between talent and organization."
          },
          "Benefits": {
            "Title": "The main benefits of ",
            "StrongPart": "Wave Talent ",
            "Title.1": " are",
            "List0": "Agility in hiring.",
            "List1": "Better alignment between Professional and Organization.",
            "List2": "Growth of Intellectual Capital.",
            "List3": "Increased Performance.",
            "OperatingModel": "Hiring models:"
          },
          "Model1": {
            "Title": "SHARED TALENT | Adapted Partnership, Flexibility, and Efficiency",
            "Description": "The best of both worlds: Our Shared Talent model allows companies to benefit from flexibility and security by hiring qualified talents initially allocated to the client in a Staff Augmentation format. After an agreed evaluation period, the client has complete freedom to decide on internalizing the professional.",
            "ListItems": [
              "Real-Time Performance Evaluation.",
              "Reduced Hiring Risks.",
              "Swell Support for Professional Development.",
              "Adaptation to Project Needs.",
              "Informed Decision for Internalization."
            ]
          },
          "Model2": {
            "Title": "TARGET TALENT | Specialized Selection",
            "Description": "Target Talent is the ideal solution for companies needing specialized support in identifying and hiring highly qualified talent. We identify and select professionals who best fit these needs. Upon approval, professionals are hired directly by the client, without prior allocation or evaluation periods.",
            "ListItems": [
              "Personalized Recruitment.",
              "Focus on Professional Excellence.",
              "Reduced Hiring Time.",
              "Consulting and Support During Selection.",
              "Direct Hiring by the Client."
            ]
          },
          "ContactUs": {
            "Title": "Ready to transform your ideas into reality?",
            "Description": "Contact us today and discover how <strong className='text-primaryBlue'>Wave Talent</strong> can drive innovation and growth in your organization."
          }
        },
        "Tech": {
          "TitlePart1": "Innovation, Stability",
          "TitlePart2": "and Digital Transformation",
          "TitlePart3": "for Your Business Success",
          "Introduction": {
            "Part1": "At ",
            "StrongPart": "Wave Tech, ",
            "Part2": " we combine cutting-edge technological knowledge with a strategic partnership to drive innovation, ensure stability, and promote digital transformation at every stage of the software lifecycle. Our approach is designed to meet your specific needs, with flexibility and scalability, allowing your internal team to focus on the core business while we take care of the technology."
          },
          "Benefits": {
            "Title": "The main benefits of ",
            "StrongPart": "Wave Tech ",
            "Title.1": " are",
            "List0": "Highly Qualified Professionals.",
            "List1": "Flexibility and Scalability.",
            "List2": "High-Standard Quality Practices.",
            "List3": "Reduced Operational Costs.",
            "OperatingModel": "Hiring models:"
          },
          "Model1": {
            "Title": "DEVELOPMENT SQUAD | Innovation and Efficiency",
            "Description": "For companies seeking to accelerate innovation without compromising quality, our <strong>Development Squad</strong> model offers a dedicated team of specialists. Through a flexible approach to creating applications, systems, and custom digital solutions, we help companies achieve technological excellence, agile innovation, and resource optimization:",
            "ListItems": [
              "Experience with the leading and most innovative technologies in the market.",
              "Teams with expertise in agile, hybrid, and waterfall development.",
              "We invest in deepening our knowledge of the client's business.",
              "Continuous training to ensure the team's up-to-date skills and excellence."
            ]
          },
          "Model2": {
            "Title": "MAINTENANCE SQUAD | Stability and Efficiency",
            "Description": "Continuous maintenance is vital to ensure your applications and systems operate at peak efficiency. Our <strong>Maintenance Squad</strong> model is designed to ensure the continuous performance and efficiency of the digital applications that drive your business, meeting the ever-evolving expectations for quality and response time:",
            "ListItems": [
              "Dedicated, experienced, and highly qualified team.",
              "Reduction in operational hiring costs.",
              "Proactive monitoring: stability and performance of solutions.",
              "Reducing downtime for solutions."
            ]
          },
          "Model3": {
            "Title": "SOFTWARE FACTORY | Tailored Digital Transformation",
            "Description": "For companies requiring custom technological solutions, our <strong>Software Factory</strong> is the answer. Our specialists work closely with you to understand your vision and turn your needs into high-quality software:",
            "ListItems": [
              "Extensive expertise in diverse technologies.",
              "Development methodologies focused on project efficiency and quality.",
              "Attention to the client's business and specifics for software effectiveness.",
              "Constant and specialized team development."
            ]
          },
          "Model4": {
            "Title": "STAFF AUGMENTATION | Specialized and Versatile Talent",
            "Description": "For companies needing expertise with flexibility, our <strong>Staff Augmentation</strong> model provides highly qualified professionals ready to integrate into your team and drive critical projects. This minimizes adaptation time and maximizes productivity from the start. Our professionals are carefully selected to meet a wide range of needs:",
            "ListItems": [
              "<strong>Development Specialists:</strong> Full-stack, front-end, back-end developers, software engineers, and others with deep knowledge in various languages and frameworks, ready to transform ideas into robust and scalable solutions.",
              "<strong>Quality Assurance Expertise:</strong> Our QA professionals specialize in ensuring software excellence, using advanced automation methodologies, manual testing, and continuous quality assurance.",
              "<strong>Project and Product Leadership:</strong> Project Managers, Product Owners, Product Managers, and others with proven skills in agile and traditional methodologies, ensuring projects are delivered on time, within scope, and budget.",
              "<strong>Infrastructure and DevSecOps:</strong> Specialists in infrastructure automation, CI/CD, monitoring, security, and DevSecOps, ensuring stability, scalability, and security for IT environments.",
              "<strong>Agile Leadership and Portfolio Management:</strong> Portfolio Managers, Agile Coaches, Scrum Masters, and others with deep knowledge of agile frameworks, capable of guiding teams and organizations in agile transformation and effective management of multiple projects.",
              "<strong>UX/UI Designers:</strong> Professionals focused on creating intuitive interfaces and engaging experiences."
            ]
          },
          "ContactUs": {
            "Title": "Ready to transform your ideas into reality?",
            "Description": "Contact us today and discover how <strong className='text-primaryBlue'>Wave Talent</strong> can drive innovation and growth in your organization."
          }
        }
      }
    }
  },
  es: {
    translation: {
      "Home": "Comenzar",
      "A Swell": "El Swell",
      "Wave Studio": "Wave Estudio",
      "Wave AI": "Wave Tecnología",
      "Wave Payments": "Wave Pagos",
      "Cases Swell": "Wave Negocios",
      "Carreiras Swell": "Carreras Swell",
      "Login": "Login",
      "swell_title": "Acerca de Swell",
      "swell_description": "Con más de 20 años de experiencia, hemos cultivado una comunidad de talento diverso, impulsada por la innovación y dedicada a brindar soluciones personalizadas. Nuestro viaje tecnológico está marcado por una evolución continua, donde cada avance nos acerca al mañana.",
      "know_button": "CONOCER",
      "waveStudioDescription": "Reunimos la experiencia de nuestros profesionales para crear un equipo multidisciplinario cuyos pilares son la cultura ágil, la personalización de procesos y la capacidad de generar valor. Nuestro enfoque es promover la mejora continua y ofrecer soluciones de negocio únicas en el mercado, sumando calidad a los productos y servicios digitales de nuestros clientes.",
      "waveStudioImageAlt": "Círculo que contiene las cualidades del Wave Wave Estudio",
      "See More": "VER MÁS",
      "clients": "Clientes",
      "DISCOVERY": "DESCUBRIMIENTO",
      "discoveryDescription": "Desde comprender el contexto hasta definir objetivos, KPI, personas, prototipos y hoja de ruta, asegurando soluciones relevantes y efectivas.",
      "TECH": "TECNOLOGÍA",
      "techDescription": "Experiencia tecnológica y asociación estratégica para impulsar la innovación, la estabilidad y la transformación digital en cada etapa del ciclo de vida del software.",
      "BUSINESS": "NEGOCIOS",
      "businessDescription": "Soluciones fundamentales para la mejora continua. Catalizadores de la transformación de los procesos empresariales, asegurando resultados medibles y duraderos.","Transform Vision into Innovation with us!": "¡Transforma la Visión en Innovación con nosotros!",
      "We are ready to boost your company's success!": "¡Estamos listos para impulsar el éxito de tu empresa!",
      "Fill out the form below and allow our team to get in touch.": "Complete el siguiente formulario y permita que nuestro equipo se ponga en contacto.",
      "Name": "Nombre*",
      "Whatsapp": "Whatsapp*",
      "Email": "Correo electrónico*",
      "Company": "Empresa*",
      "Subject": "Asunto*",
      "Type your message here (optional)": "Escriba su mensaje aquí (opcional)",
      "Send": "Enviar",
      "The Controller of personal data is Swell IT Solutions. The data entered in the form will be processed solely and exclusively to maintain contact.": "El Responsable del tratamiento de los datos personales es Swell IT Solutions. Los datos introducidos en el formulario serán tratados única y exclusivamente para mantener el contacto.",
      "You can withdraw any consent given at any time. For additional information or to exercise your rights, please visit the": "Puede retirar cualquier consentimiento prestado en cualquier momento. Para obtener información adicional o ejercer sus derechos, visite el",
      "privacy notice": "aviso de privacidad",
      "Swell does not use contact information to send any type of SPAM.": "Swell no utiliza la información de contacto para enviar ningún tipo de SPAM.",
      "about_section1_title": "Acerca de Swell",
      "about_section1": "Somos <span className='blue-text'>Swell It Solutions</span>. Más que una consultoría en Tecnología y Gestión, somos una comunidad de talentos diversos. Unidos por la pasión de superar desafíos complejos, nuestro ADN es una mezcla inigualable de innovación, experiencia y compromiso.",
      "about_section2_title": "Nuestra Experiencia de Más de 20 Años",
      "about_section2": "Con una sólida historia de más de dos décadas en el mercado, <span className='blue-text'>Swell It Solutions</span> ha acumulado una vasta experiencia en Desarrollo y Gestión de Software. Nuestra trayectoria está marcada por asociaciones exitosas con una amplia gama de sectores, desde Startups ágiles e innovadoras hasta grandes Empresas.",
      "about_section3_title": "El Viaje de la Innovación",
      "about_section3": "Somos pioneros en la aplicación de las últimas tendencias en tecnología y mejores prácticas de gestión, adaptándolas a las necesidades específicas de nuestros clientes.",
      "about_section4_title": "Nuestro Enfoque Holístico",
      "about_section4": "Nuestro enfoque holístico nos diferencia, ya que no solo entregamos soluciones, sino que también creamos asociaciones duraderas basadas en la confianza mutua. Colaboramos estrechamente con nuestros clientes, entendiendo profundamente sus objetivos y desafíos para ofrecer soluciones a medida que impulsan el éxito a largo plazo.",
      "about_section5_title": "Un Mundo de Posibilidades",
      "about_section5": "En <span className='blue-text'>Swell It Solutions</span>, creemos que no hay desafío demasiado grande ni problema demasiado complejo. Cada desafío es una oportunidad de innovación, cada problema una puerta a soluciones creativas. Construimos nuestra trayectoria de constante evolución, donde el futuro está moldeado por nuestra pasión por la tecnología y nuestro compromiso con su éxito.",
      "about_section5.1": "Juntos, estamos listos para explorar un mundo infinito de posibilidades.",
      "Procuramos pessoas talentosas e": "Buscamos personas talentosas y",
      "apaixonadas para se juntar à equipe.": "apasionadas para unirse al equipo.",
      "privPol": "Política de privacidad",
      "cookiesPol": "Política de cookies",
      "RUA": "Calle",
      "Contact": "CONTACTO",
      "Invalid email": "Correo electrónico inválido",
      "Invalid phone number": "Número de teléfono inválido",
      "Name is required": "El nombre es obligatorio",
      "Company is required": "La empresa es obligatoria", 
      "Sending...": "Despachar...",
      "Carreiras": {
        "CareersDescription": "Surfea las mejores oportunidades con Swell."
      },
      "WavePayments": {
        "Intro": "Centraliza, Gestiona y Simplifica tus Transacciones.",
        "AdvantagesTitle": "¡Más ventajas y competitividad según tus necesidades!",
        "Advantage1": "- Desarrollar API personalizadas;",
        "Advantage2": "- Integrar pagos con Criptomonedas;",
        "Advantage3": "- Permita transacciones rápidas sin insertar su tarjeta con Tap On;",
        "Advantage4": "- Contar con servicios de Cumplimiento y Gestión de Riesgos;",
        "Advantage5": "- Disponer de su propio Centro de Pagos centralizado y gestionar múltiples métodos y servicios de pago, permitiendo procesar las transacciones de forma eficiente, segura y simplificada.",
        "AcquirerTitle": "ADQUIRIDOR",
        "AcquirerDescription": "¡Conviértete en uno de los mejores procesadores de transacciones!",
        "AcquirerIntro": "Realice procesamiento de transacciones directas conectando clientes y marcas de tarjetas.",
        "AcquirerAdvantage1": "- Autorización de Transacción;",
        "AcquirerAdvantage2": "- Liquidación de Fondos;",
        "AcquirerAdvantage3": "- Cumplimiento y Seguridad;",
        "AcquirerAdvantage4": "- Gestión de Riesgos;",
        "AcquirerAdvantage5": "- Contrato Directo con Comerciantes.",
        "SubAcquirerTitle": "SUB - ADQUIRIENTE",
        "SubAcquirerDescription": "¡Simplifique el acceso a los servicios de pago!",
        "SubAcquirerIntro": "Actuar como intermediario facilitando la integración y reduciendo los requisitos de cumplimiento entre comerciantes y adquirentes.",
        "SubAcquirerAdvantage1": "- Integración simplificada;",
        "SubAcquirerAdvantage2": "- Cuenta Subcomerciante;",
        "SubAcquirerAdvantage3": "- Gestión de transacciones;",
        "SubAcquirerAdvantage4": "- Servicios adicionales como antifraude, análisis de datos y atención al cliente;",
        "SubAcquirerAdvantage5": "- Responsabilidad de Cumplimiento.",
        "DigitalPaymentsTitle": "PAGOS DIGITALES",
        "DigitalPaymentsDescription": "¡Admite múltiples métodos de pago digitales!",
        "DigitalAdvantage1": "- Tenga alcance global y atienda a clientes de diferentes regiones con diferentes preferencias de pago.",
        "DigitalAdvantage2": "- Ofrezca flexibilidad y conveniencia con múltiples opciones de pago y aumente las posibilidades de conversión.",
        "DigitalAdvantage3": "- Garantizar la seguridad implementando medidas de seguridad adaptadas a cada método, reduciendo el fraude.",
        "DigitalAdvantage4": "- Innovación y competitividad con apoyo a nuevas tecnologías de pago y transferencias instantáneas.",
        "DigitalAdvantage5": "- Integrar y procesar pagos con criptomonedas.",
        "FooterMessage": "Cuente con nuestros servicios para eliminar la complejidad y resolver sus desafíos de pagos."
      },
      "WaveStudio": {
        "Intro": "Innovación a medida, resultados extraordinarios.",
        "Description": "Reunimos la experiencia de nuestros profesionales para crear un equipo multidisciplinario cuyos pilares son la cultura ágil, la personalización de procesos y la capacidad de generar valor. Nuestro enfoque es promover la mejora continua y ofrecer soluciones de negocio únicas en el mercado, sumando calidad a los productos y servicios digitales de nuestros clientes",
        "ContractTerms": {
          "Title": "Términos de Contratación:",
          "Description": "Los detalles sobre los términos y condiciones de contratación deben ser consultados directamente con nosotros. Estamos aquí para proporcionar toda la información necesaria para que pueda tomar la mejor decisión para su negocio."
        },
        "Discovery": {
          "TitlePart1": "Transforme Ideas",
          "TitlePart2": "en Estrategias de Éxito.",
          "Introduction": {
            "Part1": "En ",
            "StrongPart": "Wave Discovery",
            "Part2": ", entendemos que el éxito de cualquier iniciativa comienza con una comprensión profunda del contexto y una definición clara de los objetivos. Desde la captura de insights hasta la creación de prototipos y el desarrollo de un roadmap estratégico, nuestro objetivo es garantizar soluciones relevantes y eficaces que estén perfectamente alineadas con la visión y metas de su organización."
          },
          "Benefits": {
            "Title": "Los principales beneficios de ",
            "StrongPart": "Wave Discovery",
            "Title.1": " son",
            "List0": "Alineación Organizacional.",
            "List1": "Toma de Decisiones Informada.",
            "List2": "Desarrollo de Estrategias y Plan de Entrega Eficaces.",
            "List3": "Reducción de Costos y Riesgos.",
            "List4": "Mejora en la Calidad de las Soluciones.",
            "OperatingModel": "Nuestro modelo de actuación:"
          },
          "ContactUs": {
            "Title": "¿Listo para transformar sus ideas en realidad?",
            "Description": "Póngase en contacto con nosotros hoy mismo y descubra cómo <strong class='text-primaryBlue'>Wave Discovery</strong> puede impulsar la innovación y el crecimiento en su organización."
          },
          "Model1": {
            "Title": "EXPLORATION | Alineación Estratégica",
            "Description": "En la etapa de <strong>EXPLORATION</strong>, nos enfocamos en alinear las iniciativas de su empresa con los OKR organizacionales. Brindamos soporte completo en la creación e implementación de OKR, además de orientación y facilitación en el proceso de captura y selección de iniciativas para que estén en sintonía con los objetivos estratégicos:",
            "ListItems": [
              "Soporte en la Implementación de OKR.",
              "Criterios de Selección Personalizados.",
              "Facilitación del Proceso de Decisión."
            ]
          },
          "Model2": {
            "Title": "ABSTRACTION | Del Insight a la Acción",
            "Description": "Durante la fase de <strong>ABSTRACTION</strong>, nos enfocamos en transformar los insights en decisiones informadas, convirtiendo ideas en planes concretos. Utilizando técnicas avanzadas de facilitación, herramientas de prototipado y modelado de UI/UX, promovemos una comprensión profunda de las opciones disponibles. Involucramos equipos multidisciplinarios en sesiones de brainstorming dirigidas, asegurando que todos los ángulos sean considerados y que las soluciones sean sólidas y viables:",
            "ListItems": [
              "Sesiones de Brainstorming Facilitadas.",
              "Herramientas de Prototipado y UI/UX.",
              "Comprensión Amplia y Profunda."
            ]
          },
          "Model3": {
            "Title": "BALANCE | Equilibrio y Priorización para Generar Valor",
            "Description": "La etapa de <strong>BALANCE</strong> es crucial para el éxito del proyecto. En esta fase, ayudamos a equilibrar las opciones disponibles, evolucionando los criterios existentes o implementando nuevos modelos de ponderación y priorización. También facilitamos el análisis de viabilidad técnica, financiera y de riesgos, garantizando que el roadmap esté perfectamente alineado con los objetivos del proyecto y que el MVP esté claramente definido:",
            "ListItems": [
              "Criterios de Priorización Personalizados.",
              "Análisis de Viabilidad."
            ]
          },
          "Model4": {
            "Title": "VISION ROADMAP | Planificación Estratégica",
            "Description": "En la fase de <strong>VISION ROADMAP</strong>, concentramos nuestros esfuerzos en transformar directrices y prioridades organizacionales en una visión estratégica orientada a resultados. Trabajamos junto con su equipo para definir claramente el Producto Mínimo Viable (MVP), de forma que refleje los principales objetivos del negocio, orientando la creación de un roadmap que establezca hitos y metas para cada entrega, de acuerdo con las expectativas establecidas y orientado a la entrega continua de valor.",
            "ListItems": [
              "Definición Clara del MVP y Planificación Estratégica del Roadmap.",
              "Establecimiento de Hitos y Metas.",
              "Enfoque dinámico y flexible que permite adaptaciones."
            ]
          },
          "Model5": {
            "Title": "INTEGRATED BACKLOG | Consistencia, Predictibilidad e Integración",
            "Description": "En el <strong>INTEGRATED BACKLOG</strong>, nuestro enfoque es garantizar que cada ítem del backlog esté detallado, orientado a los resultados esperados y alineado con la visión estratégica de la organización. A través de un proceso colaborativo, trabajamos para que el backlog integre las necesidades de diferentes áreas, equipos y especialistas, mapeando riesgos potenciales e identificando impedimentos. Nuestro objetivo es crear un ambiente de trabajo fluido y predecible, donde todos los involucrados tengan claridad sobre los prerrequisitos técnicos, habilitadores y el camino hacia la entrega de valor.",
            "ListItems": [
              "Detalle Orientado a Resultados.",
              "Integración con Áreas y Especialistas.",
              "Mapeo de Riesgos e Impedimentos.",
              "Identificación de Prerrequisitos Técnicos y Habilitadores.",
              "Implementación y Mejora de Técnicas de Estimación y Predictibilidad."
            ]
          }
        },
        "Business": {
          "TitlePart1": "Maximización de Resultados",
          "TitlePart2": "e Innovación para Su Negocio.",
          "Introduction": {
            "Part1": "En ",
            "StrongPart": "Wave Business",
            "Part2": ", combinamos conocimiento tecnológico de punta con una asociación estratégica para impulsar la innovación, garantizar la estabilidad y promover la transformación digital en todas las fases del ciclo de vida del software. Nuestro enfoque está diseñado para satisfacer sus necesidades específicas, con flexibilidad y escalabilidad, permitiendo que su equipo interno se concentre en el núcleo de su negocio mientras nosotros nos encargamos de la tecnología."
          },
          "Benefits": {
            "Title": "Los principales beneficios de ",
            "StrongPart": "Wave Business & Process",
            "List0": "Innovación Continua.",
            "List1": "Optimización Operativa y Adaptabilidad.",
            "List2": "Calidad y Seguridad Mejoradas.",
            "OperatingModel": "Modelos y Enfoques:"
          },
          "Model1": {
            "Title": "TRANSFORMACIÓN DIGITAL, AUTOMATIZACIÓN E INNOVACIÓN | Implemente el Futuro",
            "Description": "Lleve su empresa al siguiente nivel con soluciones sólidas de transformación digital y automatización, diseñadas para crear nuevas oportunidades de negocio, optimizar procesos y mejorar la experiencia del cliente. Implementamos tecnologías de punta que impulsan la innovación y modernizan su operación.",
            "ListItems": [
              "<strong>Transformación Digital:</strong> Realice una transformación completa que abarque procesos, cultura y tecnología, llevando a su organización a la era digital. Medimos el éxito con indicadores como la adopción tecnológica y la eficiencia operativa tras la implementación.",
              "<strong>Inteligencia Artificial & Aprendizaje Automático:</strong> Automatice procesos y obtenga conocimientos valiosos con inteligencia artificial y aprendizaje automático. Nuestras implementaciones se centran en KPIs como la reducción de costos y la mejora en la toma de decisiones.",
              "<strong>Internet de las Cosas (IoT):</strong> Conecte dispositivos y sistemas para mejorar la eficiencia operativa y crear nuevas oportunidades de negocio. Utilizamos métricas como la reducción de tiempos de inactividad y el aumento de la productividad.",
              "<strong>Migración a la Nube:</strong> Migre sus sistemas a la nube con seguridad, flexibilidad y reducción de costos. Seguimos la implementación con indicadores de reducción del TCO (Costo Total de Propiedad) y mejoras en escalabilidad.",
              "<strong>Automatización de Procesos Robóticos (RPA):</strong> Libere a su equipo de tareas manuales y repetitivas con RPA, permitiéndoles enfocarse en actividades estratégicas. Medimos el éxito con la reducción del tiempo de ciclo y el aumento en la capacidad productiva."
            ]
          },
          "Model2": {
            "Title": "GESTIÓN Y OPTIMIZACIÓN DE PROCESOS | Aumente su Capacidad de Generación de Valor",
            "Description": "Maximice el valor de sus operaciones con prácticas de gestión y optimización de procesos adaptadas a las necesidades de su negocio. Implementamos modelos efectivos de agilidad, calidad y seguridad, respaldados por métricas de rendimiento y un equipo experimentado:",
            "ListItems": [
              "<strong>Modelo de Implementación DevSecOps:</strong> Integre seguridad a lo largo del ciclo de desarrollo, asegurando productos más seguros y procesos más ágiles. Monitoreamos la eficacia mediante métricas como la reducción de vulnerabilidades y mejoras en la entrega continua.",
              "<strong>Modelo de Implementación de Garantía de Calidad:</strong> Asegure que sus productos cumplan con los más altos estándares con prácticas sólidas de garantía de calidad. Los indicadores de éxito incluyen la reducción de defectos y el aumento de la satisfacción del cliente.",
              "<strong>Agilidad Empresarial:</strong> Adapte su negocio a los cambios del mercado con prácticas ágiles personalizadas para su organización. Medimos el impacto con la mejora del time-to-market y la capacidad de respuesta a nuevas demandas.",
              "<strong>Mapeo de Flujo de Valor:</strong> Elimine desperdicios y aumente la eficiencia con el análisis detallado de sus procesos. El éxito se mide mediante indicadores como la reducción del tiempo de espera y el aumento del valor entregado al cliente."
            ]
          },
          "ContactUs": {
            "Title": "¿Listo para transformar sus ideas en realidad?",
            "Description": "Póngase en contacto con nosotros hoy mismo y descubra cómo Wave Business puede impulsar la innovación y el crecimiento en su organización."
          }
        },
        "Talent": {
          "TitlePart1": "Potencie el desempeño",
          "TitlePart2": "y el crecimiento de su negocio.",
          "Introduction": {
            "Part1": "Encuentre el mejor talento para su éxito con ",
            "StrongPart": "Wave Talent.",
            "Part2": " Nuestra estrategia dinámica de reclutamiento garantiza el ajuste perfecto entre talento y organización."
          },
          "Benefits": {
            "Title": "Los principales beneficios de ",
            "StrongPart": "Wave Talent ",
            "Title.1": " son",
            "List0": "Agilidad en la contratación.",
            "List1": "Mayor Compatibilidad entre Profesional y Organización.",
            "List2": "Crecimiento del Capital Intelectual.",
            "List3": "Incremento del Desempeño.",
            "OperatingModel": "Modelos de contratación:"
          },
          "Model1": {
            "Title": "SHARED TALENT | Asociación Adaptada, Flexibilidad y Eficiencia",
            "Description": "Lo mejor de ambos mundos: Nuestro modelo de Shared Talent permite que las empresas se beneficien de la flexibilidad y la seguridad al contratar talentos calificados que inicialmente son asignados para trabajar en el Cliente en el formato Staff Augmentation. Después de un período de evaluación acordado, el Cliente tiene total libertad para decidir si desea internalizar al profesional.",
            "ListItems": [
              "Evaluación de Desempeño en Tiempo Real.",
              "Reducción de Riesgos de Contratación.",
              "Soporte Swell para el desarrollo del Profesional.",
              "Adaptación a las Necesidades del Proyecto.",
              "Decisión Informada para la Internalización."
            ]
          },
          "Model2": {
            "Title": "TARGET TALENT | Selección Especializada",
            "Description": "Target Talent es la solución ideal para empresas que necesitan apoyo especializado en la identificación y contratación de talentos altamente calificados. Identificamos y seleccionamos a los profesionales que mejor se ajustan a estas necesidades. Tras la aprobación, los profesionales son contratados directamente por el Cliente, sin necesidad de asignación previa o período de evaluación.",
            "ListItems": [
              "Reclutamiento Personalizado.",
              "Enfoque en la Excelencia Profesional.",
              "Reducción del Tiempo de Contratación.",
              "Consultoría y Soporte Durante la Selección.",
              "Contratación Directa por el Cliente."
            ]
          },
          "ContactUs": {
            "Title": "¿Listo para transformar sus ideas en realidad?",
            "Description": "Póngase en contacto con nosotros hoy mismo y descubra cómo <strong className='text-primaryBlue'>Wave Talent</strong> puede impulsar la innovación y el crecimiento en su organización."
          }
        },
        "Tech": {
          "TitlePart1": "Innovación, Estabilidad",
          "TitlePart2": "y Transformación Digital",
          "TitlePart3": "para el Éxito de su Negocio",
          "Introduction": {
            "Part1": "En ",
            "StrongPart": "Wave Tech, ",
            "Part2": " combinamos conocimiento tecnológico de punta con una asociación estratégica para impulsar la innovación, garantizar la estabilidad y promover la transformación digital en todas las fases del ciclo de vida del software. Nuestro enfoque está diseñado para atender sus necesidades específicas, con flexibilidad y escalabilidad, permitiendo que su equipo interno se concentre en el núcleo de su negocio mientras nosotros cuidamos de la tecnología."
          },
          "Benefits": {
            "Title": "Los principales beneficios de ",
            "StrongPart": "Wave Tech ",
            "Title.1": " son",
            "List0": "Profesionales Altamente Calificados.",
            "List1": "Flexibilidad y Escalabilidad.",
            "List2": "Prácticas de Calidad de Alto Nivel.",
            "List3": "Reducción de Costos Operativos.",
            "OperatingModel": "Modelos de contratación:"
          },
          "Model1": {
            "Title": "DEVELOPMENT SQUAD | Innovación y Eficiencia",
            "Description": "Para empresas que buscan acelerar la innovación sin comprometer la calidad, nuestro modelo <strong>Development Squad</strong> ofrece un equipo dedicado de especialistas. A través de un enfoque flexible para la creación de aplicaciones, sistemas y soluciones digitales personalizadas para empresas que buscan excelencia tecnológica, innovación ágil y optimización de recursos:",
            "ListItems": [
              "Experiencia con las principales y más innovadoras tecnologías del mercado.",
              "Equipos con conocimientos en desarrollo ágil, híbrido y en waterfall.",
              "Invertimos en profundizar el conocimiento del negocio del Cliente.",
              "Entrenamiento continuo para garantizar la actualización y la excelencia del Equipo."
            ]
          },
          "Model2": {
            "Title": "MAINTENANCE SQUAD | Estabilidad y Eficiencia",
            "Description": "El mantenimiento continuo es vital para garantizar que sus aplicaciones y sistemas funcionen con la máxima eficiencia. Nuestro modelo <strong>Maintenance Squad</strong> está diseñado para garantizar el rendimiento continuo y la eficiencia de las aplicaciones digitales que impulsan los negocios, atendiendo la constante evolución de las expectativas de calidad y tiempos de respuesta:",
            "ListItems": [
              "Equipo dedicado, experimentado y altamente calificado.",
              "Reducción de Costos Operativos en contrataciones.",
              "Monitoreo proactivo: estabilidad y rendimiento de las soluciones.",
              "Reducción del tiempo de inactividad de las soluciones."
            ]
          },
          "Model3": {
            "Title": "SOFTWARE FACTORY | Transformación Digital a Medida",
            "Description": "Para empresas que necesitan soluciones tecnológicas a medida, nuestra <strong>Software Factory</strong> es la respuesta. Nuestros especialistas trabajan en estrecha colaboración con usted para entender su visión y transformar sus necesidades en software de alta calidad:",
            "ListItems": [
              "Amplio dominio de diversas tecnologías.",
              "Metodologías de desarrollo enfocadas en la eficiencia y calidad del proyecto.",
              "Atención al negocio del cliente y particularidades para la efectividad del Software.",
              "Desarrollo continuo y especializado del equipo."
            ]
          },
          "Model4": {
            "Title": "STAFF AUGMENTATION | Talento Especializado y Versátil",
            "Description": "Para empresas que necesitan experiencia de manera flexible, nuestro modelo de <strong>Staff Augmentation</strong> proporciona profesionales altamente calificados, listos para integrarse a su equipo e impulsar proyectos críticos, minimizando el tiempo de adaptación y maximizando la productividad desde el inicio. Nuestros profesionales son cuidadosamente seleccionados para cubrir una amplia gama de necesidades:",
            "ListItems": [
              "<strong>Especialistas en Desarrollo:</strong> Contamos con desarrolladores full-stack, front-end, back-end, ingenieros de software, entre otros, con profundo conocimiento en diversos lenguajes y frameworks, listos para transformar ideas en soluciones robustas y escalables.",
              "<strong>Expertos en Calidad:</strong> Nuestros profesionales de QA están especializados en garantizar la excelencia del software, utilizando metodologías avanzadas de automatización, pruebas manuales y garantía de calidad continua.",
              "<strong>Liderazgo en Proyectos y Productos:</strong> Project Managers, Product Owners, Product Managers, entre otros. Profesionales experimentados con habilidades comprobadas en metodologías ágiles y tradicionales, asegurando que los proyectos se entreguen dentro del plazo, alcance y presupuesto definidos.",
              "<strong>Infraestructura y DevSecOps:</strong> Profesionales especializados en automatización de infraestructura, CI/CD, monitoreo, seguridad y DevSecOps, que garantizan la estabilidad, escalabilidad y seguridad de los entornos de TI.",
              "<strong>Liderazgo Ágil y Gestión de Portafolio:</strong> Portfolio Managers, Agile Coaches, Scrum Masters, entre otros, con profundo conocimiento en marcos ágiles, capaces de orientar equipos y organizaciones en la transformación ágil y la gestión eficaz de múltiples proyectos.",
              "<strong>Diseñadores UX/UI:</strong> Profesionales enfocados en crear interfaces intuitivas y experiencias atractivas."
            ]
          },
          "ContactUs": {
            "Title": "¿Listo para transformar sus ideas en realidad?",
            "Description": "Contáctenos hoy mismo y descubra cómo <strong className='text-primaryBlue'>Wave Talent</strong> puede impulsar la innovación y el crecimiento en su organización."
          }
        }
      }
    },
  },
  jp: {
    translation: {
      "Home": "始める",
      "A Swell": "ザ・すえる",
      "Wave Studio": "オンダスタジオ",
      "Wave AI": "AIウェーブ",
      "Wave Payments": "ウェーブペイメント",
      "Cases Swell": "膨れの場合",
      "Carreiras Swell": "すえるキャリア",
      "Login": "ログイン",
      "swell_title": "Swellについて",
      "swell_description": "20 年以上の経験により、当社はイノベーションを推進し、カスタマイズされたソリューションの提供に専念する、多様な才能を持つコミュニティを育成してきました。私たちのテクノロジーの旅は継続的な進化を特徴とし、進歩するたびに私たちは明日に近づきます。",
      "know_button": "知る",
      "clients": "Clients",
      "waveStudioDescription": "私たちは専門家の専門知識を結集して、アジャイル文化、プロセスのカスタマイズ、価値を生み出す能力を柱とする学際的なチームを結成しました。 当社は継続的な改善を促進し、独自のビジネス ソリューションを市場に提供して、お客様のデジタル製品とサービスの品質を高めることに重点を置いています。",
      "waveStudioImageAlt": "Wave Studio の品質を含むサークル",
      "See More": "もっと見る",
      "DISCOVERY": "DISCOVERY",
      "discoveryDescription": "コンテキストの理解から目的、KPI、ペルソナ、プロトタイプ、ロードマップの定義に至るまで、適切で効果的なソリューションを保証します。",
      "TECH": "TECH",
      "techDescription": "ソフトウェアのライフサイクルのあらゆる段階でイノベーション、安定性、デジタル変革を推進するための技術的専門知識と戦略的パートナーシップ。",
      "BUSINESS": "ビジネス",
      "businessDescription": "継続的な改善のための根本的なソリューション。 ビジネスプロセスの変革を促進し、測定可能で永続的な結果を保証します。", "Transform Vision into Innovation with us!": "私たちと一緒にビジョンをイノベーションに変えましょう!",
      "We are ready to boost your company's success!": "私たちはあなたの会社の成功を後押しする準備ができています!",
      "Fill out the form below and allow our team to get in touch.": "以下のフォームに記入して、私たちのチームから連絡できるようにしてください。",
      "Name": "名前*",
      "Whatsapp": "役職*",
      "Email": "メール*",
      "Company": "会社*",
      "Subject": "件名*",
      "Type your message here (optional)": "ここにメッセージを入力してください（任意）",
      "Send": "送信",
      "The Controller of personal data is Swell IT Solutions. The data entered in the form will be processed solely and exclusively to maintain contact.": "個人データの管理者は Swell IT Solutions です。フォームに入力されたデータは、連絡を維持するためにのみ処理されます。",
      "You can withdraw any consent given at any time. For additional information or to exercise your rights, please visit the": "与えられた同意はいつでも撤回できます。追加情報または権利を行使するには、プライバシー通知をご覧ください。",
      "privacy notice": "プライバシー通知",
      "Swell does not use contact information to send any type of SPAM.": "Swell は、連絡先情報を使用してスパムメールを送信することはありません。",
      "about_section1_title": "スウェル",
      "about_section1": "私たちは<span className='blue-text'>Swell It Solutions</span>です。 テクノロジーとマネジメントのコンサルティングを超えた、多様な才能のコミュニティです。 複雑な課題を克服する情熱によって団結し、私たちのDNAはイノベーション、専門知識、そしてコミットメントの比類なき融合です。",
      "about_section2_title": "20年以上の経験",
      "about_section2": "市場での20年以上の確固たる歴史を持つ、<span className='blue-text'>Swell It Solutions</span>は、ソフトウェアの開発と管理において豊富な経験を蓄積してきました。 私たちの旅は、アジャイルで革新的なスタートアップから大企業に至るまで、幅広い業界での成功したパートナーシップによって特徴付けられています。",
      "about_section3_title": "イノベーションの旅",
      "about_section3": "私たちは、最新の技術トレンドとベストプラクティスを適用し、それをクライアントの特定のニーズに合わせて調整する先駆者です。",
      "about_section4_title": "包括的なアプローチ",
      "about_section4": "私たちのホリスティックなアプローチは、単にソリューションを提供するだけでなく、相互の信頼に基づいた長期的なパートナーシップを築くことです。 クライアントと密に連携し、彼らの目標と課題を深く理解し、成功を長期的に促進するためのカスタマイズされたソリューションを提供します。",
      "about_section5_title": "無限の可能性",
      "about_section5": "<span className='blue-text'>Swell It Solutions</span>では、あらゆる課題があまりにも大きすぎたり、問題が複雑すぎたりすることはないと考えています。 各課題はイノベーションの機会であり、各問題は創造的なソリューションへの扉です。 テクノロジーへの情熱とあなたの成功への献身によって形作られる、常に進化する私たちの旅を築いています。",
      "about_section5.1": "共に、私たちは無限の可能性の世界を探求する準備ができています。",
      "Procuramos pessoas talentosas e": "才能がある人々",
      "apaixonadas para se juntar à equipe.": "情熱的でチームに加わりたい人々。",
      "privPol": "プライバシーポリシー",
      "cookiesPol": "クッキーポリシー",
      "RUA": "通り",
      "Contact": "連絡先",
      "Invalid email": "無効なメールアドレス",
      "Invalid phone": "無効な電話番号",
      "Name is required": "名前は必須です",
      "Company is required": "会社名は必須です",
      "Sending...": "送信する",
      "Carreiras": {
        "CareersDescription": "Swellで最高の機会を手に入れよう。"
      },
      "WavePayments": {
        "Intro": "トランザクションを一元化、管理、簡素化します。",
        "AdvantagesTitle": "ニーズに合わせてさらなる優位性と競争力を！",
        "Advantage1": "- カスタム API の開発。",
        "Advantage2": "- 支払いを暗号通貨と統合します。",
        "Advantage3": "- Tap On を使用すると、カードを挿入せずに素早い取引が可能になります。",
        "Advantage4": "- コンプライアンスおよびリスク管理サービスを頼りにします。",
        "Advantage5": "- 独自の一元化された支払いハブを持ち、複数の支払い方法とサービスを管理して、効率的、安全かつ簡素化された方法で取引を処理できるようにします。",
        "AcquirerTitle": "取得者",
        "AcquirerDescription": "トップレベルのトランザクションプロセッサーの 1 つになりましょう!",
        "AcquirerIntro": "顧客とカードブランドを結び、直接取引処理を行います。",
        "AcquirerAdvantage1": "- トランザクションの承認;",
        "AcquirerAdvantage2": "- 資金決済;",
        "AcquirerAdvantage3": "- コンプライアンスとセキュリティ。",
        "AcquirerAdvantage4": "- リスク管理;",
        "AcquirerAdvantage5": "- 加盟店との直接契約。",
        "SubAcquirerTitle": "サブ - 取得者",
        "SubAcquirerDescription": "決済サービスへのアクセスを簡単に！",
        "SubAcquirerIntro": "マーチャントとアクワイアラー間の統合を促進し、コンプライアンス要件を軽減する仲介者として機能します。",
        "SubAcquirerAdvantage1": "- 簡素化された統合。",
        "SubAcquirerAdvantage2": "- サブマーチャントアカウント;",
        "SubAcquirerAdvantage3": "- トランザクション管理;",
        "SubAcquirerAdvantage4": "- 不正防止、データ分析、顧客サポートなどの追加サービス。",
        "SubAcquirerAdvantage5": "- コンプライアンスに対する責任。",
        "DigitalPaymentsTitle": "デジタル決済",
        "DigitalPaymentsDescription": "複数のデジタル支払い方法をサポート!",
        "DigitalAdvantage1": "- 世界中にリーチし、さまざまな支払い設定を持つさまざまな地域の顧客にサービスを提供します。",
        "DigitalAdvantage2": "- 複数の支払いオプションで柔軟性と利便性を提供し、コンバージョンの可能性を高めます。",
        "DigitalAdvantage3": "- それぞれの手法に応じたセキュリティ対策を実施することでセキュリティを確保し、不正行為を低減します。",
        "DigitalAdvantage4": "- 新しい支払いテクノロジーと即時送金のサポートによるイノベーションと競争力。",
        "DigitalAdvantage5": "- 暗号通貨支払いを統合して処理します。",
        "FooterMessage": "複雑さを解消し、支払いに関する課題を解決するには、弊社のサービスをご利用ください。"
      },
      "WaveStudio": {
        "Intro": "オーダーメイドの革新、卓越した成果。",
        "Description": "私たちは、アジャイル文化、プロセスのカスタマイズ、そして価値創造能力を基盤にした多職種のチームを作り上げるために、専門家の知識を集めました。私たちの焦点は、継続的な改善を促進し、顧客のデジタル製品とサービスに品質を加えながら、市場にユニークなビジネスソリューションを提供することです。",
        "ContractTerms": {
          "Title": "契約条件：",
          "Description": "契約条件の詳細については、直接お問い合わせください。ビジネスに最適な決定を下せるよう、必要な情報をすべて提供いたします。"
        },
        "Discovery": {
          "TitlePart1": "アイデアを変える",
          "TitlePart2": "成功戦略へ。",
          "Introduction": {
            "Part1": "「",
            "StrongPart": "Wave Discovery",
            "Part2": "」では、あらゆる取り組みの成功は、状況を深く理解し、目標を明確に定義することから始まると考えています。インサイトの収集からプロトタイプ作成、戦略ロードマップの開発まで、私たちの目標は、組織のビジョンと目標に完全に一致した関連性と効果的なソリューションを保証することです。"
          },
          "Benefits": {
            "Title": "「",
            "StrongPart": "Wave Discovery",
            "Title.1": "」の主なメリット",
            "List0": "組織のアラインメント。",
            "List1": "情報に基づいた意思決定。",
            "List2": "効果的な戦略および配信計画の開発。",
            "List3": "コストとリスクの削減。",
            "List4": "ソリューションの品質向上。",
            "OperatingModel": "当社の運営モデル:"
          },
          "ContactUs": {
            "Title": "アイデアを現実に変える準備はできていますか？",
            "Description": "今すぐお問い合わせいただき、<strong class='text-primaryBlue'>Wave Discovery</strong> が組織のイノベーションと成長をどのように推進できるかを発見してください。"
          },
          "Model1": {
            "Title": "EXPLORATION | 戦略的整合性",
            "Description": "「EXPLORATION」 の段階では、企業の取り組みを組織のOKRに合わせることに重点を置いています。OKRの作成と実施を全面的にサポートし、戦略目標に合ったイニシアチブの捕捉と選択プロセスを指導および促進します。",
            "ListItems": [
              "OKR実施のサポート。",
              "カスタマイズされた選択基準。",
              "意思決定プロセスの促進。"
            ]
          },
          "Model2": {
            "Title": "ABSTRACTION | インサイトから行動へ",
            "Description": "「ABSTRACTION」 のフェーズでは、インサイトを情報に基づいた意思決定に変え、アイデアを具体的な計画に変換することに重点を置いています。高度なファシリテーション技術、プロトタイピングおよびUI/UXモデリングツールを活用し、利用可能なオプションを深く理解します。多分野にわたるチームを指向性のあるブレインストーミングセッションに巻き込み、すべての角度を考慮し、堅牢で実行可能なソリューションを保証します。",
            "ListItems": [
              "ファシリテートされたブレインストーミングセッション。",
              "プロトタイピングとUI/UXツール。",
              "広範で深い理解。"
            ]
          },
          "Model3": {
            "Title": "BALANCE | 価値創造のためのバランスと優先順位",
            "Description": "「BALANCE」の段階は、プロジェクトの成功において非常に重要です。このフェーズでは、既存の基準を進化させたり、新しい重み付けと優先順位付けのモデルを実装したりして、利用可能な選択肢のバランスを取るお手伝いをします。また、技術的、財務的、リスクの観点から実現可能性を分析し、ロードマップがプロジェクトの目標と完全に整合していることを確認し、MVPが明確に定義されるように支援します。",
            "ListItems": [
              "カスタマイズされた優先順位基準。",
              "実現可能性の分析。"
            ]
          },
          "Model4": {
            "Title": "VISION ROADMAP | 戦略的計画",
            "Description": "「VISION ROADMAP」の段階では、組織の方向性と優先順位を結果志向の戦略的ビジョンに変換することに注力しています。あなたのチームと共に、ビジネスの主要な目標を反映し、各納品物のためにマイルストーンと目標を設定するロードマップの作成を指導します。これにより、定義された期待に従い、価値の継続的な提供を目指します。",
            "ListItems": [
              "MVPの明確な定義と戦略的ロードマップ計画。",
              "マイルストーンと目標の設定。",
              "柔軟で動的なアプローチによる適応可能性。"
            ]
          },
          "Model5": {
            "Title": "INTEGRATED BACKLOG | 一貫性、予測可能性、統合",
            "Description": "「INTEGRATED BACKLOG」では、バックログの各項目が詳細に記述され、期待される結果に向けて調整され、組織の戦略的ビジョンと一致することを保証することに焦点を当てています。協力的なプロセスを通じて、バックログがさまざまな部門、チーム、専門家のニーズを統合し、潜在的なリスクをマッピングし、障害を特定するお手伝いをします。私たちの目標は、すべての関係者が技術的前提条件、支援要素、価値提供のための道筋について明確に理解できる、流動的で予測可能な作業環境を作り上げることです。",
            "ListItems": [
              "結果志向の詳細化。",
              "部門と専門家との統合。",
              "リスクと障害のマッピング。",
              "技術的前提条件と支援要素の特定。",
              "見積もりと予測技術の実装および改善。"
            ]
          },
        },
        "Business": {
          "TitlePart1": "結果の最大化",
          "TitlePart2": "とイノベーションでビジネスを支える。",
          "Introduction": {
            "Part1": "私たち ",
            "StrongPart": "Wave Business",
            "Part2": " は、最先端の技術知識と戦略的パートナーシップを組み合わせて、イノベーションを推進し、安定性を確保し、ソフトウェアのライフサイクル全体を通じてデジタル変革を促進します。私たちのアプローチは、柔軟性とスケーラビリティを備えた、お客様の特定のニーズに応じた設計です。お客様のチームがコアビジネスに専念できるよう、技術面を私たちがサポートします。"
          },
          "Benefits": {
            "Title": "主な利点 ",
            "StrongPart": "Wave Business & Process",
            "List0": "継続的なイノベーション。",
            "List1": "運用の最適化と適応性。",
            "List2": "品質とセキュリティの向上。",
            "OperatingModel": "モデルとアプローチ:"
          },
          "Model1": {
            "Title": "デジタルトランスフォーメーション、自動化とイノベーション | 未来を実現",
            "Description": "堅牢なデジタルトランスフォーメーションと自動化ソリューションで企業を次のレベルへ。新しいビジネスチャンスの創出、プロセスの最適化、顧客体験の向上を目指した最新技術を導入します。",
            "ListItems": [
              "<strong>デジタルトランスフォーメーション:</strong> プロセス、文化、技術を網羅する完全な変革を実現し、組織をデジタル時代に導きます。成功は、技術採用や実装後の運用効率の向上といった指標で測定します。",
              "<strong>人工知能 & 機械学習:</strong> プロセスを自動化し、貴重なインサイトを得るためのAIと機械学習を活用します。コスト削減や意思決定の改善といったKPIに焦点を当てます。",
              "<strong>モノのインターネット (IoT):</strong> デバイスとシステムを接続し、運用効率を向上させ、新たなビジネスチャンスを創出します。稼働停止時間の削減や生産性の向上などの指標を使用します。",
              "<strong>クラウド移行:</strong> 安全性、柔軟性、コスト削減を伴うクラウド移行を実現します。TCO（総所有コスト）の削減やスケーラビリティの向上といった指標で実装を評価します。",
              "<strong>ロボティックプロセスオートメーション (RPA):</strong> チームが手作業や繰り返し作業から解放され、戦略的な活動に専念できるようにします。サイクルタイムの削減や生産能力の向上で成功を測定します。"
            ]
          },
          "Model2": {
            "Title": "プロセスの管理と最適化 | 価値創出能力を高める",
            "Description": "ビジネスのニーズに合わせたプロセス管理と最適化の実践で、運用の価値を最大化します。迅速性、品質、安全性を備えた効果的なモデルを導入し、パフォーマンス指標と経験豊富なチームでサポートします。",
            "ListItems": [
              "<strong>DevSecOps 実装モデル:</strong> 開発サイクル全体でセキュリティを統合し、より安全で迅速なプロセスを確保します。脆弱性の削減や継続的デリバリーの改善といった指標で効果を測定します。",
              "<strong>品質保証実装モデル:</strong> 高水準を満たす製品を保証するための堅牢な品質保証手法を導入します。欠陥削減や顧客満足度向上などの指標が成功の証です。",
              "<strong>ビジネスアジリティ:</strong> 組織に合わせたアジャイルな手法で市場変化に対応します。タイムトゥマーケットの改善や新たな要求への応答能力の向上で成果を測定します。",
              "<strong>バリューストリームマッピング:</strong> 無駄を排除し、効率を高めるためにプロセスを詳細に分析します。リードタイムの削減や顧客に提供する価値の向上といった指標で成功を評価します。"
            ]
          },
          "ContactUs": {
            "Title": "アイデアを現実に変える準備はできていますか？",
            "Description": "今すぐお問い合わせいただき、Wave Business が貴社のイノベーションと成長をどのように推進できるかをご確認ください。"
          }
        },

        "Talent": {
          "TitlePart1": "パフォーマンスを最大化",
          "TitlePart2": "し、ビジネスの成長を促進。",
          "Introduction": {
            "Part1": "成功のための最適な人材を見つける ",
            "StrongPart": "Wave Talent",
            "Part2": " ダイナミックな採用戦略により、人材と組織の完璧なマッチングを保証します。"
          },
          "Benefits": {
            "Title": "主なメリット ",
            "StrongPart": "Wave Talent ",
            "Title.1": " は次の通りです。",
            "List0": "迅速な採用プロセス。",
            "List1": "プロフェッショナルと組織の高い適合性。",
            "List2": "知的資本の向上。",
            "List3": "パフォーマンスの向上。",
            "OperatingModel": "採用モデル："
          },
          "Model1": {
            "Title": "SHARED TALENT | 柔軟性と効率性を兼ね備えたパートナーシップ",
            "Description": "両者の利点を融合：Shared Talentモデルでは、企業が柔軟性と安全性を享受しながら、クライアント先で稼働する有能な人材を一時的に配置します。評価期間終了後、クライアントはその人材を内部採用する自由を完全に持っています。",
            "ListItems": [
              "リアルタイムのパフォーマンス評価。",
              "採用リスクの軽減。",
              "プロフェッショナルの成長を支援するSwellサポート。",
              "プロジェクトニーズへの適応。",
              "内部採用のための情報に基づいた意思決定。"
            ]
          },
          "Model2": {
            "Title": "TARGET TALENT | 専門的な選考サービス",
            "Description": "Target Talentは、高度な専門スキルを持つ人材を特定し採用するための専門的な支援を必要とする企業に最適なソリューションです。クライアントのニーズに最も適したプロフェッショナルを選定し、承認後、クライアントが直接雇用します。事前配置や評価期間は不要です。",
            "ListItems": [
              "個別対応の採用プロセス。",
              "プロフェッショナルの卓越性にフォーカス。",
              "採用期間の短縮。",
              "選考プロセス中のコンサルティングとサポート。",
              "クライアントによる直接雇用。"
            ]
          },
          "ContactUs": {
            "Title": "アイデアを現実に変える準備はできていますか？",
            "Description": "今すぐお問い合わせいただき、<strong className='text-primaryBlue'>Wave Talent</strong>がどのようにしてイノベーションと成長を促進できるかをご確認ください。"
          }
        },
        "Tech": {
          "TitlePart1": "イノベーション、安定性",
          "TitlePart2": "そしてデジタルトランスフォーメーション",
          "TitlePart3": "あなたのビジネス成功のために",
          "Introduction": {
            "Part1": " ",
            "StrongPart": "Wave Tech, ",
            "Part2": " 最先端の技術知識を戦略的パートナーシップと組み合わせることで、ソフトウェアライフサイクルのすべてのフェーズでイノベーションを推進し、安定性を確保し、デジタルトランスフォーメーションを促進します。私たちのアプローチは、お客様の特定のニーズに応じて設計されており、柔軟性とスケーラビリティを備えています。これにより、社内チームがコアビジネスに専念する一方で、私たちが技術面をサポートします。"
          },
          "Benefits": {
            "Title": "主なメリット ",
            "StrongPart": "Wave Tech ",
            "Title.1": " は次の通りです。",
            "List0": "高度な専門知識を持つプロフェッショナル。",
            "List1": "柔軟性とスケーラビリティ。",
            "List2": "高水準の品質慣行。",
            "List3": "運用コストの削減。",
            "OperatingModel": "採用モデル："
          },
          "Model1": {
            "Title": "DEVELOPMENT SQUAD | イノベーションと効率性",
            "Description": "イノベーションを加速させつつ品質を損なわないことを求める企業のために、<strong>Development Squad</strong>モデルでは専門家の専属チームを提供します。柔軟なアプローチでアプリケーション、システム、カスタマイズされたデジタルソリューションを構築し、卓越した技術革新、迅速なイノベーション、リソースの最適化を目指します。",
            "ListItems": [
              "市場で最も革新的な技術への豊富な経験。",
              "アジャイル、ハイブリッド、ウォーターフォール開発の専門知識。",
              "クライアントのビジネスの理解に注力。",
              "チームの継続的なトレーニングによる最新性と卓越性の維持。"
            ]
          },
          "Model2": {
            "Title": "MAINTENANCE SQUAD | 安定性と効率性",
            "Description": "継続的なメンテナンスは、アプリケーションやシステムが最大限の効率で稼働するために重要です。<strong>Maintenance Squad</strong>モデルは、ビジネスを推進するデジタルアプリケーションのパフォーマンスと効率性を継続的に確保し、品質と応答時間の進化する期待に対応します。",
            "ListItems": [
              "経験豊富で高い専門性を持つ専属チーム。",
              "採用コストの削減。",
              "プロアクティブなモニタリング：安定性とソリューションのパフォーマンスを確保。",
              "ダウンタイムの削減。"
            ]
          },
          "Model3": {
            "Title": "SOFTWARE FACTORY | オーダーメイドのデジタルトランスフォーメーション",
            "Description": "オーダーメイドの技術ソリューションを必要とする企業向けに、<strong>Software Factory</strong>がお答えします。専門家があなたと密接に連携し、ビジョンを理解し、ニーズを高品質なソフトウェアに変えます。",
            "ListItems": [
              "幅広い技術への深い理解。",
              "効率性とプロジェクト品質を重視した開発手法。",
              "クライアントのビジネスや特性に対する配慮による効果的なソフトウェア。",
              "専門チームの継続的なスキルアップ。"
            ]
          },
          "Model4": {
            "Title": "STAFF AUGMENTATION | 専門性と柔軟性を持つタレント",
            "Description": "柔軟な形で専門知識を必要とする企業向けに、<strong>Staff Augmentation</strong>モデルでは、高度な専門スキルを持つプロフェッショナルを提供します。これらのプロフェッショナルは、迅速な適応と高い生産性でプロジェクトを推進するために、あなたのチームにすぐに統合できます。",
            "ListItems": [
              "<strong>開発の専門家：</strong>フルスタック、フロントエンド、バックエンド開発者やソフトウェアエンジニアなど、多くのプログラミング言語とフレームワークの深い知識を持つ専門家が、アイデアを堅牢かつスケーラブルなソリューションに変えます。",
              "<strong>品質の専門知識：</strong>QAの専門家が、手動および自動化されたテスト手法を用いて、継続的なソフトウェア品質を保証します。",
              "<strong>プロジェクトおよび製品管理のリーダーシップ：</strong>プロジェクトマネージャー、プロダクトオーナー、プロダクトマネージャーなど、経験豊富でアジャイルおよび従来の手法に精通した専門家が、スコープ、期間、予算に基づいてプロジェクトを確実に遂行します。",
              "<strong>インフラとDevSecOps：</strong>インフラの自動化、CI/CD、モニタリング、セキュリティ、DevSecOpsを専門とするプロフェッショナルが、IT環境の安定性、スケーラビリティ、およびセキュリティを保証します。",
              "<strong>アジャイルリーダーシップとポートフォリオ管理：</strong>ポートフォリオマネージャー、アジャイルコーチ、スクラムマスターなど、アジャイルフレームワークの深い知識を持つ専門家が、アジャイル変革を導き、多様なプロジェクトを効果的に管理します。",
              "<strong>UX/UIデザイナー：</strong>直感的なインターフェースと魅力的なユーザー体験を創造することに注力した専門家。"
            ]
          },
          "ContactUs": {
            "Title": "アイデアを現実に変える準備はできていますか？",
            "Description": "今すぐお問い合わせいただき、<strong className='text-primaryBlue'>Wave Tech</strong>がどのようにしてイノベーションと成長を促進できるかをご確認ください。"
          }
        }
      }
    },
  },
  // Add other languages here
};

i18n
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt',
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'] 
    },
    interpolation: {
      escapeValue: false
    }
  });

  if (localStorage.getItem('i18nextLng') === 'en-US') {
    localStorage.setItem('i18nextLng', 'pt');
    i18n.changeLanguage('pt');
  }

export default i18n;
