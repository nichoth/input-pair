/**
 * Field value pair of inputs. Options are: {
 *   onComplete: function that gets called on enter or tab in the value input.
 *     Only gets called if both inputs have text in them.
 * }
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
