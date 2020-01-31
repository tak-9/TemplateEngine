const inquirer = require("inquirer");
const path = require("path");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const generateHTML = require("./generateHTML");

var team = [];
var id = 1;

askBasicQuestions();

function askBasicQuestions(){ 
    inquirer.prompt([
        {type: "input", message: "Enter name: ", name: "name", validate: checkMandatory},
        {type: "input", message: "Enter email: ", name: "email", validate: validateEmailFormat},
        {type: "list", message: "Choose role: ", name: "role", choices: ["Manager", "Engineer", "Intern"], default: "Engineer"}
        ])
        .then((ans)=> {
            var role = ans.role;
            console.log();
            if ( role === "Manager") { 
                if (isThereManagerInTeam()){
                    console.log("Manager has been entered already. You can only enter one manager."); 
                    askBasicQuestions();                   
                } else {
                    askManagerQuestion(ans);
                }
            } else if (role === "Engineer") { 
                askEngineerQuestion(ans);
            } else if (role === "Intern") { 
                askInternQuestion(ans);
            }
        })
        .catch((err) => { console.log("Error in Inquirer.", err) }); 
}

function isThereManagerInTeam(){
    var managerFound = false;
    for (var i=0; i<team.length; i++) { 
        if (team[i] instanceof Manager) { 
            managerFound=true;
        }
    }
    return managerFound;
}

function checkMandatory(str) { 
    if (str.trim() === "") {
        console.log("\nPThis is a mandatory field.");
        return false;
    } else { 
        return true;
    }
}

function checkNumber(str){
    if (str.match("[0-9]+") === null) {
        console.log("\nPlease enter a valid number!");
        return false;
    } else { 
        return true;
    }
}

function checkHtmlFilename(str) { 
    if (!checkMandatory) {
        return false;
    }

    var regEx = /^.*\.(html|htm)$/i;
    if (regEx.test(str)){
        return true;
    } else {
        console.log("\nFilename must end with html or htm.");
        return false;        
    }
}

function validateEmailFormat(str){
    // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    var emailRegEx = /\S+@\S+\.\S+/;
    if (emailRegEx.test(str)){ 
        return true;
    } else {
        console.log("\nPlease enter a valid Email!");
        return false;
    }
}

function askManagerQuestion(ans){ 
    roleQuestions = [{type: "input", message: "Enter Office Number: ", name: "officeNumber", validate: checkNumber}];
    inquirer.prompt(roleQuestions)
        .then((ansMgr) => {
            var m = new Manager(ans.name, id, ans.email, ansMgr.officeNumber);
            id++;
            team.push(m);
            enterMore();
        })
        .catch((err) => {
            console.log("Error in Inquirer Manager questions.", err);
        })
}

function askEngineerQuestion(ans){
    roleQuestions = [{type: "input", message: "Enter Github: ", name: "github", validate: checkMandatory}];
    inquirer.prompt(roleQuestions)
        .then((ansEng) => {
            //console.log(ans.name, ans.email, ans.role, ans2.github);
            var e = new Engineer(ans.name, id, ans.email, ansEng.github);
            id++;
            team.push(e);
            enterMore();
        })
        .catch((err) => {
            console.log("Error in Inquirer Engineer questions.", err);
        })
}

function askInternQuestion(ans){
    roleQuestions = [{type: "input", message: "Enter School: ", name: "school", validate: checkMandatory}];
    inquirer.prompt(roleQuestions)
        .then((ansIntern) => {
            //console.log(ans.name, ans.email, ans.role, ans2.school);
            var i = new Intern(ans.name, id, ans.email, ansIntern.school);
            id++;
            team.push(i);
            enterMore();
        })
        .catch((err) => {
            console.log("Error in Inquirer Intern questions.", err);
        })
}

function enterMore(){
    inquirer.prompt([{type: "confirm", message: "Do you want to enter more people? :", name: "anyMore", default: true}])
        .then((ansAnymore)=> {
            //console.log(ansAnymore.anyMore)
            if (ansAnymore.anyMore) { 
                askBasicQuestions();
            } else { 
                if (isThereManagerInTeam()){
                    chooseOutputFormat();
                } else {
                    console.log("\nAt least one manager is required for a team.");
                    askBasicQuestions();
                }
            }
        })
        .catch((err) => { console.log("Error in Inquirer Anymore.", err) }); 
}


function chooseOutputFormat(){
    inquirer.prompt([{type: "list", message: "Do you want to output in Card or Table format? :", name: "outputLayout", choices: ["card", "table"], default: "card"}])
    .then((ansLayout)=> {
        var defaultFilename = path.resolve(__dirname  + "/output/team.html");
        inquirer.prompt([{type: "input", message: "Enter output filename: ", name: "outputFilename", validate: checkHtmlFilename, default: defaultFilename}])
            .then((ansFilename)=>{
                generateHTML.createHTML(ansFilename.outputFilename, ansLayout.outputLayout, team);
            })
            .catch((err) => { console.log("Error in Inquirer filename.", err) }); 
    })
    .catch((err) => { console.log("Error in Inquirer outputformat.", err) }); 
}
