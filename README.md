pagehammer
==========

Touch event handler for turning [pageturner](https://github.com/binocarlos/pageturner) books

## installation

```
$ component install binocarlos/pagehammer
```

## example

Create a [pageturner](https://github.com/binocarlos/pageturner) book and pass it to pagehammer

```js
var PageTurner = require('pageturner')
var PageHammer = require('pagehammer')
var data = {
	title:"My Cool Book",
	pages:[{
		title:"Intro",
		html:"<p>This is the first page</p>"
	},
	...]
}

var book = PageTurner(data)
var hammer = PageHammer(book)

hammer.on('swipe', function(direction, toPage){
	// direction is 'left' or 'right'	
})

book.appendTo(document.querySelector('#container'))
```

## api

### `var hammer = PageHammer(book, opts)`

Activate touch events for a [pageturner](https://github.com/binocarlos/pageturner) book

The options object has the following properties:

 * minDistance - the minimum distance a swipe has to be in pixels
 
## events

### `hammer.on('swipe', function(direction, toPage){})`

triggered when the page has been turned because of a swipe.

The direction is 'left' or 'right' and the toPage is the page this has caused the book to turn to

## licence
MIT