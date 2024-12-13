"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1955],{1955:(U,r,u)=>{u.r(r),u.d(r,{EditEquipmentStatusPageModule:()=>q});var o=u(177),m=u(4341),a=u(4742),p=u(70),e=u(4438);const g=(t,i)=>({"in-use":t,"not-in-use":i});function d(t,i){1&t&&(e.j41(0,"ion-buttons",6),e.nrm(1,"ion-back-button",7),e.k0s())}function E(t,i){if(1&t){const n=e.RV6();e.j41(0,"ion-item",9),e.bIt("click",function(){const l=e.eBV(n).$implicit,c=e.XpG(2);return e.Njj(c.selectEquipment(l))}),e.j41(1,"ion-label")(2,"h2"),e.EFF(3),e.k0s(),e.j41(4,"p"),e.EFF(5,"Click to edit units"),e.k0s()()()}if(2&t){const n=i.$implicit;e.R7$(3),e.JRh(n.name)}}function _(t,i){if(1&t&&(e.j41(0,"ion-list"),e.DNE(1,E,6,1,"ion-item",8),e.k0s()),2&t){const n=e.XpG();e.R7$(),e.Y8G("ngForOf",n.equipmentList)}}function f(t,i){if(1&t){const n=e.RV6();e.j41(0,"ion-item")(1,"ion-label")(2,"h2"),e.EFF(3),e.k0s(),e.j41(4,"p"),e.EFF(5,"Status: "),e.j41(6,"span",13),e.EFF(7),e.k0s()()(),e.j41(8,"ion-toggle",14),e.mxI("ngModelChange",function(l){const c=e.eBV(n).$implicit;return e.DH7(c.isInUse,l)||(c.isInUse=l),e.Njj(l)}),e.k0s()()}if(2&t){const n=i.$implicit;e.R7$(3),e.JRh(n.name),e.R7$(3),e.Y8G("ngClass",e.l_i(4,g,n.isInUse,!n.isInUse)),e.R7$(),e.SpI(" ",n.isInUse?"Available":"Under Maintenance"," "),e.R7$(),e.R50("ngModel",n.isInUse)}}function I(t,i){if(1&t){const n=e.RV6();e.j41(0,"ion-list"),e.DNE(1,f,9,7,"ion-item",10),e.j41(2,"ion-button",11),e.bIt("click",function(){e.eBV(n);const l=e.XpG();return e.Njj(l.saveStatus())}),e.EFF(3,"Save Status"),e.k0s(),e.j41(4,"ion-button",12),e.bIt("click",function(){e.eBV(n);const l=e.XpG();return e.Njj(l.clearSelection())}),e.EFF(5,"Back to Equipment List"),e.k0s()()}if(2&t){const n=e.XpG();e.R7$(),e.Y8G("ngForOf",n.selectedEquipment.units)}}const S=[{path:"",component:(()=>{var t;class i{constructor(){this.equipmentList=[{name:"Treadmill",units:[{name:"Treadmill 1",isInUse:!0},{name:"Treadmill 2",isInUse:!1},{name:"Treadmill 3",isInUse:!0},{name:"Treadmill 4",isInUse:!1}]},{name:"Stationary Bike",units:[{name:"Bike 1",isInUse:!1},{name:"Bike 2",isInUse:!0},{name:"Bike 3",isInUse:!0}]},{name:"Elliptical Trainer",units:[{name:"Elliptical 1",isInUse:!0},{name:"Elliptical 2",isInUse:!1},{name:"Elliptical 3",isInUse:!0}]},{name:"Bench Press",units:[{name:"Bench Press 1",isInUse:!1},{name:"Bench Press 2",isInUse:!0}]},{name:"Rowing Machine",units:[{name:"Rowing Machine 1",isInUse:!0},{name:"Rowing Machine 2",isInUse:!1},{name:"Rowing Machine 3",isInUse:!0}]},{name:"Leg Press",units:[{name:"Leg Press 1",isInUse:!1},{name:"Leg Press 2",isInUse:!0}]},{name:"Dumbbells",units:[{name:"Dumbbell Set 1",isInUse:!0},{name:"Dumbbell Set 2",isInUse:!1}]},{name:"Squat Rack",units:[{name:"Squat Rack 1",isInUse:!1},{name:"Squat Rack 2",isInUse:!0}]},{name:"Pull-up Bar",units:[{name:"Pull-up Bar 1",isInUse:!0},{name:"Pull-up Bar 2",isInUse:!0}]},{name:"Kettlebells",units:[{name:"Kettlebell Set 1",isInUse:!0},{name:"Kettlebell Set 2",isInUse:!1},{name:"Kettlebell Set 3",isInUse:!0}]},{name:"Cable Machine",units:[{name:"Cable Machine 1",isInUse:!0},{name:"Cable Machine 2",isInUse:!1}]}],this.selectedEquipment=null}ngOnInit(){}selectEquipment(s){this.selectedEquipment=s}clearSelection(){this.selectedEquipment=null}saveStatus(){console.log("Status updated:",this.selectedEquipment)}}return(t=i).\u0275fac=function(s){return new(s||t)},t.\u0275cmp=e.VBU({type:t,selectors:[["app-edit-equipment-status"]],decls:12,vars:5,consts:[[3,"translucent"],["slot","start",4,"ngIf"],[3,"fullscreen"],["collapse","condense"],["size","large"],[4,"ngIf"],["slot","start"],["defaultHref","/adminmenu"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[4,"ngFor","ngForOf"],["expand","full","color","success",3,"click"],["expand","full",3,"click"],[3,"ngClass"],[3,"ngModelChange","ngModel"]],template:function(s,l){1&s&&(e.j41(0,"ion-header",0)(1,"ion-toolbar"),e.DNE(2,d,2,0,"ion-buttons",1),e.j41(3,"ion-title"),e.EFF(4,"Edit Equipment Status"),e.k0s()()(),e.j41(5,"ion-content",2)(6,"ion-header",3)(7,"ion-toolbar")(8,"ion-title",4),e.EFF(9,"Edit Equipment Status"),e.k0s()()(),e.DNE(10,_,2,1,"ion-list",5)(11,I,6,1,"ion-list",5),e.k0s()),2&s&&(e.Y8G("translucent",!0),e.R7$(2),e.Y8G("ngIf",!l.selectedEquipment),e.R7$(3),e.Y8G("fullscreen",!0),e.R7$(5),e.Y8G("ngIf",!l.selectedEquipment),e.R7$(),e.Y8G("ngIf",l.selectedEquipment))},dependencies:[o.YU,o.Sq,o.bT,m.BC,m.vS,a.Jm,a.QW,a.W9,a.eU,a.uz,a.he,a.nf,a.BC,a.BY,a.ai,a.hB,a.el],styles:["ion-item[_ngcontent-%COMP%]{--background: #1e1d1d;border-radius:8px;margin:8px 0;box-shadow:0 2px 4px #1212121a;transition:transform .3s ease}ion-item[_ngcontent-%COMP%]:active{transform:scale(.95)}ion-label[_ngcontent-%COMP%]{padding:16px}ion-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff;font-weight:600}.in-use[_ngcontent-%COMP%]{color:green;font-weight:700}.not-in-use[_ngcontent-%COMP%]{color:red;font-weight:700}p[_ngcontent-%COMP%]{color:orange}ion-toggle[_ngcontent-%COMP%]{margin-left:auto}"]}),i})()}];let P=(()=>{var t;class i{}return(t=i).\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[p.iI.forChild(S),p.iI]}),i})(),q=(()=>{var t;class i{}return(t=i).\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[o.MD,m.YN,a.bv,P]}),i})()}}]);