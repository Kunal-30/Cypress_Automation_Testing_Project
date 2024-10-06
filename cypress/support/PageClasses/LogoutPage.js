// A class for Logout Page
class LogoutPage {
    
    // Logout function
    Logout(){
        cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=account/logout"])[2]').click();
    }

    // Clicking on Continue function 
    Clicking_on_Continue(){
        cy.xpath('(//a[@href="https://tutorialsninja.com/demo/index.php?route=common/home"])[3]').click();
    }

}

// Exporting the class
export default LogoutPage
