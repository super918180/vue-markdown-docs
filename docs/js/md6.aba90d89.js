(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["md6"],{"1f8f":function(e,t,n){var o=n("d396");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("85cb").default;r("96e56606",o,!0,{sourceMap:!1,shadowMode:!1})},"35d7":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h2",[e._v("Cross-site scripting")]),n("p",[n("code",{pre:!0},[e._v("non-persistent XSS")]),e._v(", "),n("code",{pre:!0},[e._v("persistent XSS")]),e._v(", "),n("code",{pre:!0},[e._v("DOM Based XSS")])]),n("h3",[e._v("Escape")]),n("h3",[e._v("Whitelisting DOM")]),n("h3",[e._v("Content Security Policy (CSP)")]),n("h4",[e._v("Content-Security-Policy")])])}],c=(n("3a0f"),n("a3a3"),n("4d0b"),n("b1c7")),a={mounted:function(){this.$emit("markdown",Object(c["b"])(this.$root.$el)),Object(c["a"])()}},i=a,s=(n("3aad"),n("048f")),u=Object(s["a"])(i,o,r,!1,null,null,null);u.options.__file="XSS.md";t["default"]=u.exports},"3aad":function(e,t,n){"use strict";var o=n("1f8f"),r=n.n(o);r.a},b1c7:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return r});n("25d7");(function(e){e.forEach(function(e){e.prepend=e.prepend||function(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach(function(e){var n=e instanceof Node;t.appendChild(n?e:document.createTextNode(String(e)))}),this.insertBefore(t,this.firstChild)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]);var o=function(e){var t=[];return["h1","h2","h3"].map(function(n){e.querySelectorAll(n).forEach(function(e){var o="#".concat(e.innerText);t.push({tag:n,text:e.innerText,href:o});var r=document.createElement("a");r.innerText="#",r.className="header-anchor",r.href=o,e.prepend(r)})}),t};window.addEventListener("click",function(e){var t=e.target;"A"===t.tagName&&t.hash&&r(t.hash)});var r=function(e){var t=document.querySelector(".content").querySelector('a[href="'+decodeURI(e||location.hash)+'"]');t&&window.scrollTo({top:t.parentNode.offsetTop-parseInt(t.parentNode.clientHeight)/2-document.querySelector("header").clientHeight,behavior:"smooth"})}},d396:function(e,t,n){t=e.exports=n("ed9b")(!1),t.push([e.i,"",""])}}]);