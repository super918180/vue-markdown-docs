(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["md4","md11"],{"8b66":function(e,t,r){"use strict";var o=r("8fa1"),n=r.n(o);n.a},"8fa1":function(e,t,r){var o=r("cf00");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=r("85cb").default;n("12f7d564",o,!0,{sourceMap:!1,shadowMode:!1})},b1c7:function(e,t,r){"use strict";r.r(t),r.d(t,"refactorHn",function(){return o}),r.d(t,"goHash",function(){return n});r("25d7"),r("3a0f"),r("a3a3"),r("4d0b");(function(e){e.forEach(function(e){e.prepend=e.prepend||function(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach(function(e){var r=e instanceof Node;t.appendChild(r?e:document.createTextNode(String(e)))}),this.insertBefore(t,this.firstChild)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]);var o=function(e){var t=[];return["h1","h2","h3"].map(function(r){e.querySelectorAll(r).forEach(function(e){var o="#".concat(e.innerText);t.push({tag:r,text:e.innerText,href:o});var n=document.createElement("a");n.innerText="#",n.className="header-anchor",n.href=o,e.prepend(n)})}),t};window.addEventListener("click",function(e){var t=e.target;"A"===t.tagName&&t.hash&&n(t.hash)});var n=function(e){var t=document.querySelector(".content").querySelector('a[href="'+decodeURI(e||location.hash)+'"]');t&&window.scrollTo({top:t.parentNode.offsetTop-parseInt(t.parentNode.clientHeight)/2-document.querySelector("header").clientHeight,behavior:"smooth"})}},cf00:function(e,t,r){t=e.exports=r("ed9b")(!1),t.push([e.i,"",""])},f1f8:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("h1",[e._v("vue-router "),r("a",{attrs:{href:"https://circleci.com/gh/vuejs/vue-router"}},[r("img",{attrs:{src:"https://img.shields.io/circleci/project/vuejs/vue-router/dev.svg",alt:"Build Status"}})])]),r("blockquote",[r("p",[e._v("This is vue-router 2.0 which works only with Vue 2.0. For the 1.x router see the "),r("a",{attrs:{href:"https://github.com/vuejs/vue-router/tree/1.0"}},[e._v("1.0 branch")]),e._v(".")])]),r("h3",[e._v("Introduction")]),r("p",[r("code",{pre:!0},[e._v("vue-router")]),e._v(" is the official router for "),r("a",{attrs:{href:"http://vuejs.org"}},[e._v("Vue.js")]),e._v(". It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze. Features include:")]),r("ul",[r("li",[e._v("Nested route/view mapping")]),r("li",[e._v("Modular, component-based router configuration")]),r("li",[e._v("Route params, query, wildcards")]),r("li",[e._v("View transition effects powered by Vue.js' transition system")]),r("li",[e._v("Fine-grained navigation control")]),r("li",[e._v("Links with automatic active CSS classes")]),r("li",[e._v("HTML5 history mode or hash mode, with auto-fallback in IE9")]),r("li",[e._v("Customizable Scroll Behavior")])]),r("p",[e._v("Get started with the "),r("a",{attrs:{href:"http://vuejs.github.io/vue-router"}},[e._v("documentation")]),e._v(", or play with the "),r("a",{attrs:{href:"https://github.com/vuejs/vue-router/tree/dev/examples"}},[e._v("examples")]),e._v(" (see how to run them below).")]),r("h3",[e._v("Development Setup")]),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":"",class:"language-bash"}},[e._v("# install deps\nnpm install\n\n# build dist files\nnpm run build\n\n# serve examples at localhost:8080\nnpm run dev\n\n# lint & run all tests\nnpm test\n\n# serve docs at localhost:8080\nnpm run docs\n")])]),r("h2",[e._v("Questions")]),r("p",[e._v("For questions and support please use the "),r("a",{attrs:{href:"https://chat.vuejs.org"}},[e._v("Discord chat server")]),e._v(" or "),r("a",{attrs:{href:"http://forum.vuejs.org"}},[e._v("the official forum")]),e._v(". The issue list of this repo is "),r("strong",[e._v("exclusively")]),e._v(" for bug reports and feature requests.")]),r("h2",[e._v("Issues")]),r("p",[e._v("Please make sure to read the "),r("a",{attrs:{href:"https://github.com/vuejs/vue/blob/dev/.github/CONTRIBUTING.md#issue-reporting-guidelines"}},[e._v("Issue Reporting Checklist")]),e._v(" before opening an issue. Issues not conforming to the guidelines may be closed immediately.")]),r("h2",[e._v("Contribution")]),r("p",[e._v("Please make sure to read the "),r("a",{attrs:{href:"https://github.com/vuejs/vue/blob/dev/.github/CONTRIBUTING.md"}},[e._v("Contributing Guide")]),e._v(" before making a pull request.")]),r("h2",[e._v("Changelog")]),r("p",[e._v("Details changes for each release are documented in the "),r("a",{attrs:{href:"https://github.com/vuejs/vue-router/releases"}},[e._v("release notes")]),e._v(".")]),r("h2",[e._v("Stay In Touch")]),r("ul",[r("li",[e._v("For latest releases and announcements, follow on Twitter: "),r("a",{attrs:{href:"https://twitter.com/vuejs"}},[e._v("@vuejs")])])]),r("h2",[e._v("License")]),r("p",[r("a",{attrs:{href:"http://opensource.org/licenses/MIT"}},[e._v("MIT")])]),r("p",[e._v("Copyright (c) 2013-present Evan You")])])}],s=r("b1c7"),a={mounted:function(){this.$emit("markdown",Object(s["refactorHn"])(this.$root.$el)),Object(s["goHash"])()}},i=a,u=(r("8b66"),r("048f")),c=Object(u["a"])(i,o,n,!1,null,null,null);c.options.__file="vue-router.md";t["default"]=c.exports}}]);