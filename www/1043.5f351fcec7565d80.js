"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1043],{1043:(q,m,s)=>{s.r(m),s.d(m,{EquipmentStatusPageModule:()=>P});var o=s(177),r=s(4341),l=s(4742),c=s(70),e=s(4438);const p=(t,i)=>({available:t,"in-maintenance":i});function g(t,i){1&t&&(e.j41(0,"ion-buttons",6),e.nrm(1,"ion-back-button",7),e.k0s())}function b(t,i){if(1&t){const n=e.RV6();e.j41(0,"ion-item",9),e.bIt("click",function(){const u=e.eBV(n).$implicit,S=e.XpG(2);return e.Njj(S.selectEquipment(u))}),e.j41(1,"ion-label")(2,"h2"),e.EFF(3),e.k0s(),e.j41(4,"p"),e.EFF(5,"Click to view units"),e.k0s()()()}if(2&t){const n=i.$implicit;e.R7$(3),e.JRh(n.name)}}function f(t,i){if(1&t&&(e.j41(0,"ion-list"),e.DNE(1,b,6,1,"ion-item",8),e.k0s()),2&t){const n=e.XpG();e.R7$(),e.Y8G("ngForOf",n.equipmentList)}}function d(t,i){if(1&t&&(e.j41(0,"ion-item")(1,"ion-label")(2,"h2"),e.EFF(3),e.k0s(),e.j41(4,"p"),e.EFF(5,"Status: "),e.j41(6,"span",12),e.EFF(7),e.k0s()()()()),2&t){const n=i.$implicit;e.R7$(3),e.JRh(n.name),e.R7$(3),e.Y8G("ngClass",e.l_i(3,p,n.isAvailable,!n.isAvailable)),e.R7$(),e.SpI(" ",n.isAvailable?"Available":"In Maintenance"," ")}}function E(t,i){if(1&t){const n=e.RV6();e.j41(0,"ion-list"),e.DNE(1,d,8,6,"ion-item",10),e.j41(2,"ion-button",11),e.bIt("click",function(){e.eBV(n);const u=e.XpG();return e.Njj(u.clearSelection())}),e.EFF(3,"Back to Equipment List"),e.k0s()()}if(2&t){const n=e.XpG();e.R7$(),e.Y8G("ngForOf",n.selectedEquipment.units)}}const v=[{path:"",component:(()=>{var t;class i{constructor(){this.equipmentList=[{name:"Treadmill",units:[{name:"Treadmill 1",isAvailable:!0},{name:"Treadmill 2",isAvailable:!0},{name:"Treadmill 3",isAvailable:!0},{name:"Treadmill 4",isAvailable:!1}]},{name:"Stationary Bike",units:[{name:"Bike 1",isAvailable:!1},{name:"Bike 2",isAvailable:!0},{name:"Bike 3",isAvailable:!0}]},{name:"Elliptical Trainer",units:[{name:"Elliptical 1",isAvailable:!0},{name:"Elliptical 2",isAvailable:!1},{name:"Elliptical 3",isAvailable:!0}]},{name:"Bench Press",units:[{name:"Bench Press 1",isAvailable:!1},{name:"Bench Press 2",isAvailable:!0}]},{name:"Rowing Machine",units:[{name:"Rowing Machine 1",isAvailable:!0},{name:"Rowing Machine 2",isAvailable:!0},{name:"Rowing Machine 3",isAvailable:!1}]},{name:"Leg Press",units:[{name:"Leg Press 1",isAvailable:!1},{name:"Leg Press 2",isAvailable:!0}]},{name:"Dumbbells",units:[{name:"Dumbbell Set 1",isAvailable:!0},{name:"Dumbbell Set 2",isAvailable:!1}]},{name:"Squat Rack",units:[{name:"Squat Rack 1",isAvailable:!1},{name:"Squat Rack 2",isAvailable:!0}]},{name:"Pull-up Bar",units:[{name:"Pull-up Bar 1",isAvailable:!0},{name:"Pull-up Bar 2",isAvailable:!0}]},{name:"Kettlebells",units:[{name:"Kettlebell Set 1",isAvailable:!0},{name:"Kettlebell Set 2",isAvailable:!1},{name:"Kettlebell Set 3",isAvailable:!0}]},{name:"Cable Machine",units:[{name:"Cable Machine 1",isAvailable:!0},{name:"Cable Machine 2",isAvailable:!1}]}],this.selectedEquipment=null}ngOnInit(){}selectEquipment(a){this.selectedEquipment=a}clearSelection(){this.selectedEquipment=null}}return(t=i).\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.VBU({type:t,selectors:[["app-equipment-status"]],decls:12,vars:5,consts:[[3,"translucent"],["slot","start",4,"ngIf"],[3,"fullscreen"],["collapse","condense"],["size","large"],[4,"ngIf"],["slot","start"],["defaultHref","/membermenu"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[4,"ngFor","ngForOf"],["expand","full",3,"click"],[3,"ngClass"]],template:function(a,u){1&a&&(e.j41(0,"ion-header",0)(1,"ion-toolbar"),e.DNE(2,g,2,0,"ion-buttons",1),e.j41(3,"ion-title"),e.EFF(4,"Equipment Status"),e.k0s()()(),e.j41(5,"ion-content",2)(6,"ion-header",3)(7,"ion-toolbar")(8,"ion-title",4),e.EFF(9,"Equipment Status"),e.k0s()()(),e.DNE(10,f,2,1,"ion-list",5)(11,E,4,1,"ion-list",5),e.k0s()),2&a&&(e.Y8G("translucent",!0),e.R7$(2),e.Y8G("ngIf",!u.selectedEquipment),e.R7$(3),e.Y8G("fullscreen",!0),e.R7$(5),e.Y8G("ngIf",!u.selectedEquipment),e.R7$(),e.Y8G("ngIf",u.selectedEquipment))},dependencies:[o.YU,o.Sq,o.bT,l.Jm,l.QW,l.W9,l.eU,l.uz,l.he,l.nf,l.BC,l.ai,l.el],styles:["body[_ngcontent-%COMP%]{background-image:url(/assets/bg.jpg);background-size:cover;background-position:center;background-repeat:no-repeat;margin:0;height:100%;width:100%}ion-content[_ngcontent-%COMP%]{--background: transparent}ion-item[_ngcontent-%COMP%]{--background: #1e1d1d;border-radius:8px;margin:8px 0;box-shadow:0 2px 4px #1212121a;transition:transform .3s ease}ion-item[_ngcontent-%COMP%]:active{transform:scale(.95)}ion-label[_ngcontent-%COMP%]{padding:16px}ion-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff;font-weight:600}.available[_ngcontent-%COMP%]{color:green;font-weight:700}.in-maintenance[_ngcontent-%COMP%]{color:red;font-weight:700}p[_ngcontent-%COMP%]{color:orange}"]}),i})()}];let _=(()=>{var t;class i{}return(t=i).\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[c.iI.forChild(v),c.iI]}),i})(),P=(()=>{var t;class i{}return(t=i).\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[o.MD,r.YN,l.bv,_]}),i})()}}]);