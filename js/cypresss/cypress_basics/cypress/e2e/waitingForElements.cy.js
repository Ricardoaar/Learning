describe("Waiting for elements", function() {
  beforeEach(() => {
    cy.visit("/automation-practice-form");
  });

  it.only("Should wait for element to be visible", () => {
    cy.wait(3000);
  });
});