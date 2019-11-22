# Touch Handler

A simple library to handle touches and swipes using Javascript.

## Usage

Include `touch-handler.js` in your project.

```
    import TouchHandler from '/path/to/touch-handler.js';

    const element = document.querySelector('.touch');

    new TouchHandler(element, {
        touchStart: startFunction, // Code that will run when a touch starts
        touchMove: moveFunction, // Code that will run when a touch is moving <-- This is where the magic happens for me!
        touchEnd: endFunction // Code that will run when the touch is ended or cancelled.
    });

```

Inside each of your functions you can use `this` to access the TouchHandler instance.
Useful things in there are:

```

    this.currentTouch; // An object with x & y co-ordinates of the current touch point (available in touchMove and touchEnd)

    this.startTouch; // An object with x & y co-ordinates of the start touch. (available in any of the three methods)

```

And that's it!