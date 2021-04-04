(this["webpackJsonpmaterial-table-api-crud"]=this["webpackJsonpmaterial-table-api-crud"]||[]).push([[0],{177:function(e,t,a){},420:function(e,t,a){e.exports=a(538)},425:function(e,t,a){},426:function(e,t,a){},538:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),i=a.n(c),o=(a(425),a(31)),l=a(76),f=a(566),u=a(563),s=a(288),d=a(144),b=(a(426),a(47)),m=a(98),j=a.n(m),O=a(101),g=a.n(O),E=a(111),w=a.n(E),h=a(102),v=a.n(h),p=a(109),R=a.n(p),y=a(67),S=a.n(y),P=a(66),_=a.n(P),x=a(103),D=a.n(x),C=a(104),A=a.n(C),k=a(106),N=a.n(k),I=a(107),T=a.n(I),F=a(108),M=a.n(F),B=a(112),L=a.n(B),U=a(105),V=a.n(U),z=a(110),W=a.n(z),G=a(113),$=a.n(G),J=a(567),K=a(409),Y=a.n(K).a.create({baseURL:"https://finance-react-app.azurewebsites.net/api"}),q=(a(177),{Add:Object(n.forwardRef)((function(e,t){return r.a.createElement(g.a,Object.assign({},e,{ref:t}))})),Check:Object(n.forwardRef)((function(e,t){return r.a.createElement(v.a,Object.assign({},e,{ref:t}))})),Clear:Object(n.forwardRef)((function(e,t){return r.a.createElement(_.a,Object.assign({},e,{ref:t}))})),Delete:Object(n.forwardRef)((function(e,t){return r.a.createElement(D.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(n.forwardRef)((function(e,t){return r.a.createElement(S.a,Object.assign({},e,{ref:t}))})),Edit:Object(n.forwardRef)((function(e,t){return r.a.createElement(A.a,Object.assign({},e,{ref:t}))})),Export:Object(n.forwardRef)((function(e,t){return r.a.createElement(V.a,Object.assign({},e,{ref:t}))})),Filter:Object(n.forwardRef)((function(e,t){return r.a.createElement(N.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(T.a,Object.assign({},e,{ref:t}))})),LastPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(M.a,Object.assign({},e,{ref:t}))})),NextPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(S.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(R.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(n.forwardRef)((function(e,t){return r.a.createElement(_.a,Object.assign({},e,{ref:t}))})),Search:Object(n.forwardRef)((function(e,t){return r.a.createElement(W.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(n.forwardRef)((function(e,t){return r.a.createElement(w.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(n.forwardRef)((function(e,t){return r.a.createElement(L.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(n.forwardRef)((function(e,t){return r.a.createElement($.a,Object.assign({},e,{ref:t}))}))});function Q(e){return"("+e+")"}var X=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:",";try{t=Math.abs(t),t=isNaN(t)?2:t;var r=e<0?"-":"",c=parseInt(e=Math.abs(Number(e)||0).toFixed(t)).toString(),i=c.length>3?c.length%3:0;return"-"===r?Q((i?c.substr(0,i)+n:"")+c.substr(i).replace(/(\d{3})(?=\d)/g,"$1"+n)+(t?a+Math.abs(e-c).toFixed(t).slice(2):"")):r+(i?c.substr(0,i)+n:"")+c.substr(i).replace(/(\d{3})(?=\d)/g,"$1"+n)+(t?a+Math.abs(e-c).toFixed(t).slice(2):"")}catch(o){console.log(o)}};var H=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!1),l=Object(o.a)(i,2),f=l[0],s=l[1],d=Object(n.useState)([]),m=Object(o.a)(d,2),O=m[0],g=m[1];return Object(n.useEffect)((function(){Y.get("/accounts").then((function(e){e.data.map((function(e){e.balance=X(e.balance),e.current=X(e.current),e.over_30=X(e.over_30),e.over_60=X(e.over_60),e.over_90=X(e.over_90),e.over_120=X(e.over_120)})),c(e.data)})).catch((function(e){console.log("Error")}))}),[]),r.a.createElement("div",{className:"table"},r.a.createElement(u.a,{container:!0,spacing:1},r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement("div",null,f&&r.a.createElement(J.a,{severity:"error"},O.map((function(e,t){return r.a.createElement("div",{key:t},e)})))),r.a.createElement(j.a,{title:"Accounts Table",columns:[{title:"Account ID",field:"account_id"},{title:"Account Name",field:"account_name"},{title:"Balance",field:"balance",editable:"never",cellStyle:{fontWeight:"bold"}},{title:"Current",field:"current",editable:"never"},{title:"Over 30",field:"over_30",editable:"never"},{title:"Over 60",field:"over_60",editable:"never"},{title:"Over 90",field:"over_90",editable:"never"},{title:"Over 120",field:"over_120",editable:"never"}],data:a,icons:q,editable:{isEditable:function(e){return"All Accounts"!==e.account_name},isDeletable:function(e){return"All Accounts"!==e.account_name},onRowUpdate:function(e,t){return new Promise((function(n){!function(e,t,n){var r=[];r.length<1?Y.patch("/accounts/"+e._id,e).then((function(r){var i=Object(b.a)(a);i[t.tableData._id]=e,c(Object(b.a)(i)),n(),window.location.reload(!1),s(!1),g([])})).catch((function(e){g(["Update failed! Server error"]),s(!0),n()})):(g(r),s(!0),n())}(e,t,n)}))},onRowAdd:function(e){return new Promise((function(t){!function(e,t){var n=[];n.length<1?Y.post("/accounts",e).then((function(n){var r=Object(b.a)(a);r.push(e),c(r),t(),window.location.reload(!1),g([]),s(!1)})).catch((function(e){g(["Cannot add data. Server error!"]),s(!0),t()})):(g(n),s(!0),t())}(e,t)}))},onRowDelete:function(e){return new Promise((function(t){!function(e,t){Y.delete("/accounts/"+e._id).then((function(n){var r=Object(b.a)(a),i=e.tableData._id,o=r.filter((function(e){return e._id!==i}));c(Object(b.a)(o)),t(),window.location.reload(!1)})).catch((function(e){g(["Delete failed! Server error"]),s(!0),t()}))}(e,t)}))}},options:{exportButton:!0}}))))},Z={Add:Object(n.forwardRef)((function(e,t){return r.a.createElement(g.a,Object.assign({},e,{ref:t}))})),Check:Object(n.forwardRef)((function(e,t){return r.a.createElement(v.a,Object.assign({},e,{ref:t}))})),Clear:Object(n.forwardRef)((function(e,t){return r.a.createElement(_.a,Object.assign({},e,{ref:t}))})),Delete:Object(n.forwardRef)((function(e,t){return r.a.createElement(D.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(n.forwardRef)((function(e,t){return r.a.createElement(S.a,Object.assign({},e,{ref:t}))})),Edit:Object(n.forwardRef)((function(e,t){return r.a.createElement(A.a,Object.assign({},e,{ref:t}))})),Export:Object(n.forwardRef)((function(e,t){return r.a.createElement(V.a,Object.assign({},e,{ref:t}))})),Filter:Object(n.forwardRef)((function(e,t){return r.a.createElement(N.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(T.a,Object.assign({},e,{ref:t}))})),LastPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(M.a,Object.assign({},e,{ref:t}))})),NextPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(S.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(R.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(n.forwardRef)((function(e,t){return r.a.createElement(_.a,Object.assign({},e,{ref:t}))})),Search:Object(n.forwardRef)((function(e,t){return r.a.createElement(W.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(n.forwardRef)((function(e,t){return r.a.createElement(w.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(n.forwardRef)((function(e,t){return r.a.createElement(L.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(n.forwardRef)((function(e,t){return r.a.createElement($.a,Object.assign({},e,{ref:t}))}))};function ee(e){return"("+e+")"}var te=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:",",r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];try{t=Math.abs(t),t=isNaN(t)?2:t;var c=e<0?"-":"",i=parseInt(e=Math.abs(Number(e)||0).toFixed(t)).toString(),o=i.length>3?i.length%3:0;return"-"===c||r?ee((o?i.substr(0,o)+n:"")+i.substr(o).replace(/(\d{3})(?=\d)/g,"$1"+n)+(t?a+Math.abs(e-i).toFixed(t).slice(2):"")):c+(o?i.substr(0,o)+n:"")+i.substr(o).replace(/(\d{3})(?=\d)/g,"$1"+n)+(t?a+Math.abs(e-i).toFixed(t).slice(2):"")}catch(l){console.log(l)}};var ae=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(),l=Object(o.a)(i,2),f=l[0],s=l[1],d=Object(n.useState)(!1),m=Object(o.a)(d,2),O=m[0],g=m[1],E=Object(n.useState)([]),w=Object(o.a)(E,2),h=w[0],v=w[1];Object(n.useEffect)((function(){Y.get("/accountIds").then((function(e){console.log("res",e),s(e.data)})).catch((function(e){console.log("Error")})),Y.get("/transactions").then((function(e){e.data.map((function(e){e.balance=te(e.balance),e.amount="Payment"===e.type||"Credit"===e.type||"Adjustment"===e.type&&e.amount<0?te(e.amount,2,".",",",!0):e.amount})),c(e.data)})).catch((function(e){console.log("Error")}))}),[]);var p=[{title:"Transaction ID",field:"transaction_id",editable:"never"},{title:"Date",field:"date",type:"date"},{title:"Account ID",field:"account_id",lookup:f},{title:"Ref 1",field:"ref_1"},{title:"Ref 2",field:"ref_2"},{title:"Account Name",field:"account_name"},{title:"Type",field:"type",lookup:{Invoice:"Invoice",Payment:"Payment",Credit:"Credit",Memo:"Memo",Adjustment:"Adjustment"}},{title:"Amount",field:"amount",type:"number"},{title:"Currency",field:"currency"},{title:"USD",field:"usd"},{title:"Notes",field:"notes"},{title:"Balance",field:"balance",editable:"never",cellStyle:{fontWeight:"bold"}}];return console.log(f),r.a.createElement("div",{className:"table"},r.a.createElement(u.a,{container:!0,spacing:1},r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement("div",null,O&&r.a.createElement(J.a,{severity:"error"},h.map((function(e,t){return r.a.createElement("div",{key:t},e)})))),r.a.createElement(j.a,{title:"Transactions Table",columns:p,data:a,icons:Z,editable:{onRowAdd:function(e){return new Promise((function(t){!function(e,t){var n=[];n.length<1?Y.post("/transactions",e).then((function(n){var r=Object(b.a)(a);r.push(e),c(r),t(),window.location.reload(!1),v([]),g(!1)})).catch((function(e){v(["Cannot add data. Server error!"]),g(!0),t()})):(v(n),g(!0),t())}(e,t)}))},onRowDelete:function(e){return new Promise((function(t){!function(e,t){Y.delete("/transactions/"+e._id).then((function(n){var r=Object(b.a)(a),i=e.tableData._id,o=r.filter((function(e){return e._id!==i}));c(Object(b.a)(o)),t(),window.location.reload(!1)})).catch((function(e){v(["Delete failed! Server error"]),g(!0),t()}))}(e,t)}))}},options:{exportButton:!0}}))))},ne=a(241),re=a(227),ce=a(27),ie=a(281),oe={Add:Object(n.forwardRef)((function(e,t){return r.a.createElement(g.a,Object.assign({},e,{ref:t}))})),Check:Object(n.forwardRef)((function(e,t){return r.a.createElement(v.a,Object.assign({},e,{ref:t}))})),Clear:Object(n.forwardRef)((function(e,t){return r.a.createElement(_.a,Object.assign({},e,{ref:t}))})),Delete:Object(n.forwardRef)((function(e,t){return r.a.createElement(D.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(n.forwardRef)((function(e,t){return r.a.createElement(S.a,Object.assign({},e,{ref:t}))})),Edit:Object(n.forwardRef)((function(e,t){return r.a.createElement(A.a,Object.assign({},e,{ref:t}))})),Export:Object(n.forwardRef)((function(e,t){return r.a.createElement(V.a,Object.assign({},e,{ref:t}))})),Filter:Object(n.forwardRef)((function(e,t){return r.a.createElement(N.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(T.a,Object.assign({},e,{ref:t}))})),LastPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(M.a,Object.assign({},e,{ref:t}))})),NextPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(S.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(R.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(n.forwardRef)((function(e,t){return r.a.createElement(_.a,Object.assign({},e,{ref:t}))})),Search:Object(n.forwardRef)((function(e,t){return r.a.createElement(W.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(n.forwardRef)((function(e,t){return r.a.createElement(w.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(n.forwardRef)((function(e,t){return r.a.createElement(L.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(n.forwardRef)((function(e,t){return r.a.createElement($.a,Object.assign({},e,{ref:t}))}))};var le=function(){var e=[{title:"Transaction ID",field:"transaction_id"},{title:"Date",field:"date",type:"date"},{title:"Account ID",field:"account_id"},{title:"Ref 1",field:"ref_1"},{title:"Ref 2",field:"ref_2"},{title:"Account Name",field:"account_name"},{title:"Type",field:"type",lookup:{Invoice:"Invoice",Payment:"Payment",Credit:"Credit",Memo:"Memo",Adjustment:"Adjustment"}},{title:"Amount",field:"amount",type:"number"},{title:"Currency",field:"currency"},{title:"USD",field:"usd"},{title:"Notes",field:"notes"},{title:"Balance",field:"balance"}],t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],i=a[1],l=Object(n.useState)(!1),f=Object(o.a)(l,2),s=f[0],b=(f[1],Object(n.useState)([])),m=Object(o.a)(b,2),O=m[0],g=(m[1],Object(n.useState)()),E=Object(o.a)(g,2),w=E[0],h=E[1],v=Object(n.useState)(null),p=Object(o.a)(v,2),R=p[0],y=p[1],S=Object(n.useState)(null),P=Object(o.a)(S,2),_=P[0],x=P[1];return r.a.createElement("div",{className:"table"},r.a.createElement("div",{className:"account-id"},r.a.createElement(ne.a,{required:!0,id:"standard-required",label:"Account ID",onChange:function(e){return h(e.target.value)},value:w}),r.a.createElement(ce.a,{utils:re.default},r.a.createElement(ie.b,{disableToolbar:!0,variant:"inline",format:"MM/dd/yyyy",margin:"normal",id:"date-picker-inline",label:"Start Date",value:R,onChange:function(e){return y(e)},KeyboardButtonProps:{"aria-label":"change date"}}),r.a.createElement(ie.b,{disableToolbar:!0,variant:"inline",format:"MM/dd/yyyy",margin:"normal",id:"date-picker-inline",label:"End Date",onChange:function(e){return x(e)},value:_,KeyboardButtonProps:{"aria-label":"change date"}})),r.a.createElement(d.a,{variant:"contained",color:"primary",href:"#contained-buttons",type:"submit",onClick:function(){Y.post("/transactionsFilter",{accountId:w,startDate:R,endDate:_}).then((function(e){i(e.data)})).catch((function(e){console.log("Error")}))}},"Submit")),r.a.createElement(u.a,{container:!0,spacing:1},r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement("div",null,s&&r.a.createElement(J.a,{severity:"error"},O.map((function(e,t){return r.a.createElement("div",{key:t},e)})))),r.a.createElement(j.a,{title:"Date View",columns:e,data:c,icons:oe,options:{exportButton:!0}}))))},fe={Add:Object(n.forwardRef)((function(e,t){return r.a.createElement(g.a,Object.assign({},e,{ref:t}))})),Check:Object(n.forwardRef)((function(e,t){return r.a.createElement(v.a,Object.assign({},e,{ref:t}))})),Clear:Object(n.forwardRef)((function(e,t){return r.a.createElement(_.a,Object.assign({},e,{ref:t}))})),Delete:Object(n.forwardRef)((function(e,t){return r.a.createElement(D.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(n.forwardRef)((function(e,t){return r.a.createElement(S.a,Object.assign({},e,{ref:t}))})),Edit:Object(n.forwardRef)((function(e,t){return r.a.createElement(A.a,Object.assign({},e,{ref:t}))})),Export:Object(n.forwardRef)((function(e,t){return r.a.createElement(V.a,Object.assign({},e,{ref:t}))})),Filter:Object(n.forwardRef)((function(e,t){return r.a.createElement(N.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(T.a,Object.assign({},e,{ref:t}))})),LastPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(M.a,Object.assign({},e,{ref:t}))})),NextPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(S.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(R.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(n.forwardRef)((function(e,t){return r.a.createElement(_.a,Object.assign({},e,{ref:t}))})),Search:Object(n.forwardRef)((function(e,t){return r.a.createElement(W.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(n.forwardRef)((function(e,t){return r.a.createElement(w.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(n.forwardRef)((function(e,t){return r.a.createElement(L.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(n.forwardRef)((function(e,t){return r.a.createElement($.a,Object.assign({},e,{ref:t}))}))};var ue=function(){var e=[{title:"Currency ID",field:"currency_id"},{title:"Exchange Rate",field:"exchange_rate"},{title:"Base",field:"base",lookup:{true:"Yes",false:"No"}}],t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],i=a[1],l=Object(n.useState)(!1),f=Object(o.a)(l,2),s=f[0],d=f[1],m=Object(n.useState)([]),O=Object(o.a)(m,2),g=O[0],E=O[1];return Object(n.useEffect)((function(){Y.get("/currencies").then((function(e){i(e.data)})).catch((function(e){console.log("Error")}))}),[]),r.a.createElement("div",{className:"table"},r.a.createElement(u.a,{container:!0,spacing:1},r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement("div",null,s&&r.a.createElement(J.a,{severity:"error"},g.map((function(e,t){return r.a.createElement("div",{key:t},e)})))),r.a.createElement(j.a,{title:"Currency Table",columns:e,data:c,icons:fe,editable:{onRowUpdate:function(e,t){return new Promise((function(a){!function(e,t,a){var n=[];n.length<1?Y.patch("/currencies/"+e._id,e).then((function(n){var r=Object(b.a)(c);r[t.tableData._id]=e,i(Object(b.a)(r)),a(),window.location.reload(!1),d(!1),E([])})).catch((function(e){E(["Update failed! Server error"]),d(!0),a()})):(E(n),d(!0),a())}(e,t,a)}))},onRowAdd:function(e){return new Promise((function(t){!function(e,t){var a=[];a.length<1?Y.post("/currencies",e).then((function(a){var n=Object(b.a)(c);n.push(e),i(n),t(),window.location.reload(!1),E([]),d(!1)})).catch((function(e){E(["Cannot add data. Server error!"]),d(!0),t()})):(E(a),d(!0),t())}(e,t)}))},onRowDelete:function(e){return new Promise((function(t){!function(e,t){Y.delete("/currencies/"+e._id).then((function(a){var n=Object(b.a)(c),r=e.tableData._id,o=n.filter((function(e){return e._id!==r}));i(Object(b.a)(o)),t(),window.location.reload(!1)})).catch((function(e){E(["Delete failed! Server error"]),d(!0),t()}))}(e,t)}))}},options:{exportButton:!0}}))))},se={Add:Object(n.forwardRef)((function(e,t){return r.a.createElement(g.a,Object.assign({},e,{ref:t}))})),Check:Object(n.forwardRef)((function(e,t){return r.a.createElement(v.a,Object.assign({},e,{ref:t}))})),Clear:Object(n.forwardRef)((function(e,t){return r.a.createElement(_.a,Object.assign({},e,{ref:t}))})),Delete:Object(n.forwardRef)((function(e,t){return r.a.createElement(D.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(n.forwardRef)((function(e,t){return r.a.createElement(S.a,Object.assign({},e,{ref:t}))})),Edit:Object(n.forwardRef)((function(e,t){return r.a.createElement(A.a,Object.assign({},e,{ref:t}))})),Export:Object(n.forwardRef)((function(e,t){return r.a.createElement(V.a,Object.assign({},e,{ref:t}))})),Filter:Object(n.forwardRef)((function(e,t){return r.a.createElement(N.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(T.a,Object.assign({},e,{ref:t}))})),LastPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(M.a,Object.assign({},e,{ref:t}))})),NextPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(S.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(R.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(n.forwardRef)((function(e,t){return r.a.createElement(_.a,Object.assign({},e,{ref:t}))})),Search:Object(n.forwardRef)((function(e,t){return r.a.createElement(W.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(n.forwardRef)((function(e,t){return r.a.createElement(w.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(n.forwardRef)((function(e,t){return r.a.createElement(L.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(n.forwardRef)((function(e,t){return r.a.createElement($.a,Object.assign({},e,{ref:t}))}))};var de=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!1),l=Object(o.a)(i,2),f=l[0],s=(l[1],Object(n.useState)([])),d=Object(o.a)(s,2),b=d[0];return d[1],Object(n.useEffect)((function(){Y.get("/activities").then((function(e){c(e.data)})).catch((function(e){console.log("Error")}))}),[]),r.a.createElement("div",{className:"table"},r.a.createElement(u.a,{container:!0,spacing:1},r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement("div",null,f&&r.a.createElement(J.a,{severity:"error"},b.map((function(e,t){return r.a.createElement("div",{key:t},e)})))),r.a.createElement(j.a,{title:"Activity Table",columns:[{title:"Account ID",field:"account_id"},{title:"Last Invoice",field:"invoice_date",type:"date"},{title:"Last Payment",field:"payment_date",type:"date"},{title:"Last Credit",field:"credit_date",type:"date"},{title:"Last Adjustment",field:"adjustment_date",type:"date"}],data:a,icons:se,options:{exportButton:!0}}))))},be=a(129),me=a(38),je=a(145),Oe=a.n(je),ge=a(252),Ee=a(410),we=a(411),he=a(253),ve=(a(537),a(534),a(535),{apiKey:"AIzaSyD4XmQJ-ktvr5HbwtX5_rIGzVGQLWYpLSY",authDomain:"react-table-app.firebaseapp.com",projectId:"react-table-app",storageBucket:"react-table-app.appspot.com",messagingSenderId:"256308264854",appId:"1:256308264854:web:7a34d9b0a9cb99eded67b7"}),pe=new(function(){function e(){var t=this;Object(Ee.a)(this,e),this.createProfile=function(e,a,n,r,c){return t.db.collection("users").doc(c).set({user_name:e,user_email:a,user_password:n,user_role:r}).catch(console.error)},this.deleteProfile=function(e){t.db.collection("users").doc(e).delete().then((function(){console.log("Document successfully deleted!")})).catch((function(e){console.error("Error removing document: ",e)}))},"undefined"!==typeof window&&(he.a.initializeApp(ve),this.auth=he.a.auth(),this.db=he.a.firestore(),this.createProfile=this.createProfile.bind(this))}return Object(we.a)(e,[{key:"isInitialized",value:function(){var e=this;return new Promise((function(t){e.auth.onAuthStateChanged(t)}))}},{key:"login",value:function(){var e=Object(ge.a)(Oe.a.mark((function e(t,a){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auth.signInWithEmailAndPassword(t,a).then((function(e){console.log(e),console.log("Success. User Logged In")}));case 2:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"logout",value:function(){return this.auth.signOut()}},{key:"findUser",value:function(){var e=Object(ge.a)(Oe.a.mark((function e(t){var a,n;return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.db.collection("users"),e.next=3,a.where("user_email","==",t).get();case 3:if(!(n=e.sent).empty){e.next=7;break}return console.log("No matching documents."),e.abrupt("return");case 7:return e.abrupt("return",n.docs[0].data());case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"register",value:function(){var e=Object(ge.a)(Oe.a.mark((function e(t,a,n,r){var c;return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.auth.createUserWithEmailAndPassword(a,n).then((function(e){return e}));case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e,this)})));return function(t,a,n,r){return e.apply(this,arguments)}}()}]),e}()),Re=Object(l.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,textTransform:"lowercase"}}}));var ye=function(){var e=Re(),t=Object(n.useState)(),a=Object(o.a)(t,2),c=a[0],i=a[1],l=Object(n.useState)(),b=Object(o.a)(l,2),m=b[0],j=b[1];return Object(n.useEffect)((function(){pe.isInitialized().then((function(e){j(e||!1)}))})),Object(n.useEffect)((function(){m&&!1!==m&&pe.findUser(m.email).then((function(e){i(e)}))}),[m]),console.log(c),r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{position:"static"},r.a.createElement(s.a,null,r.a.createElement(u.a,{style:{display:"flex"},justify:"space-between",alignItems:"center",container:!0,spacing:0,className:e.title},r.a.createElement(u.a,{item:!0},r.a.createElement(be.b,{activeClassName:"active-link",to:"/accounts",style:{textDecoration:"none",color:"white"}},r.a.createElement(d.a,{color:"inherit",className:"item",style:{textTransform:"initial"}},"accounts")),r.a.createElement(be.b,{activeClassName:"active-link",to:"/transactions",style:{textDecoration:"none",color:"white"}},r.a.createElement(d.a,{color:"inherit",className:"item",style:{textTransform:"initial"}},"transactions")),r.a.createElement(be.b,{activeClassName:"active-link",to:"/date-view",style:{textDecoration:"none",color:"white"}},r.a.createElement(d.a,{color:"inherit",className:"item",style:{textTransform:"initial"}},"date view")),r.a.createElement(be.b,{activeClassName:"active-link",to:"/currencies",style:{textDecoration:"none",color:"white"}},r.a.createElement(d.a,{color:"inherit",className:"item",style:{textTransform:"initial"}},"currencies")),r.a.createElement(be.b,{activeClassName:"active-link",to:"/activity",style:{textDecoration:"none",color:"white"}},r.a.createElement(d.a,{color:"inherit",className:"item",style:{textTransform:"initial"}},"activity")))))),r.a.createElement(me.c,null,r.a.createElement(me.a,{path:"/accounts"},r.a.createElement(H,null)),r.a.createElement(me.a,{path:"/transactions"},r.a.createElement(ae,null)),r.a.createElement(me.a,{path:"/date-view"},r.a.createElement(le,null)),r.a.createElement(me.a,{path:"/currencies"},r.a.createElement(ue,null)),r.a.createElement(me.a,{path:"/activity"},r.a.createElement(de,null))))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(be.a,null,r.a.createElement(ye,null))),document.getElementById("root"))}},[[420,1,2]]]);
//# sourceMappingURL=main.b6bcfc8b.chunk.js.map