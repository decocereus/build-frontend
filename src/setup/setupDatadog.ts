import { execa } from "execa";
import { ProgressBar } from "../utils/progress-bar.js";
import fs from "fs";
import { logError, logSuccess } from "../utils/logger.js";

export async function setupDatadog(projectPath: string) {
  const progress = new ProgressBar("Installing Datadog RUM");
  progress.start();

  try {
    await execa("npm", ["install", "@datadog/browser-rum"], {
      cwd: projectPath,
      stdio: "inherit",
    });
    progress.increment(100);
    const envContent = `# .env.example

    NEXT_PUBLIC_DD_CLIENT_TOKEN=your-client-token
    NEXT_PUBLIC_DD_APPLICATION_ID=your-app-id
    NEXT_PUBLIC_DD_SERVICE=your-service-name
    NEXT_PUBLIC_DD_ENV=production
    `;

    fs.writeFileSync(`${projectPath}/.env.example`, envContent);
    logSuccess("Datadog installed");
    progress.stop();
  } catch (err) {
    logError("Error installing Datadog");
    progress.stop();
    throw err;
  }
}
