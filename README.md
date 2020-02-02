# TemplateEngine

## Description 
This is a software engineering team generator command line application. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user. 

## Usage
1. Ensure node.js is installed as this application is developed using node.js. 

2. Install libraries 

$ npm install 

3. Run application  

$ node app.js 

4. Once application is completed, HTML file is generated in ./output/team.html. 

If you have changed the default output filename, html file is output in the specified directory. 

Open it in your web browser.

## Testing 

This application was built by practicing the TDD (Test Driven Development). 
The test can be run by the following command. 

$ npm test run

Also, use the following command, if you want to test the html output without using the command line inquire.

$ node appTest.js


## Credit 
Node.js

Inquirer.js https://www.npmjs.com/package/inquirer

EJS https://www.npmjs.com/package/ejs

Using the EJS allowed me to write control statement within the html template files. All I need to do is to pass the array of data objects to  html template file. Thanks to this library, I was able to make the application to provide choice of two layout of html easily.

Bootstrap https://getbootstrap.com/

Font awesome 

## Screen Capture

<img src="screencapture.png" width="500px">


<img src="screencapture2.png" width="500px">
