import { execa } from "execa";
import { ProgressBar } from "../utils/progress-bar.js";
import { logError, logSuccess } from "../utils/logger.js";
export async function setupZustand(projectPath) {
    const progress = new ProgressBar("Installing Zustand");
    progress.start();
    try {
        await execa("npm", ["install", "zustand"], {
            cwd: projectPath,
            stdio: "inherit",
        });
        progress.increment(100);
        progress.stop();
        logSuccess("Zustand installed");
    }
    catch (err) {
        progress.stop();
        logError("Error installing Zustand");
        throw err;
    }
}
