(this["webpackJsonptest-task-involve"]=this["webpackJsonptest-task-involve"]||[]).push([[5],{107:function(t,e,n){t.exports={modalLoader:"LoaderInput_modalLoader__Ad2FP"}},122:function(t,e,n){"use strict";n.r(e);var a,r,o,c,i,u=n(0),s=n(28),b=n(4),d=n(55),l=n(18),p=n(7),f=n(26),h=n(27),x=h.b.div(a||(a=Object(f.a)(['\n  margin: 28px 32px;\n  & h3 {\n    font-family: "Roboto-700";\n    font-style: normal;\n    font-weight: bold;\n    font-size: 48px;\n    line-height: 56px;\n  }\n']))),j=h.b.div(r||(r=Object(f.a)(['\n  width: 313px;\n  height: 46px;\n  margin-top: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  border: 1px solid #cbcbcb;\n  border-radius: 5px;\n  & input {\n    width: 313px;\n    height: 44px;\n\n    padding-left: 20px;\n    border: none;\n    border-radius: 5px;\n    outline: none;\n    display: block;\n    font-family: "Roboto-400";\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 19px;\n    letter-spacing: 0em;\n    text-align: left;\n  }\n']))),v={option:function(t,e){return Object(p.a)(Object(p.a)({},t),{},{padding:5,fontSize:18,fontFamily:"Roboto-500",fontStyle:"normal",fontWeight:500,textAlign:"left"})},control:function(t,e){return{border:e.menuIsOpen?"1px solid #58B4AE":"1px solid #CBCBCB",borderRadius:4,width:313,height:46,display:"flex",flexDirection:"row",justifyContent:"space-between",fontSize:18,fontFamily:"Roboto-500",fontStyle:"normal",fontWeight:500,textAlign:"left"}},menu:function(t,e){return Object(p.a)(Object(p.a)({},t),{},{width:313,boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.16)",borderRadius:4,color:e.selectProps.menuColor,padding:5})},singleValue:function(t,e){var n=e.isDisabled?.5:1;return Object(p.a)(Object(p.a)({},t),{},{opacity:n,transition:"opacity 300ms"})},dropdownIndicator:function(t,e){return Object(p.a)(Object(p.a)({},t),{},{transition:"all .2s ease",transform:e.selectProps.menuIsOpen?"rotate(180deg)":null})}},m=n(121),w=n(2),y=n(108),O=n(56),g=n(88),M=n.n(g),P=n(107),k=n.n(P),C=n(5),A=function(){return Object(C.jsx)("div",{className:k.a.modalLoader,children:Object(C.jsx)(M.a,{className:k.a.loader,type:"TailSpin",color:"#3E7E7C",height:18,width:18})})},B=n(52),N=function(t){var e=t.payment,n=t.methods,a=t.currentAmount,r=Object(s.b)(),o=Object(s.c)((function(t){return Object(B.b)(t)})),c=Object(s.c)((function(t){return Object(B.c)(t)})),i=c.sell,u=c.buy,b=c.loadingInput,l=o.invoice,f=o.withdraw,h=Object(y.useDebouncedCallback)((function(t){r(Object(d.b)())}),300);return Object(C.jsxs)(x,{children:[Object(C.jsx)("h3",{children:"invoice"===e&&"Sell"}),Object(C.jsx)("h3",{children:"withdraw"===e&&"Buy"}),n.length>0&&Object(C.jsx)(m.a,{className:"basic-single",classNamePrefix:"select","data-base":e,defaultValue:function(){if("invoice"===e){var t=Object(O.a)(i.invoicePayMethod,l);return{value:t.id,label:t.name}}if("withdraw"===e){var n=Object(O.a)(u.withdrawPayMethod,f);return{value:n.id,label:n.name}}}(),onChange:function(t){r(Object(w.k)({payment:e,value:t.value})),r(Object(d.b)())},isLoading:!1,name:e,styles:v,theme:function(t){return Object(p.a)(Object(p.a)({},t),{},{colors:Object(p.a)(Object(p.a)({},t.colors),{},{primary25:"#F4F4F4",primary50:"#58B4AE",primary:"#58B4AE",neutral60:"#58B4AE"})})},options:n.reduce((function(t,e){return t.push({value:e.id,label:e.name}),t}),[])}),Object(C.jsxs)(j,{children:[Object(C.jsx)("input",{type:"text","data-base":e,value:a,onChange:function(t){var n=t.target.value,a=t.target.dataset.base;(function(t){return!isNaN(t)})(n)&&("invoice"===e&&r(Object(w.d)({amount:Number(n),base:a})),"withdraw"===e&&r(Object(w.l)({amount:Number(n),base:a})),h())}}),b&&Object(C.jsx)(A,{})]})]})},E=h.b.div(o||(o=Object(f.a)(["\n  margin: 0 auto;\n  width: 754px;\n  height: 344px;\n  box-shadow: 0px 8px 28px 0px rgba(0, 0, 0, 0.08);\n"]))),R=h.b.div(c||(c=Object(f.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]))),S=h.b.input(i||(i=Object(f.a)(['\n  display: block;\n  width: 125px;\n  height: 48px;\n  margin: 0 auto;\n  background: #58b4ae;\n  color: #fff;\n  font-family: "Roboto-700";\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 16px;\n  letter-spacing: 0em;\n  text-align: center;\n  border: none;\n  border-radius: 5px;\n  transition: all ease-in 150ms;\n  :hover {\n    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.5);\n    transform: translate(-3px, -3px);\n    transition: all ease-in 150ms;\n  }\n  :disabled {\n    background: #58b4ae91;\n    box-shadow: none;\n    transform: none;\n  }\n'])));e.default=function(){var t=Object(s.b)(),e=Object(s.c)((function(t){return Object(B.b)(t)})),n=Object(s.c)((function(t){return Object(B.c)(t)})),a=Object(b.g)(),r=n.sell,o=n.buy;Object(u.useEffect)((function(){t(Object(d.a)())}),[]);return Object(C.jsx)(E,{children:Object(C.jsxs)("form",{onSubmit:function(t){t.preventDefault(),(r.base||o.base)&&a.push(l.a.info)},children:[Object(C.jsxs)(R,{className:"",children:[Object(C.jsx)(N,{payment:"invoice",methods:e.invoice,currentAmount:r.amount}),Object(C.jsx)(N,{payment:"withdraw",methods:e.withdraw,currentAmount:o.amount})]}),Object(C.jsx)(S,{type:"submit",disabled:!r.amount||!o.amount,value:"Exchange"})]})})}},52:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return c}));var a=function(t){return t.payMethods.methods},r=function(t){return t.payMethods.setCalculate},o=function(t){return t.payMethods.loading},c=function(t){return t.payMethods.responseBids}},55:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return p})),n.d(e,"c",(function(){return f}));var a=n(53),r=n.n(a),o=n(54),c=n(58),i=n.n(c);i.a.defaults.baseURL="https://involve.software/test_front/api";var u=function(){var t=Object(o.a)(r.a.mark((function t(){var e;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.get("/payMethods");case 3:return e=t.sent,t.next=6,e.data;case 6:return t.abrupt("return",t.sent);case 9:throw t.prev=9,t.t0=t.catch(0),console.log("error",t.t0),t.t0;case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=Object(o.a)(r.a.mark((function t(e,n,a,o){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.get("/payMethods/calculate",{params:{base:e,amount:n,invoicePayMethod:a,withdrawPayMethod:o}});case 3:return c=t.sent,t.next=6,c.data;case 6:return t.abrupt("return",t.sent);case 9:throw t.prev=9,t.t0=t.catch(0),console.log("error",t.t0),t.t0;case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n,a,r){return t.apply(this,arguments)}}(),b=function(){var t=Object(o.a)(r.a.mark((function t(e,n,a,o){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("/bids",{amount:e,base:n,invoicePayMethod:a,withdrawPayMethod:o});case 3:return c=t.sent,t.next=6,c.data;case 6:return t.abrupt("return",t.sent);case 9:throw t.prev=9,t.t0=t.catch(0),console.log("error",t.t0),t.t0;case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n,a,r){return t.apply(this,arguments)}}(),d=n(2),l=function(){return function(){var t=Object(o.a)(r.a.mark((function t(e){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(d.f)()),t.prev=1,t.next=4,u();case 4:n=t.sent,e(Object(d.g)(n)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(Object(d.e)(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},p=function(){return function(){var t=Object(o.a)(r.a.mark((function t(e,n){var a,o,c,i,u;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n().payMethods.setCalculate,o=a.sell,c=a.buy,e(Object(d.b)()),t.prev=2,!(o.base&&o.invoicePayMethod&&o.withdrawPayMethod)){t.next=9;break}return t.next=6,s(o.base,o.amount,o.invoicePayMethod,o.withdrawPayMethod);case 6:return i=t.sent,e(Object(d.c)(i)),t.abrupt("return");case 9:if(!(c.base&&c.invoicePayMethod&&c.withdrawPayMethod)){t.next=15;break}return t.next=12,s(c.base,c.amount,c.invoicePayMethod,c.withdrawPayMethod);case 12:return u=t.sent,e(Object(d.c)(u)),t.abrupt("return");case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(2),e(Object(d.a)(t.t0));case 20:case"end":return t.stop()}}),t,null,[[2,17]])})));return function(e,n){return t.apply(this,arguments)}}()},f=function(){return function(){var t=Object(o.a)(r.a.mark((function t(e,n){var a,o,c,i,u;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n().payMethods.setCalculate,o=a.sell,c=a.buy,e(Object(d.i)()),t.prev=2,!(o.base&&o.invoicePayMethod&&o.withdrawPayMethod)){t.next=9;break}return t.next=6,b(o.amount,o.base,o.invoicePayMethod,o.withdrawPayMethod);case 6:return i=t.sent,e(Object(d.j)(i)),t.abrupt("return");case 9:if(!(c.base&&c.invoicePayMethod&&c.withdrawPayMethod)){t.next=15;break}return t.next=12,b(c.amount,c.base,c.invoicePayMethod,c.withdrawPayMethod);case 12:return u=t.sent,e(Object(d.j)(u)),t.abrupt("return");case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(2),e(Object(d.h)(t.t0));case 20:case"end":return t.stop()}}),t,null,[[2,17]])})));return function(e,n){return t.apply(this,arguments)}}()}},56:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return r}));var a=function(t,e){return e.find((function(e){return e.id===t})).name},r=function(t,e){return e.find((function(e){return e.id===t}))}}}]);
//# sourceMappingURL=5.87012c76.chunk.js.map