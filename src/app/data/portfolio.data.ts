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
 * CONFIDENTIALITY: project details are intentionally empty for now. While this array is empty the
 * Projects section shows only company names. When approved, add entries here using generic
 * titles and high-level impact only. Never add client or internal tool names, real metrics,
 * schemas, internal URLs or source code.
 */
export const PROJECTS: Project[] = [];

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
