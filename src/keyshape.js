/*
 KeyshapeJS v1.0.0 (c) 2018 Pixofield Ltd | pixofield.com/keyshapejs/mit-license */
 window.KeyshapeJS=function(){function A(a){return"undefined"!==typeof a}function v(a,b){return a&&0==a.indexOf(b)}function H(a){if(!isFinite(a))throw Error("Non-finite value");}function Q(a){if(14>=a)return 16;var b=R[a];b||(b=A(ba[a])?0|(a.toLowerCase().indexOf("color")==a.length-5?48:0):1);return b}function J(a){return 0<=a?Math.pow(a,1/3):-Math.pow(-a,1/3)}function ca(a,b,c,d){if(0==a)return 0==b?b=-d/c:(a=Math.sqrt(c*c-4*b*d),d=(-c+a)/(2*b),0<=d&&1>=d?b=d:(d=(-c-a)/(2*b),b=0<=d&&1>=d?d:0)),b;
    var e=c/a-b*b/(a*a)/3;c=b*b*b/(a*a*a)/13.5-b*c/(a*a)/3+d/a;var n=c*c/4+e*e*e/27;b=-b/(3*a);if(0>=n){if(0==e&&0==c)return-J(d/a);a=Math.sqrt(c*c/4-n);d=Math.acos(-c/2/a);c=Math.cos(d/3);d=Math.sqrt(3)*Math.sin(d/3);a=J(a);e=2*a*c+b;if(0<=e&&1>=e)return e;e=-a*(c+d)+b;if(0<=e&&1>=e)return e;e=a*(d-c)+b;if(0<=e&&1>=e)return e}else{a=J(-c/2+Math.sqrt(n));c=J(-c/2-Math.sqrt(n));d=a+c+b;if(0<=d&&1>=d)return d;d=-(a+c)/2+b;if(0<=d&&1>=d)return d}return 0}function da(a,b){if(48==a&&"number"===typeof b)return"#"+
    ("000000"+b.toString(16)).substr(-6);if(64==a)return b=b.map(function(a){return a+"px"}),b.join(",");if(96==a){a="";for(var c=b.length,d=0;d<c;d+=2)a+=b[d],a+=b[d+1].join(",");return a}if(80==a){if(0==b[0])return"none";a="";c=b.length;for(d=0;d<c;)a+=S[b[d]],1==b[d]?a+="("+b[d+1]+") ":5==b[d]?(a+="("+b[d+1]+"px "+b[d+2]+"px "+b[d+3]+"px rgba("+(b[d+4]>>>24)+","+(b[d+4]>>16&255)+","+(b[d+4]>>8&255)+","+(b[d+4]&255)/255+")) ",d+=3):a=2==b[d]?a+("("+b[d+1]+"px) "):7==b[d]?a+("("+b[d+1]+"deg) "):a+("("+
    (0>b[d+1]?0:b[d+1])+") "),d+=2;return a}return 32==a?b+"px":b}function w(a){return 0>=a?0:255<=a?255:a}function ea(a,b,c,d){if(16==a||32==a)return(c-b)*d+b;if(0==a)return.5>d?b:c;if(48==a){if("number"===typeof b&&"number"===typeof c){var e=1-d;return w(e*(b>>16)+d*(c>>16))<<16|w(e*(b>>8&255)+d*(c>>8&255))<<8|w(e*(b&255)+d*(c&255))}return.5>d?b:c}if(64==a){0==b.length&&(b=[0]);0==c.length&&(c=[0]);var n=b.length;b.length!=c.length&&(n=b.length*c.length);var k=[];for(a=0;a<n;++a){var f=b[a%b.length];
    var h=(c[a%c.length]-f)*d+f;0>h&&(h=0);k.push(h)}return k}if(96==a){if(b.length!=c.length)return.5>d?b:c;n=b.length;k=[];for(a=0;a<n;a+=2){if(b[a]!==c[a])return.5>d?b:c;k[a]=b[a];k[a+1]=[];for(f=0;f<b[a+1].length;++f)k[a+1].push((c[a+1][f]-b[a+1][f])*d+b[a+1][f])}return k}if(80==a){n=b.length;if(n!=c.length)return.5>d?b:c;k=[];for(a=0;a<n;){if(b[a]!=c[a]||1==b[a])return.5>d?b:c;k[a]=b[a];k[a+1]=(c[a+1]-b[a+1])*d+b[a+1];if(5==b[a]){k[a+2]=(c[a+2]-b[a+2])*d+b[a+2];k[a+3]=(c[a+3]-b[a+3])*d+b[a+3];e=
    1-d;var g=b[a+4],q=c[a+4];h=e*(g>>>24)+d*(q>>>24);var m=e*(g>>16&255)+d*(q>>16&255);f=e*(g>>8&255)+d*(q>>8&255);k[a+4]=(w(m)<<16|w(f)<<8|w(e*(g&255)+d*(q&255)))+16777216*(w(h)|0);a+=3}a+=2}return k}return 0}function T(a,b){a:{var c=a+b[2];var d=b[4].length;for(var e=0;e<d;++e)if(c<b[4][e]){c=e;break a}c=d-1}d=b[2];e=b[4][c-1]-d;a=(a-e)/(b[4][c]-d-e);if(b[6]&&b[6].length>c-1)if(d=b[6][c-1],1==d[0])if(0>=a)a=0;else if(1<=a)a=1;else{e=d[1];var n=d[3];a=ca(3*e-3*n+1,-6*e+3*n,3*e,-a);a=3*a*(1-a)*(1-a)*
    d[2]+3*a*a*(1-a)*d[4]+a*a*a}else 2==d[0]?(d=d[1],a=Math.ceil(a*d)/d):3==d[0]&&(d=d[1],a=Math.floor(a*d)/d);return ea(b[1]&240,b[5][c-1],b[5][c],a)}function K(){x||(u=(new Date).getTime()+U)}function N(a){if(a||!C){for(var b=!1,c=0;c<t.length;++c)t[c].I(a)&&(b=!0);if(a)for(;0<F.length;)if(a=F.shift(),c=a[0],1==a[1])c.onfinish&&(c.onfinish(),b=!0),c.H();else if(2==a[1]&&c.onloop)c.onloop();return b}}function V(){K();N(!0)&&!x?(C=!0,L(V)):C=!1}function M(){C||(C=!0,L(V))}function W(a,b){var c=[];a.split(b).forEach(function(a){c.push(parseFloat(a))});
    return c}function y(a){-1==a.indexOf(",")&&(a=a.replace(" ",","));return W(a,",")}function X(a){a._ks||(a._ks={});if(!a._ks.transform){for(var b=a._ks.transform=[],c=0;14>=c;++c)b[c]=0;b[10]=1;b[11]=1;if(a=a.getAttribute("transform")){a=a.trim().split(") ");for(c=a.length-2;0<=c;--c)if(v(a[c],"translate(")){for(var d=0;d<c;d++)a.shift();break}c=a.shift();v(c,"translate(")&&(c=y(c.substring(10)),b[1]=c[0],b[2]=A(c[1])?c[1]:0,c=a.shift());v(c,"rotate(")&&(c=y(c.substring(7)),b[6]=c[0],c=a.shift());
    v(c,"skewX(")&&(c=y(c.substring(6)),b[7]=c[0],c=a.shift());v(c,"skewY(")&&(c=y(c.substring(6)),b[8]=c[0],c=a.shift());v(c,"scale(")&&(c=y(c.substring(6)),b[10]=c[0],b[11]=A(c[1])?c[1]:0,c=a.shift());v(c,"translate(")&&(c=y(c.substring(10)),b[13]=c[0],b[14]=A(c[1])?c[1]:0)}}}function Y(a){this.D=a;this.B=[];this.w=[];this.s=0;this.o=this.a=this.c=null;this.h=this.f=this.g=0;this.b=1;this.i=this.C=this.m=!1}function I(a,b,c){b=a[b];void 0===b&&(b=a[c]);return b}function fa(a){return Array.isArray(a)?
    a:v(a,"cubic-bezier(")?(a=a.substring(13,a.length-1).split(","),[1,parseFloat(a[0]),parseFloat(a[1]),parseFloat(a[2]),parseFloat(a[3])]):v(a,"steps(")?(a=a.substring(6,a.length-1).split(","),[a[1]&&"start"==a[1].trim()?2:3,parseFloat(a[0])]):[0]}function ha(a){a=a.trim();return v(a,"#")?(parseInt(a.substring(1),16)<<8)+255:v(a,"rgba(")?(a=a.substring(5,a.length-1),a=a.split(","),(parseInt(a[0],10)<<24)+(parseInt(a[1],10)<<16)+(parseInt(a[2],10)<<8)+255*parseFloat(a[3])<<0):a}function Z(a){!1===a.i&&
    (t.push(a),a.i=!0,!1!==a.D.autoplay&&a.play());return this}function O(a){if(!0===a.i){a._cancel();var b=t.indexOf(a);-1<b&&t.splice(b,1);b=F.indexOf(a);-1<b&&F.splice(b,1);a.i=!1}return this}var P=Error("Not in timeline list"),aa="mpath posX posY    rotate skewX skewY  scaleX scaleY  anchorX anchorY".split(" "),ia=" translate translate    rotate skewX skewY  scale scale  translate translate".split(" "),S="none url blur brightness contrast drop-shadow grayscale hue-rotate invert opacity saturate sepia".split(" "),
    L=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||null;L||(L=function(a){window.setTimeout(a,16)});var R={d:97,fill:48,fillOpacity:16,filter:80,height:33,opacity:16,offsetDistance:33,stroke:48,strokeDasharray:64,strokeDashoffset:32,strokeOpacity:16,strokeWidth:32,transform:1,width:33},ba=window.getComputedStyle(document.documentElement),C=!1,u=(new Date).getTime(),x,U=0,t=[],F=[];Y.prototype=
    {v:function(a){var b=0;if(null!==this.c){var c=this.j();0<this.b&&null!==c&&c>=this.f?this.h?(this.c=u-this.g/this.b,this.h--,b=2):(b=1,a?this.a=c:this.a=this.o?Math.max(this.o,this.f):this.f):0>this.b&&null!==c&&c<=this.g?this.h&&Infinity!=this.f?(this.c=u-this.f/this.b,this.h--,b=2):(this.h=0,b=1,a?this.a=c:this.a=this.o?Math.min(this.o,this.g):this.g):null!==c&&0!=this.b&&(a&&null!==this.a&&(this.c=u-this.a/this.b),this.a=null)}this.o=this.j();return b},I:function(a){a&&(this.m&&(this.m=!1,null===
    this.c&&(0!=this.b&&null!==this.a?(this.c=u-this.a/this.b,this.a=null):this.c=u)),null===this.a&&null!==this.c&&(a=this.v(!1),0!=a&&F.push([this,a])));a=this.j();if(null===a)return!1;for(var b=this.B,c=this.w,d=0;d<b.length;++d){for(var e=b[d],n=!1,k=0;k<c[d].length;++k){var f=c[d][k],h=f[0];if(null!==h){var g=f[2];var q=f[4].length,m=f[4][q-1]-g;g=0==m?f[5][q-1]:a<=g?f[5][0]:a>=g+f[3]?0==f[3]%m?f[5][q-1]:T(f[3]%m,f):T((a-g)%m,f);0==h?(e._ks.mpath=f[8],e._ks.transform[h]=g,n=!0):14>=h?(e._ks.transform[h]=
    g,n=!0):(g=da(f[1]&240,g),f[1]&1?e.setAttribute(h,g):e.style[h]=g)}}if(n){X(e);n=e._ks.transform;k="";if(f=e._ks.mpath)g=n[0],0>g&&(g=0),100<g&&(g=100),g=g*f[2]/100,h=f[1].getPointAtLength(g),k="translate("+h.x+","+h.y+") ",f[0]&&(.5>g?(g=h,h=f[1].getPointAtLength(.5)):g=f[1].getPointAtLength(g-.5),k+="rotate("+180*Math.atan2(h.y-g.y,h.x-g.x)/Math.PI+") ");for(f=1;f<n.length;++f)h=n[f],h!=(10==f||11==f?1:0)&&(k+=" "+ia[f]+"(",k=2>=f?k+(1==f?h+",0":"0,"+h):13<=f?k+(13==f?h+",0":"0,"+h):10<=f?k+(10==
    f?h+",1":"1,"+h):k+h,k+=")");e.setAttribute("transform",k)}}return"running"==this.l()},H:function(){!1!==this.D.autoremove&&"finished"==this.l()&&O(this)},A:function(){if(!this.C){this.C=!0;for(var a=this.B,b=this.w,c=0;c<a.length;++c)for(var d=a[c],e=0;e<b[c].length;++e)14>=b[c][e][0]&&X(d)}},play:function(a){A(a)&&null!==a&&(H(a),0>this.b&&a<this.g&&(a=this.g),0<this.b&&a>this.f&&(a=this.f),this.u(a,!0));if(!this.i)throw P;a=this.j();if(0<this.b&&(null===a||a>=this.f))this.a=this.g;else if(0>this.b&&
    (null===a||a<=this.g)){if(Infinity==this.f)throw Error("Cannot seek to Infinity");this.a=this.f}else 0==this.b&&null===a&&(this.a=this.g);if(null===this.a)return this;this.c=null;this.m=!0;this.A();M();return this},pause:function(a){if(!this.i)throw P;A(a)&&H(a);if("paused"!=this.l()){K();var b=this.j();if(null===b)if(0<=this.b)this.a=this.g;else{if(Infinity==this.f)throw Error("Cannot seek to Infinity");this.a=this.f}null!==this.c&&null===this.a&&(this.a=b);this.c=null;this.m=!1;this.v(!1);this.A();
    M()}A(a)&&this.u(a,!0);return this},range:function(a,b){if(0==arguments.length)return{"in":this.g,out:this.f};var c=+a,d=this.s;A(b)&&(d=+b);H(c);if(0>c||0>d||c>=d||isNaN(d))throw Error("Invalid range");var e=this.l();this.g=c;this.f=d;"finished"==e&&"running"==this.l()&&this.play();return this},loop:function(a){if(!A(a))return{count:this.h};this.h=!0===a?Infinity:Math.floor(a);if(0>this.h||isNaN(this.h))this.h=0;return this},j:function(){return null!==this.a?this.a:null===this.c?null:(u-this.c)*
    this.b},u:function(a,b){b&&K();null!==a&&(this.A(),null!==this.a||null===this.c||0==this.b?(this.a=a,N(!1)):this.c=u-a/this.b,this.i||(this.c=null),this.o=null,this.v(!0),M())},F:function(){return this.j()},time:function(a){if(A(a)){if(!this.i)throw P;H(a);this.u(a,!0);return this}return this.F()},l:function(){var a=this.j();return this.m?"running":null===a?"idle":null===this.c?"paused":0<this.b&&a>=this.f||0>this.b&&a<=this.g?"finished":"running"},state:function(){return this.l()},duration:function(){return this.s},
    G:function(a){H(a);K();var b=this.j();this.b=a;null!==b&&this.u(b,!1)},rate:function(a){return A(a)?(this.G(a),this):this.b},_cancel:function(){if(!this.i||"idle"==this.l())return this;this.c=this.a=null;this.m=!1;return this}};return{version:"1.0.0",animate:function(){var a={};if(1==arguments.length%2){a=arguments[arguments.length-1];var b={};for(c in a)b[c]=a[c];a=b}var c=new Y(a);a=arguments;for(var d=b=0;d<a.length-1;d+=2){var e=a[d];var n=e instanceof Element?e:document.getElementById(e.substring(1));
    if(!n)throw Error("Invalid target: "+e);e=n;n=a[d+1];e._ks||(e._ks={});for(var k=[],f=0;f<n.length;++f){var h=n[f],g=I(h,"p","property");if("string"!=typeof g||-1!=g.indexOf("-")||""===g||!(0<R[g]||0<=aa.indexOf(g)))throw Error("Invalid property: "+g);var q=aa.indexOf(g);""!==g&&0<=q&&(g=q);q=Q(g);var m=I(h,"t","times");if(!m||2>m.length)throw Error("Not enough times");m=m.slice();if(!isFinite(m[0])||0>m[0])throw Error("Invalid time: "+m[0]);for(var B=1;B<m.length;++B)if(!isFinite(m[B])||0>m[B]||
    m[B]<m[B-1])throw Error("Invalid time: "+m[B]);B=m[0];var u=m[m.length-1]-B,x=h.iterations||0;1>x&&(x=1);u*=x;b<u+B&&(b=u+B);var t=I(h,"v","values");if(!t||t.length!=m.length)throw Error("Values do not match times");t=t.slice();for(var D=g,l=t,w=Q(D)&240,p=0;p<l.length;++p)if(96==w){for(var y=l[p].substring(6,l[p].length-2).match(/[A-DF-Za-df-z][-+0-9eE., ]*/ig),C=[],r=0;r<y.length;++r){C.push(y[r][0]);for(var z=1<y[r].trim().length?y[r].substring(1).split(","):[],G=0;G<z.length;++G)z[G]=parseFloat(z[G]);
    C.push(z)}l[p]=C}else if(48==w)v(l[p],"#")?l[p]=parseInt(l[p].substring(1),16):v(l[p],"url(")||"none"==l[p]||(console.warn("unsupported color: "+l[p]),l[p]=0);else if(80==w){y=l;C=p;r=l[p];if("none"==r)r=[0];else{z=[];for(var E=r.indexOf("(");0<E;)if(G=S.indexOf(r.substring(0,E)),0<=G){z.push(G);var F=r.indexOf(") ");0>F&&(F=r.length-1);E=r.substring(E+1,F).split(" ");5==G?(z.push(parseFloat(E[0])),z.push(parseFloat(E[1])),z.push(parseFloat(E[2])),z.push(ha(E[3]))):1==G?z.push(E[0]):z.push(parseFloat(E[0]));
    r=r.substring(F+1).trim();E=r.indexOf("(")}else break;r=z}y[C]=r}else 64==w?"none"!=l[p]?/^[0-9 .]*$/.test(l[p])?l[p]=W(l[p]," "):(console.warn("unsupported value: "+l[p]),l[p]=[0]):l[p]=[0]:32==w?(H(l[p]),l[p]=parseFloat(l[p])):0===D&&(l[p]=parseFloat(l[p]));D=I(h,"e","easing");l=m.length;for(D||(D=[]);D.length<l;)D.push([1,0,0,.58,1]);for(l=0;l<D.length;++l)D[l]=fa(D[l]);q=[g,q,B,u,m,t,D,x];m=I(h,"mp","motionPath");A(m)&&0===g&&(q[8]=[],q[8][0]=h.motionRotate,h=document.createElementNS("http://www.w3.org/2000/svg",
    "path"),m||(m="M0,0"),h.setAttribute("d",m),q[8][1]=h,q[8][2]=h.getTotalLength());k.push(q)}0<k.length&&(c.B.push(e),c.w.push(k))}c.s=b;c.g=0;c.f=c.s;Z(c);return c},add:Z,remove:O,removeAll:function(){for(var a=t.length-1;0<=a;--a)O(t[a]);return this},timelines:function(){return t.slice()},globalPlay:function(){x&&(U=x-(new Date).getTime(),x=void 0,M());return this},globalPause:function(){x||(x=u,N(!1));return this},globalState:function(){return x?"paused":"running"}}}();
    