import applicationsBg from "@public/images/banners/applications-bg.png";
import approvalsBg from "@public/images/banners/approvals-and-associates-bg.png";
import faqBg from "@public/images/banners/faq-bg.png";
import contactBanner from "@public/images/banners/contact-banner.png";
import careersBg from "@public/images/banners/careers-bg.png";
import eLearningBg from "@public/images/banners/e-learning-bg.png";
import designBg from "@public/images/banners/design-bg.png";
import certificationsBg from "@public/images/banners/certifications-and-quality-assurance-bg.png";

export const websiteName="Excel Earthings";
export const dynamicScrollPages = [
    "/",
    "/applications",
    "/products/category",
    "/approvals-and-associates",
    "/faq",
    "/contact-us",
    "/careers",
    "/e-learning",
    "/dealership",
    "/transformer-earthing-design",
    "/applications-details",
    "/certifications-and-quality-assurance",
];

export const bannerData = {
    applications: {
        title: "Applications",
        image: applicationsBg,
    },
    category: {
        title: "Products",
        image: applicationsBg,
    },
    "approvals-and-associates": {
        title: "Approvals & Associates",
        image: approvalsBg,
    },
    faq: {
        title: "Faq",
        image: faqBg,
    },
    "contact-us": {
        title: "Contact Us",
        image: contactBanner,
    },
    careers: {
        title: "Careers",
        image: careersBg,
    },
    "e-learning": {
        title: "E-Learning",
        image: eLearningBg,
    },
    dealership: {
        title: "Dealership",
        image: applicationsBg,
    },
    "transformer-earthing-design": {
        title: "Transformer Earthing Design",
        image: designBg,
    },
    "applications-details": {
        title: "Applications",
        image: applicationsBg,
    },
    "certifications-and-quality-assurance": {
        title: "<i>Certifications &</i> Quality Assurance",
        image: certificationsBg,
    },
    default: {
        title: "Welcome",
        image: applicationsBg,
    }
};

export const menuItems = [
    { title: "Home", href: "/" },
  
    {
      title: "Corporates",
      href: "",
      submenu: [
        { title: "About Us", href: "/about-us" },
        { title: "Certifications & Quality Assurance", href: "/certifications-and-quality-assurance" },
        { title: "Approvals & Associates", href: "/approvals-and-associates" },
      ],
    },
  
    { title: "Products", href: "/products" },
    { title: "Applications", href: "/applications" },
    { title: "Dealership", href: "/dealership" },
    { title: "Design", href: "/transformer-earthing-design" },
    { title: "E-Learning", href: "/e-learning" },
    { title: "Contact Us", href: "/contact-us" },
  ];