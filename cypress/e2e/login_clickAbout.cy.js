describe('Login, click About menu and Verify successfully navigated or not', () => {
    it('Login, click About menu and Verify successfully navigated or not', () => {
      //Login to SauceLab with standard user
      cy.visit('https://www.saucedemo.com/');
      cy.get('#user-name').click().type('standard_user');
      cy.get('#password').click().type('secret_sauce');
      cy.get('#login-button').click();
  
      //click hamburger top icon
      cy.get('#react-burger-menu-btn').click();
  
      //click About menu
      cy.get('[data-test="about-sidebar-link"]').click({force:true});
      //verify About navigation page
      cy.location('pathname').should('open', 'https://saucelabs.com/');
  
      
      
    })
  })