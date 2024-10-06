// Importing Logout Page file 
import LogoutPage from "../../support/PageClasses/LogoutPage";

// Importing Login Page file
import LoginPage from "../../support/PageClasses/LoginPage";

// Importing Register Page file
import RegisterPage from "../../support/PageClasses/RegisterPage";

// Describe block for Tutorials Ninja Website
describe('Tutorials Ninja', () => {

    // Instantiating an object logout_obj from class LogoutPage
    const logout_obj = new LogoutPage();

    // Instantiating an object login_obj from class LoginPage
    const login_obj = new LoginPage();

    // Instantiating an object register_obj from class RegisterPage
    const register_obj = new RegisterPage();
    
    // Positive Test Case
    // Entering write credentials
    it('RegisterPage - Positive Test Case With Right Credentials', () => {
        
        // Calling the function EnterURL from Register Page
        register_obj.EnterURL();

        // Calling the function Register Link in my account from Register Page
        register_obj.RegisterLink_in_my_account();

        // Calling the function PT_RegisterPage from Register Page
        register_obj.PT_RegisterPage1();

        // Calling the function Clicking on Continue from Register Page
        register_obj.Clicking_on_Continue();

        // Calling the function Logout from Logout Page
        logout_obj.Logout();

        // Calling the function Clicking on Continue from Register Page
        logout_obj.Clicking_on_Continue();

        // Calling the function Login in my account from Login Page
        login_obj.Login_in_my_account();

        // Calling the function PT_Login_Credentials from Login Page
        login_obj.PT_Login_Credentials_accept();
    });

    // Negative Test Case
    // Entering different password and confirm password
    it('RegisterPage - Negative test case by giving passsword and confirm password differently', () => {
        
        // Calling the function EnterURL from Register Page
        register_obj.EnterURL();

        // Calling the function Register Link in my account from Register Page
        register_obj.RegisterLink_in_my_account();

        // Calling the function NT_RegisterPage2 from Register Page
        register_obj.NT_RegisterPage2();

        // Calling the function Clicking on Continue from Register Page
        register_obj.Clicking_on_Continue();
        
    });

    // Negative Test Case
    // Entering First_Name blank
    it('RegisterPage - Negative test case by leaving First_Name blank', () => {
        
        // Calling the function EnterURL from Register Page
        register_obj.EnterURL();

        // Calling the function Register Link in my account from Register Page
        register_obj.RegisterLink_in_my_account();

        // Calling the function NT_RegisterPage3 from Register Page
        register_obj.NT_RegisterPage3();

        // Calling the function Clicking on Continue from Register Page
        register_obj.Clicking_on_Continue();
        
    });

    // Negative Test Case
    // Entering Last_Name blank
    it('RegisterPage - Negative test case by leaving Last_Name blank', () => {
        
        // Calling the function EnterURL from Register Page
        register_obj.EnterURL();

        // Calling the function Register Link in my account from Register Page
        register_obj.RegisterLink_in_my_account();

        // Calling the function NT_RegisterPage4 from Register Page
        register_obj.NT_RegisterPage4();

        // Calling the function Clicking on Continue from Register Page
        register_obj.Clicking_on_Continue();
        
    });

    // Negative Test Case
    // Entering Email blank
    it('RegisterPage - Negative test case by leaving Email blank', () => {
        
        // Calling the function EnterURL from Register Page
        register_obj.EnterURL();

        // Calling the function Register Link in my account from Register Page
        register_obj.RegisterLink_in_my_account();

        // Calling the function NT_RegisterPage5 from Register Page
        register_obj.NT_RegisterPage5();

        // Calling the function Clicking on Continue from Register Page
        register_obj.Clicking_on_Continue();
        
    });

    // Negative Test Case
    // Entering Telephone blank
    it('RegisterPage - Negative test case by leaving Telephone blank', () => {
        
        // Calling the function EnterURL from Register Page
        register_obj.EnterURL();

        // Calling the function Register Link in my account from Register Page
        register_obj.RegisterLink_in_my_account();

        // Calling the function NT_RegisterPage6 from Register Page
        register_obj.NT_RegisterPage6();

        // Calling the function Clicking on Continue from Register Page
        register_obj.Clicking_on_Continue();
        
    });


    // Negative Test Case
    // Entering Password blank
    it('RegisterPage - Negative test case by leaving Password blank', () => {
        
        // Calling the function EnterURL from Register Page
        register_obj.EnterURL();

        // Calling the function Register Link in my account from Register Page
        register_obj.RegisterLink_in_my_account();

        // Calling the function NT_RegisterPage7 from Register Page
        register_obj.NT_RegisterPage7();

        // Calling the function Clicking on Continue from Register Page
        register_obj.Clicking_on_Continue();
        
    });

    // Negative Test Case
    // Entering Confirm Password blank
    it('RegisterPage - Negative test case by leaving Confirm Password blank', () => {
        
        // Calling the function EnterURL from Register Page
        register_obj.EnterURL();

        // Calling the function Register Link in my account from Register Page
        register_obj.RegisterLink_in_my_account();

        // Calling the function NT_RegisterPage8 from Register Page
        register_obj.NT_RegisterPage8();

        // Calling the function Clicking on Continue from Register Page
        register_obj.Clicking_on_Continue();
        
    });

    // Negative Test Case
    // Entering Checkbox
    it('RegisterPage - Negative test case by leaving Checkbox blank', () => {
        
        // Calling the function EnterURL from Register Page
        register_obj.EnterURL();

        // Calling the function Register Link in my account from Register Page
        register_obj.RegisterLink_in_my_account();

        // Calling the function NT_RegisterPage9 from Register Page
        register_obj.NT_RegisterPage9();

        // Calling the function Clicking on Continue from Register Page
        register_obj.Clicking_on_Continue();
        
    });

    // Negative Test Case
    // Leaving Checkbox unchecked
    it('RegisterPage - Negative test case by leaving Checkbox unchecked', () => {
        
        // Calling the function EnterURL from Register Page
        register_obj.EnterURL();

        // Calling the function Register Link in my account from Register Page
        register_obj.RegisterLink_in_my_account();

        // Calling the function NT_RegisterPage10 from Register Page
        register_obj.NT_RegisterPage10();

        // Calling the function Clicking on Continue from Register Page
        register_obj.Clicking_on_Continue();
        
    });
    

    // Negative Test Case
    // Entering Incorrect email Credentials
    it('LoginPage - In email not putting "@gmail.com" and entering correct Password', () => {
        
        // Calling the function EnterURL from Register Page
        register_obj.EnterURL();

        // Calling the function Login Link in my account from Login Page
        login_obj.Login_in_my_account();

        // Calling the function NT_Login_Credentials1 from Login Page
        login_obj.NT_Login_Credentials1();
    });
    
    // Negative Test Case
    // Entering Incorrect email with Correct passsword
    it('LoginPage - Entering Wrong Email and Correct Password', () => {
        
        // Calling the function EnterURL from Register Page
        register_obj.EnterURL();

        // Calling the function Login Link in my account from Login Page
        login_obj.Login_in_my_account();

        // Calling the function NT_Login_Credentials2 from Login Page
        login_obj.NT_Login_Credentials2();
    });
    
    // Negative Test Case
    // Entering Correct Email and wrong Password
    it('LoginPage - Entering correct Email and wrong Password', () => {
        
        // Calling the function EnterURL from Register Page
        register_obj.EnterURL();

        // Calling the function Login Link in my account from Login Page
        login_obj.Login_in_my_account();

        // Calling the function NT_Login_Credentials3 from Login Page
        login_obj.NT_Login_Credentials3();
    }); 
    
    // Negative Test Case
    // Entering correct Email and correct Password
    it('LoginPage - Entering correct Email and leaving Password blank', () => {
        
        // Calling the function EnterURL from Register Page
        register_obj.EnterURL();

        // Calling the function Login Link in my account from Login Page
        login_obj.Login_in_my_account();

        // Calling the function NT_Login_Credentials4 from Login Page
        login_obj.NT_Login_Credentials4();
    });

    // Negative Test Case
    // Entering correct Password and leaving Email blank
    it('LoginPage - Entering correct Password and leaving Email blank', () => {
        
        // Calling the function EnterURL from Register Page
        register_obj.EnterURL();

        // Calling the function Login Link in my account from Login Page
        login_obj.Login_in_my_account();

        // Calling the function NT_Login_Credentials5 from Login Page
        login_obj.NT_Login_Credentials5();
    });
    
});


