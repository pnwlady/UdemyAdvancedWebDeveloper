# UdemyAdvancedWebDeveloper
Coursework for Rithm/Udemy Advanced Web Developer course

### Async Foundations
  * A callback function is a function that is passed into another function as a parameter then invoked by that other function
  * A higher order function is a function that accepts a callback as a parameter
  * findIndex is a function that returns the index of the first element in the array for which the callback returns a truthy value. -1 is returned if the callback never returns a truthy value.
  * Stack and Heap:
      * Stack is and ordered set of stack frames, most recent recently invoked at the top, the first invoked at bottom, processed from top to bottom:
          * An ordered data structure
          * Keeps track of function invocations
          * Part of JavaScript runtime
          * LiLo
      * Stack Frame has
          * the function invoked
          * the parameters passed to the function
          * current line number
      * Heap is an area in memory where data is stored
  * Event Loop and Queue:
      * Queue:
          * And ordered list of functions waiting to be placed on the Stack
          * Functions are processed FIFO - first in, first out
      * Event Loop:
          * JavaScript runtime functionality that checks the queue when the stack is empty
          * When stack is empty, the front of the queue is placed in the stack.      
/**
    JavaScript is Single Threaded: code execution is linear. While running code cannot be interrupted by something else going on in the program
    ...
*/
