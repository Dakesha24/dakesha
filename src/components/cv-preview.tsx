'use client';

import { useEffect, useRef, useState } from 'react';
import { Download, ExternalLink, FileText, X } from 'lucide-react';
import { tr } from './language';
import type { Language } from './language';

const cvUrl = '/CV-DANIS.pdf';

export function CvPreview({ language }: { language: Language }) {
 const dialog = useRef<HTMLDialogElement>(null);
 const [open, setOpen] = useState(false);
 const [loaded, setLoaded] = useState(false);
 const t = (value: string) => tr(value, language);

 useEffect(() => {
  if (!open) return;
  const root = document.documentElement;
  const previousOverflow = root.style.overflow;
  const previousGutter = root.style.scrollbarGutter;
  const previousBodyOverflow = document.body.style.overflow;
  root.style.scrollbarGutter = 'stable';
  root.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
  return () => {
   root.style.overflow = previousOverflow;
   root.style.scrollbarGutter = previousGutter;
   document.body.style.overflow = previousBodyOverflow;
  };
 }, [open]);

 function showPreview() {
  if (!dialog.current || dialog.current.open) return;
  setLoaded(false);
  setOpen(true);
  dialog.current.showModal();
 }

 return <>
  <button type="button" className="hero-cta hero-cta-primary" aria-haspopup="dialog" aria-controls="cv-preview-dialog" aria-expanded={open} onClick={showPreview}><FileText size={17} aria-hidden="true"/><span>{t('View my CV')}</span></button>
  <dialog
   ref={dialog}
   id="cv-preview-dialog"
   className="cv-dialog"
   aria-labelledby="cv-preview-title"
   onClose={() => setOpen(false)}
   onClick={event => {
    if (event.target !== event.currentTarget) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.current?.close();
   }}
  >
   <header className="cv-dialog-header">
    <div className="cv-dialog-heading"><span className="cv-document-icon"><FileText size={20} aria-hidden="true"/></span><div><h2 id="cv-preview-title">{t('My CV')}</h2><p>Danis Keysara Saputra</p></div></div>
    <button type="button" className="cv-close" onClick={() => dialog.current?.close()} aria-label={t('Close CV')} autoFocus><X size={20} aria-hidden="true"/></button>
   </header>
   <div className="cv-dialog-body" aria-busy={open && !loaded}>
    {open && !loaded && <div className="cv-loading" role="status"><span className="cv-loading-mark" aria-hidden="true"/>{t('Loading CV…')}</div>}
    {open && <iframe src={`${cvUrl}#view=FitH`} title="CV — Danis Keysara Saputra" onLoad={() => setLoaded(true)}/>}
   </div>
   <footer className="cv-dialog-footer">
    <span className="cv-file-caption">PDF · Danis Keysara Saputra</span>
    <div className="cv-dialog-actions">
     <a href={cvUrl} target="_blank" rel="noopener noreferrer" className="cv-action"><ExternalLink size={16} aria-hidden="true"/>{t('Open PDF')}</a>
     <a href={cvUrl} download="CV-Danis-Keysara-Saputra.pdf" className="cv-action cv-action-primary"><Download size={16} aria-hidden="true"/>{t('Download CV')}</a>
    </div>
   </footer>
  </dialog>
 </>;
}
