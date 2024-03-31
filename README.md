# JS mini project 1 - Login Authentication using JS

This is a simple login authentication using plain(Vanilla) javascript.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Project Description](#project-description)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

Authentication is the process of verifying who a user claims to be. 

There are three factors of authentication:

What you know — Something you know, such as a password, PIN, personal information like mother's maiden name, etc.
What you have — A physical item you have, such as a cell phone or a card.
What you are — Biometric data, such as fingerprint, retina scan, etc.

Password authentication falls into the "what you know" category and is the most common form of authentication.

Every time you've signed up for a website, you've likely been asked to create a username and password. Because this is such a common process now, it's become almost second-nature for some users to set up their accounts without much thought about the credentials they choose. And unfortunately, there's a lot at stake if a user chooses weak credentials.

### The challenge

Users should be able to:

- User will able to enter credentials.
- creadentials will get verified, after user will get access and land on dashboard page.
- If user credentials are wrong, respective error message will be displayed and user will not get access to dashboard page.
- After authenticating and landing to dashboard page, user can log out or clear auth to get back to login page.
- If user is not register, then user can register himself using registration page.
- Multiple users can register themselves.


### Project Description
a. In this project, I have created a form validator for a simple login and registration page. Basically, I have used JS to create classes that will validate the login and registration variables based on user's needs then I have stored information in the browser for authentication. 

b. I have used HTML, CSS, and Vanilla JavaScript. I did not use Bootstrap, jQuery, or any other frameworks.

c. I had implemented some of the featues including;-
   - This method can be used on local browsers, web apps, and even on server since it is all front-end code.
   - A login class which will contains all functions, for validation, status and authentication.
   - A register class which contains function to validate user information and register them accordingly.
   - Validation function will validate username and password fields.
   - Status field will check if validation is successfull or not and display errors if any.
   - Auth class makes sure the localStorage item exists and creates a function to log out.


### Links

- Live Site URL: [Netlify](https://jatin-login-authentication-js-mini-project1.netlify.app/)
- Git Repo: [Github](https://github.com/JatinM95/Login-Authentication-using-JS)

## My process

I have created my folder which includes following files:
- index.html
- dashboard.html
- register.html
- registration_success.html
- styles.css
- login.js
- register.js
- auth.js
- init.js

- index.html
For the login page, I have used the index.html since it is the first page visitors will access when they go to the website. This does not need to be how I set it up, but it will prevent us from having to create a JS redirect if they are not logged in.

- dashboard.html
This page is just for demo purposes. It only shows how a successful redirect happens and how we log out of the application. Notice there are two scripts called in body.

- register.html
For the register page, I have used the register.html. If user is not registered, he can register by entering username, password and email address.

- registration_success.html
After successful registration user will redirected to this page to show that registration is successful and now user can go to login page to login into the system.

- login.js
This will control the login functionality for this page and is referenced in the script tags of the index.html.

- register.js
This will control the registration functionality for the user, validate data, check if user is already registered or not and is referenced in the script tags of the register.html.

- auth.js
I have created an Auth class into it. The Auth class essentially just makes sure the localStorage item exists and creates a function to log out.

- init.js
I have called Auth class in it to check auth status and to redirect or not to redirect on dashboard page accordingly. Also to logout from dashboard page, on click event of logout the page will redirect to login window.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla Javascript

### What I learned

I have learnt the use of javascript to make our website interactive to user, so it will help user in order to login or register. I learned creating validation function to validate fields, accessing the html elements values for validation and sending back error messages to html label element in order to display error side by of fields. I also learnt to user localstorage of browser to save various users registration data.

I have also learned how authentication works, and how we can implement it using javascript.


### Continued development

- Login Authentication is the process of verifying who a user claims to be, can add more features to identify user.
- Using database various user's credentials can be added into databases using hashing.
- media queries was very new to implement, now I will implement it for various device screens in future projects.
- Application can be developed in order to prevent password attacks.
- Multi-factor Authentication can be used in future development.


### Useful resources

- [W3schools](https://www.w3schools.com/js/default.asp) - This helped me for understanding javascripts complex concepts like DOM manipulation and creating functions and classes in javascript.
- [JavaScript | MDN - Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - This is an amazing source which helped me during my project. This is official documentation for javascript.
- [Section.io](https://www.section.io/engineering-education/how-to-use-localstorage-with-javascript/) - This is an amazing article which helped me in understanding how to store data and how to fetch data from localstorage.


## Author

- Author Name - Jatin Mangal
- LinkedIn - [@jatin-mangal-184972a7](https://www.linkedin.com/in/jatin-mangal-184972a7/)

