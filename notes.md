react redux and redux are two seperate libraries, need both installed for most projects

- redux logger is npm package that shows everything that has happened in state store changes

- state mutation is when an old array is updated by pushing into state and then it is updated into a new state
    - that state array is exactly the same as teh state array that was passed into the function
    - avoid by using the spread operator to copy everything from old array into new array, then add on the last thing brouhgt over ie: ...

- state is immutable in react, we will not change it, only add/subtract to it