import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "Home": "Home",
      "A Swell": "About Swell",
      "Wave Studio": "Wave Studio",
      "Wave AI": "Wave AI",
      "Wave Payments": "Wave Payments",
      "Cases Swell": "Swell Cases",
      "Carreiras Swell": "Swell Careers",
      "Perfil": "Login",
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
        "DigitalPaymentsIntro": "Have global reach and serve customers from different regions with varying payment preferences.",
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
            "List0": "Organizational Alignment.",
            "List1": "Informed Decision Making.",
            "List2": "Development of Effective Strategy and Delivery Plan.",
            "List3": "Reduction of Cost and Risk.",
            "List4": "Improved Solution Quality.",
            "OperatingModel": "Our operating model:"
          },
          "ContractTerms": {
            "Title": "Contract Terms:",
            "Description": "Details on contract terms and conditions should be consulted directly with us. We are here to provide all the information you need to make the best decision for your business."
          },
          "ContactUs": {
            "Title": "Ready to turn your ideas into reality?",
            "Description": "Contact us today and find out how Wave Discovery can drive innovation and growth in your organization."
          },
          "Exploration": {
            "Title": "EXPLORATION | Strategic Alignment",
            "Description": "In the <strong>EXPLORATION</strong> phase, we focus on aligning your company’s initiatives with organizational OKRs. We provide full support in creating and implementing OKRs, along with guidance and facilitation in the process of capturing and selecting initiatives to ensure they are in sync with strategic objectives:",
            "ListItems": [
              "Support in OKR Implementation.",
              "Custom Selection Criteria.",
              "Facilitation of the Decision-Making Process."
            ]
          },
          "Abstraction": {
            "Title": "ABSTRACTION | From Insight to Action",
            "Description": "During the ABSTRACTION phase, we focus on transforming insights into informed decisions, transforming Ideas into Concrete Plans. Using advanced facilitation techniques, prototyping tools and UI/UX modeling, we foster a deep understanding of the available options. We engage multidisciplinary teams in targeted brainstorming sessions, ensuring that all angles are considered and that solutions are robust and viable:",
            "ListItems": [
              "Facilitated Brainstorming Sessions.",
              "Prototyping and UI/UX Tools.",
              "Broad and Deep Understanding."
            ]
          },
          "Balance": {
            "Title": "BALANCE | Balance and Priority for Value Generation",
            "Description": "The BALANCE stage is crucial for the success of the project. In this phase, we help balance the available options, evolving existing criteria or implementing new weighting and prioritization models. We also facilitate the analysis of technical, financial and risk feasibility, ensuring that the roadmap is perfectly aligned with the project objectives and that the MVP is clearly defined:",
            "ListItems": [
              "Customized Prioritization Criteria.",
              "Feasibility Analysis."
            ]
          },
          "VisionRoadmap": {
            "Title": "VISION ROADMAP | Strategic Planning",
            "Description": "In the VISION ROADMAP phase, we focus our efforts on transforming organizational directions and priorities into a results-oriented Strategic Vision. We work with your team to clearly define the Minimum Viable Product (MVP), so that it reflects the main business objectives, guiding the creation of a roadmap that establishes milestones and goals for each delivery, in accordance with established expectations and oriented towards continuous value delivery.",
            "ListItems": [
              "Clear Definition of the MVP and Strategic Planning of the Roadmap.",
              "Establishment of Milestones and Goals.",
              "Dynamic and flexible approach enabling adjustments."
            ]
          },
          "IntegratedBacklog": {
            "Title": "INTEGRATED BACKLOG | Consistency, Predictability and Integration",
            "Description": "At INTEGRATED BACKLOG, our focus is to ensure that each item in the backlog is detailed, oriented towards the expected results and aligned with the strategic vision of the organization. Through a collaborative process, we work so that the backlog integrates the needs of different areas, teams and specialists, mapping potential risks and identifying impediments. Our goal is to create a fluid and predictable work environment, where everyone involved has clarity about the technical prerequisites, enablers and the path to value delivery.",
            "ListItems": [
              "Results-Oriented Detailing.",
              "Integration with Areas and Specialists.",
              "Mapping of Risks and Impediments.",
              "Identification of Technical Prerequisites and Enablers.",
              "Implementation and Improvement of Estimation and Predictability Techniques."
            ]
          }
        }
      }
    }
  },
  pt: {
    translation: {
      "Home": "Home",
      "A Swell": "A Swell",
      "Wave Studio": "Wave Studio",
      "Wave AI": "Wave AI",
      "Wave Payments": "Wave Payments",
      "Cases Swell": "Cases Swell",
      "Carreiras Swell": "Carreiras Swell",
      "Perfil": "Login",
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
      "Procuramos pessoas talentosas e": "We are looking for talented and",
      "apaixonadas para se juntar à equipe.": "passionate people to join the team.",
      "privPol": "Política de Privacidade",
      "cookiesPol": "Política de Cookies",
      "RUA": "RUA",
      "Contact": "CONTATO",
      "Invalid email": "Email inválido" ,
      "Invalid phone number": "Número de telefone inválido",
      "Name is required": "Nome é obrigatório",
      "Company is required": "Nome da empresa obrigatório", 
      "Sending...": "Enviando...",
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
        "DigitalPaymentsIntro": "Tenha alcance global e atenda clientes de diferentes regiões com preferências variadas de pagamento.",
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
            "List0": "Alinhamento Organizacional.",
            "List1": "Tomada de Decisão Informada.",
            "List2": "Desenvolvimento de Estratégia e Plano de Entrega Eficazes.",
            "List3": "Redução de Custo e Risco.",
            "List4": "Melhoria na Qualidade de Solução.",
            "OperatingModel": "Nosso modelo de atuação:"
          },
          "ContractTerms": {
            "Title": "Termos de Contratação:",
            "Description": "Os detalhes sobre termos e condições de contratação devem ser consultados diretamente conosco. Estamos aqui para fornecer todas as informações necessárias para que você tome a melhor decisão para o seu negócio."
          },
          "ContactUs": {
            "Title": "Pronto para transformar suas ideias em realidade?",
            "Description": "Entre em contato conosco hoje mesmo e descubra como a Wave Discovery pode impulsionar a inovação e o crescimento na sua organização."
          },
          "Exploration": {
            "Title": "EXPLORATION | Alinhamento Estratégico",
            "Description": "Na etapa de <strong>EXPLORATION</strong>, focamos em alinhar as iniciativas da sua empresa com os OKRs organizacionais. Fornecemos suporte completo na criação e implementação de OKRs, além de orientação e facilitação no processo de captura e seleção de iniciativas para que estejam em sinergia com os objetivos estratégicos:",
            "ListItems": [
              "Suporte na Implementação de OKRs.",
              "Critérios de Seleção Personalizados.",
              "Facilitação do Processo de Decisão."
            ]
          },
          "Abstraction": {
            "Title": "ABSTRACTION | Do Insight à Ação",
            "Description": "Durante a fase de <strong>ABSTRACTION</strong>, focamos na transformação de insights em decisões informadas, transformando Ideias em Planos Concretos. Com o uso de técnicas avançadas de facilitação, ferramentas de prototipagem e modelagem de UI/UX, promovemos o entendimento profundo das opções disponíveis. Envolvemos equipes multidisciplinares em sessões de brainstorming direcionadas, garantindo que todos os ângulos sejam considerados e que as soluções sejam robustas e viáveis:",
            "ListItems": [
              "Sessões de Brainstorming Facilitadas.",
              "Ferramentas de Prototipagem e UI/UX.",
              "Compreensão Ampla e Profunda."
            ]
          },
          "Balance": {
            "Title": "BALANCE | Equilíbrio e Prioridade para Geração de Valor",
            "Description": "A etapa de <strong>BALANCE</strong> é crucial para o sucesso do projeto. Nesta fase, ajudamos a equilibrar as opções disponíveis, evoluindo os critérios existentes ou implementando novos modelos de ponderação e priorização. Também facilitamos a análise de viabilidade técnica, financeira e de risco, garantindo que o roadmap esteja perfeitamente alinhado com os objetivos do projeto e que o MVP seja claramente definido:",
            "ListItems": [
              "Critérios de Priorização Customizados.",
              "Análise de Viabilidade."
            ]
          },
          "VisionRoadmap": {
            "Title": "VISION ROADMAP | Planejamento Estratégico",
            "Description": "Na fase de <strong>VISION ROADMAP</strong>, concentramos nossos esforços em transformar direcionamentos e prioridades Organizacionais em Visão Estratégica orientada a resultados. Trabalhamos junto à sua equipe para definir de forma clara o Produto Mínimo Viável (MVP), para que reflita os principais objetivos do negócio orientando a criação de um roadmap que estabeleça marcos e metas para cada entrega, de acordo com as expectativas estabelecidas e orientada à entrega contínua de valor.",
            "ListItems": [
              "Definição Clara do MVP e Planejamento Estratégico do Roadmap.",
              "Estabelecimento de Marcos e Metas.",
              "Abordagem dinâmica e flexível possibilitando adequações."
            ]
          },
          "IntegratedBacklog": {
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
      "Perfil": "Login",
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
        "DigitalPaymentsIntro": "Tenga alcance global y atienda a clientes de diferentes regiones con diferentes preferencias de pago.",
        "DigitalAdvantage1": "- Ofrezca flexibilidad y conveniencia con múltiples opciones de pago y aumente las posibilidades de conversión.",
        "DigitalAdvantage2": "- Garantizar la seguridad implementando medidas de seguridad adaptadas a cada método, reduciendo el fraude.",
        "DigitalAdvantage3": "- Innovación y competitividad con apoyo a nuevas tecnologías de pago y transferencias instantáneas.",
        "DigitalAdvantage4": "- Integrar y procesar pagos con criptomonedas.",
        "FooterMessage": "Cuente con nuestros servicios para eliminar la complejidad y resolver sus desafíos de pagos."
      },
      "WaveStudio": {
        "Intro": "Innovación a medida, resultados extraordinarios.",
        "Description": "Reunimos la experiencia de nuestros profesionales para crear un equipo multidisciplinario cuyos pilares son la cultura ágil, la personalización de procesos y la capacidad de generar valor. Nuestro enfoque es promover la mejora continua y ofrecer soluciones de negocio únicas en el mercado, sumando calidad a los productos y servicios digitales de nuestros clientes",
        "Discovery": {
          "TitlePart1": "Transforme las ideas",
          "TitlePart2": "en una estrategia exitosa.",
          "Introduction": {
            "Part1": "En ",
            "StrongPart": "Wave Discovery",
            "Part2": ", entendemos que el éxito de cualquier iniciativa comienza con un conocimiento profundo del contexto y una definición clara de los objetivos. Desde capturar conocimientos hasta crear prototipos y desarrollar una hoja de ruta estratégica, nuestro objetivo es garantizar soluciones relevantes y efectivas que estén perfectamente alineadas con la visión y los objetivos de su organización."
          },
          "Benefits": {
            "Title": "Los principales beneficios de ",
            "StrongPart": "Wave Discovery",
            "List0": "Alineamiento Organizacional.",
            "List1": "Toma de decisiones informada.",
            "List2": "Desarrollo de una estrategia eficaz y un plan de ejecución.",
            "List3": "Reducción de Costos y Riesgos.",
            "List4": "Mejora de la Calidad de la Solución.",
            "OperatingModel": "Nuestro modelo operativo:"
          },
          "ContractTerms": {
            "Title": "Términos de empleo:",
            "Description": "Los detalles sobre los términos y condiciones de empleo deben consultarse directamente con nosotros. Estamos aquí para brindarte toda la información que necesitas para tomar la mejor decisión para tu negocio."
          },
          "ContactUs": {
            "Title": "¿Listo para convertir tus ideas en realidad?",
            "Description": "Contáctenos hoy y descubra cómo Wave Discovery puede impulsar la innovación y el crecimiento en su organización."
          },
          "Exploration": {
            "Title": "EXPLORATION | Alineación Estratégica",
            "Description": "En la etapa de <strong>EXPLORATION</strong>, nos centramos en alinear las iniciativas de su empresa con los OKRs organizacionales. Brindamos soporte completo en la creación e implementación de OKRs, además de orientación y facilitación en el proceso de captura y selección de iniciativas para que estén en sinergia con los objetivos estratégicos:",
            "ListItems": [
              "Soporte en la Implementación de OKRs.",
              "Criterios de Selección Personalizados.",
              "Facilitación del Proceso de Decisión."
            ]
          },
          "Abstraction": {
            "Title": "ABSTRACCIÓN | Del conocimiento a la acción",
            "Description": "Durante la fase de ABSTRACCIÓN, nos enfocamos en transformar conocimientos en decisiones informadas, transformando Ideas en Planes Concretos. Utilizando técnicas de facilitación avanzadas, herramientas de creación de prototipos y modelado UI/UX, promovemos una comprensión profunda de las opciones disponibles. Involucramos a equipos multidisciplinarios en sesiones de lluvia de ideas específicas, asegurando que se consideren todos los ángulos y que las soluciones sean sólidas y viables:",
            "ListItems": [
              "Sesiones de lluvia de ideas facilitadas.",
              "Prototipado y herramientas UI/UX.",
              "Comprensión amplia y profunda."
            ]
          },
          "Balance": {
            "Title": "SALDO | Equilibrio y Prioridad para la Generación de Valor",
            "Description": "La etapa de BALANCE es crucial para el éxito del proyecto. En esta etapa, ayudamos a equilibrar las opciones disponibles, evolucionando los criterios existentes o implementando nuevos modelos de ponderación y priorización. También facilitamos el análisis de viabilidad técnica, financiera y de riesgos, asegurando que la hoja de ruta esté perfectamente alineada con los objetivos del proyecto y que el MVP esté claramente definido:",
            "ListItems": [
              "Criterios de priorización personalizados.",
              "Análisis de viabilidad."
            ]
          },
          "VisionRoadmap": {
            "Title": "HOJA DE RUTA DE LA VISIÓN | Planificación Estratégica",
            "Description": "En la fase de HOJA DE RUTA DE LA VISIÓN, centramos nuestros esfuerzos en transformar las direcciones y prioridades de la Organización en una Visión Estratégica orientada a resultados. Trabajamos con tu equipo para definir claramente el Producto Mínimo Viable (MVP), de modo que refleje los principales objetivos de negocio, guiando la creación de una hoja de ruta que establezca hitos y metas para cada entrega, de acuerdo con las expectativas establecidas y guiados por la entrega continua de valor.",
            "ListItems": [
              "Definición clara del MVP y Planificación de la Hoja de Ruta Estratégica.",
              "Establecimiento de Hitos y Metas.",
              "Enfoque dinámico y flexible que permite ajustes."
            ]
          },
          "IntegratedBacklog": {
            "Title": "CARTERA INTEGRADA | Coherencia, previsibilidad e integración",
            "Description": "En INTEGRATED BACKLOG, nuestro enfoque es asegurar que cada elemento del backlog esté detallado, orientado hacia los resultados esperados y alineado con la visión estratégica de la organización. A través de un proceso colaborativo, trabajamos para asegurar que el backlog integre las necesidades de diferentes áreas, equipos y especialistas, mapeando riesgos potenciales e identificando impedimentos. Nuestro objetivo es crear un entorno de trabajo fluido y predecible, donde todos los involucrados tengan claros los prerrequisitos técnicos, los facilitadores y el camino hacia la entrega de valor.",
            "ListItems": [
              "Detallado orientado a resultados.",
              "Integración con Áreas y Especialistas.",
              "Mapeo de Riesgos e Impedimentos.",
              "Identificación de Prerrequisitos Técnicos y Habilitadores.",
              "Implementación y Mejora de Técnicas de Estimación y Previsibilidad."
            ]
          }
        },
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
      "Perfil": "ログイン",
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
        "DigitalPaymentsIntro": "世界中にリーチし、さまざまな支払い設定を持つさまざまな地域の顧客にサービスを提供します。",
        "DigitalAdvantage1": "- 複数の支払いオプションで柔軟性と利便性を提供し、コンバージョンの可能性を高めます。",
        "DigitalAdvantage2": "- それぞれの手法に応じたセキュリティ対策を実施することでセキュリティを確保し、不正行為を低減します。",
        "DigitalAdvantage3": "- 新しい支払いテクノロジーと即時送金のサポートによるイノベーションと競争力。",
        "DigitalAdvantage4": "- 暗号通貨支払いを統合して処理します。",
        "FooterMessage": "複雑さを解消し、支払いに関する課題を解決するには、弊社のサービスをご利用ください。"
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


export default i18n;
