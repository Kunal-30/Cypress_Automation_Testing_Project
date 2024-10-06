// A class for Login Page
class LoginPage{

    // Login Link in my account function
    Login_in_my_account(){

        // Clicking on Login Link locator
        cy.get('.caret').click();

        // Clicking on Login Link
        cy.xpath('//a[@href="https://tutorialsninja.com/demo/index.php?route=account/login"]').click();
    }

    // Positive Test case by writing correct credentials
    PT_Login_Credentials_accept(){

        // Locators and its value for Positive Test case
        cy.get('[placeholder="E-Mail Address"]').type('tagdekunal2000@gmail.com');
        cy.get('[placeholder="Password"]').type('Lazy123');
        cy.get('input[type="submit"]').click();
    }

    // Negative Test case by giving wrong credentials off email
    NT_Login_Credentials1(){

        // Locators and its value for Negative Test case
        cy.get('[placeholder="E-Mail Address"]').type('kunal');
        cy.get('[placeholder="Password"]').type('Lazy123');
        cy.get('input[type="submit"]').click();

        cy.xpath('//div[@class="alert alert-danger alert-dismissible"]').should('be.visible').should('have.text','Warning: No match for E-Mail Address and/or Password.');
    }

    // Negative Test case by giving wrong credentials off password
    NT_Login_Credentials2(){

        // Locators and its value for Negative Test case
        cy.get('[placeholder="E-Mail Address"]').type('kunal@gmail.com');
        cy.get('[placeholder="Password"]').type('Lazy123');
        cy.get('input[type="submit"]').click();

        cy.xpath('//div[@class="alert alert-danger alert-dismissible"]').should('be.visible').should('have.text','Warning: No match for E-Mail Address and/or Password.');
    }

    // Negative Test case by giving wrong credentials off email and password
    NT_Login_Credentials3(){

        // Locators and its value for Negative Test case
        cy.get('[placeholder="E-Mail Address"]').type('tagdekunal2000@gmail.com');
        cy.get('[placeholder="Password"]').type('Lazy125134');
        cy.get('input[type="submit"]').click();

        cy.xpath('//div[@class="alert alert-danger alert-dismissible"]').should('be.visible').should('have.text','Warning: No match for E-Mail Address and/or Password.');
    } 
    
    // Negative Test case by giving password blank
    NT_Login_Credentials4(){

        // Locators and its value for Negative Test case
        cy.get('[placeholder="E-Mail Address"]').type('tagdekunal200@gmail.com');
        cy.get('[placeholder="Password"]').type('{selectall}{backspace} ');
        cy.get('input[type="submit"]').click();
        cy.xpath('//div[@class="alert alert-danger alert-dismissible"]').should('be.visible').should('have.text','Warning: No match for E-Mail Address and/or Password.');
    }

    // Negative Test case by giving email blank
    NT_Login_Credentials5(){

        // Locators and its value for Negative Test case
        cy.get('[placeholder="E-Mail Address"]').type('{selectall}{backspace} ');
        cy.get('[placeholder="Password"]').type('Lazy123');
        cy.get('input[type="submit"]').click();
        cy.xpath('//div[@class="alert alert-danger alert-dismissible"]').should('be.visible').should('have.text','Warning: No match for E-Mail Address and/or Password.');
    }
}

export default LoginPage