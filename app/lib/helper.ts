import ItManagement from "@/public/IT_management.jpg";
import DataBaseSecurity from "@/public/cyber_security.jpg";
import Analytics from "@/public/analytics.jpg";
import WebDev from "@/public/web-dev.jpg";
import SoftwareDev from "@/public/software_dev.jpg";
import ItConsultancy from "@/public/IT_consultancy.jpg";

interface navLinksType {
  link: string;
  linkName: string;
}

export const navLinks: navLinksType[] = [
  {
    link: "/",
    linkName: "Home",
  },
  {
    link: "/about",
    linkName: "About",
  },
  {
    link: "/services",
    linkName: "Services",
  },
  {
    link: "/projects",
    linkName: "Projects",
  },
  {
    link: "/blog",
    linkName: "Blogs",
  },
  {
    link: "/contact",
    linkName: "Contact",
  },
];

export const services = [
  {
    title: "IT Management",
    image: ItManagement,
    description:
      "Neque porro quisquam est qui most dolorem quia enough impedit same quo minus quod and maxime",
  },
  {
    title: "Database Security",
    image: DataBaseSecurity,
    description:
      "Neque porro quisquam est qui most dolorem quia enough impedit same quo minus quod and maxime",
  },
  {
    title: "Analytics Solutions",
    image: Analytics,
    description:
      "Neque porro quisquam est qui most dolorem quia enough impedit same quo minus quod and maxime",
  },
  {
    title: "Web Development",
    image: WebDev,
    description:
      "Neque porro quisquam est qui most dolorem quia enough impedit same quo minus quod and maxime",
  },
  {
    title: "Software Development",
    image: SoftwareDev,
    description:
      "Neque porro quisquam est qui most dolorem quia enough impedit same quo minus quod and maxime",
  },
  {
    title: "IT Consultancy",
    image: ItConsultancy,
    description:
      "Neque porro quisquam est qui most dolorem quia enough impedit same quo minus quod and maxime",
  },
];

export const clientFeedbacks = [
  {
    title: "I just love Optitech!",
    message:
      "Best service for us amd I am very so satisfy with them is the best way a cases perfectly simple and easy",
    author: "Zenefer Smith",
  },
  {
    title: "I just love Optitech!",
    message:
      "Best service for us amd I am very so satisfy with them is the best way a cases perfectly simple and easy",
    author: "Zenefer Smith",
  },
  {
    title: "I just love Optitech!",
    message:
      "Best service for us amd I am very so satisfy with them is the best way a cases perfectly simple and easy",
    author: "Zenefer Smith",
  },
];

export const Blogs = [
  {
    author: "Evans Osei",
    date: "August 12, 2024",
    title: "Everything you need to learn about IT Solution for your Company.",
  },
  {
    author: "Clement Mensah",
    date: "August 12, 2024",
    title:
      "Analytical Solutions lorem ispsum take a trivial example, which of us ever under.",
  },
  {
    author: "Evans Osei",
    date: "August 12, 2024",
    title: "New Technology for System Secutiry to improve secutiry system.",
  },
];
