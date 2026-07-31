# Playwright TypeScript Test Framework

A Playwright-based UI automation framework built with TypeScript.

The purpose of this project is to practice real-world test automation framework design, Playwright features, industry best practices, Git workflows, and CI execution through GitHub Actions.

## Technology Stack

* Playwright
* TypeScript
* Node.js
* npm
* Git
* GitHub Actions

## Application Under Test

This framework currently automates:

```text
https://the-internet.herokuapp.com
```

The website contains practice scenarios for:

* Checkboxes
* Dropdowns
* Authentication
* File uploads
* Alerts
* Frames and iframes
* Multiple windows
* Dynamic elements
* Tables
* Drag and drop

Additional practice websites may be added later for calendars, advanced forms, and other UI controls.

## Project Structure

```text
playwright-typescript-framework/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── pages/
│   └── HomePage.ts
├── tests/
│   └── home-page.spec.ts
├── playwright.config.ts
├── package.json
├── package-lock.json
└── README.md
```

## Framework Design

The framework follows the Page Object Model pattern.

Page-specific locators and actions are stored inside classes under the `pages` folder.

Test files under the `tests` folder describe test scenarios and use the page-object methods.

Example:

```typescript
const homePage = new HomePage(page);

await homePage.navigate();
await homePage.verifyMainHeading();
```

## Installation

Clone the repository and install dependencies:

```bash
npm ci
```

Install the Chromium browser:

```bash
npx playwright install chromium
```

## Running Tests

Run all configured tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run tests using Playwright UI mode:

```bash
npx playwright test --ui
```

Run a specific test file:

```bash
npx playwright test tests/home-page.spec.ts
```

## Viewing Reports

Open the latest HTML report:

```bash
npx playwright show-report
```

## Continuous Integration

GitHub Actions runs the Playwright tests when code is pushed or when a pull request is opened against the `main` branch.

The CI workflow:

1. Checks out the repository.
2. Installs Node.js.
3. Installs dependencies using `npm ci`.
4. Installs Chromium and required system dependencies.
5. Runs the Playwright tests.
6. Uploads the HTML report as an artifact.

## Git Workflow

Changes are developed using feature branches.

Example:

```bash
git switch -c feature/add-login-tests
```

After completing the changes:

```bash
git add .
git commit -m "Add login tests"
git push -u origin feature/add-login-tests
```

A pull request is then opened against the `main` branch.

## Current Coverage

* Home-page navigation
* Page-title validation
* Main-heading validation
* Page Object Model implementation
* Chromium execution
* GitHub Actions execution

## Planned Enhancements

* Form input automation
* Checkboxes and radio buttons
* Dropdowns and select lists
* Calendars and date pickers
* Alerts and browser dialogs
* File uploads and downloads
* Frames and iframes
* Multiple tabs and windows
* Dynamic elements
* Tables
* Authentication
* Reusable fixtures
* Environment configuration
* Test data management
* Screenshots, traces, and videos
* Tags and test grouping
* Parallel execution
* Cross-browser execution
* API testing
* Enhanced reporting
