# Next Formatting/Testing template
A project setup experiment to support standardized formatting/cleaning conventions and testing dependencies out of the box

## Dependencies
**Overall Project Structure**
- EditorConfig
- Next JS
- Typescript
- React

**Formatting and Cleanliness**
- ESLint
- Prettier
- Husky

**Testing** 
- Cypress

### Future Goals
- Get automated package updates running (dependabot?)
- Continuous delivery
    - Automated test runs of Vitest and Cypress using Github actions
- Maybe Swagger documentation for backend?

## Running Dev Server
```bash
npm run dev
```
See all available commands to run with `npm run [command]` in `package.json`.

## Setting up Husky
```bash
npx husky install
npx husky add .husky/pre-commit "npm run pretty && npm run lint"
```

#

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
