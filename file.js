
// const fs = require("fs");

// const [, , name] = process.argv;
// console.log(name);

// fs.readFile("./msg.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.error(err);
//     }
//     console.log(`${data}, ${name}`);
// })

// const data = name;

// fs.writeFile("names.txt", data, (err) => {
//     console.log("Completed writing!!");
// })

// fs.appendFile("all-names.txt", data + "\n", (err) => {
//     console.log("Completed appending!!");
// })



// const { match } = require("assert");
// const fs = require("fs");

// const [, , name] = process.argv;
// console.log(name);

// fs.readFile("./all-names.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.error(err);
//     }
//     console.log(data);
//     const replaceData = data.replace("Ezhil", "Saranya");
//     console.log(replaceData);

//     fs.writeFile("all-names.txt", replaceData, (err) => {
//         console.log("Completed Replacing!!");
//     })
// })

// fs.unlink("./temp.txt", function (err) {
//     console.log("Removed Successfully!!!");
// })

// for bulk update we can use readdir

// const path = require("path");
// const directory = "./nice";

// fs.readdir(directory, (err, files) => {
//     if (err) throw err;

//     for (const file of files) {
//         fs.unlink(path.join(directory, file), err => {
//             if (err) throw err;
//         });
//     }
// });


const { match } = require("assert");
const fs = require("fs");


// const quote = "The road to success is always under construction";

const [, , noOfFiles, quote] = process.argv;
console.log(process.argv);

for (let i = 1; i <= noOfFiles; i++) {
    fs.writeFile(`./backups/test-${i}.html`, quote, (err) => {
        console.log("Completed writing!!", i); //  writeFile is async function prefer to use
    })
    // fs.writeFileSync(`./backups/test-${i}.html`, quote);
    // console.log(i) // Sync function
}


