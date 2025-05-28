// This file contains the site settings and configuration for Mark Rondina's personal portfolio.
// It includes basic information, branding, navigation, social links, and section titles.
export const siteSettings = {
    // Basic site information
    title: "Mark Rondina's Personal Portfolio",
    description: "the personal and professional work of Mark Rondina",
    url: "https://markrondina.com",
    author: "Mark Rondina",

    // Branding
    logo: "/images/logo.png",
    logoDark: "/images/logo-dark.svg",
    colorScheme: "auto", // 'auto', 'light', or 'dark'

    // Hero Section
    hero: {
        enable: true,
        title: "Mark Rondina",
        subtitle: "Product & Design Leader",
        description: "I'm Mark, an experience design and product leader with over 15 years of experience. I seek to build and transform teams to realize customer-centered design that solve real problems.",
        image: "/images/knoll-4.png",
        buttonContact: "Get In Touch",
        buttonAbout: "About Me",
    },

    // Navigation
    navigation: [
        { title: "Home", url: "/" },
        { title: "About", url: "/about" },
        { title: "Contact", url: "/contact" },
    ],

    // Social Links
    social: [
        { icon: "linkedin", url: "https://www.linkedin.com/in/mrondina/" },
        { icon: "github", url: "https://github.com/mrondina" },
        { icon: "instagram", url: "https://www.instagram.com/mrondina/" },
        { icon: "dribbble", url: "https://dribbble.com/mrondina" },
    ],

    // Section titles
    sections: {
        projects: "Selected Work",
        testimonals: "Recommendations",
        blog: "Read Lastest Posts",
        tags: "Explore Topics",
    },
} as const;