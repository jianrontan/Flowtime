# Flowtime
My name is Jian Ron and this is my CS50 final project!

Video Demo: [CS50x Final Project Flowtime]()

## Features:
* Framework: [React Native](https://reactnative.dev/docs/getting-started)
* State Container: [Redux](https://redux.js.org/introduction/getting-started)
* Database: [Firebase](https://firebase.google.com/docs)

## Overview:
Flowtime is a mobile application that is used for the purpose of productivity. This app was inspired by the Flowtime technique, 
an adaptation of the popular Pomodoro technique, read more about the Flowtime focus technique [here](https://zapier.com/blog/flowtime-technique/).

#### Description:
Flowtime allows the user to set their own ratio of break time to focus time and how ever long the user decides to focus, the
ratio will be used to calculate the time that the user will get to take a break. The user can also change in settings the
behavior of the break timer, to continue automatically once break timer ends or otherwise, to not save or save their break
time for later should they decide to end their break early, to turn on notifications for when their break ends, as well as
set tags to track what they focused on. Users can also see their study time in the Statistics page and also manage their
account, delete their account, change their email and password, and log out.

#### Screenshots and explanations:

## Files:
| Screens | Description |
|-|-|
| about.js | Page explaining the app and about this project (incomplete)|
| break.js | This is the break timer page and in this page, settings are fetched, notifications handled, the break time is calculated, and a timer is starts counting down when the page opens |
| home.js | Front page, fetches saved settings from firebase and dispatches to redux, user can start focus time, adjust break time to focus time ratio, and change their focus tag |
| homestack.js | Contains navigation for the homestack, which contains the home page, focus page, and break page |
| navstack.js | Contains navigation for the homestack and drawer components, helps with loading the fonts for the app once logged in |
| profile.js | Allows the user to manage their profile by changing their email, password, deleting their account, or logging out, additionally also shows their total focus time on the app |
| settings.js | Page containing toggles that the user can use to adjust the behavior of the app as well as set notification preferences |
| statistics.js | Page where the user can look at their focus time by selecting dates from a calendar, which will be grouped by the tag |
| tags.js | Page where users can remove or add tags, listing down all the tags that they have |
| watch.js | Page displays a stopwatch and tracks the user's focus time and tag and updates to firebase |
| forgotpassword.tsx | Page where user can enter their email and a link will be sent to their email so they can reset their password |
| signin.tsx | Sign in page managed by firebase authentication |
| signup.tsx | Sign up page managed by firebase authentication |
| welcome.tsx | Welcome page which leads to signin.tsx or signup.tsx |

| Root | Description |
|-|-|
| app.config.js | Expo configuration file, includes settings for ios and android and extra configurations for EAS and Firebase |
| App.js | Entry point for the app, wraps the root navigation component with Redux provider to provide global redux store to app |
| babel.config.js | Configuration for Babel, a JavaScript compiler. Includes presets and plugins used by my app |
| eas.json | Configuration for EAS Build and EAS Submit, includes settings for different build profiles and environment variables for my EAS Build |
| index.js | Imports the entry point for the router in your project. Used to start your app |
| package-lock.json | Automatically generated by npm, describes the exact tree that was generated when npm install last ran |
| package.json | Contains list of dependencies required by the app |
| tsconfig.json | Configuration for TypeScript compiler options for the app |
| config/firebase.ts | Initializes Firebase, creates a Firebase App object with the Firebase project configuration and exports it along with a Firestore database instance |
| utils/hooks/useAuthentication.ts | Contains custom React hook that manages the user's authentication state by setting up a listener for changes in the user's sign-in state and updates its local state accordingly |

| Redux | Description |
|-|-|
| actions.js | Contains action creators, functions that return an action where each action has a type and a payload. |
| reducers.js | Contains reducers, which are functions that take the previous state and an action, and return the next state |
| store.js | Creates the Redux store, which brings together the state, actions, and reducers, and adds thunk middleware to the store |

| Navigation | Description |
|-|-|
| authStack.tsx | Contains navigation for the authentication pages, signin, signup, and welcome |
| index.tsx | Contains code where if the user is logged in, NavStack will be shown, else, AuthStack will be shown for user to log in or create a new account |

| myComponents | Description |
|-|-|
| .style.js files | Files containing the styles for different components and pages |
| .jsx files | Files containing components that will be used in screens, e.g. sliders, switches, dropdown menu, etc. |
| index.js | Exports components and styles to be easily imported in other pages |

| Constants | Description |
|-|-|
| icons.js | Imports icons from the asset file |
| index.js | Exports icons and theme constants for easy use in other pages |
| theme.js | Contains common colors, sizes, fonts, and shadows for use in other pages |

## Design Choices:

## Future Improvements:

## How To Test:

## Project Conclusion:
