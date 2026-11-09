# MASTER PROMPT — PREMIUM FULLSTACK DEVELOPER PORTFOLIO

## ROLE & OBJECTIVE

Act as a Senior Product Designer, Senior UI/UX Engineer, Creative Frontend Developer, Software Architect, and experienced Fullstack Engineer.

Build a complete, production-ready, visually sophisticated personal portfolio website for:

**Danis Keysara Saputra**

Professional identity:
- Fullstack Developer
- Software Engineer
- Web Application Developer
- AI Integration Enthusiast
- Application Security Enthusiast

The website must present my education, professional work, technical expertise, leadership experience, teaching experience, software projects, certifications, training programs, and photographic documentation in a modern, cohesive, and credible manner.

This is not a conventional CV website.

The goal is to create a premium personal website that feels like a combination of:
- Professional software engineering portfolio
- Modern technology company website
- Minimalist editorial experience
- Interactive professional career journal
- High-quality software project showcase

The result must look like a carefully designed, real-world portfolio created by a professional product design and engineering team.

Avoid generic AI-generated template aesthetics.

Do not produce a simple landing page with generic cards.

Build a complete, well-structured, responsive, accessible, high-performance website.

---

# 1. DESIGN CONCEPT

## Design Theme

**Emerald & Charcoal — Premium Modern Engineering Portfolio**

Visual direction:
- Modern Corporate Technology
- Sophisticated Minimalism
- Clean Editorial Layout
- Premium SaaS Aesthetics
- Carefully Structured Bento Grids
- Strong Typography
- Professional Photography
- Subtle Engineering-Inspired Details
- Elegant Interactive Timeline
- Purposeful Microinteractions

The website should communicate:
- Technical competence
- Professionalism
- Reliability
- Attention to detail
- Creativity
- Engineering precision
- Continuous learning

Do not make the design excessively futuristic, playful, cyberpunk, or gaming-inspired.

## Color Palette

Use this palette consistently throughout the website:

Primary Background:
`#111827` — Charcoal

Secondary Background:
`#1F2937` — Dark Slate

Elevated Surface:
`#273449` — Elevated Charcoal

Primary Accent:
`#059669` — Emerald Green

Accent Hover:
`#047857` — Deep Emerald

Accent Highlight:
`#34D399` — Mint Emerald

Primary Text:
`#F9FAFB` — Off-White

Secondary Text:
`#9CA3AF` — Muted Gray

Borders:
`#374151` — Subtle Charcoal Border

The charcoal background should occupy approximately 75–85% of the overall visual treatment.

Emerald should be used primarily for:
- Primary buttons
- Active navigation
- Important links
- Small highlights
- Status indicators
- Timeline markers
- Interactive states
- Section accents

Avoid excessive use of bright green or gradients.

Use negative space generously.

## Typography

Use:
- Geist Sans for primary interface typography
- Geist Mono for small technical labels
- Inter as a fallback

Typography rules:
- Large, confident hero headings
- Strong section hierarchy
- Comfortable line heights
- Clear text contrast
- Small uppercase section labels where appropriate
- Precise letter spacing

Do not use too many font weights.

## UI Details

Implement:
- Minimal borders
- Soft shadows
- Rounded corners between 12px and 20px
- Structured grid layouts
- Subtle background noise or grid texture if it improves visual quality
- Elegant hover interactions
- Consistent spacing system
- Well-designed empty states
- Strong visual separation between sections

Avoid excessive glowing effects and overused glassmorphism.

---

# 2. TECHNOLOGY STACK

Build the portfolio using:

- Next.js with App Router
- TypeScript
- Tailwind CSS
- Motion for React
- Lucide React
- shadcn/ui when appropriate
- Next.js Image
- React Hook Form if a contact form is implemented
- Zod for form validation

Use current stable, mutually compatible package versions.

Follow modern Next.js conventions.

Implement:
- Server Components by default
- Client Components only when interactivity is needed
- Reusable components
- Type-safe data structures
- Proper error handling
- Responsive images
- SEO metadata
- Open Graph tags
- Sitemap
- robots.txt
- Accessible semantic HTML

Keep dependencies minimal and justified.

Do not introduce a database unless the functionality actually requires one.

The initial portfolio should be deployable as a mostly static, content-driven website.

---

# 3. WEBSITE ARCHITECTURE

Create these routes:

`/` — Home

`/about` — About Me

`/experience` — Professional Experience

`/projects` — Project Showcase

`/projects/[slug]` — Project Detail

`/journey` — Career & Activity Documentation

`/skills` — Technical Skills

`/credentials` — Education, Training & Certifications

`/contact` — Contact

Each page must be fully designed, responsive, and integrated into the overall design system.

Use consistent global navigation and footer.

If a page is too small to justify separation, it may also appear as a summarized section on the homepage.

The homepage should act as a curated overview and link to detailed pages.

---

# 4. GLOBAL NAVIGATION

Create a premium sticky navigation bar.

Desktop navigation:
- Home
- About
- Experience
- Projects
- Journey
- Credentials
- Contact

Left side:
Personal wordmark: **DANIS.DEV**

Right side:
- Navigation links
- Download CV button

Use an emerald active-page indicator.

Navigation behavior:
- Sticky on scroll
- Subtle background transition
- Keyboard accessible
- Smooth hover states
- Responsive mobile drawer
- Appropriate focus states

On smaller screens:
- Use a compact hamburger menu
- Maintain generous spacing
- Support keyboard navigation
- Close the menu when navigating

Do not create nonfunctional navigation links.

---

# 5. HOME PAGE

## Section 1 — Hero

Create a premium, impactful hero section.

Layout:
- Two-column desktop composition
- Content on the left
- Professional profile photo on the right
- Responsive stacked layout on mobile

Eyebrow text:

"HELLO, I'M DANIS"

Main heading:

**Danis Keysara Saputra**

Professional headline:

**Fullstack Developer & Software Engineer**

Supporting headline:

"Building thoughtful digital solutions through modern web engineering."

Description:

"I'm a Fullstack Developer with experience building web applications, integrating APIs and intelligent features, managing databases, and transforming ideas into functional digital solutions."

Buttons:
- Explore My Projects
- Discover My Journey

Social links:
- GitHub
- LinkedIn
- Email

Use placeholder URLs until the real links are provided.

Do not invent account usernames or contact information.

## Hero Visual

Use a large professional portrait placeholder with:
- Editorial crop
- Subtle emerald border accent
- Elegant geometric framing
- Minimal decorative details
- Responsive image handling

Do not use a random person's portrait as my identity.

If my real portrait is unavailable, use a neutral placeholder.

## Hero Supporting Elements

Add subtle information labels:
- Based in Bandung, Indonesia
- Fullstack Development
- Software Engineering

Avoid unverified claims such as:
- Number of happy clients
- Years of expertise
- Number of completed projects
- Revenue impact
- Performance percentages

---

# 6. ABOUT ME

Create a personal introduction section with a professional, natural tone.

## Personal Information

Name:
Danis Keysara Saputra

Education:
Bachelor's Degree in Computer Science Education

University:
Universitas Pendidikan Indonesia

Class:
2022

Graduation:
August 2026

GPA:
3.93/4.00

Location:
Bandung, West Java, Indonesia

## About Description

Write a polished professional introduction based on the following facts:

I graduated from Universitas Pendidikan Indonesia with a degree in Computer Science Education.

I developed an interest in Fullstack Development during university.

Throughout my studies, I actively participated in technology communities, developed websites for student organizations, worked as a teaching assistant, and independently developed applications.

I later gained professional experience as a Fullstack Developer at PT Eduverse Innovation Group.

My technical interests include modern web development, backend systems, database integration, AI integration, testing, and application security.

Use a credible, confident, and approachable writing style.

Do not exaggerate expertise or professional seniority.

## About Bento Grid

Create visually attractive cards for:
1. Education
2. Professional Focus
3. Development Experience
4. Teaching & Mentorship
5. Technical Training
6. Certification

Cards should include subtle icons, clear typography, and short meaningful descriptions.

---

# 7. PROFESSIONAL EXPERIENCE & CAREER TIMELINE

Build a premium, interactive career timeline.

The timeline should be one of the most important components of the portfolio.

Visual style:
- Vertical editorial timeline
- Alternating layout on large screens if suitable
- Emerald timeline markers
- Subtle connecting lines
- Clearly defined year labels
- Professional organization cards
- Photographic documentation thumbnails
- Expandable details
- Technology tags

Every experience must contain:
- Organization name
- Role
- Start and end date
- Employment or activity type
- Main responsibilities
- Skills and technologies when known
- Documentation gallery
- Optional related projects

Support overlapping experiences without changing the real chronology.

Use the following verified personal information.

## EXPERIENCE 1

Organization:
OSTRIC Community

Position:
Community Member

Period:
February 2023 – December 2023

Description:
Joined OSTRIC, a university technology community focused on learning and exploring Fullstack Development.

Activities:
- Participated in technology learning activities.
- Explored foundational web development concepts.
- Learned alongside fellow students.

Category:
Community

## EXPERIENCE 2

Organization:
OSTRIC Community

Position:
Chairperson & Instructor

Period:
February 2024 – December 2024

Description:
Led the OSTRIC technology community and served as an instructor guiding students in Fullstack Development.

Responsibilities:
- Coordinating community learning activities.
- Delivering technical learning materials.
- Mentoring students.
- Encouraging collaborative technology learning.
- Supporting student skill development.

Category:
Leadership & Teaching

## EXPERIENCE 3

Organization:
BEM KEMAKOM — Universitas Pendidikan Indonesia

Position:
Technology Bureau Staff

Division:
KOMTEKINFO

Period:
February 2024 – December 2024

Description:
Contributed to the development and maintenance of the department's website and digital solutions for student organization activities.

Responsibilities:
- Collaborating with a three-person development team.
- Developing and maintaining the department website.
- Building websites and applications for organizational events.
- Coordinating with other divisions to gather requirements.
- Supporting digital infrastructure for student activities.

Category:
Organization & Development

## EXPERIENCE 4

Organization:
Universitas Pendidikan Indonesia

Position:
Database Practicum Teaching Assistant

Period:
September 2024 – December 2024

Responsibilities:
- Assisting database laboratory sessions.
- Teaching and guiding MySQL practice.
- Supporting students with SQL implementation.
- Mentoring students on final database projects.

Technologies:
MySQL, SQL

Category:
Academic Teaching

## EXPERIENCE 5

Organization:
Universitas Pendidikan Indonesia

Position:
Internet Programming Practicum Teaching Assistant

Period:
October 2024 – December 2024

Responsibilities:
- Assisting Internet Programming practical classes.
- Guiding students in web application development.
- Supporting frontend-backend integration.
- Mentoring final projects using React and Django.

Technologies:
React, Django, Python

Category:
Academic Teaching

## EXPERIENCE 6

Position:
Freelance Application Developer

Period:
December 2024 – June 2026

Description:
Developed applications to support student research activities and competitions.

Responsibilities:
- Understanding user requirements.
- Designing software solutions.
- Developing application features.
- Implementing frontend and backend functionality when required.
- Supporting project-specific technical requirements.
- Testing and refining applications.

Category:
Freelance Development

Do not invent clients, project titles, payment amounts, or research results.

## EXPERIENCE 7

Organization:
SMKN 4 Bandung

Position:
Database Teaching Intern

Period:
February 2025 – June 2025

Responsibilities:
- Teaching SQL and database fundamentals.
- Guiding students in database exercises.
- Mentoring student final projects.
- Supporting development of Fullstack applications.
- Focusing on SQL integration within student applications.

Category:
Teaching Internship

## EXPERIENCE 8

Organization:
Kubik Code

Position:
Coding Tutor

Period:
October 2025 – October 2026

Responsibilities:
- Teaching coding to elementary school students in grades 1–6.
- Introducing programming fundamentals.
- Guiding interactive programming activities.
- Teaching Scratch, PictoBlox, Roblox Studio, Python, and web programming.
- Developing learning materials appropriate to students' abilities.

Category:
Technology Education

## EXPERIENCE 9

Organization:
PT Eduverse Innovation Group

Position:
Fullstack Developer

Period:
June 2026 – October 2026

Employment Type:
Contract

Description:
Developed and maintained web applications supporting digital learning systems.

Responsibilities:
1. Developing and maintaining web applications across frontend and backend.
2. Managing relational databases and API integrations.
3. Developing digital learning management features.
4. Building features for competencies, assessments, and learning evaluations.
5. Integrating external Artificial Intelligence APIs.
6. Developing AI-supported chatbot functionality.
7. Supporting learning analytics through AI integration.
8. Building analytics dashboards and reporting features.
9. Performing application testing and debugging.
10. Implementing bug fixes and performance improvements.

Category:
Professional Employment

This experience should receive the strongest visual emphasis because it is directly relevant to Fullstack Engineer roles.

Do not infer specific programming frameworks used at Eduverse unless separately provided.

---

# 8. FEATURED PROJECTS

Build a visually sophisticated project showcase.

Project section headline:

**Selected Works**

Subtitle:

"A collection of applications, technical solutions, and digital experiences I've worked on."

## Project Card Design

Each card should contain:
- Project screenshot
- Project title
- Short description
- Category
- Technology stack
- My role
- Development period if known
- View Case Study button
- GitHub link if available
- Live Demo link if available

Use large image-based project cards with an editorial layout.

Avoid generic stock imagery.

## Project Categories

Support:
- Fullstack Web Applications
- AI-Powered Applications
- Educational Technology
- Research Applications
- Organizational Websites
- Dashboard & Analytics
- Freelance Projects

## Project Detail Page

Each project should have a full case study.

Required sections:
1. Project Overview
2. Background
3. Problem Statement
4. Goals
5. My Responsibilities
6. Technology Stack
7. System Architecture
8. Key Features
9. Development Process
10. Technical Challenges
11. Solutions
12. Testing
13. Screenshots
14. Results and Lessons Learned

Only display sections supported by actual project information.

Do not invent project metrics, business impact, client testimonials, or technical decisions.

Until real project details are provided, use clearly labeled editable placeholders.

Do not pretend placeholder projects are completed professional work.

---

# 9. PROFESSIONAL JOURNEY & PHOTO DOCUMENTATION

This is a major requirement.

Create a dedicated page:

`/journey`

Page heading:

**Beyond the Code**

Subtitle:

"A visual journey through the communities, classrooms, projects, and experiences that shaped my path in software development."

This page should present professional activity documentation.

The goal is to show real experiences through photographs, captions, and meaningful descriptions.

## Documentation Categories

Create filtering categories:

- All
- OSTRIC Community
- Leadership & Mentoring
- BEM Technology Bureau
- University Teaching Assistant
- Freelance Projects
- SMKN 4 Bandung
- Kubik Code
- Eduverse Innovation Group
- Training & Certifications

## Gallery Design

Use an editorial masonry or responsive grid layout.

Include:
- Large featured photographs
- Alternating image sizes
- Clean spacing
- Elegant hover transitions
- Contextual labels
- Date and activity title
- Category badges
- Detailed descriptions

Each documentation item should contain:

- Unique ID
- Title
- Organization
- Activity date
- Category
- Image path
- Image alt text
- Description
- Related experience ID
- Optional location
- Optional additional images

## Gallery Interactions

Implement:
- Category filtering
- Fullscreen lightbox
- Previous/next navigation
- Keyboard navigation
- Mobile swipe support when practical
- Image captions
- Lazy loading
- Skeleton loading states

Allow multiple images per activity.

## Activity Detail View

When a gallery item is opened, display:

- Large photograph
- Activity title
- Organization
- Period
- Description
- Responsibilities
- Related technical skills
- Additional photographs

Use a side panel, modal, or dedicated detail page depending on design quality.

## Privacy

Never fabricate documentary photographs.

Use real uploaded photographs only.

If real photographs are not yet available:
- Render neutral placeholders.
- Keep image paths editable.
- Do not generate fake photographs of events or people.
- Avoid broken image elements.

For photographs featuring students or minors, only display images when permission and publication rights are appropriate.

For employer projects, avoid publishing proprietary screenshots, confidential data, credentials, or internal-only information.

---

# 10. TECHNICAL SKILLS

Create a professional skills showcase.

Avoid arbitrary percentage progress bars.

Use grouped technical expertise with simple labels.

Suggested categories:

## Frontend Development
- HTML
- CSS
- JavaScript
- TypeScript
- React.js
- Tailwind CSS

## Backend Development
- Python
- Django
- Node.js
- Express.js
- REST API

## Database
- MySQL
- MongoDB
- Mongoose

## Software Engineering
- Object-Oriented Programming
- Software Architecture
- System Design Fundamentals
- API Integration
- Debugging
- Software Testing
- Technical Documentation

## Development Tools & DevOps
- Git
- GitHub
- Postman
- PNPM
- Turborepo
- Vercel
- CI/CD
- Serverless Deployment

## Application Security
- Authentication
- Authorization
- OWASP Principles
- Application Security Fundamentals

## Artificial Intelligence Integration
- External AI API Integration
- AI-Powered Chatbot Features
- AI-Assisted Learning Analytics

Distinguish between:
- Used in professional projects
- Used in academic activities
- Learned through training

Do not imply equal proficiency in every listed technology.

Avoid unverified expertise claims.

## Skills Design

Create:
- A responsive skill grid
- Category navigation
- Technology icons where appropriate
- Clean hover effects
- Brief explanations of capabilities

Use consistent iconography.

---

# 11. EDUCATION

Create a dedicated education component.

Institution:
Universitas Pendidikan Indonesia

Degree:
Bachelor of Computer Science Education

Original Degree:
S1 Pendidikan Ilmu Komputer

Period:
2022–2026

Graduation:
August 2026

GPA:
3.93 / 4.00

Description:
Studied programming, web development, database management, artificial intelligence, software engineering fundamentals, and educational technology.

Also participated in technology organizations, technical mentoring, and software development activities.

Display:
- University name
- Degree
- Period
- GPA
- Brief description
- University logo only if an authorized, accurate asset is available

Do not invent academic awards.

---

# 12. PROFESSIONAL TRAINING

Create polished training cards.

## TRAINING 1

Title:
Front-End & Back-End Development — National Program

Organizer:
Pusat Pengembangan Talenta Digital — Kementerian Komunikasi dan Digital (Komdigi)

Program:
Digital Talent Academy — Digital Talent Scholarship 2026

Period:
February 2026 – April 2026

Duration:
289 Training Hours

Main Topics:

Backend:
- JavaScript
- Object-Oriented Programming
- Node.js
- Express.js
- MongoDB
- Mongoose
- Authentication
- OWASP Security Principles
- External API Integration

Frontend:
- React.js
- Tailwind CSS
- Routing
- Data Fetching
- UI Libraries
- UI/UX Best Practices

Testing & Collaboration:
- Unit Testing
- Integration Testing
- Automation Testing
- GitHub Workflow
- API Documentation

## TRAINING 2

Title:
Full-Stack Development — National Program

Organizer:
Pusat Pengembangan Talenta Digital — Kementerian Komunikasi dan Digital (Komdigi)

Program:
Digital Talent Academy — Digital Talent Scholarship 2026

Period:
February 2026 – April 2026

Duration:
149 Training Hours

Main Topics:
- Software Architecture
- Software Design
- Monorepo Architecture
- PNPM
- Turborepo
- Vercel Deployment
- Serverless Architecture
- Continuous Integration
- Continuous Deployment
- User Acceptance Testing

Display total training duration:

**438 Training Hours**

Do not invent certificates, scores, rankings, or award titles.

---

# 13. CERTIFICATION

Create a premium certification section.

Certification:

**Junior Cyber Security**

Issuer:
Badan Nasional Sertifikasi Profesi (BNSP)

Validity:
September 2025 – September 2028

Category:
Cybersecurity

Description:
Professional cybersecurity competency certification.

Design:
- Certification card
- Issuer name
- Certification title
- Validity period
- Security-themed icon
- View Credential button when document is available

Do not invent:
- Certificate number
- Credential ID
- Specific assessed competency units
- Credential verification URL

If a certificate document is later supplied, enable a secure preview or document link.

---

# 14. CONTACT PAGE

Build a polished professional contact page.

Headline:

**Let's Build Something Meaningful Together.**

Description:

"Interested in collaborating, discussing software engineering, or exploring new opportunities? Feel free to get in touch."

Include:
- Email
- GitHub
- LinkedIn
- Location: Bandung, Indonesia
- Download CV

Use placeholders for unknown contact information.

Optionally implement a contact form with:
- Full Name
- Email
- Subject
- Message
- Submit

If a form is implemented, it must work with a real configured delivery service.

Do not create a fake successful submission message when there is no backend delivery.

Add:
- Client-side and server-side validation
- Spam protection
- Rate limiting if an API route is used
- Environment variables for credentials

If email delivery is not configured, hide the submit functionality and show direct contact links instead.

---

# 15. ANIMATION & INTERACTION

Use Motion for React where appropriate.

Implement:
- Smooth page transitions
- Subtle scroll reveal
- Animated section entry
- Elegant card hover
- Timeline progression effects
- Smooth image expansion
- Responsive navigation transitions
- Project card interactions
- Focus indicators
- Minimal button feedback

Animation rules:
- Keep duration mostly between 150–500ms.
- Avoid excessive spring animations.
- Avoid heavy animations on every element.
- Respect prefers-reduced-motion.
- Do not reduce readability.
- Avoid unnecessary continuous motion.

Animations must feel premium and purposeful.

---

# 16. RESPONSIVE DESIGN

Build mobile-first responsive layouts.

Breakpoints should cover:
- Small mobile
- Large mobile
- Tablet
- Laptop
- Desktop
- Large desktop

Ensure:
- No horizontal overflow
- Good touch target sizes
- Readable typography
- Proper image scaling
- Responsive bento cards
- Responsive timeline
- Mobile gallery layout
- Functional mobile navigation
- Good spacing on narrow screens

Test the website at multiple viewport sizes.

---

# 17. DATA ARCHITECTURE

Separate content from presentation.

Use typed structured content files.

Suggested structure:

src/
  app/
    page.tsx
    about/
    experience/
    projects/
    journey/
    skills/
    credentials/
    contact/
  components/
    layout/
    sections/
    cards/
    timeline/
    gallery/
    ui/
  data/
    profile.ts
    experience.ts
    projects.ts
    documentation.ts
    skills.ts
    education.ts
    training.ts
    certifications.ts
  lib/
  types/
  styles/

public/
  images/
    profile/
    projects/
    experience/
    documentation/
    certificates/
  documents/

Create TypeScript interfaces or types for every major content entity.

Do not hardcode repeated content directly into components.

Use reusable rendering components that map over structured data.

Implement empty states for missing assets or content.

Keep the architecture simple, maintainable, and suitable for future expansion.

---

# 18. CONTENT LANGUAGE

Use English as the primary website language.

Use natural, professional English suitable for:
- Recruiters
- Engineering Managers
- Hiring Teams
- Technology Companies
- Professional Collaborators

Preserve official Indonesian organization and institution names.

Keep the writing concise.

Avoid clichés such as:
- Passionate ninja
- Coding wizard
- Rockstar developer
- World-class engineer
- Expert in everything

Do not overstate professional experience.

Optionally implement Indonesian and English translations if the architecture remains maintainable.

---

# 19. SEO, ACCESSIBILITY & PERFORMANCE

Implement:

SEO:
- Unique page titles
- Meta descriptions
- Open Graph metadata
- Sitemap
- robots.txt
- Canonical URLs when domain is configured
- Structured data for professional profile where appropriate

Accessibility:
- Semantic HTML
- Keyboard navigation
- Descriptive alt text
- Accessible dialogs
- Accessible forms
- Visible focus styles
- Appropriate text contrast
- Reduced-motion preferences

Performance:
- Image optimization
- Lazy loading
- Responsive image sizing
- Limited client-side JavaScript
- Minimal layout shifts
- Efficient animation
- Optimized font loading

Aim for strong Lighthouse results without sacrificing design quality.

Do not claim any Lighthouse score unless tested.

---

# 20. QUALITY ASSURANCE

Before finishing, verify:

1. All routes load correctly.
2. Navigation works.
3. Mobile menu works.
4. Project detail pages resolve correctly.
5. Timeline data is chronologically accurate.
6. Overlapping work periods are preserved.
7. Images display correctly or fall back gracefully.
8. Gallery filtering works.
9. Lightbox controls work.
10. Keyboard interactions work.
11. Buttons have meaningful actions.
12. No placeholder link points to `#` without purpose.
13. No TypeScript errors.
14. No avoidable hydration errors.
15. No major accessibility violations.
16. The production build succeeds.
17. Responsive layouts work on mobile and desktop.
18. The site does not expose private data.
19. No project metrics or achievements are fabricated.
20. Every visible statement about my experience is supported by the supplied profile.

---

# 21. DEPLOYMENT

Prepare the website for deployment on Vercel.

Provide:
- README.md
- Local installation instructions
- Development commands
- Build commands
- Environment variable documentation
- Image upload instructions
- Content editing instructions
- Deployment instructions

The portfolio should run locally using:

`pnpm install`

`pnpm dev`

And produce a successful production build using:

`pnpm build`

Do not mark deployment as completed unless it has actually been performed.

---

# 22. IMPLEMENTATION WORKFLOW

Build this project completely, not as an unfinished mockup.

Follow these phases:

PHASE 1:
Review requirements and establish architecture.

PHASE 2:
Create the complete design system and global layout.

PHASE 3:
Implement navigation, homepage, and reusable UI components.

PHASE 4:
Implement About, Education, and Skills.

PHASE 5:
Implement Experience and Interactive Career Timeline.

PHASE 6:
Implement Projects and individual Project Case Study pages.

PHASE 7:
Implement Journey and Photo Documentation Gallery.

PHASE 8:
Implement Training, Certifications, and Contact.

PHASE 9:
Implement animations, responsive behavior, SEO, and accessibility.

PHASE 10:
Validate the site, fix errors, and prepare production deployment.

Prioritize a functioning, coherent implementation over unnecessary dependencies or decorative features.

When real information or assets are missing, use clearly marked placeholders and continue building.

Do not fabricate content to fill missing sections.

---

# 23. FINAL DELIVERABLE

The finished result must include:

- Complete Next.js source code
- Consistent Emerald & Charcoal design system
- Responsive homepage
- About page
- Experience timeline
- Projects showcase
- Project detail pages
- Photo documentation gallery
- Technical skills page
- Education section
- Training section
- Certification section
- Contact page
- Reusable components
- Typed content data
- Interactive functionality
- SEO configuration
- Accessible UI
- Production build readiness
- Deployment documentation

The final website should present Danis Keysara Saputra as a credible Fullstack Developer with a strong combination of software development experience, academic involvement, teaching, technical leadership, professional training, and cybersecurity certification.

**Start building the complete project now. Do not stop after generating a design description or static preview. Implement the working website.**