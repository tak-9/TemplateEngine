const fs = require("fs");
const ejs = require("ejs");

// function createHTML(team) {
//     createHTMLcard(team);
//     createHTMLtable(team);
// };

function createHTMLcard(team) { 
    var htmlCardStr;
    const outputFile =  __dirname + "/output/team.html";

    ejs.renderFile(__dirname + "/templates/card.ejs", {team: team}, function(err,str){
        if (err) throw err;
        htmlCardStr = str;
    });

    fs.writeFile(outputFile, htmlCardStr, function(err){
        if (err) throw err;
        console.log("Written to file: ", outputFile);
    });
}

function createHTMLtable(team) { 
    var htmlTableStr;
    const outputFile = __dirname  + "/output/team.html";

    ejs.renderFile(__dirname + "/templates/table.ejs", {team: team}, function(err,str){
        if (err) throw err;
        htmlTableStr = str;
    });

    fs.writeFile(outputFile, htmlTableStr, function(err){
        if (err) throw err;
        console.log("Written to file: ", outputFile);
    });
}

module.exports = { 
    createHTMLcard: createHTMLcard,
    createHTMLtable: createHTMLtable
};
