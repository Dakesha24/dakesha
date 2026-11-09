export type Experience = { id:string; org:string; role:string; period:string; category:string; description:string; responsibilities:string[]; skills?:string[] };
export const experiences: Experience[] = [
 {id:'eduverse',org:'PT Eduverse Innovation Group',role:'Fullstack Developer',period:'Jun 2026 — Oct 2026',category:'Professional · Contract',description:'Developed and maintained web applications supporting digital learning systems.',responsibilities:['Built and maintained frontend and backend features for digital learning.','Managed relational databases and API integrations.','Developed competencies, assessments, learning evaluations, analytics dashboards, and reporting features.','Integrated external AI APIs for chatbot functionality and learning analytics.','Tested, debugged, and refined application features.'],skills:['API Integration','AI Integration','Analytics','Testing']},
 {id:'kubik',org:'Kubik Code',role:'Coding Tutor',period:'Oct 2025 — Oct 2026',category:'Technology Education',description:'Introduced programming fundamentals to elementary school students in grades 1–6.',responsibilities:['Guided interactive programming activities.','Developed learning materials suited to students’ abilities.'],skills:['Scratch','PictoBlox','Roblox Studio','Python','Web Programming']},
 {id:'freelance',org:'Independent',role:'Freelance Application Developer',period:'Dec 2024 — Jun 2026',category:'Freelance Development',description:'Developed applications supporting student research activities and competitions.',responsibilities:['Understood user requirements and designed software solutions.','Developed, tested, and refined frontend and backend functionality.']},
 {id:'smkn',org:'SMKN 4 Bandung',role:'Database P3K Teacher',period:'Feb 2025 — Jun 2025',category:'Teaching Internship',description:'Taught SQL and database fundamentals and supported students building fullstack applications.',responsibilities:['Guided database exercises and mentored final projects.','Supported SQL integration in student applications.'],skills:['SQL','Database Fundamentals']},
 {id:'internet',org:'Universitas Pendidikan Indonesia',role:'Internet Programming Practicum Teaching Assistant',period:'Oct 2024 — Dec 2024',category:'Academic Teaching',description:'Guided students through web application development and frontend-backend integration.',responsibilities:['Assisted practical classes and mentored final projects using React and Django.'],skills:['React','Django','Python']},
 {id:'database',org:'Universitas Pendidikan Indonesia',role:'Database Practicum Teaching Assistant',period:'Sep 2024 — Dec 2024',category:'Academic Teaching',description:'Supported database laboratory sessions and student projects.',responsibilities:['Guided MySQL practice and SQL implementation.','Mentored students on final database projects.'],skills:['MySQL','SQL']},
 {id:'ostric-lead',org:'OSTRIC Community',role:'Chairperson & Instructor',period:'Feb 2024 — Dec 2024',category:'Leadership & Teaching',description:'Led community learning and guided students in fullstack development.',responsibilities:['Coordinated learning activities and delivered technical materials.','Mentored students and encouraged collaborative learning.']},
 {id:'bem',org:'BEM KEMAKOM — Universitas Pendidikan Indonesia',role:'Staff Divkom KEMAKOM',period:'Feb 2024 — Dec 2024',category:'Organization & Development',description:'Contributed to websites and digital solutions for student organization activities.',responsibilities:['Collaborated in a three-person development team.','Developed and maintained the department website and event applications.','Gathered requirements with other divisions.']},
 {id:'ostric',org:'OSTRIC Community',role:'Community Member',period:'Feb 2023 — Dec 2023',category:'Community',description:'Explored foundational web development with fellow students in a university technology community.',responsibilities:['Participated in technology learning activities.']},
];
export const portfolioExperiences=experiences.filter(({id})=>!['internet','database','ostric-lead','ostric'].includes(id));
export const skillGroups = [
 {title:'Frontend development',context:'Academic activities & training',items:['HTML','CSS','JavaScript','TypeScript','React.js','Tailwind CSS']},
 {title:'Backend development',context:'Academic activities & training',items:['Python','Django','Node.js','Express.js','REST API']},
 {title:'Database',context:'Teaching, academic activities & training',items:['MySQL','SQL','MongoDB','Mongoose']},
 {title:'Software engineering',context:'Professional work & training',items:['Object-Oriented Programming','Software Architecture','System Design Fundamentals','API Integration','Debugging','Software Testing','Technical Documentation']},
 {title:'Tools & deployment',context:'Training',items:['Git','GitHub','Postman','PNPM','Turborepo','Vercel','CI/CD','Serverless Deployment']},
 {title:'Application security',context:'Certification & training',items:['Authentication','Authorization','OWASP Principles','Security Fundamentals']},
 {title:'AI integration',context:'Professional work',items:['External AI APIs','AI-Powered Chatbots','AI-Assisted Learning Analytics']},
];
export const documentationCategories = ['All','OSTRIC Community','Leadership & Mentoring','BEM Technology Bureau','University Teaching Assistant','Freelance Projects','SMKN 4 Bandung','Kubik Code','Eduverse Innovation Group','Training & Certifications'];
export type Documentation = {id:string;title:string;organization:string;date:string;category:string;image:string;alt:string;description:string;experienceId?:string;additionalImages?:string[]};
// Add only photographs that are approved for publication.
export const documentation: Documentation[] = [];
export type ExperienceMedia = { id:string; description:string; descriptionId:string; fullDescription:string; fullDescriptionId:string; src:string; type:'image'|'video'; alt:string; altId:string };
export type ExperienceProject = { id:string; title:string; titleId:string; githubUrl?:string; projectUrl?:string; media:ExperienceMedia[] };
const makeDummyProject=(id:string,title:string,titleId=title):ExperienceProject=>({id,title,titleId,media:[
 {id:`${id}-overview`,description:`${title} overview preview.`,descriptionId:`Pratinjau ringkasan ${title}.`,fullDescription:`This is a dummy concept preview for ${title}, added to shape the experience gallery before its real project media and description are available.`,fullDescriptionId:`Ini adalah pratinjau dummy untuk ${title}, ditambahkan untuk menyusun galeri pengalaman sebelum media dan deskripsi proyek aslinya tersedia.`,src:'/images/experience/portfolio-dummy/overview.svg',type:'image',alt:`Dummy ${title} project overview`,altId:`Pratinjau dummy ringkasan proyek ${title}`},
 {id:`${id}-details`,description:`${title} detail view.`,descriptionId:`Tampilan detail ${title}.`,fullDescription:`This second dummy view represents another screen from ${title}. Replace it with the real project screenshot, video, and project-specific description when ready.`,fullDescriptionId:`Tampilan dummy kedua ini mewakili layar lain dari ${title}. Ganti dengan tangkapan layar, video, dan deskripsi proyek yang sebenarnya saat sudah tersedia.`,src:'/images/experience/portfolio-dummy/details.svg',type:'image',alt:`Dummy ${title} project details`,altId:`Pratinjau dummy detail proyek ${title}`},
]});
// Project names follow the folders in public/images/projek; visuals remain dummy until media files are added.
export const experienceProjects: Record<string,ExperienceProject[]> = {
 eduverse:[['spektra','Spektra'],['sadarna','Sadarna'],['phy-fa-cat','PHY-FA-CAT'],['ujianladar','Ujianladar']].map(([id,title])=>makeDummyProject(id,title)),
 kubik:['web-absensi','web-lomba'].map(name=>makeDummyProject(name,name==='web-absensi'?'Web Absensi':'Web Lomba')),
 freelance:['concerto','nalar-nexus','primmbase','rabbit'].map(name=>makeDummyProject(name,name==='nalar-nexus'?'Nalar Nexus':name==='primmbase'?'PrimmBase':name[0].toUpperCase()+name.slice(1))),
 smkn:[makeDummyProject('database-teaching','Database Teaching Project','Proyek Pengajaran Basis Data')],
 internet:[makeDummyProject('internet-programming-practicum','Internet Programming Practicum','Praktikum Pemrograman Internet')],
 database:[makeDummyProject('database-practicum','Database Practicum','Praktikum Basis Data')],
 'ostric-lead':[makeDummyProject('web-ostric','Web OSTRIC')],
 bem:['colison','invit','pelatek','pelatwir','web-kemakom','wisgel'].map(name=>makeDummyProject(name,name==='web-kemakom'?'Web KEMAKOM':name[0].toUpperCase()+name.slice(1))),
 ostric:[makeDummyProject('ostric-learning','OSTRIC Learning Activities','Kegiatan Belajar OSTRIC')],
};
export type Project = {slug:string;title:string;description:string;category:string;role:string;stack:string[];image?:string;overview?:string};
// Add verified project information here when it is ready to share.
export const projects: Project[] = [];
