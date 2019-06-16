# Reflections app 
##### A reflection app gives users the ability to reflect and document daily successes, failures and a plan on what to do better the next day.
(A simple API with Nodejs, Expressjs and JS Data structure to persist data)


### Technology Stack Used
- Coveralls
- Travis CI
- NodeJs
- Express
- ESLint
- Babel
- Mocha
- Chai
- Postgres SQL


## Features

 - User can sign up.
 - User can sign in.
 - User create a reflection.
 - User can view all reflections.
 - User can view a specific reflection.
 - User can update a reflection.
 - User delete a reflection.
 
 ## Getting Started
 
 Below are instructions to clone and run the reflections app in your local server.
 
 **First off, you must have node/npm installed. Install the latest node version [here](https://nodejs.org/en/download/) Not to worry, the npm package comes along with the node package**
 
 ### Installation
 
 1. Clone this repository by running this on your terminal: `git clone https://github.com/ikechuku/reflections.git`
 2. Navigate to the project's directory with: `cd reflections`
 3. Run `npm install` to install dependencies
 4. Run  `npm run start:dev` to start the server on a local host
 5. Test the routes with [Postman](https://www.getpostman.com/)
 
## API 

The API consumption was built with **node.js, express and JWT (JSON web token for Authentication)**

| action | endpoint |
| ----------- | ----------- |
| Create a Reflection | POST /api/v1/reflections |
| Get A Reflection | GET /api/v1/reflections/:id |
| Update A Reflection | PUT /api/v1/reflections/:id |
| Delete A Reflection | DELETE /api/v1/reflections/:id |

## User Interface

The User Interface for this project was built with **HTML5, CSS3 and JavaScript.** [Google Fonts](https://fonts.google.com/) provided the clean and amazing fonts.


## Author

Ikechuku Ukpa

## License

MIT License



