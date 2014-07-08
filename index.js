var Emitter = require('emitter')

module.exports = PageHammer;

var defaults = {
	minDistance:20
}

function PageHammer (book, opts) {
  if (!(this instanceof PageHammer)) return new PageHammer(book, opts);
  opts = opts || {}
  Object.keys(defaults || {}).forEach(function(key){
  	if(!opts[key]){
  		opts[key] = defaults[key]
  	}
  })
  this.book = book
  this.options = opts
  this.setupEvents()
}

Emitter(PageHammer.prototype)

PageHammer.prototype.setupEvents = function () {
  var self = this;
  this.book.on('render', function(elem){
    self.setupHammer(target)
  })
}

PageHammer.prototype.setupHammer = function (target) {
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