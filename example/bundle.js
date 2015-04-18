(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/nick/code/nodes/generic-form/example/example.js":[function(require,module,exports){
var Pair = require('..');

document.body.appendChild(new Pair().el);

console.log("ham");

},{"..":"/Users/nick/code/nodes/generic-form/index.js"}],"/Users/nick/code/nodes/generic-form/index.js":[function(require,module,exports){
/**
 * Field value pair of inputs. Options are :
 */
module.exports = Pair;

function Pair(opts) {
  if ( !(this instanceof Pair) ) return new Pair(opts);

  var self = this;

  this.el = document.createElement('div');
  this.fieldEl = document.createElement('input');
  this.valueEl = document.createElement('input');
  this.el.appendChild(this.fieldEl);
  this.el.appendChild(this.valueEl);

  var noop = function() {};
  opts = opts || {};
  this.onComplete = opts.onComplete || noop;

  // onComplete -- enter or tab in value element
  this.valueEl.addEventListener('keydown', function(ev) {
    if (ev.keyCode === 13 || (ev.keyCode === 9 && !ev.shiftKey) ) {
      console.log(ev.keyCode, 'in here');
      if (self.fieldEl.value && self.valueEl.value) {
        self.onComplete.call(self, self);
      }
    }
  });

}

Pair.prototype.getValues = function() {
  return {
    field: this.fieldEl.value,
    value: this.valueEl.value,
  };
};

Pair.prototype.focus = function() {
  this.fieldEl.focus();
};

},{}]},{},["/Users/nick/code/nodes/generic-form/example/example.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL2V4YW1wbGUuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgUGFpciA9IHJlcXVpcmUoJy4uJyk7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmV3IFBhaXIoKS5lbCk7XG5cbmNvbnNvbGUubG9nKFwiaGFtXCIpO1xuIiwiLyoqXG4gKiBGaWVsZCB2YWx1ZSBwYWlyIG9mIGlucHV0cy4gT3B0aW9ucyBhcmUgOlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IFBhaXI7XG5cbmZ1bmN0aW9uIFBhaXIob3B0cykge1xuICBpZiAoICEodGhpcyBpbnN0YW5jZW9mIFBhaXIpICkgcmV0dXJuIG5ldyBQYWlyKG9wdHMpO1xuXG4gIHZhciBzZWxmID0gdGhpcztcblxuICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRoaXMuZmllbGRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRoaXMudmFsdWVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5maWVsZEVsKTtcbiAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLnZhbHVlRWwpO1xuXG4gIHZhciBub29wID0gZnVuY3Rpb24oKSB7fTtcbiAgb3B0cyA9IG9wdHMgfHwge307XG4gIHRoaXMub25Db21wbGV0ZSA9IG9wdHMub25Db21wbGV0ZSB8fCBub29wO1xuXG4gIC8vIG9uQ29tcGxldGUgLS0gZW50ZXIgb3IgdGFiIGluIHZhbHVlIGVsZW1lbnRcbiAgdGhpcy52YWx1ZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihldikge1xuICAgIGlmIChldi5rZXlDb2RlID09PSAxMyB8fCAoZXYua2V5Q29kZSA9PT0gOSAmJiAhZXYuc2hpZnRLZXkpICkge1xuICAgICAgY29uc29sZS5sb2coZXYua2V5Q29kZSwgJ2luIGhlcmUnKTtcbiAgICAgIGlmIChzZWxmLmZpZWxkRWwudmFsdWUgJiYgc2VsZi52YWx1ZUVsLnZhbHVlKSB7XG4gICAgICAgIHNlbGYub25Db21wbGV0ZS5jYWxsKHNlbGYsIHNlbGYpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbn1cblxuUGFpci5wcm90b3R5cGUuZ2V0VmFsdWVzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgZmllbGQ6IHRoaXMuZmllbGRFbC52YWx1ZSxcbiAgICB2YWx1ZTogdGhpcy52YWx1ZUVsLnZhbHVlLFxuICB9O1xufTtcblxuUGFpci5wcm90b3R5cGUuZm9jdXMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5maWVsZEVsLmZvY3VzKCk7XG59O1xuIl19
