## Order Change - Booking Countdown App

This UI is a countdown component for showing a customer how long remains to make changes to an upcoming order. Built using vanilla javascript.

## Specification

1. The cut-off hour is configured on our server and should be requested by hitting our API:
1. GET https://uk-live-support.lovespace.com/cutOffTime
1. This endpoint does not require authentication or request body/parameters
1. Appropriate messaging or a loading state should be shown while the UI waits for a response
1. The edit button should be hidden if the cut-off hour has passed.


![Markdown Logo](https://mcusercontent.com/966fc1b875b92a9a36ccf1370/images/c47b4da9-bafc-4838-bc27-330d397f2c5e.gif)

<!-- ## Installation and Setup Instructions

### Prerequisite

You will need `node` and `npm` installed globally on your machine.

```bash

# install dependencies
npm install

#to start server:
npm start

#to visit app:
localhost:3000

#to create a build of the app:
npm run build
``` 
## Reflection
The project goals included using technologies learned up until this point and familiarizing myself React's Context API.

I wanted to build an application that uses React’s Context API to manage global application state without resorting to props drilling.
I started this process by using the `create-react-app` boilerplate. I chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time in diving into react hook and Context API. The technologies used in this app are React and CSS.

One challenge I had was that when user refreshed the page, any data user has entered was lost. To combat this I stored the data in the local storage.
In the next iteration I plan on building a backend with a database to store user data essentially making this a fullstack app. 


-->





## Contribution
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
1. Create your feature branch `git checkout -b feature/fooBar`
1. Commit your changes `git commit -am 'Add some fooBar'`
1. Push to the branch `git push origin feature/fooBar`
1. Create a new Pull Request
