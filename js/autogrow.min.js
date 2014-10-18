/*
autogrow.js - Copyright (C) 2014, Jason Edelman <edelman.jason@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and 
associated documentation files (the "Software"), to deal in the Software without restriction, including 
without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is furnished to 
do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
DEALINGS IN THE SOFTWARE.
*/
;(function(e){e.fn.autogrow=function(t){function s(n){var r=e(this),i=r.innerHeight(),s=this.scrollHeight,o=r.data("autogrow-start-height")||0,u;if(i<s){this.scrollTop=0;t.animate?r.stop().animate({height:s},t.speed):r.innerHeight(s)}else if(!n||n.which==8||n.which==46||n.ctrlKey&&n.which==88){if(i>o){u=r.clone().addClass(t.cloneClass).css({position:"absolute",zIndex:-10,height:""}).val(r.val());r.after(u);do{s=u[0].scrollHeight-1;u.innerHeight(s)}while(s===u[0].scrollHeight);s++;u.remove();r.focus();s<o&&(s=o);i>s&&t.animate?r.stop().animate({height:s},t.speed):r.innerHeight(s)}else{r.innerHeight(o)}}}var n=e(this).css({overflow:"hidden",resize:"none"}),r=n.selector,i={context:e(document),animate:true,speed:200,fixMinHeight:true,cloneClass:"autogrowclone",onInitialize:false};t=e.isPlainObject(t)?t:{context:t?t:e(document)};t=e.extend({},i,t);n.each(function(n,r){var i,o;r=e(r);if(r.is(":visible")||parseInt(r.css("height"),10)>0){i=parseInt(r.css("height"),10)||r.innerHeight()}else{o=r.clone().addClass(t.cloneClass).val(r.val()).css({position:"absolute",visibility:"hidden",display:"block"});e("body").append(o);i=o.innerHeight();o.remove()}if(t.fixMinHeight){r.data("autogrow-start-height",i)}r.css("height",i);if(t.onInitialize){s.call(r)}});t.context.on("keyup paste",r,s);return n}})(jQuery);
