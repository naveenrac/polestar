# Playwright Automation Project

This project is set up to use Playwright for end-to-end testing. It is configured to run tests in parallel across different browsers.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (version 14 or higher) and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

## Installation

1. Clone the repository to your local machine:

   ```sh
   git clone <your-repo-url>
   cd <your-repo-directory>
2. Install the dependencies:
    npm install
    Project Structure

    package.json: Contains project metadata and dependencies.
    playwright.config.js: Configuration file for Playwright.
    tests/demo: Directory where your test files are located.

Configuration

The Playwright configuration (playwright.config.js) includes:

    Parallel test execution.
    Retry logic for tests when running in CI.
    HTML reporter for test results.
    Configuration for testing in Google Chrome.

Running Tests

To execute the tests, run the following command:
npx playwright test

This will run all tests located in the tests/demo directory.
Running Tests in a Specific Browser

The project is configured to run tests using Google Chrome. You can uncomment additional browser configurations in the playwright.config.js file to run tests in other browsers.
Viewing Test Results

After running the tests, an HTML report is generated. You can view it by opening the playwright-report/index.html file in your browser.
Tracing

Tracing is enabled on the first retry of a failed test. This helps in debugging by providing detailed information about the test execution.
Additional Commands
Running a Specific Test File

To run a specific test file, use the following command:
npx playwright test tests/demo/your-test-file.spec.js

Running Tests in Debug Mode

To run tests in debug mode, use the following command:

npx playwright test --debug

Writing Tests

Tests are written using the Playwright test framework. Here is a sample test:
import { test, expect } from '@playwright/test';

test('Verify delete user function', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/1');
    expect(response.status()).toBe(204);
    const responseBody = await response.text();
    console.log(responseBody);
});
CI/CD Integration

The configuration is set to handle CI environments with specific settings like retry logic and worker settings. Ensure the environment variable CI is set to true in your CI pipeline configuration to enable these settings.
License

This project is licensed under the ISC License. See the LICENSE file for more details.
Author

[Naveen]


Replace `<your-repo-url>` and `<your-repo-directory>` with the actual URL and directory name of your repository. Customize the author and other sections as needed. This `README.md` provides comprehensive instructions for setting up, configuring, running, and understanding the Playwright tests in the project.
"# polestar" 
