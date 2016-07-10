# toDoList, AngularJS
From http://medialoot.com/blog/angularjs-for-absolute-beginners/
The Structure
Image of a high level angular structure
Angular is built to isolate specific responsibilities of an application from each other. We should do things like manipulate the DOM, get data from services, and create structured templates all in different places.
These different places are referred to as components. Each component has a different name. In this tutorial we will focus on controllers and views.
A controller is used to set state and add behavior to a page. This means if you're making a todo list, you would create an array of todos in a controller that would be appended to a page. The controller itself does not append the todos, it just simply houses them for another component to use.
The page these todos will be appended to is called a view. A view is just a HTML file. However, in Angular we can augment the functionality of HTML by using directives. Just think of directives as custom HTML that we can use to manipulate the DOM. You want to attach a click handler? There's a directive for that. You want to append multiple items to a list? There's a directive for that too.
This is in contrast to jQuery. With jQuery we would create a click handler in a script file somewhere. With Angular, we declare that there's a click event on the element, but write the logic elsewhere (in the controller). This is referred to as declarative programming. We express that our element does something without defining the functionality within it.
Essentially, this means we can store data in a controller. The controller can pass that data to the view, and the view can use directives to manipulate the DOM on the page. A view has a controller, and a controller has that same view. A place for everything and everything in its place. If you understand that, then half of the battle is already over.
