# Kevin Porten

![license](https://img.shields.io/github/license/kporten/kevinporten)
![tag](https://img.shields.io/github/v/tag/kporten/kevinporten)
![last-commit](https://img.shields.io/github/last-commit/kporten/kevinporten)
![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)
![ci](https://github.com/kporten/kevinporten/workflows/CI/badge.svg?branch=master&event=push)

My personal homepage. Feel free to copy and modify the code, but please don't use my name and picture in your copy :)

---

## Getting Started

Copy the `.env.example` file and rename the copy to `.env.development`. Then change the variable values in the file.

You have to export an environment variable to install the FontAwesome packages. The best place is your .zshrc, .bashrc, .bash_profile or in a similar file.

```bash
export FONTAWESOME_NPM_AUTH_TOKEN=... # https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers#installing-pro
```

Now you can start with development...

```bash
yarn install
yarn start
```

## Scripts

```bash
yarn start # start gatsby development server
yarn build # build production-ready gatsby site
yarn serve # serve production-ready gatsby site
yarn clean # clean gatsby development resources
yarn lint # lint code with eslint
yarn hint # hints for code with webhint
yarn type-check # run type check for files
yarn changelog # create/update the changelog
yarn test # run jest tests
yarn e2e # open cypress to start e2e tests manually
yarn e2e:run # run cypress e2e tests
yarn commit # commitizen friendly commit helper
```

## GitHub Actions

You will need to define the following secrets to use this project with the current workflow configuration.

```ini
# `.env.development` file & GitHub > Repository > Settings > Secrets
CONTENTFUL_ACCESS_TOKEN=... # https://www.contentful.com/developers/docs/references/authentication/
CONTENTFUL_SPACE_ID=... # https://www.contentful.com/developers/docs/references/authentication/

# GitHub > Repository > Settings > Secrets
FONTAWESOME_NPM_AUTH_TOKEN=... # https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers#installing-pro
SNYK_TOKEN=... # https://support.snyk.io/hc/en-us/articles/360004037537-Authentication-for-third-party-tools
```

### Jobs

- test (run jest tests: `yarn test:ci`)
- e2e (run cypress tests: `yarn e2e:ci`)
- security (check for vulnerabilities)

## Publish

On **commit** (git), the following commands are executed...

- Hook `pre-commit`
  - `yarn type-check`
  - `yarn lint`
  - `yarn hint`
- Hook `commit-msg`
  - `commitlint`

On **push** (git), the following commands are executed...

- Hook `pre-push`
  - `yarn test:ci`

---

## Environment

- [TypeScript](https://www.typescriptlang.org/)
- [Gatsby](https://www.gatsbyjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GraphQL](https://graphql.org/)

## Content

- [Contentful](https://www.contentful.com/)

### Quality

- [ESLint](https://eslint.org/)
- [WebHint](https://webhint.io/)
- [Prettier](https://prettier.io/)
- [Snyk](https://snyk.io/)

### Tests

- [Testing Library](https://testing-library.com/)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)

### Other

- [Commitizen](http://commitizen.github.io/cz-cli/)
- [Auto Changelog](https://github.com/CookPete/auto-changelog)

> Based on https://github.com/kporten/template-gatsby
