# Playwright Automation

## Project Overview
This project automates browser testing using Playwright, an open-source tool built for web automation.

## Features
- Cross-browser support (Chromium, Firefox, and WebKit)
- Auto-wait for elements to be ready before performing actions
- Supports mobile views and testing in headless mode

## Dependencies
- Node.js (>= 14.0.0)
- Playwright (latest version)
- Jest (for testing)

## Structure
```
PlaywrightAutomation/
├── tests/
│   ├── feature1.test.js
│   └── feature2.test.js
├── pages/
│   ├── page1.js
│   └── page2.js
├── package.json
└── README.md
```

## Test Categories
- **Unit Tests**: Tests for individual functions/components.
- **Integration Tests**: Tests that verify the interaction between different components.
- **End-to-End Tests**: Full application tests that simulate user scenarios.

## Setup Instructions
1. Clone the repository:  `git clone https://github.com/rajendarsagar/PlaywrightAutomation.git`
2. Navigate into the directory: `cd PlaywrightAutomation`
3. Install dependencies: `npm install`

## How to Run Tests
- To run all tests, use the command: `npm test`
- For a specific test file, use: `npx jest tests/feature1.test.js`

## Author
Rajendar Sagar
## License
This project is licensed under the MIT License.