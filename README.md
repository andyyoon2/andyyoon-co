[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

# [andyyoon.co](https://andyyoon.co)

This is my personal website, built in Next.js and deployed on Vercel.

## Chosen Libraries and Rationale

- [Next.js](https://nextjs.org/)
  - My current favorite framework and the one I know the best.
  - Extremely simple, easy, and fast to get started and deploy on Vercel.
  - Best practices built into the framework, tooling, and deployment by default so I don't have to worry about it (aka a wide "Pit of Success").
- [MUI](https://mui.com/)
  - The component library I'm most familiar with, as I used it extensively in my last job at EnterpriseAlumni.
  - Functional and looks great, easy to style and use (I greatly enjoy the `sx` prop in particular).
- [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/)
  - Industry standards for unit testing React apps.
  - Testing Library allows me to test as a user would act, query elements based on what a user would see, and ensure that my site is accessible (`getByRole`).
  - I personally learned a great deal about unit testing from Testing Library and its author, Kent C. Dodds, so this is my go-to testing setup.
- [Standard](https://standardjs.com/index.html) code style
  - Integrated with pre-commit hooks to learn and practice with setting up automated linting/formatting.
  - Experiment with no-semicolon code base, which I'm not used to but I wanted to try.
  - Challenge my assumptions and habitual nitpicking about code style, so I can focus more on actual coding.

## Running Locally

Requires Yarn v1.22 and Node v16.

```bash
> git clone <url>
> cd andyyoon-co
> yarn install
> yarn dev
```
