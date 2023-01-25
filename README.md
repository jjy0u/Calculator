# Calculator
This is my calculator, a project set by _nology during week 2 of the course to put the javascript we've learnt to practice. Some of the requirements were:

- At least 15 Git commits for the different stages in your development
- Be responsive and built mobile-first, it should work on different screen widths
- Accept a minimum of 2 inputs, perform an operation and show the output
- Does not use the eval() method (this calculates the numerical answer for a string)

CSS:
I built my calculator based on the design and functionality of the iphone calculator because I liked that only the numbers and answers were displayed and not the whole operation. To still make it clear, I added a colour change when a button is pressed so not to be confusing. 

JavaScript:
- I wanted the calculator to handle more than two inputs when two numbers are clicked, the subsequent calculations will occur to the answer. This meant at any given time the expression only contains two numbers. I was able to do this with the equation: expression = display.innerHTML + operator. As an answer would always be displayed, this would add the operator to the answer and continue functioning.
- I converted my expression into a number for the calculation to occur using a function which I called upon in my operator clicked function. The way this worked was the string would be split at the operator into an array and each element converted to a number. Then I would reference each element of the array in an operation.
- I had some issues with the negative button as it meant I now had two minus operators in my expression which, using my convert to array function, was difficult to deal with. I ended up adding some extra else if statements about the cases where there are multiple minus operators.
- Other than give an output for multiple inputs, the calculator also has AC, +/-, %, and backspace button. The AC button changes to a C depending on if there is an inputted number. The AC only clears what is in the display and not the whole expression, the same as the iphone calculator. 
- When the expression is of a length larger than 10, the number output will give an exponential to ensure the whole number fits in the screen. This occurs unless the expression contains a decimal which will rather give a output rounded to 7 decimal points. To handle the trailing 0's, the output was multipled by 1 which seemed to do the trick.