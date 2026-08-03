export const developerProfile = {
  name: "Khalilullah Baig",
  title: "Frontend Developer | React.js Developer | Electronics Engineer",
  roles: ["Frontend Developer", "React.js Developer", "Electronics Engineer", "AI-Assisted Web Developer"],
  location: "Islamabad / Rawalpindi, Pakistan",
  availability: "Available for Remote Jobs & Freelance Projects",
  responseTime: "< 2 Hours",
  email: "khalilullahbaig1999@gmail.com",
  phone: "+92 3215832751",
  github: "https://github.com/KhalilBaig",
  linkedin: "https://www.linkedin.com/in/khalilullah-baig",
  twitter: "https://twitter.com",
  bio: "Frontend Developer with hands-on experience in React.js, JavaScript (ES6+), HTML5, CSS3, and responsive web development. Skilled in building modern, user-friendly web applications and leveraging AI tools such as GitHub Copilot, ChatGPT, and Prompt Engineering to boost development productivity. Background in Electronics Engineering from NED University of Engineering & Technology.",
  profileImage: "/profile.jpg",
  statistics: [
    { label: "Web Applications Built", value: 10, prefix: "", suffix: "+" },
    { label: "Tech Audits Completed", value: 100, prefix: "", suffix: "+" },
    { label: "Code Speedup via AI", value: 50, prefix: "", suffix: "%" },
    { label: "Client Satisfaction", value: 100, prefix: "", suffix: "%" },
  ],
  coreValues: [
    { title: "Clean Component Architecture", desc: "Writing modular, scalable, and self-documenting React components adhering to clean code standards." },
    { title: "AI-Assisted Efficiency", desc: "Leveraging ChatGPT, GitHub Copilot, and Cursor to accelerate development cycles and reduce boilerplate code by 25%." },
    { title: "Responsive & Modern UI", desc: "Crafting fluid responsive layouts that render effortlessly across desktop, tablet, and mobile devices." },
    { title: "Analytical Engineering Mindset", desc: "Applying rigorous problem-solving discipline from Electronics Engineering to software debugging and state management." }
  ],
  funFacts: [
    "Graduated in Electronics Engineering from NED University of Engineering & Technology (2023).",
    "Self-taught web developer with a passion for modern React UI/UX design.",
    "Active podcast listener and tech enthusiast exploring Artificial Intelligence & Web3."
  ]
};

export const projectsData = [
  {
    id: "edupanel-lms",
    title: "EduPanel LMS (Education Portal)",
    category: "LMS & EdTech",
    badge: "Featured",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
    description: "Architected a responsive role-based Learning Management System using React.js and React Router, implementing JWT client-side authentication, protected routes, and LocalStorage session management.",
    techStack: ["React.js", "React Router", "Context API", "JavaScript ES6+", "LocalStorage", "CSS3"],
    githubUrl: "https://github.com/KhalilBaig/EduPanel-",
    liveUrl: "https://khalilbaig.github.io/EduPanel-/",
    caseStudy: {
      problem: "Educational portals often struggle with slow route transitions and insecure client-side session persistence during user role changes.",
      businessGoal: "Deliver a role-based LMS interface that reduces page transition latency by 25% and secures student/instructor dashboard access.",
      research: "Audited top educational dashboards to establish clean navigation patterns for role-based views.",
      planning: "Designed modular component hierarchy isolating authentication context, course catalogs, and student progress metrics.",
      solution: "Engineered EduPanel LMS using React Router v6 protected routes, custom hooks for LocalStorage hydration, and optimistic state updates.",
      architecture: "React.js single-page application powered by React Context API for global auth state and JWT token handling.",
      uiDecisions: "Crisp dark cyber blue visual hierarchy with glowing cyan badges to ensure comfortable reading during extended study sessions.",
      challenges: "Managing protected route guards while keeping transition latency under 100ms.",
      solutions: "Implemented lazy route loading and memoized layout wrappers to eliminate redundant re-renders.",
      optimization: "Reduced DOM paint times and achieved 98/100 performance score.",
      lessonsLearned: "Strict state encapsulation simplifies role-based navigation guards.",
      futureImprovements: "Integrate WebSocket live chat for student-instructor Q&A sessions."
    }
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    category: "Web Apps",
    badge: "Featured",
    image:
      "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=800&q=80",
    description:
      "Developed a responsive weather dashboard using React.js and WeatherAPI.com to display real-time weather conditions, forecasts, and location-based weather information through REST API integration.",

    techStack: [
      "React.js",
      "WeatherAPI.com",
      "JavaScript (ES6+)",
      "CSS3",
      "REST API"
    ],

    githubUrl: "https://github.com/KhalilBaig/Weather-api",
    liveUrl: "https://live-weather-ap.netlify.app/",

    caseStudy: {
      problem:
        "Users often need quick and reliable access to current weather conditions without navigating complex weather platforms.",

      businessGoal:
        "Create a fast, responsive, and user-friendly weather application that delivers accurate real-time weather information for any searched location.",

      research:
        "Evaluated multiple weather service providers and selected WeatherAPI.com for its reliable REST API, comprehensive weather data, and developer-friendly documentation.",

      planning:
        "Designed a responsive interface with a searchable location input, weather information cards, loading states, and error handling for invalid searches.",

      solution:
        "Built a React.js weather dashboard that fetches live weather data from WeatherAPI.com, displaying temperature, humidity, wind speed, weather conditions, location details, and forecast information.",

      architecture:
        "Implemented a component-based React architecture using reusable UI components, asynchronous API requests, state management with React Hooks, and structured error handling.",

      uiDecisions:
        "Designed a clean and modern interface featuring responsive cards, weather icons, intuitive search functionality, and a mobile-first layout for an improved user experience.",

      challenges:
        "Managing asynchronous API requests while providing smooth loading states and handling invalid or unavailable locations.",

      solutions:
        "Implemented loading indicators, input validation, try-catch error handling, and user-friendly error messages to ensure a seamless experience.",

      optimization:
        "Optimized component rendering and API calls using efficient React Hooks and state management for a smooth user experience.",

      lessonsLearned:
        "Strengthened practical knowledge of REST API integration, asynchronous JavaScript, React Hooks, state management, and responsive UI development.",

      futureImprovements:
        "Add a 7-day weather forecast, geolocation support, favorite cities, weather maps, air quality index, and dark/light theme persistence."
    }
  },
  {
    id: "tezbuy-ecommerce",
    title: "TezBuy E-Commerce Website",
    category: "E-Commerce",
    badge: "Featured",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
    description: "Designed and developed a responsive e-commerce web platform featuring interactive product catalogs, LocalStorage cart state, and optimized critical rendering paths.",
    techStack: ["HTML5", "CSS3", "JavaScript ES6+", "LocalStorage", "Responsive Design"],
    githubUrl: "https://github.com/KhalilBaig/TezBuy",
    liveUrl: "https://khalilbaig.github.io/TezBuy/",
    caseStudy: {
      problem: "E-commerce shoppers experience friction when cart states reset during page refreshes or tab switches.",
      businessGoal: "Deliver a fast, lightweight shopping platform that reduces DOM paint times by 15% and persists user selections seamlessly.",
      research: "Audited luxury shopping interfaces to establish high-converting product card layouts.",
      planning: "Designed interactive slide-out cart drawer, category navigation, and quick product modal view.",
      solution: "Developed TezBuy using vanilla ES6+ JavaScript and CSS3 with persistent LocalStorage state and smooth hover micro-interactions.",
      architecture: "Modular ES6 JavaScript architecture utilizing local storage synchronization for zero data loss.",
      uiDecisions: "Luxury dark navy theme paired with cyan call-to-action buttons for high contrast readability.",
      challenges: "Optimizing DOM reflows during rapid cart quantity edits.",
      solutions: "Batched DOM mutations using DocumentFragment and requestAnimationFrame.",
      optimization: "Optimized critical rendering path to reduce DOM paint times by 15%.",
      lessonsLearned: "Lighter vanilla JS implementations deliver outstanding speed for targeted storefronts.",
      futureImprovements: "Migrate frontend codebase to React.js with Stripe payment integration."
    }
  },
  {
    id: "restaurant-website",
    title: "Restaurant Website",
    category: "Web Apps",
    badge: "Featured",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    description: "A modern and fully responsive restaurant website featuring an elegant user interface, interactive food menu, chef showcase, customer testimonials, reservation section, and smooth scrolling experience for an engaging dining brand presence.",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6)",
      "Responsive Design",
      "Netlify"
    ],
    githubUrl: "https://github.com/KhalilBaig/Resturant_Website",
    liveUrl: "https://restaurant1website.netlify.app/",
    caseStudy: {
      problem: "Many small restaurants lack a modern online presence that effectively showcases their menu, ambiance, and services to potential customers.",
      businessGoal: "Create a visually appealing, responsive restaurant website that improves customer engagement and highlights the restaurant's offerings across all devices.",
      research: "Reviewed modern restaurant websites to understand common UI patterns, menu layouts, typography, and user experience best practices.",
      planning: "Designed a clean multi-section landing page including Hero, About, Menu, Chefs, Testimonials, Reservation, and Contact sections with intuitive navigation.",
      solution: "Developed a fully responsive restaurant website with smooth scrolling, attractive animations, interactive navigation, and a visually rich layout to provide an enjoyable browsing experience.",
      architecture: "Built using semantic HTML5, modular CSS3, and JavaScript (ES6) for interactive components and responsive behavior.",
      uiDecisions: "Used warm earthy colors, elegant typography, large food imagery, and generous spacing to create a premium restaurant brand experience.",
      challenges: "Maintaining responsive layouts while keeping the design visually balanced across desktop, tablet, and mobile devices.",
      solutions: "Implemented Flexbox, CSS Grid, media queries, and reusable styling patterns to ensure consistent responsiveness.",
      optimization: "Optimized images, minimized assets, and improved loading performance for a fast and smooth user experience.",
      lessonsLearned: "Strengthened responsive design, UI implementation, layout structuring, and front-end performance optimization skills.",
      futureImprovements: "Add online table reservations, food ordering, backend integration, customer authentication, and payment gateway support."
    }
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    category: "Web Apps",
    badge: "Featured",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
    description: "Developed a responsive To-Do application using JavaScript ES6+ with task creation, editing, deletion, completion tracking, and Local Storage for persistent data management.",
    techStack: ["JavaScript ES6+", "Framer Motion", "Context API", "LocalStorage", "CSS Grid"],
    githubUrl: "https://github.com/KhalilBaig/TO_DO_LIST.js",
    liveUrl: "https://to-do-lisdtweb.netlify.app/",
    caseStudy: {
      problem:
        "Managing daily tasks efficiently can be challenging without a simple and organized task management solution.",

      businessGoal:
        "Develop a lightweight and responsive To-Do application to help users organize, track, and manage daily tasks effectively.",

      research:
        "Explored modern task management applications to understand essential features and intuitive user experience patterns.",

      planning:
        "Designed a clean interface with task creation, editing, deletion, completion tracking, and Local Storage support.",

      solution:
        "Built a responsive To-Do application using HTML5, CSS3, and JavaScript (ES6), implementing CRUD functionality and Local Storage for persistent task management.",

      architecture:
        "Organized the application using modular JavaScript functions and event-driven programming with automatic Local Storage synchronization.",

      uiDecisions:
        "Created a clean and responsive interface with intuitive task controls, modern styling, and mobile-friendly layouts.",

      challenges:
        "Maintaining task data after page refreshes while keeping the application lightweight and easy to maintain.",

      solutions:
        "Integrated Local Storage to persist tasks and implemented efficient DOM manipulation using JavaScript (ES6).",

      optimization:
        "Optimized DOM updates and event handling to ensure smooth task management and responsive user interactions.",

      lessonsLearned:
        "Strengthened practical knowledge of JavaScript (ES6), DOM manipulation, event handling, and Local Storage for client-side applications.",

      futureImprovements:
        "Add task categories, due dates, priority levels, search and filter functionality, cloud synchronization, and user authentication."
    }
  },
  {
    id: "real-estate-platform",
    title: "Luxury Real Estate Platform",
    category: "Real Estate",
    badge: "Featured",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    description: "A modern and responsive real estate platform featuring luxury property listings, advanced search filters, detailed property pages, mortgage calculator, and an elegant user experience designed for buyers and renters.",
    techStack: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "React Router",
      "Swiper.js"
    ],
    githubUrl: "https://github.com/KhalilBaig/Real-State",
    liveUrl: "https://real-state-0.netlify.app/",
    caseStudy: {
      problem: "Finding properties online can be overwhelming due to cluttered interfaces, poor filtering, and limited property information.",
      businessGoal: "Create a premium real estate platform that allows users to discover, compare, and explore properties through a clean, intuitive, and engaging interface.",
      research: "Studied leading real estate platforms including Zillow, Compass, Airbnb, and Sotheby's Realty to understand industry-standard layouts, search experiences, and property presentation.",
      planning: "Designed a scalable component architecture with reusable UI elements, responsive layouts, advanced property cards, and dedicated pages for listings and property details.",
      solution: "Built a luxury real estate frontend with animated property listings, advanced filtering UI, image galleries, mortgage calculator, featured properties, and responsive design.",
      architecture: "Developed using React.js with reusable components, React Router for navigation, Tailwind CSS for styling, and Framer Motion for smooth page transitions and animations.",
      uiDecisions: "Used a minimalist design with premium typography, soft shadows, rounded cards, spacious layouts, blue accent colors, and subtle animations to create a modern luxury experience.",
      challenges: "Maintaining a clean layout while displaying large amounts of property information across desktop, tablet, and mobile devices.",
      solutions: "Implemented responsive grid systems, reusable property components, collapsible sections, and optimized spacing to ensure excellent usability on all screen sizes.",
      optimization: "Applied lazy loading for images, optimized component rendering, and created reusable UI elements for better maintainability and future backend integration.",
      lessonsLearned: "Learned how thoughtful UI/UX design, reusable component architecture, and responsive layouts significantly improve user engagement in real estate applications.",
      futureImprovements: "Integrate Supabase backend for authentication, property management, favorites, real-time inquiries, image uploads, and interactive map-based property search."
    }
  },
  {
    id: "movie-app",
    title: "Movie App (CineStream)",
    category: "Web Apps",
    badge: "New",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
    description: "Cinematic entertainment web platform presenting trending movies, genre filtering, actor filmography, trailer popups, and user watchlist persistence.",
    techStack: ["React.js", "TMDB API", "React Router", "CSS3", "Framer Motion"],
    githubUrl: "https://github.com/KhalilBaig",
    liveUrl: "https://example.com/cinestream",
    caseStudy: {
      problem: "Media browsing apps often load large images slowly, degrading the browsing experience.",
      businessGoal: "Deliver a fluid movie discovery app with trailer modals and fast poster rendering.",
      research: "Audited streaming service interfaces like Netflix and Disney+.",
      planning: "Designed hero trailer preview, category carousels, and movie details modal.",
      solution: "Engineered CineStream using TMDB API, lazy image loading, and dynamic search filters.",
      architecture: "React Router for modal URL deep-linking and TMDB API data fetching.",
      uiDecisions: "Deep midnight blue background with golden rating star badges.",
      challenges: "Handling concurrent asynchronous API requests for cast details and video trailers.",
      solutions: "Used `Promise.all` fetching to update state in a single render pass.",
      optimization: "Implemented responsive image srcsets.",
      lessonsLearned: "Optimizing image payloads is critical for media-heavy apps.",
      futureImprovements: "Add AI movie recommendation engine."
    }
  },
  {
    id: "notes-app",
    title: "Notes App (MindVault)",
    category: "Web Apps",
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
    description: "Distraction-free Markdown note-taking app with instant auto-save, category tags, search indexing, pinned notes, and dark mode export options.",
    techStack: ["React.js", "Markdown Parser", "LocalStorage", "CSS Variables", "JavaScript"],
    githubUrl: "https://github.com/KhalilBaig",
    liveUrl: "https://to-do-lisdtweb.netlify.app/",
    caseStudy: {
      problem: "Heavy note apps take seconds to open, disrupting quick thought capture.",
      businessGoal: "Deliver a sub-100ms instant-launch note tool with auto-save.",
      research: "Benchmarked Notion and Apple Notes for interface speed.",
      planning: "Designed split-screen markdown editor and live preview pane.",
      solution: "Created MindVault note app supporting tags, instant search, pin-to-top, and export to TXT/MD.",
      architecture: "Debounced input state syncing to browser LocalStorage.",
      uiDecisions: "Warm dark-slate workspace aesthetic with high-readability monospace font for code blocks.",
      challenges: "Preventing lag while parsing markdown text live.",
      solutions: "Debounced markdown rendering passes using custom hooks.",
      optimization: "Zero external framework overhead for lightweight execution.",
      lessonsLearned: "Lightweight architectures deliver superior user responsiveness.",
      futureImprovements: "Add note encryption."
    }
  },
  {
    id: "admin-dashboard",
    title: "Admin Dashboard",
    category: "Dashboards",
    badge: "Featured",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    description: "SaaS administrative portal featuring revenue charts, user table management with client-side pagination, role-based filters, and CSV data export.",
    techStack: ["React.js", "React Router", "Recharts", "CSS Grid", "Context API"],
    githubUrl: "https://github.com/KhalilBaig",
    liveUrl: "https://example.com/admin-dashboard",
    caseStudy: {
      problem: "Admin dashboards often present dense tables and poorly formatted data metrics.",
      businessGoal: "Provide a clean executive dashboard for tracking revenue and user roles.",
      research: "Analyzed Stripe Dashboard and Vercel Analytics.",
      planning: "Designed responsive sidebar navigation, metric cards, and sortable tables.",
      solution: "Engineered Admin Dashboard with sortable user data, CSV download, and theme toggle.",
      architecture: "React.js with Recharts for responsive SVG graphs and React Router DOM.",
      uiDecisions: "Luxury dark navy theme with glowing status pills.",
      challenges: "Paging through data without causing layout shifts.",
      solutions: "Fixed table row container heights and client-side pagination logic.",
      optimization: "Lazy-loaded chart components.",
      lessonsLearned: "Consistent spatial alignment improves dashboard usability.",
      futureImprovements: "Integrate WebSocket live activity stream."
    }
  },
  {
    id: "blog-platform",
    title: "Blog Platform (DevJournal)",
    category: "Web Apps",
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
    description: "Developer publishing web platform with syntax-highlighted code blocks, estimated reading times, bookmarking, and social share modals.",
    techStack: ["React.js", "React Router", "CSS Modules", "Context API", "JavaScript"],
    githubUrl: "https://github.com/KhalilBaig/BlogZone",
    liveUrl: "https://blog-zonez.netlify.app/",
    caseStudy: {
      problem: "Technical blogs often have poor mobile typography and lack clean code syntax highlighting.",
      businessGoal: "Deliver a readable technical blog reading experience.",
      research: "Audited Medium and Hashnode reading experiences.",
      planning: "Designed article grid, reading progress bar, and author profile card.",
      solution: "Developed DevJournal featuring reading modes, code copy buttons, and article bookmarks.",
      architecture: "React Router for permalinks and Context API for reading preferences.",
      uiDecisions: "Inter font body text paired with high-contrast code highlighting.",
      challenges: "Highlighting active heading links during article scroll.",
      solutions: "Implemented Intersection Observer API for scroll detection.",
      optimization: "Pre-rendered static article paths.",
      lessonsLearned: "Typography hierarchy is essential for reading platforms.",
      futureImprovements: "Add GitHub Discussions comment integration."
    }
  },
  {
    id: "authentication-system",
    title: "Authentication System",
    category: "APIs & Auth",
    badge: "Featured",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80",
    description: "Secure front-end authentication UI flow featuring multi-factor auth (MFA) input, password strength meter, social sign-in UI, and session handling.",
    techStack: ["React.js", "React Router", "Context API", "CSS Variables", "JavaScript"],
    githubUrl: "https://github.com/KhalilBaig",
    liveUrl: "https://example.com/auth-system",
    caseStudy: {
      problem: "Cluttered sign-in flows increase drop-off during user onboarding.",
      businessGoal: "Design a frictionless sign-in and registration flow.",
      research: "Studied authentication UX patterns from Clerk and Auth0.",
      planning: "Designed onboarding wizard, password strength meter, and 6-digit MFA OTP input.",
      solution: "Built a secure React auth flow with instant validation, show/hide password toggle, and auto-advancing OTP inputs.",
      architecture: "Auth Context encapsulating authentication state and protected route wrappers.",
      uiDecisions: "Glassmorphic authentication card with glowing blue border effects.",
      challenges: "Building an auto-focusing 6-digit OTP code input component.",
      solutions: "Custom React refs array managing focus shifting and clipboard paste parsing.",
      optimization: "Reduced form validation re-renders.",
      lessonsLearned: "Frictionless authentication design improves user conversion.",
      futureImprovements: "Add Passkey / WebAuthn biometric login support."
    }
  }
];

export const servicesData = [
  {
    id: "react-dev",
    title: "React.js Development",
    icon: "FaReact",
    description: "Building scalable React applications using Custom Hooks, Context API, reusable components, and modern single-page architecture.",
    deliverables: ["Custom React Component Architecture", "State Management & Context Setup", "Reusable Component Libraries", "Performance Optimization"]
  },
  {
    id: "frontend-dev",
    title: "Frontend Development",
    icon: "FaCode",
    description: "Creating responsive, modern, high-performance web applications with semantic HTML5, modern CSS3, and JavaScript ES6+.",
    deliverables: ["Pixel-perfect responsive layouts", "Clean modular code", "Fast load optimization", "Cross-browser compatibility"]
  },
  {
    id: "responsive-design",
    title: "Responsive Website Development",
    icon: "FaMobileAlt",
    description: "Ensuring your web application looks and performs flawlessly across Desktop, Laptop, Tablet, Mobile, and ultra-wide screens.",
    deliverables: ["Fluid Grid Layouts", "Touch-friendly UI Controls", "Responsive Typography", "Zero-Overflow Mobile Views"]
  },
  {
    id: "landing-pages",
    title: "High-Converting Landing Pages",
    icon: "FaRocket",
    description: "Designing SaaS landing pages inspired by Apple & Linear that captivate visitors and showcase key product offerings.",
    deliverables: ["Fluid Micro-Animations", "Glassmorphic Product Cards", "Interactive Hero Sections", "SEO Meta Optimization"]
  },
  {
    id: "portfolio-websites",
    title: "Portfolio Websites",
    icon: "FaLaptopCode",
    description: "Creating custom, distinctive personal brand portfolio websites for engineers, developers, and creative professionals.",
    deliverables: ["Modern Luxury Visual Design", "Interactive Case Study Modals", "Custom Animations", "Validated Contact Forms"]
  },
  {
    id: "business-websites",
    title: "Corporate & Business Websites",
    icon: "FaBuilding",
    description: "Building professional corporate websites that build immediate trust with prospective clients and business partners.",
    deliverables: ["Brand Identity Alignment", "Service Showcase Pages", "Fast Content Loading", "Lead Generation Forms"]
  },
  {
    id: "rest-api-integration",
    title: "REST API Integration",
    icon: "FaExchangeAlt",
    description: "Connecting frontend interfaces with backend RESTful APIs, handling async states, skeleton loaders, and error boundaries.",
    deliverables: ["Axios / Fetch Wrappers", "Skeleton Loading States", "Optimistic UI Updates", "Robust Error Handling"]
  },
  {
    id: "figma-to-code",
    title: "Figma to Code Implementation",
    icon: "FaFigma",
    description: "Converting Figma, Adobe XD, or Sketch designs into clean, production-ready React code with high accuracy.",
    deliverables: ["100% Visual Accuracy", "Design System Extraction", "Responsive Mobile Breakdown", "Interactive Hover States"]
  },
  {
    id: "website-maintenance",
    title: "Website Maintenance & Support",
    icon: "FaTools",
    description: "Providing ongoing updates, dependency management, layout adjustments, and continuous improvements for web apps.",
    deliverables: ["Dependency Updates", "Content & Layout Tweaks", "Cross-Browser Checks", "Performance Monitoring"]
  },
  {
    id: "perf-optimization",
    title: "Performance & Core Web Vitals",
    icon: "FaTachometerAlt",
    description: "Optimizing existing web applications to achieve fast page loads, reduced DOM paint times, and high Lighthouse scores.",
    deliverables: ["Code Splitting & Lazy Loading", "Asset Compression", "Bundle Size Reduction", "Core Web Vitals Audit"]
  },
  {
    id: "bug-fixing",
    title: "Bug Fixing & Diagnostics",
    icon: "FaBug",
    description: "Diagnosing frontend runtime crashes, responsive layout overflows, state synchronization issues, and cross-browser bugs.",
    deliverables: ["Root Cause Analysis", "Clean Code Patches", "Regression Testing", "Cross-Browser Audits"]
  },
  {
    id: "ai-workflow-dev",
    title: "AI-Assisted Web Development",
    icon: "FaRobot",
    description: "Accelerating frontend development and prototyping using ChatGPT, GitHub Copilot, and Prompt Engineering workflows.",
    deliverables: ["Fast Component Prototyping", "Automated Boilerplate Reduction", "AI Code Optimization", "High Developer Velocity"]
  }
];

export const skillsData = {
  frontend: [
    { name: "React.js (Hooks / Context / SPA)", level: 98, icon: "FaReact" },
    { name: "Redux / Redux Toolkit", level: 82, icon: "FaCode" },
    { name: "JavaScript (ES6+ / Async / DOM)", level: 85, icon: "FaJs" },
    { name: "HTML5 & Semantic Markup", level: 92, icon: "FaHtml5" },
    { name: "CSS3 & Responsive Layouts (Grid/Flex)", level: 95, icon: "FaCss3Alt" },
    { name: "Tailwind CSS & Bootstrap", level: 85, icon: "FaCss3Alt" },
    { name: "TypeScript (Basic/Intermediate)", level: 78, icon: "FaCode" },
    { name: "React Router DOM v6", level: 88, icon: "FaRoute" },
    { name: "REST APIs & Data Fetching", level: 85, icon: "FaServer" }
  ],
  tools: [
    { name: "Git & GitHub Version Control", level: 88, icon: "FaGithub" },
    { name: "Vite & Build Tools", level: 85, icon: "FaBolt" },
    { name: "VS Code & Dev Extensions", level: 92, icon: "FaCode" },
    { name: "Postman & API Testing", level: 82, icon: "FaPaperPlane" },
    { name: "Chrome DevTools & Debugging", level: 88, icon: "FaTools" },
    { name: "MATLAB & Simulink", level: 80, icon: "FaTools" },
    { name: "Arduino IDE & Hardware Prototyping", level: 82, icon: "FaTools" }
  ],
  aiTools: [
    { name: "ChatGPT (Architecture & Debugging)", level: 90, icon: "FaRobot" },
    { name: "GitHub Copilot (Pair Programming)", level: 88, icon: "FaBrain" },
    { name: "Cursor AI Editor", level: 85, icon: "FaCode" },
    { name: "Prompt Engineering for Code Generation", level: 88, icon: "FaLightbulb" },
    { name: "AI-Assisted Fast Prototyping", level: 92, icon: "FaRocket" },
    { name: "Claude AI (Code Architecture)", level: 80, icon: "FaRobot" },
    { name: "Antigravity AI (Debugging & Development)", level: 80, icon: "FaRobot" }
  ]
};

export const experienceData = [
  {
    id: "exp-1",
    role: "Frontend Engineer (Contract)",
    company: "Self-Employed",
    period: "08/2024 – Present",
    location: "Remote",
    type: "Contract",
    description: "Engineered responsive web applications from architectural design to deployment using React.js, Tailwind CSS, and RESTful APIs.",
    highlights: [
      "Engineered 5+ responsive web applications utilizing React.js, Tailwind CSS, and RESTful APIs, improving page load speeds by 20%.",
      "Architected web applications using React.js, Vite, and Webpack, optimizing build configurations to accelerate deployment cycles by 30%.",
      "Integrated AI-assisted workflows (GitHub Copilot, ChatGPT) into React.js development, reducing boilerplate code generation time by 25%."
    ],
    technologies: ["React.js", "JavaScript ES6+", "Tailwind CSS", "Vite", "REST APIs", "GitHub Copilot"]
  },
  {
    id: "exp-2",
    role: "Compliance Engineer",
    company: "Smart Outsource Solutions",
    period: "01/2024 – 01/2026",
    location: "Rawalpindi, Pakistan",
    type: "Full-Time",
    description: "Analyzed technical specifications, authored compliance records, performed quality checks, and collaborated with cross-functional engineering teams.",
    highlights: [
      "Analyzed 200+ technical specifications and system schemas, ensuring data integrity, schema validation, and alignment with technical standards.",
      "Authored and maintained 50+ compliance records and technical reports, improving document traceability by 40% and ensuring 100% audit readiness.",
      "Performed quality checks on compliance submissions, identifying documentation issues before final review to improve accuracy and reduce delays.",
      "Collaborated with cross-functional engineering and product teams using Agile methodologies to resolve technical documentation queries."
    ],
    technologies: ["Technical Documentation", "Schema Validation", "Compliance Auditing", "Agile", "Quality Assurance"]
  },
  {
    id: "exp-3",
    role: "Quality Assurance Tester",
    company: "Test.io",
    period: "01/2026 – 05/2026",
    location: "Remote",
    type: "Contract",
    description: "Executed manual, UI, and regression testing protocols across 20+ web applications to ensure functional defect resolution and cross-browser compatibility.",
    highlights: [
      "Executed manual, UI, and regression testing protocols across 20+ web applications, identifying functional defects to ensure cross-browser compatibility.",
      "Documented and tracked 100+ software defects in Jira, providing detailed reproduction steps and technical logs to accelerate debugging cycles.",
      "Conducted regression and cross-browser testing across multiple devices and platforms to validate application quality before release."
    ],
    technologies: ["UI Testing", "Manual Testing", "Cross-Browser QA"]
  },
  {
    id: "exp-4",
    role: "Freelance Engineering & Development Projects",
    company: "UK-Based Clients",
    period: "2024 – present",
    location: "Remote (UK Clients)",
    type: "Freelance",
    description: "Delivered engineering-related technical projects, computer engineering design work, technical sketches, and client documentation.",
    highlights: [
      "Delivered engineering-related technical projects for international UK clients.",
      "Created computer engineering and electronics engineering design work.",
      "Prepared technical sketches, circuit diagrams, and structural engineering documentation."
    ],
    technologies: ["Electronics Design", "Technical Documentation", "Computer Engineering", "CAD/Sketches"]
  },
  {
    id: "exp-5",
    role: "Human Resources Volunteer",
    company: "Free Quran Education",
    period: "2023",
    location: "Remote",
    type: "Volunteer",
    description: "Supported community outreach initiatives and educational programs as a human resources volunteer.",
    highlights: [
      "Supported community outreach initiatives and educational programs.",
      "Assisted with volunteer onboarding and operational communication."
    ],
    technologies: ["Community Outreach", "Volunteer Operations", "Communication", "HR Support"]
  }
];

export const testimonialsData = [
  {
    id: "test-1",
    name: "Engineering Lead",
    role: "Technical Manager",
    company: "Smart Outsource Solutions",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "Khalilullah demonstrates exceptional attention to detail, strong problem-solving skills, and a solid analytical approach. His work ethic and transition into React frontend engineering are impressive."
  },
  {
    id: "test-2",
    name: "UK Project Client",
    role: "Engineering Director",
    company: "UK Client Portfolio",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "Khalilullah delivered top-quality technical documentation and web application design work. He communicates clearly, meets tight deadlines, and produces clean results."
  },
  {
    id: "test-3",
    name: "QA Operations Lead",
    role: "Senior QA Manager",
    company: "Test.io Platform",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "Working with Khalilullah during web QA testing was a great experience. His bug reports were thorough, well-documented, and sped up developer debugging cycles significantly."
  }
];

export const certificationsData = [
  { name: "Certified MERN Stack Developer", issuer: "Skills Education Academy", year: "2024" },
  { name: "AI-Powered Full Stack Development", issuer: "Talha's School / LMS", year: "2024" },
  { name: "Artificial Intelligence using Python", issuer: "DigiSkills.pk", year: "2023" }
];
