# Danis Keysara Saputra — Portfolio

A content-driven, single-page Next.js portfolio. Navigation scrolls to each section. The site uses static export and is ready for deployment on Vercel.

## Development

Requires Node.js 20.9 or newer and pnpm.

```sh
pnpm install
pnpm dev
pnpm build
```

On Windows PowerShell, use `pnpm.cmd` if script execution policy blocks `pnpm`. The static export is generated in `out/`.

## Content and assets

Edit `src/data/content.ts` to update experience, skills, projects, and documentation. Projects appear in the projects section with expandable details. Add approved images under `public/images/` and refer to them with paths such as `/images/projects/example.jpg`. The empty arrays deliberately avoid presenting invented projects or photographs. Only publish images of students or employer work when you have the appropriate permission. The hero uses `public/images/hero-porto-lightmode.webp` and `public/images/hero-porto-darkmode.webp` for the corresponding themes; update the paths in `src/components/site.tsx` to replace them.

Contact information and CV are intentionally placeholders in `src/app/contact/page.tsx`; add actual URLs and a document under `public/documents/` when supplied. No contact form or delivery service is configured.

## Environment and deployment

Optionally set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin (without a trailing slash) to populate the sitemap. No other environment variables are required. Import the project into Vercel, select Next.js, and deploy using the default build settings. Set the environment variable in Vercel before deployment. Deployment has not been performed by this project.
