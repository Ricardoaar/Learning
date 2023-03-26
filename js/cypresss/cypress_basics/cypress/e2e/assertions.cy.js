describe("Assertions", function() {
  beforeEach(() => {
    cy.visit("/automation-practice-form");
  });


  it("Should assert url", () => {
    cy.url().should("include", "automation-practice-form");
  });

  it.only("First Name input should be visible", () => {
    cy.get("input[placeholder='First Name']").then(element => {
      cy.wrap(element).should("be.visible");
      cy.wrap(element).should("have.attr", "placeholder", "First Name");
      cy.log("I'm debugging this message");
    });
  });
});
