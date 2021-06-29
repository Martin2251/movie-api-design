/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("https://localhost:3000");
  });

  // https://on.cypress.io/interacting-with-elements

  it(".type() - type into a DOM element", () => {
    // https://on.cypress.io/type
    cy.get("[data-cy=more-info]").click();
  });
});
