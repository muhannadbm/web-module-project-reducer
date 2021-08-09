# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* That triggers the Onclick event which is dispatch the addone action
* Reducer receives the dispatched action and compares it with the cases
* Reducer applies the relative operation on the state
* Since the state has changed it triggers a re render to the component with the new State


* TotalDisplay shows the total plus 1.
