import type { Metadata } from 'next';
import { PageIntro } from '@/components/site';
import { Gallery } from '@/components/ui';
export const metadata:Metadata={title:'Journey',description:'A visual journey through the communities, classrooms, and experiences that shaped Danis’s path.'};
export default function Journey(){return <><PageIntro number="04" kicker="BEYOND THE CODE" title="The moments in between" description="A visual journey through the communities, classrooms, projects, and experiences that shaped my path in software development."/><section className="section wrap"><Gallery/></section></>}
