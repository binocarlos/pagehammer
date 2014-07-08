pagehammer
==========

Touch event handler for turning [pageturner](https://github.com/binocarlos/pageturner) books

## installation

```
$ component install binocarlos/pagehammer
```

## example

Create a [pageturner](https://github.com/binocarlos/pagemaker) book and pass it to pagehammer

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
PageHammer(book)

book.appendTo(document.querySelector('#container'))
```

## api

### `PageHammer(book, opts)`

Activate touch events for a [pageturner](https://github.com/binocarlos/pageturner) book

The options object has the following properties:

 * minDistance - the minimum distance a swipe has to be in pixels
 
## licence
MIT