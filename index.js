var Emitter = require('emitter')

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

PageHammer.prototype.setup = function (target) {
  var self = this;

  if(this.hammertime) return

  this.hammertime = new Hammer(target, {
    drag_min_distance:this.options.minDistance,
    tap_max_distance:this.options.minDistance-1
  })

  var turned = false

  hammertime.ondrag = function(ev){
    if(turned){
      return
    }

    turned = true
    var nextPage = self.book.turnDirection(ev.direction)
    self.emit('swipe', ev.direction, nextPage)
  }

  hammertime.ondragend = function(ev){
    turned = false
  }
}