describe("Tables", function() {
  beforeEach(() => {
    cy.visit("https://www.w3schools.com/html/html_tables.asp");
  });

  it("Should get table", function() {
    cy.get("#customers").as("globalTable");
  });

  it("Should show 7 rows", function() {
    cy.get("#customers").as("table");
    cy.get("@table").find("tr").should("have.length", 7);
  });

  it("Should show 3 headers", function() {
    cy.get("#customers").as("table");
    cy.get("@table").find("th").should("have.length", 3).as("headers");
    const names = ["Company", "Contact", "Country"];
    cy.get("@headers").each((el, index) => {
      expect(el.text()).to.equal(names[index]);
    });

  });
  it("Should have first element of third row", function() {
    cy.get("#customers").as("table");
    cy.get("@table").find("tr").eq(3).find("td").eq(0).should("have.text", "Ernst Handel");
  });

});