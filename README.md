# Typescript NPM Package Template

## Description

- This is a template which can be used to create npm packages for Node.js as well as the Browser, using TypeScript.
- The npm module is bundled using [rollup](https://rollupjs.org/guide/en/). Please read the guide before and update the [config file](rollup.config.js) if required.
- The template already consists the polyfill plugin so that the inbuilt node packages can be used on both Node.js and Browser.
- Testing is done using [Jest](https://jestjs.io/) and the configuration is available at [jest.config.js](jestconfig.json). Example test can be found [here](src/__tests__/_.test.ts)

## How to use

- Copy the template to your project (or) create a new Github repository from the Github template.
- Install dependencies using `npm install` or `yarn`
- Build using `npm run build` or `yarn build`. Check the `dist/` folder for the built files
- Test using `npm run test` or `yarn test`
- You can try a dry-run of the publish using `npm publish --dry-run` (helps you to understand the files that will be uploaded)
- Please check the `package.json` file before publishing.

## Semver

Most npm packages use semver versioning. Use the commands below before updating

- Patch: (0.0.1 -> 0.0.2) - `npm version patch` or `yarn version --patch`
- Minor: (0.0.1 -> 0.1.0) - `npm version minor` or `yarn version --minor`
- Major: (0.0.1 -> 1.0.0) - `npm version major` or `yarn version --major`

## CI/CD using Github Actions

- This repository contains two Github Actions workflow files for testing and publishing the npm package.
- Please add the Github Secret `NPM_TOKEN` to your repository before pushing the initial commit.
- The [publish](.github/workflows/publish.yml) workflow will test and publish the package to npm. It is configured to be used with the master branch only.
- The [test](.github/workflows/test.yml) workflow will test the package whenever any changes are made to any branch other than master branch.
