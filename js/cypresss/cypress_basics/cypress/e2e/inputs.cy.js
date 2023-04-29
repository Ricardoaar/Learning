describe("Inputs", function () {
    beforeEach(() => {
        cy.visit("/automation-practice-form");
    });

    it("Should type text into inputs", () => {
        cy.get("input[placeholder='First Name']").type("Test");
        cy.get("input[placeholder='Last Name']").type("Test");
        cy.get("input[placeholder='First Name']").should("have.value", "Test");
        cy.get("input[placeholder='First Name']").type("{selectAll}New text cleaned");
    });
});

describe("Radio & Check", function () {
    beforeEach(() => {
        cy.visit("/automation-practice-form");
    });

    it("Should check radio buttons", () => {
        cy.contains("label", /^Male$/).click();
        cy.wait(1000);
        cy.get("label[for='gender-radio-2']").click();
    });

    it("Using checkboxes", () => {
        cy.get("#hobbiesWrapper").within((container) => {
            cy.wrap(container).contains("label", /^Sports$/).click();
        });
    });

});

describe("Get info", function () {
    beforeEach(() => {
        cy.visit("/automation-practice-form");
    });

    it("Should get info from inputs", function () {
        // Aliases
        cy.get("input[placeholder='First Name']").as("supertest").type("Cats");


        cy.get("@supertest").then(el => {
            expect(el.val()).to.equal("Cats");
        });

        cy.get("@supertest").invoke("val").should("equal", "Cats");
        cy.get("@supertest").invoke("val").as("globalName");
    });

    it("Should use global name", function () {
        cy.get("#lastName").as("lastName");
        cy.get("@lastName").type(this.globalName);
    });


});


describe.only("Select", function () {

    it("Should select from dropdown", () => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation");
        cy.get(".custom-select").select("Greece").should("have.value", "4");
    });

    it.only("React select", () => {
        cy.visit("https://react-select.com/home");
        cy.get("#react-select-6-input").type(" ");
        cy.get("#react-select-6-listbox").as("options");
        cy.get("@options").within((element) => {
            cy.wrap(element).contains("Forest").click();
        });
    });


});
