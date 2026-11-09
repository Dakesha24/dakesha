'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { documentation, documentationCategories } from '@/data/content';
import { tr, useLanguage } from './language';

const links=[['home','Home'],['about','About'],['experience','Experience'],['projects','Projects'],['journey','Journey'],['skills','Skills'],['credentials','Credentials'],['contact','Contact']];

export function LanguageToggle(){const {language,setLanguage}=useLanguage();const [open,setOpen]=useState(false);const root=useRef<HTMLDivElement>(null);useEffect(()=>{if(!open)return;const outside=(event:MouseEvent)=>{if(!root.current?.contains(event.target as Node))setOpen(false)};const keyboard=(event:KeyboardEvent)=>{if(event.key==='Escape')setOpen(false)};document.addEventListener('mousedown',outside);document.addEventListener('keydown',keyboard);return()=>{document.removeEventListener('mousedown',outside);document.removeEventListener('keydown',keyboard)}},[open]);const choice=language==='en'?{label:'EN',flag:'/images/flags/gb.svg'}:{label:'IND',flag:'/images/flags/id.svg'};function select(next:'en'|'id'){setLanguage(next);setOpen(false)}const flag=(src:string)=><span className="language-flag"><img src={src} alt=""/></span>;return <div className="language-menu" ref={root}><button className="language-trigger" type="button" aria-label={tr('Select language',language)} aria-haspopup="listbox" aria-expanded={open} onClick={()=>setOpen(!open)}>{flag(choice.flag)}<span>{choice.label}</span><span className="language-chevron" aria-hidden="true"/></button>{open&&<div className="language-options" role="listbox" aria-label={tr('Select language',language)}><button className="language-option" type="button" role="option" aria-selected={language==='en'} onClick={()=>select('en')}>{flag('/images/flags/gb.svg')}<span>English</span><span className="language-code">EN</span></button><button className="language-option" type="button" role="option" aria-selected={language==='id'} onClick={()=>select('id')}>{flag('/images/flags/id.svg')}<span>Bahasa Indonesia</span><span className="language-code">IND</span></button></div>}</div>}
export function ThemeToggle(){
 const [theme,setTheme]=useState<'light'|'dark'>('light');
 const [pulling,setPulling]=useState(false);
 const themeTimer=useRef<ReturnType<typeof setTimeout>|null>(null);
 const pullTimer=useRef<ReturnType<typeof setTimeout>|null>(null);
 const {language}=useLanguage();
 useEffect(()=>{setTheme(document.documentElement.dataset.theme==='dark'?'dark':'light')},[]);
 useEffect(()=>()=>{if(themeTimer.current)clearTimeout(themeTimer.current);if(pullTimer.current)clearTimeout(pullTimer.current)},[]);
 function toggle(){
  if(themeTimer.current)clearTimeout(themeTimer.current);
  if(pullTimer.current)clearTimeout(pullTimer.current);
  setPulling(true);
  themeTimer.current=setTimeout(()=>{
   const next=theme==='light'?'dark':'light';
   document.documentElement.dataset.theme=next;
   setTheme(next);
   try{localStorage.setItem('portfolio-theme',next)}catch{}
   themeTimer.current=null;
   pullTimer.current=setTimeout(()=>{setPulling(false);pullTimer.current=null},300);
  },150);
 }
 const label=theme==='light'?'Dark':'Light';
 const action=theme==='light'?'Switch to dark mode':'Switch to light mode';
 return <button className="theme-toggle theme-toggle-lamp" type="button" onClick={toggle} aria-label={tr(action,language)} title={tr(action,language)} aria-pressed={theme==='dark'} data-theme={theme} data-pulling={pulling}>
  <span className="theme-lamp" aria-hidden="true"><span className="theme-lamp-glow"/><span className="theme-lamp-wire"/><span className="theme-lamp-shade"/><span className="theme-lamp-bulb"/><span className="theme-lamp-pull"><i/></span></span>
  <span className="theme-toggle-label">{tr(label,language)}</span>
 </button>
}

function useActiveSection(){const path=usePathname();const [active,setActive]=useState('home');useEffect(()=>{if(path!=='/')return;const update=()=>{const marker=window.scrollY+150;let current='home';for(const [id] of links){const section=document.getElementById(id);if(section&&section.offsetTop<=marker)current=id}setActive(current)};update();window.addEventListener('scroll',update,{passive:true});return()=>window.removeEventListener('scroll',update)},[path]);return path==='/'?active:''}
export function DesktopNav(){const active=useActiveSection();const {language}=useLanguage();return <nav className="desktop-nav" aria-label={tr('Main navigation',language)}>{links.map(([id,label])=><Link href={`/#${id}`} key={id} aria-current={active===id?'location':undefined}>{tr(label,language)}</Link>)}</nav>}
export function MobileNav(){const [open,setOpen]=useState(false);const active=useActiveSection();const {language}=useLanguage();return <div className="mobile-nav"><button className="menu-button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open?tr('Close menu',language):tr('Open menu',language)}>{open?<X/>:<Menu/>}</button>{open&&<nav id="mobile-menu" className="mobile-menu" aria-label={tr('Main navigation',language)} onKeyDown={e=>{if(e.key==='Escape')setOpen(false)}}>{links.map(([id,label])=><Link aria-current={active===id?'location':undefined} onClick={()=>setOpen(false)} href={`/#${id}`} key={id}>{tr(label,language)}<span>↗</span></Link>)}</nav>}</div>}

export function Gallery(){const {language}=useLanguage();const [category,setCategory]=useState('All');const [selected,setSelected]=useState<number|null>(null);const dialog=useRef<HTMLDialogElement>(null);const filtered=documentation.filter(d=>category==='All'||d.category===category);useEffect(()=>{if(selected!==null&&!dialog.current?.open)dialog.current?.showModal();if(selected===null&&dialog.current?.open)dialog.current.close()},[selected]);const item=selected===null?null:filtered[selected];function move(step:number){if(selected!==null&&filtered.length)setSelected((selected+step+filtered.length)%filtered.length)}return <><div className="filter-bar" aria-label={tr('Filter documentation',language)}>{documentationCategories.map(c=><button type="button" key={c} onClick={()=>{setCategory(c);setSelected(null)}} aria-pressed={category===c}>{tr(c,language)}</button>)}</div>{filtered.length===0?<div className="empty-state"><span className="empty-symbol">✳</span><div><div className="eyebrow">{tr('THE STORY IS STILL UNFOLDING',language)}</div><h2>{tr('Moments worth sharing.',language)}</h2><p>{tr('Photographs and activity documentation will appear here once they are ready to be shared.',language)}</p></div></div>:<div className="gallery-grid">{filtered.map((entry,i)=><article key={entry.id}><button className="gallery-open" onClick={()=>setSelected(i)} aria-label={`${tr('View',language)} ${tr(entry.title,language)}`}><img src={entry.image} alt={entry.alt} loading="lazy"/></button><span>{tr(entry.category,language)} · {entry.date}</span><h3>{tr(entry.title,language)}</h3><p>{tr(entry.description,language)}</p></article>)}</div>}<dialog ref={dialog} className="lightbox" onClose={()=>setSelected(null)} onKeyDown={e=>{if(e.key==='ArrowLeft')move(-1);if(e.key==='ArrowRight')move(1)}}>{item&&<><div className="lightbox-bar"><span>{tr(item.category,language)} / {item.date}</span><button onClick={()=>setSelected(null)} aria-label={tr('Close image',language)}>✕</button></div><img src={item.image} alt={item.alt}/><div className="lightbox-caption"><div><h2>{tr(item.title,language)}</h2><p>{item.organization} · {tr(item.description,language)}</p></div><div><button onClick={()=>move(-1)} aria-label={tr('Previous image',language)}>←</button><button onClick={()=>move(1)} aria-label={tr('Next image',language)}>→</button></div></div></>}</dialog></>}
