import { defineConfig } from 'cypress'

export default defineConfig({
  port: 2999,
  downloadsFolder: '__test__/cypress/downloads',
  fixturesFolder: '__test__/cypress/fixtures',
  screenshotsFolder: '__test__/cypress/screenshots',
  videosFolder: '__test__/cypress/videos',
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: '__test__/cypress/e2e/**/*.cy.ts',
    supportFile: '__test__/cypress/support/e2e.ts',
  },
})
