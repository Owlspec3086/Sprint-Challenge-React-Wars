# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

Answer: React is founded on the idea that DOM manipulation is an expensive operation and should be minimized. It also recognizes that doing optimizing DOM manipulation by hand will result in a lot of "boilerplate" code, which is error-prone, boring and repetitive.

1. Describe component state.
Answer: An object that determines how that component renders & behaves. React components has a built-in state object, the state object is where you store property values that belongs to the component.

1. Describe props.
Answer: Its used from passing one data from one component to another, this data is read only and that the parent which cant be changed by the child components.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?
Answer: Side effects are basically anything that affects something outside of the scope of the current function that’s being executed. Passing the props as initalState to useState, the state will remain the same, useState won’t initialize on props change.