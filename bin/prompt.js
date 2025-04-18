import inquirer from "inquirer";
export async function askQuestions() {
    return inquirer.prompt([
        {
            name: "projectName",
            type: "input",
            message: "Project name:",
            default: "avail-frontend",
        },
        {
            name: "nextVersion",
            type: "list",
            message: "Choose Next.js version:",
            choices: ["latest", "14"],
        },
        {
            name: "shadcnVersion",
            type: "list",
            message: "Choose shadcn/ui version:",
            choices: ["latest", "2.3.0"],
        },
        {
            name: "zustand",
            type: "confirm",
            message: "Include Zustand for state management?",
            default: true,
        },
        {
            name: "datadog",
            type: "confirm",
            message: "Include Datadog for monitoring?",
            default: false,
        },
    ]);
}
