webpackJsonp([10],{fmfL:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("jqEp"),o=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);var l=a("lGuC");var r=function(e){a("t9p6")},s=a("VU/8")(o.a,l.a,!1,r,"data-v-826bf64e",null);t.default=s.exports},jqEp:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(a("jtog")),o=l(a("UjMW")),i=l(a("xplR"));function l(e){return e&&e.__esModule?e:{default:e}}t.default={components:{TkmDialog:o.default,TkmTable:i.default},data:function(){return{dialog:!1,dialogMsg:"",dialogForm:{name:"",type:""},tableData:[],searchOperations:[{name:"查询",action:"onSubmit",type:"normal"},{name:"清空用户角色",action:"clearRole"}],roles:[],roleIds:[],headers:[{name:"用户昵称"},{name:"Email/帐号"},{name:"状态"},{name:"拥有的角色"}]}},methods:{initData:function(e,t,a){var o=this;n.default.getList.bind(this)({findContent:e.findContent,pageNo:e.pageNo},function(e){o.tableData=e,t()},function(e){a(e)})},rowsOperation:function(e,t,a,o){var i=this;"selectRole"===e&&n.default.getRoles.bind(this)({id:t.id},function(e){i.roleIds=[],i.roles=e.map(function(e){return"0"!==e.marker&&i.roleIds.push(e.id),e.id=e.id+"",e}),i.$refs.dialogForm.openDialog(function(){n.default.addRoles.bind(i)({roleIds:i.roleIds,userId:t.id},function(e){a(e.message)},function(e){o(e)})},function(){})},function(e){o(e)})},searchOperation:function(e,t,a){var o=this;"clearRole"===e?(this.dialogMsg="确认要清空这些用户的角色吗？",this.$refs.dialog.openDialog(function(){n.default.clearRole.bind(o)({tableData:o.tableData},function(e){t(e.message)},function(e){a(e)})},function(){})):t()}}},e.exports=t.default},jtog:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(a("q2NN")),o=i(a("ucif"));function i(e){return e&&e.__esModule?e:{default:e}}t.default={getList:function(e,t,a){var i=new FormData;i.append("findContent",e.findContent),i.append("pageNo",e.pageNo),n.default.post.bind(this)(o.default.role.allocation,i,t,a,function(e){return{message:e.message,totalCount:e.data.total,rows:e.data.list.map(function(e){return{id:e.id,selected:!1,columns:[{name:"nickname",value:e.nickname||"--"},{name:"email",value:e.email||"--"},{name:"status",value:1===e.status?"有效":"禁止"},{name:"roleNames",value:e.roleNames||"--"}],operations:[{name:"选择角色",action:"selectRole",type:"normal"}]}})}})},getRoles:function(e,t,a){n.default.get.bind(this)(o.default.role.selectRoleByUserId,{params:{id:e.id}},t,a,function(e){return e.data})},addRoles:function(e,t,a){var i=new FormData;e.roleIds.map(function(e){i.append("ids",e)}),i.append("userId",e.userId),n.default.post.bind(this)(o.default.role.addRole2User,i,t,a,function(e){return e})},clearRole:function(e,t,a){var i=new FormData;e.tableData.rows.map(function(e){e.selected&&i.append("userIds",e.id)}),n.default.post.bind(this)(o.default.role.clearRoleByUserIds,i,t,a,function(e){return e})}},e.exports=t.default},lGuC:function(e,t,a){"use strict";var n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{attrs:{id:"role-allocation"}},[a("tkm-table",{attrs:{tableData:e.tableData,headers:e.headers,searchOperations:e.searchOperations},on:{"init-data":e.initData,"search-operation":e.searchOperation,"rows-operation":e.rowsOperation}}),e._v(" "),a("tkm-dialog",{ref:"dialogForm",attrs:{title:"添加角色",cancelLabel:"取消",confirmLabel:"确定"}},e._l(e.roles,function(t){return a("mu-checkbox",{key:t.id,attrs:{label:t.name,nativeValue:t.id},model:{value:e.roleIds,callback:function(t){e.roleIds=t},expression:"roleIds"}})})),e._v(" "),a("tkm-dialog",{ref:"dialog",attrs:{title:"警告",cancelLabel:"取消",confirmLabel:"确定"}},[e._v("\n    "+e._s(e.dialogMsg)+"\n  ")])],1)},staticRenderFns:[]};t.a=n},t9p6:function(e,t){}});