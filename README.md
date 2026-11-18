## Development

Use Node.js 22.13 or newer and Yarn Classic. Install dependencies with `yarn install --frozen-lockfile`.

- `yarn dev` starts the development server.
- `yarn build` creates the production build.
- `yarn lint` runs ESLint.
- `yarn typecheck` runs TypeScript 7.

Keep `yarn.lock` committed; avoid mixing npm and Yarn installs.

### Tooling compatibility

ESLint stays on 9.39.5 because the plugins used by the latest Next.js ESLint configuration do not yet support ESLint 10.
TypeScript 7 is installed as `@typescript/native` for its `tsc` executable. The `typescript` alias supplies the official TypeScript 6 compatibility API required by ESLint and other tooling.
This is my personal website.
