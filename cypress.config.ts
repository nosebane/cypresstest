import { defineConfig } from "cypress";

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    specPattern: "cypress/tests/**/*.{spec,page,locator}.{js,jsx,ts,tsx}",
    pageLoadTimeout: 120000,
    baseUrl: "https://demoqa.com/automation-practice-form",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
