🚀 Modern QA Automation Pipeline
https://img.shields.io/badge/Playwright-2EAD33?style=flat&logo=playwright&logoColor=white
https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white
https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white
https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white

A modern test automation framework built with Playwright, TypeScript, and quality engineering best practices. Designed as a technical portfolio and foundation for real-world implementations.

🎯 Features
✅ Page Object Model with TypeScript for maintainable code

✅ UI Testing on Sauce Demo (login, navigation)

✅ GitHub Actions Integration (CI/CD)

✅ Professional scalable structure

✅ Visual reporting with automatic screenshots

📁 Project Structure
text
modern-qa-pipeline/
├── tests/
│   ├── ui/
│   │   ├── pages/          # Page Objects (LoginPage, etc.)
│   │   └── tests/          # Test suites (.spec.ts)
│   └── api/               # (Coming soon) API Tests
├── .github/workflows/     # CI/CD Pipelines
├── docker/               # Container configuration
└── package.json          # Dependencies and scripts
🧪 Implemented Tests
Test	Description	Status
sauce-login.spec.ts	Successful login on Sauce Demo	✅ Functional
login-pom.spec.ts	Login using Page Object Model	✅ Functional
🚀 How to Run Locally
bash
# 1. Clone the repository
git clone https://github.com/maximilianoz/modern-qa-pipeline.git
cd modern-qa-pipeline

# 2. Install dependencies
npm install

# 3. Run all tests
npx playwright test

# 4. Run in UI mode (debugging)
npx playwright test --ui

# 5. Generate HTML report
npx playwright show-report
📊 CI/CD with GitHub Actions
The project includes a basic pipeline that:

✅ Runs tests on every push

✅ Generates automatic reports

✅ Validates TypeScript code

See workflow: .github/workflows/ci.yml

🛠️ Tech Stack
Testing Framework: Playwright 1.40+

Language: TypeScript 5.3+

Package Manager: npm 10+

CI/CD: GitHub Actions

Version Control: Git + GitHub

📈 Next Improvements
Dockerize tests

REST API Testing

Integration with Allure Reports

Performance testing with k6

Basic security testing

👨‍💻 Author
Maximiliano - QA Automation Engineer

GitHub: @maximilianoz

Active project in development

⭐ If you find this project useful, give it a star on GitHub!

