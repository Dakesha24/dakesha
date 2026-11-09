'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { AboutSkills, ExperienceShowcase, Hero } from '@/components/site';
import { experiences } from '@/data/content';
import { tr, translatedExperience, useLanguage } from '@/components/language';

const educationExperiences=experiences.filter(({id})=>['internet','database','ostric-lead'].includes(id));

export default function Home(){const {language}=useLanguage();const t=(s:string)=>tr(s,language);const aboutRef=useRef<HTMLElement>(null);useEffect(()=>{const about=aboutRef.current;if(!about)return;if(window.matchMedia('(prefers-reduced-motion: reduce)').matches||typeof IntersectionObserver==='undefined'){about.dataset.revealed='true';return}const observer=new IntersectionObserver(([entry])=>{const next=String(entry.isIntersecting);if(about.dataset.revealed!==next)about.dataset.revealed=next},{threshold:.1});observer.observe(about);return()=>observer.disconnect()},[]);return <>
  <div id="home"><Hero/></div>
  <section ref={aboutRef} id="about" className="section about-home-section" data-revealed="false"><div className="wrap">
    <div className="about-feature-layout">
      <h2 className="about-feature-title">About Me</h2>
      <div className="about-description-box"><p>{t('I am a Computer Science Education graduate from Universitas Pendidikan Indonesia, specializing in full-stack software development. I build applications with experience in AI integration and chatbot development. I also hold a BNSP Junior Cyber Security certification, strengthening my understanding of secure software development. I am adaptable and comfortable working both independently and collaboratively within a team.')}</p></div>
    </div>
    <AboutSkills/>
  </div></section>
  <section id="experience" className="section section-tint experience-section"><div className="wrap"><div className="section-head experience-section-heading"><h2>Experience</h2></div><ExperienceShowcase/></div></section>
  <section id="education" className="section education-section"><div className="wrap"><div className="section-head education-section-heading"><h2>Education</h2></div><div className="education-layout"><div className="education-photo"><Image src="/images/education.png" alt="Danis Keysara Saputra during his studies" width={646} height={646} unoptimized priority={false}/><span>{t('BANDUNG, INDONESIA')}</span></div><div className="education-content"><div className="education-degree"><span className="category">{t('2022 — 2026 · BANDUNG, INDONESIA')}</span><h3>Universitas Pendidikan Indonesia</h3><p className="organization">{t('Bachelor of Computer Science Education')}</p><p>{t('S1 Pendidikan Ilmu Komputer. Studied programming, web development, databases, artificial intelligence, software engineering fundamentals, and educational technology, alongside community and mentoring activities.')}</p><div className="tags"><span>{t('GPA 3.93 / 4.00')}</span><span>{t('Graduated August 2026')}</span></div></div><div className="education-campus-experiences"><span className="eyebrow">{t('CAMPUS EXPERIENCE')}</span>{educationExperiences.map(job=>{const local=translatedExperience[job.id];const role=job.id==='internet'?(language==='id'?'Asisten Praktikum Pemrograman Internet':'Internet Programming Practicum Assistant'):job.id==='database'?(language==='id'?'Asisten Praktikum Basis Data':'Database Practicum Assistant'):(language==='id'?'Ketua & Pengajar OSTRIC':'OSTRIC Chairperson & Instructor');return <article className="education-campus-item" key={job.id}><div className="education-campus-top"><h4>{role}</h4><span>{job.period}</span></div><p className="organization">{job.org}</p><p>{language==='id'&&local?local.description:job.description}</p></article>})}</div></div></div></div></section>
  <section id="contact" className="section contact-closing"><div className="wrap contact-closing-inner"><div><p>{language==='id'?'Terima kasih sudah berkunjung.':'Thanks for stopping by.'}</p><h2>{language==='id'?<>Mari <em>terhubung.</em></>:<>Let’s <em>connect.</em></>}</h2></div><div className="contact-socials"><a href="https://github.com/dakesha24" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20}/></a><a href="https://www.linkedin.com/in/dakesha24/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20}/></a><a href="mailto:daniskeysara@gmail.com" aria-label="Email Danis"><Mail size={20}/></a></div></div></section>
</>}
