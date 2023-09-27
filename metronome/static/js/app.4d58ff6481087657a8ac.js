webpackJsonp([1],{"6A2P":function(t,n){},"6nfk":function(t,n){},AyJN:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",{attrs:{dark:t.backgroundActive&&t.enableBackground}},[e("main",[e("v-container",[e("h1",[t._v("Metronome")]),t._v(" "),e("v-text-field",{attrs:{label:"Time Signature"},model:{value:t.timeSignature,callback:function(n){t.timeSignature=n},expression:"timeSignature"}}),t._v(" "),e("v-text-field",{attrs:{label:"BPM",type:"number"},model:{value:t.bpm,callback:function(n){t.bpm=n},expression:"bpm"}}),t._v(" "),e("v-btn",{attrs:{color:"primary",large:""},on:{click:t.toggleRunning}},[t._v("\n        "+t._s(t.running?"Stop":"Start")+"\n      ")]),t._v(" "),e("v-btn",{attrs:{large:"",color:"secondary"},on:{click:t.tapTempo}},[t._v("Tap tempo")]),t._v(" "),e("v-checkbox",{staticClass:"checkbox",attrs:{label:"Flash"},model:{value:t.enableBackground,callback:function(n){t.enableBackground=n},expression:"enableBackground"}}),t._v(" "),e("a",{staticClass:"about-link",attrs:{href:"https://github.com/dhulme/metronome/blob/master/README.md"}},[t._v("About")])],1)],1)])},a=[],o={render:i,staticRenderFns:a};n.a=o},FbEL:function(t,n){},"HNa/":function(t,n){},M93x:function(t,n,e){"use strict";function i(t){e("6A2P"),e("YQVQ")}var a=e("xJD8"),o=e("AyJN"),u=e("VU/8"),r=i,s=u(a.a,o.a,!1,r,null,null);n.a=s.exports},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("7+uW"),a=e("M93x"),o=e("M+UZ");i.a.use(o.a),i.a.config.productionTip=!1,new i.a({el:"#app",template:"<App/>",components:{App:a.a}})},P0ba:function(t,n){},XC5Q:function(t,n){},YQVQ:function(t,n){},"q/9b":function(t,n){},qRVk:function(t,n){},xJD8:function(t,n,e){"use strict";var i=e("IcMm"),a=e("NUs8"),o=e("/yi5"),u=e("7Q1V"),r=e("z8aH"),s=new Audio("./static/metronome.wav"),c=new Audio("./static/metronome-up.wav");n.a={components:{VApp:i.a,VContainer:a.a,VTextField:o.a,VBtn:u.a,VCheckbox:r.a},data:function(){return{bpm:128,running:!1,count:0,totalCount:1,time:performance.now(),timeSignature:"4/4",soundReady:!1,tapTempoTimes:[],tapTempoTime:null,backgroundActive:!1,enableBackground:!1}},computed:{interval:function(){return 6e4/(this.bpm*(this.measure/4))},beats:function(){return Number(this.timeSignature.split("/")[0])},measure:function(){return Number(this.timeSignature.split("/")[1])}},watch:{bpm:"reset",beats:"reset",measure:"reset"},mounted:function(){var t=this,n=function n(){(performance.now()-t.time)/t.totalCount>t.interval&&(t.tick(),t.totalCount+=1),requestAnimationFrame(n)};requestAnimationFrame(n)},methods:{toggleRunning:function(){var t=this;this.running=!this.running,this.tickActive=!1,this.running&&(c.play(),this.updateBackground(),setTimeout(function(){s.play(),t.updateBackground()},this.interval),this.set(2))},set:function(t){this.totalCount=t,this.count=t,this.time=performance.now()},reset:function(){this.set(0)},tick:function(){this.running&&(this.count===this.beats&&(this.count=0),0===this.count?c.play():s.play(),this.updateBackground(),this.count+=1)},updateBackground:function(){this.backgroundActive=!this.backgroundActive},tapTempo:function(){this.running||this.toggleRunning();var t=performance.now();!this.tapTempoTime||t-2e3>this.tapTempoTime?this.tapTempoTimes=[]:this.tapTempoTime&&this.tapTempoTimes.push(t-this.tapTempoTime),this.tapTempoTime=t;var n=this.tapTempoTimes.reduce(function(t,n){return t+n},0)/this.tapTempoTimes.length||0;0!==n&&(this.bpm=Math.round(6e4/n)/(this.measure/4))}}}}},["NHnr"]);
//# sourceMappingURL=app.4d58ff6481087657a8ac.js.map