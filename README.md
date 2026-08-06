# Automation Exercise - Playwright TypeScript Framework

An end-to-end (E2E) UI and API automation testing framework built with **Playwright** and **TypeScript** for the Automation Exercise web application.

##  Tech Stack

- **Language:** TypeScript
- **Framework:** Playwright
- **Test Runner:** Playwright Test
- **Design Pattern:** Page Object Model (POM)
- **API Acceleration:** Dynamic test setup via API for faster execution
- **Dynamic Test Data:** Custom data generator for reliable test isolation

---

##  Test Coverage

### Authentication
- User registration via UI
- API-backed instant authentication
- Negative login scenarios

### Products
- Product search
- Negative search scenarios
- Category filtering
- Product details verification

### Checkout
- Complete end-to-end purchase flow
- Payment verification

### Extended Features
- Dynamic cart quantity updates
- Cart item deletion
- File upload with native file dialog handling
- Newsletter subscription

---

##  Installation

Install project dependencies:

```bash
npm install
```

---

##  Running Tests

### Run all tests (Headless)

```bash
npx playwright test
```

### Run all tests (Headed)

```bash
npx playwright test --headed
```

---

##  View HTML Report

```bash
npx playwright show-report
```

---

##  Project Structure

```text
.
├── src
│   ├── pages/          # Page Object Model classes
│   └── utils/          # API helpers and data generators
├── tests/             # Test suites
├── playwright.config.ts
├── package.json
└── README.md
```

---

##  Framework Highlights

- Clean Page Object Model architecture
- Fast execution through API-assisted setup
- Isolated and reusable test data generation
- UI and API testing in a single framework
- Easily scalable for additional test suites
- HTML reporting with Playwright

---

##  Built With

- Playwright
- TypeScript
- Playwright Test

