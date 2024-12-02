"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[655],{655:(h,d,s)=>{s.r(d),s.d(d,{MealDetailsPageModule:()=>p});var c=s(177),m=s(4341),t=s(4742),r=s(70),e=s(4438);const u=[{path:"",component:(()=>{var a;class l{constructor(n){this.activatedRoute=n,this.mealId=0,this.meal={},this.mealDetails=[{id:1,name:"Chicken Salad",description:"A healthy chicken salad.",dietPlan:"Weight Loss",ingredients:"Chicken, Lettuce, Tomatoes, Dressing",calories:350},{id:2,name:"Steak with Veggies",description:"A protein-rich steak meal.",dietPlan:"Muscle Gain",ingredients:"Steak, Broccoli, Carrots",calories:600},{id:3,name:"Vegan Stir-fry",description:"Plant-based meal.",dietPlan:"Vegan",ingredients:"Tofu, Broccoli, Bell Peppers, Soy Sauce",calories:400}]}ngOnInit(){const n=this.activatedRoute.snapshot.paramMap.get("id");n&&!isNaN(+n)?this.mealId=+n:(console.error("Invalid or missing meal ID"),this.mealId=0),this.meal=this.mealDetails.find(i=>i.id===this.mealId),this.meal||(console.error("Meal not found for ID:",this.mealId),this.meal={name:"Unknown Meal",description:"The requested meal details could not be found.",dietPlan:"N/A",ingredients:"N/A",calories:0})}orderMeal(){console.log(`Ordering the meal: ${this.meal.name}`),alert(`You have ordered: ${this.meal.name}`)}}return(a=l).\u0275fac=function(n){return new(n||a)(e.rXU(r.nX))},a.\u0275cmp=e.VBU({type:a,selectors:[["app-meal-details"]],decls:29,vars:7,consts:[["color","primary"],["slot","start"],["defaultHref","/meal-options"],[3,"fullscreen"],["expand","full","color","success",3,"click"],["name","cart","slot","start"]],template:function(n,i){1&n&&(e.j41(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),e.nrm(3,"ion-back-button",2),e.k0s(),e.j41(4,"ion-title"),e.EFF(5),e.k0s()()(),e.j41(6,"ion-content",3)(7,"ion-card")(8,"ion-card-header")(9,"ion-card-title"),e.EFF(10),e.k0s(),e.j41(11,"ion-card-subtitle"),e.EFF(12),e.k0s()(),e.j41(13,"ion-card-content")(14,"p")(15,"strong"),e.EFF(16,"Description:"),e.k0s(),e.EFF(17),e.k0s(),e.j41(18,"p")(19,"strong"),e.EFF(20,"Ingredients:"),e.k0s(),e.EFF(21),e.k0s(),e.j41(22,"p")(23,"strong"),e.EFF(24,"Calories:"),e.k0s(),e.EFF(25),e.k0s(),e.j41(26,"ion-button",4),e.bIt("click",function(){return i.orderMeal()}),e.nrm(27,"ion-icon",5),e.EFF(28," Order This Meal "),e.k0s()()()()),2&n&&(e.R7$(5),e.JRh(i.meal.name),e.R7$(),e.Y8G("fullscreen",!0),e.R7$(4),e.JRh(i.meal.name),e.R7$(2),e.SpI("",i.meal.dietPlan," Plan"),e.R7$(5),e.SpI(" ",i.meal.description,""),e.R7$(4),e.SpI(" ",i.meal.ingredients,""),e.R7$(4),e.SpI(" ",i.meal.calories," kcal"))},dependencies:[t.Jm,t.QW,t.b_,t.I9,t.ME,t.HW,t.tN,t.W9,t.eU,t.iq,t.BC,t.ai,t.el],styles:[".details-container[_ngcontent-%COMP%]{padding:20px}ion-card[_ngcontent-%COMP%]{margin:10px 0}ion-button[_ngcontent-%COMP%]{margin-top:20px;width:100%}"]}),l})()}];let g=(()=>{var a;class l{}return(a=l).\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.$C({type:a}),a.\u0275inj=e.G2t({imports:[r.iI.forChild(u),r.iI]}),l})(),p=(()=>{var a;class l{}return(a=l).\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.$C({type:a}),a.\u0275inj=e.G2t({imports:[c.MD,m.YN,t.bv,g]}),l})()}}]);