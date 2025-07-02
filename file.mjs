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

// add content in existing file ..........

await appendFile("./data.txt", " banana");

contents = await readFile("./data.txt", { encoding: "utf8" });
console.log(contents);

// delet file

await unlink("./file.txt");
