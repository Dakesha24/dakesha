import type { Metadata } from 'next';
import { PageIntro, SkillsGrid } from '@/components/site';
export const metadata:Metadata={title:'Skills',description:'Technologies and practices explored through Danis’s professional work, academic activities, and training.'};
export default function Skills(){return <><PageIntro number="05" kicker="SKILLS & TOOLS" title="The toolkit" description="Technologies and practices explored through professional work, academic activities, and training. Each experience has shaped a different part of the toolkit."/><section className="section wrap"><SkillsGrid/></section></>}
