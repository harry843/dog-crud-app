## Welcome

Thank you for visiting! This is my codebase for a personal project to learn the fundamentals of React.js. It is my first attempt using javascript frameworks, and is certainly a world apart from Python.

Click [here](https://dog-crud-application.vercel.app/) to access the application - and add your own Dog!

The aims of this project were to:

- Build a web form to capture, model and store user inputs into a database
- To communicate with that database via a REST API, which I built from scratch
- To allow users to retrieve, edit, publish and delete records to the database via the API

The database software which I used was [Mongodb](https://www.mongodb.com/), which I interact with via the Mongoose library. I hosted the server locally, therefore to replicate this project you will need to install [Mongo Compass](https://www.mongodb.com/docs/compass/current/install/). A future goal will be to host this on cloud via [Mongo Atlas](https://www.mongodb.com/cloud/atlas/efficiency?utm_content=rlsapostreg&utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_general_retarget-brand-postreg_gic-null_emea-all_ps-all_desktop_eng_lead&utm_term=&utm_medium=cpc_paid_search&utm_ad=&utm_ad_campaign_id=14412646473&adgroup=131761130532&cq_cmp=14412646473&gclid=CjwKCAjwoIqhBhAGEiwArXT7K5it6Ts6rtciBjw4tnSCMlpYSXbVj5j6_Uu0rfhvq9JNasubs97O6hoCK8AQAvD_BwE) and deploy via Vercel, however this was not possible in the timeframes.

For learning resources on how to get started building your first REST API, I'd recommend:

- [Mongoose Tutorial](https://www.youtube.com/watch?v=Q1gewixDMYs&t=332s)
- [Node.js REST API Tutorial](https://www.youtube.com/watch?v=HPo0QhlX5Ao) (all 3 parts)
- [React Docs](https://legacy.reactjs.org/docs/hooks-intro.html)
- [Create a React App](https://create-react-app.dev/)

I wish you the best!

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
