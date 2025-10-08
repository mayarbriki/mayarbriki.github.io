// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'mayarbriki', // Your GitHub org/user name. (This is the only required config)
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
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['mayarbriki/gitprofile', 'mayarbriki/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
     {
  title: 'Insurance Application',
  description:
    'A comprehensive insurance application that simplifies policy management and claims processing.',
  imageUrl: '/1099.jpg',
  link: 'https://mayarbriki.github.io/Insurance-Application/',
},
        {
          title: 'Banking Application',
          description:
            'A modern banking application featuring secure transactions, account management, and intuitive user experience.',
          imageUrl:
            'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
          link: 'https://mayarbriki.github.io/banking_demo/',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Briki Mayar', description: '', imageURL: '' },
  social: {
    linkedin: 'Mayar-Briki',
  
    
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
   
    phone: '',
    email: 'mayar.briki@esprit.tn',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Spring',
    'Angular',
    'JavaScript',
    'React.js',
    'Node.js',
    'Next.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'CSS'
  ],
  experiences: [
      {
      company: 'Tunisie Telecom',
      position: 'Software Engineer Intern',
      from: 'July 2022',
      to: 'August 2022',
      companyLink: 'https://www.amenbank.com.tn/',
    },
    {
      company: 'Amen Bank',
      position: 'Software Engineer Intern',
      from: 'July 2024',
      to: 'https://www.amenbank.com.tn/',
    },
    {
      company: 'Eco-Pilot',
      position: 'Software Engineer Intern',
      from: 'July 2025',
      to: 'september 2025',
      companyLink: 'https://www.eco-pilot.com/',
    },
  ],
 
  educations: [
    {
      institution: "ESPRIT – École d'ingénieurs en Tunisie",
      degree: 'Software architectural engineering',
      from: '2021',
      to: '2025',
    },
  ],
 
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: 'default-id', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

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
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },
  googleAnalytics: { id: '' },

  enablePWA: true,
};

export default CONFIG;
