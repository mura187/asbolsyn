(this.webpackJsonpasbolsyn=this.webpackJsonpasbolsyn||[]).push([[10],{107:function(e,t,a){"use strict";a.r(t);var n=a(71),c=a(70),r=a(80),o=a(0),i=a.n(o),s=a(20),l=a(81),u=a(78),m=a(86);var f=function(){var e=Object(o.useState)(null),t=Object(r.a)(e,2),a=t[0],n=t[1],s={center:Object(c.a)({},[50.29760216600768,57.16326105902972]),zoom:11};return i.a.createElement(m.d,null,i.a.createElement(m.b,{onClick:function(e){n(e.get("coords")),sessionStorage.setItem("location",JSON.stringify(a))},state:s,style:{width:"100%",height:"10vh",zIndex:9},options:{suppressMapOpenBlock:!0}},i.a.createElement(m.c,{geometry:a||[50.322687,57.131267]}),i.a.createElement(m.a,null)))};a(99);var b={onCreateOffer:l.a.createOffer};t.default=Object(s.c)((function(e){return{login:e.login}}),b)((function(e){var t=sessionStorage.getItem("token"),a=Object(o.useState)(!1),s=Object(r.a)(a,2),l=s[0],m=s[1],b=Object(o.useReducer)((function(e,t){return Object(c.a)({},e,{},t)}),{foodName:"",price:null,initialQuantity:null,location:""}),p=Object(r.a)(b,2),d=p[0],E=p[1],v=sessionStorage.getItem("location")||"";Object(o.useEffect)((function(){null===t&&window.location.replace("/login")}));var _=e.onCreateOffer,g=function(e){var t=e.target.name,a=e.target.value;E(Object(n.a)({},t,a))};return i.a.createElement("div",null,i.a.createElement("h1",{className:"main-logo text-center f-32"},"As Bolsyn"),i.a.createElement("div",{className:"row align-items-center justify-content-center mt-180"},i.a.createElement("div",{className:"create-offer container"},i.a.createElement("div",{className:"text-left"},i.a.createElement("p",{className:"container my-20 f-14"},"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u0435 \u0441\u0432\u043e\u0451 \u0431\u043b\u044e\u0434\u043e :)")),i.a.createElement("div",{className:"d-flex flex-column container "},i.a.createElement("input",{required:!0,type:"text",className:"container create-offer__input my-8",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0431\u043b\u044e\u0434\u0430",name:"foodName",value:d.foodName,onChange:g}),i.a.createElement("input",{required:!0,type:"number",className:"container create-offer__input my-8",placeholder:"\u0426\u0435\u043d\u0430",name:"price",value:d.price,onChange:g}),i.a.createElement("input",{required:!0,type:"number",className:"container create-offer__input my-8",placeholder:"\u041a\u043e\u043b-\u0432\u043e",name:"initialQuantity",value:d.initialQuantity,onChange:g}),i.a.createElement("p",{className:"mt-8 mb-4 f-14 text-grey"},"\u0410\u0434\u0440\u0435\u0441"),i.a.createElement(f,null),i.a.createElement("button",{onClick:function(e){e.preventDefault(),_&&_({food_name:d.foodName,price:parseInt(d.price),initial_quantity:parseInt(d.initialQuantity),location:JSON.parse(v)},{onError:function(){return m(!0)}})},className:"container create-offer__submit mt-16 mb-40",type:"submit"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"),l&&i.a.createElement("div",{className:"text-left text-danger"},i.a.createElement("p",{className:"container px-36 mb-16 f-14"},"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c")))),i.a.createElement(u.a,null)))}))},73:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(70),c=function(e,t,a,c){var r=a.callbacks||{};e({type:a.action.started}),a.apiCall().then((function(t){switch(t.status){case 200:case 201:t.text().then((function(t){if(c){var o="data:image/png;base64,".concat(t);e(Object(n.a)({type:a.action.success},a.onSuccess(o))),r.onSuccess&&r.onSuccess(a.onSuccess(o))}else{var i=JSON.parse(t);e(Object(n.a)({type:a.action.success},a.onSuccess(i))),r.onSuccess&&r.onSuccess(a.onSuccess(i))}}));break;case 230:t.text().then((function(t){e(Object(n.a)({type:a.action.success},a.onSuccess(!0))),r.onSuccess&&r.onSuccess(a.onSuccess(!0))}));break;case 500:t.text().then((function(t){e(Object(n.a)({type:a.action.failed},a.onError({message:"\u043e\u0448\u0438\u0431\u043a\u0430 500!"})))}));break;case 504:t.text().then((function(t){e(Object(n.a)({type:a.action.failed},a.onError({message:"serverError"})))}));break;default:e({type:a.action.failed,errorMessage:"\u041e\u0448\u0438\u0431\u043a\u0430 #".concat(t.status)})}}),(function(t){e(Object(n.a)({type:a.action.failed,errorMessage:"\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435"},a.onError({message:"serverError"})))}))}},74:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n="http://185.22.67.118:8080/"},75:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return o})),a.d(t,"c",(function(){return i}));var n=a(70),c=function(e){var t=Object(n.a)({},{Accept:"application/json, application/xml, text/plain, text/html, *.*",Token:"".concat(sessionStorage.getItem("token")),"Content-Type":"application/json"});return e.token&&(t.Token="Bearer ".concat(e.token)),t},r=function(e){return fetch(e.url,{method:"POST",headers:c(e),body:JSON.stringify(e.data||{})})},o=function(e){return fetch(e.url,{method:"GET",headers:c(e)})},i=function(e){return e.data?fetch(e.url,{method:"PUT",headers:c(e),body:JSON.stringify(e.data||{})}):fetch(e.url,{method:"PUT",headers:c(e)})}},78:function(e,t,a){"use strict";var n=a(0),c=a(72),r=a(76),o=a(77);a(79);t.a=function(){return n.createElement("div",{className:"container tabbar d-flex flex-row justify-content-between pt-12 pb-20 fill_w"},n.createElement(c.a,{to:"/",activeClassName:"tabbar__activeLink text-decoration-none ml-14"},n.createElement("div",{className:"tabbar__item text-center pb-8 px-8"},n.createElement(r.a,{className:"tabbar__item--icon ml-6 pb-4",icon:o.e,color:""}),n.createElement("p",null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"))),n.createElement(c.a,{to:"/map",activeClassName:"tabbar__activeLink text-decoration-none"},n.createElement("div",{className:"tabbar__item text-center pb-8 px-8"},n.createElement(r.a,{className:"tabbar__item--icon pb-4",icon:o.f,color:""}),n.createElement("p",null,"\u041a\u0430\u0440\u0442\u0430"))),n.createElement(c.a,{to:"/offer",activeClassName:"tabbar__activeLink text-decoration-none"},n.createElement("div",{className:"tabbar__item text-center pb-8 px-8"},n.createElement(r.a,{className:"tabbar__item--icon ml-8 pb-4",icon:o.g,color:"#00BBFF"}),n.createElement("p",{className:"tabbar__item--center"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"))),n.createElement(c.a,{to:"/login",activeClassName:"tabbar__activeLink text-decoration-none"},n.createElement("div",{className:"tabbar__item text-center pb-8 px-8"},n.createElement(r.a,{className:"tabbar__item--icon ml-8 pb-4",icon:o.d,color:""}),n.createElement("p",null,"\u0418\u0441\u0442\u043e\u0440\u0438\u044f"))),n.createElement(c.a,{to:"/cabinet",activeClassName:"tabbar__activeLink text-decoration-none"},n.createElement("div",{className:"tabbar__item text-center pb-8 px-8"},n.createElement(r.a,{className:"tabbar__item--icon ml-8 pb-4",icon:o.i,color:""}),n.createElement("p",null,"\u041a\u0430\u0431\u0438\u043d\u0435\u0442"))))}},79:function(e,t,a){},81:function(e,t,a){"use strict";var n=a(73),c=a(74),r=a(75),o=sessionStorage.getItem("userId"),i="".concat(c.a,"api/offer"),s="".concat(c.a,"api/producer/").concat(o,"/offer"),l=a(16);t.a={getItems:function(e){return function(t,a){Object(n.a)(t,a,{callbacks:e,action:l.b,apiCall:function(){return Object(r.a)({url:"".concat(i)})},onSuccess:function(e){return{list:e}},onError:function(e){return{errorMessage:e.description}}})}},createOffer:function(e,t){return function(a,c){Object(n.a)(a,c,{callbacks:t,action:l.a,apiCall:function(){return function(e){return Object(r.b)({data:e,url:"".concat(s)})}(e)},onSuccess:function(e){return window.location.replace("/"),{user_token:e.Token}},onError:function(e){return console.log("token-error"),"Couldn't find token"===e.Error&&window.location.replace("/login"),{user_token:e.Error}}})}}}},99:function(e,t,a){}}]);
//# sourceMappingURL=10.eb9bd8fa.chunk.js.map