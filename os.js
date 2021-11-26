const os = require("os"); //inbuilt package
const { cpuUsage } = require("process");
console.log("The free memory", os.freemem());
console.log("The total memory", os.totalmem());
console.log("The version", os.version());
console.log("The processor", os.cpus());

