import chalk from "chalk";

const addSpacing = (msg: string) => `\n${msg}\n`;

export const logSuccess = (msg: string) => {
  console.log(addSpacing(chalk.green(`✨ ${msg}`)));
};

export const logSkip = (msg: string) => {
  console.log(addSpacing(chalk.yellow(`⏭️  ${msg}`)));
};

export const logError = (msg: string) => {
  console.log(addSpacing(chalk.red(`❌ ${msg}`)));
};

export const logInfo = (msg: string) => {
  console.log(addSpacing(chalk.cyan(`ℹ️  ${msg}`)));
};

export const logStep = (step: number, total: number, msg: string) => {
  console.log(addSpacing(chalk.blue(`[${step}/${total}] 🚀 ${msg}`)));
};
