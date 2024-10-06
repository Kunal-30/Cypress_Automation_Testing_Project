// A class for Register Page    
class RegisterPage{

    // Enter URL function for visiting the Tutorials Ninja Website
    EnterURL(){

        // Visiting the Tutorials Ninja Website 
        cy.visit('https://tutorialsninja.com/demo/');
    }

    // Register Link in my account function
    RegisterLink_in_my_account(){

        // Clicking on Register Link locator
        cy.get('.caret').click();

        // Clicking on Register Link
        cy.xpath('//a[@href="https://tutorialsninja.com/demo/index.php?route=account/register"]').click();
    }

    // Clicking on Continue function
    Clicking_on_Continue(){

        // Clicking on Continue
        cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=account/account"])[4]').click();
    }


    // Positive Test Case by writing correct credentials 
    PT_RegisterPage1(){

        // Locators and its value for Positive Test case
        cy.get('[placeholder="First Name"]').type('Kunal');
        cy.get('[placeholder="Last Name"]').type('Tagde');
        cy.get('[placeholder="E-Mail"]').type('ngkfkdmbbbjhbjjdgnndskfkgggkd@gmail.com');
        cy.get('[placeholder="Telephone"]').type('7378351383');
        cy.get('[placeholder="Password"]').type('kunal123');
        cy.get('[placeholder="Password Confirm"]').type('kunal123');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.get('input[type="submit"]').click();
    }

    // Negative Test Case by writing wrong password and confirm password
    NT_RegisterPage2(){

        // Locators and its value for Negative Test case
        cy.get('[placeholder="First Name"]').type('Kunal');
        cy.get('[placeholder="Last Name"]').type('Tagde');
        cy.get('[placeholder="E-Mail"]').type('ysfhknxkvsfbkfbf@gmail.com');
        cy.get('[placeholder="Telephone"]').type('7378351383');
        cy.get('[placeholder="Password"]').type('kunal123');
        cy.get('[placeholder="Password Confirm"]').type('kunal1234');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.get('input[type="submit"]').click();
        cy.xpath('//div[@class="text-danger"]').should('be.visible').should('have.text','Password confirmation does not match password!');
        cy.screenshot();
    }

    // Negative Test Case by giving blank space in First_Name
    NT_RegisterPage3(){

        // Locators and its value for Negative Test case
        cy.get('[placeholder="First Name"]').type('{selectall}{backspace} ');
        cy.get('[placeholder="Last Name"]').type('Tagde');
        cy.get('[placeholder="E-Mail"]').type('ysfhknxkvsfbkfbf@gmail.com');
        cy.get('[placeholder="Telephone"]').type('7378351383');
        cy.get('[placeholder="Password"]').type('kunal123');
        cy.get('[placeholder="Password Confirm"]').type('kunal123');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.get('input[type="submit"]').click();
        cy.xpath('//div[@class="text-danger"]').should('be.visible').should('have.text','First Name must be between 1 and 32 characters!');
        cy.screenshot();
    }

    // Negative Test Case by giving blank space in Last_Name
    NT_RegisterPage4(){

        // Locators and its value for Negative Test case
        cy.get('[placeholder="First Name"]').type('Kunal');
        cy.get('[placeholder="Last Name"]').type('{selectall}{backspace} ');
        cy.get('[placeholder="E-Mail"]').type('ysfhksfbnddfnkfbf@gmail.com');
        cy.get('[placeholder="Telephone"]').type('7378351383');
        cy.get('[placeholder="Password"]').type('kunal123');
        cy.get('[placeholder="Password Confirm"]').type('kunal123');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.get('input[type="submit"]').click();
        cy.xpath('//div[@class="text-danger"]').should('be.visible').should('have.text','Last Name must be between 1 and 32 characters!');
        cy.screenshot();
    }

    // Negative Test Case by giving blank space in E-Mail
    NT_RegisterPage5(){

        // Locators and its value for Negative Test case
        cy.get('[placeholder="First Name"]').type('Kunal');
        cy.get('[placeholder="Last Name"]').type('Tagde');
        cy.get('[placeholder="E-Mail"]').type('{selectall}{backspace}    ');
        cy.get('[placeholder="Telephone"]').type('7378351383');
        cy.get('[placeholder="Password"]').type('kunal123');
        cy.get('[placeholder="Password Confirm"]').type('kunal123');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.get('input[type="submit"]').click();
        cy.xpath('//div[@class="text-danger"]').should('be.visible').should('have.text','E-Mail Address does not appear to be valid!');
        cy.screenshot();
    }

    // Negative Test Case by giving blank space in Password
    NT_RegisterPage6(){

        // Locators and its value for Negative Test case
        cy.get('[placeholder="First Name"]').type('Kunal');
        cy.get('[placeholder="Last Name"]').type('Tagde');
        cy.get('[placeholder="E-Mail"]').type('ysfhknxkvsfbkfbf@gmail.com');
        cy.get('[placeholder="Telephone"]').type('7378351383');
        cy.get('[placeholder="Password"]').type('{selectall}{backspace}      ');
        cy.get('[placeholder="Password Confirm"]').type('kunal123');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.get('input[type="submit"]').click();
        cy.xpath('//div[@class="text-danger"]').should('be.visible').should('have.text','Password confirmation does not match password!');

    }

    // Negative Test Case by giving blank space in Password Confirm
    NT_RegisterPage7(){

        // Locators and its value for Negative Test case
        cy.get('[placeholder="First Name"]').type('Kunal');
        cy.get('[placeholder="Last Name"]').type('Tagde');
        cy.get('[placeholder="E-Mail"]').type('ysfhknxkvsfbkfbhjsdfjgsgfhkgfsgff@gmail.com');
        cy.get('[placeholder="Telephone"]').type('7378351383');
        cy.get('[placeholder="Password"]').type('kunal123');
        cy.get('[placeholder="Password Confirm"]').type('{selectall}{backspace}     ');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.get('input[type="submit"]').click();
        cy.xpath('//div[@class="text-danger"]').should('be.visible').should('have.text','Password confirmation does not match password!');

    }

    // Negative Test Case by not checking Privacy Policy
    NT_RegisterPage8(){

        // Locators and its value for Negative Test case
        cy.get('[placeholder="First Name"]').type('Kunal');
        cy.get('[placeholder="Last Name"]').type('Tagde');
        cy.get('[placeholder="E-Mail"]').type('ysfhknxkvsfbkfbf@gmail.com');
        cy.get('[placeholder="Telephone"]').type('7378351383');
        cy.get('[placeholder="Password"]').type('kunal123');
        cy.get('[placeholder="Password Confirm"]').type('kunal123');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').uncheck();
        cy.get('input[type="submit"]').click();
        cy.get('[class="alert alert-danger alert-dismissible"]').should('be.visible').should('have.text','Warning: You must agree to the Privacy Policy!');
    }

    // Negative Test Case by not checking T&C
    NT_RegisterPage9(){

        // Locators and its value for Negative Test case
        cy.get('[placeholder="First Name"]').type('Kunal');
        cy.get('[placeholder="Last Name"]').type('Tagde');
        cy.get('[placeholder="E-Mail"]').type('ysfhknxkvsfbvhcgkfbf@gmail.com');
        cy.get('[placeholder="Telephone"]').type('7378351383');
        cy.get('[placeholder="Password"]').type('kunal123');
        cy.get('[placeholder="Password Confirm"]').type('kunal123');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').uncheck();
        cy.get('input[type="submit"]').click();

        // cy.xpath('//div[@class="text-danger"]').should('be.visible').should('have.text','E-Mail Address does not appear to be valid!');
        cy.get('[class="alert alert-danger alert-dismissible"]').should('be.visible').should('have.text','Warning: You must agree to the Privacy Policy!');
    }
    
    // Negative Test Case by giving blank space in First_Name, Last_Name, E-Mail, Telephone, Password, Password Confirm, and unchecking T&C
    NT_RegisterPage10(){

        // Locators and its value for Negative Test case
        cy.get('[placeholder="First Name"]').type('{selectall}{backspace} ');
        cy.get('[placeholder="Last Name"]').type('{selectall}{backspace} ');
        cy.get('[placeholder="E-Mail"]').type('{selectall}{backspace} ');
        cy.get('[placeholder="Telephone"]').type('{selectall}{backspace}     ');
        cy.get('[placeholder="Password"]').type('{selectall}{backspace} ');
        cy.get('[placeholder="Password Confirm"]').type('{selectall}{backspace}     ');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').uncheck();
        cy.get('input[type="submit"]').click();

        // Assertion that the error messages are visible and correct
        cy.xpath('(//div[@class="text-danger"])[1]').should('be.visible').should('have.text','First Name must be between 1 and 32 characters!');
        cy.xpath('(//div[@class="text-danger"])[2]').should('be.visible').should('have.text','Last Name must be between 1 and 32 characters!');
        cy.xpath('(//div[@class="text-danger"])[3]').should('be.visible').should('have.text','E-Mail Address does not appear to be valid!');
        cy.xpath('(//div[@class="text-danger"])[4]').should('be.visible').should('have.text','Password must be between 4 and 20 characters!');
        cy.xpath('(//div[@class="text-danger"])[5]').should('be.visible').should('have.text','Password confirmation does not match password!');
        cy.get('[class="alert alert-danger alert-dismissible"]').should('be.visible').should('have.text','Warning: You must agree to the Privacy Policy!');
    }


}

// Exporting the class
export default RegisterPage