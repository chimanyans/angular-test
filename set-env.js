
var  writeFile  = require('fs').writeFile;
// var  argv  = require('yargs').argv;

// This is good for local dev environments, when it's better to
// store a projects environment variables in a .gitignore'd file
// require('dotenv').config();

// Would be passed to script like this:
// `ts-node set-env.ts --environment=dev`
// we get it from yargs's argv object
// var environment = argv.environment;

console.log("argv ", process.argv[2])//WORKDIR
console.log("env param API_URL", process.env.API_URL)

var targetPath = process.argv[2] //+`/src/environments/params.ts`;

var envConfigFile = `
export const apiUrl = "${process.env.API_URL}";
`
writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Output generated at ${targetPath}`);
});
