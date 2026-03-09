import * as fs from "fs"


//audio file turns into a string
function convertToMarkdown(filepath: string) {
	fs.readFile(filepath, "utf8", (err, data) => {
		if (err) {
			console.log(err)
		} else {
			console.log(data.toString())
		}
	})
}

convertToMarkdown("../../test/test.txt")

