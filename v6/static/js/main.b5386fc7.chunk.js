(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t,a){e.exports=a(265)},128:function(e,t,a){},255:function(e,t){},257:function(e,t){},265:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(116),r=a.n(c),l=(a(125),a(126),a(128),a(10)),i=a(32),o=a.n(i),m=a(62),u=a(117),p=a.n(u),d=function(){return s.a.createElement("svg",{className:"logo",width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("rect",{width:"64",height:"64",fill:"#2C3E50"}),s.a.createElement("path",{d:"M19.0625 28.9688L24.5156 20.25H28.0469L20.8594 31.5312L28.2188 43H24.6562L19.0625 34.125L13.4375 43H9.89062L17.2656 31.5312L10.0625 20.25H13.5781L19.0625 28.9688Z",fill:"#0DBF1F"}),s.a.createElement("path",{d:"M42.4344 39.0156L48.9344 20.25H52.2156L43.7781 43H41.1219L32.7 20.25H35.9656L42.4344 39.0156Z",fill:"#B32010"}),s.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 64L4 60V4H60L64 0H4H0V4V64Z",fill:"#0DBF1F"}),s.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 64H60H64V60V0L60 4V60H4L0 64Z",fill:"#B32010"}))},f=a(118),E=function(e){var t=e.active,a=e.onClick;return s.a.createElement("section",{className:"hero is-black"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"columns is-mobile"},s.a.createElement("div",{className:"column is-1"},s.a.createElement(f.Slider,{className:"button",active:t,onClick:a,borderRadius:4,color:"#fff"})),s.a.createElement("div",{className:"column is-11"},s.a.createElement("div",{className:"hero-center"},s.a.createElement(d,null),s.a.createElement("h1",{className:"title"},"Xunit Viewer"))))))},v=a(36),h={passed:"check",failed:"times",warning:"exclamation",skipped:"ban",unknown:"question"},g=function(e){var t=e.label;return s.a.createElement("div",{className:"field options-search"},s.a.createElement("div",{className:"control"},s.a.createElement("input",{className:"input",type:"text",placeholder:t})))},b=function(e){var t=e.count,a=e.total;return s.a.createElement("div",{className:"options-total"},s.a.createElement("b",null,t),s.a.createElement("span",null,"/",a))},N=function(e){var t=e.type,a=e.total;return 0===a?null:s.a.createElement("div",{className:"options-count"},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fas fa-".concat(h[t]),"aria-hidden":"true"})),s.a.createElement("span",null,a))},y=function(e){var t=e.onIcon,a=(e.offIcon,e.onLabel),n=(e.offLabel,e.disabled);return s.a.createElement("button",{disabled:n,className:"button toggle is-active"},s.a.createElement("div",{className:"toggle-rail"},s.a.createElement("div",{className:"toggle-handle"})),s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fas fa-".concat(t)})),s.a.createElement("span",null,a))},k=function(e){var t=e.label,a=e.type,n=e.disabled;return s.a.createElement("div",{className:"toggles"},s.a.createElement("h6",{className:"title is-6"},a?s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fas fa-".concat(h[a]),"aria-hidden":"true"})):null,s.a.createElement("span",null,Object(v.title)(t||a))),s.a.createElement(y,{onIcon:"eye",offIcon:"eye-slash",onLabel:"Visible",offLabel:"Hidden",disabled:n}),s.a.createElement(y,{onIcon:"chevron-down",offIcon:"chevron-up",onLabel:"Expanded",offLabel:"Contracted",disabled:n}),s.a.createElement(y,{onIcon:"code",offIcon:"align-left",onLabel:"Raw",offLabel:"Pretty",disabled:n}))},w=function(e){var t=e.device,a=e.onClick;return s.a.createElement("button",{onClick:a,className:"card-header-icon is-hidden-".concat(t)},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fas fa-angle-down","aria-hidden":"true"})))},j=function(e){var t=e.label,a=e.count,c=e.total,r=e.counts,i=void 0===r?[]:r,o=e.toggles,m=Object(n.useState)(!1),u=Object(l.a)(m,2),p=u[0],d=u[1];return s.a.createElement("div",{className:"options card is-".concat(p?"active":"inactive")},s.a.createElement("header",{className:"card-header"},s.a.createElement(w,{device:"tablet",onClick:function(){d(!p)}}),s.a.createElement("div",{className:"options-inputs"},s.a.createElement(g,{label:t}),s.a.createElement(b,{count:a,total:c}),i.map(function(e){return s.a.createElement(N,e)})),s.a.createElement(w,{device:"mobile",onClick:function(){d(!p)}})),p?s.a.createElement("div",{className:"card-content"},s.a.createElement("div",{className:"toggles-container"},o.map(function(e){return s.a.createElement(k,Object.assign({},e,{disabled:!p}))}))):null)},O=a(119),x=(a(242),a(243),function(e){var t=e.onClick;return s.a.createElement("button",{className:"card-header-icon",onClick:t},s.a.createElement("h6",{className:"subtitle is-5"},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fas fa-code"})),s.a.createElement("span",null,"Files")),s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fas fa-angle-down"})))}),L=function(e){e.files;var t=Object(n.useState)(!1),a=Object(l.a)(t,2),c=a[0],r=a[1];return s.a.createElement("div",{className:"files card is-".concat(c?"active":"inactive")},s.a.createElement("header",{className:"card-header"},s.a.createElement(x,{device:"tablet",onClick:function(){r(!c)}})),s.a.createElement("div",{className:"card-content"},s.a.createElement("div",{className:"tabs is-boxed"},s.a.createElement("ul",null,s.a.createElement("li",{className:"is-inactive"},s.a.createElement("a",{href:c?"/":null,onClick:function(e){console.log("open file"),e.preventDefault()}},s.a.createElement("span",null,"file.xml"),s.a.createElement("button",{disabled:!c,className:"delete is-small",onClick:function(e){console.log("remove file"),e.stopPropagation(),e.preventDefault()}}))),s.a.createElement("li",{className:"is-active"},s.a.createElement("a",{href:c?"/":null,onClick:function(e){console.log("open file"),e.preventDefault()}},s.a.createElement("span",null,"file.xml"),s.a.createElement("button",{disabled:!c,className:"delete is-small",onClick:function(e){console.log("remove file"),e.stopPropagation(),e.preventDefault()}}))))),s.a.createElement("input",{className:"input files-input",type:"text",defaultValue:"/this/is/the/full/filename.xml",placeholder:"Filename",disabled:!c}),c?s.a.createElement(O.UnControlled,{value:'<?xml version="1.0" encoding="UTF-8"?>\n<testsuite tests="3" failures="1" time="0.0160106">\n    <testcase name="Is An Error" classname="Error" time="0.00075">\n        <error message="There was a error" type="java.lang.RuntimeException">java.lang.RuntimeException: There was an error</error>\n    </testcase>\n</testsuite>',options:{mode:"xml",lineNumbers:!0},onChange:function(e,t,a){t.text}}):null))},C=function(e){var t=e.active,a=e.onIcon,c=e.offIcon,r=e.onLabel,i=e.offLabel,o=e.disabled,m=void 0!==o&&o,u=e.onChange,p=void 0===u?function(){}:u,d=Object(n.useState)(t),f=Object(l.a)(d,2),E=f[0],v=f[1];return s.a.createElement("button",{onClick:function(){v(!E),p(!E)},disabled:m,className:"button toggle is-".concat(E?"active":"inactive")},s.a.createElement("div",{className:"toggle-rail"},s.a.createElement("div",{className:"toggle-handle"})),E?a:c,s.a.createElement("span",null,E?r:i))},_={passed:"check",failure:"times",error:"exclamation",skipped:"ban",unknown:"question"},H=function(e){var t=e.properties,a=e.active,c=void 0!==a&&a,r=Object(n.useState)(c),i=Object(l.a)(r,2),o=i[0],m=i[1];return s.a.createElement("div",{className:"properties card is-".concat(o?"active":"inactive")},s.a.createElement("button",{className:"card-header",onClick:function(){m(!o)}},s.a.createElement("p",{className:"card-header-title"},"Properties"),s.a.createElement("span",{className:"card-header-icon"},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fas fa-angle-down"})))),o?null:s.a.createElement("div",{className:"card-content"},s.a.createElement("table",{className:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Property"),s.a.createElement("th",null,"Value"))),s.a.createElement("tbody",null,Object.keys(t).map(function(e){return s.a.createElement("tr",{key:e},s.a.createElement("td",null,e),s.a.createElement("td",null,t[e]))})))))},I=function(e){var t=e.messages;return s.a.createElement("div",{className:"raw-content"},t.map(function(e,t){return s.a.createElement("pre",{key:"test-message-".concat(t)},e)}))},S=function(e){var t=e.messages;return s.a.createElement("div",{className:"pretty-content"},t.map(function(e,t){return s.a.createElement("div",{key:"test-message-".concat(t),dangerouslySetInnerHTML:{__html:e}})}))},V=function(){return s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fas fa-star"}))},F=function(){return s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fas fa-code"}))},P=function(e){var t=e.messages,a=e.status,c=e.time,r=e.name,i=e.active,o=void 0!==i&&i,m=e.raw,u=void 0===m||m,p=Object(n.useState)(o),d=Object(l.a)(p,2),f=d[0],E=d[1],h=Object(n.useState)(u),g=Object(l.a)(h,2),b=g[0],N=g[1];return s.a.createElement("div",{className:"test card is-".concat(f?"active":"inactive"," is-").concat(a," is-").concat(0===t.length?"empty":"populated")},s.a.createElement("button",{className:"card-header",onClick:function(){E(!f)},disabled:0===t.length},s.a.createElement("p",{className:"card-header-title"},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fas fa-".concat(_[a]||_.unknown),"aria-hidden":"true"})),s.a.createElement("span",null,Object(v.title)(r)),c?s.a.createElement("small",null,"time = ",c):null),t.length>0?s.a.createElement("span",{className:"card-header-icon"},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fas fa-angle-down"}))):null),!f&&t.length>0?s.a.createElement("div",{className:"card-content"},s.a.createElement(C,{active:b,onLabel:"raw",onIcon:s.a.createElement(F,null),offIcon:s.a.createElement(V,null),offLabel:"pretty",onChange:function(e){return N(e)}}),b?s.a.createElement(I,{messages:t}):s.a.createElement(S,{messages:t})):null)},R=function(e){var t=e.count,a=e.type;return t>0?s.a.createElement("span",{className:"suite-count"},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fas fa-".concat(_[a]),"aria-hidden":"true"})),t):null},T=function(e){var t=e.name,a=e.active,c=void 0!==a&&a,r=e.properties,i=void 0===r?{}:r,o=e.time,m=e.tests,u=void 0===m?{}:m,p=0,d=0,f=0,E=0,h=0;Object.keys(u).forEach(function(e){var t=u[e].status;"passed"===t?p+=1:"failure"===t?d+=1:"skipped"===t?f+=1:"error"===t?E+=1:h+=1});var g=Object.keys(u).length>0,b=Object.keys(i).length>0,N=g||b,y=Object(n.useState)(c),k=Object(l.a)(y,2),w=k[0],j=k[1];return s.a.createElement("div",{className:"card suite is-".concat(w?"active":"inactive"," is-").concat(N?"populated":"empty")},s.a.createElement("button",{className:"card-header",onClick:function(){N&&j(!w)},disabled:!N},s.a.createElement("p",{className:"card-header-title"},s.a.createElement("span",null,Object(v.title)(t)),o?s.a.createElement("small",null,"time = ",o):null),N?s.a.createElement("span",{className:"card-header-icon"},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fas fa-angle-down"}))):null,N?s.a.createElement("p",{className:"suite-count-container"},s.a.createElement(R,{type:"failure",count:d}),s.a.createElement(R,{type:"error",count:E}),s.a.createElement(R,{type:"passed",count:p}),s.a.createElement(R,{type:"skipped",count:f}),s.a.createElement(R,{type:"unknown",count:h})):null),!w&&N?s.a.createElement("div",{className:"card-content"},s.a.createElement("div",{className:"content"},b?s.a.createElement(H,{properties:i}):null,s.a.createElement("div",null,Object.keys(u).filter(function(e){return"failure"===u[e].status}).map(function(e){return s.a.createElement(P,Object.assign({key:e},u[e]))}),Object.keys(u).filter(function(e){return"error"===u[e].status}).map(function(e){return s.a.createElement(P,Object.assign({key:e},u[e]))}),Object.keys(u).filter(function(e){return"passed"===u[e].status}).map(function(e){return s.a.createElement(P,Object.assign({key:e},u[e]))}),Object.keys(u).filter(function(e){return"skipped"===u[e].status}).map(function(e){return s.a.createElement(P,Object.assign({key:e},u[e]))}),Object.keys(u).filter(function(e){return!["failure","error","passed","skipped"].includes(u[e].status)}).map(function(e){return s.a.createElement(P,Object.assign({key:e},u[e]))})))):null)},$=a(244),M=function(e){return new Promise(function(t,a){$.parseString(e,function(e,n){e?a(new Error(e)):t(n)})})},A=function(e){var t=0;if(0===e.length)return t;for(var a=0;a<e.length;a++){t=(t<<5)-t+e.charCodeAt(a),t&=t}return t},B=function e(t,a,n){a.tests=a.tests||{},n.forEach(function(n){var s=n.$||{},c=s.name||"No Name",r=s.time||0,l=A(c),i=a.tests[l]||{id:l,name:c,messages:[]};if(i.time=r,"string"===typeof n&&i.messages.push(n.trim()),n._&&i.messages.push(n._.trim()),s.message&&i.messages.push(n.$.message.trim()),"string"!==typeof n){var o=Object.keys(n).filter(function(e){return"$"!==e&&"_"!==e&&"testcase"!==e})[0];o&&function(e,t){t.forEach(function(t){t._&&e.messages.push(t._.trim()),t.$&&t.$.message&&e.messages.push(t.$.message.trim())})}(i,n[o]),i.status=o||"passed"}i.messages=i.messages.filter(function(e){return""!==e}),a.tests[l]=i,"undefined"!==typeof n.testcase&&e(t,a,n.testcase),"undefined"!==typeof n.testsuite&&D(t,n.testsuite)})},D=function(e,t){Array.isArray(t)||(t=[t]),t.forEach(function(t){var a=function(e,t){var a=t.$||{},n=a.name||"No Name",s=A(n),c=e.suites[s]||{};return c.tests=c.tests||{},c.id=s,c.name=n,c.time=a.time||0,c}(e,t);"undefined"!==typeof t.properties&&function(e,t){e.properties=e.properties||{},t.properties.forEach(function(t){"string"===typeof t?""!==(t=t.trim())&&(e.properties["No Name"]=e.properties["No Name"]||[],e.properties["No Name"].push(t)):t.property.forEach(function(t){var a=t.$||{},n=a.name||"No Name",s=a.value||t._;"string"===typeof t&&(s=t),s=(s=s||"").trim(),e.properties[n]=e.properties[n]||[],s&&e.properties[n].push(s)})})}(a,t),"undefined"!==typeof t.testcase&&B(e,a,t.testcase),e.suites[a.id]=a})},Z=function e(t,a){Array.isArray(a)||(a=[a]),a.forEach(function(a){D(t,a),"undefined"!==typeof a.testsuite&&e(t,a.testsuite)})},U=function(){var e=Object(m.a)(o.a.mark(function e(t){var a,n,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={suites:{}},e.next=3,M(t);case 3:return(n=e.sent).testsuites?(s=n.testsuites.testsuite,Z(a,s)):n.testsuite&&Z(a,n.testsuite),e.abrupt("return",a);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),q=[{key:"suites",label:"Suites",term:"",active:!1,count:0,total:0,counts:[],toggles:[{key:"all",label:"all",visible:!0,expanded:!0,raw:!0}]},{key:"tests",label:"Tests",term:"",active:!1,count:0,total:0,counts:[],toggles:[{key:"all",label:"all",visible:!0,expanded:!0,raw:!0}]},{key:"properties",label:"Properties",term:"",active:!1,count:0,total:0,counts:[],toggles:[{key:"all",label:"all",visible:!0,expanded:!0,raw:!0}]}],J=function(e){var t=e.files,a=Object(n.useState)({}),c=Object(l.a)(a,2),r=c[0],i=c[1];0===Object.keys(r).length&&function(e,t){return new Promise(function(){var a=Object(m.a)(o.a.mark(function a(n){var s,c,r,l,i,m,u,d,f,E;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:s=!0,c=!1,r=void 0,a.prev=3,l=e[Symbol.iterator]();case 5:if(s=(i=l.next()).done){a.next=16;break}return m=i.value,u=m.contents,a.next=10,U(u);case 10:for(f in(d=a.sent).suites)E=d.suites[f],t[f]=t[f]||{},t[f]=p.a.recursive(t[f],E);n(t);case 13:s=!0,a.next=5;break;case 16:a.next=22;break;case 18:a.prev=18,a.t0=a.catch(3),c=!0,r=a.t0;case 22:a.prev=22,a.prev=23,s||null==l.return||l.return();case 25:if(a.prev=25,!c){a.next=28;break}throw r;case 28:return a.finish(25);case 29:return a.finish(22);case 30:case"end":return a.stop()}},a,null,[[3,18,22,30],[23,,25,29]])}));return function(e){return a.apply(this,arguments)}}())}(t,{}).then(i);var u=Object(n.useState)(q),d=Object(l.a)(u,1)[0],f=Object(n.useState)(!1),v=Object(l.a)(f,2),h=v[0],g=v[1];return s.a.createElement("div",null,s.a.createElement(E,{active:h,onClick:function(){g(!h)}}),s.a.createElement("header",{className:"is-".concat(h?"shown":"hidden")},s.a.createElement("div",{className:"container"},d.map(function(e){return s.a.createElement(j,e)}),s.a.createElement(L,{files:t}))),s.a.createElement("main",null,s.a.createElement("div",{className:"container"},s.a.createElement("div",null,Object.values(r).map(function(e){return s.a.createElement(T,Object.assign({key:e.id},e))})))))};r.a.render(s.a.createElement(J,{files:[{file:"/path/to/file/complete.xml",contents:'<?xml version="1.0" encoding="UTF-8" ?>\n<testsuites>\n    <testsuite name="suite with properties" time="100">\n        <properties>\n            <property name="first_name" value="first_value" />\n            <property name="second_name" value="second_name" />\n        </properties>\n        <properties>\n            <property name="third_name" value="third_name" />\n        </properties>\n        <properties></properties>\n        <testcase name="random test name">\n            <passed></passed>\n        </testcase>\n    </testsuite>\n    <testsuite name="suite with no properties">\n        <testcase name="random test name">\n            <passed></passed>\n        </testcase>\n    </testsuite>\n    <testsuite name="suite with each kind of test">\n        <testcase name="passed with a message" time="666">\n            <passed>inner message</passed>\n        </testcase>\n        <testcase name="error with a message" time="12.3456789">\n            <error>inner message</error>\n        </testcase>\n        <testcase name="skipped with a message">\n            <skipped>inner message</skipped>\n        </testcase>\n        <testcase name="failure with a message">\n            <failure>inner message</failure>\n        </testcase>\n        <testcase name="test with no type">inner message</testcase>\n        <testcase name="test with no type or message or inner message"></testcase>\n        <testcase>no name</testcase>\n        <testcase></testcase>\n        <testcase name="multiple messages">\n            <error>first message</error>\n            <error>second message</error>\n        </testcase>\n        <testcase name="test no inner message">\n            <failure message="message" type="type"></failure>\n        </testcase>\n        <testcase name="test with no message type">\n            <skipped message="message"></skipped>\n        </testcase>\n        <testcase name="test with no message">\n            <skipped type="type"></skipped>\n        </testcase>\n        <testcase name="test with HTML">\n            <error>&lt;i&gt;inner&lt;/i&gt;&lt;b&gt;message&lt;/b&gt;</error>\n        </testcase>\n        <testcase name="test with message and message type with HTML">\n            <failure message="<b>message</b>" type="<i>type</i>"></failure>\n        </testcase>\n        <testcase name="test with message and message type and inner message">\n            <error message="message" type="type">inner message</error>\n        </testcase>\n        <testcase name="test with a different classname" classname="test with own class name">\n            <passed></passed>\n        </testcase>\n        <testcase name="test with properties other than name or classname" property="prop_value" property_float="0.1234567890123456789">\n            <passed></passed>\n        </testcase>\n    </testsuite>\n    <testsuite>\n        <testcase name="test in a suite with no name">\n            <passed></passed>\n        </testcase>\n    </testsuite>\n    <testsuite name="suite with properties other than name" property="prop_value" property_float="0.1234567890123456789">\n        <testcase name="random test">\n            <passed></passed>\n        </testcase>\n    </testsuite>\n    <testsuite name="suite with no tests">\n    </testsuite>\n    <testsuite name="suite with only properties">\n        <properties>\n            <property name="first_name" value="first_value" />\n        </properties>\n    </testsuite>\n    <testsuite></testsuite>\n    <testsuite>\n        <testcase></testcase>\n    </testsuite>\n    <testsuite name="parent">\n        <testcase name="parent test"></testcase>\n        <testsuite name="child one">\n            <testcase name="child one test"></testcase>\n        </testsuite>\n        <testsuite name="child two">\n            <testcase name="child two test"></testcase>\n            <testsuite name="child of child two">\n                <testcase name="child of child two test"></testcase>\n            </testsuite>\n        </testsuite>\n        <testsuite>\n            <testcase name="child one test"></testcase>\n        </testsuite>\n    </testsuite>\n</testsuites>'}]}),document.getElementById("root"))}},[[120,1,2]]]);
//# sourceMappingURL=main.b5386fc7.chunk.js.map