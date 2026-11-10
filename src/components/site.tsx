'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Braces, Building2, ChevronDown, ClipboardList, Code2, Database, FlaskConical, GitBranch, Github, GraduationCap, Layers3, Linkedin, Mail, MapPin, Network, Rocket, Server, ShieldCheck, UsersRound, Workflow, X } from 'lucide-react';
import { experienceProjects, experiences, portfolioExperiences, skillGroups, type Experience } from '@/data/content';
import { MobileNav, DesktopNav, ThemeToggle, LanguageToggle } from './ui';
import { tr, translatedExperience, useLanguage } from './language';
import { HeroPortrait } from './hero-portrait';
import { CvPreview } from './cv-preview';

const aboutToolGroups=[
 {title:'Project Management & Documentation',icon:ClipboardList,tools:[['Jira','jira.svg'],['Trello','trello.svg'],['Notion','notion.svg'],['Markdown','markdown.svg']]},
 {title:'Frontend Development',icon:Code2,tools:[['HTML','html.svg'],['CSS','css.svg'],['JavaScript','javascript.svg'],['TypeScript','typescript.svg'],['React','react.svg'],['Next.js','nextjs.svg'],['Tailwind CSS','tailwind.svg']]},
 {title:'Backend Development',icon:Server,tools:[['Go','go.svg'],['PHP','php.svg'],['Python','python.svg'],['Django','django.svg'],['Node.js','nodejs.svg'],['Express.js','express.svg'],['Laravel','laravel.svg'],['NestJS','nestjs.svg'],['CodeIgniter','codeigniter.svg'],['Java','java.svg']]},
 {title:'Databases & Caching',icon:Database,tools:[['MySQL','mysql.svg'],['PostgreSQL','postgresql.svg'],['MongoDB','mongodb.svg'],['Redis','redis.svg']]},
 {title:'Database Management',icon:Layers3,tools:[['DBeaver','dbeaver.svg'],['phpMyAdmin','phpmyadmin.svg']]},
 {title:'API & Integration Testing',icon:Workflow,tools:[['Postman','postman.svg']]},
 {title:'Software Testing',icon:FlaskConical,tools:[['Playwright','playwright.svg'],['Cypress','cypress.svg'],['Vitest','vitest.svg'],['Jest','jest.svg'],['PHPUnit','phpunit.svg'],['Pest','pest.ico'],['Go testing','go.svg']]},
 {title:'Version Control & Collaboration',icon:GitBranch,tools:[['Git','git.svg'],['GitHub','github.svg'],['GitLab','gitlab.svg']]},
 {title:'DevOps & Deployment',icon:Rocket,tools:[['Docker','docker.svg'],['GitHub Actions','github-actions.svg'],['Vercel','vercel.svg'],['FileZilla','filezilla.svg']]},
 {title:'System Architecture',icon:Network,tools:[['Draw.io','drawio.svg'],['Mermaid','mermaid.svg']]},
] as const;

function BrandMark(){return <svg className="brand-mark" viewBox="0 0 56 48" fill="none" aria-hidden="true" focusable="false"><path d="M4 5h11c10 0 16 6.4 16 19s-6 19-16 19H4V5Zm7 7v24h4c5.7 0 9-3.9 9-12s-3.3-12-9-12h-4Z" fill="currentColor" fillRule="evenodd"/><path d="M33 5h6v14L49 5h5L43 23.9 54 43h-7.3L39 29.6V43h-6V5Z" fill="var(--green)"/></svg>}
export function Header(){const {language}=useLanguage();return <header className="header"><div className="wrap header-inner"><Link href="/" className="brand-mark-link" aria-label="Danis Keysara Saputra home"><BrandMark/></Link><DesktopNav/><div className="header-controls"><LanguageToggle/><ThemeToggle/><Link className="header-cta" href="/#contact">{tr('Get in touch',language)} <ArrowUpRight size={15}/></Link></div><MobileNav/></div></header>}
export function Footer(){const {language}=useLanguage();return <footer className="footer"><div className="wrap"><div className="footer-bottom"><Link href="/" className="wordmark brand-lockup"><BrandMark/><span className="brand-wordmark">DANIS<span className="brand-accent">.</span>DEV</span></Link><p>{tr('Thoughtfully built in Bandung, Indonesia.',language)}</p><span>© {new Date().getFullYear()} Danis Keysara Saputra</span></div></div></footer>}
export function Label({children}:{children:React.ReactNode}){const {language}=useLanguage();return <div className="eyebrow"><span className="label-line"/>{typeof children==='string'?tr(children,language):children}</div>}
export function PageIntro({number,kicker,title,description}:{number:string;kicker:string;title:string;description:string}){const {language}=useLanguage();return <section className="page-intro wrap"><div className="intro-index">{number} / {tr(kicker,language)}</div><div><Label>{kicker}</Label><h1>{tr(title,language)}<span className="accent">.</span></h1><p className="lead">{tr(description,language)}</p></div></section>}
export function SectionHeading({index,label,title,link,href}:{index:string;label:string;title:string;link?:string;href?:string}){const {language}=useLanguage();return <div className="section-head"><div><Label>{label}</Label><h2>{tr(title,language)}</h2></div>{link&&href&&<Link className="text-link" href={href}>{tr(link,language)} <ArrowUpRight size={16}/></Link>}</div>}
export function Hero(){
 const {language}=useLanguage();
 const heroRef=useRef<HTMLElement>(null);
 useEffect(()=>{
  const hero=heroRef.current;
  if(!hero)return;
  let visible=false;
  let wasDocumentHidden=document.hidden;
  let revealTimer:number|undefined;
  let entranceFrame:number|undefined;
  const updateMotion=()=>{hero.dataset.motionActive=String(visible&&!document.hidden)};
  const clearEntrance=()=>{
   if(revealTimer!==undefined){window.clearTimeout(revealTimer);revealTimer=undefined}
   if(entranceFrame!==undefined){window.cancelAnimationFrame(entranceFrame);entranceFrame=undefined}
   hero.dataset.entryActive='false';
   hero.dataset.highlightActive='false';
  };
  const playEntrance=()=>{
   clearEntrance();
   entranceFrame=window.requestAnimationFrame(()=>{
    entranceFrame=undefined;
    if(!visible||document.hidden)return;
    hero.dataset.entryActive='true';
    revealTimer=window.setTimeout(()=>{
     if(visible&&!document.hidden)hero.dataset.highlightActive='true';
     revealTimer=undefined;
    },1050);
   });
  };
  const observer=typeof IntersectionObserver==='undefined'?null:new IntersectionObserver(([entry])=>{
   if(visible===entry.isIntersecting)return;
   visible=entry.isIntersecting;
   updateMotion();
   if(visible)playEntrance();
   else clearEntrance();
  },{threshold:0.01});
  if(observer)observer.observe(hero);
  else{visible=true;updateMotion();playEntrance()}
  const onVisibilityChange=()=>{
   updateMotion();
   if(document.hidden){wasDocumentHidden=true;clearEntrance()}
   else if(wasDocumentHidden&&visible)playEntrance();
   wasDocumentHidden=document.hidden;
  };
  document.addEventListener('visibilitychange',onVisibilityChange);
  updateMotion();
  return ()=>{observer?.disconnect();document.removeEventListener('visibilitychange',onVisibilityChange);clearEntrance()};
 },[]);
 return <section ref={heroRef} className="hero hero-three-column wrap" aria-labelledby="hero-title" data-entry-active="false" data-highlight-active="false">
  <div className="hero-backdrop" aria-hidden="true">
   <span className="hero-orbit hero-orbit-one"/>
   <span className="hero-orbit hero-orbit-two"/>
   <span className="hero-orbit hero-orbit-three"/>
   <svg className="hero-spark hero-spark-one" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 1c0 7-4 11-11 11 7 0 11 4 11 11 0-7 4-11 11-11C16 12 12 8 12 1Z" fill="currentColor"/></svg>
   <svg className="hero-spark hero-spark-two" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
   <svg className="hero-spark hero-spark-three" width="19" height="19" viewBox="0 0 24 24" fill="none"><path d="M12 1c0 7-4 11-11 11 7 0 11 4 11 11 0-7 4-11 11-11C16 12 12 8 12 1Z" fill="currentColor"/></svg>
   <svg className="hero-spark hero-spark-four" width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
   <span className="hero-accent-ring"/>
   <span className="hero-accent-ring hero-accent-ring-two"/>
   <span className="hero-accent-ring hero-accent-ring-three"/>
  </div>
  <div className="hero-identity">
   <p className="hero-location hero-identity-location hero-enter hero-enter-1"><span className="hero-location-pin" aria-hidden="true"><MapPin size={17} strokeWidth={1.75}/></span>{tr('BASED IN BANDUNG, WEST JAVA, INDONESIA',language)}</p>
   <h1 id="hero-title" className="hero-name" aria-label="Danis Keysara Saputra"><span className="hero-enter hero-enter-1"><span className="hero-name-highlight">Danis{' '}</span>Keysara</span><span className="hero-enter hero-enter-2">Saputra<span className="hero-name-period">.</span></span></h1>
   <div className="hero-identity-meta">
    <span className="hero-name-rule" aria-hidden="true"/>
    <nav className="hero-socials hero-enter hero-enter-5" aria-label={language==='id'?'Tautan sosial':'Social links'}>
     <a href="https://github.com/dakesha24" target="_blank" rel="noopener noreferrer" aria-label={language==='id'?'Profil GitHub dakesha24':'GitHub profile: dakesha24'} title="GitHub · dakesha24"><Github size={19} strokeWidth={1.75} aria-hidden="true"/></a>
     <a href="https://www.linkedin.com/in/dakesha24/" target="_blank" rel="noopener noreferrer" aria-label={language==='id'?'Profil LinkedIn Danis Keysara Saputra':'LinkedIn profile: Danis Keysara Saputra'} title="LinkedIn · Danis Keysara Saputra"><Linkedin size={19} strokeWidth={1.75} aria-hidden="true"/></a>
     <a href="mailto:daniskeysara@gmail.com" aria-label="Email Danis: daniskeysara@gmail.com" title="daniskeysara@gmail.com"><Mail size={19} strokeWidth={1.75} aria-hidden="true"/></a>
    </nav>
   </div>
  </div>
  <HeroPortrait language={language}/>
  <div className="hero-intro">
   <p className="hero-hello hero-enter hero-enter-2">{tr("HELLO, I'M A",language)}</p>
   <h2 className="hero-headline hero-enter hero-enter-3"><span>{language==='id'?'Pengembang':'Fullstack'}</span>{' '}<em>{language==='id'?'Fullstack':'Developer'}</em></h2>
   <p className="hero-description hero-enter hero-enter-4">{tr('I specialize in developing modern applications, integrating AI technologies, and leveraging AI tools to enhance development. I focus on creating efficient, secure, and user-centered digital solutions.',language)}</p>
   <div className="hero-cta-actions hero-enter hero-enter-5">
    <CvPreview language={language}/>
    <a href="#about" className="hero-cta hero-cta-secondary"><span>{tr('Explore my story',language)}</span><ArrowDown className="hero-cta-arrow" size={17} aria-hidden="true"/></a>
   </div>
  </div>
 </section>
}
export function AboutPreview(){
 const {language}=useLanguage();
 return <section className="section wrap">
  <SectionHeading index="01" label="A LITTLE ABOUT ME" title="Curiosity, put into practice." link="More about me" href="/#about"/>
  <div className="about-grid">
   <div className="about-statement">{tr('I enjoy bringing ideas to life through thoughtful engineering and continuous learning',language)}<span className="accent">.</span></div>
   <div className="about-copy"><p>{tr('I am a Computer Science Education graduate from Universitas Pendidikan Indonesia, specializing in full-stack software development. I build applications with experience in AI integration and chatbot development. I also hold a BNSP Junior Cyber Security certification, strengthening my understanding of secure software development. I am adaptable and comfortable working both independently and collaboratively within a team.',language)}</p></div>
  </div>
 </section>
}
export function ExperienceList({limit,items=portfolioExperiences}:{limit?:number;items?:Experience[]}){const {language}=useLanguage();return <div className="timeline">{items.slice(0,limit).map((e,i)=>{const local=language==='id'?translatedExperience[e.id]:undefined;const period=language==='id'?e.period.replace('Jun','Jun').replace('Oct','Okt').replace('Dec','Des').replace('Sep','Sep').replace('Feb','Feb'):e.period;return <article className={`timeline-item ${i===0?'featured':''}`} key={e.id}><div className="timeline-date"><span>{period}</span><i/></div><div className="timeline-content"><div className="timeline-top"><span className="category">{tr(e.category,language)}</span><span className="timeline-number">{String(i+1).padStart(2,'0')}</span></div><h3>{tr(e.role,language)}</h3><p className="organization">{e.org}</p><p>{local?.description||tr(e.description,language)}</p><details><summary>{tr('Explore responsibilities',language)} <span>+</span></summary><ul>{(local?.responsibilities||e.responsibilities.map(r=>tr(r,language))).map(r=><li key={r}>{r}</li>)}</ul>{e.skills&&<div className="tags">{e.skills.map(s=><span key={s}>{s}</span>)}</div>}</details></div></article>})}</div>}
function ExperienceEntry({job}:{job:typeof experiences[number]}){
 const {language}=useLanguage();
 const [activeProjectIndex,setActiveProjectIndex]=useState(0);
 const [activeMediaIndex,setActiveMediaIndex]=useState(0);
 const mediaDialogRef=useRef<HTMLDialogElement>(null);
 const companyProjects=experienceProjects[job.id]||[];
 const local=language==='id'?translatedExperience[job.id]:undefined;
 const activeProject=companyProjects[activeProjectIndex];
 const activeMedia=activeProject.media[activeMediaIndex];
 const changeMedia=(direction:number)=>setActiveMediaIndex(index=>(index+direction+activeProject.media.length)%activeProject.media.length);
 const selectProject=(index:number)=>{setActiveProjectIndex(index);setActiveMediaIndex(0)};
 const changeProject=(direction:number)=>selectProject((activeProjectIndex+direction+companyProjects.length)%companyProjects.length);
 const visibleProjects=companyProjects.length>2?Array.from({length:2},(_,offset)=>companyProjects[(activeProjectIndex+offset)%companyProjects.length]):companyProjects;
 const hiddenProjectCount=companyProjects.length-visibleProjects.length;
 return <article className="experience-showcase">
  <article className="experience-role">
   <div className="experience-company"><span className="company-mark" aria-hidden="true"><Building2 size={21}/></span><div className="experience-company-details"><h4 className="experience-role-title">{tr(job.role,language)}</h4><div className="experience-company-name"><h3>{job.org}</h3>{job.id==='eduverse'&&<span className="experience-contract">{language==='id'?'Kontrak':'Contract'}</span>}</div><p>{job.period}</p></div></div>
   <p className="experience-summary">{local?.description||tr(job.description,language)}</p>
   <ul className="experience-responsibilities">{(local?.responsibilities||job.responsibilities.map(item=>tr(item,language))).map(item=><li key={item}>{item}</li>)}</ul>
   {job.skills&&<div className="tags">{job.skills.map(skill=><span key={skill}>{skill}</span>)}</div>}
  </article>
  <article className="experience-projects" aria-label={language==='id'?`Proyek ${job.org}`:`${job.org} projects`}>
   <div className="experience-projects-heading"><div className="project-selector" role="tablist" aria-label={language==='id'?'Pilih proyek':'Select a project'}>{visibleProjects.map(project=>{const index=companyProjects.indexOf(project);return <button type="button" role="tab" aria-selected={index===activeProjectIndex} className="project-tab" key={project.id} onClick={()=>selectProject(index)}>{language==='id'?project.titleId:project.title}</button>})}{hiddenProjectCount>0&&<button type="button" className="project-more" onClick={()=>changeProject(2)} aria-label={language==='id'?`Lihat ${hiddenProjectCount} proyek lainnya`:`Show ${hiddenProjectCount} more projects`}>+{hiddenProjectCount}</button>}</div><div className="project-controls"><button type="button" onClick={()=>changeProject(-1)} aria-label={language==='id'?'Proyek sebelumnya':'Previous project'}><ArrowLeft size={14}/></button><span>{String(activeProjectIndex+1).padStart(2,'0')} / {String(companyProjects.length).padStart(2,'0')}</span><button type="button" onClick={()=>changeProject(1)} aria-label={language==='id'?'Proyek berikutnya':'Next project'}><ArrowRight size={14}/></button></div></div>
   {activeMedia?<>
    <div className="experience-media-wrap"><div className="experience-media-frame"><button type="button" className="experience-media-open" onClick={()=>mediaDialogRef.current?.showModal()} aria-label={language==='id'?'Perbesar media proyek':'Open project media'}>{activeMedia.type==='video'?<video key={activeMedia.src} src={activeMedia.src} muted playsInline preload="metadata" aria-hidden="true"/>:<span className="experience-media-image"><img className="experience-media-backdrop" src={activeMedia.src} alt="" aria-hidden="true"/><img className="experience-media-foreground" key={activeMedia.src} src={activeMedia.src} alt={language==='id'?activeMedia.altId:activeMedia.alt}/></span>}<span className="experience-media-zoom" aria-hidden="true"><ArrowUpRight size={16}/></span></button></div><button type="button" className="media-arrow media-arrow-prev" onClick={()=>changeMedia(-1)} aria-label={language==='id'?'Gambar sebelumnya':'Previous image'}><ArrowLeft size={16}/></button><button type="button" className="media-arrow media-arrow-next" onClick={()=>changeMedia(1)} aria-label={language==='id'?'Gambar berikutnya':'Next image'}><ArrowRight size={16}/></button><div className="media-pagination" role="group" aria-label={language==='id'?'Pilih gambar proyek':'Choose project image'}>{activeProject.media.map((media,index)=><button type="button" key={media.id} className={index===activeMediaIndex?'is-active':''} aria-label={language==='id'?`Gambar ${index+1}`:`Image ${index+1}`} aria-pressed={index===activeMediaIndex} onClick={()=>setActiveMediaIndex(index)}/>)}</div></div>
    <div className="experience-media-copy"><div className="experience-media-description"><p>{language==='id'?activeMedia.descriptionId:activeMedia.description}</p><button type="button" className="experience-read-more" onClick={()=>mediaDialogRef.current?.showModal()}>...more</button></div><div className="experience-project-links">
     {activeProject.githubUrl?<a href={activeProject.githubUrl} target="_blank" rel="noopener noreferrer"><Github size={14}/>GitHub<ArrowUpRight size={12}/></a>:<button type="button" disabled title={language==='id'?'Tautan akan ditambahkan':'Link will be added'}><Github size={14}/>GitHub</button>}
     {activeProject.projectUrl?<a href={activeProject.projectUrl} target="_blank" rel="noopener noreferrer"><span>{language==='id'?'Lihat proyek':'View project'}</span><ArrowUpRight size={13}/></a>:<button type="button" disabled title={language==='id'?'Tautan akan ditambahkan':'Link will be added'}><span>{language==='id'?'Lihat proyek':'View project'}</span><ArrowUpRight size={13}/></button>}
    </div></div>
    <dialog ref={mediaDialogRef} className="experience-media-dialog" onClick={event=>{if(event.target===event.currentTarget)mediaDialogRef.current?.close()}}><div className="experience-media-dialog-head"><div><span className="eyebrow">{language==='id'?'DETAIL PROYEK':'PROJECT DETAILS'}</span><strong>{language==='id'?activeProject.titleId:activeProject.title}</strong></div><button type="button" className="experience-description-close" aria-label={language==='id'?'Tutup':'Close'} onClick={()=>mediaDialogRef.current?.close()}><X size={18}/></button></div>{activeMedia.type==='video'?<video key={activeMedia.src} src={activeMedia.src} controls autoPlay playsInline aria-label={language==='id'?activeMedia.altId:activeMedia.alt}/>:<span className="experience-media-dialog-image"><img className="experience-media-backdrop" src={activeMedia.src} alt="" aria-hidden="true"/><img className="experience-media-foreground" key={activeMedia.src} src={activeMedia.src} alt={language==='id'?activeMedia.altId:activeMedia.alt}/></span>}<p className="experience-media-dialog-description">{language==='id'?activeMedia.fullDescriptionId:activeMedia.fullDescription}</p></dialog>
   </>:<div className="experience-project-overview"><span className="experience-overview-icon"><Code2 size={20}/></span><div><span className="eyebrow">{language==='id'?'RINGKASAN PROYEK':'PROJECT OVERVIEW'}</span><p>{language==='id'?activeProject.descriptionId:activeProject.description}</p></div></div>}
  </article>
 </article>
}
export function ExperienceShowcase({items=portfolioExperiences}:{items?:Experience[]}){
 return <div className="experience-showcase-list">{items.map(job=><ExperienceEntry key={job.id} job={job}/>)}</div>
}
export function SkillsGrid(){const {language}=useLanguage();return <div className="skills-grid">{skillGroups.map((g,i)=><article className="skill-card" key={g.title}><div className="skill-top"><span>{String(i+1).padStart(2,'0')} / {tr(g.context,language)}</span><ArrowUpRight size={17}/></div><h3>{tr(g.title,language)}</h3><div className="tags">{g.items.map(item=><span key={item}>{item}</span>)}</div></article>)}</div>}
export function AboutSkills(){const {language}=useLanguage();const [showMore,setShowMore]=useState(false);const renderGroup=(group:typeof aboutToolGroups[number])=>{const Icon=group.icon;return <article className="about-tool-group" key={group.title}><h4><Icon size={15} strokeWidth={1.8} aria-hidden="true"/>{tr(group.title,language)}</h4><ul>{group.tools.map(([name,logo])=><li key={name}><img src={`/images/tools/${logo}`} alt="" aria-hidden="true"/><span>{name}</span></li>)}</ul></article>};return <div className="about-toolkit"><div className="about-toolkit-heading"><div><h3>{tr('Skills & Tools',language)}</h3><p>{tr('Tools I use to design, build, test, and ship software.',language)}</p></div></div><div className="about-toolkit-preview">{aboutToolGroups.slice(0,3).map(renderGroup)}<button type="button" className={`about-toolkit-action${showMore?' is-open':''}`} aria-expanded={showMore} onClick={()=>setShowMore(open=>!open)}><span>{showMore?(language==='id'?'Lebih sedikit':'Less'):(language==='id'?'Lainnya':'More')}</span><ChevronDown size={16} aria-hidden="true"/></button></div>{showMore&&<div className="about-tool-groups about-tool-groups-extra">{aboutToolGroups.slice(3).map(renderGroup)}</div>}</div>}
export function AboutCards(){const {language}=useLanguage();const cards=[{icon:GraduationCap,title:'Education',text:'Computer Science Education at Universitas Pendidikan Indonesia.'},{icon:Braces,title:'Professional focus',text:'Building useful web applications across the stack.'},{icon:Layers3,title:'Development',text:'Experience with digital learning features, APIs, and databases.'},{icon:UsersRound,title:'Teaching & mentorship',text:'Guiding students in classrooms and technology communities.'},{icon:Database,title:'Technical training',text:'438 hours across two national development programs.'},{icon:ShieldCheck,title:'Certification',text:'Junior Cyber Security certification from BNSP.'}];return <div className="about-cards">{cards.map(({icon:Icon,title,text})=><article key={title}><Icon size={21}/><h3>{tr(title,language)}</h3><p>{tr(text,language)}</p></article>)}</div>}
