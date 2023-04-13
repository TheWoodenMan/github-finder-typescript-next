# Github Finder App - React / TypeScript / Next.js

a React app adapted from the excellent React Front to Back Course by [Brad Traversy](https://www.traversymedia.com/)

The app provides a clean and simple UI for searching Github Users, showing their stats and repos.

Accessible live here: https://github-finder-typescript-next.vercel.app/

<img width="1265" alt="image" src="https://user-images.githubusercontent.com/85075266/231850032-6075d49c-9ea2-44ea-bb14-cb33782104f1.png">

# How It's Made:

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NextJS](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=for-the-badge)
![Daisy UI](https://img.shields.io/badge/Daisy_UI-323330?style=for-the-badge&logo=sinon)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

The original was built in JavaScript with create-react-app as a framework. I wanted to get some practice with TypeScript,
specifically in combination with more advanced React Hooks so I adopted it from the start of the build along.

I also wanted to get some more experience with Next.JS as a packaging tool and deploy the project to vercel.

The adaptation required a significant amount of research and refactoring to get everything working, keeping code standards high and TypeScript happy with the quality.

## TypeScript

I tend to write the types with the components as I go - then refactor them out to their own .ts file as needed. Other than practice with the basics of TypeScript - (types, interfaces, PropTypes, unions etc) I really wanted to explore the necessary patterns for react hooks.

## Next

Next is strongly opinionated, and carries a few features out of the box that normally you would have to configure yourself. Notably the difference between Link in next vs react-router and I used a Page wrapper to keep the header/footer in the right place. Pages in next are kept in the pages directory and routes lead directly to them, including to the 404 page which had to be adapted.

Images in next were quite tricky to set up since they require specific syntax, but they're also performant and highly customisable too. Overall the focus in Next is on performance and production standards while keeping the syntax minimal.

### Issues Encountered

The first problem I had was typing the data grabbed from the GitHub API - I initially went with "unknown" but filled in the details as they became apparent. "User" and "Repo" Were the two main data points, once they were defined, I was able to map out the various types from there.

I had to use type patterns for Events, Functional Components and JSX. All pretty straight forward, the first big problem I had was with context. Context initialized as "null" which meant I needed to include narrowing for the object if it hadn't been supplied yet.

Type safety for useContext and useReducer Actions was more complex to set up and I needed to do a fair bit of research. After setting up the core patterns, (which were mainly interfaces and union types) it was easy to update as I went and kept me right.

I encountered a sort of catch 22 error between TypeScript and React that was highly confusing. TypeScript complains if you pull variables out of context and they "could be" null. It initially required narrowing/handling that returned an empty fragment if the object was null (which it only ever was when the component is first initialised) That's well and good but including a conditional on any variable that useEffect uses later - causes React to complain (And build fails) on the basis that it "could" be called in a different order with the error - <em>"React Hook "useEffect" is called conditionally. React Hooks must be called in the exact same order in every component render."</em>

Both of these issues cancelled each other out and I like Strict Null Typing (some call it the billion dollar error) since it covers you for a number of issues and encourages good code.

I eventually used the ! operator or Non-null assertion operator to reassure TypeScript that it would never be null, (it wasn't possible, at worst it would be an empty object!)

Empty objects can't be iterated over by .map() so I added in circuit breaker rendering for components that needed objects/data to be available to render correctly. This checked if the first object in the array had a name variable or not, effectively handling the complaints from .map and React.

When I refactored to use Axios instead of fetch, it worked perfectly but I noticed a fairly serious error while testing. if you receive a 404 - axios was error logging to the console, which included the header and API Key! I found that adding in more specific error handling solved the issue and also made the feedback more readable for users.

### Optimizations

I made the effort to incorporate <code>< Image / ></code> for the main avatar on each user page, It was fiddly to setup, (next needs a loader callback to pass the image url or it complains)

I added in error handling to the Reducer Actions which call axios, for security but also for user experience. I used the setAlert function to pass this data to React to make it more elegant for users.

# Lessons Learned:

Typescript plays extremely well with React and Next. The three of them together can build a stable and performant app or site. I'll be using them well in the future.

The project could be adapted to be full stack without too much trouble, I ususally use Node/Express.js for routes, but since Next has it's own pre-configured API system that would be the logical next step instead.

## Other Examples:

Take a look at these couple examples that I have in my own portfolio:

1. https://github.com/TheWoodenMan/nps-feedback-ui NPS Feedback UI - This simple but effective Full Stack app showcases a fully working feedback gathering system for Net Promoter Score. The project used useEffect and useState extensively and let to this one as part of React Front to Back.

2. https://github.com/TheWoodenMan/twm-travel-journal My Travel Journal - a simple app that I used to practice mapping over arrays to generate content. The project could be extended to full stack using my experience gained so far without too much trouble.

# Deployment Details

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
