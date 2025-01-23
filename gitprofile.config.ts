// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'elianemaciel', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projetos',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Meus Projetos',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Desenvolvimento da nova plataforma da Wake Creators HUB',
          description:
            'Conectar criadores de conteúdo a grandes marcas, garantindo uma experiência fluida e otimizada para dispositivos móveis, seguindo o conceito de Mobile First.',
          imageUrl:
            './images/wake2.png',
          link: 'https://app.wakecreators.com/',
          tech: [ 'Microfrontends e Microserviços', 'React', 'NodeJS', 'NextJS', 'Mongodb', 'MySQL', 'Redis', 'CI/CD'],
          function: ['Tech Lead - Scrum Master', 'Full Stack'],
          results: ['Implementação de uma experiência de usuário otimizada, adaptada a dispositivos móveis, que facilita a interação entre criadores e marcas.',
            'Estruturação modular da aplicação utilizando Microfrontends e Microserviços, permitindo escalabilidade e manutenibilidade.',
            'Automação de processos de entrega e deploy contínuos com práticas de CI/CD, assegurando agilidade e consistência no ciclo de desenvolvimento.',
            'Atuei como desenvolvedora frontend, sendo responsável pela manutenção e evolução de uma biblioteca de componentes e de um design system, promovendo consistência visual e reutilização de código em toda a plataforma.',
            'Facilitei e conduzi cerimônias ágeis, como dailies, plannings, reviews, e retrospectivas, utilizando práticas de Management 3.0 para engajar a equipe e aumentar a produtividade.'],
        },
        {
          title: 'Redesign - Plataforma de Comunidades',
          description:
            'Wake Community é uma plataforma que, Spor meio de produção relevante e espontânea de conteúdo dos seus membros,\
            potencializa a comunicação direta da marca com o seu target.',
          imageUrl:
            './images/comunidades.png',
          link: 'https://consultoratreinadora.com.br/courses',
          tech: ['Angular', 'Node JS', 'Mongodb', 'Redis', 'CI/CD'],
          function: ['Tech Lead - Scrum Master', 'Desenvolvedora Frontend'],
          results: ['Melhoria na satisfação dos usuários. Redução no número de chamados e bugs. Alinhamento do time com os príncipios do Manifesto Ágil.', 'Atuei como desenvolvedora frontend, sendo responsável pela manutenção e evolução de uma biblioteca de componentes e de um design system, promovendo consistência visual e reutilização de código em toda a plataforma.',
            'Facilitei e conduzi cerimônias ágeis, como dailies, plannings, reviews, e retrospectivas, utilizando práticas de Management 3.0 para engajar a equipe e aumentar a produtividade.'],
          
        },
        {
          title: 'Desenvolvimento do site corporativo da empresa Natus Desenvolvimento Humano',
          description:
            'Criar uma presença digital profissional para a empresa, destacando seus serviços e valores de forma clara e atrativa.',
          imageUrl:
            './images/natus.png',
          link: 'https://natus-next-v3.vercel.app/',
          tech: ['NextJS', 'React JS', 'CI/CD', 'Tailwind UI'],
          function: ['Desenvolvedora'],
          results: ['Estruturação de um site responsivo, garantindo uma experiência fluida em diferentes dispositivos (desktop, tablet e mobile).',
            'Planejamento das funcionalidades e do layout com base em análises detalhadas das necessidades do cliente e do público-alvo.',
            'Utilização de boas práticas de design e desenvolvimento para criar uma interface intuitiva e moderna.',
            'Realização de todas as etapas do projeto de forma independente, desde o levantamento de requisitos até a prototipagem e desenvolvimento.',
            'Desenvolvimento do site utilizando tecnologias modernas (incluir as tecnologias usadas, como HTML, CSS, JavaScript, React, etc., caso aplicável).',
            'Análise contínua das necessidades do cliente para garantir a entrega de uma solução personalizada e de alta qualidade.',
          ],
          
        },
        {
          title: 'Organização do Django Girls - Região da Serra Gaúcha',
          description:
            'Incentivar mulheres a ingressarem e se desenvolverem na área de Tecnologia da Informação por meio de workshops e mentorias.',
          imageUrl:
            './images/django.png',
          link: 'https://djangogirls.org/pt-br/',
          tech: ['Python', 'Django'],
          function: ['Organizadora'],
          results: [
            'Organização bem-sucedida de quatro edições do evento, impactando positivamente a comunidade local e ampliando a inclusão de mulheres na TI.',
            'Capacitação de participantes através de workshops práticos, promovendo o aprendizado de conceitos fundamentais de programação e desenvolvimento web.',
            'Criação de um ambiente acolhedor e inspirador, fortalecendo a rede de apoio e conexão entre mulheres interessadas na área tecnológica.',
            'Planejamento e execução das edições do evento, incluindo coordenação logística, comunicação, captação de patrocinadores e formação de equipes de mentoria.',
            'Divulgação do evento em plataformas locais e redes sociais para atrair participantes e aumentar o alcance da iniciativa.',
            'Criação de estratégias para garantir a representatividade e acessibilidade das edições, incluindo organização de espaços adequados e materiais inclusivos.'
          ],
        },
        {
          title: 'Contentools Plataforma',
          description:
            'A Contentools é uma plataforma de Marketing de Conteúdo que realiza o planejamento, produção e a publicação dos conteúdos nas redes sociais.',
          imageUrl:
            './images/contentools.png',
          link: 'https://contentools.com/',
          tech: ['React', 'Python', 'PostgresSQL', 'CI/CD'],
          function: ['Frontend'],
          results: [],
        },
        {
          title: 'Desenvolvimento do Registro Brasileiro de Ensaios Clínicos (ReBEC)',
          description:
            'Criar e manter uma plataforma virtual de acesso livre para o registro de estudos experimentais e não-experimentais realizados em seres humanos, promovendo transparência e acesso à informação para a comunidade científica e o público geral.',
          imageUrl:
            './images/rebec_logo.png',
          link: 'https://ensaiosclinicos.gov.br/',
          tech: ['Python', 'Django', 'Bootstrap', 'PostgresSQL'],
          function: ['Desenvolvedora'],
          results: [
            'Colaborei no desenvolvimento de funcionalidades para facilitar o registro e consulta de estudos clínicos, otimizando a experiência dos usuários (pesquisadores, instituições e público geral).',
            'Trabalhei na implementação de boas práticas de desenvolvimento web, garantindo acessibilidade, performance e segurança da aplicação.',
            'Contribuí para a integração de sistemas e a estruturação de bancos de dados para gerenciar eficientemente as informações dos estudos registrados.'
          ],
        },
        
      ],
    },
  },
  seo: {
    title: 'Portfolio de Eliane Faveron Maciel',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'elianefaveron',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'eliane.faveron@gmail.com',
  },
  resume: {
    fileUrl:
      './CV - Eliane Isadora Faveron Maciel.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Scrum',
    'Liderança',
    'Management 3.0',
    'Gestão de Projetos',
    'JavaScript',
    'TypeScript',
    'Python',
    'React.js',
    'Node.js',
    'Nest.js',
    'Django',
    'MySQL',
    'PostgreSQL',
    'Git',
    'MongoDB',
  ],
  tools: [
    'YouTrack',
    'Notion',
    'Jira',
    'ClickUp',
    'Trelo'
  ],
  experiences: [
    {
      company: 'Ânima Educação | Unifacs',
      position: 'Professora',
      from: 'Mar 2024',
      to: 'Atual',
      companyLink: 'https://www.unifacs.br/',
    },
    {
      company: 'Wake Creators',
      position: 'Tech Lead | Scrum Master',
      from: 'Out 2020',
      to: 'Dez 2024',
      companyLink: 'https://wakecreators.com.br/',
    },
    {
      company: 'GrowthHackers',
      position: 'Frontend Developer ',
      from: 'Jan 2020',
      to: 'Set 2020',
      companyLink: 'https://growthhackers.com/',
    },
    {
      company: 'Cake ERP | NL Informática',
      position: 'Software Developer Full Stack',
      from: 'Jul 2018',
      to: 'Jan 2020',
      companyLink: 'https://www.nl.com.br/',
    },
    {
      company: 'Vendabem Informática',
      position: 'Software Developer',
      from: 'Jan 2017',
      to: 'Jun 2018',
      companyLink: 'https://www.vendabem.com.br/',
    },
    {
      company: 'Instituto Communitas',
      position: 'Software Developer JR',
      from: 'Set 2013',
      to: 'Dez 2016',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Scrum Master Accredited Certification',
      body: 'International Scrum Institute',
      year: 'Dez 2024',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'UFBA',
      degree: 'Mestrado',
      from: '2024',
      to: 'Em andamento',
    },
    {
      institution: 'Unyleya',
      degree: 'Pós Graduação em Gestão Ágil de Projetos',
      from: '2021',
      to: '2022',
    },
    {
      institution: 'Universidade de Caxias do Sul',
      degree: 'Graduação em Ciência da Computação',
      from: '2014',
      to: '2021',
    },
  ],
  publications: [
    /*{
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },*/
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'manual', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
    courses: [{
      title: 'Desenvolvimento Web com Framework React',
      thumbnail: './images/react.png',
      link: 'https://sou.ucs.br/extensao/detalhes/desenvolvimento-web-com-framework-react-EXT035982/',
      publishedAt: new Date('04-12-2025'),
      description: 'Desenvolver um site estático com acesso a APIs públicas.',
      categories: ['frontend', 'typescript', 'learning', 'React']
    },
    {
      title: 'Desenvolvimento Web: Construção de API com Node.Js',
      thumbnail: './images/nest-js.png',
      link: 'https://sou.ucs.br/extensao/detalhes/desenvolvimento-web-construcao-de-api-com-node-js-EXT035984/',
      publishedAt: new Date('04-08-2025'),
      description: 'Desenvolver uma API com integração com banco de dados, aprendendo a linguagem de programação TypeScript.',
      categories: ['backend', 'typescript', 'learning', 'Node JS', 'NestJS']
    }
  ]
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
