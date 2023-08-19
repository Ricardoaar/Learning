const path = require("path");

const [, , algorithmFolder, ...args] = process.argv;
const pathToSerializer = path.resolve(".", algorithmFolder);

const serializer = require(`${pathToSerializer}/serializer`);
console.log(serializer(args));

