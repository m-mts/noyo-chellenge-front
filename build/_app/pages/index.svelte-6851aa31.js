var e,t,s=Object.defineProperty,n=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,o=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;import{S as i,i as u,s as d,e as f,k as h,t as v,c as p,a as g,n as m,g as $,d as E,b as y,f as D,E as _,F as b,h as w,I as S,J as A,K as R,j as k,m as x,o as P,v as j,r as O,w as I,l as T,L,B,u as C,M as U,N,y as V}from"../chunks/vendor-d0e117b3.js";import{C as z,r as H}from"../chunks/address-4c1c48ce.js";import{s as M,a as F,c as J}from"../chunks/stores-7bbcc43f.js";(t=e||(e={}))[t.ADDRESS_CREATED=0]="ADDRESS_CREATED",t[t.ADDRESS_UPDATED=1]="ADDRESS_UPDATED",t[t.ADDRESS_DELETED=2]="ADDRESS_DELETED",t[t.ADDRESS_RESTORED=3]="ADDRESS_RESTORED";const K=Object.freeze(new Map([[0,"Created"],[1,"Updated"],[2,"Deleted"],[3,"Restored"]]));function q(e){let t,s,n,r,a,l,c,o,i,u,d,R,k,x,P=K.get(e[0].type)+"",j=e[0].created_at+"";return{c(){t=f("div"),s=f("input"),l=h(),c=f("label"),o=v(P),u=h(),d=f("span"),R=v(j),this.h()},l(e){t=p(e,"DIV",{class:!0});var n=g(t);s=p(n,"INPUT",{type:!0,value:!0,name:!0,id:!0,disabled:!0,class:!0}),l=m(n),c=p(n,"LABEL",{for:!0,class:!0});var r=g(c);o=$(r,P),r.forEach(E),u=m(n),d=p(n,"SPAN",{class:!0});var a=g(d);R=$(a,j),a.forEach(E),n.forEach(E),this.h()},h(){y(s,"type","checkbox"),s.__value=n=e[0].id,s.value=s.__value,y(s,"name",r="event-"+e[0].id),y(s,"id",a="event-"+e[0].id),s.disabled=e[2],y(s,"class","svelte-10fg9ds"),y(c,"for",i="event-"+e[0].id),y(c,"class","svelte-10fg9ds"),y(d,"class","svelte-10fg9ds"),y(t,"class","svelte-10fg9ds")},m(n,r){D(n,t,r),_(t,s),s.checked=e[1],_(t,l),_(t,c),_(c,o),_(t,u),_(t,d),_(d,R),k||(x=[b(s,"change",e[4]),b(s,"change",e[5])],k=!0)},p(e,[t]){1&t&&n!==(n=e[0].id)&&(s.__value=n,s.value=s.__value),1&t&&r!==(r="event-"+e[0].id)&&y(s,"name",r),1&t&&a!==(a="event-"+e[0].id)&&y(s,"id",a),4&t&&(s.disabled=e[2]),2&t&&(s.checked=e[1]),1&t&&P!==(P=K.get(e[0].type)+"")&&w(o,P),1&t&&i!==(i="event-"+e[0].id)&&y(c,"for",i),1&t&&j!==(j=e[0].created_at+"")&&w(R,j)},i:S,o:S,d(e){e&&E(t),k=!1,A(x)}}}function G(e,t,s){let{addressEvent:n}=t,r=R(M),a=r.has(n.id),l=r.size>1&&!a;M.subscribe((e=>{s(1,a=e.has(n.id)),s(2,l=e.size>1&&!a)}));const c=e=>{M.update((t=>(e.target.checked?t.set(n.id,n):t.delete(n.id),s(1,a=e.target.checked),t)))};return e.$$set=e=>{"addressEvent"in e&&s(0,n=e.addressEvent)},[n,a,l,c,e=>c(e),function(){a=this.checked,s(1,a)}]}class Q extends i{constructor(e){super(),u(this,e,G,q,d,{addressEvent:0})}}async function W(t){if(!t)return Promise.resolve([]);try{const s=await fetch(`${z.apiBaseURL}/addresses/${t.id}/events`);return Promise.resolve((await s.json()).map((t=>{return s=((e,t)=>{for(var s in t||(t={}))l.call(t,s)&&o(e,s,t[s]);if(a)for(var s of a(t))c.call(t,s)&&o(e,s,t[s]);return e})({},t),i={type:e[t.type]},n(s,r(i));var s,i})))}catch{return Promise.resolve([])}}function X(e,t,s){const n=e.slice();return n[3]=t[s],n}function Y(e){let t,s;return t=new Q({props:{addressEvent:e[3]}}),{c(){k(t.$$.fragment)},l(e){x(t.$$.fragment,e)},m(e,n){P(t,e,n),s=!0},p(e,s){const n={};1&s&&(n.addressEvent=e[3]),t.$set(n)},i(e){s||(j(t.$$.fragment,e),s=!0)},o(e){O(t.$$.fragment,e),s=!1},d(e){I(t,e)}}}function Z(e){let t,s,n,r,a,l,c,o=e[0],i=[];for(let d=0;d<o.length;d+=1)i[d]=Y(X(e,o,d));const u=e=>O(i[e],1,1,(()=>{i[e]=null}));return{c(){t=f("h2"),s=v("Events "),n=f("a"),r=v("Compare"),a=h();for(let e=0;e<i.length;e+=1)i[e].c();l=T(),this.h()},l(e){t=p(e,"H2",{class:!0});var c=g(t);s=$(c,"Events "),n=p(c,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var o=g(n);r=$(o,"Compare"),o.forEach(E),c.forEach(E),a=m(e);for(let t=0;t<i.length;t+=1)i[t].l(e);l=T(),this.h()},h(){y(n,"sveltekit:prefetch",""),y(n,"href","/compare"),y(n,"class","svelte-1hua9ol"),L(n,"hidden",!e[1]),y(t,"class","svelte-1hua9ol")},m(e,o){D(e,t,o),_(t,s),_(t,n),_(n,r),D(e,a,o);for(let t=0;t<i.length;t+=1)i[t].m(e,o);D(e,l,o),c=!0},p(e,[t]){if(2&t&&L(n,"hidden",!e[1]),1&t){let s;for(o=e[0],s=0;s<o.length;s+=1){const n=X(e,o,s);i[s]?(i[s].p(n,t),j(i[s],1)):(i[s]=Y(n),i[s].c(),j(i[s],1),i[s].m(l.parentNode,l))}for(B(),s=o.length;s<i.length;s+=1)u(s);C()}},i(e){if(!c){for(let e=0;e<o.length;e+=1)j(i[e]);c=!0}},o(e){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)O(i[t]);c=!1},d(e){e&&E(t),e&&E(a),U(i,e),e&&E(l)}}}function ee(e,t,s){var n=this&&this.__awaiter||function(e,t,s,n){return new(s||(s=Promise))((function(r,a){function l(e){try{o(n.next(e))}catch(t){a(t)}}function c(e){try{o(n.throw(e))}catch(t){a(t)}}function o(e){var t;e.done?r(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(l,c)}o((n=n.apply(e,t||[])).next())}))};let r=[],a=!1;return M.subscribe((e=>s(1,a=e.size>=z.compareEventsAmount))),F.subscribe((e=>n(void 0,void 0,void 0,(function*(){return s(0,r=yield W(e))})))),[r,a]}class te extends i{constructor(e){super(),u(this,e,ee,Z,d,{})}}function se(e,t,s){const n=e.slice();return n[1]=t[s],n[3]=s,n}function ne(e){let t,s,n,r,a,l=H.get(e[1])+"",c=e[0][e[1]]+"";return{c(){t=f("dt"),s=v(l),n=v(":"),r=f("dd"),a=v(c),this.h()},l(e){t=p(e,"DT",{class:!0});var o=g(t);s=$(o,l),n=$(o,":"),o.forEach(E),r=p(e,"DD",{class:!0});var i=g(r);a=$(i,c),i.forEach(E),this.h()},h(){y(t,"class","svelte-1hc2w9f"),L(t,"bg",e[3]%2==0),y(r,"class","svelte-1hc2w9f"),L(r,"bg",e[3]%2==0)},m(e,l){D(e,t,l),_(t,s),_(t,n),D(e,r,l),_(r,a)},p(e,t){1&t&&c!==(c=e[0][e[1]]+"")&&w(a,c)},d(e){e&&E(t),e&&E(r)}}}function re(e){let t,s=Array.from(H.keys()),n=[];for(let r=0;r<s.length;r+=1)n[r]=ne(se(e,s,r));return{c(){t=f("dl");for(let e=0;e<n.length;e+=1)n[e].c();this.h()},l(e){t=p(e,"DL",{class:!0});var s=g(t);for(let t=0;t<n.length;t+=1)n[t].l(s);s.forEach(E),this.h()},h(){y(t,"class","svelte-1hc2w9f")},m(e,s){D(e,t,s);for(let r=0;r<n.length;r+=1)n[r].m(t,null)},p(e,[r]){if(1&r){let a;for(s=Array.from(H.keys()),a=0;a<s.length;a+=1){const l=se(e,s,a);n[a]?n[a].p(l,r):(n[a]=ne(l),n[a].c(),n[a].m(t,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=s.length}},i:S,o:S,d(e){e&&E(t),U(n,e)}}}function ae(e,t,s){let{address:n}=t;return e.$$set=e=>{"address"in e&&s(0,n=e.address)},[n]}class le extends i{constructor(e){super(),u(this,e,ae,re,d,{address:0})}}function ce(e,t,s){const n=e.slice();return n[5]=t[s],n}function oe(e){let t,s,n,r,a,l;return s=new le({props:{address:e[5]}}),{c(){t=f("div"),k(s.$$.fragment),n=h(),this.h()},l(e){t=p(e,"DIV",{class:!0});var r=g(t);x(s.$$.fragment,r),n=m(r),r.forEach(E),this.h()},h(){y(t,"class","svelte-1bxbo6u"),L(t,"active",e[5].id==e[1])},m(c,o){D(c,t,o),P(s,t,null),_(t,n),r=!0,a||(l=b(t,"click",(function(){N(e[2](e[5]))&&e[2](e[5]).apply(this,arguments)})),a=!0)},p(n,r){e=n;const a={};1&r&&(a.address=e[5]),s.$set(a),3&r&&L(t,"active",e[5].id==e[1])},i(e){r||(j(s.$$.fragment,e),r=!0)},o(e){O(s.$$.fragment,e),r=!1},d(e){e&&E(t),I(s),a=!1,l()}}}function ie(e){let t,s,n,r,a,l=e[0],c=[];for(let i=0;i<l.length;i+=1)c[i]=oe(ce(e,l,i));const o=e=>O(c[e],1,1,(()=>{c[e]=null}));return{c(){t=f("h2"),s=v("Address Information"),n=h();for(let e=0;e<c.length;e+=1)c[e].c();r=T(),this.h()},l(e){t=p(e,"H2",{class:!0});var a=g(t);s=$(a,"Address Information"),a.forEach(E),n=m(e);for(let t=0;t<c.length;t+=1)c[t].l(e);r=T(),this.h()},h(){y(t,"class","svelte-1bxbo6u")},m(e,l){D(e,t,l),_(t,s),D(e,n,l);for(let t=0;t<c.length;t+=1)c[t].m(e,l);D(e,r,l),a=!0},p(e,[t]){if(7&t){let s;for(l=e[0],s=0;s<l.length;s+=1){const n=ce(e,l,s);c[s]?(c[s].p(n,t),j(c[s],1)):(c[s]=oe(n),c[s].c(),j(c[s],1),c[s].m(r.parentNode,r))}for(B(),s=l.length;s<c.length;s+=1)o(s);C()}},i(e){if(!a){for(let e=0;e<l.length;e+=1)j(c[e]);a=!0}},o(e){c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)O(c[t]);a=!1},d(e){e&&E(t),e&&E(n),U(c,e),e&&E(r)}}}function ue(e,t,s){var n,r=this&&this.__awaiter||function(e,t,s,n){return new(s||(s=Promise))((function(r,a){function l(e){try{o(n.next(e))}catch(t){a(t)}}function c(e){try{o(n.throw(e))}catch(t){a(t)}}function o(e){var t;e.done?r(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(l,c)}o((n=n.apply(e,t||[])).next())}))};let a=[],l=null===(n=R(F))||void 0===n?void 0:n.id;J.subscribe((e=>r(void 0,void 0,void 0,(function*(){if(e){const t=yield fetch(`${z.apiBaseURL}/users/${e}/addresses`);if(t.ok){const e=yield t.json();s(0,a=e)}else s(0,a=[])}else s(0,a=[])}))));return[a,l,e=>{F.set(e),s(1,l=e.id)}]}class de extends i{constructor(e){super(),u(this,e,ue,ie,d,{})}}function fe(e,t,s){const n=e.slice();return n[2]=t[s],n}function he(e){let t,s,n,r,a=e[2].user_id+"";return{c(){t=f("option"),s=v(a),this.h()},l(e){t=p(e,"OPTION",{value:!0,selected:!0});var n=g(t);s=$(n,a),n.forEach(E),this.h()},h(){t.__value=n=e[2].user_id,t.value=t.__value,t.selected=r=e[2].user_id==R(J)},m(e,n){D(e,t,n),_(t,s)},p(e,l){1&l&&a!==(a=e[2].user_id+"")&&w(s,a),1&l&&n!==(n=e[2].user_id)&&(t.__value=n,t.value=t.__value),1&l&&r!==(r=e[2].user_id==R(J))&&(t.selected=r)},d(e){e&&E(t)}}}function ve(e){let t,s,n,r=e[0],a=[];for(let l=0;l<r.length;l+=1)a[l]=he(fe(e,r,l));return{c(){t=f("select");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){t=p(e,"SELECT",{"data-testid":!0});var s=g(t);for(let t=0;t<a.length;t+=1)a[t].l(s);s.forEach(E),this.h()},h(){y(t,"data-testid","user-id-select")},m(r,l){D(r,t,l);for(let e=0;e<a.length;e+=1)a[e].m(t,null);s||(n=b(t,"change",e[1]),s=!0)},p(e,[s]){if(1&s){let n;for(r=e[0],n=0;n<r.length;n+=1){const l=fe(e,r,n);a[n]?a[n].p(l,s):(a[n]=he(l),a[n].c(),a[n].m(t,null))}for(;n<a.length;n+=1)a[n].d(1);a.length=r.length}},i:S,o:S,d(e){e&&E(t),U(a,e),s=!1,n()}}}function pe(e,t,s){let{users:n=[]}=t;return V((()=>{var e;R(J)||J.set(null===(e=null==n?void 0:n[0])||void 0===e?void 0:e.user_id)})),e.$$set=e=>{"users"in e&&s(0,n=e.users)},[n,e=>{J.set(e.target.value)}]}class ge extends i{constructor(e){super(),u(this,e,pe,ve,d,{users:0})}}function me(e){let t,s,n,r,a,l,c,o,i,u;return n=new ge({props:{users:e[0]}}),l=new de({}),i=new te({}),{c(){t=f("div"),s=f("div"),k(n.$$.fragment),r=h(),a=f("div"),k(l.$$.fragment),c=h(),o=f("div"),k(i.$$.fragment),this.h()},l(e){t=p(e,"DIV",{class:!0});var u=g(t);s=p(u,"DIV",{class:!0});var d=g(s);x(n.$$.fragment,d),r=m(d),a=p(d,"DIV",{class:!0});var f=g(a);x(l.$$.fragment,f),f.forEach(E),d.forEach(E),c=m(u),o=p(u,"DIV",{class:!0});var h=g(o);x(i.$$.fragment,h),h.forEach(E),u.forEach(E),this.h()},h(){y(a,"class","section -addresses svelte-1y4cptg"),y(s,"class","w-2/3"),y(o,"class","section -events w-1/3 svelte-1y4cptg"),y(t,"class","page svelte-1y4cptg")},m(e,d){D(e,t,d),_(t,s),P(n,s,null),_(s,r),_(s,a),P(l,a,null),_(t,c),_(t,o),P(i,o,null),u=!0},p(e,[t]){const s={};1&t&&(s.users=e[0]),n.$set(s)},i(e){u||(j(n.$$.fragment,e),j(l.$$.fragment,e),j(i.$$.fragment,e),u=!0)},o(e){O(n.$$.fragment,e),O(l.$$.fragment,e),O(i.$$.fragment,e),u=!1},d(e){e&&E(t),I(n),I(l),I(i)}}}var $e=function(e,t,s,n){return new(s||(s=Promise))((function(r,a){function l(e){try{o(n.next(e))}catch(t){a(t)}}function c(e){try{o(n.throw(e))}catch(t){a(t)}}function o(e){var t;e.done?r(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(l,c)}o((n=n.apply(e,t||[])).next())}))};const Ee=({fetch:e})=>$e(void 0,void 0,void 0,(function*(){const t=yield e(`${z.apiBaseURL}/user_ids`);if(t.ok){return{props:{users:(yield t.json()).map((e=>({user_id:e})))}}}const{message:s}=yield t.json();return{error:new Error(s)}}));function ye(e,t,s){let{users:n=[]}=t;return e.$$set=e=>{"users"in e&&s(0,n=e.users)},[n]}export default class extends i{constructor(e){super(),u(this,e,ye,me,d,{users:0})}}export{Ee as load};
