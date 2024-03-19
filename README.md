# AVB Frontend Assesment

## Quick walkthrough on the app


1. Initial Setup
 - The project is bootstrapped with Create React App.
 - Material-UI is utilized for styling

2. Displaying Comments:
 - Initially, the app loads a list of comments, The first couple of comments are from the local API provided, the following comments are from the API provided (with a little tweaking to only pass 10 comments from the API endpoint -- Unlimited scrolling shouldve been an implemented but decided not to at the moment).
 - Each comment is displayed with the commenter's avatar (potentially showing the first initial or first and last initial), name, and the comment itself.

3. Adding Comments:
 - Users can add comments via a modal. The Call To Action (CTA) buttons are located at the bottom right and a Floating Action Button (FAB) at the middle.
 - The modal contains input fields for the commenter's name and their comment.
 - Upon submission, the new comment is added to the list of comments displayed on the main page.

4. Live Preview:
 - The app is hosted at Netlify -- https://shisole-mini-comment-section.netlify.app









## User Story

As a user, I would like to be able to read a list of comments, add a comment, and see a list of the top 3 commenters.


### Tasks

> Please add comments to help explain decisions and add a summary to the README

1) Use Material-UI theme for custom color scheme(primary and secondary colors)
2) Display list of comments
   1) Comment UI should consist of avatar(first initial or first + last initial), name, and comment
   2) `store/api` has mock comments
   3) Extra: fetch from API to display initial comments instead of mock comments
3) Facilitate adding a comment via modal with input fields(name and comment), and submit button
4) Display a list of top 3 commenters
   1) Ui should consist of avatar(same as above) name, and comment count
   2) Should be listed in descending order of comment count


### Useful Links

* https://v4.mui.com/
* https://redux-toolkit.js.org/
* https://jsonplaceholder.typicode.com/comments


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
