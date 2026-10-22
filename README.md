# SauceDemo QA Assessment

## Project Overview
This repository contains a Playwright automation test for the SauceDemo web application, created as part of a Software QA Engineer assessment.

## Technology Stack
- Playwright Test
- TypeScript
- Node.js
- Chromium

## Automated Test
The `checkout.spec.ts` test covers the end-to-end purchase journey, including login, product selection, cart verification, checkout, and order completion.

## Prerequisites
- Node.js installed
- npm available

## Setup
Clone the repository and open the project directory:

```bash
git clone https://github.com/BodukalaAravind/saucedemo-qa-assessment.git
cd saucedemo-qa-assessment
npm install
npx playwright install chromium
```

## Run the Test

```bash
npx playwright test
```

To open the HTML report after execution:

```bash
npx playwright show-report
```

## Test Evidence
Screenshots and exploratory testing evidence will be documented in the assessment submission.

## AI Assistance
AI tools were used to help brainstorm test scenarios, structure exploratory observations, and improve test documentation. The automation code was reviewed and executed by the tester. Any AI-generated suggestions were subject to manual validation.

## Limitations
The automated test covers one purchase journey. Additional negative, boundary, accessibility, API, and cross-browser tests would be useful for broader coverage.
