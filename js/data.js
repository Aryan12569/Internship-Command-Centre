/* Synthetic demo data for Internship Command Center. No records represent real university data. */
(function () {
  const DAY = 24 * 60 * 60 * 1000;
  const pad = (n) => String(n).padStart(2, '0');
  const offsetDate = (offset) => {
    const d = new Date();
    d.setHours(12, 0, 0, 0);
    d.setTime(d.getTime() + offset * DAY);
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  };
  const today = offsetDate(0);

  const opportunities = [
    {
      id: 'novatech-data', company: 'NovaTech', logo: 'N', role: 'Software Engineer Intern',
      location: 'Bengaluru', mode: 'Hybrid', duration: '6 months', stipend: '₹35,000 / month', stipendValue: 35000,
      deadline: offsetDate(5), match: 92, industry: 'Technology', skills: ['Python', 'SQL', 'Git', 'APIs'],
      summary: 'Build internal data products and customer-facing tools with a product engineering squad.',
      about: 'NovaTech is looking for curious builders to ship reliable software alongside a senior product engineering team. This is a hands-on internship with a clear path to ownership.',
      responsibilities: ['Ship small product features from brief to release', 'Write tests and document technical decisions', 'Partner with design and analytics to improve user workflows'],
      eligibility: 'BBA, BCA, BE or related students with a graduation date in 2027 or later.',
      process: ['Application', 'Technical Assessment', 'Technical Interview', 'Final Interview', 'Offer'],
      breakdown: { Skills: 96, Location: 100, 'Work mode': 92, Experience: 78 }
    },
    {
      id: 'axiom-analytics', company: 'Axiom', logo: 'A', role: 'Business Analytics Intern',
      location: 'Mumbai', mode: 'On-site', duration: '4 months', stipend: '₹28,000 / month', stipendValue: 28000,
      deadline: offsetDate(9), match: 81, industry: 'Fintech', skills: ['SQL', 'Excel', 'Power BI', 'Communication'],
      summary: 'Turn customer and operations data into clear decisions for a fast-moving fintech team.',
      about: 'Axiom teams use data to make everyday financial products clearer and more accessible. You will translate messy questions into useful analysis and concise stories.',
      responsibilities: ['Own weekly performance dashboards', 'Investigate product and operations trends', 'Present recommendations to cross-functional partners'],
      eligibility: 'Students with strong analytical thinking and a comfort presenting findings to non-technical audiences.',
      process: ['Application', 'SQL Assessment', 'Hiring Manager Interview', 'Offer'],
      breakdown: { Skills: 84, Location: 62, 'Work mode': 64, Experience: 80 }
    },
    {
      id: 'vertex-product', company: 'Vertex Labs', logo: 'V', role: 'Product Operations Intern',
      location: 'Remote · India', mode: 'Remote', duration: '5 months', stipend: '₹25,000 / month', stipendValue: 25000,
      deadline: offsetDate(13), match: 68, industry: 'SaaS', skills: ['Research', 'Notion', 'Excel', 'Communication'],
      summary: 'Help a product team understand customer signals and keep launch programs moving.',
      about: 'Vertex Labs is a remote-first SaaS company where product operations connects customer insight, product decisions and go-to-market execution.',
      responsibilities: ['Synthesize customer research into weekly briefs', 'Coordinate launch checklists across teams', 'Maintain product feedback systems'],
      eligibility: 'Any discipline. Strong organization, writing and curiosity matter most.',
      process: ['Application', 'Case Study', 'Team Interview', 'Offer'],
      breakdown: { Skills: 72, Location: 100, 'Work mode': 100, Experience: 60 }
    },
    {
      id: 'orbit-growth', company: 'Orbit Systems', logo: 'O', role: 'Growth & Strategy Intern',
      location: 'Delhi NCR', mode: 'Hybrid', duration: '3 months', stipend: '₹22,000 / month', stipendValue: 22000,
      deadline: offsetDate(-1), match: 76, industry: 'Cloud', skills: ['Market Research', 'Excel', 'Storytelling', 'SQL'],
      summary: 'Support go-to-market experiments and competitive intelligence for a cloud infrastructure team.',
      about: 'Orbit Systems helps teams build dependable cloud infrastructure. The growth and strategy team turns market signals into focused experiments.',
      responsibilities: ['Map market and competitor signals', 'Build lightweight business cases', 'Measure experiment performance'],
      eligibility: 'Students with an interest in technology markets, strategy or business analytics.',
      process: ['Application', 'Take-home Case', 'Panel Interview', 'Offer'],
      breakdown: { Skills: 79, Location: 70, 'Work mode': 90, Experience: 65 }
    },
    {
      id: 'datacore-risk', company: 'DataCore', logo: 'D', role: 'Risk Analytics Intern',
      location: 'Pune', mode: 'Hybrid', duration: '6 months', stipend: '₹30,000 / month', stipendValue: 30000,
      deadline: offsetDate(18), match: 87, industry: 'Analytics', skills: ['Python', 'SQL', 'Statistics', 'Power BI'],
      summary: 'Find patterns in operational risk data and create decision tools for a global analytics group.',
      about: 'DataCore makes complex operational data easier to act on. Interns work with analysts and domain experts to surface risk patterns and improve reporting.',
      responsibilities: ['Explore and validate risk datasets', 'Automate recurring analysis', 'Create decision-ready visualizations'],
      eligibility: 'Students who enjoy analytical problem solving and can explain their approach clearly.',
      process: ['Application', 'Technical Assessment', 'Technical Interview', 'Offer'],
      breakdown: { Skills: 90, Location: 72, 'Work mode': 88, Experience: 82 }
    }
  ];

  const activity = [
    { id: 'act-1', icon: 'send', title: 'Application submitted', context: 'NovaTech · Software Engineer Intern', date: offsetDate(-2) },
    { id: 'act-2', icon: 'check-circle-2', title: 'Assessment completed', context: 'Axiom · Business Analytics Intern', date: offsetDate(-4) },
    { id: 'act-3', icon: 'calendar-clock', title: 'Interview scheduled', context: 'NovaTech · Technical Interview', date: offsetDate(-5) },
    { id: 'act-4', icon: 'bookmark', title: 'Opportunity saved', context: 'DataCore · Risk Analytics Intern', date: offsetDate(-6) }
  ];

  const applications = [
    { id: 'app-novatech', opportunityId: 'novatech-data', company: 'NovaTech', role: 'Software Engineer Intern', location: 'Bengaluru', mode: 'Hybrid', duration: '6 months', stipend: '₹35,000 / month', stage: 'Interview', appliedDate: offsetDate(-12), deadline: offsetDate(5), priority: 'High', nextAction: 'Prepare for technical interview', notes: 'Focus on Python data structures and API design.', documents: { resume: true, cover: true, portfolio: true, transcript: false }, activity: [{ title: 'Interview scheduled', date: offsetDate(-5) }, { title: 'Assessment completed', date: offsetDate(-8) }, { title: 'Application submitted', date: offsetDate(-12) }] },
    { id: 'app-axiom', opportunityId: 'axiom-analytics', company: 'Axiom', role: 'Business Analytics Intern', location: 'Mumbai', mode: 'On-site', duration: '4 months', stipend: '₹28,000 / month', stage: 'Assessment', appliedDate: offsetDate(-8), deadline: offsetDate(3), priority: 'High', nextAction: 'Complete SQL assessment', notes: '', documents: { resume: true, cover: true, portfolio: false, transcript: false }, activity: [{ title: 'Assessment received', date: offsetDate(-3) }, { title: 'Application submitted', date: offsetDate(-8) }] },
    { id: 'app-vertex', opportunityId: 'vertex-product', company: 'Vertex Labs', role: 'Product Operations Intern', location: 'Remote · India', mode: 'Remote', duration: '5 months', stipend: '₹25,000 / month', stage: 'Applied', appliedDate: offsetDate(-5), deadline: offsetDate(8), priority: 'Medium', nextAction: 'Review case study expectations', notes: '', documents: { resume: true, cover: false, portfolio: true, transcript: false }, activity: [{ title: 'Application submitted', date: offsetDate(-5) }] },
    { id: 'app-orbit', opportunityId: 'orbit-growth', company: 'Orbit Systems', role: 'Growth & Strategy Intern', location: 'Delhi NCR', mode: 'Hybrid', duration: '3 months', stipend: '₹22,000 / month', stage: 'Rejected', appliedDate: offsetDate(-26), deadline: offsetDate(-1), priority: 'Low', nextAction: 'Archive application', notes: '', documents: { resume: true, cover: true, portfolio: false, transcript: false }, activity: [{ title: 'Application closed', date: offsetDate(-2) }, { title: 'Application submitted', date: offsetDate(-26) }] },
    { id: 'app-datacore', opportunityId: 'datacore-risk', company: 'DataCore', role: 'Risk Analytics Intern', location: 'Pune', mode: 'Hybrid', duration: '6 months', stipend: '₹30,000 / month', stage: 'Offer', appliedDate: offsetDate(-34), deadline: offsetDate(-10), priority: 'High', nextAction: 'Review offer details', notes: 'Compare learning scope and start date.', documents: { resume: true, cover: true, portfolio: true, transcript: true }, activity: [{ title: 'Offer received', date: offsetDate(-1) }, { title: 'Final interview', date: offsetDate(-4) }, { title: 'Application submitted', date: offsetDate(-34) }] },
    { id: 'app-meridian', opportunityId: null, company: 'Meridian Commerce', role: 'Operations Analyst Intern', location: 'Bengaluru', mode: 'Hybrid', duration: '4 months', stipend: '₹24,000 / month', stage: 'Applied', appliedDate: offsetDate(-15), deadline: offsetDate(11), priority: 'Medium', nextAction: 'Check recruiter update', notes: '', documents: { resume: true, cover: true, portfolio: false, transcript: false }, activity: [{ title: 'Application submitted', date: offsetDate(-15) }] },
    { id: 'app-kinetic', opportunityId: null, company: 'Kinetic Mobility', role: 'Business Intelligence Intern', location: 'Bengaluru', mode: 'On-site', duration: '6 months', stipend: '₹26,000 / month', stage: 'Applied', appliedDate: offsetDate(-18), deadline: offsetDate(2), priority: 'Medium', nextAction: 'Send portfolio link', notes: '', documents: { resume: true, cover: true, portfolio: false, transcript: false }, activity: [{ title: 'Application submitted', date: offsetDate(-18) }] },
    { id: 'app-cloudmint', opportunityId: null, company: 'CloudMint', role: 'Product Analyst Intern', location: 'Remote · India', mode: 'Remote', duration: '5 months', stipend: '₹27,000 / month', stage: 'Assessment', appliedDate: offsetDate(-10), deadline: offsetDate(6), priority: 'High', nextAction: 'Complete product case', notes: '', documents: { resume: true, cover: true, portfolio: true, transcript: false }, activity: [{ title: 'Assessment received', date: offsetDate(-1) }, { title: 'Application submitted', date: offsetDate(-10) }] },
    { id: 'app-brightline', opportunityId: null, company: 'Brightline Foods', role: 'Category Strategy Intern', location: 'Mumbai', mode: 'Hybrid', duration: '3 months', stipend: '₹20,000 / month', stage: 'Saved', appliedDate: null, deadline: offsetDate(15), priority: 'Low', nextAction: 'Decide whether to apply', notes: '', documents: { resume: false, cover: false, portfolio: false, transcript: false }, activity: [{ title: 'Opportunity saved', date: offsetDate(-3) }] },
    { id: 'app-prism', opportunityId: null, company: 'Prism Health', role: 'Data Operations Intern', location: 'Hyderabad', mode: 'Hybrid', duration: '4 months', stipend: '₹23,000 / month', stage: 'Rejected', appliedDate: offsetDate(-31), deadline: offsetDate(-14), priority: 'Low', nextAction: 'Review feedback', notes: '', documents: { resume: true, cover: true, portfolio: false, transcript: false }, activity: [{ title: 'Application closed', date: offsetDate(-9) }] },
    { id: 'app-stellar', opportunityId: null, company: 'Stellar Retail', role: 'Customer Insights Intern', location: 'Bengaluru', mode: 'Hybrid', duration: '4 months', stipend: '₹21,000 / month', stage: 'Interview', appliedDate: offsetDate(-20), deadline: offsetDate(4), priority: 'High', nextAction: 'Prepare for customer insights interview', notes: '', documents: { resume: true, cover: true, portfolio: true, transcript: false }, activity: [{ title: 'Interview scheduled', date: offsetDate(-2) }, { title: 'Application submitted', date: offsetDate(-20) }] },
    { id: 'app-aurora', opportunityId: null, company: 'Aurora Energy', role: 'Strategy & Analytics Intern', location: 'Delhi NCR', mode: 'On-site', duration: '6 months', stipend: '₹29,000 / month', stage: 'Applied', appliedDate: offsetDate(-7), deadline: offsetDate(12), priority: 'Medium', nextAction: 'Connect with alumni', notes: '', documents: { resume: true, cover: false, portfolio: false, transcript: false }, activity: [{ title: 'Application submitted', date: offsetDate(-7) }] }
  ];

  const documents = [
    { id: 'resume', name: 'Resume', type: 'PDF · 2 pages', status: 'Ready', updated: offsetDate(-6), usedFor: 'All applications', icon: 'file-text' },
    { id: 'cover', name: 'Cover Letter', type: 'DOCX · General', status: 'Ready', updated: offsetDate(-12), usedFor: 'NovaTech, Axiom', icon: 'file-edit' },
    { id: 'portfolio', name: 'Portfolio', type: 'Link · Notion', status: 'Ready', updated: offsetDate(-25), usedFor: 'NovaTech, Vertex Labs', icon: 'layout-template' },
    { id: 'transcript', name: 'Academic Transcript', type: 'PDF · 1 page', status: 'Missing', updated: null, usedFor: 'DataCore', icon: 'graduation-cap' },
    { id: 'certificates', name: 'Certificates', type: 'PDF · 3 files', status: 'Needs Update', updated: offsetDate(-110), usedFor: 'Selected applications', icon: 'award' }
  ];

  const profile = { name: 'Alex Sharma', headline: 'BBA Business Analytics Student', institution: 'Kristu Jayanti University', location: 'Bengaluru', graduation: '2027', email: 'alex.sharma@student.example', phone: '+91 98765 43210', linkedin: 'linkedin.com/in/alex-sharma', about: 'Business analytics student turning messy questions into clear, decision-ready stories.', skills: ['SQL', 'Excel', 'Power BI', 'Python', 'Data Analysis', 'Communication'] };

  const readiness = { tasks: { profile: true, resume: true, linkedin: false, portfolio: true, technical: false, mock: false, research: true }, focus: 'Python data analysis' };

  const makeInterviews = () => [
    { id: 'int-novatech', applicationId: 'app-novatech', company: 'NovaTech', title: 'Technical Interview', date: offsetDate(5), time: '3:00 PM', mode: 'Online', status: 'Upcoming', notes: 'Bring one project story and be ready for Python fundamentals.' },
    { id: 'int-stellar', applicationId: 'app-stellar', company: 'Stellar Retail', title: 'Customer Insights Interview', date: offsetDate(2), time: '11:00 AM', mode: 'Online', status: 'Upcoming', notes: '' },
    { id: 'int-orbit', applicationId: 'app-orbit', company: 'Orbit Systems', title: 'Final Interview', date: offsetDate(-2), time: '4:00 PM', mode: 'Online', status: 'Completed', notes: '' }
  ];
  const makeDeadlines = () => [
    { id: 'dead-novatech', applicationId: 'app-novatech', title: 'Application deadline', company: 'NovaTech', date: offsetDate(5), priority: 'High', status: 'Upcoming' },
    { id: 'dead-axiom', applicationId: 'app-axiom', title: 'SQL assessment', company: 'Axiom', date: offsetDate(3), priority: 'High', status: 'Upcoming' },
    { id: 'dead-vertex', applicationId: 'app-vertex', title: 'Application deadline', company: 'Vertex Labs', date: offsetDate(8), priority: 'Medium', status: 'Upcoming' },
    { id: 'dead-orbit', applicationId: 'app-orbit', title: 'Application deadline', company: 'Orbit Systems', date: offsetDate(-1), priority: 'High', status: 'Overdue' }
  ];

  const coordinator = {
    profile: { name: 'Priya Nair', role: 'coordinator', title: 'Internship Program Coordinator', institution: 'Kristu Jayanti University', cohort: 'BBA Business Analytics · 2027' },
    cohort: { name: 'BBA Business Analytics · 2027', total: 42, active: 36, averageReadiness: 71, placed: 8, lastSynced: 'Today, 9:40 AM' },
    stages: [
      { label: 'Prepare', count: 6, tone: 'gray' }, { label: 'Discover', count: 9, tone: 'blue' }, { label: 'Apply', count: 13, tone: 'indigo' }, { label: 'Interview', count: 6, tone: 'amber' }, { label: 'Offer / placed', count: 8, tone: 'green' }
    ],
    readiness: [
      { label: 'Profile complete', value: 86, note: '36 of 42 students' }, { label: 'Resume ready', value: 79, note: '33 of 42 students' }, { label: 'Interview practice', value: 58, note: '24 of 42 students' }, { label: 'Deadline hygiene', value: 74, note: '31 of 42 students' }
    ],
    supportQueue: [
      { label: 'Readiness below 50%', count: 5, tone: 'red', action: 'Plan workshop' }, { label: 'No active application', count: 6, tone: 'amber', action: 'Send nudge' }, { label: 'Deadline risk this week', count: 4, tone: 'amber', action: 'Review risks' }
    ],
    themes: ['Resume tailoring', 'Interview confidence', 'Finding relevant roles']
  };

  window.ICC_DATA = { opportunities, applications, documents, profile, readiness, activity, makeInterviews, makeDeadlines, coordinator, today };
})();
