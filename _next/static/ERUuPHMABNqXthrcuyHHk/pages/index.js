(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI")),o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery;return n||a&&(void 0!==o&&o)}t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI")),o=r(n("Xuae")),i=n("lwAK"),l=n("FYa8"),s=n("/0+H");function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=u;var p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(c,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var l=0,s=p.length;l<s;l++){var u=p[l];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var c=a.props[u],f=r[u]||new Set;f.has(c)?o=!1:(f.add(c),r[u]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}var d=o.default();function m(e){var t=e.children;return a.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return a.default.createElement(l.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(d,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:s.isInAmpMode(e)},t)}))}))}m.rewind=d.rewind,t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI"));t.HeadManagerContext=a.createContext(null)},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),i=n.n(o),l=a.a.createElement,s=function(){return l(i.a,null,l("title",null,"D\xeddac Garc\xeda \u2022 Web developer"),l("link",{rel:"apple-touch-icon",href:"/favicon.png",sizes:"254x254"}),l("link",{rel:"icon",sizes:"20x20 32x32 48x48 64x64 128x128 254x254",href:"/favicon.ico"}),l("link",{rel:"icon",sizes:"254x254",href:"/favicon.png"}),l("link",{rel:"stylesheet",href:"/assets/normalize.css"}),l("link",{rel:"stylesheet",href:"/assets/main.css"}),l("link",{rel:"stylesheet",href:"/assets/font-awesome-4.7.0/css/font-awesome.min.css"}),l("link",{rel:"stylesheet",href:"/assets/typography/roboto-mono.css"}),l("link",{rel:"canonical",href:"https://didaquis.github.io"}),l("meta",{name:"author",content:"D\xeddac Garc\xeda"}),l("meta",{name:"description",content:"Web developer"}),l("meta",{property:"og:type",content:"website"}),l("meta",{property:"og:title",content:"D\xeddac Garc\xeda \u2022 Web developer"}),l("meta",{property:"og:url",content:"https://didaquis.github.io"}),l("meta",{property:"og:image",content:"https://didaquis.github.io/images/portrait.jpg"}),l("meta",{property:"og:description",content:"My name is D\xeddac and I'm a full stack web developer"}),l("meta",{property:"og:site_name",content:"D\xeddac Garc\xeda \u2022 Web developer"}),l("meta",{name:"twitter:card",content:"summary"}),l("meta",{name:"twitter:title",content:"D\xeddac Garc\xeda \u2022 Web developer"}),l("meta",{name:"twitter:site",content:"didaquis"}),l("meta",{name:"twitter:url",content:"https://didaquis.github.io"}),l("meta",{name:"twitter:description",content:"My name is D\xeddac and I'm a full stack web developer"}),l("meta",{name:"twitter:image:src",content:"https://didaquis.github.io/images/portrait.jpg"}))},u=a.a.createElement,c=function(){return u("header",null,u("div",{className:"logo-container"},u("span",{className:"logo"})),u("div",{className:"author-container"},u("h1",null,"D\xeddac Garc\xeda")),u("div",{className:"tagline-container"},u("p",null,"Web developer")),u("hr",null),u("ul",{className:"fa-ul main-list"},u("li",{className:"main-list-item"},u("span",{className:"fa fa-github fa-lg main-list-item-icon"}),"\xa0",u("a",{href:"https://github.com/didaquis",target:"_blank",rel:"noopener noreferrer",title:"didaquis on GitHub"},"Explore my GitHub")),u("li",{className:"main-list-item"},u("span",{className:"fa fa-twitter fa-lg main-list-item-icon"}),"\xa0",u("a",{href:"https://twitter.com/didaquis",target:"_blank",rel:"noopener noreferrer",title:"didaquis on Twitter"},"Follow me on Twitter")),u("li",{className:"main-list-item"},u("span",{className:"fa fa-linkedin fa-lg main-list-item-icon"}),"\xa0",u("a",{href:"https://www.linkedin.com/in/didac-garcia/",target:"_blank",rel:"noopener noreferrer",title:"didaquis on LinkedIn"},"Contact me on LinkedIn"))))},p=a.a.createElement,f=function(){return p("main",null,p("section",null,p("h2",null,"About me"),p("p",null,"Hi, my name is D\xeddac and I'm a full stack web developer living halfway between Barcelona and Terrassa."),p("p",null,"I\u2019m interested in creating beautiful projects with JavaScript using MERN Stack (MongoDB, ExpressJS, React, NodeJS)."),p("p",null,"Previously, I worked at ",p("a",{href:"https://worksolutions.es",target:"_blank",rel:"noopener noreferrer",title:"Worksolutions"},"Worksolutions")," as developer (mostly PHP and MySQL) and I studied at ",p("a",{href:"http://www.skylabcoders.com/es",target:"_blank",rel:"noopener noreferrer",title:"Skylab Coders Academy"},"Skylab Coders Academy"),". I'm currently working on a medical project at ",p("a",{href:"http://ditec.es/es/",target:"_blank",rel:"noopener noreferrer",title:"Ditec Comunicaciones"},"Ditec Comunicaciones"),"."),p("p",null,"In my spare time I like improving my skills in Linux and Git or just learn about Node.js, React, GraphQL or anything else. There are so many interesting things in this world, right?"),p("p",null,"When I'm not in front of the computer, I'm probably doing some cool stuff with my Raspberry Pi or I\u2019m out there just rock climbing!",p("br",null),p("span",{className:"smile-face"},"\xaf\\_(\u30c4)_/\xaf"))))},d=a.a.createElement,m=function(){return d("section",{className:"full-width-section"},d("h2",null,"Work History"),d("article",null,d("h3",null,"\ud83d\udee0 Ditec Comunicaciones ",d("span",null,"(April 2018 - present)")),d("p",null,"Innovative operating room solutions for a cutting-edge digital medical environment. Full stack JavaScript development (Node.js, Express, EJS, Socket.io, Jasmine, Nightwatch) and MySQL")),d("article",null,d("h3",null,"\ud83d\udee0 Worksolutions ",d("span",null,"(December 2014 - January 2018)")),d("p",null,"Web development (PHP, MySQL, Bootstrap, JavaScript). Wordpress. WebServices (SOAP). Linux servers management")),d("article",null,d("h3",null,"\ud83d\udee0 Opci\xf3 Racing ",d("span",null,"(2013 - 2014)")),d("p",null,"Web development & webmaster tasks in Prestashop enviroment")))},h=a.a.createElement,y=function(){return h("section",{className:"full-width-section"},h("h2",null,"Education"),h("article",null,h("h3",null,"\ud83d\udcda Professional Scrum Master I"),h("h4",null,"Scrum.org, PSM I certification",h("span",null," (2020)")),h("p",null,"The Professional Scrum Master I (PSM I) certification demonstrates a fundamental level of Scrum mastery. PSM I certificate prove that I understand Scrum as described in the Scrum Guide and how to apply it in Scrum Teams")),h("article",null,h("h3",null,"\ud83d\udcda Full-Stack Web Development Bootcamp"),h("h4",null,"Skylab Coders Academy",h("span",null," (2018)")),h("p",null,"JavaScript (ES6), Sass, Git & Git Flow, agile methodologies, TDD, MERN stack (MongoDB, Express, React, Node)")),h("article",null,h("h3",null,"\ud83d\udcda Development of applications with web technologies"),h("h4",null,"Certificate of professionalism IFCD0210",h("span",null," (2015)")),h("p",null,"Development of web systems in client and server environments. Distributed applications (SOAP, REST, XML)")),h("article",null,h("h3",null,"\ud83d\udcda Websites creation and publishing"),h("h4",null,"Certificate of professionalism IFCD0110",h("span",null," (2013)")),h("p",null,"Websites development with HTML5, CSS3, JavaScript, jQuery and PHP. Web development of forms and interaction with MySQL databases")),h("article",null,h("h3",null,"\ud83d\udcda Microcomputer systems"),h("h4",null,"Certificate of professionalism IFCT0209",h("span",null," (2011)")),h("p",null,"Installation, management and maintenance of operating systems. Installation and configuration of local networks")))},v=a.a.createElement;t.default=function(){return v(a.a.Fragment,null,v(s,null),v("div",{className:"content"},v(c,null),v(f,null),v(m,null),v(y,null)))}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),a=n("PJYZ"),o=n("W8MJ"),i=n("7W2i"),l=n("a1gu"),s=n("Nsbk"),u=n("RIqP");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return l(this,n)}}Object.defineProperty(t,"__esModule",{value:!0});var p=n("q1tI"),f=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(u(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(l){i(u,l);var s=c(u);function u(e){var o;return r(this,u),o=s.call(this,e),f&&(t.add(a(o)),n(a(o))),o}return o(u,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),o(u,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),u}(p.Component))}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI"));t.AmpStateContext=a.createContext({})},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"m0L+":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["m0L+",0,1]]]);