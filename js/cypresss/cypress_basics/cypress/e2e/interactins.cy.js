describe("/Buttons", function() {
  beforeEach(() => {
    cy.visit("/buttons");
  });

  it("Should click on db button and show text", () => {
    cy.contains("button", "Double Click Me").should("be.visible").dblclick();
    cy.contains("You have done a double click", { timeout: 2000 });

  });


  it("Should click on right click button and show text", () => {
    cy.contains("button", "Right Click Me").should("be.visible").rightclick();
    cy.contains("You have done a right click", { timeout: 2000 });
  });

  it("Should click on click me button and show text", () => {
    cy.contains("button", /^click me$/i).should("be.visible").click();
    cy.contains("You have done a dynamic click", { timeout: 2000 });
  });


});

describe.only("Dynamic buttons", function() {
  beforeEach(() => {
    cy.visit("/dynamic-properties");
  });

  it("Should show button with text \"Button 1\"", () => {
    cy.contains("button", "Will enable 5 seconds", { timeout: 5500 })
      .should("be.visible")
      .should("be.enabled");

    cy.contains("button", "Visible After 5 Seconds", { timeout: 5500 });
  });

  it("Should click on top right of the button", () => {
    cy.contains("button", "Will enable 5 seconds").parent().parent().click("topRight");
  });
});
