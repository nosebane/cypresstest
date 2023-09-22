import { FormPage } from "../pages/form.page"; 

const formPage = new FormPage();

describe("User can open web form", function () {  
    it("show form", function () {
        formPage.visit();
        formPage.validateTitleForm("Practice Form");
    });
  });