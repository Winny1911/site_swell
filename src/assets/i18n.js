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
      "cookiesPol": "Cookie Policy",
      "RUA": "St",
      "Contact": "CONTACT",
      "Invalid email": "Invalid email" ,
      "Invalid phone number": "Invalid phone number",
      "Name is required": "Name is required",
      "Company is required": "Company is required", 
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
      "Carreiras Swell": "Wave Talento",
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
    }
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
    }
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
