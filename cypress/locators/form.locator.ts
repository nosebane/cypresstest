export class FormLocators {

    get titlePage()
   {
       return cy.get('.main-header');
   }

   get firstNameField()
   {
       return cy.get('#firstName');
   }

   get lastNameField()
   {
       return cy.get('#lastName');
   } 

   get userEmailField()
   {
       return cy.get('#userEmail');
   } 

   get userNumberField()
   {
       return cy.get('#userNumber');
   } 

   get dateBirthField()
   {
       return cy.get('#dateOfBirthInput');
   } 
}