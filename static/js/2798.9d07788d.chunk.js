"use strict";(self.webpackChunkraleighnc_web_component=self.webpackChunkraleighnc_web_component||[]).push([[2798],{12798:function(t,s,i){i.r(s),i.d(s,{water_usage:function(){return l}});var e=i(43144),a=i(15671),n=i(61118),h=(0,e.Z)((function t(s,i,e,n,h){(0,a.Z)(this,t),this.label=s,this.value=i,this.max=e,this.gallons=n,this.ccfunits=h})),l=function(){function t(s){(0,a.Z)(this,t),(0,n.r)(this,s),this.currentIndex={index:0},this.shower1=new h("How many minutes does the average shower last in your household?",0,30,0,0),this.shower2=new h("How many showers are taken each week in your household?",0,50,0,0),this.bath1=new h("How many full-tub baths are taken each week in your household?",0,50,0,0),this.bath2=new h("How many half-tub baths are taken each week in your household?",0,50,0,0),this.toilet=new h("How many people are in your household?",0,25,0,0),this.teeth=new h("How many times per day does each person brush their teeth?",0,10,0,0),this.shaving=new h("How many times per week does someone shave in your household?",0,75,0,0),this.washing=new h("How many times are face or hands washed per day in your household?",0,100,0,0),this.dishwasher=new h("How many times per week is the dishwasher run in your household?",0,25,0,0),this.dishes=new h("How many minutes each day do you run water while hand-washing dishes?",0,60,0,0),this.clothes=new h("How many loads of laundry are washed per week?",0,25,0,0),this.outdoor=new h("How many minutes per week does your household use water outdoors?",0,500,0,0),this.dripping=new h("How many faucets are dripping in your household?",0,10,0,0),this.leaking=new h("How many toilets are leaking in your household?",0,5,0,0),this.indoor=new h("Based on the number of people in your household (as answered above)",0,50,0,0),this.sliders=[this.shower1,this.shower2,this.bath1,this.bath2,this.toilet,this.teeth,this.shaving,this.washing,this.dishwasher,this.dishes,this.clothes,this.outdoor,this.dripping,this.leaking,this.indoor]}return(0,e.Z)(t,[{key:"shower1Input",value:function(t){this.shower1=Object.assign(Object.assign({},this.shower1),{value:t.target.value}),this.shower2=Object.assign(Object.assign({},this.shower2),{gallons:this.shower1.value*this.shower2.value*4.33*5}),this.shower2=Object.assign(Object.assign({},this.shower2),{ccfunits:this.shower2.gallons/748})}},{key:"shower2Input",value:function(t){this.shower2=Object.assign(Object.assign({},this.shower2),{value:t.target.value}),this.shower2=Object.assign(Object.assign({},this.shower2),{gallons:this.shower1.value*this.shower2.value*4.33*5}),this.shower2=Object.assign(Object.assign({},this.shower2),{ccfunits:this.shower2.gallons/748})}},{key:"bath1Input",value:function(t){this.bath1=Object.assign(Object.assign({},this.bath1),{value:t.target.value,gallons:4.33*t.target.value*36}),this.bath1=Object.assign(Object.assign({},this.bath1),{ccfunits:this.bath1.gallons/748})}},{key:"bath2Input",value:function(t){this.bath2=Object.assign(Object.assign({},this.bath2),{value:t.target.value,gallons:4.33*t.target.value*18}),this.bath2=Object.assign(Object.assign({},this.bath2),{ccfunits:this.bath2.gallons/748})}},{key:"toiletInput",value:function(t){this.toilet=Object.assign(Object.assign({},this.toilet),{value:t.target.value,gallons:30.4*t.target.value*12}),this.toilet=Object.assign(Object.assign({},this.toilet),{ccfunits:this.toilet.gallons/748}),this.teeth=Object.assign(Object.assign({},this.teeth),{gallons:t.target.value*this.teeth.value*30.4*3}),this.teeth=Object.assign(Object.assign({},this.teeth),{ccfunits:this.teeth.gallons/748}),this.indoor=Object.assign(Object.assign({},this.toilet),{value:t.target.value})}},{key:"teethInput",value:function(t){this.teeth=Object.assign(Object.assign({},this.teeth),{value:t.target.value,gallons:t.target.value*this.toilet.value*30.4*3}),this.teeth=Object.assign(Object.assign({},this.teeth),{ccfunits:this.teeth.gallons/748})}},{key:"shavingInput",value:function(t){this.shaving=Object.assign(Object.assign({},this.shaving),{value:t.target.value,gallons:4.33*t.target.value}),this.shaving=Object.assign(Object.assign({},this.shaving),{ccfunits:this.shaving.gallons/748})}},{key:"washingInput",value:function(t){this.washing=Object.assign(Object.assign({},this.washing),{value:t.target.value,gallons:30.4*t.target.value}),this.washing=Object.assign(Object.assign({},this.washing),{ccfunits:this.washing.gallons/748})}},{key:"dishwasherInput",value:function(t){this.dishwasher=Object.assign(Object.assign({},this.dishwasher),{value:t.target.value,gallons:16*t.target.value*4.33}),this.dishwasher=Object.assign(Object.assign({},this.dishwasher),{ccfunits:this.dishwasher.gallons/748})}},{key:"dishesInput",value:function(t){this.dishes=Object.assign(Object.assign({},this.dishes),{value:t.target.value,gallons:3*t.target.value*30.4}),this.dishes=Object.assign(Object.assign({},this.dishes),{ccfunits:this.dishes.gallons/748})}},{key:"clothesInput",value:function(t){this.clothes=Object.assign(Object.assign({},this.clothes),{value:t.target.value,gallons:44*t.target.value*4.33}),this.clothes=Object.assign(Object.assign({},this.clothes),{ccfunits:this.clothes.gallons/748})}},{key:"outdoorInput",value:function(t){this.outdoor=Object.assign(Object.assign({},this.outdoor),{value:t.target.value,gallons:6*t.target.value*4.33}),this.outdoor=Object.assign(Object.assign({},this.outdoor),{ccfunits:this.outdoor.gallons/748})}},{key:"drippingInput",value:function(t){this.dripping=Object.assign(Object.assign({},this.dripping),{value:t.target.value,gallons:1*t.target.value*30.4}),this.dripping=Object.assign(Object.assign({},this.dripping),{ccfunits:this.dripping.gallons/748})}},{key:"leakingInput",value:function(t){this.leaking=Object.assign(Object.assign({},this.leaking),{value:t.target.value,gallons:200*t.target.value*30.4}),this.leaking=Object.assign(Object.assign({},this.leaking),{ccfunits:this.leaking.gallons/748})}},{key:"indoorInput",value:function(t){this.indoor=Object.assign(Object.assign({},this.indoor),{value:t.target.value,gallons:30.4*t.target.value*10}),this.indoor=Object.assign(Object.assign({},this.indoor),{ccfunits:this.indoor.gallons/748})}},{key:"disconnectedCallback",value:function(){document.getElementById("councilDiv").innerHTML=""}},{key:"render",value:function(){var t=this;return(0,n.h)("div",{id:"waterUsage"},(0,n.h)("div",{class:0===this.currentIndex.index?" active":" inactive"},(0,n.h)("h2",{class:"title t-forest"},"Showers"),(0,n.h)("div",{class:"container"},"An average shower uses 5 gallons of water per minute.",(0,n.h)("label",null,this.shower1.label),(0,n.h)("div",{class:"questions"},(0,n.h)("div",{class:"inputs"},(0,n.h)("input",{type:"range",onInput:function(s){return t.shower1Input(s)},onChange:function(s){return t.shower1Input(s)},min:"0",max:this.shower1.max,value:this.shower1.value,step:"1","aria-valuemin":"0","aria-valuemax":this.shower1.max,"aria-valuenow":"0"}),(0,n.h)("input",{type:"number",min:"0",max:this.shower1.max,value:this.shower1.value,onInput:function(s){return t.shower1Input(s)}})),(0,n.h)("div",{class:"totals"},(0,n.h)("div",{class:"total"}),(0,n.h)("div",{class:"total"}))),(0,n.h)("label",null,this.shower2.label),(0,n.h)("div",{class:"questions"},(0,n.h)("div",{class:"inputs"},(0,n.h)("input",{type:"range",onInput:function(s){return t.shower2Input(s)},onChange:function(s){return t.shower2Input(s)},min:"0",max:this.shower2.max,value:this.shower2.value,step:"1","aria-valuemin":"0","aria-valuemax":this.shower2.max,"aria-valuenow":"0"}),(0,n.h)("input",{type:"number",min:"0",max:this.shower2.max,value:this.shower2.value,onInput:function(s){return t.shower2Input(s)}})),(0,n.h)("div",{class:"totals"},(0,n.h)("div",{class:"total"},Math.round(this.shower2.gallons).toLocaleString()," gallons"),(0,n.h)("div",{class:"total"},this.shower2.ccfunits.toFixed(3)," CCF"))))),(0,n.h)("div",{class:1===this.currentIndex.index?" active":" inactive"},(0,n.h)("h2",{class:"title t-forest"},"Baths"),(0,n.h)("div",{class:"container"},"A full-tub bath uses 36 gallons of water; a half-tub bath uses 18 gallons of water.    ",(0,n.h)("label",null,this.bath1.label),(0,n.h)("div",{class:"questions"},(0,n.h)("div",{class:"inputs"},(0,n.h)("input",{type:"range",onInput:function(s){return t.bath1Input(s)},onChange:function(s){return t.bath1Input(s)},min:"0",max:this.bath1.max,value:this.bath1.value,step:"1","aria-valuemin":"0","aria-valuemax":this.bath1.max,"aria-valuenow":"0"}),(0,n.h)("input",{type:"number",min:"0",max:this.bath1.max,value:this.bath1.value,onInput:function(s){return t.bath1Input(s)}})),(0,n.h)("div",{class:"totals"},(0,n.h)("div",{class:"total"},Math.round(Math.round(this.bath1.gallons)).toLocaleString()," gallons"),(0,n.h)("div",{class:"total"},this.bath1.ccfunits.toFixed(3)," CCF"))),(0,n.h)("label",null,this.bath2.label),(0,n.h)("div",{class:"questions"},(0,n.h)("div",{class:"inputs"},(0,n.h)("input",{type:"range",onInput:function(s){return t.bath2Input(s)},onChange:function(s){return t.bath2Input(s)},min:"0",max:this.bath2.max,value:this.bath2.value,step:"1","aria-valuemin":"0","aria-valuemax":this.bath2.max,"aria-valuenow":"0"}),(0,n.h)("input",{type:"number",min:"0",max:this.bath2.max,value:this.bath2.value,onInput:function(s){return t.bath2Input(s)}})),(0,n.h)("div",{class:"totals"},(0,n.h)("div",{class:"total"},Math.round(Math.round(this.bath2.gallons)).toLocaleString()," gallons            "),(0,n.h)("div",{class:"total"},this.bath2.ccfunits.toFixed(3)," CCF"))))),(0,n.h)("div",{class:2===this.currentIndex.index?" active":" inactive"},(0,n.h)("h2",{class:"title t-forest"},"Toilet Flushes"),(0,n.h)("div",{class:"container"},"The average person flushes 4 times daily, using 3 gallons of water per flush.     ",(0,n.h)("label",null,this.toilet.label),(0,n.h)("div",{class:"questions"},(0,n.h)("div",{class:"inputs"},(0,n.h)("input",{type:"range",onInput:function(s){return t.toiletInput(s)},onChange:function(s){return t.toiletInput(s)},min:"0",max:this.toilet.max,value:this.toilet.value,step:"1","aria-valuemin":"0","aria-valuemax":this.toilet.max,"aria-valuenow":"0"}),(0,n.h)("input",{type:"number",min:"0",max:this.toilet.max,value:this.toilet.value,onInput:function(s){return t.toiletInput(s)}})),(0,n.h)("div",{class:"totals"},(0,n.h)("div",{class:"total"},Math.round(30.4*this.toilet.value*12).toLocaleString()," gallons"),(0,n.h)("div",{class:"total"},this.toilet.ccfunits.toFixed(3)," CCF"))))),(0,n.h)("div",{class:3===this.currentIndex.index?" active":" inactive"},(0,n.h)("h2",{class:"title t-forest"},"Brushing Teeth"),(0,n.h)("div",{class:"container"},"The average person uses 3 gallons of water each time they brush their teeth.",(0,n.h)("label",null,this.teeth.label),(0,n.h)("div",{class:"questions"},(0,n.h)("div",{class:"inputs"},(0,n.h)("input",{type:"range",onInput:function(s){return t.teethInput(s)},onChange:function(s){return t.teethInput(s)},min:"0",max:this.teeth.max,value:this.teeth.value,step:"1","aria-valuemin":"0","aria-valuemax":this.teeth.max,"aria-valuenow":"0"}),(0,n.h)("input",{type:"number",min:"0",max:this.teeth.max,value:this.teeth.value,onInput:function(s){return t.teethInput(s)}})),(0,n.h)("div",{class:"totals"},(0,n.h)("div",{class:"total"},Math.round(this.teeth.gallons).toLocaleString()," gallons"),(0,n.h)("div",{class:"total"},this.teeth.ccfunits.toFixed(3)," CCF"))))),(0,n.h)("div",{class:4===this.currentIndex.index?" active":" inactive"},(0,n.h)("h2",{class:"title t-forest"},"Shaving"),(0,n.h)("div",{class:"container"},"The average shave uses 1 gallon of water.",(0,n.h)("label",null,this.shaving.label),(0,n.h)("div",{class:"questions"},(0,n.h)("div",{class:"inputs"},(0,n.h)("input",{type:"range",onInput:function(s){return t.shavingInput(s)},onChange:function(s){return t.shavingInput(s)},min:"0",max:this.shaving.max,value:this.shaving.value,step:"1","aria-valuemin":"0","aria-valuemax":this.shaving.max,"aria-valuenow":"0"}),(0,n.h)("input",{type:"number",min:"0",max:this.shaving.max,value:this.shaving.value,onInput:function(s){return t.shavingInput(s)}})),(0,n.h)("div",{class:"totals"},(0,n.h)("div",{class:"total"},Math.round(this.shaving.gallons).toLocaleString()," gallons"),(0,n.h)("div",{class:"total"},this.shaving.ccfunits.toFixed(3)," CCF"))))),(0,n.h)("div",{class:5===this.currentIndex.index?" active":" inactive"},(0,n.h)("h2",{class:"title t-forest"},"Face/Hand Washing"),(0,n.h)("div",{class:"container"},"Each time you wash your face or hands, approximately 1 gallon of water is used.    ",(0,n.h)("label",null,this.washing.label),(0,n.h)("div",{class:"questions"},(0,n.h)("div",{class:"inputs"},(0,n.h)("input",{type:"range",onInput:function(s){return t.washingInput(s)},onChange:function(s){return t.washingInput(s)},min:"0",max:this.washing.max,value:this.washing.value,step:"1","aria-valuemin":"0","aria-valuemax":this.washing.max,"aria-valuenow":"0"}),(0,n.h)("input",{type:"number",min:"0",max:this.washing.max,value:this.washing.value,onInput:function(s){return t.washingInput(s)}})),(0,n.h)("div",{class:"totals"},(0,n.h)("div",{class:"total"},Math.round(this.washing.gallons).toLocaleString()," gallons"),(0,n.h)("div",{class:"total"},this.washing.ccfunits.toFixed(3)," CCF"))))),(0,n.h)("div",{class:6===this.currentIndex.index?" active":" inactive"},(0,n.h)("h2",{class:"title t-forest"},"Dishwasher"),(0,n.h)("div",{class:"container"},"The average dishwasher uses 16 gallons of water per wash.",(0,n.h)("label",null,this.dishwasher.label),(0,n.h)("div",{class:"questions"},(0,n.h)("div",{class:"inputs"},(0,n.h)("input",{type:"range",onInput:function(s){return t.dishwasherInput(s)},onChange:function(s){return t.dishwasherInput(s)},min:"0",max:this.dishwasher.max,value:this.dishwasher.value,step:"1","aria-valuemin":"0","aria-valuemax":this.dishwasher.max,"aria-valuenow":"0"}),(0,n.h)("input",{type:"number",min:"0",max:this.dishwasher.max,value:this.dishwasher.value,onInput:function(s){return t.dishwasherInput(s)}})),(0,n.h)("div",{class:"totals"},(0,n.h)("div",{class:"total"},Math.round(this.dishwasher.gallons).toLocaleString()," gallons"),(0,n.h)("div",{class:"total"},this.dishwasher.ccfunits.toFixed(3)," CCF"))))),(0,n.h)("div",{class:7===this.currentIndex.index?" active":" inactive"},(0,n.h)("h2",{class:"title t-forest"},"Hand-Washing Dishes"),(0,n.h)("div",{class:"container"},"Hand-washing dishes with water running uses 3 gallons of water per minute.",(0,n.h)("label",null,this.dishes.label),(0,n.h)("div",{class:"questions"},(0,n.h)("div",{class:"inputs"},(0,n.h)("input",{type:"range",onInput:function(s){return t.dishesInput(s)},onChange:function(s){return t.dishesInput(s)},min:"0",max:this.dishes.max,value:this.dishes.value,step:"1","aria-valuemin":"0","aria-valuemax":this.dishes.max,"aria-valuenow":"0"}),(0,n.h)("input",{type:"number",min:"0",max:this.dishes.max,value:this.dishes.value,onInput:function(s){return t.dishesInput(s)}})),(0,n.h)("div",{class:"totals"},(0,n.h)("div",{class:"total"},Math.round(this.dishes.gallons).toLocaleString()," gallons"),(0,n.h)("div",{class:"total"},this.dishes.ccfunits.toFixed(3)," CCF"))))),(0,n.h)("div",{class:8===this.currentIndex.index?" active":" inactive"},(0,n.h)("h2",{class:"title t-forest"},"Clothes Washer"),(0,n.h)("div",{class:"container"},"The average washing machine uses 44 gallons of water per load of laundry.",(0,n.h)("label",null,this.clothes.label),(0,n.h)("div",{class:"questions"},(0,n.h)("div",{class:"inputs"},(0,n.h)("input",{type:"range",onInput:function(s){return t.clothesInput(s)},onChange:function(s){return t.clothesInput(s)},min:"0",max:this.clothes.max,value:this.clothes.value,step:"1","aria-valuemin":"0","aria-valuemax":this.clothes.max,"aria-valuenow":"0"}),(0,n.h)("input",{type:"number",min:"0",max:this.clothes.max,value:this.clothes.value,onInput:function(s){return t.clothesInput(s)}})),(0,n.h)("div",{class:"totals"},(0,n.h)("div",{class:"total"},Math.round(this.clothes.gallons).toLocaleString()," gallons"),(0,n.h)("div",{class:"total"},this.clothes.ccfunits.toFixed(3)," CCF"))))),(0,n.h)("div",{class:9===this.currentIndex.index?" active":" inactive"},(0,n.h)("h2",{class:"title t-forest"},"Outdoor Use"),(0,n.h)("div",{class:"container"},"When using water outdoors, the average use is 6 gallons of water per minute.        ",(0,n.h)("label",null,this.outdoor.label),(0,n.h)("div",{class:"questions"},(0,n.h)("div",{class:"inputs"},(0,n.h)("input",{type:"range",onInput:function(s){return t.outdoorInput(s)},onChange:function(s){return t.outdoorInput(s)},min:"0",max:this.outdoor.max,value:this.outdoor.value,step:"1","aria-valuemin":"0","aria-valuemax":this.outdoor.max,"aria-valuenow":"0"}),(0,n.h)("input",{type:"number",min:"0",max:this.outdoor.max,value:this.outdoor.value,onInput:function(s){return t.outdoorInput(s)}})),(0,n.h)("div",{class:"totals"},(0,n.h)("div",{class:"total"},Math.round(this.outdoor.gallons).toLocaleString()," gallons"),(0,n.h)("div",{class:"total"},this.outdoor.ccfunits.toFixed(3)," CCF"))))),(0,n.h)("div",{class:10===this.currentIndex.index?" active":" inactive"},(0,n.h)("h2",{class:"title t-forest"},"Dripping faucet"),(0,n.h)("div",{class:"container"},"A faucet that drips 10 times per minute uses 1 gallon of water per day.",(0,n.h)("label",null,this.dripping.label),(0,n.h)("div",{class:"questions"},(0,n.h)("div",{class:"inputs"},(0,n.h)("input",{type:"range",onInput:function(s){return t.drippingInput(s)},onChange:function(s){return t.drippingInput(s)},min:"0",max:this.dripping.max,value:this.dripping.value,step:"1","aria-valuemin":"0","aria-valuemax":this.dripping.max,"aria-valuenow":"0"}),(0,n.h)("input",{type:"number",min:"0",max:this.dripping.max,value:this.dripping.value,onInput:function(s){return t.drippingInput(s)}})),(0,n.h)("div",{class:"totals"},(0,n.h)("div",{class:"total"},Math.round(this.dripping.gallons).toLocaleString()," gallons"),(0,n.h)("div",{class:"total"},this.dripping.ccfunits.toFixed(3)," CCF"))))),(0,n.h)("div",{class:11===this.currentIndex.index?" active":" inactive"},(0,n.h)("h2",{class:"title t-forest"},"Leaking toilet"),(0,n.h)("div",{class:"container"},"A leaking toilet can use 200 or more gallons of water per day.",(0,n.h)("label",null,this.leaking.label),(0,n.h)("div",{class:"questions"},(0,n.h)("div",{class:"inputs"},(0,n.h)("input",{type:"range",onInput:function(s){return t.leakingInput(s)},onChange:function(s){return t.leakingInput(s)},min:"0",max:this.leaking.max,value:this.leaking.value,step:"1","aria-valuemin":"0","aria-valuemax":this.leaking.max,"aria-valuenow":"0"}),(0,n.h)("input",{type:"number",min:"0",max:this.leaking.max,value:this.leaking.value,onInput:function(s){return t.leakingInput(s)}})),(0,n.h)("div",{class:"totals"},(0,n.h)("div",{class:"total"},Math.round(this.leaking.gallons).toLocaleString()," gallons"),(0,n.h)("div",{class:"total"},this.leaking.ccfunits.toFixed(3)," CCF"))))),(0,n.h)("div",{class:12===this.currentIndex.index?" active":" inactive"},(0,n.h)("h2",{class:"title t-forest"},"Other Indoor Use"),(0,n.h)("div",{class:"container"},"An average person uses 10 gallons of water per day for other various indoor uses.",(0,n.h)("label",null,this.indoor.label),(0,n.h)("div",{class:"questions"},(0,n.h)("div",{class:"inputs"},(0,n.h)("input",{type:"range",onInput:function(s){return t.indoorInput(s)},onChange:function(s){return t.indoorInput(s)},disabled:!0,min:"0",max:this.indoor.max,value:this.indoor.value,step:"1","aria-valuemin":"0","aria-valuemax":this.indoor.max,"aria-valuenow":"0"}),(0,n.h)("input",{disabled:!0,type:"number",min:"0",max:this.indoor.max,value:this.indoor.value,onInput:function(s){return t.indoorInput(s)}})),(0,n.h)("div",{class:"totals"},(0,n.h)("div",{class:"total"},Math.round(this.indoor.gallons).toLocaleString()," gallons"),(0,n.h)("div",{class:"total"},this.indoor.ccfunits.toFixed(3)," CCF"))))),(0,n.h)("div",{class:"container"},(0,n.h)("button",{onClick:function(){return t.currentIndex=Object.assign(Object.assign({},t.currentIndex),{index:t.currentIndex.index-=1})},class:0!=this.currentIndex.index?"button back ":" btn-hidden button back"},"Previous"),(0,n.h)("button",{onClick:function(){return t.currentIndex=Object.assign(Object.assign({},t.currentIndex),{index:t.currentIndex.index+=1})},class:12!=this.currentIndex.index?"button next ":" btn-hidden button back"},"Next")),(0,n.h)("div",{class:"results"},(0,n.h)("h3",null,"Total Monthly Water Usage"),(0,n.h)("div",{class:"totals"},(0,n.h)("div",{class:"total"},Math.round(this.shower2.gallons+this.bath1.gallons+this.bath2.gallons+this.toilet.gallons+this.teeth.gallons+this.shaving.gallons+this.washing.gallons+this.dishwasher.gallons+this.dishes.gallons+this.clothes.gallons+this.outdoor.gallons+this.dripping.gallons+this.leaking.gallons+this.indoor.gallons).toLocaleString().toLocaleString()," Gallons"),(0,n.h)("div",{class:"total"},(this.shower2.ccfunits+this.bath1.ccfunits+this.bath2.ccfunits+this.toilet.ccfunits+this.teeth.ccfunits+this.shaving.ccfunits+this.washing.ccfunits+this.dishwasher.ccfunits+this.dishes.ccfunits+this.clothes.ccfunits+this.outdoor.ccfunits+this.dripping.ccfunits+this.leaking.ccfunits+this.indoor.ccfunits).toFixed(3)," CCF"))))}}]),t}();l.style='@import url("https://raw.githubusercontent.com/Esri/calcite-web/master/dist/css/calcite-web.min.css");.inputs{display:inline-flex;width:100%}.questions{display:inline-flex;width:100%}.totals{display:inline-flex;width:65%}.questions .totals{padding-top:0.25em}.total{margin:0 0 0 1em}.next{float:right}.container{margin:0;background-color:#f2f3f4;width:100%;padding:1em 1em 1em 1em}.title{padding-left:1em;padding-top:0.5em;padding-bottom:0.5em;margin-bottom:0}input[type=number]{width:100px;margin-left:1em}input[type=range]{width:100%}.results{background-color:#231f20;color:white;width:100%;display:inline-flex;padding:0.5em 1em 0.5em 1em}.results .totals{width:100%}.btn-hidden{visibility:hidden}.values{align-items:flex-end;margin-bottom:0.75em !important}.active{display:block}.inactive{display:none}@media (max-width: 37.5em){input[type=number]{float:none;width:80px}input[type=range]{float:none;margin:0}.questions{display:block}.totals{width:100%}.total{margin:0 1em 0 0}.results{display:block}.results .totals{margin-top:1em}}input[type=range]:hover{border:none !important;-webkit-box-shadow:none;box-shadow:none}input[type=range]:focus{border:none !important;-webkit-box-shadow:none;box-shadow:none}label{margin:0}#waterUsage{margin:0 1em 0 1em}.results h3{color:white;width:100%}'}}]);
//# sourceMappingURL=2798.9d07788d.chunk.js.map