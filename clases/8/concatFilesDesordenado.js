var curFilename;
var filenames = process.argv.slice(2);
var i;
var processed = 0;
var result;

for (i = 0; i < filenames.length; i++) {
	curFilename = filenames[i];

	fs.readFile(curFilename, 'UTF8', function onFileRead(error, content) {
		processed++;

		if (error) {
			console.log(error);
			return;
		}

		result += content;

		if (processed === filenames.length) {
			console.log(result);
		}
	});
}
