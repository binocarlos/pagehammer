var Emitter = require('emitter')
var Hammer = require('hammer')

module.exports = PageHammer;

var defaults = {
  minDistance:20
}


function PageHammer (opts) {
  if (!(this instanceof PageHammer)) return new PageHammer(opts);
  opts = opts || {}
  Object.keys(defaults || {}).forEach(function(key){
    if(!opts[key]){
      opts[key] = defaults[key]
    }
  })
  this.options = opts
}

Emitter(PageHammer.prototype)

var directions = {
  left:-1,
  right:1
}

var otherDirections = {
  left:'right',
  right:'left'
}

PageHammer.prototype.setup = function (target) {
  var self = this;

  if(this.hammertime) return

  this.hammertime = new Hammer(target, {
    drag_min_distance:this.options.minDistance,
    tap_max_distance:this.options.minDistance-1
  })

  this.hammertime.ondragstart = function(ev){
    var direction = otherDirections[ev.direction]
    self.emit('swipe', direction, directions[direction])
  }
}