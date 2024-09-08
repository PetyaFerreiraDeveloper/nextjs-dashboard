## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

The project is using Vercel storage - which uses postgresql as a database.
# Running the project

1. Run `pnpm i` to install the packages
2. If this is the first time you start the project - make sure you have all environment variables updated. 
3. All env are in vercel - to be able to get them link the project to the vercel project, and then update them. Follow the steps:
    3.1. Install vercel CLI
    3.2. run `vercel link` to link to the vercel project
    3.3. project name is invoices-dashboard in Vercel
    3.4. Once vercel is connected run: `vercel env pull .env.development.local`
4. Run `pnpm dev` to start the server at http://localhost:3000
5. Dashboard is at http://localhost:3000/dashboard