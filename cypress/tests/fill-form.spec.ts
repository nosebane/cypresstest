import { FormPage } from "../pages/form.page"; 
import { FormLocators } from "../locators/form.locator"

const formPage = new FormPage();
const formLocator = new FormLocators()

describe("User can open web form", function () {  
    beforeEach(function () {
        formPage.visit();
      });

    it("show form", function () {
        formPage.validateTitleForm("Practice Form");
    });

    it("form can be filled", function () {
        formPage.inputText(formLocator.firstNameField, "jonah");
        formPage.inputText(formLocator.lastNameField, "iskandar");
        formPage.inputText(formLocator.userEmailField, "email@test.com");
        formPage.chooseGender("Female");
        formPage.inputText(formLocator.userNumberField, "081234567");
        formPage.fillDate("10 Sep 2023");
        formPage.chooseHobby(["Reading" ,"Sports", "Music"]);
    });
  });
  