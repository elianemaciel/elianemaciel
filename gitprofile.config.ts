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
          title: 'Redesign Wake Creators Hub',
          description:
            'A nova plataforma da Wake Creators HUB tem o objetivo de conectar criadores de\
            conteúdo a grandes marcas. Pensada em modelo Mobile First o layout foi adaptado para a\
            melhor experiência do usuário.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://app.wakecreators.com/',
          tech: [ 'Microfrontends e Microserviços', 'React', 'NodeJS', 'NextJS', 'Mongodb', 'MySQL', 'Redis', 'CI/CD'],
          function: ['Tech Lead - Scrum Master', 'Full Stack'],
          results: 'Melhoria na satisfação dos usuários. Redução no número de chamados e bugs. Alinhamento do time com os príncipios do Manifesto Ágil.',
        },
        {
          title: 'Redesign - Plataforma de Comunidades',
          description:
            'Wake Community é uma plataforma que, Spor meio de produção relevante e espontânea de conteúdo dos seus membros,\
            potencializa a comunicação direta da marca com o seu target.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://consultoratreinadora.com.br/courses',
          tech: ['Angular', 'Node JS', 'Mongodb', 'Redis', 'CI/CD'],
          function: ['Tech Lead - Scrum Master', 'Desenvolvedora Frontend'],
          results: 'Melhoria na satisfação dos usuários. Alinhamento do time com os príncipios do Manifesto Ágil',
          
        },
        {
          title: 'Growth Plataforma',
          description:
            'Wake Community é uma plataforma que, por meio de produção relevante e espontânea de conteúdo dos seus membros,\
            potencializa a comunicação direta da marca com o seu target.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://consultoratreinadora.com.br/courses',
          tech: ['React', 'Python', 'PostgresSQL', 'CI/CD'],
          function: ['Frontend'],
          results: 'Melhoria na satisfação dos usuários. ',
        },
        {
          title: 'Django Girls',
          description:
            'Django Girls é um evento com foco em incentivar mulheres na TI. Organizei quatro edições na região da serra gaúcha.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://consultoratreinadora.com.br/courses',
          tech: ['Python', 'Django'],
          function: ['Organizadora'],
          results: 'Planejamento e organização do evento. ',
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
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Scrum',
    'Liderança',
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
  experiences: [
    {
      company: 'Ânima Educação | Unifacs',
      position: 'Professora',
      from: 'Mar 2024',
      to: 'Atual',
      companyLink: 'https://example.com',
    },
    {
      company: 'Wake Creators',
      position: 'Tech Lead | Scrum Master',
      from: 'Out 2020',
      to: 'Dez 2024',
      companyLink: 'https://example.com',
    },
    {
      company: 'GrowthHackers',
      position: 'Frontend Developer ',
      from: 'Jan 2020',
      to: 'Set 2020',
      companyLink: 'https://example.com',
    },
    {
      company: 'Cake ERP | NL Informática',
      position: 'Software Developer Full Stack',
      from: 'Jul 2018',
      to: 'Jan 2020',
      companyLink: 'https://example.com',
    },
    {
      company: 'Vendabem Informática',
      position: 'Software Developer',
      from: 'Jan 2017',
      to: 'Jun 2018',
      companyLink: 'https://example.com',
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
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],
  publications: [
    {
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
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'manual', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
    courses: [{
      title: 'Desenvolvimento Web com Framework React',
      thumbnail: 'gfdgdf',
      link: 'https://sou.ucs.br/extensao/detalhes/desenvolvimento-web-com-framework-react-EXT035982/',
      publishedAt: new Date(),
      description: 'Desenvolver um site estático com acesso a APIs públicas.',
      categories: ['frontend', 'typescript', 'learning', 'React']
    },
    {
      title: 'Desenvolvimento Web: Construção de API com Node.Js',
      thumbnail: 'gfdgdf',
      link: 'https://sou.ucs.br/extensao/detalhes/desenvolvimento-web-construcao-de-api-com-node-js-EXT035984/',
      publishedAt: new Date(),
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
