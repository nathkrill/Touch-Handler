# Touch Handler

A simple library to handle touches and swipes using Javascript.

## Usage

Include `touch-handler.js` in your project.

```
    import TouchHander from '/path/to/touch-handler.js';

    const element = document.querySelector('.touch');

    new TouchHandler(element, {
        touchStart: startFunction,
        touchMove: moveFunction,
        touchEnd: endFunction
    });

```

And that's it!