type Project = {
    id: string;
    title: string;
    summary: string;
    focus: string;
    tag: string;
    description: string | string[];
    tech: string[];
    github: string;
    demo: string | null;
    image?: { src: string; width: number; height: number };
    visual?: 'neural' | 'mesh';
};

export const PROJECTS: Project[] = [
    {
        id: 'atelier-luchito',
        summary: 'An online shop covering product discovery, checkout, and order management.',
        focus: 'Connecting product variants, customer accounts, and shopping carts with a catalogue and order administration workflow. Convex handles application data and Clerk handles sign in.',
        tag: 'Online shop / React',
        title: 'ATELIER LUCHITO',
        description: [
            'Atelier Luchito is an online shop for Japanese woodworking tools, including saws, chisels, and marking tools. Shoppers can browse the full catalogue or start with a category, then use filters such as price and size to narrow the selection. Product pages give them a place to check the available options before choosing a tool.',
            'The shopping flow covers product selection, cart management, and checkout. Customers can add tools to their cart as guests or sign in to use an account. At checkout they provide their delivery details and can choose cash on delivery.',
            'The shop has a separate administration panel for maintaining the catalogue and managing incoming orders. That gives staff a place to update the products customers see and handle orders after checkout.',
        ],
        tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Convex', 'Clerk'],
        github: 'https://github.com/Balog27/Atelier-Luchiano',
        demo: 'https://atelierluchito.ro/',
        image: { src: '/projects/atelier-luchito.jpg', width: 1600, height: 950 },
    },
    {
        id: 'quietscore',
        summary: 'Making environmental noise data easier to understand when exploring a property.',
        focus: 'Bringing official noise maps into a reproducible PostGIS data pipeline and a bilingual web interface. The platform distinguishes long term modelled noise from live measurements and makes data coverage explicit.',
        tag: 'Geospatial / Full stack',
        title: 'QUIETSCORE',
        description: [
            'QuietScore helps buyers and renters understand what official noise maps say about a property. Starting with Cluj Napoca, it connects an address to the available mapped noise bands and turns those readings into a score that people can use when comparing locations.',
            'The website presents results in English and Romanian and explains the source of the data, what the score represents, and whether the location is covered. The maps describe long term modelled conditions. When the maps lack data for an address, the report shows that gap so a user can distinguish it from a quiet location.',
            'The project also includes a browser extension prototype for looking up an address and reviewing the noise evidence. It gives people a way to check a location while researching properties, with the full report available on the website.',
        ],
        tech: ['React', 'TypeScript', 'Fastify', 'PostgreSQL', 'PostGIS', 'Supabase'],
        github: 'https://github.com/Balog27/QuietScore',
        demo: null,
    },
    {
        id: 'zetta-cars',
        summary: 'Vehicle rentals and airport transfers in one multilingual platform.',
        focus: 'Connecting route distance calculations, dynamic pricing, and administrative controls across a rental and transfer service. Mapbox and Google Maps support the distance calculations.',
        tag: 'Full stack / Next.js',
        title: 'ZETTACARS',
        description: [
            'Zetta Cars brings vehicle rentals and airport transfers together on one multilingual website. For a rental, customers enter their pickup and return dates, times, and locations. They can then see which vehicles are available for that trip and review the price before choosing a car and booking.',
            'Travellers who need a driver can use a separate airport transfer form. The transfer flow takes the pickup and destination into account when working out the route distance and price. This lets customers review the cost of their specific trip before booking.',
            'The platform includes administrative controls for the rental and transfer services, as well as iOS integration. The two booking flows give customers a clear starting point based on whether they need a car for several days or a ride to a destination.',
        ],
        tech: ['Next.js', 'Convex', 'Mapbox', 'Google Maps', 'Resend', 'APIs'],
        github: 'https://github.com/Balog27/Zettacarrental',
        demo: 'https://www.zettacarrental.com/',
        image: { src: '/projects/zetta-cars.png', width: 2880, height: 1530 },
    },
    {
        id: 'chei-cluj',
        summary: 'A local workshop website for key copying, access cards, and knife sharpening.',
        focus: 'Organising services, prices, opening hours, and location details into a clear responsive interface. The React and TypeScript application uses Vite and styled-components, with prerendering for the public pages.',
        tag: 'Business website / React',
        title: 'CHEICLUJ.RO',
        description: [
            'CheiCluj.ro is the website for Master Key & Blade, a workshop in Cluj Napoca that copies keys and access cards and sharpens knives. Visitors can check which types of keys, cards, and knives the workshop handles and see the listed prices before deciding to stop by.',
            'The site brings opening hours, the workshop address, map directions, and common questions together. Someone looking it up on their phone can quickly check whether the workshop is open, what to bring, and how to get there.',
        ],
        tech: ['React', 'TypeScript', 'Vite', 'styled-components', 'React Router'],
        github: 'https://github.com/Balog27/CheiAri',
        demo: 'https://cheicluj.ro/',
        image: { src: '/projects/chei-cluj.jpg', width: 1741, height: 824 },
    },
    {
        id: 'fridge-ai',
        summary: 'Tracking food at home and finding recipes that use what is already available.',
        focus: 'Combining a mobile and web interface with image recognition, inventory tracking, and recipe suggestions based on available ingredients.',
        tag: 'Mobile and web AI app',
        title: 'FRIDGE AI',
        description: 'A mobile and web application for keeping track of food in the fridge. It records ingredients, tracks stock and expiration dates, and uses AI to suggest recipes based on the items available.',
        tech: ['React Native', 'Next.js', 'Python / AI', 'Vercel', 'Convex', 'MapBox', 'ImageRecognition', 'AppleIntegration'],
        github: 'https://github.com/Balog27/licenta',
        demo: 'https://licenta-balog27.vercel.app',
        image: { src: '/projects/fridge-ai.png', width: 1024, height: 1024 },
    },
    {
        id: 'shisha-app',
        summary: 'A mobile shopping and rental experience with order tracking and administration.',
        focus: 'Supporting both customer and administration workflows in React Native, from browsing and ordering to maintaining the product catalogue and tracking order status.',
        tag: 'Mobile / React Native',
        title: 'SHISHA APP',
        description: 'A complete online shop and rental mobile app for shisha enthusiasts, built with React Native and Expo. It includes product browsing with sorting, a shopping cart, order history with live status tracking, user profiles, and an administration panel for catalogue management. The interface uses a sleek dark theme.',
        tech: ['React Native', 'Expo', 'TypeScript', 'React 19'],
        github: 'https://github.com/Balog27/NarghileaShop',
        demo: null,
        visual: 'neural',
    },
    {
        id: 'bike-shop',
        summary: 'A motorbike shop built around search, product browsing, and a shopping cart.',
        focus: 'Building the core online shopping flow with Flask, including filtered product listings, pagination, account authentication, and cart management.',
        tag: 'Online shop / Flask',
        title: 'BIKESHOP',
        description: 'A Flask web application for a motorbike shop with search, filtering, pagination, cart management, and user authentication.',
        tech: ['Python', 'Flask', 'Online shop', 'Auth'],
        github: 'https://github.com/Balog27/bikeShop/tree/correct',
        demo: null,
        visual: 'mesh',
    },
    {
        id: 'youtube-to-spotify',
        summary: 'Moving songs from a YouTube playlist into a Spotify account.',
        focus: 'Connecting the YouTube and Spotify APIs in a Python and Flask application to extract song information and add songs to a Spotify account.',
        tag: 'API / Python',
        title: 'YOUTUBE_TO_SPOTIFY',
        description: 'Extracts song information from YouTube playlists and adds the songs to a Spotify account using Python, Flask, Spotipy, Google APIs, and yt-dlp.',
        tech: ['Python', 'Flask', 'Spotipy', 'yt-dlp'],
        github: 'https://github.com/Balog27/YouTubeToSpotify',
        demo: null,
        visual: 'neural',
    },
];
export const EXPERIENCE = [
    {
        role: 'Junior Developer, C# .NET & Blazor',
        company: 'ArtSoft Consult',
        duration: 'September 2025 to present',
        desc: 'Developing web applications using .NET, Blazor, Entity Framework, MudBlazor and REST APIs. Implementing components, forms, and validation logic for internal tools. Writing clean, maintainable code and participating in code reviews.',
    },
    {
        role: 'Internship, C# .NET & WPF',
        company: 'ArtSoft Consult',
        duration: 'July 2025 to August 2025',
        desc: 'Built desktop application features using C#, .NET, and WPF. Implemented UI components, data bindings, and MVVM patterns. Gained experience with Git workflows, debugging tools, and Agile development.',
    },
];
export const EDUCATION = [
    {
        type: 'degree',
        year: '2023 to present',
        institution: 'Universitatea Babeș-Bolyai Cluj-Napoca',
        title: 'Computer Science',
        desc: 'Actively pursuing a degree in Computer Science with a focus on algorithms, data structures, and software engineering principles.',
    },
    {
        type: 'degree',
        year: '2019 to 2023',
        institution: 'Liceul Teoretic "Avram Iancu", Cluj-Napoca',
        title: 'High School Diploma',
        desc: 'Completed secondary education with a strong foundation in mathematics and sciences.',
    },
];
export const CERTIFICATIONS = [
    {
        issuer: 'HarvardX',
        title: "CS50's Introduction to AI with Python",
        year: 'Completed',
        desc: 'Machine Learning and AI with Python.',
    },
    {
        issuer: 'HarvardX',
        title: "CS50's Introduction to Computer Science",
        year: 'Completed',
        desc: 'Foundations of Computer Science and programming.',
    },
    {
        issuer: 'Oracle Academy',
        title: 'Database Programming with SQL',
        year: 'Completed',
        desc: 'Database programming, querying, and management.',
    },
    {
        issuer: 'Anthropic',
        title: 'Anthropic AI Course',
        year: 'Completed',
        desc: 'Advanced prompt engineering and AI integration concepts.',
    },
];
