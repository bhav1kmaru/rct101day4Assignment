# rct101day4Assignment

# what is the difference between Props and State? 
Props are the properties which are passed to an element. for example: id,class,content,styles,etc.
State is the current state or the value of an element.

# Explain the useState API
an element and a dispatcher function is passed to React.useState for maintaining the state of an element.
example: const [amount,setAmount]=React.useState(0) 

Here, amount is the element which is passed to useState as initial value 0.
Now we can use setAmount function to update it's state whenever needed.
example: setAmount(amount+100)
this will set the value of amount to amount + 100


