/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Joel Vilca Tarazona",
  description:
    "Soy un apasionado por los datos desarrollando flujos EndToEnd en bacth y tiempo real para aportar valor a las empresas en la toma de desiciones.",
  og: {
    title: "Joel Vilca Tarazona Portafolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Joel Vilca Tarazona",
  logo_name: "Joel Vilca",
  nickname: "shaka",
  subTitle:
    "Soy un apasionado por los datos desarrollando flujos EndToEnd en bacth y tiempo real para aportar valor a las empresas en la toma de desiciones.",
  resumeLink:
    "https://www.linkedin.com/in/joelvilca/",
  portfolio_repository: "https://github.com/vilcajoal/WEB_PERSONAL",
  githubProfile: "https://github.com/vilcajoal",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/vilcajoal",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/joelvilca/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCAQ_2zUd5UKz0FTdsY9y5og",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:joel.vilca1@unmsm.edu.pe",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/vilca_tarazona",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/vilcajoal/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/vilcajoal/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Desarrollo de modelos listos para producción altamente escalables para varios casos de uso estadístico y de aprendizaje profundo",
        "⚡ Experiencia de trabajo con proyectos de Visión por Computador y PNL",
        "⚡ Desarrollo de procesos ETL en batch y tiempo real",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    /*
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },*/
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experiencia trabajando en múltiples plataformas en la nube",
        "⚡ Creación de reportes en Power BI. Locker, tableau",
        "⚡ Implementación de modelos de aprendizaje profundo en la nube para usar en dispositivos WEB",
        "⚡ Configuración de trabajos de transmisión de Bases de datos a servidor o viceversa en GCP y AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    }/*,
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    }*/,
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/joelvilcatarazona/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/joel_vilca1",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/joelvilca1",
    },
    /*{
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },*/
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/vilcajoal",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Universidad Nacional Mayor de San Marcos",
      subtitle: "Ingeniería de Software",
      logo_path: "UNMSM.png",
      alt_name: "UNMSM",
      duration: "2018 - 2023",
      descriptions: [
        "⚡ He estudiado temas básicos de ingeniería de software como DS, Algoritmos, DBMS, OS, CA, AI, etc.",
        "⚡ Aparte de esto, he realizado cursos de Deep Learning, Data Science, Cloud Computing y Full Stack Development.",
        "⚡ Miembro del Grupo de Investigación en Inteligencia Artificial de San Marcos, AIRU, parte del grupo ITDATA-UNMSM.",
      ],
      website_link: "https://unmsm.edu.pe/",
    },
    {
      title: "Universidad de Buenos Aires",
      subtitle: "Programa de Formación Multidisciplinario de Inteligencia Artificial",
      logo_path: "UBA.png",
      alt_name: "Universidad de Buenos Aires",
      duration: "2021 - 2022",
      descriptions: [
        "⚡ He tomado una variedad de cursos relacionados con la Inteligencia Artificial que corresponden a IA Explicable, Aprendizaje de Máquinas Gráficas, Visión por Computador, etc.",
        "⚡ Aprendí los conceptos principales, la normativa aplicable y las herramientas necesarias para desarrollar la estrategia de Gobierno del Datos",
        "⚡ Implementé diferentes métodos, técnicas y despliegues de las soluciones de IA aplicandolo en un caso de negocio",
      ],
      website_link: "https://www.uba.ar/#/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experiencia",
  subtitle: "Trabajo, Prácticas y Voluntariado",
  description:
  "He trabajado con empresas en evolución como ingeniero de datos y arquitecto de datos aplicando ML y DL. Me encanta organizar eventos y es por eso que también participo en muchas comunidades de datos abiertos como miembro y coordinador.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Trabajos Profesionales",
      experiences: [
        {
          title: "Data Engineer",
          company: "Ransa Comercial",
          company_url: "https://www.ransa.biz/quienes-somos/#",
          logo_path: "ransa.png",
          duration: "Jun 2022 - Actualidad",
          location: "Lima - Perú",
          description:
          [
            "⚡ Diseño de aplicaciones de datos para recopilar, almacenar y analizar datos para Data Scientist y Data Analyst.",
            "⚡ Crear nuevos métodos de validación de datos y herramientas de análisis de datos.",
            "⚡ Identificar, diseñar e implementar mejoras de procesos internos para automatizar procesos manuales, optimizar la entrega de datos, rediseñar la infraestructura para una mayor escalabilidad, etc.",
          ], 
          color: "#0879bf",
        },
        {
          title: "Practicante Data Engineer",
          company: "Ransa Comercial",
          company_url: "https://www.ransa.biz/quienes-somos/#",
          logo_path: "ransa.png",
          duration: "Dic 2021 - Jun 2022",
          location: "Lima - Perú",
          description:
            "Soporte en proyectos junto al equipo de Data Analytics, Soporte en la plataforma Power BI en la captura de información a través del conector de bigquery y modelamiento de datos,  Soporte a las integraciones de procesos ETL /ELT y Soporte de flujos de trabajo en Python en procesamiento de datos a través de código sin servidor.",
          color: "#9b1578",
        },
        {
          title: "Instructor de programación",
          company: "Algorithmics Perú",
          company_url: "https://algorithmicsperu.com/",
          logo_path: "algoritmics.png",
          duration: "Sep 2021 - Sep 2022",
          location: "Lima - Perú",
          description:
            "Dictado del curso Python Start, Python Pro y Dictado del curso Diseño de Videojuegos con Roblox Studio",
          color: "#fc1f20",
        },
        {
          title: "Profesor de matemáticas",
          company: "Grupo San Marcos",
          company_url: "https://gruposanmarcos.edu.pe/",
          logo_path: "gsm.png",
          duration: "Nov 2019 - Abr 2020",
          location: "Lima - Perú",
          description:
            "Dictado de clases a alumnos preuniversitarios, Preparación de clases, Corrección de exámenes, evaluaciones y prácticas, Seguimiento y soporte a estudiantes.",
          color: "#fc1f20",
        },
      ],
    },
    /*{
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },*/
    {
      title: "Voluntariado",
      experiences: [
        {
          title: "Miembro de investigación en inteligencia artificial",
          company: "AIRU",
          company_url: "https://www.linkedin.com/company/artificialintelligenceresearchunmsm/?viewAsMember=true",
          logo_path: "airu.png",
          duration: "Set 2020 - Jun 2022",
          location: "Lima - Perú",
          description:
            " Investigación de los principales algoritmos de Machine Learning (Regresión, clasificación, Clustering) y Deep Learning (RNA, RNC, RNR) en Python, Consolidación de alianza y certificaciones con las universidades Oxford Collegue of Engineering y Amity School of Engineering de la India.",
          color: "#4285F4",
        },
        {
          title: "Miembro de Presidencia Área de mejora continua",
          company: "Proyectos SM",
          company_url: "https://www.linkedin.com/company/proyectossm/",
          logo_path: "psm.png",
          duration: "Ene 2021 - Jun 2021",
          location: "Lima - Perú",
          description:
            "Ciencia y tecnología",
          color: "#D83B01",
        },
        {
          title: "Miembro de Dirección de Logística Virtual",
          company: "CINEA",
          company_url: "https://www.linkedin.com/company/cinealatam/",
          logo_path: "cinea.png",
          duration: "Nov 2020 - Abr 2021 ",
          location: "Lima - Perú",
          description:
            "Ciencia y tecnología",
          color: "#000000",
        },
        {
          title: "Voluntario Educación",
          company: "Crea+ Perú",
          company_url:
            "https://www.linkedin.com/company/crea-per%C3%BA/",
          logo_path: "creamas.png",
          duration: "Oct 2020 - Ene 2021",
          location: "Lima - Perú",
          description:
            "Educación",
          color: "#0C9D58",
        }
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Proyectos",
  description:
    "Mis proyectos hacen uso de una gran variedad de herramientas de última tecnología. Mi mejor experiencia es crear proyectos de ciencia de datos e implementarlos en aplicaciones web utilizando infraestructura en la nube.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publicaciones",
  description:
    "He trabajado y publicado algunos trabajos de investigación y publicaciones propias.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contáctame",
    profile_image_path: "google.png",
    description:
      "Estoy disponible en casi todas las redes sociales. Puede enviarme un mensaje, le responderé dentro de las 24 horas. Puedo ayudarte con ML, AI, GCP, Big Data en Cloud, y Opensource Development.",
  },
  blogSection: {
    title: "Blog",
    subtitle:
      "Estoy documentando mis aprendizajes en mi Blog.",
    link: "https://vilcajoal.hashnode.dev/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Dirección",
    subtitle:
      "Lima - Perú",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/Yw5go7kmMjsUs3uVA",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
