# React Lightning Workshop

React Lightning Workshop is a series of small workshops focused on familiarizing React developers with the process of creating simple, composable, and reusable UI components.  In each workshop, we challenge attendees with the task of creating a React component that represents some commonly used piece of UI, like a menu or a login widget.

Throughout the workshop, we provide various use cases to try your component against.  Will your solution account for a wide range of use cases? Does it need to? The more user experiences we build with React, the more we find ourselves reaching for the same components over and over, only to tweak them to account for differing visual outputs.

React Lightning Workshop aims to help us create components once and reuse them across all of our projects.



### What is a component?

Per the React docs..

>Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

We all know components! They're great.  Just like it says above, components allow us to draw lines around our mental models and define how a particular feature looks in the browser.

![component](/Users/nathanforce/Documents/Dev/lightning-workshop/component.png)

![zoolander](/Users/nathanforce/Documents/Dev/lightning-workshop/zoolander.png)

###Customization

Awesome! We have a Profile component.  It looks exactly like we want and our inner perfectionist is satisfied.  We finish this project and get paid.  The End.

Fast forward a few months.  We've released the project into the wild and the client wants to add a 'search for users' feature.  

> I would like to be able to search for users and, as I type, I would like to see a list of users that match my search.  I want to be able to see the user's information in a table as I search.

Oh no! Tables? Okay back to the drawing board.![component_config](/Users/nathanforce/Documents/Dev/lightning-workshop/component_config.png)



### Can We Do Better?

So we've added a prop that determines our final output.  We now use one Profile component to solve multiple use cases and all is well.  But what if another case comes along?  Do we add more conditionals?  Things can start to get out of hand quickly.

If we take a step back and think about what we are trying to achieve with our Profile component, it really has one task.  Fetch the user's data and display it.  Notice there is no mention of *how* we want to display it.

A powerful idea in React is the idea of Render Control.  For components that provide a functionality, rather than a visual representation, we want to separate functionality and rendering.  Through some advanced concepts like Render Props, Component Injection, and Compound Components, we can give render control back to the developer.  This means your component does the heavy lifting like data loading or DOM calculations or event listenting, and exposes a declarative interface for a developer to leverage that information to create some UI.

### Render Control	

There are plenty of resources online to learn about the various methods of render control.  Below is an example of our UserData component using render props.![render](/Users/nathanforce/Documents/Dev/lightning-workshop/render.png)

####Render Props

The Render Prop approach is the idea of providing a prop, usually named `render`, that allows a developer to pass a rendering function that will be called by the component, exposing some internal state.

####Component Injection

Component injection is similar to render props, but instead of accepting a function from the developer, you expect a component definition.

####Compound Components

Compound components are different subcomponents of a larger component that allow the developer to more granularly control the display of a component while keeping the logic central to the main component.

#### Resources

[Use a Render Prop - Michael Jackson](https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce)

[How to give rendering control to users with prop getters - Kent Dodds](https://blog.kentcdodds.com/how-to-give-rendering-control-to-users-with-prop-getters-549eaef76acf)

[Function as Child Components Are an Anti-Pattern - Donavon West](http://americanexpress.io/faccs-are-an-antipattern/)