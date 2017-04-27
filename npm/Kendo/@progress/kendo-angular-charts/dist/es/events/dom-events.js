var getTouch = function (domEvent) {
    return {
        x: {
            location: domEvent.pageX
        },
        y: {
            location: domEvent.pageY
        }
    };
};
var eventArgs = function (e, previousArgs) {
    var center = e.center;
    var distance = 0;
    if (e.pointers.length > 1) {
        var pointer1 = e.pointers[0];
        var pointer2 = e.pointers[1];
        distance = Math.sqrt(Math.pow(pointer1.pageX - pointer2.pageX, 2) + Math.pow(pointer1.pageY - pointer2.pageY, 2));
    }
    return {
        distance: distance,
        event: e.srcEvent,
        preventDefault: function () {
            e.preventDefault();
        },
        target: e.target,
        touches: e.pointers.map(getTouch),
        type: e.type,
        x: {
            delta: previousArgs ? center.x - previousArgs.center.x : 0,
            initialDelta: e.deltaX,
            location: e.center.x,
            startLocation: center.x - e.deltaX
        },
        y: {
            delta: previousArgs ? center.y - previousArgs.center.y : 0,
            initialDelta: e.deltaY,
            location: e.center.y,
            startLocation: center.y - e.deltaY
        }
    };
};
function shouldBindGroup(groupNames, events) {
    for (var idx = 0; idx < groupNames.length; idx++) {
        if (events[groupNames[idx]]) {
            return true;
        }
    }
    return false;
}
var eventGroups = [{
        end: 'panend',
        move: 'panmove',
        start: 'panstart'
    }, {
        gesturechange: 'pinchmove',
        gestureend: 'pinchend',
        gesturestart: 'pinchstart'
    }, {
        press: 'press'
    }, {
        tap: 'tap'
    }];
/**
 * @hidden
 */
export var DomEvents = (function () {
    function DomEvents(hammerInstance, events) {
        this.hammerInstance = hammerInstance;
        this.eventHandlers = {};
        this.tap = this.tap.bind(this);
        this.press = this.press.bind(this);
        this.panstart = this.panstart.bind(this);
        this.panmove = this.panmove.bind(this);
        this.panend = this.panend.bind(this);
        this.pinchstart = this.pinchstart.bind(this);
        this.pinchmove = this.pinchmove.bind(this);
        this.pinchend = this.pinchend.bind(this);
        if (events) {
            this.bind(events);
        }
    }
    DomEvents.prototype.tap = function (e) {
        this.trigger('tap', e);
    };
    DomEvents.prototype.press = function (e) {
        this.trigger('press', e);
    };
    DomEvents.prototype.panstart = function (e) {
        delete this.previous;
        this.trigger('start', e);
        this.previous = e;
    };
    DomEvents.prototype.panmove = function (e) {
        this.trigger('move', e);
        this.previous = e;
    };
    DomEvents.prototype.panend = function (e) {
        this.trigger('end', e);
        delete this.previous;
    };
    DomEvents.prototype.pinchstart = function (e) {
        this.trigger('gesturestart', e);
    };
    DomEvents.prototype.pinchmove = function (e) {
        this.trigger('gesturechange', e);
    };
    DomEvents.prototype.pinchend = function (e) {
        this.trigger('gestureend', e);
    };
    DomEvents.prototype.trigger = function (name, e) {
        if (this.eventHandlers[name]) {
            this.eventHandlers[name](eventArgs(e, this.previous));
        }
    };
    DomEvents.prototype.bind = function (events) {
        if (events === void 0) { events = {}; }
        this.unbind();
        this.eventHandlers = events;
        for (var idx = 0; idx < eventGroups.length; idx++) {
            var eventGroup = eventGroups[idx];
            var groupNames = Object.keys(eventGroup);
            if (shouldBindGroup(groupNames, events)) {
                for (var nameIdx = 0; nameIdx < groupNames.length; nameIdx++) {
                    var name_1 = eventGroup[groupNames[nameIdx]];
                    this.hammerInstance.on(name_1, this[name_1]);
                }
            }
        }
    };
    DomEvents.prototype.unbind = function () {
        if (this.hammerInstance) {
            this.hammerInstance.off();
        }
        this.eventHandlers = {};
    };
    DomEvents.prototype.destroy = function () {
        if (this.hammerInstance) {
            this.hammerInstance.off();
            delete this.hammerInstance;
        }
        delete this.eventHandlers;
    };
    return DomEvents;
}());
