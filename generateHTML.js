const fs = require("fs");
const ejs = require("ejs");

function createHTMLcard(outputFilename, team) { 
    var htmlCardStr;
    ejs.renderFile(__dirname + "/templates/card.ejs", {team: team}, function(err,str){
        if (err) throw err;
        htmlCardStr = str;
    });

    fs.writeFile(outputFilename, htmlCardStr, function(err){
        if (err) throw err;
        console.log("Written to file: ", outputFile);
    });
}

function createHTMLtable(outputFilename, team) { 
    var htmlTableStr;
    ejs.renderFile(__dirname + "/templates/table.ejs", {team: team}, function(err,str){
        if (err) throw err;
        htmlTableStr = str;
    });

    fs.writeFile(outputFilename, htmlTableStr, function(err){
        if (err) throw err;
        console.log("Written to file: ", outputFile);
    });
}

module.exports = { 
    createHTMLcard: createHTMLcard,
    createHTMLtable: createHTMLtable
};
