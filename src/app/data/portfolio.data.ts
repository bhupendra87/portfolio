/**
 * All portfolio content lives here. Edit this one file to update the site.
 * Leave a link empty ('') and it is hidden automatically.
 */

export interface Experience {
  role: string;
  company: string;
  period: string;
  highlight: string;
  points: string[];
}

export interface Project {
  title: string;
  company: 'Teleperformance' | 'Virtual Employee' | 'Softdew Tech';
  year: string;
  stack: string[];
  summary: string;
  highlights: string[];
  featured?: boolean;
  github?: string;
  demo?: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export const PROFILE = {
  name: 'Bhupendra Yadav',
  title: 'Senior Software Engineer',
  domain: 'bhupendrayadav.co.in',
  email: 'yadavbhupendra787@gmail.com',
  phone: '+91-9718891330',
  location: 'Amroha, Uttar Pradesh, India',
  resumeFile: 'Bhupendra_Yadav_Resume.pdf',
  // Add your real profile URLs below. Empty values are hidden.
  linkedin: '',
  github: '',
  // Optional: paste a Formspree endpoint (https://formspree.io/f/xxxx) to receive form
  // messages by email without a backend. If empty, the form opens the visitor's mail app.
  formEndpoint: '',
};

export const SUMMARY =
  'I am a Senior Software Engineer with over 10 years in Microsoft .NET, Web API microservices, cloud deployments and Angular. ' +
  'I design enterprise systems that scale, speed up data ingestion pipelines and automate business workflows. ' +
  'My daily toolkit is C#, ASP.NET Core, Entity Framework, SQL Server, Python (FastAPI), Angular and Azure DevOps.';

export const MILESTONES: { year: string; text: string }[] = [
  { year: '2014', text: 'Started at Softdew Tech building telecom tools, VoIP and payment APIs.' },
  { year: '2019', text: 'Moved to Virtual Employee to modernize legacy desktop and Web Forms apps into ASP.NET Core.' },
  { year: '2022', text: 'Joined Teleperformance to build data ingestion and data-serving platforms.' },
];

export const EDUCATION: { degree: string; school: string; year: string }[] = [
  { degree: 'Master of Computer Applications (MCA)', school: 'KIET, Ghaziabad (GBTU)', year: '2012' },
  { degree: 'Bachelor of Computer Applications (BCA)', school: 'IPEM, Ghaziabad (CCS University)', year: '2009' },
  { degree: 'Certification in .NET (ADO.NET, ASP.NET, SQL Server)', school: 'DUCAT, Ghaziabad', year: '' },
];

export const EXPERIENCE: Experience[] = [
  {
    role: 'Senior Software Engineer',
    company: 'Teleperformance',
    period: 'Dec 2022 – Present',
    highlight: 'Building high-performance data ingestion and data-serving platforms on ASP.NET Core, Python (FastAPI), SQL Server and Angular.',
    points: [
      'Architected secure, scalable microservices that return dynamic JSON from flexible, multi-column data models.',
      'Implemented JWT authentication, rate limiting, object-level authorization and Redis caching.',
      'Developed Azure Function Apps for bulk operations and automated recovery of failed ingestion jobs.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Virtual Employee Private Limited',
    period: 'Aug 2019 – Dec 2022',
    highlight: 'Led re-engineering of legacy Windows desktop apps and ASP.NET Web Forms into modern ASP.NET Core applications.',
    points: [
      'Designed multi-tier web portals with ASP.NET Core Web API, Entity Framework and Kendo UI for client management and e-commerce.',
      'Built HR, sales and logistics modules covering scheduling, stock control, audit logs and automated document generation.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Softdew Tech Private Limited',
    period: 'Dec 2014 – Aug 2019',
    highlight: 'Designed telecom automation engines that generate configuration scripts for network hardware migration.',
    points: [
      'Delivered VoIP calling, multi-level approval, cashback and asset tracking applications for enterprise and consumer clients.',
      'Built REST APIs for mobile apps, integrated online payment gateways and tuned MySQL and SQL Server schemas.',
    ],
  },
];

/*
 * CONFIDENTIALITY: project titles are generic on purpose. Describe the problem, the architecture
 * and the impact at a high level. Never add client names, internal tool names, real metrics,
 * schemas, internal URLs or source code.
 */
export const PROJECTS: Project[] = [
  {
    title: 'Automated Data Ingestion Platform',
    company: 'Teleperformance',
    year: '2024',
    featured: true,
    stack: ['ASP.NET Core', 'Python', 'SQL Server', 'Angular', 'Azure Storage'],
    summary:
      'Client data arrived as raw CSV files and needed engineers to prepare it for analysis. I built a pipeline that does this end to end with no manual steps.',
    highlights: [
      'Converts CSV uploads into compressed Parquet files on cloud storage.',
      'Detects the schema and creates database tables dynamically.',
    ],
  },
  {
    title: 'Dynamic Data-Serving API',
    company: 'Teleperformance',
    year: '2023',
    featured: true,
    stack: ['ASP.NET Core Web API', 'Angular', 'SQL Server', 'JWT', 'Kendo UI'],
    summary:
      'Different users needed different slices of large datasets without a new endpoint for each request. I built one flexible REST API that serves dynamic JSON structures.',
    highlights: [
      'Token-based security, rate limiting and object-level permissions.',
      'Server-side pagination and response caching for high concurrency.',
    ],
  },
  {
    title: 'Real-Time Provisioning Pipeline',
    company: 'Teleperformance',
    year: '2023',
    stack: ['ASP.NET Core Web API', 'Azure Function Apps', 'SQL Server'],
    summary:
      'Equipment for new hires had to be ready before their start date. I connected two internal systems with automated, event-driven data pipelines.',
    highlights: [
      'Serverless functions process updates in near real time.',
      'Built-in retry and recovery for failed transfers.',
    ],
  },
  {
    title: 'Employee Onboarding Platform',
    company: 'Teleperformance',
    year: '2022–2024',
    stack: ['ASP.NET Core Web API', 'Angular', 'SQL Server'],
    summary:
      'A single place to guide new employees and support teams through onboarding, replacing scattered manual tracking.',
    highlights: [
      'Step-by-step workflow guidance and scheduling.',
      'Role-based access control for each user group.',
    ],
  },
  {
    title: 'E-Commerce and Admin Portals',
    company: 'Virtual Employee',
    year: '2021–2022',
    stack: ['ASP.NET Core Web API', 'Entity Framework', 'Kendo UI', 'SQL Server'],
    summary:
      'Legacy web systems for online retail were slow to change. I rebuilt them as responsive, API-first applications.',
    highlights: [
      'Promotion and discount campaign management.',
      'Secure checkout flow.',
    ],
  },
  {
    title: 'Enterprise Management System',
    company: 'Virtual Employee',
    year: '2019–2021',
    stack: ['ASP.NET MVC 5', 'Entity Framework', 'Kendo UI', 'SQL Server'],
    summary:
      'Teams used separate tools for sales, HR and operations. I delivered one platform that brings them together.',
    highlights: [
      'CRM, HR, leave tracking and fleet management modules.',
      'Document distribution and analytics reporting.',
    ],
  },
  {
    title: 'Network Configuration Script Generator',
    company: 'Softdew Tech',
    year: '2017–2019',
    stack: ['C#', 'ASP.NET Web Forms', 'SQL Server'],
    summary:
      'Network engineers wrote configuration scripts by hand during hardware migrations. I built a tool that generates them from structured inputs.',
    highlights: [
      'Generates XML and command scripts automatically.',
      'Fewer manual errors during large migrations.',
    ],
  },
  {
    title: 'International Calling App Backend',
    company: 'Softdew Tech',
    year: '2015–2017',
    stack: ['ASP.NET Web API', 'C#', 'MVC 4.0', 'SQL Server', 'Bootstrap'],
    summary:
      'Back-end services for a mobile calling app used across several countries on iOS and Android.',
    highlights: [
      'Concurrency handling and schema design.',
      'Custom authentication filters for secure API access.',
    ],
  },
  {
    title: 'Multi-Level Approval Workflow Portal',
    company: 'Softdew Tech',
    year: '2016–2017',
    stack: ['C#', 'ASP.NET Web Forms', 'SQL Server', 'Bootstrap'],
    summary:
      'Cost sheet reviews moved through email and spreadsheets. I automated the approval chain for a manufacturing enterprise.',
    highlights: [
      'Routing across management levels.',
      'Automatic notifications to external vendors.',
    ],
  },
  {
    title: 'Cashback and Rewards API',
    company: 'Softdew Tech',
    year: '2015–2017',
    stack: ['ASP.NET MVC 4', 'Web API', 'Entity Framework', 'SQL Server'],
    summary:
      'Reward transactions span several stages, and a failure midway must not leave bad data. I built the API around safe transaction handling.',
    highlights: [
      'Commit and rollback handling across multi-stage purchases.',
      'Consistent reward balances.',
    ],
  },
];

export const SKILLS: SkillGroup[] = [
  {
    title: 'Backend and frameworks',
    items: ['C#', 'ASP.NET Core Web API', 'ASP.NET MVC', 'Entity Framework Core', 'LINQ', 'Python (FastAPI)', 'Microservices'],
  },
  {
    title: 'Frontend and UI',
    items: ['Angular', 'JavaScript / jQuery', 'Telerik Kendo UI', 'HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    title: 'Databases and storage',
    items: ['Microsoft SQL Server', 'MySQL', 'Azure Storage (Parquet / Data Lake)', 'Database design and optimization'],
  },
  {
    title: 'DevOps and cloud',
    items: ['Azure DevOps', 'Azure Function Apps', 'Git', 'CI/CD pipelines', 'REST APIs', 'Webhooks', 'Visual Studio 2010–2022'],
  },
  {
    title: 'Architecture and security',
    items: ['JWT authentication', 'Rate limiting', 'Caching (Redis)', 'Distributed systems', 'System normalization'],
  },
  {
    title: 'How I work',
    items: ['Legacy modernization', 'Pipeline automation', 'Performance tuning', 'Secure API design', 'Enterprise workflows'],
  },
];
