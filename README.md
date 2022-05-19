# Ideaify

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The purpose of the project is to allow users to generate ideas for their businesses. This is done by using the OpenAi API. This project was styled using Sass and incorporates Shopify's brand colors and non-proprietary font families.

## Get Started

First, be sure to run npm install to install your dependencies. You may also need to install the following:

- npm install openai
- npm install sass
- npm install @mui/material @emotion/react @emotion/styled @material-ui/core

Then, you will need to get an API key from OpenAi: https://openai.com/api/

Once you have your free API key, you can either create a .env file and include it there, or if you are running it locally you can insert it App.js on line 30.

IMPORTANT: For security reasons, once you have pasted your API into the .env file add .env to the .gitignore file if it isn't already in there.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

There are a couple of unit tests to run, so go ahead and feel free to run them.

## How to use the app

Simply type in your business or company type (i.e. bakery, travel, beauty, stationary) and upon clicking the button or pressing the Enter key the api will be called. After a couple of moments a list of product ideas will be generated and appear on the screen.

You can check the Increase Randomness checkbox to ensure little to no duplicates. When this checkbox is checked the temperature is increased. You can read more about temperature here: https://algowriting.medium.com/gpt-3-temperature-setting-101-41200ff0d0be

### What I would like to improve

- More unit tests
- Set up a backend. This would help avoid the error thrown from OpenAi about being unable to set the unsafe header "User-Agent".
- Implementing Browser, Router, Routes, and useRef for the ability to link and scroll to other pages
- Creating a link inside the navBar for users to click on and get to their ideas list
- Storing the data in localStorage or a backend so that if a user refreshes the page their ideas are still displayed
- A button or link at the end of the page that scrolls you back to the top (the idea lists can get long)
- Delete buttons for the individual ideas
- Save or email buttons so users can save the ideas and/or email them to themselves or others
- Additional components that hold pieces of code such as an OpenAi component and a checkbox component
- Additional design features such as maybe another API that renders images of the product ideas that are being populated.

## About the Project and developer

Ideaify is a web application intended to help Shopify merchants come up with their next big thing. Sarah Moe is a software engineer with a background in law and business consulting. You could say she loves helping small business owners, which is one of reasons she created Ideaify. She also loves croissants, bicycling, and learning new things.
