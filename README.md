### Description 
Netflix in React

Refactoring a Netflix project to JS.
It will need to become a React application with data fetching from “The Open Movie Database”.

Suggested steps:
1. Create a new react-app, and starting from the provided Netflix project,
    start carrying the home page interface via React components (navbar, footer, etc.)

2. Create, using components, different "galleries" for movies
    (at least 3 galleries with 3 saga movies you like, example: Harry Potter, Lord of the Rings etc.)

3. These galleries will need to fetch data from Omdb APIs on component load

4. Add loaders and error handling to main page

![Cattura1](https://user-images.githubusercontent.com/98649610/216826523-c045d455-6630-4bef-ba73-6832df833bf2.JPG)

### API Docs:
Register at http://www.omdbapi.com/
Once registered, you will receive an email with the API Key.
The endpoint to search should look like this:
http://www.omdbapi.com/?apikey=[PUT_YOUR_API_KEY_HERE]&s=harry%20potter

Each search will return an item similar to this:

     {
     "Search": [
         {
             "Title": "Harry Potter and the Deathly Hallows: Part 2",
             "Year": "2011",
             "imdbID": "tt1201607",
             "Type": "movie",
             "Poster": "https://bit.ly/3sufYok"
         },
         {
             "Title": "Harry Potter and the Sorcerer's Stone",
             "Year": "2001",
             "imdbID": "tt0241527",
             "Type": "movie",
             "Poster": "https://bit.ly/3tTtx0H"
         },
         {
             "Title": "Harry Potter and the Chamber of Secrets",
             "Year": "2002",
             "imdbID": "tt0295297",
             "Type": "movie",
             "Poster": "https://bit.ly/31gVxzb"
         },
         {
             "Title": "Harry Potter and the Prisoner of Azkaban",
             "Year": "2004",
             "imdbID": "tt0304141",
             "Type": "movie",
             "Poster": "https://bit.ly/2QzHt1n"
         },
     ],
     "totalResults": "80",
     "Response": "True"
     }
    
    
#### ATTENTION
Please remember to check the response structure you get from OMDB!
e.g. the array containing the movie objects is the value of the property called Search,
not the answer itself (which is an object!).

### TERMINAL
- `npm i @fortawesome/react-fontawesome`










# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
