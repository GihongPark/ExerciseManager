(this.webpackJsonpmanager=this.webpackJsonpmanager||[]).push([[0],{18:function(e){e.exports=JSON.parse('{"a":[{"id":"leg_01","name":"\ub7f0\uc9c0","section":"leg","lately":{"weight":0,"reps":0}},{"id":"leg_02","name":"\ub808\uadf8 \uc775\uc2a4\ud150\uc158","section":"leg","lately":{"weight":0,"reps":0}},{"id":"leg_03","name":"\ub808\uadf8 \uceec","section":"leg","lately":{"weight":0,"reps":0}},{"id":"leg_04","name":"\ub808\uadf8 \ud504\ub808\uc2a4","section":"leg","lately":{"weight":0,"reps":0}},{"id":"leg_05","name":"\uc2a4\ucffc\ud2b8","section":"leg","lately":{"weight":0,"reps":0}},{"id":"chest_01","name":"\ub364\ubca8 \ud504\ub808\uc2a4","section":"chest","lately":{"weight":0,"reps":0}},{"id":"chest_02","name":"\ub364\ubca8 \ud50c\ub77c\uc774","section":"chest","lately":{"weight":0,"reps":0}},{"id":"chest_03","name":"\ubca4\uce58\ud504\ub808\uc2a4","section":"chest","lately":{"weight":0,"reps":0}},{"id":"chest_04","name":"\ucf00\uc774\ube14 \ud06c\ub85c\uc2a4\uc624\ubc84","section":"chest","lately":{"weight":0,"reps":0}},{"id":"chest_05","name":"\ub380\ubca8 \ub85c\uc6b0","section":"back","lately":{"weight":0,"reps":0}},{"id":"back_01","name":"\ub370\ub4dc\ub9ac\ud504\ud2b8","section":"back","lately":{"weight":0,"reps":0}},{"id":"back_02","name":"\ubc14\ubca8 \ub85c\uc6b0","section":"back","lately":{"weight":0,"reps":0}},{"id":"back_03","name":"\uc5b4\uc2dc\uc2a4\ud2f0\ub4dc \uce5c\uc5c5","section":"back","lately":{"weight":0,"reps":0}},{"id":"back_04","name":"\uc5b4\uc2dc\uc2a4\ud2f0\ub4dc \ud480\uc5c5","section":"back","lately":{"weight":0,"reps":0}},{"id":"back_05","name":"\uce5c\uc5c5","section":"back","lately":{"weight":0,"reps":0}},{"id":"back_06","name":"\ucf00\uc774\ube14 \ub85c\uc6b0","section":"back","lately":{"weight":0,"reps":0}},{"id":"back_07","name":"\ud480\ub2e4\uc6b4","section":"back","lately":{"weight":0,"reps":0}},{"id":"back_08","name":"\ud480\uc5c5","section":"back","lately":{"weight":0,"reps":0}},{"id":"shoulder_01","name":"\ub808\ud130\ub7f4 \ub808\uc774\uc988","section":"shoulder","lately":{"weight":0,"reps":0}},{"id":"shoulder_02","name":"\ubc00\ub9ac\ud130\ub9ac \ud504\ub808\uc2a4","section":"shoulder","lately":{"weight":0,"reps":0}},{"id":"shoulder_03","name":"\uc204\ub354 \ub364\ubca8 \ud504\ub808\uc2a4","section":"shoulder","lately":{"weight":0,"reps":0}},{"id":"shoulder_04","name":"\uc5c5\ub77c\uc774\ud2b8 \ub85c\uc6b0","section":"shoulder","lately":{"weight":0,"reps":0}},{"id":"arm_01","name":"\ud574\uba38 \uceec","section":"arm","lately":{"weight":0,"reps":0}},{"id":"arm_02","name":"\ubc14\ubca8 \ubc14\uc774\uc149 \uceec","section":"arm","lately":{"weight":0,"reps":0}},{"id":"arm_03","name":"\ub364\ubca8 \ubc14\uc774\uc149 \uceec","section":"arm","lately":{"weight":0,"reps":0}},{"id":"arm_04","name":"\ud2b8\ub77c\uc774\uc149\uc2a4 \uc775\uc2a4\ud150\uc158","section":"arm","lately":{"weight":0,"reps":0}},{"id":"abs_01","name":"\ub808\uadf8 \ub808\uc774\uc988","section":"abs","lately":{"weight":0,"reps":0}},{"id":"abs_02","name":"\ud06c\ub7f0\uce58","section":"abs","lately":{"weight":0,"reps":0}}]}')},20:function(e,t,a){e.exports=a(37)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),i=a.n(c),l=(a(25),a(26),a(27),a(2)),o=a(19),s=a(3),d=localStorage.exerciseManager?JSON.parse(localStorage.exerciseManager):[];var u=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"list/ADD_LIST":e=t.concat({id:a.payload.id,title:a.payload.title,date:a.payload.date,records:a.payload.records});break;case"list/REMOVE_LIST":e=t.filter((function(e){return e.id!==a.payload}));break;case"list/UPDATE_TITLE":e=t.map((function(e){return e.id===a.payload.id&&(e=Object(s.a)(Object(s.a)({},e),{},{title:a.payload.title})),e}));break;case"record/ADD_RECORD":e=t.map((function(e){return e.id===a.payload.id&&(e=Object(s.a)(Object(s.a)({},e),{},{records:[].concat(Object(o.a)(e.records),[a.payload.record])})),e}));break;case"record/REMOVE_RECORD":e=t.map((function(e){return e.id===a.payload.id&&(e=Object(s.a)(Object(s.a)({},e),{},{records:e.records.filter((function(e){return e.id!==a.payload.record.id}))})),e}));break;case"record/UPDATE_RECORD":e=t.map((function(e){return e.id===a.payload.id&&(e=Object(s.a)(Object(s.a)({},e),{},{records:e.records.map((function(e){return e.id===a.payload.record.id?a.payload.record:e}))})),e}));break;default:e=t}return localStorage.exerciseManager=JSON.stringify(e),e},m=a(6),p=a(4),E=a(5),b={state:"CLOSE_MODAL"};var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"modal/OPEN_ADD_RECORD":case"modal/OPEN_UPDATE_RECORD":return{state:t.payload.state,data:t.payload.data};case"modal/CLOSE_MODAL":return{state:t.payload.state};default:return e}};var f=function(e){var t=e.id,a=e.record,n=Object(l.b)();return r.a.createElement("li",null,r.a.createElement("div",{className:"record-contents"},r.a.createElement("div",null,"\uc6b4\ub3d9 : ",a.exercise),r.a.createElement("div",null,"\ubb34\uac8c : ",a.weight),r.a.createElement("div",null,"\ud69f\uc218 : ",a.reps)),r.a.createElement("div",{className:"record-control"},r.a.createElement("button",{type:"button",onClick:function(){n(function(e,t){return{type:"modal/OPEN_UPDATE_RECORD",payload:{state:"UPDATE_RECORD",data:{id:e,record:t}}}}(t,a))}},r.a.createElement(p.a,{icon:E.a}))))};var g=function(e){var t=e.id,a=e.records,n=Object(l.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"list-contents"},0===a.length?r.a.createElement("li",{className:"isEmpty"},"\uc6b4\ub3d9 \uae30\ub85d\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."):a.map((function(e){return r.a.createElement(f,{key:e.id,id:t,record:e})}))),r.a.createElement("button",{type:"button",className:"list-input",onClick:function(){n(function(e){return{type:"modal/OPEN_ADD_RECORD",payload:{state:"ADD_RECORD",data:{id:e}}}}(t))}},r.a.createElement(p.a,{icon:E.b})," Add Record"))};a(35);var h=function(e){var t=e.list,a=e.onRemoveList,c=e.onUpdateTitle,i=Object(n.useState)(t.title),l=Object(m.a)(i,2),o=l[0],s=l[1];return r.a.createElement("div",{className:"list"},r.a.createElement("div",{className:"list-header"},r.a.createElement("div",{className:"list-title"},r.a.createElement("input",{type:"text",onChange:function(e){e.currentTarget.value,s(e.currentTarget.value)},value:o,placeholder:"title",size:1,maxLength:100}),r.a.createElement("button",{type:"button",onClick:function(){return c(t.id,o)}},r.a.createElement(p.a,{icon:E.c}))),r.a.createElement("button",{type:"button",className:"list-del",onClick:function(){return a(t.id)}},r.a.createElement(p.a,{icon:E.d}))),r.a.createElement(g,{id:t.id,records:t.records}))};var O=function(){var e=Object(l.c)((function(e){return e.list})),t=Object(l.b)(),a=Object(n.useRef)(null),c=Object(n.useRef)(0);Object(n.useEffect)((function(){var t;c.current>0&&c.current<e.length&&(null===(t=a.current)||void 0===t||t.scrollTo(0,a.current.scrollHeight));c.current=e.length}),[e]);var i=function(e){t(function(e){return{type:"list/REMOVE_LIST",payload:e}}(e))},o=function(e,a){t(function(e,t){return{type:"list/UPDATE_TITLE",payload:{id:e,title:t}}}(e,a))};return r.a.createElement("div",{className:"list-wrapper",ref:a},e.map((function(e){return r.a.createElement(h,{key:e.id,list:e,onRemoveList:i,onUpdateTitle:o})})),r.a.createElement("button",{type:"button",className:"add_list",onClick:function(){t({type:"list/ADD_LIST",payload:{id:"".concat(Math.floor(9999*Math.random()),"_").concat(Math.floor(9999*Math.random()),"_").concat(Math.floor(9999*Math.random())),title:"",date:new Date,records:[]}})}},"Add list"))};a(36);var v=function(e){var t=e.state,a=e.data,c=e.exercises,i=e.onAddRecord,o=e.onUpdateRecord,s=e.onRemoveRecord,d=Object(n.useState)(""),u=Object(m.a)(d,2),b=u[0],y=u[1],f=Object(n.useState)(c),g=Object(m.a)(f,2),h=g[0],O=g[1],v=Object(n.useState)(0),_=Object(m.a)(v,2),D=_[0],R=_[1],w=Object(n.useState)(0),k=Object(m.a)(w,2),C=k[0],j=k[1],A=Object(n.useRef)(null);Object(n.useEffect)((function(){if("UPDATE_RECORD"===t){var e=a.record;y(e.exercise),R(e.weight),j(e.reps)}}),[t,a]);var N=Object(l.b)(),T=function(e){switch(e.currentTarget.dataset.id){case"exercise":return O(c.filter((function(t){return t.name.match(e.currentTarget.value)}))),y(e.currentTarget.value);case"weight":return R(Number(e.currentTarget.value.replace(/[^0-9]/g,"")));case"reps":return j(Number(e.currentTarget.value.replace(/[^0-9]/g,"")))}},x=function(){y(""),R(0),j(0),N({type:"modal/CLOSE_MODAL",payload:{state:"CLOSE_MODAL"}})},S=function(e){O(c.filter((function(t){return"all"===e||t.section===e})))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"input-modal"},"UPDATE_RECORD"===t&&r.a.createElement("button",{type:"button",className:"remove",onClick:function(){s&&(N(s(a.id,a.record.id)),x())}},r.a.createElement(p.a,{icon:E.e})),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""===b||D<=0||C<=0||("ADD_RECORD"===t&&i?i(a.id,{id:"",exercise:b,weight:D,reps:C}):"UPDATE_RECORD"===t&&o&&o(a.id,{id:a.record.id,exercise:b,weight:D,reps:C}),x())}},r.a.createElement("div",{className:"input-contents"},r.a.createElement("div",{className:"exercise-wrapper"},r.a.createElement("label",null,"\uc6b4\ub3d9"),r.a.createElement("input",{type:"text","data-id":"exercise",onFocus:function(e){var t;return null===(t=A.current)||void 0===t?void 0:t.classList.add("show")},onChange:T,value:b,size:1}),r.a.createElement("div",{className:"exercise-selector",ref:A},r.a.createElement("div",{className:"section"},r.a.createElement("button",{type:"button",onClick:function(){return S("all")}},"ALL"),r.a.createElement("button",{type:"button",onClick:function(){return S("leg")}},"\ud558\uccb4"),r.a.createElement("button",{type:"button",onClick:function(){return S("chest")}},"\uac00\uc2b4"),r.a.createElement("button",{type:"button",onClick:function(){return S("back")}},"\ub4f1"),r.a.createElement("button",{type:"button",onClick:function(){return S("shoulder")}},"\uc5b4\uae68"),r.a.createElement("button",{type:"button",onClick:function(){return S("arm")}},"\ud314"),r.a.createElement("button",{type:"button",onClick:function(){return S("abs")}},"\ubcf5\uadfc"),r.a.createElement("button",{type:"button",className:"right",onClick:function(){var e;return null===(e=A.current)||void 0===e?void 0:e.classList.remove("show")}},"\ucde8\uc18c")),r.a.createElement("ul",null,function(){var e=h.map((function(e){return r.a.createElement("li",{key:e.id,onClick:function(){var t;y(e.name),null===(t=A.current)||void 0===t||t.classList.remove("show")}},e.name)}));return e.push(r.a.createElement("li",{key:"addExercise",onClick:function(){}},"+\uc6b4\ub3d9 \ucd94\uac00")),e}()))),r.a.createElement("div",{className:"record-wrapper"},r.a.createElement("label",null,"\ubb34\uac8c"),r.a.createElement("label",null,"\ud69f\uc218"),r.a.createElement("input",{type:"text","data-id":"weight",onChange:T,value:D,size:1}),r.a.createElement("input",{type:"text","data-id":"reps",onChange:T,value:C,size:1})),r.a.createElement("div",{className:"control-wrapper"},"ADD_RECORD"===t&&r.a.createElement("button",{type:"submit"},"\uc800\uc7a5"),"UPDATE_RECORD"===t&&r.a.createElement("button",{type:"submit"},"\uc218\uc815"),r.a.createElement("button",{type:"reset",onClick:x},"\ucde8\uc18c"))))))};var _=function(){var e=Object(l.c)((function(e){return e.modal})),t=Object(l.c)((function(e){return e.exercise})),a=Object(l.b)();return r.a.createElement(r.a.Fragment,null,"CLOSE_MODAL"!==e.state&&r.a.createElement("div",{className:"modal-wrapper"},"ADD_RECORD"===e.state&&e.data&&r.a.createElement(v,{state:e.state,data:e.data,exercises:t,onAddRecord:function(e,t){a(function(e,t){return{type:"record/ADD_RECORD",payload:{id:e,record:{id:"".concat(e,"_").concat((new Date).getTime()),exercise:t.exercise,weight:t.weight,reps:t.reps}}}}(e,t))}}),"UPDATE_RECORD"===e.state&&e.data&&r.a.createElement(v,{state:e.state,data:e.data,exercises:t,onUpdateRecord:function(e,t){a(function(e,t){return{type:"record/UPDATE_RECORD",payload:{id:e,record:{id:t.id,exercise:t.exercise,weight:t.weight,reps:t.reps}}}}(e,t))},onRemoveRecord:function(e,t){a(function(e,t){return{type:"record/REMOVE_RECORD",payload:{id:e,record:{id:t}}}}(e,t))}})))};var D=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement(_,null))},R=a(7),w=a(18),k=localStorage.exerciseKind?JSON.parse(localStorage.exerciseKind):w.a;var C=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"kind/ADD_EXERCISE":e=t.concat({id:a.payload.id,name:a.payload.name,section:a.payload.section,lately:a.payload.lately});break;case"kind/REMOVE_EXERCISE":e=t.filter((function(e){return e.id!==a.payload}));break;case"kind/UPDATE_EXERCISE":e=t.map((function(e){return e.id===a.payload.id&&(e=Object(s.a)(Object(s.a)({},e),{},{name:a.payload.name,section:a.payload.section})),e}));break;default:e=t}return localStorage.exerciseKind=JSON.stringify(e),e},j=Object(R.b)({list:u,exercise:C,modal:y}),A=Object(R.c)(j);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:A},r.a.createElement(D,null))),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.8a30a8bc.chunk.js.map