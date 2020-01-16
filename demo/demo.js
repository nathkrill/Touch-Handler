function touchStart() {
    console.log('A touch has started!', this);
}

function touchMove() {
    console.log('A touch is swiping!', this);

    if (this.currentTouch.x > this.startTouch.x) {
        console.log('Right');
    }
    if (this.currentTouch.x < this.startTouch.x) {
        console.log('Left');
    }
    if (this.currentTouch.y > this.startTouch.y) {
        console.log('Down');
    }
    if (this.currentTouch.y < this.startTouch.y) {
        console.log('Up');
    }
}

function touchEnd() {
    console.log('A touch is complete', this);
}

document.addEventListener('DOMContentLoaded', () => {

    let div = document.querySelector('div');

    new TouchHandler(div, {
        touchStart: touchStart,
        touchMove: touchMove,
        touchEnd: touchEnd
    });

}, false);