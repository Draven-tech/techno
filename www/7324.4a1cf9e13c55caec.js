"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7324],{7324:(P,m,i)=>{i.r(m),i.d(m,{CartPageModule:()=>I});var l=i(177),C=i(4341),o=i(4742),u=i(70),t=i(4438);let g=(()=>{var e;class n{getCartItems(){throw new Error("Method not implemented.")}removeMealFromCart(r){throw new Error("Method not implemented.")}constructor(){this.cart=[]}addMealToCart(r,c,s){this.cart.push({mealName:r,day:c,mealDetails:s})}getCart(){return this.cart}clearCart(){this.cart=[]}}return(e=n).\u0275fac=function(r){return new(r||e)},e.\u0275prov=t.jDH({token:e,factory:e.\u0275fac,providedIn:"root"}),n})();function d(e,n){1&e&&(t.j41(0,"div",5)(1,"ion-text",6)(2,"h2"),t.EFF(3,"Your cart is empty!"),t.k0s()()())}function f(e,n){if(1&e){const a=t.RV6();t.j41(0,"ion-item")(1,"ion-label")(2,"h3"),t.EFF(3),t.k0s(),t.j41(4,"p"),t.EFF(5),t.k0s()(),t.j41(6,"ion-button",8),t.bIt("click",function(){const c=t.eBV(a).index,s=t.XpG(2);return t.Njj(s.removeMeal(c))}),t.nrm(7,"ion-icon",9),t.k0s()()}if(2&e){const a=n.$implicit;t.R7$(3),t.Lme("",a.mealName," for ",a.day,""),t.R7$(2),t.JRh(a.mealDetails)}}function p(e,n){if(1&e&&(t.j41(0,"ion-list"),t.DNE(1,f,8,3,"ion-item",7),t.k0s()),2&e){const a=t.XpG();t.R7$(),t.Y8G("ngForOf",a.cartItems)}}const h=[{path:"",component:(()=>{var e;class n{constructor(r){this.cartService=r,this.cartItems=[]}ngOnInit(){this.cartItems=this.cartService.getCartItems()}removeMeal(r){this.cartService.removeMealFromCart(r),this.cartItems=this.cartService.getCartItems()}clearCart(){this.cartService.clearCart(),this.cartItems=[]}}return(e=n).\u0275fac=function(r){return new(r||e)(t.rXU(g))},e.\u0275cmp=t.VBU({type:e,selectors:[["app-cart"]],decls:12,vars:2,consts:[["slot","start"],["defaultHref","/dietplans"],["class","empty-cart",4,"ngIf"],[4,"ngIf"],["expand","full",3,"click"],[1,"empty-cart"],["color","medium"],[4,"ngFor","ngForOf"],["fill","clear","color","danger",3,"click"],["name","trash"]],template:function(r,c){1&r&&(t.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t.nrm(3,"ion-back-button",1),t.k0s(),t.j41(4,"ion-title"),t.EFF(5,"Cart"),t.k0s()()(),t.j41(6,"ion-content"),t.DNE(7,d,4,0,"div",2)(8,p,2,1,"ion-list",3),t.j41(9,"ion-footer")(10,"ion-button",4),t.bIt("click",function(){return c.clearCart()}),t.EFF(11,"Clear Cart"),t.k0s()()()),2&r&&(t.R7$(7),t.Y8G("ngIf",0===c.cartItems.length),t.R7$(),t.Y8G("ngIf",c.cartItems.length>0))},dependencies:[l.Sq,l.bT,o.Jm,o.QW,o.W9,o.M0,o.eU,o.iq,o.uz,o.he,o.nf,o.IO,o.BC,o.ai,o.el]}),n})()}];let v=(()=>{var e;class n{}return(e=n).\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[u.iI.forChild(h),u.iI]}),n})(),I=(()=>{var e;class n{}return(e=n).\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[l.MD,C.YN,o.bv,v]}),n})()}}]);