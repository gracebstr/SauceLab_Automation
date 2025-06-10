describe('Login and add SauceLab Fleece Jacket to cart', () => {
    it('Login and add SauceLab Fleece Jacket to Cart', () => {
      //Login to SauceLab with standard user
      cy.visit('https://www.saucedemo.com/');
      cy.get('#user-name').click().type('standard_user');
      cy.get('#password').click().type('secret_sauce');
      cy.get('#login-button').click();
  
      //click Fleece Jacket
      cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  
      //click cart icon
      cy.get('[data-test="shopping-cart-link"]').click();
  
      //verify saucelab Fleece Jacket in cart with name,description and price
      cy.get('[data-test="inventory-item-name"]').should('have.text','Sauce Labs Fleece Jacket');
      cy.get('[data-test="inventory-item-desc"]')
        .should('have.text',"It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.");
      cy.get('[data-test="inventory-item-price"]').should('have.text','$49.99');
  
    })
  })