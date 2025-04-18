import { execa } from "execa";
import { logError } from "../utils/logger.js";
import chalk from "chalk";

export async function setupNext(projectName: string, version: "latest" | "14") {
  try {
    const tag = version === "14" ? "@14" : "@latest";
    console.log(chalk.cyan(`\n📦 Creating Next.js ${tag} app...\n`));

    await execa(
      "npx",
      [
        `create-next-app${tag}`,
        projectName,
        "--typescript",
        "--tailwind",
        "--eslint",
        "--app",
        "--import-alias",
        "@/*",
      ],
      { stdio: "inherit" }
    );

    process.chdir(projectName);

    if (version === "14") {
      await execa("npm", ["install", "next@14"]);
    }
  } catch (err) {
    logError("Error creating Next.js app");
    throw err;
  }
}
