(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[7],{142:function(a,e,t){"use strict";e.a={initial:{scale:0},animate:{scale:1},exit:{scale:0},transition:{ease:"easeOut",duration:.3}}},148:function(a,e,t){a.exports={Header:"LoginView_Header__1BaTG",TaskEditor:"LoginView_TaskEditor__2B1bL",TaskEditor_label:"LoginView_TaskEditor_label__3PW8u",TaskEditor_input:"LoginView_TaskEditor_input__3DlqN",Button:"LoginView_Button__2wdY4",TaskEditorinput:"LoginView_TaskEditorinput__1wOeG"}},168:function(a,e,t){"use strict";t.r(e);var i=t(2),n=t(13),s=t(3),r=t(51),o=t(52),l=t(54),c=t(53),d=t(0),u=t(21),b=t(22),h=t(55),m=t(137),p=t(174),j=t(171),_=t(142),g=t(148),O=t.n(g),k=function(a){Object(l.a)(t,a);var e=Object(c.a)(t);function t(){var a;Object(r.a)(this,t);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return(a=e.call.apply(e,[this].concat(o))).state={name:"",email:"",password:""},a.handleChange=function(e){var t=e.target,i=t.name,n=t.value;a.setState(Object(s.a)({},i,n))},a.handleSubmit=function(e){e.preventDefault(),a.props.onRegister(Object(n.a)({},a.state)),a.setState({name:"",email:"",password:""})},a}return Object(o.a)(t,[{key:"render",value:function(){var a=this.state,e=a.name,t=a.email,n=a.password,s=this.props.isLoading;return Object(i.jsxs)("div",{children:[Object(i.jsx)(p.a,{children:Object(i.jsx)(j.a.h2,{className:O.a.Header,initial:"initial",animate:"animate",exit:"exit",transition:"transition",variants:_.a,children:"Registration form"})}),Object(i.jsx)(p.a,{children:Object(i.jsxs)(j.a.form,{initial:"initial",animate:"animate",exit:"exit",transition:"transition",variants:_.a,onSubmit:this.handleSubmit,className:O.a.TaskEditor,children:[Object(i.jsxs)("label",{className:O.a.TaskEditor_label,children:["Name",Object(i.jsx)("input",{className:O.a.TaskEditor_input,type:"text",name:"name",value:e,onChange:this.handleChange})]}),Object(i.jsxs)("label",{className:O.a.TaskEditor_label,children:["Email",Object(i.jsx)("input",{className:O.a.TaskEditor_input,type:"email",name:"email",value:t,onChange:this.handleChange})]}),Object(i.jsxs)("label",{className:O.a.TaskEditor_label,children:["Password",Object(i.jsx)("input",{className:O.a.TaskEditor_input,type:"password",name:"password",value:n,onChange:this.handleChange})]}),!s&&Object(i.jsx)(m.a,{type:"submit",variant:"contained",color:"primary",className:O.a.Button,children:"Register"}),s&&Object(i.jsx)(h.a,{})]})})]})}}]),t}(d.Component);e.default=Object(u.b)((function(a){return{isLoading:b.b.getLoading(a)}}),{onRegister:b.a.register})(k)}}]);
//# sourceMappingURL=7.8de27610.chunk.js.map