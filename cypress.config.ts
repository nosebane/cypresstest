import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "cypress/tests/**/*.{spec,page,locator}.{js,jsx,ts,tsx}",
    pageLoadTimeout: 120000,
    baseUrl: "https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
