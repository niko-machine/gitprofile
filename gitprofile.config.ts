const CONFIG = {
  github: {
    username: 'niko-machine',
  },
  base: '/gitprofile/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'manual',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: ['marialijandra/Library-Management-System', 'niko-machine/azazels-explorer-android', 'realelbowmacaroni/spark-research-idea-generator', 'realelbowmacaroni/gender-reveal', 'niko-machine/sdg13-web'],
      },
    },
    external: {
      header: 'Live Demos',
      projects: [
        {
          title: 'Gender & Society: J.O.J.O Blog',
          description: 'A blog exploring gender and society',
          imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://gender-reveal-hval.onrender.com/',
        },
        {
          title: 'Spark Research Idea Generator',
          description: 'Research idea generation tool',
          imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://spark-frontend-y1mu.onrender.com',
        },
        {
          title: 'SDG 13 Climate Action',
          description: 'Website about climate action',
          imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://shiny-rugelach-38e253.netlify.app/',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Renuel Gonzalves', description: '', imageURL: '' },
  social: {
    linkedin: 'rgisme',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: 'https://drive.google.com/drive/folders/1UURz3tDu864OCLP4jPKviTts5z8IL5er?usp=sharing',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl: '',
  },
  skills: [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Kotlin',
    'Java',
    'JavaEE',
    'Android',
    'C++',
    'C#',
    'GDScript',
    'Git',
    'CSS',
    'Tailwind',
    'Express.js',
  ],
  experiences: [],
  certifications: [],
  educations: [],
  publications: [],
  blog: {
    source: 'dev',
    username: '',
    limit: 2,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
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
  about: `<div class="space-y-6">
  <div>
    <h4 class="text-base font-semibold text-base-content mb-2">What Makes Me Different</h4>
    <p>I don't stay in one lane. Across my coursework and personal projects, I've worked full-stack across Kotlin/Android, Java EE (Servlet/JSP), PHP, and modern JavaScript frameworks (Vue 3, Node/Express) — moving between mobile, web, and backend systems rather than specializing narrowly and stopping there.</p>
    <p class="mt-2">I also default to understanding <em>how</em> something works before reaching for the easy shortcut. When a media-processing feature needed image handling, I replaced a heavier FFmpeg dependency with the native Bitmap API. I'd rather build the correct version of something than the fast version.</p>
  </div>
  <div>
    <h4 class="text-base font-semibold text-base-content mb-2">Engineering Practices</h4>
    <ul class="list-disc list-inside space-y-1">
      <li>Root-cause debugging — verifying issues at the source (e.g., using <code>yt-dlp --dump-json</code> to confirm a malformed URL was the actual cause of a bug, not the backend)</li>
      <li>Iterative, tracked bug-fixing across long project lifecycles, with organized backlogs and staged rollouts</li>
      <li>Clean, purposeful code with minimal decorative commenting; preference for explicit, readable patterns over clever shorthand</li>
      <li>Secrets management and secure config practices (<code>secrets.properties</code> + BuildConfig)</li>
    </ul>
  </div>
  <div>
    <h4 class="text-base font-semibold text-base-content mb-2">Working With AI Tools</h4>
    <p>Experience directing AI coding agents through precise, scoped prompts to execute UI overhauls, bug fixes, and feature builds — treating prompt design as an engineering skill in its own right, not just a shortcut.</p>
  </div>
  <div>
    <h4 class="text-base font-semibold text-base-content mb-2">Product &amp; UX Sense</h4>
    <p>I flag and prioritize real usability issues in my own work — confusing navigation, missing feedback states, redundant UI — and propose concrete, specific fixes (down to exact color values and interaction patterns).</p>
  </div>
  <div>
    <h4 class="text-base font-semibold text-base-content mb-2">Featured Projects</h4>
    <ul class="space-y-3">
      <li><strong>Azazel's File Explorer</strong> — Android file explorer with a Node/Express + Supabase backend, deployed via Docker on Render. Managed a long, iterative bug-fix and feature cycle (navigation, file operations, downloader reliability, UI polish) across many rounds of testing and refinement.</li>
      <li><strong>Spark RIG (Research Idea Generator)</strong> — Vue 3 + Node/Express + Supabase + Gemini-powered research tool. Directed front-end overhauls, mobile responsiveness fixes, and backend feature requests through structured agent prompts, while also contributing directly to research documentation.</li>
      <li><strong>iRECOMMEND</strong> — Kotlin social discovery app (Android) with a Node.js/Supabase backend. Handled backend integration, replaced FFmpeg with native image APIs, built adaptive app icons, and resolved a range of real-world bugs from UI state to API rate limiting.</li>
      <li><strong>Library Management System</strong> — Java EE team project (JSP/Servlet/MySQL); owned the Transactions module, including a mid-project refactor from a JSON/AJAX approach to server-side JSTL rendering.</li>
    </ul>
  </div>
</div>`,
  footer: `Made with <a 
      class="text-primary" href="https://github.com/niko-machine/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
  enablePWA: true,
};

export default CONFIG;
