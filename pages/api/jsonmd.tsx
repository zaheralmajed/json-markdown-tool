import { Request, Response } from "express";
import fs from "fs";
import jsonData from "../../conversion/jsonmd/json-to-convert";

export default async function handler(req: Request, res: Response) {
  if (!fs.existsSync("./conversion/jsonmd/converted")) {
    fs.mkdirSync("./conversion/jsonmd/converted", { recursive: true });
  }

  // Generate Markdown files
  jsonData.forEach((item) => {
    const { demo } = item;
    const mdContent = `---
test:  "[[${demo.toLowerCase()}]]"
---`;

    const filePath = `./conversion/jsonmd/converted/${demo.toLowerCase()}.md`;

    fs.writeFileSync(filePath, mdContent);
  });

  res.status(200).end();
}
