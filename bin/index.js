#!/usr/bin/env node
import chalk from "chalk";
import path from "path";
import { askQuestions } from "./prompt.js";
import { setupNext } from "./setup/setupNext.js";
import { setupShadcn } from "./setup/setupShadcn.js";
import { setupZustand } from "./setup/setupZustand.js";
import { setupDatadog } from "./setup/setupDatadog.js";
import { logSuccess, logStep } from "./utils/logger.js";
async function runCLI() {
    console.log("\n" + chalk.bgCyan.black(" build-frontend ") + "\n");
    console.log(chalk.cyan("🚀 Welcome! Let's create your awesome Next.js app!\n"));
    const options = await askQuestions();
    const projectPath = path.join(process.cwd(), options.projectName);
    const totalSteps = 2 + (options.zustand ? 1 : 0) + (options.datadog ? 1 : 0);
    let currentStep = 0;
    logStep(++currentStep, totalSteps, "Setting up Next.js project");
    await setupNext(options.projectName, options.nextVersion);
    await new Promise((resolve) => setTimeout(resolve, 500));
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (options.zustand) {
        logStep(++currentStep, totalSteps, "Setting up Zustand state management");
        await setupZustand(projectPath);
        await new Promise((resolve) => setTimeout(resolve, 500));
    }
    if (options.datadog) {
        logStep(++currentStep, totalSteps, "Configuring Datadog monitoring");
        await setupDatadog(projectPath);
    }
    logStep(++currentStep, totalSteps, "Installing shadcn/ui components");
    await setupShadcn(projectPath, options.shadcnVersion);
    logSuccess(`Your app is ready! 🎉\n\nNext steps:\n  cd ${options.projectName}\n  npm run dev`);
}
runCLI().catch((err) => {
    console.error(chalk.red("\n❌ Error: " + err.message + "\n"));
    process.exit(1);
});
