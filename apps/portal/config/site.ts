export const siteConfig = {
  name: "Employee Manager",
  description: "Manage employees",
  url: process.env.NEXT_PUBLIC_APP_URL,
  apiUrl: process.env.API_URL ?? "http://localhost:1984",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  author: {
    site: "https://murshidazher.com",
  },
  links: {
    github: "https://github.com/murshidazher/employee-manager-ui",
  },
};

export type SiteConfig = typeof siteConfig;
