const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");

const generateHTML = require("../generateHTML");
const generateHTMLtable = require("../generateHTML");

// Test Data
var m = new Manager("Bar", 1, "test@test.com", 100);
var e1 = new Engineer("Eng1", 2, "test1@test.com", "githubname1");
var e2 = new Engineer("Eng2", 3, "test2@test.com", "githubname2");
var e3 = new Engineer("Eng3", 4, "test3@test.com", "githubname3");
var i1 = new Intern("Int1", 5, "ddst@test.com", "university");
var i2 = new Intern("Int2", 6, "ddfadasdst@test.com", "uni123");
var i3 = new Intern("Int3", 7, "int3@test.com", "uni12345");
var team = [m, e1, e2, e3, i1, i2, i3];

//generateHTMLtable.createHTMLtable(team);
generateHTMLtable.createHTMLcard(team);
