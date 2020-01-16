export default class TouchHandler {
    constructor(element, {
        touchStart = () => {},
        touchMove = () => {},
        touchEnd = () => {}
    } = {
        touchStart: () => {},
        touchMove: () => {},
        touchEnd: () => {}
    }) {

        this.element = element;

        this.touchStartCb = touchStart;
        this.touchMoveCb = touchMove;
        this.touchEndCb = touchEnd;

        this.bindMoveHandle = this.moveHandle.bind(this);
        this.bindEndHandle = this.endHandle.bind(this);

        this.startTouch = {
            x: 0,
            y: 0
        };

        this.currentTouch = {
            x: 0,
            y: 0
        };

        this.element.addEventListener('touchstart', this.startHandle.bind(this), false);
    }

    startHandle (e) {
        this.element.addEventListener('touchend', this.bindEndHandle, false);
        this.element.addEventListener('touchcancel', this.bindEndHandle, false);
        this.element.addEventListener('touchmove', this.bindMoveHandle, false);

        this.startTouch = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        };

        this.touchStartCb();
    }

    moveHandle (e) {
        this.currentTouch = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        };

        this.touchMoveCb();
    }

    endHandle (e) {
        this.element.removeEventListener('touchend', this.bindEndHandle, false);
        this.element.removeEventListener('touchcancel', this.bindEndHandle, false);
        this.element.removeEventListener('touchmove', this.bindMoveHandle, false);

        this.touchEndCb();

        this.startTouch = {
            x: 0,
            y: 0
        };
    }
}

window.TouchHandler = TouchHandler;