import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";

interface Metadata {
  [key: string]: any;
}

export default async function handler(req: Request, res: Response) {
  const folderPath = path.join(process.cwd(), "./conversion/mdjson/markdown-to-convert");
  const files = fs.readdirSync(folderPath);

  const jsonData: Metadata[] = [];

  files.forEach((file) => {
    const filePath = path.join(folderPath, file);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = grayMatter(fileContent);

    if (Object.keys(data).length > 0) {
      jsonData.push(data);
    }
  });

  const outputJsonPath = path.join(folderPath, "../../../conversion/mdjson/converted.json");
  fs.writeFileSync(outputJsonPath, JSON.stringify(jsonData, null, 2));

  res.status(200).json({ message: "Conversion complete!" });
}
