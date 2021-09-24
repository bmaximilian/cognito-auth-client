(this["webpackJsonpcognito-auth-client"]=this["webpackJsonpcognito-auth-client"]||[]).push([[0],{185:function(e,t,n){},187:function(e,t,n){},214:function(e,t){},221:function(e,t){},273:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),i=n(47),a=n.n(i),o=(n(185),n(312)),s=n(16),u=n.n(s),l=n(15),d=n(24),j=n(5),b=(n(187),n(306)),h=n(307),O=n(291),f=n(292),p=n(293),x=n(290),g=n(4),v=function(e){return Object(g.jsx)(x.a,Object(l.a)({borderWidth:"1px",borderRadius:"lg",overflow:"hidden",padding:"1.5rem",mb:"1rem"},e))},m=function(e){return Object(g.jsx)(v,{borderWidth:"0",children:Object(g.jsx)(O.a,{align:"center",children:new Array(e.steps).fill(0).map((function(t,n){return Object(g.jsxs)(c.a.Fragment,{children:[Object(g.jsx)(f.a,{size:"lg",borderRadius:"full",variant:"solid",transition:"color background-color 1s",colorScheme:n+1===e.currentStep?"teal":void 0,children:Object(g.jsx)(f.b,{children:n+1})}),n!==e.steps-1&&Object(g.jsx)(p.a,{marginX:"1rem"})]},n)}))})})},k=n(299),w=n(315),y=n(314),S=n(153),C=n.n(S),T=function(e){return Object(g.jsx)(x.a,Object(l.a)({mb:"0.5rem",fontWeight:"semibold",as:"h3",lineHeight:"tight",isTruncated:!0},e))},I=function(e){return Object(g.jsxs)(v,{children:[Object(g.jsx)(T,{children:e.title}),Object(g.jsx)(w.b,{spacing:3,children:e.children})]})},P=n(316),A=function(e){return Object(g.jsx)(P.a,Object(l.a)({focusBorderColor:"teal.500",size:"lg"},e))},D=n(311),E=function(e){return Object(g.jsx)(D.a,Object(l.a)({borderWidth:"1px",borderRadius:"lg",padding:"1.5rem",variant:"solid",colorScheme:"teal"},e))},R=n(309),W=n(313),J=function(e){var t=Object(r.useState)(),n=Object(j.a)(t,2),c=n[0],i=n[1];function a(){return(a=Object(d.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.onPinEntered(n);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),i(t.t0.message);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))).apply(this,arguments)}return Object(g.jsxs)(R.a,{isOpen:e.isOpen,onClose:function(){e.onClose&&e.onClose()},children:[Object(g.jsx)(R.f,{}),Object(g.jsxs)(R.d,{children:[Object(g.jsx)(R.e,{children:e.title}),e.onClose&&Object(g.jsx)(R.c,{}),Object(g.jsxs)(R.b,{pb:"1.5rem",children:[Object(g.jsx)(x.a,{as:"p",mb:"1rem",children:e.description}),Object(g.jsx)(w.a,{align:"center",justifyContent:"center",display:"flex",children:Object(g.jsxs)(W.a,{type:"alphanumeric",mask:!0,onComplete:function(e){return a.apply(this,arguments)},isInvalid:!!c,autoFocus:!0,children:[Object(g.jsx)(W.b,{}),Object(g.jsx)(W.b,{}),Object(g.jsx)(W.b,{}),Object(g.jsx)(W.b,{})]})})]})]})]})},B=n(6),F=n(102),L=n(156),q=n.n(L),N=Object(r.createContext)(void 0),Y={userPool:{id:void 0,region:void 0,clientId:void 0,secret:void 0},username:void 0,password:void 0,metadata:{scope:void 0},save:!0},z=function(e){var t={getAll:function(){return Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",JSON.parse(localStorage.getItem("savedLogins")||"{}"));case 1:case"end":return e.stop()}}),e)})))()},keys:function(){var e=this;return Object(d.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Object,t.next=3,e.getAll();case 3:return t.t1=t.sent,t.abrupt("return",t.t0.keys.call(t.t0,t.t1));case 5:case"end":return t.stop()}}),t)})))()},get:function(e,t){var n=this;return Object(d.a)(u.a.mark((function r(){var c,i;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.getAll();case 2:if((c=r.sent)[e]){r.next=5;break}throw new Error("No data found for key ".concat(e));case 5:return i=F.AES.decrypt(c[e],t).toString(F.enc.Utf8),r.abrupt("return",q()(Y,JSON.parse(i)));case 7:case"end":return r.stop()}}),r)})))()},store:function(e,t,n){var r=this;return Object(d.a)(u.a.mark((function c(){var i,a;return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:i=r.getAll(),a=F.AES.encrypt(JSON.stringify(t),n).toString(),localStorage.setItem("savedLogins",JSON.stringify(Object(l.a)(Object(l.a)({},i),{},Object(B.a)({},e,a))));case 3:case"end":return c.stop()}}),c)})))()}};return Object(g.jsx)(N.Provider,{value:t,children:e.children})};function U(){var e=Object(r.useContext)(N);if(!e)throw new Error("Component that calls useSafe needs to be a deep child of <SafeProvider>");return e}var M=n(317),X=n(301),H=function(e){return Object(g.jsx)(M.a,{status:"error",borderRadius:"lg",children:Object(g.jsxs)(w.b,{spacing:2,children:[Object(g.jsxs)(O.a,{align:"center",children:[Object(g.jsxs)(O.a,{flex:1,children:[Object(g.jsx)(M.c,{}),Object(g.jsx)(M.d,{mr:2,children:e.title})]}),Object(g.jsx)(X.a,{})]}),Object(g.jsx)(M.b,{children:e.message})]})})},G=n(166),K=n(303),Q=["children"],V=function(e){var t=e.children,n=Object(G.a)(e,Q);return Object(g.jsx)(v,Object(l.a)(Object(l.a)({borderWidth:0,paddingY:"0.5rem",paddingX:"0.5rem"},n),{},{children:Object(g.jsx)(K.a,{fontSize:"md",children:t})}))},Z=function(e){var t=Object(r.useState)(""),n=Object(j.a)(t,2),c=n[0],i=n[1],a=Object(r.useState)(""),o=Object(j.a)(a,2),s=o[0],b=o[1],h=Object(r.useState)(""),O=Object(j.a)(h,2),f=O[0],p=O[1],x=Object(r.useState)(""),v=Object(j.a)(x,2),m=v[0],S=v[1],T=Object(r.useState)(""),P=Object(j.a)(T,2),D=P[0],R=P[1],W=Object(r.useState)(""),B=Object(j.a)(W,2),F=B[0],L=B[1],q=Object(r.useState)(""),N=Object(j.a)(q,2),Y=N[0],z=N[1],M=Object(r.useState)(""),X=Object(j.a)(M,2),G=X[0],K=X[1],Q=Object(r.useState)(!1),Z=Object(j.a)(Q,2),$=Z[0],_=Z[1],ee=Object(r.useState)(),te=Object(j.a)(ee,2),ne=te[0],re=te[1],ce=Object(r.useState)(!1),ie=Object(j.a)(ce,2),ae=ie[0],oe=ie[1],se=Object(r.useState)(!1),ue=Object(j.a)(se,2),le=ue[0],de=ue[1],je=U();function be(){return{userPool:{id:s,region:f,clientId:m,secret:D||void 0},username:F,password:Y,metadata:{scope:G||void 0},save:$}}function he(){e.onComplete(),oe(!1)}function Oe(){return(Oe=Object(d.a)(u.a.mark((function t(){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,oe(!0),n=be(),t.next=5,e.onSubmit(n);case 5:if(r=Object(l.a)({title:c},n),!$||C()(r,e.initialData)){t.next=9;break}return de(!0),t.abrupt("return");case 9:he(),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),re(t.t0.message),oe(!1);case 16:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}function fe(){return(fe=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je.store(c,be(),t);case 2:de(!1),he();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){var t,n,r,c,a,o,s,u,l;i((null===(t=e.initialData)||void 0===t?void 0:t.title)||""),b((null===(n=e.initialData)||void 0===n?void 0:n.userPool.id)||""),p((null===(r=e.initialData)||void 0===r?void 0:r.userPool.region)||"eu-central-1"),S((null===(c=e.initialData)||void 0===c?void 0:c.userPool.clientId)||""),R((null===(a=e.initialData)||void 0===a?void 0:a.userPool.secret)||""),L((null===(o=e.initialData)||void 0===o?void 0:o.username)||""),z((null===(s=e.initialData)||void 0===s?void 0:s.password)||""),K((null===(u=e.initialData)||void 0===u?void 0:u.metadata.scope)||""),_(!!(null===(l=e.initialData)||void 0===l?void 0:l.save))}),[e.initialData]),Object(g.jsxs)(k.a,{in:!0,offsetY:"2rem",children:[Object(g.jsxs)(V,{children:["Fill out this form to test the login with a specific user pool client.",Object(g.jsx)("br",{}),"The ",Object(g.jsx)("strong",{children:"title"})," entered in the application section will be used to store the data set if"," ",Object(g.jsx)("strong",{children:"Save for later"})," is activated."]}),Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(){Oe.apply(this,arguments)}()},children:[Object(g.jsx)(I,{title:"Application",children:Object(g.jsx)(A,{placeholder:"Title",isRequired:!0,value:c,onChange:function(e){return i(e.target.value)}})}),Object(g.jsxs)(I,{title:"User Pool Client",children:[Object(g.jsx)(A,{placeholder:"ID",isRequired:!0,value:s,onChange:function(e){return b(e.target.value)}}),Object(g.jsx)(A,{placeholder:"Region",isRequired:!0,value:f,onChange:function(e){return p(e.target.value)}}),Object(g.jsx)(A,{placeholder:"Client ID",isRequired:!0,value:m,onChange:function(e){return S(e.target.value)}}),Object(g.jsx)(A,{placeholder:"Secret",value:D,onChange:function(e){return R(e.target.value)}})]}),Object(g.jsxs)(I,{title:"Login",children:[Object(g.jsx)(A,{placeholder:"Username",value:F,isRequired:!0,onChange:function(e){return L(e.target.value)}}),Object(g.jsx)(A,{placeholder:"Password",isRequired:!0,type:"password",value:Y,onChange:function(e){return z(e.target.value)}}),Object(g.jsx)(A,{placeholder:"Scope",value:G,onChange:function(e){return K(e.target.value)}})]}),Object(g.jsxs)(w.b,{spacing:3,children:[Object(g.jsx)(y.a,{colorScheme:"teal",isChecked:$,onChange:function(e){return _(e.target.checked)},children:"Save for later"}),!!ne&&Object(g.jsx)(H,{title:"Error during login",message:ne}),Object(g.jsx)(E,{isLoading:ae,type:"submit",loadingText:"Signing in",children:"Login"})]})]}),Object(g.jsx)(J,{isOpen:le,onPinEntered:function(e){return fe.apply(this,arguments)},title:"Enter security pin for ".concat(c),description:"The pin is needed to encrypt and store your saved data securely. To access the remembered data, the pin needs to be re-entered again."})]})},$=n(304),_=Object.assign((function(e){return Object(g.jsx)(w.b,Object(l.a)({spacing:3},e))}),{Item:function(e){return Object(g.jsx)(D.a,Object(l.a)({borderWidth:"1px",borderRadius:"lg",padding:"1.5rem",variant:"outline"},e))}}),ee=function(e){return Object(r.useEffect)((function(){e.items.length||"function"!==typeof e.onAdd||e.onAdd()}),[e.items.length,e.onAdd]),Object(g.jsxs)(k.a,{in:!0,offsetY:"2rem",children:[Object(g.jsxs)(V,{children:["Click on ",Object(g.jsx)("strong",{children:"Continue without saved data"})," to create a new login credential data set.",Object(g.jsx)("br",{}),"It is possible to store these datasets encrypted and protected with a pin directly in your client. Stored datasets appear in this list. The stored data can be loaded by simply clicking on an entry and entering the pin which has been set when storing the data."]}),Object(g.jsxs)(_,{children:[e.items.map((function(t){return Object(g.jsx)(_.Item,{onClick:function(){return e.onItemClick(t)},children:t.title},t.title)})),Object(g.jsxs)(E,{onClick:e.onAdd,children:[Object(g.jsx)($.a,{}),"\u2002Continue without saved data"]})]})]})},te=n(157),ne=n.n(te),re=n(310),ce=Object(r.createContext)(void 0);function ie(){var e=Object(r.useContext)(ce);if(!e)throw new Error("The component that calls useAuthentication() needs to be a deep child of and authentication context");return e}var ae=n(308),oe=n(31),se=n(55),ue=function(){function e(){Object(oe.a)(this,e),this.map={}}return Object(se.a)(e,[{key:"clear",value:function(){this.map={}}},{key:"getItem",value:function(e){return this.map[e]||null}},{key:"removeItem",value:function(e){delete this.map[e]}},{key:"setItem",value:function(e,t){this.map[e]=t}}]),e}(),le=function(e){var t=Object(r.useState)(),n=Object(j.a)(t,2),c=n[0],i=n[1],a={login:function(e){return Object(d.a)(u.a.mark((function t(){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={Auth:{region:e.userPool.region,userPoolId:e.userPool.id,userPoolWebClientId:e.userPool.clientId,mandatorySignIn:!0,storage:new ue,clientMetadata:e.metadata}},ae.a.configure(n),t.next=4,ae.a.signIn(e.username,e.password,{scope:e.metadata.scope||""});case 4:return t.next=6,ae.a.currentSession();case 6:r=t.sent,i({accessToken:{jwt:r.getAccessToken().getJwtToken(),decoded:r.getAccessToken().decodePayload()},idToken:{jwt:r.getIdToken().getJwtToken(),decoded:r.getIdToken().decodePayload()}});case 8:case"end":return t.stop()}}),t)})))()},getTokens:function(){if(!c)throw new Error("You need to authenticate before calling getTokens()");return c},hasTokens:function(){return!!c}};return Object(g.jsx)(ce.Provider,{value:a,children:e.children})},de=function(e){return Object(g.jsx)(_.Item,{flex:1,onClick:e.onClick,children:Object(g.jsxs)(O.a,{justify:"space-between",flex:1,flexWrap:"wrap",align:"start",direction:"column",children:[Object(g.jsxs)("span",{style:{marginBottom:"0.5rem"},children:[e.title,":"]}),Object(g.jsx)("span",{style:{wordBreak:"break-all",whiteSpace:"pre-wrap",textAlign:"left",fontWeight:"normal"},children:e.token})]})})},je=function(){var e=ie(),t=Object(re.a)();if(!e.hasTokens())return null;var n=e.getTokens();function r(e){ne()(e.jwt),t({title:"Copied to clipboard.",description:"The token is copied to your clipboard.",status:"success",duration:9e3,isClosable:!0})}return Object(g.jsxs)(k.a,{in:!0,offsetY:"2rem",children:[Object(g.jsxs)(V,{children:["The tokens from the successful login are displayed here.",Object(g.jsx)("br",{}),"A token can be copied to clipboard by clicking on it.",Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),"There are 2 types of tokens: ",Object(g.jsx)("br",{}),"The ",Object(g.jsx)("strong",{children:"idToken"})," contains the information to validate the token (like expiry date, issuer, etc.). But this token also contains custom claims, which might be permissions, scopes and others that are needed to provide deeper user information for the underlying services the user authenticates against.",Object(g.jsx)("br",{}),"The ",Object(g.jsx)("strong",{children:"accessToken"})," contains only the relevant information to validate the token. Custom claims are not included here."]}),Object(g.jsxs)(_,{children:[Object(g.jsx)(de,{title:"ID Token",token:n.idToken.jwt,onClick:function(){return r(n.idToken)}}),Object(g.jsx)(de,{title:"Access Token",token:n.accessToken.jwt,onClick:function(){return r(n.accessToken)}})]})]})},be=n(305),he=function(e){return Object(g.jsxs)(D.a,Object(l.a)(Object(l.a)({variant:"ghost",mb:"0.5rem"},e),{},{children:[Object(g.jsx)(be.a,{})," Back"]}))},Oe=function(){var e=U(),t=ie(),n=Object(r.useState)(1),c=Object(j.a)(n,2),i=c[0],a=c[1],o=Object(r.useState)(),s=Object(j.a)(o,2),O=s[0],f=s[1],p=Object(r.useState)(),x=Object(j.a)(p,2),v=x[0],k=x[1],w=Object(r.useState)(),y=Object(j.a)(w,2),S=y[0],C=y[1];function T(){return(T=Object(d.a)(u.a.mark((function t(n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(S){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.get(S,n);case 4:r=t.sent,k(Object(l.a)(Object(l.a)({},r),{},{title:S})),a(2),C(void 0);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function I(){return(I=Object(d.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.login(n);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}if(Object(r.useEffect)((function(){e.keys().then((function(e){f(e.map((function(e){return{title:e}}))),e.length||a(2)}))}),[]),!O)return null;var P=[Object(g.jsx)(ee,{items:O,onAdd:function(){return a(2)},onItemClick:function(e){var t=e.title;return C(t)}},0),Object(g.jsx)(Z,{onSubmit:function(e){return I.apply(this,arguments)},onComplete:function(){k(void 0),a(3)},initialData:v},1),Object(g.jsx)(je,{},2)];return Object(g.jsxs)(b.a,{maxW:"container.md",mt:"2rem",transition:"width .5s",children:[Object(g.jsx)(h.a,{as:"h1",mb:"1rem",children:"Cognito Auth Client"}),Object(g.jsx)(m,{steps:P.length,currentStep:i}),1!==i&&(2!==i||O.length>0)&&Object(g.jsx)(he,{onClick:function(){a((function(e){return e-1}))}}),P[i-1],Object(g.jsx)(J,{onClose:function(){return C(void 0)},isOpen:!!S,onPinEntered:function(e){return T.apply(this,arguments)},title:"Enter security pin for ".concat(S),description:"The pin is needed to decrypt your saved data and prefill the form."})]})},fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,318)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))};a.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(o.a,{children:Object(g.jsx)(z,{children:Object(g.jsx)(le,{children:Object(g.jsx)(Oe,{})})})})}),document.getElementById("root")),fe()}},[[273,1,2]]]);
//# sourceMappingURL=main.ba1472fd.chunk.js.map