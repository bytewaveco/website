// Load type definitions that come with Cypress module
// eslint-disable-next-line spaced-comment
/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      // eslint-disable-next-line no-unused-vars
      dataCy(value: string): Chainable<Element>
    }
  }
}
