// src/utils/ProgressBar.ts
import { SingleBar, Presets } from "cli-progress";
import chalk from "chalk";

export class ProgressBar {
  private readonly bar: SingleBar;

  constructor(taskName: string) {
    this.bar = new SingleBar(
      {
        format: `${chalk.cyan(taskName)} ${chalk.gray("│")}{bar}${chalk.gray(
          "│"
        )} ${chalk.cyan("{percentage}%")}`,
        barCompleteChar: "█",
        barIncompleteChar: "░",
        hideCursor: true,
        clearOnComplete: true,
        stopOnComplete: true,
        forceRedraw: true,
      },
      Presets.shades_grey
    );
  }

  start(total = 100) {
    // Clear any existing output
    console.log("\n");
    this.bar.start(total, 0);
  }

  update(value: number) {
    this.bar.update(value);
  }

  increment(step = 10) {
    this.bar.increment(step);
  }

  stop() {
    this.bar.update(100);
    this.bar.stop();
    // Add spacing after the bar
    console.log("\n");
  }
}
