# Colleagues

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

I used create react app because it comes with testing frameworks Jest and React Test Library.

## Available Scripts

Before running the project you will have to run:

### `npm install`

or

### `yarn install`

In the project directory, you can run:

### `yarn start`

or

### `npm start`

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

**Unit Tests**

I added unit tests to the solution to ensure that the application is working as intended. An improvment would be to them for each component and doing them while coding the functionality.

To run the tests

```
npm run test
```

**Color Blindness**

Firstly I picked a background color that would create a better contrast between it and the information on the screen. The colors I selected for the theme looks good together and creates a better contrast. The text is in an even darker color. I stayed away from red and green since red-green is the most common typ of color blindness. What is most important with color combinations is to not put them in a close proximity.

This is a list of combinations you should stay away from at least in close proximity to each other.

There’s no one-size-fits-all color theme to use for color vision deficiency, so it is important not to only use colors to describe user tasks. In this case it was very easy since both text and icons can be used to describe the tasks.

I have also considered the proximity between elements on the screen. This will also help people with CVD. For instance the buttons to swap between grid and list are close to each other which indicates they are connected.

**Hosted on free public url**
This site is hosted on GitHub pages. Link the [site](http://juliahammenberg.github.io/tretton).

## Packages

```
react-test-renderer
.dotenv
```
