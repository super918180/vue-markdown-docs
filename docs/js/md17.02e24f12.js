(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["md17"],{"1c93":function(t,e,s){e=t.exports=s("690e")(!1),e.push([t.i,"",""])},"434b":function(t,e,s){var n=s("1c93");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=s("85cb").default;a("7c8fc9ce",n,!0,{sourceMap:!1,shadowMode:!1})},"47a7":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("h2",[t._v("Memory Leak")]),s("h3",[t._v("Garbage Collected")]),s("p",[s("code",{pre:!0},[t._v("reference counting")]),t._v(", when the count reaches zero")]),s("h3",[t._v("Accidental Global variables")]),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-JavaScript"}},[s("span",{attrs:{class:"hljs-function"}},[s("span",{attrs:{class:"hljs-keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"hljs-title"}},[t._v("foo")]),t._v(" ("),s("span",{attrs:{class:"hljs-params"}}),t._v(") ")]),t._v("{\n    bar = "),s("span",{attrs:{class:"hljs-string"}},[t._v("'this is a hidden global variables'")]),t._v("\n}\n")])]),s("p",[s("em",[t._v("in fact, it's:")])]),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-JavaScript"}},[s("span",{attrs:{class:"hljs-function"}},[s("span",{attrs:{class:"hljs-keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"hljs-title"}},[t._v("foo")]),t._v(" ("),s("span",{attrs:{class:"hljs-params"}}),t._v(") ")]),t._v("{\n    "),s("span",{attrs:{class:"hljs-built_in"}},[t._v("window")]),t._v(".bar = "),s("span",{attrs:{class:"hljs-string"}},[t._v("'this is a hidden global variables'")]),t._v("\n}\n")])]),s("p",[t._v("to avoid, add "),s("code",{pre:!0},[t._v("use strict")])]),s("h3",[t._v("Forgotten timers or callbacks")]),s("p",[s("code",{pre:!0},[t._v("setInterval")]),t._v(", "),s("code",{pre:!0},[t._v("on")]),t._v(", "),s("code",{pre:!0},[t._v("addEventListener")])]),s("h3",[t._v("Out of DOM references")]),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-JavaScript"}},[s("span",{attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" elements = {\n    "),s("span",{attrs:{class:"hljs-attr"}},[t._v("button")]),t._v(": "),s("span",{attrs:{class:"hljs-built_in"}},[t._v("document")]),t._v(".getElementById("),s("span",{attrs:{class:"hljs-string"}},[t._v("'button'")]),t._v(")\n}\n\n"),s("span",{attrs:{class:"hljs-function"}},[s("span",{attrs:{class:"hljs-keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"hljs-title"}},[t._v("removeButton")]),t._v(" ("),s("span",{attrs:{class:"hljs-params"}}),t._v(") ")]),t._v("{\n    "),s("span",{attrs:{class:"hljs-comment"}},[t._v("// direct child of body")]),t._v("\n    "),s("span",{attrs:{class:"hljs-built_in"}},[t._v("document")]),t._v(".body.removeChild("),s("span",{attrs:{class:"hljs-built_in"}},[t._v("document")]),t._v(".getElementById("),s("span",{attrs:{class:"hljs-string"}},[t._v("'button'")]),t._v("))\n    "),s("span",{attrs:{class:"hljs-comment"}},[t._v("// after remove, still a reference to #button")]),t._v("\n    "),s("span",{attrs:{class:"hljs-comment"}},[t._v("// the button element is still in memory")]),t._v("\n    "),s("span",{attrs:{class:"hljs-comment"}},[t._v("// and can not be collected by GC")]),t._v("\n}\n")])]),s("h3",[t._v("Closures")])])}],r=(s("3a0f"),s("a3a3"),s("4d0b"),s("b1c7")),c={mounted:function(){this.$emit("markdown",Object(r["b"])(this.$root.$el)),Object(r["a"])()}},o=c,l=(s("5263"),s("048f")),i=Object(l["a"])(o,n,a,!1,null,null,null);i.options.__file="memory-leak.md";e["default"]=i.exports},5263:function(t,e,s){"use strict";var n=s("434b"),a=s.n(n);a.a},b1c7:function(t,e,s){"use strict";s.d(e,"b",function(){return n}),s.d(e,"a",function(){return a});s("25d7");(function(t){t.forEach(function(t){t.prepend=t.prepend||function(){var t=Array.prototype.slice.call(arguments),e=document.createDocumentFragment();t.forEach(function(t){var s=t instanceof Node;e.appendChild(s?t:document.createTextNode(String(t)))}),this.insertBefore(e,this.firstChild)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]);var n=function(t){var e=[];return["h1","h2","h3"].map(function(s){t.querySelectorAll(s).forEach(function(t){var n="#".concat(t.innerText);e.push({tag:s,text:t.innerText,href:n});var a=document.createElement("a");a.innerText="#",a.className="header-anchor",a.href=n,t.prepend(a)})}),e};window.addEventListener("click",function(t){var e=t.target;"A"===e.tagName&&e.hash&&a(e.hash)});var a=function(t){var e=document.querySelector(".content").querySelector('a[href="'+decodeURI(t||location.hash)+'"]');e&&window.scrollTo({top:e.parentNode.offsetTop-parseInt(e.parentNode.clientHeight)/2-document.querySelector("header").clientHeight,behavior:"smooth"})}}}]);