(this["webpackJsonpcamera-pan"]=this["webpackJsonpcamera-pan"]||[]).push([[0],{47:function(t,e,c){},48:function(t,e,c){"use strict";c.r(e);var a=c(34),n=c.n(a),o=c(7),i=c(9),s=c(8),r=c(15),j=c(1),b=c(16),l=c(50),f=c(53),u=c(51),O=c(32),p=c(52),h=c(11),d=["color"];function x(t){var e=t.color,c=Object(r.a)(t,d);return Object(h.jsx)(l.a,Object(s.a)(Object(s.a)({receiveShadow:!0,castShadow:!0,smoothness:10,radius:.015},c),{},{children:Object(h.jsx)("meshStandardMaterial",{color:e,envMapIntensity:.5})}))}function m(t){var e=Object(b.c)(O.a,"/bep-bup/models/pixie.gltf"),c=Object(o.useState)(0),a=Object(i.a)(c,2),n=a[0],r=a[1];return Object(o.useEffect)((function(){var t=0,e=setInterval((function(){r(t+=.01)}),1e3/60);return function(){return clearInterval(e)}}),[]),Object(h.jsx)("mesh",Object(s.a)(Object(s.a)({rotation:[0,n,-.02]},t),{},{children:Object(h.jsx)("primitive",{object:e.scene})}))}function v(t){var e=Object(b.c)(O.a,"/bep-bup/models/pixie.gltf?2");return Object(h.jsx)("mesh",Object(s.a)(Object(s.a)({},t),{},{children:Object(h.jsx)("primitive",{object:e.scene})}))}function g(){var t=Object(o.useState)(!0),e=Object(i.a)(t,2),c=e[0],a=e[1];return Object(b.b)((function(t,e){t.camera.fov=j.MathUtils.damp(t.camera.fov,c?8:42,1,e),function(t,e,c,a){arguments.length>4&&void 0!==arguments[4]||new j.Vector3,t instanceof j.Vector3&&(t.x=j.MathUtils.damp(t.x,e[0],c,a),t.y=j.MathUtils.damp(t.y,e[1],c,a),t.z=j.MathUtils.damp(t.z,e[2],c,a))}(t.camera.position,[c?25:10,c?1:2,c?0:10],1,e),t.camera.lookAt(0,2,0),t.camera.updateProjectionMatrix()})),Object(o.useEffect)((function(){setTimeout((function(){a(!1)}),1e3)})),Object(h.jsx)(h.Fragment,{})}function w(){return Object(h.jsxs)(b.a,{shadows:!0,camera:{position:[25,1,0],fov:2},children:[Object(h.jsx)("color",{attach:"background",args:["#a2b9e7"]}),Object(h.jsx)(g,{}),Object(h.jsx)("directionalLight",{position:[0,8,5],castShadow:!0,intensity:1,"shadow-camera-far":70}),Object(h.jsxs)(o.Suspense,{fallback:null,children:[Object(h.jsx)(m,{scale:.1,position:[.05,-1.1,0]}),Object(h.jsx)(v,{scale:20,position:[-60,-180,-40],rotation:[0,-1.2,.25]}),Object(h.jsx)(p.a,{position:[-21.5,5,-20],color:"#ff0f0f",fontSize:4,maxWidth:20,lineHeight:1,letterSpacing:.02,textAlign:"left",font:"https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff",anchorX:"center",anchorY:"middle",children:"\u0421 \u0414\u043d\u0435\u043c \u0420\u043e\u0436\u0434\u0435\u043d\u0438\u044f! \u0411\u0435\u043f\u0430! \u0411\u0443\u043f\u0430!"}),Object(h.jsxs)("group",{position:[0,-.9,-3],children:[Object(h.jsx)(x,{color:"#ea5b3f","rotation-x":-Math.PI/2,"position-z":2,scale:[5,40,.2]}),Object(h.jsx)(x,{color:"#f4ae00","rotation-x":-Math.PI/2,position:[0,0,0],scale:[4.2,.2,4]})]}),Object(h.jsx)(f.a,{preset:"apartment"}),Object(h.jsx)(u.a,{})]})]})}c(47);n.a.render(Object(h.jsx)(w,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.09e8ccd3.chunk.js.map