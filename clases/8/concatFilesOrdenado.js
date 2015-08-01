var fs = require("fs");

var curFilename;
var filenames = process.argv.slice(2);
var processed = 0;
var filesContents = [];
var i;

function createReadHandler(pos) {

	return function(error, content) {

        var result;

		processed++;

		if (error) {
			console.log(error);
			return;
		}

		filesContents[pos] = content;

		if (processed === filenames.length) {
			result = filesContents.reduce(function(prevContent, curContent) {
                return prevContent + curContent;
			}, "");

//    result = "";
//    for (var i = 0; i < filesContents.length; i++) {
//        if (typeof filesContents[i] !== "undefined") {
//        		result += filesContents[i];
//        }
//    }

			console.log(result);
		}
	};
}

for (i = 0; i < filenames.length; i++) {
	curFilename = filenames[i];

	fs.readFile(curFilename, 'UTF8', createReadHandler(i));
}