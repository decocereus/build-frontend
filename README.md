# Build Frontend CLI

A powerful CLI tool to bootstrap modern Next.js applications with best-in-class technologies including Tailwind CSS, shadcn/ui, Zustand, and Datadog monitoring.

## Features

- 🚀 Quick setup of Next.js projects with TypeScript
- 🎨 Pre-configured Tailwind CSS for styling
- 🎯 shadcn/ui components integration
- 📊 Zustand for state management
- 📈 Datadog monitoring integration
- ⚡️ Modern development experience

## Usage

Create a new project by running:

```bash
npx build-frontend
```

Or specify a project name directly:

```bash
npx build-frontend my-app
```

This will start an interactive CLI that will guide you through the process of creating your new Next.js application with all the configured technologies.

## What's Included

- Next.js with TypeScript
- Tailwind CSS for styling
- shadcn/ui component library
- Zustand for state management
- Datadog monitoring setup
- ESLint and Prettier configuration
- Git initialization

## Development

To contribute to this project:

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the project:
   ```bash
   npm run build
   ```
4. Link the package locally:
   ```bash
   npm link
   ```

## Scripts

- `npm run build` - Compiles TypeScript to JavaScript
- `npm run prepare` - Builds the project and sets executable permissions

## Dependencies

- chalk - Terminal string styling
- cli-progress - Progress bar for CLI
- execa - Process execution
- inquirer - Interactive command line user interfaces

## License

MIT © Amartya Singh
