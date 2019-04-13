1) 
What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
    Prop types are used to export a range of validators that can be used to make sure the data you receive is valid.

    As your app grows, you can catch a lot of bugs with typechecking. 

    When an invalid value is provided for a prop, a warning will be shown in the JavaScript console. For performance reasons, propTypes is only checked in development mode.

2)
Describe a life-cycle event in React?

    An event has three phases to its life cycle : cycle , target and bubbling

    The order in which the events are recieved on the wepage are described by the event flow.

    Basically the data is loaded (html), then jscode within the head/body which is not in a function is executed first & from there it goes about the scripts sequentially

    It is important to note that js takes precedence over things like css loading, so from a performance perspective you should have the js at the bottom of the page.

3)
Explain the details of a Higher Order Component?

    Higher order functions are functions that take a function as an argument and return a function. 
    
    We will use them often in functional programming. They are a way to define reusable functionality, as we do with map, filter and reduce.

4)
What are three different ways to style components in React? Explain some of the benefits of each.

    CSS Stylesheet
        When your application is more complex and you are able to create more personal style types.

    Inline Styling 
        Adds a few simple style properties and is quick.

    Styled Components
        When you want to reuse your style properties in the same file