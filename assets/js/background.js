let Settings = {
};

var App = {
    ctx: null,
    view: {
        width: function() { return (document.getElementById('particles-js').offsetWidth); },
        height: function() { return (document.getElementById('particles-js').offsetHeight); }
    },
    start: new Date().getMilliseconds(),
    tick: function () { return (new Date().getMilliseconds())},
    fps60: 0,
    Main: function() {
        window.requestAnimationFrame(App.Main);
    }
};


var canvas_el = document.createElement('canvas');

/* set size canvas */
canvas_el.style.width = "100%";
canvas_el.style.height = "100%";

/* append canvas */
var canvas = document.getElementById('particles-js').appendChild(canvas_el);

App.ctx = canvas.getContext('2d');

// setInterval(function() {
//     App.fps60 += 1;
//     if (App.fps60 < 0)
//         App.fps60 = 0;
// }, 1000 / 60);

window.requestAnimationFrame(App.Main);