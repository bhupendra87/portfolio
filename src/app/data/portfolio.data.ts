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
  resumeFile: 'Bhupendra_Yadav_Resume.docx',
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
    highlight: 'Built the Data Ingestion and DataSlice API platforms on ASP.NET Core, Python (FastAPI), SQL Server and Angular.',
    points: [
      'Architected secure, scalable microservices that return dynamic JSON from multi-column database designs.',
      'Added JWT bearer authentication, rate limiting, object-level permissions and Redis caching.',
      'Wrote Azure Function Apps for bulk operations and automatic recovery of failed ingestion tasks.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Virtual Employee Private Limited',
    period: 'Aug 2019 – Dec 2022',
    highlight: 'Led re-engineering of legacy Windows desktop apps and ASP.NET Web Forms into modern ASP.NET Core.',
    points: [
      'Designed multi-tier web portals with ASP.NET Core Web API, Entity Framework and Telerik Kendo UI for client management and e-commerce.',
      'Built HR, Sales and Logistics modules covering resource scheduling, stock control, activity logs and automated document generation.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Softdew Tech Private Limited',
    period: 'Dec 2014 – Aug 2019',
    highlight: 'Designed telecom scripting engines that generate XML and Moshell (.mos) scripts for DUS to BBU migration at Ericsson and AT&T.',
    points: [
      'Delivered VoIP calling (Talk200), multi-level approvals (Daikin), a cashback engine API (Shop-a-gain) and an Asset Tracking System.',
      'Built REST APIs for mobile apps, integrated the Barclaycard payment gateway and tuned MySQL and SQL Server schemas.',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'TP DataIngestion Framework',
    company: 'Teleperformance',
    year: '2024',
    featured: true,
    stack: ['ASP.NET Core', 'Python', 'SQL Server', 'Angular', 'Azure Storage'],
    summary:
      'Converts client CSV files into compressed Parquet on Azure Storage and loads the schema into database tables dynamically, with zero manual engineering work.',
  },
  {
    title: 'TP DataSlice API Engine',
    company: 'Teleperformance',
    year: '2023',
    featured: true,
    stack: ['ASP.NET Core Web API', 'Angular', 'SQL Server', 'JWT', 'Kendo UI'],
    summary:
      'A REST API that serves dynamic JSON structures. Token-level encryption, rate limiting, server-side pagination and response caching keep it fast under high concurrency.',
  },
  {
    title: 'TP Asset Guru Roster System',
    company: 'Teleperformance',
    year: '2023',
    stack: ['ASP.NET Core Web API', 'Azure Function Apps', 'SQL Server'],
    summary:
      'Real-time pipelines that link TPClient to AssetGuru so agent equipment is provisioned before hire, inside a strict T-10 day delivery window.',
  },
  {
    title: 'Welcome Portal',
    company: 'Teleperformance',
    year: '2022–2024',
    stack: ['ASP.NET Core Web API', 'Angular', 'SQL Server'],
    summary:
      'End-to-end onboarding platform: equipment installation tracking, trainer scheduling, step-by-step workflow guidance and role-based access control.',
  },
  {
    title: 'E-Commerce and Admin Portals',
    company: 'Virtual Employee',
    year: '2021–2022',
    stack: ['ASP.NET Core Web API', 'Entity Framework', 'Kendo UI', 'SQL Server'],
    summary:
      'Rebuilt legacy web systems as responsive Web API architectures for online retail, with promotion engines, discount campaign managers and secure checkout.',
  },
  {
    title: 'Enterprise Management System',
    company: 'Virtual Employee',
    year: '2019–2021',
    stack: ['ASP.NET MVC 5', 'Entity Framework', 'Kendo UI', 'SQL Server'],
    summary:
      'One platform for CRM, HR, document distribution, fleet management, leave tracking and business analytics reporting.',
  },
  {
    title: 'ENodeB 4G Scripting Tool',
    company: 'Softdew Tech',
    year: '2017–2019',
    stack: ['C#', 'ASP.NET Web Forms', 'SQL Server 2014'],
    summary:
      'Generates XML and .mos scripts for Ericsson network engineers during cell tower integration and DUS to BBU hardware migration for AT&T USA.',
  },
  {
    title: 'Talk200 Calling App Engine',
    company: 'Softdew Tech',
    year: '2015–2017',
    stack: ['ASP.NET Web API', 'C#', 'MVC 4.0', 'SQL Server', 'Bootstrap'],
    summary:
      'Back-end services, concurrency handling, schemas and authentication filters for an iOS and Android international calling app used in the US, UK and Israel.',
  },
  {
    title: 'Daikin Costing Sheet Approval',
    company: 'Softdew Tech',
    year: '2016–2017',
    stack: ['C#', 'ASP.NET Web Forms', 'SQL Server', 'Bootstrap'],
    summary:
      'Approval portal that moves costing sheets through Senior Managers and Senior Vice Presidents, with automatic notifications to vendors.',
  },
  {
    title: 'Shop-a-gain Cashback API',
    company: 'Softdew Tech',
    year: '2015–2017',
    stack: ['ASP.NET MVC 4', 'Web API', 'Entity Framework 4.0', 'SQL Server'],
    summary:
      'Reward and cashback transaction APIs with commit and rollback handling across multi-stage merchant purchases.',
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
