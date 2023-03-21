const {exec} = require('child_process')
const {program} = require("commander")

program
	.requiredOption("-f, --find [find...]", "find file")
	.action((data, flags) => {
		//console.log(data.find[0])
		
		for(var i = 0; i < data.find.length; i++) {		
			exec ("find " + data.find[i], (err, stdout, stderr) => {
				if(err.code == 1)
					console.log("[" + err.cmd + "] file tidak ketemu");
			})	
		}
	})

	
program.parse(process.argv)