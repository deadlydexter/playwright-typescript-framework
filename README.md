# Playwright TypeScript Test Automation Framework

A practical Playwright framework built with TypeScript for UI and API test automation.

The framework demonstrates the structure and concepts commonly used in real-world QA automation projects and discussed in Playwright interviews.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- GitHub Actions
- ESLint
- Prettier
- dotenv

## Framework Features

- Page Object Model
- Custom Playwright fixtures
- Environment-based configuration
- UI and API automation
- Data-driven testing
- Dynamic test-data generation
- Smoke and regression tags
- Authentication setup example
- Automatic waits and web-first assertions
- Failure screenshots, traces, and HTML reports
- TypeScript type checking
- ESLint and Prettier validation
- GitHub Actions CI execution
- Manual suite selection in GitHub Actions

## Project Structure

```text
playwright-typescript-framework/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── config/
│   └── environment.ts
├── fixtures/
│   └── testFixtures.ts
├── pages/
│   ├── AddRemoveElementsPage.ts
│   ├── CheckboxesPage.ts
│   ├── DropdownPage.ts
│   ├── DynamicLoadingPage.ts
│   ├── HomePage.ts
│   ├── InputsPage.ts
│   └── LoginPage.ts
├── playwright/
│   └── .auth/
├── test-data/
│   ├── inputData.ts
│   └── inputScenarios.ts
├── tests/
│   ├── api/
│   │   └── posts-api.spec.ts
│   ├── add-remove-elements.spec.ts
│   ├── auth.setup.ts
│   ├── checkboxes.spec.ts
│   ├── dropdown.spec.ts
│   ├── dynamic-loading.spec.ts
│   ├── home-page.spec.ts
│   ├── hooks-example.spec.ts
│   ├── input-scenarios.spec.ts
│   ├── inputs.spec.ts
│   └── random-data.spec.ts
├── utils/
│   └── randomData.ts
├── .env.example
├── .gitignore
├── .prettierignore
├── .prettierrc.json
├── eslint.config.mjs
├── package.json
├── playwright.config.ts
└── tsconfig.json
```

## Prerequisites

Install:

- Node.js 20 or later
- npm
- Git
- VS Code or another TypeScript-compatible IDE

Verify installation:

```bash
node --version
npm --version
git --version
```

## Installation

Clone the repository:

```bash
git clone https://github.com/deadlydexter/playwright-typescript-framework.git
```

Open the project:

```bash
cd playwright-typescript-framework
```

Install dependencies:

```bash
npm ci
```

Install Chromium:

```bash
npx playwright install chromium
```

## Environment Configuration

Create a local environment file:

```text
.env.test
```

Example:

```env
BASE_URL=https://the-internet.herokuapp.com
AUTH_USERNAME=tomsmith
AUTH_PASSWORD=SuperSecretPassword!
```

The committed `.env.example` file contains placeholder values only.

Local environment files and authentication state files are excluded from Git.

## Running Tests

Run the Chromium test suite:

```bash
npm test
```

Run using the test environment:

```bash
npm run test:test
```

Run using the stage environment:

```bash
npm run test:stage
```

Run in headed mode:

```bash
npm run test:headed
```

Run with Playwright UI mode:

```bash
npm run test:ui
```

Run smoke tests:

```bash
npm run test:smoke
```

Run regression tests:

```bash
npm run test:regression
```

Run authentication setup separately:

```bash
npm run test:auth-setup
```

Run a specific test file:

```bash
npx playwright test tests/checkboxes.spec.ts --project=chromium
```

## Test Tags

Tests use Playwright metadata tags.

Example:

```typescript
test(
  'selects a checkbox',
  {
    tag: ['@smoke', '@regression'],
  },
  async ({ checkboxesPage }) => {
    // test steps
  }
);
```

Run by tag:

```bash
npm run test:smoke
npm run test:regression
```

## Page Object Model

Each page class stores locators and reusable page actions.

Example:

```typescript
export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByLabel('Username');
    this.passwordInput = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
```

Page objects keep locators and UI actions separate from test logic.

## Custom Fixtures

Custom fixtures create and provide typed page-object instances to tests.

Example:

```typescript
test('selects an option', async ({ dropdownPage }) => {
  await dropdownPage.navigate();
  await dropdownPage.selectOption('Option 1');
  await dropdownPage.verifySelectedOption('Option 1');
});
```

This avoids repeatedly creating page objects inside every test.

## API Testing

The framework uses Playwright's built-in `request` fixture.

Example:

```typescript
test('get a post by ID', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();

  const responseBody = await response.json();

  expect(responseBody.id).toBe(1);
});
```

Covered API patterns include:

- GET requests
- POST requests
- Positive validation
- Negative validation
- Status-code validation
- JSON response validation
- Request body handling

## Dynamic Elements and Waits

The framework relies on Playwright auto-waiting and web-first assertions.

Example:

```typescript
await expect(loadingIndicator).toBeHidden({
  timeout: 10_000,
});

await expect(resultText).toBeVisible({
  timeout: 10_000,
});
```

Hard-coded delays such as the following are avoided:

```typescript
await page.waitForTimeout(5000);
```

Tests wait for meaningful UI conditions instead.

## Authentication State

Authentication setup is implemented as a separate Playwright project.

Run it with:

```bash
npm run test:auth-setup
```

The setup test:

1. Logs in through the UI
2. Verifies successful login
3. Saves browser storage state to:

```text
playwright/.auth/user.json
```

The authentication file is ignored by Git.

The current demo application does not use this state automatically for the Chromium suite, so authentication setup remains an independent framework example.

## Parallel Execution and Test Isolation

Playwright creates an isolated browser context for each test.

Tests should not depend on:

- another test running first
- shared mutable variables
- the same user or test record being modified concurrently
- browser state created by another test

Example configuration:

```typescript
fullyParallel: true,
retries: process.env.CI ? 2 : 0,
workers: process.env.CI ? 1 : undefined,
```

Locally, Playwright may use multiple workers. CI currently uses one worker for stability.

## Retries

CI failures may retry up to two times:

```typescript
retries: process.env.CI ? 2 : 0,
```

This means a test can run a maximum of three times:

```text
Initial attempt
Retry 1
Retry 2
```

Retries help capture diagnostics but should not be used to hide flaky tests.

## Reporting and Diagnostics

The framework uses:

- List reporter
- HTML reporter
- Named `test.step()` output
- Screenshots on failure
- Trace on first retry
- GitHub Actions artifact upload

Open the HTML report:

```bash
npm run report
```

Open a trace:

```bash
npx playwright show-trace path/to/trace.zip
```

## Code Quality

Format the project:

```bash
npm run format
```

Check formatting:

```bash
npm run format:check
```

Run ESLint:

```bash
npm run lint
```

Run TypeScript validation:

```bash
npm run typecheck
```

Run all quality checks:

```bash
npm run quality
```

The quality command runs:

```text
TypeScript validation
→ ESLint
→ Prettier check
```

## GitHub Actions

The GitHub Actions workflow:

1. Checks out the repository
2. Installs Node.js
3. Installs dependencies with `npm ci`
4. Runs code-quality checks
5. Installs Chromium
6. Runs Playwright tests
7. Uploads reports and test artifacts

The workflow runs on:

- Push to `main`
- Pull requests to `main`
- Manual execution using `workflow_dispatch`

Manual execution supports:

- All tests
- Smoke tests
- Regression tests

## Branching Workflow

Create a feature branch:

```bash
git switch -c feature/example-feature
```

Commit changes:

```bash
git add .
git commit -m "Add example feature"
```

Push the branch:

```bash
git push -u origin feature/example-feature
```

Create a pull request into `main`.

After the PR is merged:

```bash
git switch main
git pull
```

## Interview Summary

This framework demonstrates the following concepts:

- Playwright configuration
- TypeScript-based test automation
- Page Object Model
- Custom fixtures
- Environment configuration
- UI and API testing
- Data-driven testing
- Test tags
- Authentication setup
- Parallel execution
- Test isolation
- Retries
- Auto-waiting
- CI/CD integration
- Reporting and diagnostics
- Code-quality enforcement

A concise framework explanation:

> This is a Playwright TypeScript automation framework using Page Object Model and custom fixtures. Environment values are managed through dotenv, test data is separated from test logic, and the framework supports UI and API automation. Smoke and regression suites are selected using tags. GitHub Actions runs type checking, linting, formatting validation, Chromium tests, and artifact upload. Playwright auto-waiting, web-first assertions, retries, traces, screenshots, and isolated browser contexts are used to improve reliability and debugging.

## Test Application

UI tests use:

```text
https://the-internet.herokuapp.com
```

API tests use:

```text
https://jsonplaceholder.typicode.com
```

## License

This project is intended for learning, interview preparation, and test-automation practice.
