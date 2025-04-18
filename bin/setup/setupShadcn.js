import { execa } from "execa";
import { logError, logSuccess, logInfo } from "../utils/logger.js";
export async function setupShadcn(projectPath, version) {
    try {
        logInfo("Initializing shadcn/ui...");
        const tag = version === "2.3.0" ? "@2.3.0" : "@latest";
        await execa("npx", [`shadcn${tag}`, "init"], {
            cwd: projectPath,
            stdio: "inherit",
        });
        logSuccess("Shadcn/ui installed");
    }
    catch (err) {
        logError("Error installing Shadcn/ui");
        throw err;
    }
}
