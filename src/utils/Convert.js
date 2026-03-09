"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
//audio file turns into a string
function convertToMarkdown(filepath) {
    fs.readFile(filepath, "utf8", function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(data.toString());
        }
    });
}
convertToMarkdown("../../test/test.txt");
