// Package declaration
package Construct_Week;

// Importing all the required classes
import java.util.*;

// Creating a class named Operations_on_Stack
public class Operations_on_Stack {

    // Main method that will be executed
    public static void main(String[] args) {

        // Taking input from the user using the Scanner class
        Scanner scanner = new Scanner(System.in);

        // Taking the size of the stack from the user   
        System.out.println("Enter the size of the stack:");

        // Storing the size of the stack in a variable
        int size_of_stack = scanner.nextInt();

        // Creating an object of the ArrayStack class
        ArrayStack stack = new ArrayStack(size_of_stack);

        // Defining a variable to store the user input
        int user_input;

        // Implementing a do-while loop to perform stack operations
        do {

            // Displaying the stack operations 
            System.out.println("\n     Stack Operations:");

            // Displaying the options to the user for pushing an element to the stack
            System.out.println("1. Push an element to the stack");

            // Displaying the options to the user for popping the element from the stack 
            System.out.println("2. Pop an element from the stack");

            // Displaying the options to the user for peeking the top element of the stack
            System.out.println("3. Peek the top element of the stack");

            // For User to check if the stack is empty
            System.out.println("4. Check if the stack is empty");

            // For User to exit out of the loop
            System.out.println("5. Exit");

            // Taking the user input
            System.out.print("\nEnter your choice: ");

            // Storing the user input in a variable
            // and converting it to an integer
            user_input = scanner.nextInt();

            // Performing stack operations based on the user input using switch case
            switch (user_input) {

                case 1: {

                    // Taking the element to be pushed from the user
                    System.out.print("\nEnter an element to push: ");

                    // Storing the element to be pushed in a variable
                    int entered_element = scanner.nextInt();

                    // Pushing the element to the stack
                    stack.push(entered_element);  

                    // Breaking the switch case 1
                    break;
                }
                case 2: {

                    // Popping the element from the stack
                    stack.pop();

                    // Breaking the switch case 2
                    break;
                }
                case 3: {

                    // Peeking the top element
                    int top_element = stack.peek(); 

                    // Checking if the stack is not empty
                    if (top_element != -1) {

                        // Displaying the top element
                        System.out.println("\nTop element: " + top_element);
                    }

                    // Breaking the switch case 3
                    break;
                }
                case 4: {

                    // Checking if the stack is empty
                    if (stack.isStackEmpty()) {

                        // Displaying that the stack is empty
                        System.out.println("\nStack is empty.");
                    }
                     else {

                        // Displaying that the stack is not empty
                        System.out.println("\nStack is not empty.");
                    }

                    // Breaking the switch case 4
                    break;
                }
                case 5: {

                    // Displaying the exit message
                    System.out.println("\nExiting stack operations...");
                    System.out.println("\nExited");

                    // Breaking the switch case 5
                    break;
                }
                default: {

                    // Displaying the error message
                    System.out.println("\nInvalid choice. Please try again.");

                    // Breaking the switch case 5
                    break;
                }
            }
        
            // Looping until the user chooses to exit
        } while (user_input != 5); 

        // Closing the scanner
        scanner.close();
    }
}
