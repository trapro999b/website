(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{25:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),r=n(24),a=n.n(r),i=(n(25),n(14)),j=n(45),u=(n(54),j.a.initializeApp({apiKey:"AIzaSyAfeAlvd7xnBe2Q2eI9ti3-Qmh1t8mr4WE",authDomain:"nen-tang-hoc-online.firebaseapp.com",projectId:"nen-tang-hoc-online",storageBucket:"nen-tang-hoc-online.appspot.com",messagingSenderId:"819826537032",appId:"1:819826537032:web:f7f03adb3de423d5fd9e7d",measurementId:"G-NRPDYGKX4D"})),b=u.auth(),l=n(3),o=s.a.createContext();function d(){return Object(c.useContext)(o)}function h(e){var t=e.children,n=Object(c.useState)(),s=Object(i.a)(n,2),r=s[0],a=s[1],j=Object(c.useState)(!0),u=Object(i.a)(j,2),d=u[0],h=u[1];Object(c.useEffect)((function(){return b.onAuthStateChanged((function(e){a(e),h(!1)}))}),[]);var O={currentUser:r,signup:function(e,t){return b.createUserWithEmailAndPassword(e,t)},login:function(e,t){return b.signInWithEmailAndPassword(e,t)},logout:function(){return b.signOut()},resetPassword:function(e){return b.sendPasswordResetEmail(e)},updatePass:function(e){return r.updatePassword(e)}};return Object(l.jsx)(o.Provider,{value:O,children:!d&&t})}var O=n(18),p=n.n(O),x=n(22),v=n(66),f=n(64),m=n(65),g=n(13),k=n(17);function N(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=Object(c.useRef)(),s=Object(c.useState)(" "),r=Object(i.a)(s,2),a=r[0],j=r[1],u=Object(c.useState)(!1),b=Object(i.a)(u,2),o=b[0],h=b[1],O=d().signup,N=Object(g.g)();function w(){return(w=Object(x.a)(p.a.mark((function c(s){return p.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(s.preventDefault(),t.current.value===n.current.value){c.next=3;break}return c.abrupt("return",j("M\u1eadt kh\u1ea9u kh\xf4ng kh\u1edbp"));case 3:return c.prev=3,j(""),h(!0),c.next=8,O(e.current.value,t.current.value);case 8:N.push("/website"),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(3),j("Kh\xf4ng t\u1ea1o \u0111\u01b0\u1ee3c t\xe0i kho\u1ea3n");case 14:h(!1);case 15:case"end":return c.stop()}}),c,null,[[3,11]])})))).apply(this,arguments)}return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"login-bgr",children:Object(l.jsxs)("div",{className:"login",children:[Object(l.jsxs)(v.a,{className:"form",onSubmit:function(e){return w.apply(this,arguments)},children:[Object(l.jsx)("input",{type:"text",placeholder:"Email",ref:e}),Object(l.jsx)("input",{type:"password",placeholder:"M\u1eadt kh\u1ea9u",ref:t}),Object(l.jsx)("input",{type:"password",placeholder:"Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u",ref:n}),Object(l.jsx)(f.a,{className:"btn_login",type:"submit",disabled:o,children:"\u0110\u0103ng k\xfd "})]}),Object(l.jsxs)("div",{className:"register-text1",children:[a&&Object(l.jsx)(m.a,{className:"alert-text",children:a}),Object(l.jsxs)("p",{children:[" \u0110\xe3 c\xf3 t\xe0i kho\u1ea3n?",Object(l.jsx)(k.b,{to:"/Login",className:"register-text2",children:" \u0110\u0103ng nh\u1eadp "})," "]})]})]})}),Object(l.jsxs)("div",{className:"box",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})]})}function w(){return Object(l.jsx)("h2",{children:"Hello from manager"})}var y=n.p+"static/media/pepe_king.d4908e11.jpg";var S=function(){var e=d().logout;function t(){return(t=Object(x.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),alert("Kh\xf4ng th\u1ec3 \u0111\u0103ng xu\u1ea5t");case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))).apply(this,arguments)}return Object(l.jsx)(s.a.Fragment,{children:Object(l.jsxs)("header",{children:[Object(l.jsx)(k.b,{to:"/profile",children:Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:y,className:"user-avt",alt:"pepe"})})}),Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{className:"nav_link",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#",children:"Trang ch\u1ee7"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#",children:"D\u1ecbch v\u1ee5"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#",children:"Gi\u1edbi thi\u1ec7u"})})]})}),Object(l.jsx)("a",{className:"signButton",onClick:function(){return t.apply(this,arguments)},children:"\u0110\u0103ng xu\u1ea5t"})]})})};function R(){var e=Object(c.useState)(""),t=Object(i.a)(e,1)[0],n=d(),s=n.currentUser,r=n.logout,a=Object(g.g)();function j(){return(j=Object(x.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(""),e.prev=1,e.next=4,r();case 4:a.push("/Login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(l.jsxs)("div",{children:[Object(l.jsx)(S,{}),Object(l.jsx)("div",{children:s.email}),Object(l.jsx)("button",{className:"btn-login",onClick:function(){return j.apply(this,arguments)},children:"\u0110\u0103ng xu\u1ea5t"})]})}function P(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=Object(c.useState)(" "),s=Object(i.a)(n,2),r=s[0],a=s[1],j=Object(c.useState)(!1),u=Object(i.a)(j,2),b=u[0],o=u[1],h=d().login,O=Object(g.g)();function N(){return(N=Object(x.a)(p.a.mark((function n(c){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),n.prev=1,a(""),o(!0),n.next=6,h(e.current.value,t.current.value);case 6:O.push("/website"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),a("Kh\xf4ng th\u1ec3 \u0111\u0103ng nh\u1eadp v\xe0o t\xe0i kho\u1ea3n");case 12:o(!1);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"login",children:[Object(l.jsxs)(v.a,{className:"form",onSubmit:function(e){return N.apply(this,arguments)},children:[Object(l.jsx)("input",{type:"text",placeholder:"Email",ref:e}),Object(l.jsx)("input",{type:"password",placeholder:"M\u1eadt kh\u1ea9u",ref:t}),Object(l.jsx)(f.a,{className:"btn_login",disabled:b,type:"submit",children:"\u0110\u0103ng nh\u1eadp "}),Object(l.jsx)("div",{children:Object(l.jsx)(k.b,{to:"/Reset_password",className:"register-text2",children:" Qu\xean m\u1eadt kh\u1ea9u?"})})]}),Object(l.jsxs)("div",{className:"register-text1",children:[r&&Object(l.jsx)(m.a,{className:"alert-text",children:r}),Object(l.jsxs)("p",{children:[" Ch\u01b0a c\xf3 t\xe0i kho\u1ea3n?",Object(l.jsx)(k.b,{to:"/Signup",className:"register-text2",children:" \u0110\u0103ng k\xfd"})]})]})]}),Object(l.jsxs)("div",{className:"box",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})]})}var E=n(29),D=n(46);function C(e){var t=e.component,n=Object(D.a)(e,["component"]),c=d().currentUser;return Object(l.jsx)(g.b,Object(E.a)(Object(E.a)({},n),{},{render:function(e){return c?Object(l.jsx)(t,Object(E.a)({},e)):Object(l.jsx)(g.a,{to:"/Login"})}}))}function I(){d().currentUser;return Object(l.jsxs)("div",{children:[Object(l.jsx)(S,{}),Object(l.jsxs)("div",{className:"box",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})]})}function _(){var e=Object(c.useRef)(),t=Object(c.useState)(" "),n=Object(i.a)(t,2),s=n[0],r=n[1],a=Object(c.useState)(" "),j=Object(i.a)(a,2),u=(j[0],j[1]),b=Object(c.useState)(!1),o=Object(i.a)(b,2),h=o[0],O=(o[1],d().resetPassword);function g(){return(g=Object(x.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,r(""),t.next=5,O(e.current.value);case 5:u("Check your inbox"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),r("Failed to reset password");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}return Object(l.jsxs)("div",{className:"login",children:[s&&Object(l.jsx)(m.a,{variant:"danger",children:s}),Object(l.jsxs)(v.a,{className:"form",onSubmit:function(e){return g.apply(this,arguments)},children:[Object(l.jsx)("input",{type:"text",placeholder:"Email",ref:e}),Object(l.jsx)(f.a,{className:"btn_login",disabled:h,type:"submit",children:" Reset "})]}),Object(l.jsx)("div",{children:Object(l.jsx)(k.b,{to:"/Login",className:"register-text2",children:" Quay tr\u1edf l\u1ea1i \u0111\u0103ng nh\u1eadp"})})]})}function A(){Object(c.useRef)();var e=d(),t=e.currentUser,n=e.updatePass,s=Object(c.useRef)(),r=Object(c.useState)(" "),a=Object(i.a)(r,2),j=a[0],u=a[1],b=Object(c.useState)(!1),o=Object(i.a)(b,2),h=o[0],O=o[1],p=(d().login,Object(g.g)());return Object(l.jsxs)("div",{className:"login",children:[j&&Object(l.jsx)(m.a,{variant:"danger",children:j}),Object(l.jsxs)(v.a,{className:"form",onSubmit:function(e){e.preventDefault(),O(!0),u("");var t=[];s.current.value&&t.push(n(s.current.value)),Promise.all(t).then((function(){p.push("/Login")})).catch((function(){return u("Kh\xf4ng th\u1ec3 c\u1eadp nh\u1eadt")})).finally((function(){return O(!1)}))},children:[Object(l.jsx)("h3",{children:" Th\xf4ng tin t\xe0i kho\u1ea3n "}),Object(l.jsx)("div",{children:" Email: "}),Object(l.jsxs)("span",{children:[" ",t.email," "]}),Object(l.jsx)("input",{type:"password",placeholder:"M\u1eadt kh\u1ea9u m\u1edbi",ref:s}),Object(l.jsx)(f.a,{className:"btn_login",disabled:h,type:"submit",children:"C\u1eadp nh\u1eadt"})]}),Object(l.jsx)(k.b,{to:"website",children:Object(l.jsx)("p",{className:"register-text2",children:"Quay tr\u1edf l\u1ea1i trang ch\u1ee7"})})]})}var K=function(){return Object(l.jsx)(k.a,{children:Object(l.jsx)(h,{children:Object(l.jsxs)(g.d,{children:[Object(l.jsx)(C,{exact:!0,path:"/website",component:I}),Object(l.jsx)(g.b,{path:"/Profile",component:A}),Object(l.jsx)(g.b,{path:"/Signup",component:N}),Object(l.jsx)(g.b,{path:"/manager",component:w}),Object(l.jsx)(g.b,{path:"Dashboard",component:R}),Object(l.jsx)(g.b,{path:"/Login",component:P}),Object(l.jsx)(g.b,{path:"/Reset_password",component:_})]})})})};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(K,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.74a5bef6.chunk.js.map