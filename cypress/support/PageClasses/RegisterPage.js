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
        cy.get('[placeholder="E-Mail"]').type('ngkfkdmbbbjhbjjdgnsljndxcjvjgjskfkgggkd@gmail.com');
        cy.get('[placeholder="Telephone"]').type('7378351383');
        cy.get('[placeholder="Password"]').type('kunal123');
        cy.get('[placeholder="Password Confirm"]').type('kunal123');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.wait(2000);
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
        cy.wait(2000);
        cy.get('input[type="submit"]').click();
        cy.xpath('//div[@class="text-danger"]').should('be.visible').should('have.text','Password confirmation does not match password!');
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
        cy.wait(2000);
        cy.get('input[type="submit"]').click();
        cy.xpath('//div[@class="text-danger"]').should('be.visible').should('have.text','First Name must be between 1 and 32 characters!');
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
        cy.wait(2000);
        cy.get('input[type="submit"]').click();
        cy.xpath('//div[@class="text-danger"]').should('be.visible').should('have.text','Last Name must be between 1 and 32 characters!');
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
        cy.wait(2000);
        cy.get('input[type="submit"]').click();
        cy.xpath('//div[@class="text-danger"]').should('be.visible').should('have.text','E-Mail Address does not appear to be valid!');
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
        cy.wait(2000);
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
        cy.wait(2000);
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
        cy.wait(2000);
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
        cy.wait(2000);
        cy.get('input[type="submit"]').click();
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
        cy.wait(2000);
        cy.get('input[type="submit"]').click();

        // Assertion that the error messages are visible and correct
        cy.xpath('(//div[@class="text-danger"])[1]').should('be.visible').should('have.text','First Name must be between 1 and 32 characters!');
        cy.xpath('(//div[@class="text-danger"])[2]').should('be.visible').should('have.text','Last Name must be between 1 and 32 characters!');
        cy.xpath('(//div[@class="text-danger"])[3]').should('be.visible').should('have.text','E-Mail Address does not appear to be valid!');
        cy.xpath('(//div[@class="text-danger"])[4]').should('be.visible').should('have.text','Password must be between 4 and 20 characters!');
        cy.xpath('(//div[@class="text-danger"])[5]').should('be.visible').should('have.text','Password confirmation does not match password!');
        cy.get('[class="alert alert-danger alert-dismissible"]').should('be.visible').should('have.text','Warning: You must agree to the Privacy Policy!');
    }

    // Negative Test Case by gputting symbols in First_Name
    NT_RegisterPage11(){

        // Locators and its value for Negative Test case for checking value entered for First_Name rather than characters
        cy.get('[placeholder="First Name"]').type('**jsnd@@&#%@&@');
        cy.get('[placeholder="Last Name"]').type('Tagde');
        cy.get('[placeholder="E-Mail"]').type('blankkspace11111@gmail.com');
        cy.get('[placeholder="Telephone"]').type('7378351383');
        cy.get('[placeholder="Password"]').type('1234');
        cy.get('[placeholder="Password Confirm"]').type('1234');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.get('input[type="submit"]').click();
        cy.wait(2000);
        cy.screenshot();

    }

    // Negative Test Case by putting numbers in First_Name
    NT_RegisterPage12(){

        // Locators and its value for Negative Test case for checking value entered for First_Name rather than characters
        cy.get('[placeholder="First Name"]').type('123455');
        cy.get('[placeholder="Last Name"]').type('Tagde');
        cy.get('[placeholder="E-Mail"]').type('blankkspace21@gmail.com');
        cy.get('[placeholder="Telephone"]').type('7378351383');
        cy.get('[placeholder="Password"]').type('1234');
        cy.get('[placeholder="Password Confirm"]').type('1234');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.get('input[type="submit"]').click();
        cy.wait(2000);
        cy.screenshot();

    }

    // Negative Test Case by gputting symbols in Last_Name
    NT_RegisterPage13(){

        // Locators and its value for Negative Test case for checking value entered for Last_Name rather than characters
        cy.get('[placeholder="First Name"]').type('Kunal');
        cy.get('[placeholder="Last Name"]').type('($*&(&W$*^))');
        cy.get('[placeholder="E-Mail"]').type('blankkspace31@gmail.com');
        cy.get('[placeholder="Telephone"]').type('7378351383');
        cy.get('[placeholder="Password"]').type('1234');
        cy.get('[placeholder="Password Confirm"]').type('1234');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.get('input[type="submit"]').click();
        cy.wait(2000);
        cy.screenshot();

    }

    // Negative Test Case by putting numbers in Last_Name
    NT_RegisterPage14(){

        // Locators and its value for Negative Test case for checking value entered for Last_Name rather than characters
        cy.get('[placeholder="First Name"]').type('Kunal');
        cy.get('[placeholder="Last Name"]').type('234565');
        cy.get('[placeholder="E-Mail"]').type('blankkspace41@gmail.com');
        cy.get('[placeholder="Telephone"]').type('7378351383');
        cy.get('[placeholder="Password"]').type('1234');
        cy.get('[placeholder="Password Confirm"]').type('1234');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.wait(2000);
        cy.get('input[type="submit"]').click();
        cy.screenshot();

    }

    // Negative Test Case by putting special characters in Email
    NT_RegisterPage15(){

        // Locators and its value for Negative Test case for checking value entered for Email by using special characters
        cy.get('[placeholder="First Name"]').type('Kunal');
        cy.get('[placeholder="Last Name"]').type('Tagde');
        cy.get('[placeholder="E-Mail"]').type('*$^**&%%#@gmail.com');
        cy.get('[placeholder="Telephone"]').type('7378351383');
        cy.get('[placeholder="Password"]').type('1234');
        cy.get('[placeholder="Password Confirm"]').type('1234');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.wait(2000);
        cy.get('input[type="submit"]').click();
        cy.xpath('//div[@class="text-danger"]').should('be.visible').should('have.text','E-Mail Address does not appear to be valid!');

    }

    // Negative Test Case by putting numbers in Email
    NT_RegisterPage16(){

        // Locators and its value for Negative Test case for checking value entered for Email by using numbers
        cy.get('[placeholder="First Name"]').type('Kunal');
        cy.get('[placeholder="Last Name"]').type('Tagde');
        cy.get('[placeholder="E-Mail"]').type('15457987644666646@gmail.com');
        cy.get('[placeholder="Telephone"]').type('7378351383');
        cy.get('[placeholder="Password"]').type('1234');
        cy.get('[placeholder="Password Confirm"]').type('1234');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.wait(2000);
        cy.get('input[type="submit"]').click();
        cy.screenshot
    }

    // Negative Test Case by putting symbols and characters mixed in Email
    NT_RegisterPage17(){

        // Locators and its value for Negative Test case for checking value entered for Email by using special symbols and characters
        cy.get('[placeholder="First Name"]').type('Kunal');
        cy.get('[placeholder="Last Name"]').type('Tagde');
        cy.get('[placeholder="E-Mail"]').type('154579876466zc64BB6@gmail.com');
        cy.get('[placeholder="Telephone"]').type('7378351383');
        cy.get('[placeholder="Password"]').type('1234');
        cy.get('[placeholder="Password Confirm"]').type('1234');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.wait(2000);
        cy.get('input[type="submit"]').click();
        cy.screenshot
    }

    // NT_RegisterPage18(){

    //     // Locators and its value for Negative Test case for checking value entered for Last_Name rather than characters
    //     cy.get('[placeholder="First Name"]').type('Kunal');
    //     cy.get('[placeholder="Last Name"]').type('Tagde');
    //     cy.get('[placeholder="E-Mail"]').type('blankspace5@gmail.com');
    //     cy.get('[placeholder="Telephone"]').type('7378351383');
    //     cy.get('[placeholder="Password"]').type('1234');
    //     cy.get('[placeholder="Password Confirm"]').type('1234');
    //     cy.get('[name="newsletter"][value="1"]').click();
    //     cy.get('input[type="checkbox"]').uncheck();
    //     cy.get('input[type="submit"]').click();
    //     cy.screenshot
    // }

    // Negative Test Case by not putting gmail. in Email
    NT_RegisterPage19(){

        // Locators and its value for Negative Test case for checking value entered of email by not putting gmail.
        cy.get('[placeholder="First Name"]').type('Kunal');
        cy.get('[placeholder="Last Name"]').type('Tagde');
        cy.get('[placeholder="E-Mail"]').type('blankspace6@com');
        cy.get('[placeholder="Telephone"]').type('7378351383');
        cy.get('[placeholder="Password"]').type('1234');
        cy.get('[placeholder="Password Confirm"]').type('1234');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.wait(2000);
        cy.get('input[type="submit"]').click();
        cy.xpath('(//div[@class="text-danger"])').should('be.visible').should('have.text','E-Mail Address does not appear to be valid!');
    }

    // Negative Test Case by not putting .com in Email
    NT_RegisterPage20(){

        // Locators and its value for Negative Test case for checking value entered for email by not putting .com
        cy.get('[placeholder="First Name"]').type('Kunal');
        cy.get('[placeholder="Last Name"]').type('Tagde');
        cy.get('[placeholder="E-Mail"]').type('blankkspace7@gmail');
        cy.get('[placeholder="Telephone"]').type('7378351383');
        cy.get('[placeholder="Password"]').type('1234');
        cy.get('[placeholder="Password Confirm"]').type('1234');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.wait(2000);
        cy.get('input[type="submit"]').click();
        cy.xpath('(//div[@class="text-danger"])').should('be.visible').should('have.text','E-Mail Address does not appear to be valid!');
    }

    // Negative Test Case by putting special characters in Phone Number
    NT_RegisterPage21(){

        // Locators and its value for Negative Test case for checking value entered for Phone Number by using special characters
        cy.get('[placeholder="First Name"]').type('Kunal');
        cy.get('[placeholder="Last Name"]').type('Tagde');
        cy.get('[placeholder="E-Mail"]').type('blankspace81@gmail.com');
        cy.get('[placeholder="Telephone"]').type('#%#&&^##&#^');
        cy.get('[placeholder="Password"]').type('1234');
        cy.get('[placeholder="Password Confirm"]').type('1234');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.wait(2000);
        cy.get('input[type="submit"]').click();
        cy.screenshot();
    }


    NT_RegisterPage22(){

        // Locators and its value for Negative Test case for checking value entered for Phone Number by using numbers exceeding 32 digits
        cy.get('[placeholder="First Name"]').type('Kunal');
        cy.get('[placeholder="Last Name"]').type('Tagde');
        cy.get('[placeholder="E-Mail"]').type('blankspace9@gmail.com');
        cy.get('[placeholder="Telephone"]').type('111111111111111111111111111111111111111111');
        cy.get('[placeholder="Password"]').type('1234');
        cy.get('[placeholder="Password Confirm"]').type('1234');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.wait(2000);
        cy.get('input[type="submit"]').click();
        cy.xpath('//div[@class="text-danger"]').should('be.visible').should('have.text','Telephone must be between 3 and 32 characters!');
    }

    NT_RegisterPage23(){

        // Locators and its value for Negative Test case for checking value entered for Phone Number by using numbers not exceeding 3 digits
        cy.get('[placeholder="First Name"]').type('Kunal');
        cy.get('[placeholder="Last Name"]').type('Tagde');
        cy.get('[placeholder="E-Mail"]').type('blankspace10@gmail.com');
        cy.get('[placeholder="Telephone"]').type('11');
        cy.get('[placeholder="Password"]').type('1234');
        cy.get('[placeholder="Password Confirm"]').type('1234');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.wait(2000);
        cy.get('input[type="submit"]').click();
        cy.xpath('//div[@class="text-danger"]').should('be.visible').should('have.text','Telephone must be between 3 and 32 characters!');
    }

    NT_RegisterPage24(){

        // Change Email
        // Locators and its value for Negative Test case for checking value entered for Last_Name by entering numbers less than 10 digits
        cy.get('[placeholder="First Name"]').type('Kunal');
        cy.get('[placeholder="Last Name"]').type('Tagde');
        cy.get('[placeholder="E-Mail"]').type('blankspace1110@gmail.com');
        cy.get('[placeholder="Telephone"]').type('118466');
        cy.get('[placeholder="Password"]').type('1234');
        cy.get('[placeholder="Password Confirm"]').type('1234');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.wait(2000);
        cy.get('input[type="submit"]').click();
        cy.screenshot();
    }

    NT_RegisterPage25(){

        // Locators and its value for Negative Test case for checking value entered for Password and Confirm Password by using numbers not exceeding 4 digits
        cy.get('[placeholder="First Name"]').type('Kunal');
        cy.get('[placeholder="Last Name"]').type('Tagde');
        cy.get('[placeholder="E-Mail"]').type('blankspace12@gmail.com');
        cy.get('[placeholder="Telephone"]').type('7378351383');
        cy.get('[placeholder="Password"]').type('12');
        cy.get('[placeholder="Password Confirm"]').type('12');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.wait(2000);
        cy.get('input[type="submit"]').click();
        cy.xpath('(//div[@class="text-danger"])').should('be.visible').should('have.text','Password must be between 4 and 20 characters!');

    }

    NT_RegisterPage26(){

        // Change Email
        // Locators and its value for Negative Test case for checking value entered for Password and Confirm Password by using numbers exceeding 20 digits
        cy.get('[placeholder="First Name"]').type('Kunal');
        cy.get('[placeholder="Last Name"]').type('Tagde');
        cy.get('[placeholder="E-Mail"]').type('blankspace131@gmail.com');
        cy.get('[placeholder="Telephone"]').type('7378351383');
        cy.get('[placeholder="Password"]').type('1234567891234567891236789');
        cy.get('[placeholder="Password Confirm"]').type('1234567891234567891236789');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.wait(2000);
        cy.get('input[type="submit"]').click();
        cy.screenshot();
    }

    NT_RegisterPage27(){

        // Locators and its value for Negative Test case for checking value entered for Password by using numbers not exceeding 4 digits and for Confirm Password by using numbers exceeding 20 digits
        cy.get('[placeholder="First Name"]').type('Kunal');
        cy.get('[placeholder="Last Name"]').type('Tagde');
        cy.get('[placeholder="E-Mail"]').type('blankspace14@gmail.com');
        cy.get('[placeholder="Telephone"]').type('7378351383');
        cy.get('[placeholder="Password"]').type('12');
        cy.get('[placeholder="Password Confirm"]').type('123456');
        cy.get('[name="newsletter"][value="1"]').click();
        cy.get('input[type="checkbox"]').check();
        cy.wait(2000);
        cy.get('input[type="submit"]').click();
        cy.xpath('(//div[@class="text-danger"])[1]').should('be.visible').should('have.text','Password must be between 4 and 20 characters!');
        cy.xpath('(//div[@class="text-danger"])[2]').should('be.visible').should('have.text','Password confirmation does not match password!');
    }


}

// Exporting the class
export default RegisterPage