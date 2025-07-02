import {
  readFile,
  writeFile,
  appendFile,
  unlink,
  mkdir,
} from "node:fs/promises";

// make file and add content

await writeFile("./data.txt", "apple");
let contents = await readFile("./data.txt", { encoding: "utf8" });
console.log(contents);
