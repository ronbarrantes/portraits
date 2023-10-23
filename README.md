# Portrait app

This app uses AI to generate a professional portrait based on previously uploaded images.
**_(AI Part Not Yet Built)_**

## Getting Started

First things first, ensure that you're logged in and linked in to the vercel project:

```bash
vercel login

```

And then link the project:

```bash
vercel link
```

Next, get the environment variables by running:

```bash
pnpm update-envs
```

After that, install the dependencies:

```bash
pnpm i
```

There is an extra package to install, as of now envs will not run with pnpm, so we need to install `with-env`

```bash
npm i -g with-env
```

right after that just run

```bash
pnpm dev
```

## Relevant Technologies

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Vercel](https://vercel.com/)
- [Clerk](https://clerk.com/)
- [UpStash](https://upstash.com/)
- [AWS S3](https://aws.amazon.com/s3/)
- [PNPM](https://pnpm.io/)
