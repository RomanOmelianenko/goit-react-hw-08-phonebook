(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[7],{88:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(10),l=a(3),i=a(33),r=a(34),c=a(36),o=a(35),h=a(0),b=a(15),p=a(17),u={form:{width:320},label:{display:"flex",flexDirection:"column",padding:4}},j=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",password:""},e.handleChange=function(t){var a=t.target,n=a.name,s=a.value;e.setState(Object(l.a)({},n,s))},e.handleSubmit=function(t){t.preventDefault(),e.props.onRegister(Object(s.a)({},e.state)),e.setState({name:"",email:"",password:""})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.email,s=e.password;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Register page"}),Object(n.jsxs)("form",{onSubmit:this.handleSubmit,style:u.form,children:[Object(n.jsxs)("label",{style:u.label,children:["Name",Object(n.jsx)("input",{type:"text",name:"name",value:t,onChange:this.handleChange})]}),Object(n.jsxs)("label",{style:u.label,children:["Email",Object(n.jsx)("input",{type:"email",name:"email",value:a,onChange:this.handleChange})]}),Object(n.jsxs)("label",{style:u.label,children:["Password",Object(n.jsx)("input",{type:"password",name:"password",value:s,onChange:this.handleChange})]}),Object(n.jsx)("button",{type:"submit",children:"Register"})]})]})}}]),a}(h.Component);t.default=Object(b.b)(null,{onRegister:p.a.register})(j)}}]);
//# sourceMappingURL=7.b3635a55.chunk.js.map