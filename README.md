# Colleagues

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

I used create react app because it comes with testing frameworks Jest and React Test Library.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Implemented User Stories

**Filter by name and office**

**Switch between views**

**Screen Reader compatible**

To make the site screen reader compatible I started by going over every component and running the built in voice over for Mac. You should always make sure to declare page language.

Images should have an alt tag to describe it in a short and clear way.
Tried to use semantic rich tags like `table`, `img` and `h1` as much as possible. `div’s` are not semantic and need more information added to them when they are important and need to be presented to the user.

I added the header element to the table of employees to make sure to describe what’s in the table.

How to structure the page is also important. The design was done according to the wire frame which is a standard way of doing a page. Works well with screen readers since you have the title of the page describing it, then the actions and below it is any data.
