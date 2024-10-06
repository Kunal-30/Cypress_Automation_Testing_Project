// Package name
package Construct_Week;

//Creating a class named ArrayStack
class ArrayStack {

    // Creating an array of integers to represent the stack
    private int[] stack; 

    // Creating an integer to represent the top of the stack
    private int top;     

    // Creating an integer to represent the size of the stack
    private int size;    

    // Creating a constructor for the ArrayStack class and passing the size of the stack as a parameter
    public ArrayStack(int size) {

        // Initializing the variables and this keyword will refer to the current object 
        this.size = size;

        // Initializing the stack array with the size passed as a parameter
        this.stack = new int[size];

        // Initializing the top of the stack to -1 which shows that stack is empty
        this.top = -1;
    }

    // Creating a method that will push an element into the stack
    public void push(int element) {

        // Checking if the stack is full
        if (top >= size - 1) {

            // Printing a message if the stack is full
            System.out.println("Stack is full.");

        }
        else {

            // Pushing the element into the stack
            top++;

            // It will push the element into the top of the stack
            stack[top] = element;

            // Printing a message if the element is pushed into the stack
            System.out.println("\nPushed " + element + " into the stack.");
        }
    }

    // Creating a method that will pop an element from the stack
    public int pop() {

        // Checking if the stack is empty
        if (top == -1) {

            // Printing a message if the stack is empty
            System.out.println("\nStack is empty.");

            // Return -1 to indicate that the stack is empty
            return -1;

        } else {

            // Initializing an integer to store the popped element
            int poppedElement = stack[top];

            // Popping the element from the stack
            top--;

            // Printing a message if the element is popped from the stack
            System.out.println("\nPopped " + poppedElement + " from the stack.");

            // Returning the popped element
            return poppedElement;
        }
    }

    // Creating a method that will peek at the top element of the stack
        public int peek() {
    
            // Checking if the stack is empty
            if (top == -1) {

            // Printing a message if the stack is empty
            System.out.println("\nStack is empty.");

            // Return -1 to indicate that the stack is empty
            return -1;

        } else {

            // Returning the top element of the stack
            return stack[top];
        }
    }

    // Creating a method that will check if the stack is empty
    public boolean isStackEmpty() {

        // Return false if the stack is not empty
        return top == -1; 
    }
}
