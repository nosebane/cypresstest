import { FormLocators } from "../locators/form.locator"

const formLocator = new FormLocators();

export class FormPage {

    visit() {
      cy.visit("/");
    }
   
    validateTitleForm(text: string) {
      formLocator.titlePage.should("be.visible")
      .and("contain", text);
    }

    inputText(locator:Cypress.Chainable<JQuery<HTMLElement>>, text: string) {
      locator.clear().type(text);
    }

    fillDate(date: string) {
      formLocator.dateBirthField.type(date);
    }

    chooseGender(gender: string) {
      const genderLower = gender.toLowerCase();
      const genderMapping = {
          "male": 1,
          "female": 2,
      };
      const x = genderMapping[genderLower] || 3;
      cy.get("#gender-radio-" + x).click({force: true});
    }

    chooseHobby(hobbies: string[]) {
      const hobbyMapping = {
          "sports": 1,
          "reading": 2,
          "music": 3,
      };
  
      hobbies.forEach((hobby) => {
          const hobbyLower = hobby.toLowerCase();
          const x = hobbyMapping[hobbyLower];
          if (x) {
              cy.get("#hobbies-checkbox-" + x).click({ force: true });
          }
      });
    }
}