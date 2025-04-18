import chalk from "chalk";
const addSpacing = (msg) => `\n${msg}\n`;
export const logSuccess = (msg) => {
    console.log(addSpacing(chalk.green(`✨ ${msg}`)));
};
export const logSkip = (msg) => {
    console.log(addSpacing(chalk.yellow(`⏭️  ${msg}`)));
};
export const logError = (msg) => {
    console.log(addSpacing(chalk.red(`❌ ${msg}`)));
};
export const logInfo = (msg) => {
    console.log(addSpacing(chalk.cyan(`ℹ️  ${msg}`)));
};
export const logStep = (step, total, msg) => {
    console.log(addSpacing(chalk.blue(`[${step}/${total}] 🚀 ${msg}`)));
};
