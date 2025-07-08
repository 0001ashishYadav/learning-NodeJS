import { writeFile } from "fs/promises";

export const createFiles = async (req, res) => {
  console.log(req.query.name);
  console.log(req.body);
  console.log(req.test);

  await writeFile(`./${req.query.name}.txt`, req.body.fruit);

  res.json({ data: "files" });
};
