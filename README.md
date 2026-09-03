# Pyongyang Bible Institute website

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fpybible%2Fpybible-www)

The PBI website is a statically exported Next.js and TypeScript project. It preserves the public Squarespace routes while serving all images and videos from this repository.

The pre-disconnection Squarespace source is preserved in
[`reference/squarespace-2026-09-02`](reference/squarespace-2026-09-02/README.md).
It includes the raw HTML for every public route, a 397-file resource mirror,
the published TimelineJS sheet data, image inventories, and SHA-256 checksums.

The About-page history is a self-hosted copy of the existing Knight Lab
TimelineJS presentation. Its captured data and media are served from this
repository, with a readable HTML timeline as a fallback.

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
