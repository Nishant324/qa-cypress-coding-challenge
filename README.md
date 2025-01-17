### Submission

# Cypress Test Automation Framework

This repository contains an automated test suite built using Cypress, a JavaScript-based end-to-end testing framework. The framework follows the Page Object Model (POM) design pattern, promotes code reusability, and separates test logic from the page structure.

## Folder Structure

### The project is organized into the following folders:

1. cypress/integration: Contains test files written using the Cypress framework. Each test file represents a specific feature or component and follows the POM approach.

2. cypress/support: Contains utility files and configurations to support the test execution. The `variables.js` file within this folder stores and exports variables used across the tests, allowing for easy management and centralization of test data.

3. cypress/fixtures: Stores hard-coded data files used in the tests. This folder is useful for storing static test data, such as sample inputs or expected outputs, to be used during test execution.

4. cypress/POM: Contains the Page Object Model (POM) files. Each POM file represents a specific page or component in the application under test and contains reusable methods and locators to interact with that page.

## Getting Started

### To get started with running the tests, follow these steps:

1. Clone the repository: git clone `https://github.com/Nishant324/qa-cypress-coding-challenge`

2. Install dependencies: npm install

3. Customize the variables: Open the `cypress/support/variables.js` file and update the variables    according to your test environment or specific test scenarios.

4. Add test data (optional): If you need to use hard-coded data during your tests, place the required files in the `cypress/fixtures` folder.

--Run the tests: Execute the Cypress tests using the command npm run cy:run for headless mode or npm run cy:open for interactive mode.

## Writing Tests

### To add new tests or modify existing ones, follow these guidelines:

1. Create a new test file: Add a new JavaScript file under `cypress/integration` that represents the feature or component you are testing.

2. Create a new POM file: In the `cypress/POM` folder, create a new JavaScript file that corresponds to the page or component being tested. Implement reusable methods and locators within this file to interact with the page.

3. Implement test logic: In the test file, import the relevant POM file(s) from the `cypress/POM` folder and utilize the methods and locators to interact with the page elements. Use Cypress commands and assertions to perform test actions and verifications.

4. Use variables and fixtures: Access the variables defined in `cypress/support/variables.js` for dynamic test data. If needed, leverage hard-coded data stored in the `cypress/fixtures` folder.

5. Run the tests: Execute the tests using the provided commands (npm run cy:run or npm run cy:open) and observe the test results.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request. Make sure to follow the existing coding style and test conventions.
