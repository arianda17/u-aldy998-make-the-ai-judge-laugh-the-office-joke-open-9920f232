import { mkdir, writeFile } from "node:fs/promises";

const joke = "Slack's green dot is the office mood ring: green means 'free', red means 'meeting', yellow means 'I'm pretending to work'";

async function main() {
  await mkdir("/output", { recursive: true });
  await writeFile("/output/entry.txt", joke, "utf8");
}

main();