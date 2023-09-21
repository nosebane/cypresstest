import { FormLocators } from "../locators/form.locator"

export class FormPage {
    formLocator = new FormLocators();

    visit() {
      cy.visit("/");
    }
   
    validateTitleForm(text:String) {
      return cy.get(this.formLocator.titlePage)
      .should("be.visible")
      .and("contain", text);
    }
}