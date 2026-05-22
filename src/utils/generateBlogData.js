// scripts/generate-blog-data.mjs
import fs from "node:fs/promises";

const baseUrl = "https://blog-api-0wvz.onrender.com";
const response = await fetch(`${baseUrl}/posts`);
const posts = await response.json();

await fs.writeFile(
  "./src/generated/blog-data.json",
  JSON.stringify(posts, null, 2)
);