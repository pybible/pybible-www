# Pyongyang Bible Institute website

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fpybible%2Fpybible-www)

The PBI website is a statically exported Next.js and TypeScript project. It preserves the public Squarespace routes while serving all images and videos from this repository.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The build creates a static export in `out/`. Vercel can deploy the repository with its default Next.js settings.

## Forms

Newsletter and contact forms open the visitor's email application and address the message to `contact@pybible.org`. Replace these helpers with a transactional email or form provider when one is selected; the migration deliberately does not claim an automatic signup or submission that has not been configured.
