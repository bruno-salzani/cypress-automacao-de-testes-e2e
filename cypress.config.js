const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // viewportWidth: 1920,
  // viewportHeight: 1080,
  reporter: "mochawesome",
  reporterOptions: {
  reportDir: "cypress/report/mochawesome-report",
  overwrite: true,
  html: true,
  json: false,
  timestamp: "mmddyyyy_HHMMss"},
  projectId: 'yt3n6j',
  baseUrl: "https://alura-fotos.herokuapp.com",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
