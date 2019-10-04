- [ ] Why would you use class component over function components (removing hooks from the question)?
    Class components have some built in methods that they get from extending React.Component and also allow you to have state on your components (though you can do the same with the setState hook)

- [ ] Name three lifecycle methods and their purposes.
    ComponentDidMount, componentDidUpdate, render. 
    ComponentDidMount is a good method to use for making API calls since it runs as soon as the component is mounted to the DOM and ready.
    ComponentDidUpdate is great if you're using ComponentDidMount since it will run as soon as state or props update, for example. 
    Render renders your components to the DOM.


- [ ] What is the purpose of a custom hook?
    Reusable small pieces of code that allow you to apply non-visual behavior and stateful logic throughought your components 

- [ ] Why is it important to test our apps?
    Reveal bugs quicker, gives you confidence in your code, acts as documentation for the code