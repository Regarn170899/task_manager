"use strict";(self["webpackChunktask_manager"]=self["webpackChunktask_manager"]||[]).push([[606],{2606:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var i=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[e("div",{staticClass:"col s4 offset-s4"},[e("div",{staticClass:"input-field"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"validate",attrs:{id:"title",type:"text",required:""},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),e("label",{attrs:{for:"title"}},[t._v("Имя задачи")])]),e("div",{staticClass:"input-field"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"materialize-textarea",attrs:{id:"textarea1",required:""},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),e("label",{attrs:{for:"textarea1"}},[t._v("Описание задачи")])]),e("input",{ref:"datepicker",staticClass:"datepicker",attrs:{type:"text",placeholder:""}}),e("button",{staticClass:"btn btn-small indigo darken-1",attrs:{type:"submit"}},[t._v("Создать")])])])]),e("div",[e("h2",[t._v("Список ваших задач")]),e("hr"),e("div",[e("Tasks")],1)])])},s=[],r=a(3507),n={components:{Tasks:r.Z},data:()=>({description:"",title:"",date:null}),mounted(){this.date=M.Datepicker.init(this.$refs.datepicker,{format:"dd.mm.yyyy",defaultDate:new Date,setDefaultDate:!0})},methods:{submitForm(){const t={title:this.title,description:this.description,id:Date.now(),date:this.date.date};console.log(t),this.$store.dispatch("createTask",t)}}},l=n,o=a(1001),d=(0,o.Z)(l,i,s,!1,null,"f3f65358",null),u=d.exports}}]);
//# sourceMappingURL=606.f2531a8c.js.map