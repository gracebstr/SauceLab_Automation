describe('Login and add SauceLab Backpack to cart', () => {
  it('Login and add SauceLab Backpack to Cart', () => {
    //Login to SauceLab with standard user
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').click().type('standard_user');
    cy.get('#password').click().type('secret_sauce');
    cy.get('#login-button').click();

    //click backpack
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    //click cart icon
    cy.get('[data-test="shopping-cart-link"]').click();

    //verify saucelab backpack in cart with name,description and price
    cy.get('[data-test="inventory-item-name"]').should('have.text','Sauce Labs Backpack');
    cy.get('[data-test="inventory-item-desc"]')
      .should('have.text','carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
    cy.get('[data-test="inventory-item-price"]').should('have.text','$29.99');

  })
})