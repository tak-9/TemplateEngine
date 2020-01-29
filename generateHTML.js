const fs = require("fs");
const ejs = require("ejs");

function createHTML(team) {
    //console.log(team);
    var htmlStr = fs.readFileSync("./templates/header_template.ejs", "utf8");
    const htmlBodyTemplate = fs.readFileSync("./templates/card_template.ejs", "utf8");

    team.forEach(function(item, i, teamArr){ 
        var option1def;
        var option1val;
        switch(item.getRole()) { 
            case "Manager":
                option1def = "Office number";  
                option1val = item.getOfficeNumber();    
                break;
            case "Engineer":
                option1def = "Github";  
                option1val = item.getGithub();    
                break;
            case "Intern": 
                option1def = "School";  
                option1val = item.getSchool();    
                break;
            case "Employee": 
                option1def = " ";  
                option1val = " ";    
                break;
            default:
                option1def = " ";  
                option1val = " ";
                break;
        }

        var htmlParams = {
            id: item.getId(),
            name: item.getName(),
            role: item.getRole(),
            email: item.getEmail(),
            option1def: option1def,
            option1val: option1val
        };
        
        if (i % 3 === 0){
            htmlStr += "<div class='row'>\n"
        }
        htmlStr += ejs.render(htmlBodyTemplate, {htmlParams: htmlParams});

        if ((i % 3 === 2) || (i === teamArr.length - 1)){
            htmlStr += "</div><!--end row -->\n"
        }
    });

    htmlStr += "</div>\n</body>" 

    //console.log(htmlStr);

    fs.writeFile("./output/team.html", htmlStr, function(err){
        if (err) throw err;
    });
};

module.exports = { 
    createHTML: createHTML
};
