'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { Language } from './language';

const portraits = [
 { theme: 'light', original: '/images/hero-porto-lightmode.webp', alternate: '/images/hero-porto-lightmode2.webp', width: 1122, height: 1402 },
 { theme: 'dark', original: '/images/hero-porto-darkmode.webp', alternate: '/images/hero-porto-darkmode2.webp', width: 1198, height: 1312 },
] as const;
type Theme = typeof portraits[number]['theme'];
type ImageStatus = 'loading' | 'ready' | 'error';

export function HeroPortrait({ language }: { language: Language }) {
 const [preview, setPreview] = useState<{ theme: Theme } | null>(null);
 const [hovered, setHovered] = useState(false);
 const [suppressHover, setSuppressHover] = useState(false);
 const [imageStatus, setImageStatus] = useState<Record<Theme, ImageStatus>>({ light: 'loading', dark: 'loading' });
 const previewStatus = preview ? imageStatus[preview.theme] : undefined;
 const showAlternate = preview !== null || (hovered && !suppressHover);
 const leavePortrait = () => {
  setHovered(false);
  setPreview(null);
  setSuppressHover(false);
 };

 useEffect(() => {
  if (!preview || previewStatus === 'loading') return;
  const returnToOriginal = () => {
   setPreview(null);
   setSuppressHover(true);
  };
  if (previewStatus === 'error') {
   returnToOriginal();
   return;
  }
  // Start the three-second preview after the requested photo has loaded.
  const timer = setTimeout(returnToOriginal, 3000);
  return () => clearTimeout(timer);
 }, [preview, previewStatus]);

 useEffect(() => {
  const reset = () => {
   setPreview(null);
   setHovered(false);
   setSuppressHover(false);
  };
  const onVisibilityChange = () => { if (document.hidden) reset(); };
  window.addEventListener('blur', reset);
  document.addEventListener('visibilitychange', onVisibilityChange);
  return () => {
   window.removeEventListener('blur', reset);
   document.removeEventListener('visibilitychange', onVisibilityChange);
  };
 }, []);

 return <div className="hero-visual hero-enter hero-enter-3">
  <button
   type="button"
   className="hero-portrait-control"
   data-preview={showAlternate}
   data-timed-preview={preview !== null}
   data-float-paused={showAlternate}
   aria-pressed={showAlternate}
   aria-label={language === 'id' ? 'Arahkan kursor untuk melihat foto lain Danis. Klik untuk menampilkan selama 3 detik; klik lagi untuk langsung kembali.' : 'Hover to preview another photo of Danis. Click to show it for 3 seconds; click again to return immediately.'}
   onPointerEnter={event => {
    if (event.pointerType !== 'touch') {
     setHovered(true);
     setSuppressHover(false);
    }
   }}
   onPointerLeave={event => { if (event.pointerType !== 'touch') leavePortrait(); }}
   onPointerCancel={leavePortrait}
   onClick={() => {
    if (preview) {
     setPreview(null);
     setSuppressHover(true);
     return;
    }
    const theme: Theme = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
    setSuppressHover(false);
    setPreview({ theme });
   }}
  >
   {portraits.map(portrait => <div key={portrait.theme} className={`hero-photo hero-photo-${portrait.theme}`} data-ready={imageStatus[portrait.theme] === 'ready'}>
    <Image className="hero-photo-default" src={portrait.original} alt="Danis Keysara Saputra" width={portrait.width} height={portrait.height} priority unoptimized draggable={false} sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 540px"/>
    <Image className="hero-photo-alternate" src={portrait.alternate} alt="" aria-hidden="true" width={portrait.width} height={portrait.height} unoptimized draggable={false} loading="lazy" fetchPriority="low" sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 540px" onLoad={() => setImageStatus(previous => ({ ...previous, [portrait.theme]: 'ready' }))} onError={() => setImageStatus(previous => ({ ...previous, [portrait.theme]: 'error' }))}/>
   </div>)}
  </button>
 </div>;
}
