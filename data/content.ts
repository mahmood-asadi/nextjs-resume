export const contentData = [
  {
    title: "Work Experience",
    items: [
      {
        title: "Senior Web Developer at Havas CX",
        subTitle: "Full-time",
        date: "2022 - Present",
        description:
          "At Havas CX Canada, I serve as a Senior Web Developer, contributing to projects for prestigious clients like RBC, SunLife, and Rogers. My role involves leveraging advanced technologies such as Next.js, Faust.js, and React.js to develop high-performance websites. My expertise in PHP, SCSS, webpack, and Gulp ensures that we meet the highest standards of quality and efficiency, catering to the diverse needs of our well-known clientele.",
      },
      {
        title: "Senior Web Developer at Themify",
        subTitle: "Full-time",
        date: "2018 - 2022",
        description:
          "In my role at Themify, I significantly contributed as a Senior Full-stack Web Developer, enhancing the WordPress themes and website builder for over 120,000 customers. My work focused on maintaining and introducing new features to our theme framework, adopting best practices such as lazy loading to optimize page load times. Our team's dedication to performance excellence was recognized by achieving a Google PageSpeed Insights score of over 90, demonstrating our commitment to creating fast, responsive, and efficient websites.",
      },
      {
        title: "Agile Coach & Full-Stack Developer at Pixflow",
        subTitle: "Full-time",
        date: "2013 - 2019",
        description:
          "I develop WordPress themes and plugins, supporting users by creating documentation and assistance tools. I stay updated in my field by researching new internet and intranet technologies and software products, participating in educational opportunities, reading professional publications, maintaining personal networks, and being active in professional organizations. I enhance the organization’s reputation by taking ownership of new and unique projects and exploring ways to add value to job accomplishments. Additionally, I support and mentor web application developers by offering advice, coaching, and educational opportunities.",
      },
      {
        title: "Full Stack Developer at NEVEC",
        subTitle: "Full-time",
        date: "2010 - 2012",
        description:
          "I define site objectives by analyzing user requirements and envisioning system features and functionality. I design and develop user interfaces for internet and intranet applications by setting expectations and feature priorities throughout the development life cycle, determining design methodologies and tool sets, completing programming with various languages and software products, and designing and conducting tests. I recommend system solutions by weighing the advantages and disadvantages of custom development versus purchase alternatives. I integrate applications by designing database architecture and server scripting while ensuring connectivity with network systems, search engines, and information servers. I create multimedia applications using authoring tools and complete application development by coordinating requirements, schedules, and activities, participating in team meetings, and troubleshooting development and production issues across different environments and operating platforms.",
      },
    ],
  },
  {
    title: "Education",
    items: [
      {
        title: "Bachelor's degree, Computer Software Engineering",
        subTitle: "Ghiasodin Jamshid Kashani",
        date: "2010 - 2013",
        description: "",
      },
      {
        title: "Bachelor's Degree in Computer Science",
        subTitle: "Bahonar univercity of Shiraz",
        date: "2008 - 2010",
        description: "",
      },
    ],
  },
];

export type Content = {
  title: string;
  items: {
    title: string;
    subTitle: string;
    date: string;
    description: string;
  }[];
};

export type ContentData = Content[];
