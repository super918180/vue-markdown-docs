(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["md1"],{"19b2":function(s,t,a){"use strict";var n=a("73a9"),e=a.n(n);e.a},"73a9":function(s,t,a){var n=a("a3c1");"string"===typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);var e=a("85cb").default;e("eecbd7f2",n,!0,{sourceMap:!1,shadowMode:!1})},a3c1:function(s,t,a){t=s.exports=a("ed9b")(!1),t.push([s.i,"",""])},b1c7:function(s,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return e});a("25d7");(function(s){s.forEach(function(s){s.prepend=s.prepend||function(){var s=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();s.forEach(function(s){var a=s instanceof Node;t.appendChild(a?s:document.createTextNode(String(s)))}),this.insertBefore(t,this.firstChild)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]);var n=function(s){var t=[];return["h1","h2","h3"].map(function(a){s.querySelectorAll(a).forEach(function(s){var n="#".concat(s.innerText);t.push({tag:a,text:s.innerText,href:n});var e=document.createElement("a");e.innerText="#",e.className="header-anchor",e.href=n,s.prepend(e)})}),t};window.addEventListener("click",function(s){var t=s.target;"A"===t.tagName&&t.hash&&e(t.hash)});var e=function(s){var t=document.querySelector(".content").querySelector('a[href="'+decodeURI(s||location.hash)+'"]');t&&window.scrollTo({top:t.parentNode.offsetTop-parseInt(t.parentNode.clientHeight)/2-document.querySelector("header").clientHeight,behavior:"smooth"})}},d3fa:function(s,t,a){"use strict";a.r(t);var n=function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},e=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h2"),a("h3",[s._v("AMD")]),a("p",[a("code",{pre:!0},[s._v("Asynchronous")]),s._v(" Module Definition (AMD)")]),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-JavaScript"}},[a("span",{attrs:{class:"hljs-comment"}},[s._v("// filename: foo.js")]),s._v("\ndefine(["),a("span",{attrs:{class:"hljs-string"}},[s._v("'jquery'")]),s._v("], "),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),a("span",{attrs:{class:"hljs-params"}},[s._v("$")]),s._v(") ")]),s._v("{\n  "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// methods")]),s._v("\n  "),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"hljs-title"}},[s._v("myFunc")]),s._v("("),a("span",{attrs:{class:"hljs-params"}}),s._v(")")]),s._v("{}\n  "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// exposed public methods")]),s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" myFunc\n});\n")])]),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-JavaScript"}},[a("span",{attrs:{class:"hljs-comment"}},[s._v("//  filename: foo.js")]),s._v("\ndefine(["),a("span",{attrs:{class:"hljs-string"}},[s._v("'jquery'")]),s._v(", "),a("span",{attrs:{class:"hljs-string"}},[s._v("'underscore'")]),s._v("], "),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),a("span",{attrs:{class:"hljs-params"}},[s._v("$, _")]),s._v(") ")]),s._v("{\n  "),a("span",{attrs:{class:"hljs-comment"}},[s._v("//  methods")]),s._v("\n  "),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"hljs-title"}},[s._v("a")]),s._v("("),a("span",{attrs:{class:"hljs-params"}}),s._v(")")]),s._v("{}  "),a("span",{attrs:{class:"hljs-comment"}},[s._v("//  private because it's not returned (see below)")]),s._v("\n  "),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"hljs-title"}},[s._v("b")]),s._v("("),a("span",{attrs:{class:"hljs-params"}}),s._v(")")]),s._v("{}  "),a("span",{attrs:{class:"hljs-comment"}},[s._v("//  public because it's returned")]),s._v("\n  "),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"hljs-title"}},[s._v("c")]),s._v("("),a("span",{attrs:{class:"hljs-params"}}),s._v(")")]),s._v("{}  "),a("span",{attrs:{class:"hljs-comment"}},[s._v("//  public because it's returned")]),s._v("\n  "),a("span",{attrs:{class:"hljs-comment"}},[s._v("//  exposed public methods")]),s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("b")]),s._v(": b,\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("c")]),s._v(": c\n  }\n});\n")])]),a("h3",[s._v("Common JS")]),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-JavaScript"}},[a("span",{attrs:{class:"hljs-comment"}},[s._v("//  filename: foo.js")]),s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" $ = "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),a("span",{attrs:{class:"hljs-string"}},[s._v("'jquery'")]),s._v(");\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" _ = "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("require")]),s._v("("),a("span",{attrs:{class:"hljs-string"}},[s._v("'underscore'")]),s._v(");\n"),a("span",{attrs:{class:"hljs-comment"}},[s._v("//  methods")]),s._v("\n"),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"hljs-title"}},[s._v("a")]),s._v("("),a("span",{attrs:{class:"hljs-params"}}),s._v(")")]),s._v("{}  "),a("span",{attrs:{class:"hljs-comment"}},[s._v("//  private because it's omitted from module.exports (see below)")]),s._v("\n"),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"hljs-title"}},[s._v("b")]),s._v("("),a("span",{attrs:{class:"hljs-params"}}),s._v(")")]),s._v("{}  "),a("span",{attrs:{class:"hljs-comment"}},[s._v("//  public because it's defined in module.exports")]),s._v("\n"),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"hljs-title"}},[s._v("c")]),s._v("("),a("span",{attrs:{class:"hljs-params"}}),s._v(")")]),s._v("{}  "),a("span",{attrs:{class:"hljs-comment"}},[s._v("//  public because it's defined in module.exports")]),s._v("\n"),a("span",{attrs:{class:"hljs-comment"}},[s._v("//  exposed public methods")]),s._v("\n"),a("span",{attrs:{class:"hljs-built_in"}},[s._v("module")]),s._v(".exports = {\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("b")]),s._v(": b,\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("c")]),s._v(": c\n}\n")])]),a("h3",[s._v("UMD")]),a("p",[a("code",{pre:!0},[s._v("Universal")]),s._v(" Module Definition")]),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-JavaScript"}},[s._v("("),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),a("span",{attrs:{class:"hljs-params"}},[s._v("global, factory")]),s._v(") ")]),s._v("{\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" ("),a("span",{attrs:{class:"hljs-keyword"}},[s._v("typeof")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" === "),a("span",{attrs:{class:"hljs-string"}},[s._v("'object && typeof module !== '")]),a("span",{attrs:{class:"hljs-literal"}},[s._v("undefined")]),a("span",{attrs:{class:"hljs-string"}},[s._v("') {\n    // AMD\n    defined(factory)\n  } else if (typeof define === '")]),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("' && "),a("span",{attrs:{class:"hljs-title"}},[s._v("define")]),s._v("."),a("span",{attrs:{class:"hljs-title"}},[s._v("amd")]),s._v(") ")]),s._v("{\n    "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// Node, CommonJS-like")]),s._v("\n    "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("module")]),s._v(".exports = factory()\n  } "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("else")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// Broswer globals (root is window)")]),s._v("\n    global.vue = factory()\n  }\n})("),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(", "),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),a("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n  "),a("span",{attrs:{class:"hljs-comment"}},[s._v("// vue")]),s._v("\n})\n")])])])}],r=(a("3a0f"),a("a3a3"),a("4d0b"),a("b1c7")),l={mounted:function(){this.$emit("markdown",Object(r["b"])(this.$root.$el)),Object(r["a"])()}},c=l,o=(a("19b2"),a("048f")),v=Object(o["a"])(c,n,e,!1,null,null,null);v.options.__file="AMD-UMD-CommonJS.md";t["default"]=v.exports}}]);