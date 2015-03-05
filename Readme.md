
# koa-browserify-middleware

  Quick and dirty Koa wrapper around [browserify-middleware](https://github.com/forbeslindesay/browserify-middleware).

  Works great with [roo](http://github.com/lapwinglabs/roo).

## Installation

```
npm install koa-browserify-middleware
```

## Example

- Roo:

```js
var browserify = require('koa-browserify-middleware');
var roo = require('roo')(__dirname);

roo.get('/react.js', browserify(['react']));
roo.get('/client.js', browserify('./client.js', { external: ['react'] }));
```

- Koa:

```js
var _ = require('koa-route');
var koa = require('koa')();

koa.use(_.get('/react.js', browserify(['react'])));
koa.use(_.get('/client.js', browserify('./client.js', { external: ['react'] })));
```

## API

Same as [browserify-middleware](https://github.com/forbeslindesay/browserify-middleware).

## License

(The MIT License)

Copyright (c) 2015 Matthew Mueller &lt;mattmuelle@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
