webpackJsonp([12],{"4XjK":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q2NN")),i=r(n("ucif"));function r(e){return e&&e.__esModule?e:{default:e}}t.default={get:function(e,t,n){a.default.get.bind(this)(i.default.welcome.userinfo,{},t,n,function(e){return e.data})},getRoleAndPermissions:function(e,t,n){a.default.get.bind(this)(i.default.role.getPermissionTree,{},t,n,function(e){var t=[],n=[];return e.data.map(function(e){n.push(e.type),e.permissions.map(function(e){t.push(e.url)})}),{permissions:t,roles:n}})}},e.exports=t.default},"6d6D":function(e,t){},"9hGL":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(n("4XjK")),i=n("F4+m"),r=s(n("AtQa"));function s(e){return e&&e.__esModule?e:{default:e}}t.default={mixins:[i.talentsMixin,i.messageMinxin],created:function(){var e=this;a.default.get.bind(this)({},function(t){t.createTime=(0,r.default)(t.createTime),t.lastLoginTime=(0,r.default)(t.lastLoginTime),e.form=t},function(){})},data:function(){return{form:{nickname:"",email:"",createTime:"",lastLoginTime:""}}},methods:{onSubmit:function(){}}},e.exports=t.default},E3jV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("9hGL"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);var s=n("JEW3");var o=function(e){n("6d6D")},l=n("VU/8")(i.a,s.a,!1,o,"data-v-1b7d6c19",null);t.default=l.exports},JEW3:function(e,t,n){"use strict";var a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"personal-data"}},[n("mu-text-field",{attrs:{label:"昵称",disabled:""},model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}}),e._v(" "),n("mu-text-field",{attrs:{label:"Email/帐号",disabled:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),n("mu-text-field",{attrs:{label:"创建时间",disabled:""},model:{value:e.form.createTime,callback:function(t){e.$set(e.form,"createTime",t)},expression:"form.createTime"}}),e._v(" "),n("mu-text-field",{attrs:{label:"最后登录时间",disabled:""},model:{value:e.form.lastLoginTime,callback:function(t){e.$set(e.form,"lastLoginTime",t)},expression:"form.lastLoginTime"}}),e._v(" "),n("tkm-loading",{ref:"loading"}),e._v(" "),n("tkm-message",{ref:"message",attrs:{message:e.message}})],1)},staticRenderFns:[]};t.a=a}});