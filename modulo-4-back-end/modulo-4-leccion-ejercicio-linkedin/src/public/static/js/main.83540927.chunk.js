(this["webpackJsonpmodulo-3-repaso-final"]=this["webpackJsonpmodulo-3-repaso-final"]||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(18),r=c.n(a),i=c(8),l=c(17),s=c(7),o=c(2),j=c(0),d=function(e){var t=Object(n.useState)("ivan@adalab.es"),c=Object(s.a)(t,2),a=c[0],r=c[1],i=Object(n.useState)("12345"),l=Object(s.a)(i,2),o=l[0],d=l[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{className:"mb-1",onSubmit:function(t){t.preventDefault(),e.handleLogin({email:a,pass:o})},children:[Object(j.jsx)("h2",{children:"Bienvenida a nuestra LinkedIn"}),Object(j.jsx)("h3",{children:"Identif\xedcate por favor"}),Object(j.jsx)("label",{className:"form__label display-block",htmlFor:"email",children:"Escribe tu email:"}),Object(j.jsx)("input",{className:"form__input-text m-0",type:"text",id:"email",value:a,onChange:function(e){r(e.target.value)}}),Object(j.jsx)("label",{className:"form__label display-block",htmlFor:"password",children:"Escribe tu contrase\xf1a:"}),Object(j.jsx)("input",{className:"form__input-text m-0",type:"password",id:"password",value:o,onChange:function(e){d(e.target.value)}}),Object(j.jsx)("button",{className:"card__btn m-0 mt-1",children:"Entrar"}),e.loginError]})})},u=function(e){return Object(j.jsx)(i.b,{to:"/contact/".concat(e.contact.id),children:Object(j.jsxs)("article",{className:"card",children:[Object(j.jsx)("img",{className:"card__img",src:e.contact.image,alt:"Foto de ".concat(e.contact.name),title:"Foto de ".concat(e.contact.name)}),Object(j.jsx)("h4",{className:"card__title",children:e.contact.name}),Object(j.jsxs)("p",{className:"card__description",children:[e.contact.city," / ","female"===e.contact.gender?"Mujer":"male"===e.contact.gender?"Hombre":"No binario"]})]})})},b=function(e){var t=e.contacts.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(u,{contact:e})},e.id)}));return Object(j.jsx)("section",{children:Object(j.jsx)("ul",{className:"cards",children:t})})},m=function(e){return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)(i.b,{to:"/",children:"Volver al inicio"}),Object(j.jsx)("header",{children:Object(j.jsx)("h2",{children:e.contact.name})}),Object(j.jsxs)("section",{children:[Object(j.jsx)("img",{className:"card__img",src:e.contact.image,alt:e.contact.name}),Object(j.jsx)("h4",{className:"card__title",children:e.contact.name}),Object(j.jsxs)("ul",{className:"ml-1 mt-1",children:[Object(j.jsxs)("li",{children:["G\xe9nero: ",e.contact.gender]}),Object(j.jsxs)("li",{children:["Email: ",e.contact.email]}),Object(j.jsxs)("li",{children:["Nick: ",e.contact.contactname]}),Object(j.jsxs)("li",{children:["Ciudad: ",e.contact.city]}),Object(j.jsxs)("li",{children:["Pa\xeds: ",e.contact.country]})]})]})]})},h=function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("label",{className:"form__label display-block",htmlFor:"name",children:"Filtrar por nombre:"}),Object(j.jsx)("input",{className:"form__input-text",type:"text",name:"name",id:"name",value:e.filterName,onChange:function(t){e.handleFilter({value:t.target.value,key:"name"})}})]})},f=function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("label",{className:"form__label display-block",htmlFor:"gender",children:"G\xe9nero:"}),Object(j.jsxs)("select",{className:"form__input-text",name:"gender",id:"gender",value:e.filterGender,onChange:function(t){e.handleFilter({value:t.target.value,key:"gender"})},children:[Object(j.jsx)("option",{value:"",children:"Todos"}),Object(j.jsx)("option",{value:"female",children:"Mujer"}),Object(j.jsx)("option",{value:"male",children:"Hombre"}),Object(j.jsx)("option",{value:"no-binary",children:"No binario"})]})]})},O=(c(33),function(e){var t=function(t){e.handleFilter({value:t.target.value,key:"city"})};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("label",{className:"form__label display-block",htmlFor:"gender",children:"Ciudad:"}),Object(j.jsx)("ul",{className:"filterCities",children:e.cities.map((function(c,n){return Object(j.jsx)("li",{children:Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{className:"input",type:"checkbox",name:"city",value:c,checked:e.filterCities.includes(c),onChange:t}),c]})},n)}))})]})}),x=function(e){return Object(j.jsx)("section",{children:Object(j.jsxs)("form",{children:[Object(j.jsx)(h,{filterName:e.filterName,handleFilter:e.handleFilter}),Object(j.jsx)(f,{filterGender:e.filterGender,handleFilter:e.handleFilter}),Object(j.jsx)(O,{filterCities:e.filterCities,cities:e.cities,handleFilter:e.handleFilter})]})})},p=function(e){return fetch("http://localhost:3001/contacts",{method:"GET",headers:{userId:e}}).then((function(e){return e.json()})).then((function(e){return e.map((function(e){return{id:e.uuid,gender:e.gender,email:e.email,city:e.city,country:e.country,image:e.picture,name:"".concat(e.firstName," ").concat(e.lastName)}}))}))},g={get:function(e,t){var c=localStorage.getItem(e);return null===c?t:JSON.parse(c)},set:function(e,t){localStorage.setItem(e,JSON.stringify(t))}},v=function(){var e=g.get("contacts",[]),t=Object(n.useState)(""),c=Object(s.a)(t,2),a=c[0],r=c[1],i=Object(n.useState)(""),u=Object(s.a)(i,2),h=u[0],f=u[1],O=Object(n.useState)([]),v=Object(s.a)(O,2),N=v[0],y=v[1],_=Object(n.useState)(g.get("filterName","")),F=Object(s.a)(_,2),k=F[0],C=F[1],S=Object(n.useState)(g.get("filterGender","")),E=Object(s.a)(S,2),G=E[0],w=E[1],I=Object(n.useState)(g.get("filterCities",[])),J=Object(s.a)(I,2),L=J[0],T=J[1];Object(n.useEffect)((function(){0===e.length&&p(a).then((function(e){y(e)}))}),[e.length,a]),Object(n.useEffect)((function(){g.set("contacts",N)}),[N]),Object(n.useEffect)((function(){g.set("contacts",N),g.set("filterName",k),g.set("filterGender",G),g.set("filterCities",L)}),[N,k,G,L]);var D=N.filter((function(e){return e.name.toLowerCase().includes(k.toLowerCase())})).filter((function(e){return""===G||e.gender===G})).filter((function(e){return 0===L.length||L.includes(e.city)}));return Object(j.jsx)(j.Fragment,{children:""===a?Object(j.jsx)(d,{handleLogin:function(e){return fetch("http://localhost:3001/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){!1===e.success?f(e.error):r(e.userId)}))},loginError:h}):Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",children:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("header",{className:"header",children:Object(j.jsx)("h1",{className:"title--big",children:"Directorio de personas"})}),Object(j.jsxs)("div",{className:"col2",children:[Object(j.jsx)(x,{filterName:k,filterGender:G,filterCities:L,cities:function(){var e=N.map((function(e){return e.city}));return Object(l.a)(new Set(e))}(),handleFilter:function(e){if("name"===e.key)C(e.value);else if("gender"===e.key)w(e.value);else if("city"===e.key)if(L.includes(e.value)){var t=L.filter((function(t){return t!==e.value}));T(t)}else L.push(e.value),T(Object(l.a)(L))}}),Object(j.jsx)(b,{contacts:D})]})]})}),Object(j.jsx)(o.a,{path:"/contact/:contactId",render:function(e){var t=e.match.params.contactId,c=N.find((function(e){return e.id===t}));return void 0!==c?Object(j.jsx)(m,{contact:c}):Object(j.jsx)("p",{children:"Usuaria no encontrada"})}})]})})};c(34);r.a.render(Object(j.jsx)(i.a,{children:Object(j.jsx)(v,{})}),document.querySelector("#root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.83540927.chunk.js.map