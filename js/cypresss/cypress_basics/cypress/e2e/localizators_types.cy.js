describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/automation-practice-form");
  });


  it("Should get by tag", () => {
    cy.get("input[placeholder='First Name']");
    cy.contains(".header-wrapper", "Elements").click();
    cy.get("input[placeholder='First Name']").parents().find("label");
  });

  it.only("Should get all labels form form", () => {
    cy.get("input[placeholder='First Name']").parents("form").then((form) => {
      const labels = form.find("label");
      cy.wrap(labels).should("have.length", 16);
      labels.each((index, label) => {
        console.log(label.innerText);
        expect(label.innerText).to.be.not.empty;
      });

      cy.wrap(labels).should("have.length", 16);
    });


  });


});