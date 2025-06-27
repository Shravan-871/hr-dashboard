const getRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  
  const getRandomItem = (arr) =>
    arr[Math.floor(Math.random() * arr.length)];
  
// --------------------
// OVERVIEW DATA
// --------------------
  
  const overviewTemplates = [
    'The employee consistently delivers work ahead of schedule and maintains a high standard of quality across all deliverables.',
    'Known for their leadership qualities, the employee has taken initiative in multiple cross-functional projects.',
    'They have demonstrated strong analytical thinking and contributed to better team performance.',
    'The employee has shown steady improvement in task management and communication over the quarter.',
    'Has a proven ability to work independently while meeting tight deadlines with minimal supervision.',
    'Recognized for their mentorship, this employee has helped onboard two new team members effectively.',
    'Frequently praised by peers for attention to detail and collaboration.',
    'The employee maintained 98% attendance and completed 94% of assigned tasks on time.',
    'Participated in strategic planning meetings and offered valuable suggestions that shaped project goals.',
    'Adapted quickly to new tools and technologies introduced during the sprint cycle.',
    'Often volunteers to take on challenging tasks and completes them with precision.',
    'Demonstrates consistency in coding standards, documentation, and peer code reviews.',
    'Supports a positive team environment and encourages feedback and transparency.',
    'Has played a central role in reducing technical debt in the past release.',
    'Consistently receives above-average ratings in internal performance assessments.',
  ];
  
  export const mockOverview = Array.from({ length: 15 }, () => ({
    paragraph: getRandomItem(overviewTemplates),
  }));
  
// --------------------
// PROJECTS DATA
// --------------------
  
  const projectNames = [
    'Onboarding Automation',
    'Client Portal Redesign',
    'HR Analytics Dashboard',
    'Internal Tool Migration',
    'AI Chatbot Integration',
    'Employee Survey System',
    'Remote Work Scheduler',
    'Benefits Tracker App',
    'Recruitment CRM Upgrade',
    'Compliance Audit Suite',
    'Slack Integration Bot',
    'Diversity Dashboard',
    'Time-Off Workflow System',
    'Quarterly Metrics Engine',
    'Payroll Optimization Tool',
  ];
  
  const projectDescriptions = [
    'This project involves streamlining HR processes through workflow automation.',
    'Focused on improving user experience for internal and external stakeholders.',
    'Designed to generate and visualize HR metrics such as retention and satisfaction.',
    'Migrated legacy systems to a microservices architecture.',
    'Integrated OpenAI-powered chatbot to help employees navigate HR policies.',
    'Automated employee surveys and feedback loops using a dynamic form system.',
    'Built a calendar-based scheduler to manage hybrid and remote work shifts.',
    'Developed a mobile-friendly application to track employee benefits in real-time.',
    'Upgraded the recruitment system to enable better filtering and candidate tracking.',
    'Created dashboards to streamline compliance monitoring and audits.',
    'Built a bot that connects Slack with company services for real-time updates.',
    'Visualized diversity KPIs for leadership using D3.js and Chart.js.',
    'Implemented a rule-based engine to automate time-off approvals.',
    'Created a backend pipeline to sync quarterly reports from different regions.',
    'Refactored the payroll module to improve accuracy and reduce latency.',
  ];
  
  const statusList = ['Completed', 'In Progress', 'On Hold', 'Delayed'];
  
  export const mockProjects = Array.from({ length: 15 }, (_, i) => ({
    name: projectNames[i % projectNames.length],
    description: projectDescriptions[i % projectDescriptions.length],
    status: getRandomItem(statusList),
    impact: `Expected to impact ${getRandomInt(100, 1000)} users with a projected ROI of ${getRandomInt(10, 40)}%.`,
  }));
  
// --------------------
// FEEDBACK DATA
// --------------------
  
  const feedbackComments = [
    'Consistently exceeds expectations in project execution and team leadership.',
    'Shows a strong commitment to learning and adapting to new challenges.',
    'Has made measurable improvements in communication and task ownership.',
    'Delivers work on time but needs to participate more actively in discussions.',
    'Reliable and focused, though there’s room for growth in cross-functional collaboration.',
    'Often volunteers to support colleagues and share knowledge.',
    'Demonstrated clear growth in problem-solving across recent sprints.',
    'Great collaboration in cross-team projects and regular retrospectives.',
    'Handles tight deadlines well, though could work on planning tasks more proactively.',
    'Demonstrates great ownership of assigned modules and documentation.',
    'Communicates blockers clearly and seeks feedback effectively.',
    'Shows confidence in client-facing scenarios and Q&A sessions.',
    'Helped improve team morale during recent product delays.',
    'Participates in design decisions and shares insightful suggestions.',
    'Flexible in adapting to last-minute changes and scope adjustments.',
  ];
  
  export const mockFeedback = Array.from({ length: 15 }, (_, i) => ({
    reviewer: `Manager ${i + 1}`,
    comment: feedbackComments[i % feedbackComments.length],
    rating: getRandomInt(3, 5),
  }));
  