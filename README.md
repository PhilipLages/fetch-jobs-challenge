# Jobs API with NextJS and SSR

This is a front-end application built with ReactJS, NodeJS, NextJS, TypeScript, TailwindCSS, and Server Side Rendering. The app fetches data from the Zippia job API, using a post request and request body parameters.

___

## Demo

<img src='src/images/jobsgif.gif' alt='Application Demo'/>

___

## Deploy

This application is deployed on Vercel at the following URL:

-   [https://jobs-api-gules.vercel.app/test/jobs](https://jobs-api-gules.vercel.app/test/jobs)

___

## Getting Started

To run the application locally, follow these steps: 


1.  Clone the repository.
2.  Install the required dependencies using `npm install`.
3.  Create a `.env.local` file and add the following environment variables:

```code
  API_URL=https://www.zippia.com/api/jobs/
```

4.  Run the application using `npm run dev`.

___

## Features

-   The app can list the first 10 jobs with cards, displaying job title, the company name, and job description.
-   It has a filter to find jobs by company name.
-   It has a filter to find jobs published in the last 7 days.
-   The app was developed with mobile-first design and is responsive.

___

## Technologies Used

-   ReactJS
-   NodeJS
-   NextJS
-   TypeScript
-   TailwindCSS
-   Server Side Rendering

## The Importance of Server-Side Rendering

<details>
  Server-side rendering (SSR) is a technique used to render web pages on the server and send the fully rendered page to the client. SSR has become increasingly important in modern web development due to the rise of single-page applications (SPAs) built with front-end frameworks like React, Vue, and Angular.

SPAs are great for delivering fast and responsive user experiences, but they have some drawbacks. One of the main issues is that they rely on JavaScript to render the page, which can cause performance and SEO problems. When a user visits an SPA, the server sends an HTML file with an empty `<div>` tag and a bundle of JavaScript code that the browser must download and execute to render the page. This can lead to slower page load times, poor search engine visibility, and a poor user experience for users with slow internet connections.

Server-side rendering solves these problems by rendering the HTML on the server and sending the fully rendered page to the client. This means that the client can start rendering the page immediately, even before the JavaScript bundle is downloaded and executed. This can significantly improve the time to first paint (TTFP) and time to interactive (TTI) metrics, which are important for delivering a fast and responsive user experience.

In addition to improving performance, SSR can also improve SEO by making it easier for search engines to crawl and index the pages of your website. When search engines crawl an SSR website, they see fully rendered HTML, just like a regular website, which can improve your website's ranking in search engine results.

Overall, server-side rendering is an important technique for building modern web applications, especially for delivering fast and responsive user experiences and improving SEO.
</details>

___

## API

The app fetches data from the Zippia job API, using a post request and the following request body parameters:

```json
{
  "companySkills": true,
  "dismissedListingHashes": [],
  "fetchJobDesc": true,
  "jobTitle": "Business Analyst",
  "locations": [],
  "numJobs": 20,
  "previousListingHashes": []
}
```

___
## License

This project is licensed under the MIT License. See the [LICENSE](https://opensource.org/license/mit-0/) file for more information.