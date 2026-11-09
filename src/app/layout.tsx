import type { Metadata } from 'next';
import { Header, Footer } from '@/components/site';
import { LanguageProvider } from '@/components/language';
import './globals.css';
export const metadata:Metadata={title:{default:'Danis Keysara Saputra — Fullstack Developer',template:'%s | Danis Keysara Saputra'},description:'The portfolio of Danis Keysara Saputra, a fullstack developer and software engineer based in Bandung, Indonesia.',openGraph:{title:'Danis Keysara Saputra — Fullstack Developer',description:'Thoughtful digital solutions through modern web engineering.',type:'website'}};
const themeScript = `(function(){try{var t=localStorage.getItem('portfolio-theme');document.documentElement.dataset.theme=t==='dark'?'dark':'light'}catch(e){document.documentElement.dataset.theme='light'}})()`;
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:themeScript}} /></head><body><LanguageProvider><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/></LanguageProvider></body></html>}
