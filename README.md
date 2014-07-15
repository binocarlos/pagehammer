pagehammer
==========

Touch event handler for turning books

## installation

```
$ component install binocarlos/pagehammer
```

## example

Create a pagehammer and assign it to a DOM element.

```js
var PageHammer = require('pagehammer')

var book = document.createElement('div')
var hammer = PageHammer()

hammer.setup(book)

hammer.on('swipe', function(direction, toPage){
	// direction is 'left' or 'right'	
})

book.appendTo(document.querySelector('#container'))
```

## api

#### `var hammer = PageHammer(opts)`

The options object has the following properties:

 * minDistance - the minimum distance a swipe has to be in pixels

#### `hammer.setup(elem)`

Setup the pagehammer on the given DOM element

## events

#### `hammer.on('swipe', function(side, direction){})`

triggered when the page has been turned because of a swipe.

The side is 'left' or 'right' and direction is -1 or 1

## licence
MIT