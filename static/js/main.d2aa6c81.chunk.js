(window["webpackJsonpto-do-list"]=window["webpackJsonpto-do-list"]||[]).push([[0],{25:function(e,t,a){e.exports=a(39)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(22),o=a.n(s),i=(a(30),a(31),a(8)),l=a(6),c=a(11),d=a(12),u=a(13),p=a(15),m=a(14),v=a(16),w=a(5),E=function(e){var t=Object(n.useState)(""),a=Object(w.a)(t,2),s=a[0],o=a[1];return"text"!==e.type?null:r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u0442\u0432\u0435\u0442",name:"textInput",type:e.type,value:s,onChange:function(t){!function(t,a,n){var r=t.target.value;o([r]);var s=r===a?n:0;e.addPoint(e.index,s)}(t,e.answers[0].answer,e.answers[0].point)}}))))},f=function(e){var t=Object(n.useState)(""),a=Object(w.a)(t,2),s=(a[0],a[1]),o=function(t){var a=t.target.value;s([a]),e.addPoint(e.index,+a)};if("radio"!==e.type)return null;var i=e.answers.map((function(t){return r.a.createElement("div",{key:t.id},r.a.createElement("label",null,r.a.createElement("input",{name:e.name,type:e.type,value:t.point,onChange:o}),t.answer))}));return r.a.createElement("div",null,r.a.createElement("div",null,i))},b=(a(32),function(e){return r.a.createElement(r.a.Fragment,null,e.isOpenModal&&r.a.createElement("div",{className:"modalOverlay"},r.a.createElement("div",{className:"modalWindow"},r.a.createElement("div",{className:"modalHeader"},r.a.createElement("div",{className:"modalTitle"},e.title)),r.a.createElement("div",{className:"modalBody"},e.children),r.a.createElement("div",{className:"modalFooter"},r.a.createElement(i.b,{to:"/result"},r.a.createElement("button",{className:"btn"},"\u0414\u0430")),r.a.createElement("button",{className:"btn",onClick:e.setIsCloseModal},"\u041d\u0435\u0442")))))});b.defaultProps={title:"\u041a\u0430\u0436\u0434\u044b\u0439 \u043d\u0435 \u043e\u0442\u0432\u0435\u0447\u0435\u043d\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044f \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u043c, \u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c?",children:"\u0425\u043e\u0440\u043e\u0448\u043e \u043f\u043e\u0434\u0443\u043c\u0430\u0439\u0442\u0435!"};var h=b,y=function(e){var t=Object(n.useState)([]),a=Object(w.a)(t,2),s=(a[0],a[1]);if("checkbox"!==e.type)return null;var o=e.answers.map((function(t,a){return r.a.createElement("div",{key:t.id},r.a.createElement("label",null,r.a.createElement("input",{type:e.type,name:t.name,value:t.answer,onChange:function(n){return function(t,a,n){var r=t.target.checked;s([r]);var o=r?n:0;e.addPointCheckbox(o,a,e.index)}(n,a,t.point)}}),t.answer),r.a.createElement("br",null))}));return r.a.createElement("div",null,o)},S=function(e){var t=Object(n.useState)(""),a=Object(w.a)(t,2),s=a[0],o=a[1];if("select"!==e.type)return null;var i=e.answers.map((function(e){return r.a.createElement("option",{key:e.id,value:[e.point,e.answer]},e.answer)}));return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("select",{name:"select",value:s,onChange:function(t){!function(t){var a=t.target.value;o([a]),e.addPoint(e.index,parseInt(a))}(t)}},i)))},O=a(9),g=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={pointsCheckbox:[]},a.addPointCheckbox=function(e,t,n){var r=Object(c.a)(a.state.pointsCheckbox);r[t]=e,a.setState({pointsCheckbox:r});var s=r.reduce((function(e,t){return"number"===typeof t?e+t:e}),0);a.props.addPoint(n,s)},a.questions=O.data.map((function(e,t){return r.a.createElement("div",{key:e.id,className:"container"},r.a.createElement("strong",null,++t+".",e.question),r.a.createElement(E,{addPoint:a.props.addPoint,index:t,type:e.type,answers:e.answersArr,user:a.props.state.storageState,addStateUser:a.props.addStateUser}),r.a.createElement(f,{type:e.type,name:e.name,answers:e.answersArr,index:t,addPoint:a.props.addPoint}),r.a.createElement(y,{type:e.type,answers:e.answersArr,index:t,addPointCheckbox:a.addPointCheckbox}),r.a.createElement(S,{type:e.type,answers:e.answersArr,index:t,addPoint:a.props.addPoint}))})),a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.props.state.redirect?r.a.createElement(l.a,{to:"/result"}):r.a.createElement("div",null,this.questions,r.a.createElement("div",{className:"container"},r.a.createElement("button",{className:"btn",onClick:this.props.result},"\u041e\u0442\u0432\u0435\u0442\u0438\u0442\u044c")),r.a.createElement(h,{isOpenModal:this.props.state.isOpenModal,setIsCloseModal:this.props.setIsCloseModal}))}}]),t}(n.Component),k=(a(38),function(e){var t=O.data.map((function(e,t){return e.answersArr.filter((function(e){return e.point>0})).map((function(e){return r.a.createElement("h3",{key:e.id},t+1,".",e.answer)}))}));return r.a.createElement("div",null,7===e.totalScores?r.a.createElement("div",{className:"win"},r.a.createElement("p",null,"\u0422\u0435\u0441\u0442 \u043f\u0440\u043e\u0439\u0434\u0435\u043d"),r.a.createElement("br",null),e.totalScores+" \u0431\u0430\u043b\u043b\u043e\u0432"):r.a.createElement("div",null,r.a.createElement("div",{className:"test"},r.a.createElement("p",null,"\u0422\u0435\u0441\u0442 \u043d\u0435 \u043f\u0440\u043e\u0439\u0434\u0435\u043d "),r.a.createElement("br",null),"\u0412\u0430\u0448 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 - "+e.totalScores+" \u0431\u0430\u043b\u043b\u0430 \u0438\u0437 7"),r.a.createElement("div",null,r.a.createElement("h2",null,"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0435 \u043e\u0442\u0432\u0435\u0442\u044b:"),t)))}),x=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={points:[],totalScores:0,isOpenModal:!1,redirect:!1,storageState:[]},a.addStateUser=function(e,t){var n=Object(c.a)(a.state.storageState);n[e]=t,localStorage.setItem("usersState",JSON.stringify(n))},a.addPoint=function(e,t){var n=Object(c.a)(a.state.points);n[e]=t,a.setState({points:n}),a.totalPoints()},a.totalPoints=function(){a.setState((function(e){return{totalScores:e.points.reduce((function(e,t){return"number"===typeof t?e+t:e}),0)}}))},a.setIsOpenModal=function(){a.setState({isOpenModal:!0})},a.redirectPageResult=function(){a.setState({redirect:!0})},a.result=function(){a.state.points.filter((function(e){return void 0!==e})).length===O.data.length?a.redirectPageResult():a.setIsOpenModal()},a.setIsCloseModal=function(){a.setState({isOpenModal:!1})},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("usersState");this.setState({storageState:JSON.parse(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(l.b,{path:"/test",render:function(){return r.a.createElement(g,{state:e.state,addPoint:e.addPoint,setIsCloseModal:e.setIsCloseModal,result:e.result,addStateUser:e.addStateUser})}}),r.a.createElement(l.b,{path:"/result",render:function(){return r.a.createElement(k,{totalScores:e.state.totalScores})}}))}}]),t}(r.a.Component),P=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{to:"/test"}),r.a.createElement("div",{className:"app-wrapper"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"\u0422\u0435\u0441\u0442 \u043f\u043e \u0412\u0441\u0435\u043c\u0438\u0440\u043d\u043e\u0439 \u0438\u0441\u0442\u043e\u0440\u0438\u0438")),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(x,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e){e.exports=JSON.parse('{"data":[{"question":"\u0412 \u043a\u0430\u043a\u043e\u043c \u0433\u043e\u0434\u0443 \u0434\u043e \u043d\u0430\u0448\u0435\u0439 \u044d\u0440\u044b \u043f\u043e\u0441\u0442\u0440\u043e\u0438\u043b\u0438 \u043f\u0438\u0440\u0430\u043c\u0438\u0434\u0443 \u0425\u0435\u043e\u043f\u0441\u0430?","id":1,"type":"text","answersArr":[{"answer":"2560","point":1,"id":11}]},{"question":"\u0413\u0434\u0435 \u0431\u044b\u043b\u0430 \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0430 \u0441\u0430\u043c\u0430\u044f \u0434\u043b\u0438\u043d\u043d\u0430\u044f \u0441\u0442\u0435\u043d\u0430 \u0432 \u043c\u0438\u0440\u0435?","id":2,"type":"radio","name":"radio1","answersArr":[{"answer":"\u0412 \u041a\u0438\u0442\u0430\u0435","point":1,"id":21},{"answer":"\u0412 \u0423\u043a\u0440\u0430\u0438\u043d\u0435","point":0,"id":22},{"answer":"\u0412 \u0421\u0428\u0410","point":0,"id":23}]},{"question":"\u041a\u0430\u043a\u043e\u0439 \u043d\u0430\u0440\u043e\u0434 \u0432 \u0434\u0440\u0435\u0432\u043d\u043e\u0441\u0442\u0438 \u0441\u0442\u0430\u043b \u0438\u0437\u0433\u043e\u0442\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c \u0432\u043f\u0435\u0440\u0432\u044b\u0435 \u0441\u0430\u0445\u0430\u0440 \u0438\u0437 \u0441\u0430\u0445\u0430\u0440\u043d\u043e\u0433\u043e \u0442\u0440\u043e\u0441\u0442\u043d\u0438\u043a\u0430?","id":3,"type":"select","answersArr":[{"answer":"\u0415\u0433\u0438\u043f\u0442\u044f\u043d\u0435","point":0,"id":31},{"answer":"\u0424\u0438\u043d\u0438\u043a\u0438\u0439\u0446\u044b","point":0,"id":32},{"answer":"\u0418\u043d\u0434\u0438\u0439\u0446\u044b","point":1,"id":33},{"answer":"\u041a\u0438\u0442\u0430\u0439\u0446\u044b","point":0,"id":34}]},{"question":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0432\u0443\u0445 \u0432\u044b\u0434\u0430\u044e\u0449\u0438\u0445\u0441\u044f \u0443\u0447\u0451\u043d\u044b\u0445 \u043a\u043e\u043d\u0435\u0446 19-\u0433\u043e \u0438 \u043d\u0430\u0447\u0430\u043b\u043e 20-\u0433\u043e \u0432\u0435\u043a\u043e\u0432.","id":4,"type":"checkbox","answersArr":[{"answer":"\u0412\u0438\u043a\u0442\u043e\u0440 \u0426\u043e\u0439","point":0,"id":41},{"answer":"\u041c\u0435\u043d\u0434\u0435\u043b\u0435\u0435\u0432 \u0414.\u0418.","point":0.5,"id":42},{"answer":"\u041d\u0430\u043f\u043e\u043b\u0435\u043e\u043d \u0411\u043e\u043d\u0430\u043f\u0430\u0440\u0442","point":0,"id":43},{"answer":"\u041d\u0438\u043a\u043e\u043b\u0430 \u0422\u0435\u0441\u043b\u0430","point":0.5,"id":44}]},{"question":"\u0421\u0435\u0439\u0447\u0430\u0441 \u044d\u0442\u043e \u0437\u0434\u0430\u043d\u0438\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u0440\u0443\u0438\u043d\u044b. \u0410 \u043f\u0440\u0438 \u0435\u0433\u043e \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u0438 \u0432 80 \u0433\u043e\u0434\u0443 \u043d.\u044d., \u044d\u0442\u043e \u0431\u044b\u043b \u0441\u0430\u043c\u044b\u0439 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0440\u0438\u043c\u0441\u043a\u0438\u0439 \u0441\u0442\u0430\u0434\u0438\u043e\u043d. \u041a\u0430\u043a \u043e\u043d \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f?","id":5,"type":"select","answersArr":[{"answer":"\u041f\u0430\u043d\u0442\u0438\u043e\u043d","point":0,"id":51},{"answer":"\u0412\u0435\u043b\u0438\u043a\u0438\u0439 \u041c\u0430\u043d\u0435\u0436","point":0,"id":52},{"answer":"\u041a\u043e\u043b\u0438\u0437\u0435\u0439","point":1,"id":53},{"answer":"\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0446\u0438\u0440\u043a","point":0,"id":54}]},{"question":"\u0414\u0440\u0435\u0432\u043d\u0435\u0440\u0438\u043c\u0441\u043a\u0438\u0439 \u0433\u043e\u0440\u043e\u0434 \u043d\u0435\u0434\u0430\u043b\u0435\u043a\u043e \u043e\u0442 \u041d\u0435\u0430\u043f\u043e\u043b\u044f, \u0432 \u0440\u0435\u0433\u0438\u043e\u043d\u0435 \u041a\u0430\u043c\u043f\u0430\u043d\u0438\u044f, \u043f\u043e\u0433\u0440\u0435\u0431\u0451\u043d\u043d\u044b\u0439 \u043f\u043e\u0434 \u0441\u043b\u043e\u0435\u043c \u0432\u0443\u043b\u043a\u0430\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043f\u0435\u043f\u043b\u0430 \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0438\u0437\u0432\u0435\u0440\u0436\u0435\u043d\u0438\u044f \u0412\u0435\u0437\u0443\u0432\u0438\u044f 24 \u0430\u0432\u0433\u0443\u0441\u0442\u0430 79 \u0433\u043e\u0434\u0430?","id":6,"type":"radio","name":"radio2","answersArr":[{"answer":"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u0438\u044f","point":0,"id":61},{"answer":"\u041f\u043e\u043c\u043f\u0435\u0438","point":1,"id":62},{"answer":"\u041c\u0435\u0441\u0441\u0438\u043d\u0430","point":0,"id":63},{"answer":"\u0420\u0438\u043c","point":0,"id":64}]},{"question":"\u0412 \u043a\u0430\u043a\u043e\u043c \u0433\u043e\u0434\u0443 \u0431\u044b\u043b \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d \u0421\u0421\u0421\u0420?","id":7,"type":"text","answersArr":[{"answer":"1922","point":1,"id":77}]}]}')}},[[25,1,2]]]);
//# sourceMappingURL=main.d2aa6c81.chunk.js.map