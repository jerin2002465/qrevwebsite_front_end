import {
  RiPhoneFill,
  RiMailSendFill,
  RiUserLocationLine,
  RiFacebookBoxFill,
  RiTwitterFill,
  RiLinkedinFill,
  RiInstagramFill,
} from "@remixicon/react";

export const navItems = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "About Us",
    href: "/about",
  },
  {
    id: 3,
    label: "Services",
    href: "/services",
  },
];

export const heroLogos = [
  {
    id: 1,
    item: "/images/logo-1.png",
    width: 56,
  },
  {
    id: 2,
    item: "/images/logo-2.png",
    width: 82,
  },
  {
    id: 3,
    item: "/images/logo-3.png",
    width: 57,
  },
  {
    id: 4,
    item: "/images/logo-4.png",
    width: 64,
  },
  {
    id: 5,
    item: "/images/logo-5.png",
    width: 78,
  },
  {
    id: 6,
    item: "/images/logo-6.png",
    width: 75,
  },
  {
    id: 7,
    item: "/images/logo-7.png",
    width: 65,
  },
];

export const benefitItems = [
  {
    id: 1,
    icon: "/images/icon-1.png",
    title: "Accounts Receivables",
    text: "With professional accounts receivables management, QREV assists you in reaching your financial objectives.",
  },
  {
    id: 2,
    icon: "/images/icon-2.png",
    title: "Customer Care",
    text: "From our own experience, we have learned that knowledgeable, friendly call center service can improve the customer perception for any companyt.",
  },
  {
    id: 3,
    icon: "/images/icon-3.png",
    title: "What we do!",
    text: "Customer Service/Consulting,Help Desk, Order Acceptance, Additional Sales (Cross- & Upsell), Complaints Management, Service for Retail Partner.",
  },
];

import OperationImg from "../images/services_images/operational.jpg";
import AdmimniImg from "../images/services_images/admini.jpg";
import SalesImg from "../images/services_images/sales.jpg";
import RevenueImg from "../images/services_images/revenue.jpg";
import SoftwareImg from "../images/services_images/software.jpg";

export const coursesSecItems = [
  {
    id: 1,
    img: OperationImg,
    title: "Mobile App Development",
    text: "QREV Business Solutions drives business transformation by aligning structures, operations, and culture with your mission and strategy. We support you at every level to unlock lasting growth",
    instructor: "Operational Efficiency Boosting",
    tags: [{ tag: "8 Weeks" }, { tag: "Intermediate" }],
  },
  {
    id: 2,
    img: AdmimniImg,
    title: "Front-End Web Development",
    text: "Streamline your operations with our expert administrative services. QREV Business Solutions ensures efficiency, accuracy, and hassle-free management.",
    instructor: "Administrative Services",
    tags: [{ tag: "10 Weeks" }, { tag: "Intermediate" }],
  },
];

/*-------------------------Services Items-----------------------------------*/

export const rcmServices = [
  {
    id: 1,
    title: "Revenue Cycle Management Services",
    img: RevenueImg,
    description:
      "Maximize cash flow and minimize delays with our end-to-end Revenue Cycle Management services. QREV Business Solutions ensures accuracy, compliance, and faster reimbursements.",
  },
];

export const rcmServicesDetails = [
  {
    id: 1,
    categoryId: 1,
    title: "Medical Billing Services",
    description:
      "Leverage advanced billing tools and software to minimize billing time and enhance billing accuracy with our proficient medical billing services.",
  },
  {
    id: 2,
    categoryId: 1,
    title: "Medical Coding Services",
    description:
      "Accelerate claims processing, minimize claims denials, and increase reimbursements with our quick, accurate, and compliant medical coding services.",
  },
  {
    id: 3,
    categoryId: 1,
    title: "Insurance Eligibility Verification Services",
    description:
      "Confirm patient coverage in real time, prevent claim denials, and keep reimbursements on schedule with our accurate insurance-eligibility verification services.",
  },
  {
    id: 4,
    categoryId: 1,
    title: "Medical Accounts Receivable Services",
    description:
      "Ensures efficient claims processing, accurate billing, and swift follow-up, resulting in maximized reimbursements.",
  },
  {
    id: 5,
    categoryId: 1,
    title: "Medical Data Entry Services",
    description:
      "Our expert team ensures meticulous entry and organization of patient records while maintaining data integrity.",
  },
  {
    id: 6,
    categoryId: 1,
    title: "Healthcare Back Office Support Services",
    description:
      "Our trained agents offer compassionate support, appointment scheduling, and information dissemination.",
  },
  {
    id: 7,
    categoryId: 1,
    title: "EMR Data Entry Services",
    description:
      "Our accurate data entry ensures that critical patient information is readily accessible, enabling efficient care delivery and informed decision-making.",
  },
];

/*---------------------Software Business Development------------------------*/
export const softwarebusiness = [
  {
    id: 2,
    title: "Sales & Business Development",
    img: SalesImg,
    description:
      "Accelerate growth with our sales and business development expertise. QREV Business Solutions helps you capture opportunities, expand markets, and boost revenue.",
  },
];

export const softwarebusinessDetails = [
  {
    id: 2,
    categoryId: 2,
    title: "Comprehensive Action Plan",
    description:
      "We help to design a custom plan for ensuring future success by setting goals, unique value proposition, targeting specific clients, creating market strategies, developing an implementation plan, budget, and a method to measure the effectiveness.",
  },
  {
    id: 2,
    categoryId: 2,
    title: "Lead Generation",
    description:
      "Discover and analyse the characteristics of the ideal client. Identify how and where to connect with the ideal client. Qualify and prioritise the ideal lead sources, and develop a follow-up system.",
  },
  {
    id: 2,
    categoryId: 2,
    title: "Better Networking",
    description:
      "Increase the radius of influencers by leveraging the current network, build the perfect client network, and participate in the best professional organisations. Discover the best methods and networking opportunities now.",
  },
  {
    id: 2,
    categoryId: 2,
    title: "Growth Assessment",
    description:
      "Evaluate the company’s growth with respect to the competitors and key influencers to identify strengths, weaknesses, opportunities, and threats. Based on the findings, detailed recommendations and suggestions will be developed, along with an action plan, to achieve goals and assist in implementation.",
  },
  {
    id: 2,
    categoryId: 2,
    title: "Skilled Professionals",
    description:
      "Our team of business development leaders will engage with your prospects, build rapport, and effectively convert them into customers. With our extended team, you can be confident that every lead has the best chance of becoming your client.",
  },
  {
    id: 2,
    categoryId: 2,
    title: "Nurtured Relationships",
    description:
      "Proven and scalable multi-channel prospecting to targeted audiences using email and social media prospecting that helps to onboard hot leads and nurtures relationships throughout the sales journey.",
  },
];

/*----------------------Software Solutions Services---------------------*/
export const softwareSolutions = [
  {
    id: 3,
    title: "Software Solutions",
    img: SoftwareImg,
    description:
      "Empower your business with innovative, scalable, and tailor-made software solutions. QREV Business Solutions turns ideas into intelligent digital products that drive results.",
  },
];

export const softwareSolutionsDetails = [
  {
    id: 3,
    categoryId: 3,
    title: "Mobile Application Development Services",
    description:
      "Conceptualize, design, and implement intuitive mobile applications adapted to your specific business needs. Enhance user engagement and drive business growth across various mobile platforms.",
  },
  {
    id: 3,
    categoryId: 3,
    title: "Software Development Services",
    description:
      "Robust, scalable, and secure software solutions tailored to any OS, browser, and device. We leverage our industry knowledge to create bespoke solutions that seamlessly integrate across platforms and devices.",
  },
  {
    id: 3,
    categoryId: 3,
    title: "Enterprise Software Development",
    description:
      "Design and develop comprehensive enterprise applications with clear ROI estimations for financial transparency. We create scalable, efficient, and adaptable systems using methods like point-to-point connections, event-driven frameworks, and microservices.",
  },
  {
    id: 3,
    categoryId: 3,
    title: "Software Testing Services",
    description:
      "Ensure software reliability and performance with our software testing services. We have specialized testing protocols, including functional, performance, compatibility, and security assessments, ensuring a smooth and user-friendly experience.",
  },
  {
    id: 3,
    categoryId: 3,
    title: "Automation Services",
    description:
      "We analyze your business processes, identify potential bottlenecks, and optimize for efficiency. We help reduce software implementation time and use low-code development tools where suitable to hasten automation and cut costs.",
  },
  {
    id: 3,
    categoryId: 3,
    title: "Cloud Services",
    description:
      "Cloud solutions that enhance agility, scalability, and security. Our professional cloud architects recommend the most suitable cloud provider and deployment strategy, guiding you on the ideal IaaS, PaaS, or SaaS services.",
  },
  {
    id: 3,
    categoryId: 3,
    title: "IT Infrastructure Management",
    description:
      "Comprehensive IT infrastructure management to ensure optimal performance, security, and alignment with business goals. We offer flexible solutions that integrate seamlessly with your in-house team.",
  },
  {
    id: 3,
    categoryId: 3,
    title: "Database Consulting Service",
    description:
      "Efficient management of customer profiles, contacts, and related documents. We also provide guidance on database solutions for member tracking, fee management, event coordination, and volunteer recruitment.",
  },
  {
    id: 3,
    categoryId: 3,
    title: "Virtual Global Capability Center",
    description:
      "Dedicated Virtual Centres that empower you to manage global operations, optimize overheads, enhance productivity, and drive ongoing innovation across diverse international markets.",
  },
];

/*----------------------- Database Services --------------------------*/

/*------------------------------Client Logo -----------------------------*/
import Client1 from "../images/logo/logo.png";
import Client2 from "../images/sponser/spo1.webp";
import Client3 from "../images/sponser/spo2.webp";
import Client4 from "../images/sponser/spo3.webp";

export const clientLogo = [
  {
    id: 1,
    image: Client1,
  },
  {
    id: 2,
    image: Client2,
  },
  {
    id: 3,
    image: Client3,
  },
  {
    id: 4,
    image: Client4,
  },
  // {
  //   id: 5,
  //   image: Client1,
  // },
  // {
  //   id: 6,
  //   image: Client1,
  // },
];

export const testimonialsItems = [
  {
    id: 1,
    text: "Working with QREV was a game-changer for our billing process. Their insights into revenue cycle management were sharp, and clear communication made everything seamless. We’re seeing faster payments and happier clients.",
    author: "Dr. Priya N.",
  },
  {
    id: 2,
    text: "The business consulting support from QREV gave us a clear roadmap for growth. They tailored strategies uniquely to our needs, and the results speak for themselves. Our operational efficiency has never been this strong.",
    author: "Ravi K.",
  },
  {
    id: 3,
    text: "QREV’s approach to solving complex workflow challenges was both innovative and practical. Their reliability solutions helped us streamline tasks and build confidence across our team.",
    author: "Anita S.",
  },
  {
    id: 4,
    text: "Partnering with QREV transformed how we manage revenue. Their team brought professionalism, clarity, and real improvements to our financial performance. Highly recommend for any business ready to level up.",
    author: "Sanjay M.",
  },
];

export const faqItems = [
  {
    id: 1,
    title: "Can I enroll in multiple courses at once?",
    text: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
  },
  {
    id: 2,
    title: "Enrollment Process for Different Courses",
    text: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
  },
  {
    id: 3,
    title: "What kind of support can I expect from instructors?",
    text: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
  },
  {
    id: 4,
    title:
      "Are the courses self-paced or do they have specific start and end dates?",
    text: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
  },
  {
    id: 5,
    title: "Are there any prerequisites for the courses?",
    text: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
  },
  {
    id: 6,
    title: "Can I download the course materials for offline access?",
    text: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
  },
];

export const contactInfo = [
  {
    id: 1,
    icon: RiMailSendFill,
    label: "admin@qrevbusinesssolutions.com",
  },
  {
    id: 2,
    icon: RiPhoneFill,

    label: "+1 630 473 4131",
  },
];

export const footerLists = [
  {
    id: 1,
    title: "About Us",
    href: "/about",
    links: [
      { label: "Company" },
      { label: "Achievements" },
      { label: "Our Goals" },
    ],
  },
];

export const footerServicesContact = [
  {
    id: 1,
    title: "Services",
    href: "/services",

    links: [
      { label: "Operational Efficiency Boosting" },
      { label: "Administrative Services" },
      { label: "Sales & Business Development" },
      { label: "Revenue Cycle Management Services" },
      { label: "Software Solutions" },
    ],
  },
];

export const socialIcons = [
  {
    id: 1,
    icon: RiFacebookBoxFill,
    href: "https://www.facebook.com/profile.php?id=61579856014535",
  },
  {
    id: 2,
    icon: RiLinkedinFill,
    href: "https://www.linkedin.com/company/qrevbusinesssolutions/?viewAsMember=true",
  },
  {
    id: 3,
    icon: RiInstagramFill,
    href: "https://www.instagram.com/qrevbusiness/",
  },
];
