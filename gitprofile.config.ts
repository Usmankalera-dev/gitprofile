// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Usmankalera-dev', // Your GitHub org/user name. (This is the only required config)
  },

  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   *
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',

  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['Usmankalera-dev/gitprofile'], // These projects will not be displayed.
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['Usmankalera-dev/cm-surgical', 'Usmankalera-dev/pakistan-fast-news'], // List of repository names to display.
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'CM Surgical',
          description:
            'Surgical instruments e-commerce store for a Lahore client — online shop with Cash on Delivery checkout, order tracking and admin panel.',
          imageUrl:
            'https://opengraph.githubassets.com/1/Usmankalera-dev/cm-surgical',
          link: 'https://thecmsurgical.com/',
        },
        {
          title: 'Pakistan Fast News',
          description:
            'Bilingual (English + Urdu) Pakistan news website — daily headlines, videos, prayer times and live widgets.',
          imageUrl:
            'https://opengraph.githubassets.com/1/Usmankalera-dev/pakistan-fast-news',
          link: 'https://usmankalera-dev.github.io/pakistan-fast-news/',
        },
        {
          title: 'PakDrama',
          description:
            'Pakistani dramas website — 20 dramas, 700+ episodes, actors directory and watch tracking.',
          imageUrl:
            'https://opengraph.githubassets.com/1/Usmankalera-dev/pakistani-dramas',
          link: 'https://usmankalera-dev.github.io/pakistani-dramas/',
        },
        {
          title: 'SeekhoWebDev',
          description:
            'Free web development course (HTML, CSS, JavaScript) — 35 sub-chapters with PDF notes, quizzes and a live code playground.',
          imageUrl:
            'https://opengraph.githubassets.com/1/Usmankalera-dev/seekho-webdev',
          link: 'https://usmankalera-dev.github.io/seekho-webdev/',
        },
      ],
    },
  },

  seo: {
    title: 'Portfolio of Muhammad Usman',
    description:
      'AI Engineer & Creator from Lahore, Pakistan — Generative AI, AI video ads, web development and research.',
    imageURL: '',
  },

  social: {
    linkedin: 'muhammad-usman-63aa07443',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: 'usmankalera',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'https://usmankalera-dev.github.io/portfolio/',
    phone: '+92 318 7579301',
    email: 'su92-bsaim-f25-025@superior.edu.pk',
  },

  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },

  skills: [
    'Generative AI',
    'Prompt Engineering',
    'AI Video Generation',
    'AI Image Generation',
    'Text-to-Speech Voiceovers',
    'Python',
    'C++',
    'JavaScript',
    'React.js',
    'Node.js',
    'WordPress',
    'SEO',
    'Short-form Video',
    'Social Media Content',
    'Git',
  ],

  experiences: [
    {
      company: 'Self-directed',
      position: 'Generative AI Practitioner',
      from: '2024',
      to: 'Present',
      companyLink: 'https://usmankalera-dev.github.io/portfolio/',
    },
    {
      company: 'IEEE Computer Society',
      position: 'Marketing Lead (SE)',
      from: '2026',
      to: '2027',
      companyLink: 'https://www.computer.org/',
    },
    {
      company: 'Fiverr',
      position: 'Freelance AI Video Creator',
      from: '2026',
      to: 'Present',
      companyLink: 'https://www.fiverr.com/usman0_kalera',
    },
  ],

  certifications: [
    {
      name: 'Microsoft Certified Associate — Python Programming',
      body: 'Microsoft',
      year: 'May 2026',
      link: '',
    },
    {
      name: 'AI for Brainstorming and Planning',
      body: 'Google / Coursera',
      year: 'July 2026',
      link: '',
    },
    {
      name: 'Generative AI Essentials',
      body: 'University of Michigan / Coursera',
      year: 'July 2026',
      link: '',
    },
    {
      name: 'AI Fundamentals',
      body: 'Google / Coursera',
      year: 'July 2026',
      link: '',
    },
    {
      name: 'Certificate of Outstanding Performance',
      body: 'Oracle Academy',
      year: 'June 2026',
      link: '',
    },
  ],

  educations: [
    {
      institution: 'Superior University Lahore',
      degree: 'BS Artificial Intelligence (CGPA 3.3)',
      from: '2026',
      to: 'Present',
    },
    {
      institution: 'Intermediate',
      degree: 'Intermediate — 857/1100 (A Grade)',
      from: '2023',
      to: '2025',
    },
    {
      institution: 'Matriculation',
      degree: 'Matriculation — 957/1100 (A+ Grade)',
      from: '2021',
      to: '2023',
    },
  ],

  publications: [
    {
      title: 'Switch-Point Prosody in Urdu-English Code-Switching',
      conferenceName: '',
      journalName: 'Zenodo',
      authors: 'Muhammad Usman',
      link: 'https://doi.org/10.5281/zenodo.23368075',
      description:
        'Research on prosody at language switch points in Urdu-English code-switched speech.',
    },
    {
      title: 'AI Video Ads for Pakistan SMBs',
      conferenceName: '',
      journalName: 'Zenodo',
      authors: 'Muhammad Usman',
      link: 'https://doi.org/10.5281/zenodo.23368307',
      description:
        'How small Pakistani businesses can use generative AI video advertising.',
    },
    {
      title: 'LinkedIn CNIC Verification and Digital Identity in Pakistan',
      conferenceName: '',
      journalName: 'Zenodo',
      authors: 'Muhammad Usman',
      link: 'https://doi.org/10.5281/zenodo.23372052',
      description:
        'A study of identity verification barriers for Pakistani users on LinkedIn.',
    },
    {
      title: 'Node-Level Identity Attention',
      conferenceName: '',
      journalName: 'Zenodo',
      authors: 'Muhammad Usman',
      link: 'https://doi.org/10.5281/zenodo.23376168',
      description:
        'Node-level identity attention for graph representation learning.',
    },
  ],

  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },

  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },

  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },

  themeConfig: {
    defaultTheme: 'dark',

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

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
