(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dd40c"],{8130:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("pie-chart",{attrs:{type:"pie",width:500,height:300,labels:t.datacollection.labels,datasets:t.datacollection.datasets,options:t.options}}),e("el-col",{attrs:{span:4}},[e("el-button",{on:{click:t.RandomizeData}},[t._v("Randomize Data")])],1)],1)},o=[],c=(e("d81d"),e("5530")),r=e("424e"),i=e("ed08"),s={components:{PieChart:r["a"]},data:function(){return{datacollection:{labels:["January","February","March","April","May","June","July"],datasets:[{data:[this.createRandom(),this.createRandom(),this.createRandom(),this.createRandom(),this.createRandom(),this.createRandom(),this.createRandom()],backgroundColor:d,label:"Dataset 1"}]},options:{responsive:!0,legend:{position:"top"},title:{display:!0,text:"Chart.js Pie Chart"}}}},methods:{createRandom:function(){return Object(i["c"])(0,50)},createArrayRandom:function(){for(var t=[],a=0;a<7;a++)t.push(this.createRandom());return t},RandomizeData:function(){var t=this,a=this.datacollection.datasets.map((function(a){return Object(c["a"])(Object(c["a"])({},a),{},{data:t.createArrayRandom()})}));this.datacollection.datasets=a}}},d=["#4dc9f6","#f67019","#f53794","#537bc4","#acc236","#166a8f","#00a950","#58595b","#8549ba"],l=s,u=e("2877"),h=Object(u["a"])(l,n,o,!1,null,null,null);a["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d0dd40c.c36c2cb7.js.map