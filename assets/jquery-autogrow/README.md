autoGrow jQuery plugin
======================

Auto resize input fields to fit content when user types.

Works both with jQuery and Zepto.js.


Usage
-----

To autoresize text field use:

```js
$('#myTextField').autoGrow({
  comfortZone: 70 // default value
});
// or just
$('#myTextField').autoGrow(70);
```

When you update styles that change text size use:
```js
$('#myTextField').autoGrow();
```

You can also update comfort zone:
```js
$('#myTextField').autoGrow(newComfortZone);
```

To disable autogrowing:
```js
$('#myTextField').autoGrow('remove');
// or
$('#myTextField').autoGrow(false);
// or
$('#myTextField').autoGrow({remove: true});
```

Limiting width
--------------

To limit width use css properties `min-width` and `max-width`.
When `min-width` is set to `0px` (default browser value),
minimum width is limited to current width.


Animating
---------

If you wish smoothly resize textfields use following styles:
```css
#myTextField {
  transition: width 100ms linear;
}
```

Do not forget to add vendor prefixes for transition.

License
-------

Copyright © 2012—2013 Roman Kivalin

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the “Software”),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom
the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH
THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
