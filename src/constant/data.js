import {
  RiPhoneFill,
  RiMailSendFill,
  RiUserLocationLine,
  RiFacebookBoxFill,
  RiTwitterFill,
  RiLinkedinFill,
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
  // {
  //   id: 3,
  //   label: "Billing Services",
  //   href: "/billing-services",
  // },
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

export const coursesSecItems = [
  {
    id: 1,
    img: "/images/course-img-1.png",
    title: "Web Design Fundamentals",
    text: "Transform your sales and business development with QREV Business Solutions. Align your organization, optimize operations, and foster a winning culture.",
    instructor: "Sales & Business Development",
    tags: [{ tag: "4 Weeks" }, { tag: "Beginner" }],
  },
  {
    id: 2,
    img: "/images/course-img-2.png",
    title: "Mobile App Development",
    text: "A business transformation that involves aligning organizational structures, operations and culture with your organization’s mission, vision, strategy and values. QREV Business Solutions supports you at all levels.",
    instructor: "Operational Efficiency Boosting",
    tags: [{ tag: "8 Weeks" }, { tag: "Intermediate" }],
  },
  {
    id: 3,
    img: "/images/course-img-3.png",
    title: "Front-End Web Development",
    text: "Clearly defining processes, managing them well and adjusting them systematically leads to sustainable performance improvement. QREV Business Solutions guides you and provides training.",
    instructor: "Administrative Services",
    tags: [{ tag: "10 Weeks" }, { tag: "Intermediate" }],
  },
];

/*-------------------------Services Items-----------------------------------*/
import rcmImage1 from "../../public/images/course-img-1.png";
export const rcmServices = [
  {
    id: 1,
    title: "Revenue Cycle Management Services",
    img: rcmImage1,
    description:
      "Manage your administrative tasks, minimize errors, and improve your bottom line with our proficient healthcare revenue cycle management services.",
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
    title: "Business Development Services",
    img: rcmImage1,
    description:
      "Manage your administrative tasks, minimize errors, and improve your bottom line with our proficient healthcare revenue cycle management services.",
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
    img: rcmImage1,
    description:
      "Manage your administrative tasks, minimize errors, and improve your bottom line with our proficient healthcare revenue cycle management services.",
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
    title: "IT Staffing Services",
    description:
      "Skilled IT professionals who can augment your team and ensure you get the right talent to meet your specific project demands and drive innovation.",
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
export const databaseServices = [
  {
    id: 4,
    title: "Database Services",
    img: rcmImage1,
    description: "",
  },
];

export const databaseServicesDetails = [
  {
    id: 4,
    categoryId: 4,
    title: "",
    description: "",
  },
  {
    id: 4,
    categoryId: 4,
    title: "",
    description: "",
  },
  {
    id: 4,
    categoryId: 4,
    title: "",
    description: "",
  },
];

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
    text: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
    author: "Sarah L",
    img: "/images/testi-img-1.png",
  },
  {
    id: 2,
    text: "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
    author: "Jason M",
    img: "/images/testi-img-2.png",
  },
  {
    id: 3,
    text: "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
    author: "Emily R",
    img: "/images/testi-img-3.png",
  },
  {
    id: 4,
    text: "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
    author: "Michael K",
    img: "/images/testi-img-4.png",
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
    label: "qrevbusinesspvtltd@gmail.com",
  },
  {
    id: 2,
    icon: RiPhoneFill,

    label: "+91 91813 23 2309",
  },
  // {
  //   id: 3,
  //   icon: RiUserLocationLine,
  //   label: "Somewhere in the World",
  // },
];

export const footerLists = [
  {
    id: 1,
    title: "Home",
    links: [
      { label: "Benefits" },
      { label: "Our Courses" },
      { label: "Our Testimonials" },
      { label: "Our FAQ" },
    ],
  },
  {
    id: 2,
    title: "About Us",
    links: [
      { label: "Company" },
      { label: "Achievements" },
      { label: "Our Goals" },
    ],
  },
];

export const socialIcons = [
  {
    id: 1,
    icon: RiFacebookBoxFill,
  },
  {
    id: 2,
    icon: RiTwitterFill,
  },
  {
    id: 3,
    icon: RiLinkedinFill,
  },
];
