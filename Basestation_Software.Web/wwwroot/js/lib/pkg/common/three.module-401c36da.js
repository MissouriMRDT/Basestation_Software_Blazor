/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _r="173",mp={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},gp={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pc=0,No=1,Lc=2,vp=3,_p=0,Oo=1,Uc=2,di=3,Si=0,Lt=1,pi=2,bi=0,is=1,Fo=2,Bo=3,zo=4,Dc=5,Bi=100,Nc=101,Oc=102,Fc=103,Bc=104,zc=200,kc=201,Vc=202,Hc=203,xr=204,yr=205,Gc=206,Wc=207,Xc=208,jc=209,qc=210,Yc=211,Zc=212,Jc=213,Kc=214,Mr=0,Sr=1,br=2,ss=3,Tr=4,wr=5,Er=6,Ar=7,xn=0,$c=1,Qc=2,Ti=0,eh=1,th=2,ih=3,sh=4,nh=5,rh=6,ah=7,ko="attached",oh="detached",Rr=300,wi=301,zi=302,yn=303,Mn=304,Os=306,Sn=1e3,Qt=1001,bn=1002,bt=1003,Vo=1004,xp=1004,Fs=1005,yp=1005,_t=1006,Tn=1007,Mp=1007,fi=1008,Sp=1008,mi=1009,Ho=1010,Go=1011,Bs=1012,Cr=1013,Ei=1014,zt=1015,zs=1016,Ir=1017,Pr=1018,ns=1020,Wo=35902,Xo=1021,jo=1022,Ut=1023,qo=1024,Yo=1025,rs=1026,as=1027,Lr=1028,wn=1029,Zo=1030,Ur=1031,bp=1032,Dr=1033,En=33776,An=33777,Rn=33778,Cn=33779,Nr=35840,Or=35841,Fr=35842,Br=35843,zr=36196,kr=37492,Vr=37496,Hr=37808,Gr=37809,Wr=37810,Xr=37811,jr=37812,qr=37813,Yr=37814,Zr=37815,Jr=37816,Kr=37817,$r=37818,Qr=37819,ea=37820,ta=37821,In=36492,ia=36494,sa=36495,Jo=36283,na=36284,ra=36285,aa=36286,lh=2200,ch=2201,hh=2202,Pn=2300,oa=2301,la=2302,os=2400,ls=2401,Ln=2402,ca=2500,Ko=2501,Tp=0,wp=1,Ep=2,uh=3200,dh=3201,Ap=3202,Rp=3203,ki=0,ph=1,Ai="",kt="srgb",cs="srgb-linear",Un="linear",st="srgb",Cp=0,hs=7680,Ip=7681,Pp=7682,Lp=7683,Up=34055,Dp=34056,Np=5386,Op=512,Fp=513,Bp=514,zp=515,kp=516,Vp=517,Hp=518,$o=519,fh=512,mh=513,gh=514,Qo=515,vh=516,_h=517,xh=518,yh=519,Dn=35044,Gp=35048,Wp=35040,Xp=35045,jp=35049,qp=35041,Yp=35046,Zp=35050,Jp=35042,Kp="100",el="300 es",ni=2e3,Nn=2001,$p={COMPUTE:"compute",RENDER:"render"};class gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const n=s.indexOf(t);n!==-1&&s.splice(n,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let n=0,a=s.length;n<a;n++)s[n].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mh=1234567;const us=Math.PI/180,ks=180/Math.PI;function qt(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Et[r&255]+Et[r>>8&255]+Et[r>>16&255]+Et[r>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toLowerCase()}function ze(r,e,t){return Math.max(e,Math.min(t,r))}function tl(r,e){return(r%e+e)%e}function Qp(r,e,t,i,s){return i+(r-e)*(s-i)/(t-e)}function ef(r,e,t){return r!==e?(t-r)/(e-r):0}function On(r,e,t){return(1-t)*r+t*e}function tf(r,e,t,i){return On(r,e,1-Math.exp(-t*i))}function sf(r,e=1){return e-Math.abs(tl(r,e*2)-e)}function nf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function rf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function af(r,e){return r+Math.floor(Math.random()*(e-r+1))}function of(r,e){return r+Math.random()*(e-r)}function lf(r){return r*(.5-Math.random())}function cf(r){r!==void 0&&(Mh=r);let e=Mh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hf(r){return r*us}function uf(r){return r*ks}function df(r){return(r&r-1)==0&&r!==0}function pf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ff(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function mf(r,e,t,i,s){const n=Math.cos,a=Math.sin,o=n(t/2),l=a(t/2),c=n((e+i)/2),h=a((e+i)/2),d=n((e-i)/2),u=a((e-i)/2),p=n((i-e)/2),m=a((i-e)/2);switch(s){case"XYX":r.set(o*h,l*d,l*u,o*c);break;case"YZY":r.set(l*u,o*h,l*d,o*c);break;case"ZXZ":r.set(l*d,l*u,o*h,o*c);break;case"XZX":r.set(o*h,l*m,l*p,o*c);break;case"YXY":r.set(l*p,o*h,l*m,o*c);break;case"ZYZ":r.set(l*m,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Dt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ve(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const gf={DEG2RAD:us,RAD2DEG:ks,generateUUID:qt,clamp:ze,euclideanModulo:tl,mapLinear:Qp,inverseLerp:ef,lerp:On,damp:tf,pingpong:sf,smoothstep:nf,smootherstep:rf,randInt:af,randFloat:of,randFloatSpread:lf,seededRandom:cf,degToRad:hf,radToDeg:uf,isPowerOfTwo:df,ceilPowerOfTwo:pf,floorPowerOfTwo:ff,setQuaternionFromProperEuler:mf,normalize:Ve,denormalize:Dt};class Z{constructor(e=0,t=0){Z.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),n=this.x-e.x,a=this.y-e.y;return this.x=n*i-a*s+e.x,this.y=n*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,i,s,n,a,o,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,n,a,o,l,c)}set(e,t,i,s,n,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=n,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,n=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],m=i[8],v=s[0],g=s[3],f=s[6],y=s[1],x=s[4],_=s[7],C=s[2],w=s[5],R=s[8];return n[0]=a*v+o*y+l*C,n[3]=a*g+o*x+l*w,n[6]=a*f+o*_+l*R,n[1]=c*v+h*y+d*C,n[4]=c*g+h*x+d*w,n[7]=c*f+h*_+d*R,n[2]=u*v+p*y+m*C,n[5]=u*g+p*x+m*w,n[8]=u*f+p*_+m*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],n=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*n*h+i*o*l+s*n*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],n=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*n,p=c*n-a*l,m=t*d+i*u+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=d*v,e[1]=(s*c-h*i)*v,e[2]=(o*i-s*a)*v,e[3]=u*v,e[4]=(h*t-s*l)*v,e[5]=(s*n-o*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*n)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,n,a,o){const l=Math.cos(n),c=Math.sin(n);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(il.makeScale(e,t)),this}rotate(e){return this.premultiply(il.makeRotation(-e)),this}translate(e,t){return this.premultiply(il.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const il=new ke;function Sh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}const vf={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Vs(r,e){return new vf[r](e)}function Fn(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function bh(){const r=Fn("canvas");return r.style.display="block",r}const Th={};function Hs(r){r in Th||(Th[r]=!0,console.warn(r))}function _f(r,e,t){return new Promise(function(i,s){function n(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(n,t);break;default:i()}}setTimeout(n,t)})}function xf(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function yf(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const wh=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eh=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mf(){const r={enabled:!0,workingColorSpace:cs,spaces:{},convert:function(s,n,a){return this.enabled===!1||n===a||!n||!a||(this.spaces[n].transfer===st&&(s.r=Ri(s.r),s.g=Ri(s.g),s.b=Ri(s.b)),this.spaces[n].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[n].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(s.r=Gs(s.r),s.g=Gs(s.g),s.b=Gs(s.b))),s},fromWorkingColorSpace:function(s,n){return this.convert(s,this.workingColorSpace,n)},toWorkingColorSpace:function(s,n){return this.convert(s,n,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ai?Un:this.spaces[s].transfer},getLuminanceCoefficients:function(s,n=this.workingColorSpace){return s.fromArray(this.spaces[n].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,n,a){return s.copy(this.spaces[n].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[cs]:{primaries:e,whitePoint:i,transfer:Un,toXYZ:wh,fromXYZ:Eh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:i,transfer:st,toXYZ:wh,fromXYZ:Eh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),r}const Je=Mf();function Ri(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Gs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ws;class Ah{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ws===void 0&&(Ws=Fn("canvas")),Ws.width=e.width,Ws.height=e.height;const i=Ws.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ws}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Fn("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),n=s.data;for(let a=0;a<n.length;a++)n[a]=Ri(n[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ri(t[i]/255)*255):t[i]=Ri(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sf=0;class ds{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=qt(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let n;if(Array.isArray(s)){n=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?n.push(sl(s[a].image)):n.push(sl(s[a]))}else n=sl(s);i.url=n}return t||(e.images[this.uuid]=i),i}}function sl(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Ah.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bf=0;class dt extends gi{constructor(e=dt.DEFAULT_IMAGE,t=dt.DEFAULT_MAPPING,i=Qt,s=Qt,n=_t,a=fi,o=Ut,l=mi,c=dt.DEFAULT_ANISOTROPY,h=Ai){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=qt(),this.name="",this.source=new ds(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=n,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rr)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sn:e.x=e.x-Math.floor(e.x);break;case Qt:e.x=e.x<0?0:1;break;case bn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sn:e.y=e.y-Math.floor(e.y);break;case Qt:e.y=e.y<0?0:1;break;case bn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dt.DEFAULT_IMAGE=null,dt.DEFAULT_MAPPING=Rr,dt.DEFAULT_ANISOTROPY=1;class Ke{constructor(e=0,t=0,i=0,s=1){Ke.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,n=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*n,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*n,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*n,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*n,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,n;const a=.01,o=.1,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],m=l[9],v=l[2],g=l[6],f=l[10];if(Math.abs(h-u)<a&&Math.abs(d-v)<a&&Math.abs(m-g)<a){if(Math.abs(h+u)<o&&Math.abs(d+v)<o&&Math.abs(m+g)<o&&Math.abs(c+p+f-3)<o)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,_=(p+1)/2,C=(f+1)/2,w=(h+u)/4,R=(d+v)/4,I=(m+g)/4;return x>_&&x>C?x<a?(i=0,s=.707106781,n=.707106781):(i=Math.sqrt(x),s=w/i,n=R/i):_>C?_<a?(i=.707106781,s=0,n=.707106781):(s=Math.sqrt(_),i=w/s,n=I/s):C<a?(i=.707106781,s=.707106781,n=0):(n=Math.sqrt(C),i=R/n,s=I/n),this.set(i,s,n,t),this}let y=Math.sqrt((g-m)*(g-m)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(d-v)/y,this.z=(u-h)/y,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this.w=ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this.w=ze(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ha extends gi{constructor(e=1,t=1,i={}){super();this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const n=new dt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);n.flipY=!1,n.generateMipmaps=i.generateMipmaps,n.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=n.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,n=this.textures.length;s<n;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new ds(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends ha{constructor(e=1,t=1,i={}){super(e,t,i);this.isWebGLRenderTarget=!0}}class Bn extends dt{constructor(e=null,t=1,i=1,s=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tf extends vi{constructor(e=1,t=1,i=1,s={}){super(e,t,s);this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new Bn(null,e,t,i),this.texture.isRenderTargetTexture=!0}}class ua extends dt{constructor(e=null,t=1,i=1,s=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wf extends vi{constructor(e=1,t=1,i=1,s={}){super(e,t,s);this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new ua(null,e,t,i),this.texture.isRenderTargetTexture=!0}}class Vt{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,n,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3];const u=n[a+0],p=n[a+1],m=n[a+2],v=n[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=m,e[t+3]=v;return}if(d!==v||l!==u||c!==p||h!==m){let g=1-o;const f=l*u+c*p+h*m+d*v,y=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const C=Math.sqrt(x),w=Math.atan2(C,f*y);g=Math.sin(g*w)/C,o=Math.sin(o*w)/C}const _=o*y;if(l=l*g+u*_,c=c*g+p*_,h=h*g+m*_,d=d*g+v*_,g===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,n,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=n[a],u=n[a+1],p=n[a+2],m=n[a+3];return e[t]=o*m+h*d+l*p-c*u,e[t+1]=l*m+h*u+c*d-o*p,e[t+2]=c*m+h*p+o*u-l*d,e[t+3]=h*m-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,n=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(n/2),u=l(i/2),p=l(s/2),m=l(n/2);switch(a){case"XYZ":this._x=u*h*d+c*p*m,this._y=c*p*d-u*h*m,this._z=c*h*m+u*p*d,this._w=c*h*d-u*p*m;break;case"YXZ":this._x=u*h*d+c*p*m,this._y=c*p*d-u*h*m,this._z=c*h*m-u*p*d,this._w=c*h*d+u*p*m;break;case"ZXY":this._x=u*h*d-c*p*m,this._y=c*p*d+u*h*m,this._z=c*h*m+u*p*d,this._w=c*h*d-u*p*m;break;case"ZYX":this._x=u*h*d-c*p*m,this._y=c*p*d+u*h*m,this._z=c*h*m-u*p*d,this._w=c*h*d+u*p*m;break;case"YZX":this._x=u*h*d+c*p*m,this._y=c*p*d+u*h*m,this._z=c*h*m-u*p*d,this._w=c*h*d-u*p*m;break;case"XZY":this._x=u*h*d-c*p*m,this._y=c*p*d-u*h*m,this._z=c*h*m+u*p*d,this._w=c*h*d+u*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],n=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(n-c)*p,this._z=(a-s)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(n+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(n-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-s)/p,this._x=(n+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,n=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-n*l,this._y=s*h+a*l+n*o-i*c,this._z=n*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-n*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,n=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+n*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=n,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*n+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=n*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),n=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),n*Math.sin(t),n*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(e=0,t=0,i=0){E.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*s,this.y=n[1]*t+n[4]*i+n[7]*s,this.z=n[2]*t+n[5]*i+n[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,n=e.elements,a=1/(n[3]*t+n[7]*i+n[11]*s+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*s+n[12])*a,this.y=(n[1]*t+n[5]*i+n[9]*s+n[13])*a,this.z=(n[2]*t+n[6]*i+n[10]*s+n[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,n=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-n*s),d=2*(n*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-n*d,this.z=s+l*d+n*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*s,this.y=n[1]*t+n[5]*i+n[9]*s,this.z=n[2]*t+n[6]*i+n[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,n=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-n*o,this.y=n*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nl.copy(this).projectOnVector(e),this.sub(nl)}reflect(e){return this.sub(nl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nl=new E,Rh=new Vt;class Nt{constructor(e=new E(Infinity,Infinity,Infinity),t=new E(-Infinity,-Infinity,-Infinity)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=Infinity,this.max.x=this.max.y=this.max.z=-Infinity,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const n=i.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=n.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ri):ri.fromBufferAttribute(n,a),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),da.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),da.copy(i.boundingBox)),da.applyMatrix4(e.matrixWorld),this.union(da)}const s=e.children;for(let n=0,a=s.length;n<a;n++)this.expandByObject(s[n],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zn),pa.subVectors(this.max,zn),Xs.subVectors(e.a,zn),js.subVectors(e.b,zn),qs.subVectors(e.c,zn),Vi.subVectors(js,Xs),Hi.subVectors(qs,js),ps.subVectors(Xs,qs);let t=[0,-Vi.z,Vi.y,0,-Hi.z,Hi.y,0,-ps.z,ps.y,Vi.z,0,-Vi.x,Hi.z,0,-Hi.x,ps.z,0,-ps.x,-Vi.y,Vi.x,0,-Hi.y,Hi.x,0,-ps.y,ps.x,0];return!rl(t,Xs,js,qs,pa)||(t=[1,0,0,0,1,0,0,0,1],!rl(t,Xs,js,qs,pa))?!1:(fa.crossVectors(Vi,Hi),t=[fa.x,fa.y,fa.z],rl(t,Xs,js,qs,pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ci=[new E,new E,new E,new E,new E,new E,new E,new E],ri=new E,da=new Nt,Xs=new E,js=new E,qs=new E,Vi=new E,Hi=new E,ps=new E,zn=new E,pa=new E,fa=new E,fs=new E;function rl(r,e,t,i,s){for(let n=0,a=r.length-3;n<=a;n+=3){fs.fromArray(r,n);const o=s.x*Math.abs(fs.x)+s.y*Math.abs(fs.y)+s.z*Math.abs(fs.z),l=e.dot(fs),c=t.dot(fs),h=i.dot(fs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ef=new Nt,kn=new E,al=new E;class At{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ef.setFromPoints(e).getCenter(i);let s=0;for(let n=0,a=e.length;n<a;n++)s=Math.max(s,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kn.subVectors(e,this.center);const t=kn.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(kn,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(al.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kn.copy(e.center).add(al)),this.expandByPoint(kn.copy(e.center).sub(al))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new E,ol=new E,ma=new E,Gi=new E,ll=new E,ga=new E,cl=new E;class Ys{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ol.copy(e).add(t).multiplyScalar(.5),ma.copy(t).sub(e).normalize(),Gi.copy(this.origin).sub(ol);const n=e.distanceTo(t)*.5,a=-this.direction.dot(ma),o=Gi.dot(this.direction),l=-Gi.dot(ma),c=Gi.lengthSq(),h=Math.abs(1-a*a);let d,u,p,m;if(h>0)if(d=a*l-o,u=a*o-l,m=n*h,d>=0)if(u>=-m)if(u<=m){const v=1/h;d*=v,u*=v,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=n,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-n,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-a*n+o)),u=d>0?-n:Math.min(Math.max(-n,-l),n),p=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-n,-l),n),p=u*(u+2*l)+c):(d=Math.max(0,-(a*n+o)),u=d>0?n:Math.min(Math.max(-n,-l),n),p=-d*d+u*(u+2*l)+c);else u=a>0?-n:n,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ol).addScaledVector(ma,u),p}intersectSphere(e,t){Ii.subVectors(e.center,this.origin);const i=Ii.dot(this.direction),s=Ii.dot(Ii)-i*i,n=e.radius*e.radius;if(s>n)return null;const a=Math.sqrt(n-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,n,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(n=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(n=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||n>s||((n>i||isNaN(i))&&(i=n),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,i,s,n){ll.subVectors(t,e),ga.subVectors(i,e),cl.crossVectors(ll,ga);let a=this.direction.dot(cl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gi.subVectors(this.origin,e);const l=o*this.direction.dot(ga.crossVectors(Gi,ga));if(l<0)return null;const c=o*this.direction.dot(ll.cross(Gi));if(c<0||l+c>a)return null;const h=-o*Gi.dot(cl);return h<0?null:this.at(h/a,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le{constructor(e,t,i,s,n,a,o,l,c,h,d,u,p,m,v,g){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,n,a,o,l,c,h,d,u,p,m,v,g)}set(e,t,i,s,n,a,o,l,c,h,d,u,p,m,v,g){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=n,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=m,f[11]=v,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Zs.setFromMatrixColumn(e,0).length(),n=1/Zs.setFromMatrixColumn(e,1).length(),a=1/Zs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,n=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(n),d=Math.sin(n);if(e.order==="XYZ"){const u=a*h,p=a*d,m=o*h,v=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+m*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=m+p*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,p=l*d,m=c*h,v=c*d;t[0]=u+v*o,t[4]=m*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-m,t[6]=v+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,p=l*d,m=c*h,v=c*d;t[0]=u-v*o,t[4]=-a*d,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*h,t[9]=v-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,p=a*d,m=o*h,v=o*d;t[0]=l*h,t[4]=m*c-p,t[8]=u*c+v,t[1]=l*d,t[5]=v*c+u,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=v-u*d,t[8]=m*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+m,t[10]=u-v*d}else if(e.order==="XZY"){const u=a*l,p=a*c,m=o*l,v=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+v,t[5]=a*h,t[9]=p*d-m,t[2]=m*d-p,t[6]=o*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Af,e,Rf)}lookAt(e,t,i){const s=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Wi.crossVectors(i,Yt),Wi.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Wi.crossVectors(i,Yt)),Wi.normalize(),va.crossVectors(Yt,Wi),s[0]=Wi.x,s[4]=va.x,s[8]=Yt.x,s[1]=Wi.y,s[5]=va.y,s[9]=Yt.y,s[2]=Wi.z,s[6]=va.z,s[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,n=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],m=i[2],v=i[6],g=i[10],f=i[14],y=i[3],x=i[7],_=i[11],C=i[15],w=s[0],R=s[4],I=s[8],T=s[12],M=s[1],L=s[5],F=s[9],B=s[13],V=s[2],Y=s[6],W=s[10],te=s[14],G=s[3],ne=s[7],ge=s[11],Ue=s[15];return n[0]=a*w+o*M+l*V+c*G,n[4]=a*R+o*L+l*Y+c*ne,n[8]=a*I+o*F+l*W+c*ge,n[12]=a*T+o*B+l*te+c*Ue,n[1]=h*w+d*M+u*V+p*G,n[5]=h*R+d*L+u*Y+p*ne,n[9]=h*I+d*F+u*W+p*ge,n[13]=h*T+d*B+u*te+p*Ue,n[2]=m*w+v*M+g*V+f*G,n[6]=m*R+v*L+g*Y+f*ne,n[10]=m*I+v*F+g*W+f*ge,n[14]=m*T+v*B+g*te+f*Ue,n[3]=y*w+x*M+_*V+C*G,n[7]=y*R+x*L+_*Y+C*ne,n[11]=y*I+x*F+_*W+C*ge,n[15]=y*T+x*B+_*te+C*Ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],n=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],m=e[3],v=e[7],g=e[11],f=e[15];return m*(+n*l*d-s*c*d-n*o*u+i*c*u+s*o*p-i*l*p)+v*(+t*l*p-t*c*u+n*a*u-s*a*p+s*c*h-n*l*h)+g*(+t*c*d-t*o*p-n*a*d+i*a*p+n*o*h-i*c*h)+f*(-s*o*h-t*l*d+t*o*u+s*a*d-i*a*u+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],n=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],m=e[12],v=e[13],g=e[14],f=e[15],y=d*g*c-v*u*c+v*l*p-o*g*p-d*l*f+o*u*f,x=m*u*c-h*g*c-m*l*p+a*g*p+h*l*f-a*u*f,_=h*v*c-m*d*c+m*o*p-a*v*p-h*o*f+a*d*f,C=m*d*l-h*v*l-m*o*u+a*v*u+h*o*g-a*d*g,w=t*y+i*x+s*_+n*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=y*R,e[1]=(v*u*n-d*g*n-v*s*p+i*g*p+d*s*f-i*u*f)*R,e[2]=(o*g*n-v*l*n+v*s*c-i*g*c-o*s*f+i*l*f)*R,e[3]=(d*l*n-o*u*n-d*s*c+i*u*c+o*s*p-i*l*p)*R,e[4]=x*R,e[5]=(h*g*n-m*u*n+m*s*p-t*g*p-h*s*f+t*u*f)*R,e[6]=(m*l*n-a*g*n-m*s*c+t*g*c+a*s*f-t*l*f)*R,e[7]=(a*u*n-h*l*n+h*s*c-t*u*c-a*s*p+t*l*p)*R,e[8]=_*R,e[9]=(m*d*n-h*v*n-m*i*p+t*v*p+h*i*f-t*d*f)*R,e[10]=(a*v*n-m*o*n+m*i*c-t*v*c-a*i*f+t*o*f)*R,e[11]=(h*o*n-a*d*n-h*i*c+t*d*c+a*i*p-t*o*p)*R,e[12]=C*R,e[13]=(h*v*s-m*d*s+m*i*u-t*v*u-h*i*g+t*d*g)*R,e[14]=(m*o*s-a*v*s-m*i*l+t*v*l+a*i*g-t*o*g)*R,e[15]=(a*d*s-h*o*s+h*i*l-t*d*l-a*i*u+t*o*u)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,n=e.z;return t[0]*=i,t[4]*=s,t[8]*=n,t[1]*=i,t[5]*=s,t[9]*=n,t[2]*=i,t[6]*=s,t[10]*=n,t[3]*=i,t[7]*=s,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),n=1-i,a=e.x,o=e.y,l=e.z,c=n*a,h=n*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,n*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,n,a){return this.set(1,i,n,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,n=t._x,a=t._y,o=t._z,l=t._w,c=n+n,h=a+a,d=o+o,u=n*c,p=n*h,m=n*d,v=a*h,g=a*d,f=o*d,y=l*c,x=l*h,_=l*d,C=i.x,w=i.y,R=i.z;return s[0]=(1-(v+f))*C,s[1]=(p+_)*C,s[2]=(m-x)*C,s[3]=0,s[4]=(p-_)*w,s[5]=(1-(u+f))*w,s[6]=(g+y)*w,s[7]=0,s[8]=(m+x)*R,s[9]=(g-y)*R,s[10]=(1-(u+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let n=Zs.set(s[0],s[1],s[2]).length();const a=Zs.set(s[4],s[5],s[6]).length(),o=Zs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(n=-n),e.x=s[12],e.y=s[13],e.z=s[14],ai.copy(this);const l=1/n,c=1/a,h=1/o;return ai.elements[0]*=l,ai.elements[1]*=l,ai.elements[2]*=l,ai.elements[4]*=c,ai.elements[5]*=c,ai.elements[6]*=c,ai.elements[8]*=h,ai.elements[9]*=h,ai.elements[10]*=h,t.setFromRotationMatrix(ai),i.x=n,i.y=a,i.z=o,this}makePerspective(e,t,i,s,n,a,o=ni){const l=this.elements,c=2*n/(t-e),h=2*n/(i-s),d=(t+e)/(t-e),u=(i+s)/(i-s);let p,m;if(o===ni)p=-(a+n)/(a-n),m=-2*a*n/(a-n);else if(o===Nn)p=-a/(a-n),m=-a*n/(a-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,n,a,o=ni){const l=this.elements,c=1/(t-e),h=1/(i-s),d=1/(a-n),u=(t+e)*c,p=(i+s)*h;let m,v;if(o===ni)m=(a+n)*d,v=-2*d;else if(o===Nn)m=n*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Zs=new E,ai=new Le,Af=new E(0,0,0),Rf=new E(1,1,1),Wi=new E,va=new E,Yt=new E,Ch=new Le,Ih=new Vt;class Zt{constructor(e=0,t=0,i=0,s=Zt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,n=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,n)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,n),this._z=0);break;case"ZXY":this._x=Math.asin(ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,n)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ch.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ch,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ih.setFromEuler(this),this.setFromQuaternion(Ih,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zt.DEFAULT_ORDER="XYZ";class _a{constructor(){this.mask=1|0}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}}let Cf=0;const Ph=new E,Js=new Vt,Pi=new Le,xa=new E,Vn=new E,If=new E,Pf=new Vt,Lh=new E(1,0,0),Uh=new E(0,1,0),Dh=new E(0,0,1),Nh={type:"added"},Lf={type:"removed"},Ks={type:"childadded",child:null},hl={type:"childremoved",child:null};class $e extends gi{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=qt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$e.DEFAULT_UP.clone();const e=new E,t=new Zt,i=new Vt,s=new E(1,1,1);function n(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Le},normalMatrix:{value:new ke}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=$e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _a,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(Lh,e)}rotateY(e){return this.rotateOnAxis(Uh,e)}rotateZ(e){return this.rotateOnAxis(Dh,e)}translateOnAxis(e,t){return Ph.copy(e).applyQuaternion(this.quaternion),this.position.add(Ph.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lh,e)}translateY(e){return this.translateOnAxis(Uh,e)}translateZ(e){return this.translateOnAxis(Dh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xa.copy(e):xa.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Vn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Vn,xa,this.up):Pi.lookAt(xa,Vn,this.up),this.quaternion.setFromRotationMatrix(Pi),s&&(Pi.extractRotation(s.matrixWorld),Js.setFromRotationMatrix(Pi),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nh),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lf),hl.child=e,this.dispatchEvent(hl),hl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nh),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const n=this.children[i].getObjectByProperty(e,t);if(n!==void 0)return n}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let n=0,a=s.length;n<a;n++)s[n].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vn,e,If),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vn,Pf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let n=0,a=s.length;n<a;n++)s[n].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=n(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];n(e.shapes,d)}else n(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(n(e.materials,this.material[l]));s.material=o}else s.material=n(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(n(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}$e.DEFAULT_UP=new E(0,1,0),$e.DEFAULT_MATRIX_AUTO_UPDATE=!0,$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new E,Li=new E,ul=new E,Ui=new E,$s=new E,Qs=new E,Oh=new E,dl=new E,pl=new E,fl=new E,ml=new Ke,gl=new Ke,vl=new Ke;class Ht{constructor(e=new E,t=new E,i=new E){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),oi.subVectors(e,t),s.cross(oi);const n=s.lengthSq();return n>0?s.multiplyScalar(1/Math.sqrt(n)):s.set(0,0,0)}static getBarycoord(e,t,i,s,n){oi.subVectors(s,t),Li.subVectors(i,t),ul.subVectors(e,t);const a=oi.dot(oi),o=oi.dot(Li),l=oi.dot(ul),c=Li.dot(Li),h=Li.dot(ul),d=a*c-o*o;if(d===0)return n.set(0,0,0),null;const u=1/d,p=(c*l-o*h)*u,m=(a*h-o*l)*u;return n.set(1-p-m,m,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,t,i,s,n,a,o,l){return this.getBarycoord(e,t,i,s,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,Ui.x),l.addScaledVector(a,Ui.y),l.addScaledVector(o,Ui.z),l)}static getInterpolatedAttribute(e,t,i,s,n,a){return ml.setScalar(0),gl.setScalar(0),vl.setScalar(0),ml.fromBufferAttribute(e,t),gl.fromBufferAttribute(e,i),vl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ml,n.x),a.addScaledVector(gl,n.y),a.addScaledVector(vl,n.z),a}static isFrontFacing(e,t,i,s){return oi.subVectors(i,t),Li.subVectors(e,t),oi.cross(Li).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),oi.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ht.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,n){return Ht.getInterpolation(e,this.a,this.b,this.c,t,i,s,n)}containsPoint(e){return Ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,n=this.c;let a,o;$s.subVectors(s,i),Qs.subVectors(n,i),dl.subVectors(e,i);const l=$s.dot(dl),c=Qs.dot(dl);if(l<=0&&c<=0)return t.copy(i);pl.subVectors(e,s);const h=$s.dot(pl),d=Qs.dot(pl);if(h>=0&&d<=h)return t.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector($s,a);fl.subVectors(e,n);const p=$s.dot(fl),m=Qs.dot(fl);if(m>=0&&p<=m)return t.copy(n);const v=p*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(Qs,o);const g=h*m-p*d;if(g<=0&&d-h>=0&&p-m>=0)return Oh.subVectors(n,s),o=(d-h)/(d-h+(p-m)),t.copy(s).addScaledVector(Oh,o);const f=1/(g+v+u);return a=v*f,o=u*f,t.copy(i).addScaledVector($s,a).addScaledVector(Qs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},ya={h:0,s:0,l:0};function _l(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class me{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Je.workingColorSpace){if(e=tl(e,1),t=ze(t,0,1),i=ze(i,0,1),t===0)this.r=this.g=this.b=i;else{const n=i<=.5?i*(1+t):i+t-i*t,a=2*i-n;this.r=_l(a,n,e+1/3),this.g=_l(a,n,e),this.b=_l(a,n,e-1/3)}return Je.toWorkingColorSpace(this,s),this}setStyle(e,t=kt){function i(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let n;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,t);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=s[1],a=n.length;if(a===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(n,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const i=Fh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return Je.fromWorkingColorSpace(Rt.copy(this),e),Math.round(ze(Rt.r*255,0,255))*65536+Math.round(ze(Rt.g*255,0,255))*256+Math.round(ze(Rt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Rt.copy(this),t);const i=Rt.r,s=Rt.g,n=Rt.b,a=Math.max(i,s,n),o=Math.min(i,s,n);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-n)/d+(s<n?6:0);break;case s:l=(n-i)/d+2;break;case n:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=kt){Je.fromWorkingColorSpace(Rt.copy(this),e);const t=Rt.r,i=Rt.g,s=Rt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(ya);const i=On(Xi.h,ya.h,t),s=On(Xi.s,ya.s,t),n=On(Xi.l,ya.l,t);return this.setHSL(i,s,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,n=e.elements;return this.r=n[0]*t+n[3]*i+n[6]*s,this.g=n[1]*t+n[4]*i+n[7]*s,this.b=n[2]*t+n[5]*i+n[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new me;me.NAMES=Fh;let Uf=0;class Ct extends gi{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=qt(),this.name="",this.type="Material",this.blending=is,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xr,this.blendDst=yr,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$o,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==Infinity&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(i.blending=this.blending),this.side!==Si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xr&&(i.blendSrc=this.blendSrc),this.blendDst!==yr&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$o&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(n){const a=[];for(const o in n){const l=n[o];delete l.metadata,a.push(l)}return a}if(t){const n=s(e.textures),a=s(e.images);n.length>0&&(i.textures=n),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let n=0;n!==s;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ji extends Ct{constructor(e){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=xn,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Di=Df();function Df(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,s[l]=24,s[l|256]=24):(i[l]=31744,i[l|256]=64512,s[l]=13,s[l|256]=13)}const n=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)==0;)c<<=1,h-=8388608;c&=~8388608,h+=947912704,n[l]=c|h}for(let l=1024;l<2048;++l)n[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:s,mantissaTable:n,exponentTable:a,offsetTable:o}}function Gt(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=ze(r,-65504,65504),Di.floatView[0]=r;const e=Di.uint32View[0],t=e>>23&511;return Di.baseTable[t]+((e&8388607)>>Di.shiftTable[t])}function Hn(r){const e=r>>10;return Di.uint32View[0]=Di.mantissaTable[Di.offsetTable[e]+(r&1023)]+Di.exponentTable[e],Di.floatView[0]}const Nf={toHalfFloat:Gt,fromHalfFloat:Hn},mt=new E,Ma=new Z;let Of=0;class at{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Of++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Dn,this.updateRanges=[],this.gpuType=zt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,n=this.itemSize;s<n;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ma.fromBufferAttribute(this,t),Ma.applyMatrix3(e),this.setXY(t,Ma.x,Ma.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Dt(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),i=Ve(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),i=Ve(i,this.array),s=Ve(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,n){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),i=Ve(i,this.array),s=Ve(s,this.array),n=Ve(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dn&&(e.usage=this.usage),e}}class Ff extends at{constructor(e,t,i){super(new Int8Array(e),t,i)}}class Bf extends at{constructor(e,t,i){super(new Uint8Array(e),t,i)}}class zf extends at{constructor(e,t,i){super(new Uint8ClampedArray(e),t,i)}}class kf extends at{constructor(e,t,i){super(new Int16Array(e),t,i)}}class xl extends at{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Vf extends at{constructor(e,t,i){super(new Int32Array(e),t,i)}}class yl extends at{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Hf extends at{constructor(e,t,i){super(new Uint16Array(e),t,i);this.isFloat16BufferAttribute=!0}getX(e){let t=Hn(this.array[e*this.itemSize]);return this.normalized&&(t=Dt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize]=Gt(t),this}getY(e){let t=Hn(this.array[e*this.itemSize+1]);return this.normalized&&(t=Dt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+1]=Gt(t),this}getZ(e){let t=Hn(this.array[e*this.itemSize+2]);return this.normalized&&(t=Dt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+2]=Gt(t),this}getW(e){let t=Hn(this.array[e*this.itemSize+3]);return this.normalized&&(t=Dt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+3]=Gt(t),this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),i=Ve(i,this.array)),this.array[e+0]=Gt(t),this.array[e+1]=Gt(i),this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),i=Ve(i,this.array),s=Ve(s,this.array)),this.array[e+0]=Gt(t),this.array[e+1]=Gt(i),this.array[e+2]=Gt(s),this}setXYZW(e,t,i,s,n){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),i=Ve(i,this.array),s=Ve(s,this.array),n=Ve(n,this.array)),this.array[e+0]=Gt(t),this.array[e+1]=Gt(i),this.array[e+2]=Gt(s),this.array[e+3]=Gt(n),this}}class we extends at{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Gf=0;const ei=new Le,Ml=new $e,en=new E,Jt=new Nt,Gn=new Nt,Mt=new E;class Ge extends gi{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=qt(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:Infinity},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sh(e)?yl:xl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new ke().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,i){return ei.makeTranslation(e,t,i),this.applyMatrix4(ei),this}scale(e,t,i){return ei.makeScale(e,t,i),this.applyMatrix4(ei),this}lookAt(e){return Ml.lookAt(e),Ml.updateMatrix(),this.applyMatrix4(Ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(en).negate(),this.translate(en.x,en.y,en.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,n=e.length;s<n;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new we(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const n=e[s];t.setXYZ(s,n.x,n.y,n.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-Infinity,-Infinity,-Infinity),new E(Infinity,Infinity,Infinity));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const n=t[i];Jt.setFromBufferAttribute(n),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new At);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,Infinity);return}if(e){const i=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const o=t[n];Gn.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Jt.min,Gn.min),Jt.expandByPoint(Mt),Mt.addVectors(Jt.max,Gn.max),Jt.expandByPoint(Mt)):(Jt.expandByPoint(Gn.min),Jt.expandByPoint(Gn.max))}Jt.getCenter(i);let s=0;for(let n=0,a=e.count;n<a;n++)Mt.fromBufferAttribute(e,n),s=Math.max(s,i.distanceToSquared(Mt));if(t)for(let n=0,a=t.length;n<a;n++){const o=t[n],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Mt.fromBufferAttribute(o,c),l&&(en.fromBufferAttribute(e,c),Mt.add(en)),s=Math.max(s,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,n=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new at(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<i.count;I++)o[I]=new E,l[I]=new E;const c=new E,h=new E,d=new E,u=new Z,p=new Z,m=new Z,v=new E,g=new E;function f(I,T,M){c.fromBufferAttribute(i,I),h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,M),u.fromBufferAttribute(n,I),p.fromBufferAttribute(n,T),m.fromBufferAttribute(n,M),h.sub(c),d.sub(c),p.sub(u),m.sub(u);const L=1/(p.x*m.y-m.x*p.y);!isFinite(L)||(v.copy(h).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(L),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(L),o[I].add(v),o[T].add(v),o[M].add(v),l[I].add(g),l[T].add(g),l[M].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let I=0,T=y.length;I<T;++I){const M=y[I],L=M.start,F=M.count;for(let B=L,V=L+F;B<V;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const x=new E,_=new E,C=new E,w=new E;function R(I){C.fromBufferAttribute(s,I),w.copy(C);const T=o[I];x.copy(T),x.sub(C.multiplyScalar(C.dot(T))).normalize(),_.crossVectors(w,T);const M=_.dot(l[I])<0?-1:1;a.setXYZW(I,x.x,x.y,x.z,M)}for(let I=0,T=y.length;I<T;++I){const M=y[I],L=M.start,F=M.count;for(let B=L,V=L+F;B<V;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new at(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const s=new E,n=new E,a=new E,o=new E,l=new E,c=new E,h=new E,d=new E;if(e)for(let u=0,p=e.count;u<p;u+=3){const m=e.getX(u+0),v=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,m),n.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,n),d.subVectors(s,n),h.cross(d),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),n.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,n),d.subVectors(s,n),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,m=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let f=0;f<h;f++)u[m++]=c[p++]}return new at(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ge,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const n=this.morphAttributes;for(const o in n){const l=[],c=n[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=e(u,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let n=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,n=!0)}n&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const n=e.morphAttributes;for(const c in n){const h=[],d=n[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bh=new Le,ms=new Ys,Sa=new At,zh=new E,ba=new E,Ta=new E,wa=new E,Sl=new E,Ea=new E,kh=new E,Aa=new E;class gt extends $e{constructor(e=new Ge,t=new ji){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,n=i.length;s<n;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,n=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(n&&o){Ea.set(0,0,0);for(let l=0,c=n.length;l<c;l++){const h=o[l],d=n[l];h!==0&&(Sl.fromBufferAttribute(d,e),a?Ea.addScaledVector(Sl,h):Ea.addScaledVector(Sl.sub(t),h))}t.add(Ea)}return t}raycast(e,t){const i=this.geometry,s=this.material,n=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sa.copy(i.boundingSphere),Sa.applyMatrix4(n),ms.copy(e.ray).recast(e.near),!(Sa.containsPoint(ms.origin)===!1&&(ms.intersectSphere(Sa,zh)===null||ms.origin.distanceToSquared(zh)>(e.far-e.near)**2))&&(Bh.copy(n).invert(),ms.copy(e.ray).applyMatrix4(Bh),!(i.boundingBox!==null&&ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ms)))}_computeIntersections(e,t,i){let s;const n=this.geometry,a=this.material,o=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv1,d=n.attributes.normal,u=n.groups,p=n.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=u.length;m<v;m++){const g=u[m],f=a[g.materialIndex],y=Math.max(g.start,p.start),x=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let _=y,C=x;_<C;_+=3){const w=o.getX(_),R=o.getX(_+1),I=o.getX(_+2);s=Ra(this,f,e,i,c,h,d,w,R,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let g=m,f=v;g<f;g+=3){const y=o.getX(g),x=o.getX(g+1),_=o.getX(g+2);s=Ra(this,a,e,i,c,h,d,y,x,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=u.length;m<v;m++){const g=u[m],f=a[g.materialIndex],y=Math.max(g.start,p.start),x=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let _=y,C=x;_<C;_+=3){const w=_,R=_+1,I=_+2;s=Ra(this,f,e,i,c,h,d,w,R,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let g=m,f=v;g<f;g+=3){const y=g,x=g+1,_=g+2;s=Ra(this,a,e,i,c,h,d,y,x,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Wf(r,e,t,i,s,n,a,o){let l;if(e.side===Lt?l=i.intersectTriangle(a,n,s,!0,o):l=i.intersectTriangle(s,n,a,e.side===Si,o),l===null)return null;Aa.copy(o),Aa.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Aa);return c<t.near||c>t.far?null:{distance:c,point:Aa.clone(),object:r}}function Ra(r,e,t,i,s,n,a,o,l,c){r.getVertexPosition(o,ba),r.getVertexPosition(l,Ta),r.getVertexPosition(c,wa);const h=Wf(r,e,t,i,ba,Ta,wa,kh);if(h){const d=new E;Ht.getBarycoord(kh,ba,Ta,wa,d),s&&(h.uv=Ht.getInterpolatedAttribute(s,o,l,c,d,new Z)),n&&(h.uv1=Ht.getInterpolatedAttribute(n,o,l,c,d,new Z)),a&&(h.normal=Ht.getInterpolatedAttribute(a,o,l,c,d,new E),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new E,materialIndex:0};Ht.getNormal(ba,Ta,wa,u.normal),h.face=u,h.barycoord=d}return h}class gs extends Ge{constructor(e=1,t=1,i=1,s=1,n=1,a=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:n,depthSegments:a};const o=this;s=Math.floor(s),n=Math.floor(n),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,p=0;m("z","y","x",-1,-1,i,t,e,a,n,0),m("z","y","x",1,-1,i,t,-e,a,n,1),m("x","z","y",1,1,e,i,t,s,a,2),m("x","z","y",1,-1,e,i,-t,s,a,3),m("x","y","z",1,-1,e,t,i,s,n,4),m("x","y","z",-1,-1,e,t,-i,s,n,5),this.setIndex(l),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(d,2));function m(v,g,f,y,x,_,C,w,R,I,T){const M=_/R,L=C/I,F=_/2,B=C/2,V=w/2,Y=R+1,W=I+1;let te=0,G=0;const ne=new E;for(let ge=0;ge<W;ge++){const Ue=ge*L-B;for(let Xe=0;Xe<Y;Xe++){const tt=Xe*M-F;ne[v]=tt*y,ne[g]=Ue*x,ne[f]=V,c.push(ne.x,ne.y,ne.z),ne[v]=0,ne[g]=0,ne[f]=w>0?1:-1,h.push(ne.x,ne.y,ne.z),d.push(Xe/R),d.push(1-ge/I),te+=1}}for(let ge=0;ge<I;ge++)for(let Ue=0;Ue<R;Ue++){const Xe=u+Ue+Y*ge,tt=u+Ue+Y*(ge+1),X=u+(Ue+1)+Y*(ge+1),ie=u+(Ue+1)+Y*ge;l.push(Xe,tt,ie),l.push(tt,X,ie),G+=6}o.addGroup(p,G,T),p+=G,u+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function tn(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const s=r[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Ot(r){const e={};for(let t=0;t<r.length;t++){const i=tn(r[t]);for(const s in i)e[s]=i[s]}return e}function Xf(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Vh(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Hh={clone:tn,merge:Ot};var jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends Ct{constructor(e){super();this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jf,this.fragmentShader=qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tn(e.uniforms),this.uniformsGroups=Xf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const n=this.uniforms[s].value;n&&n.isTexture?t.uniforms[s]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[s]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[s]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[s]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[s]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[s]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[s]={type:"m4",value:n.toArray()}:t.uniforms[s]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ca extends $e{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qi=new E,Gh=new Z,Wh=new Z;class Tt extends Ca{constructor(e=50,t=1,i=.1,s=2e3){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ks*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,Gh,Wh),t.subVectors(Wh,Gh)}setViewOffset(e,t,i,s,n,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(us*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,n=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;n+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(n+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const sn=-90,nn=1;class Xh extends $e{constructor(e,t,i){super();this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Tt(sn,nn,e,t);s.layers=this.layers,this.add(s);const n=new Tt(sn,nn,e,t);n.layers=this.layers,this.add(n);const a=new Tt(sn,nn,e,t);a.layers=this.layers,this.add(a);const o=new Tt(sn,nn,e,t);o.layers=this.layers,this.add(o);const l=new Tt(sn,nn,e,t);l.layers=this.layers,this.add(l);const c=new Tt(sn,nn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,n,a,o,l]=t;for(const c of t)this.remove(c);if(e===ni)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Nn)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[n,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,n),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Wn extends dt{constructor(e,t,i,s,n,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:wi,super(e,t,i,s,n,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jh extends vi{constructor(e=1,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Wn(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new gs(5,5,5),n=new li({name:"CubemapFromEquirect",uniforms:tn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Lt,blending:bi});n.uniforms.tEquirect.value=t;const a=new gt(s,n),o=t.minFilter;return t.minFilter===fi&&(t.minFilter=_t),new Xh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const n=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(n)}}class rn extends $e{constructor(){super();this.isGroup=!0,this.type="Group"}}const Yf={type:"move"};class Ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,n=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,i),f=this._getHandJoint(c,v);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,m=.005;c.inputState.pinching&&u>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,i),n!==null&&(l.matrix.fromArray(n.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,n.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(n.linearVelocity)):l.hasLinearVelocity=!1,n.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(n.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&n!==null&&(s=n),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=n!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new rn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Pa{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new me(e),this.density=t}clone(){return new Pa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class La{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new me(e),this.near=t,this.far=i}clone(){return new La(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class qh extends $e{constructor(){super();this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zt,this.environmentIntensity=1,this.environmentRotation=new Zt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ua{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Dn,this.updateRanges=[],this.version=0,this.uuid=qt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,n=this.stride;s<n;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ft=new E;class vs{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Dt(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ve(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ve(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ve(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ve(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Dt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Dt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Dt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Dt(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ve(t,this.array),i=Ve(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ve(t,this.array),i=Ve(i,this.array),s=Ve(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ve(t,this.array),i=Ve(i,this.array),s=Ve(s,this.array),n=Ve(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=n,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[s+n])}return new at(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new vs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[s+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class bl extends Ct{constructor(e){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let an;const Xn=new E,on=new E,ln=new E,cn=new Z,jn=new Z,Yh=new Le,Da=new E,qn=new E,Na=new E,Zh=new Z,Tl=new Z,Jh=new Z;class Kh extends $e{constructor(e=new bl){super();if(this.isSprite=!0,this.type="Sprite",an===void 0){an=new Ge;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ua(t,5);an.setIndex([0,1,2,0,2,3]),an.setAttribute("position",new vs(i,3,0,!1)),an.setAttribute("uv",new vs(i,2,3,!1))}this.geometry=an,this.material=e,this.center=new Z(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),on.setFromMatrixScale(this.matrixWorld),Yh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ln.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&on.multiplyScalar(-ln.z);const i=this.material.rotation;let s,n;i!==0&&(n=Math.cos(i),s=Math.sin(i));const a=this.center;Oa(Da.set(-.5,-.5,0),ln,a,on,s,n),Oa(qn.set(.5,-.5,0),ln,a,on,s,n),Oa(Na.set(.5,.5,0),ln,a,on,s,n),Zh.set(0,0),Tl.set(1,0),Jh.set(1,1);let o=e.ray.intersectTriangle(Da,qn,Na,!1,Xn);if(o===null&&(Oa(qn.set(-.5,.5,0),ln,a,on,s,n),Tl.set(0,1),o=e.ray.intersectTriangle(Da,Na,qn,!1,Xn),o===null))return;const l=e.ray.origin.distanceTo(Xn);l<e.near||l>e.far||t.push({distance:l,point:Xn.clone(),uv:Ht.getInterpolation(Xn,Da,qn,Na,Zh,Tl,Jh,new Z),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Oa(r,e,t,i,s,n){cn.subVectors(r,t).addScalar(.5).multiply(i),s!==void 0?(jn.x=n*cn.x-s*cn.y,jn.y=s*cn.x+n*cn.y):jn.copy(cn),r.copy(e),r.x+=jn.x,r.y+=jn.y,r.applyMatrix4(Yh)}const Fa=new E,$h=new E;class Qh extends $e{constructor(){super();this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let i=0,s=t.length;i<s;i++){const n=t[i];this.addLevel(n.object.clone(),n.distance,n.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,i=0){t=Math.abs(t);const s=this.levels;let n;for(n=0;n<s.length&&!(t<s[n].distance);n++);return s.splice(n,0,{distance:t,hysteresis:i,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let i=0;i<t.length;i++)if(t[i].distance===e){const s=t.splice(i,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let i,s;for(i=1,s=t.length;i<s;i++){let n=t[i].distance;if(t[i].object.visible&&(n-=n*t[i].hysteresis),e<n)break}return t[i-1].object}return null}raycast(e,t){if(this.levels.length>0){Fa.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Fa);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Fa.setFromMatrixPosition(e.matrixWorld),$h.setFromMatrixPosition(this.matrixWorld);const i=Fa.distanceTo($h)/e.zoom;t[0].object.visible=!0;let s,n;for(s=1,n=t.length;s<n;s++){let a=t[s].distance;if(t[s].object.visible&&(a-=a*t[s].hysteresis),i>=a)t[s-1].object.visible=!1,t[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<n;s++)t[s].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const i=this.levels;for(let s=0,n=i.length;s<n;s++){const a=i[s];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const eu=new E,tu=new Ke,iu=new Ke,Zf=new E,su=new Le,Ba=new E,wl=new At,nu=new Le,El=new Ys;class ru extends gt{constructor(e,t){super(e,t);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ko,this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Nt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ba),this.boundingBox.expandByPoint(Ba)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new At),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ba),this.boundingSphere.expandByPoint(Ba)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wl.copy(this.boundingSphere),wl.applyMatrix4(s),e.ray.intersectsSphere(wl)!==!1&&(nu.copy(s).invert(),El.copy(e.ray).applyMatrix4(nu),!(this.boundingBox!==null&&El.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,El)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ke,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const n=1/e.manhattanLength();n!==Infinity?e.multiplyScalar(n):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ko?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===oh?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;tu.fromBufferAttribute(s.attributes.skinIndex,e),iu.fromBufferAttribute(s.attributes.skinWeight,e),eu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let n=0;n<4;n++){const a=iu.getComponent(n);if(a!==0){const o=tu.getComponent(n);su.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Zf.copy(eu).applyMatrix4(su),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Al extends $e{constructor(){super();this.isBone=!0,this.type="Bone"}}class _i extends dt{constructor(e=null,t=1,i=1,s,n,a,o,l,c=bt,h=bt,d,u){super(null,a,o,l,c,h,s,n,d,u);this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const au=new Le,Jf=new Le;class za{constructor(e=[],t=[]){this.uuid=qt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Le;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let n=0,a=e.length;n<a;n++){const o=e[n]?e[n].matrixWorld:Jf;au.multiplyMatrices(o,t[n]),au.toArray(i,n*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new za(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new _i(t,e,e,Ut,zt);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const n=e.bones[i];let a=t[n];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",n),a=new Al),this.bones.push(a),this.boneInverses.push(new Le().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,n=t.length;s<n;s++){const a=t[s];e.bones.push(a.uuid);const o=i[s];e.boneInverses.push(o.toArray())}return e}}class hn extends at{constructor(e,t,i,s=1){super(e,t,i);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const un=new Le,ou=new Le,ka=[],lu=new Nt,Kf=new Le,Yn=new gt,Zn=new At;class cu extends gt{constructor(e,t,i){super(e,t);this.isInstancedMesh=!0,this.instanceMatrix=new hn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Kf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Nt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,un),lu.copy(e.boundingBox).applyMatrix4(un),this.boundingBox.union(lu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new At),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,un),Zn.copy(e.boundingSphere).applyMatrix4(un),this.boundingSphere.union(Zn)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,n=i.length+1,a=e*n+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Yn.geometry=this.geometry,Yn.material=this.material,Yn.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zn.copy(this.boundingSphere),Zn.applyMatrix4(i),e.ray.intersectsSphere(Zn)!==!1))for(let n=0;n<s;n++){this.getMatrixAt(n,un),ou.multiplyMatrices(i,un),Yn.matrixWorld=ou,Yn.raycast(e,ka);for(let a=0,o=ka.length;a<o;a++){const l=ka[a];l.instanceId=n,l.object=this,t.push(l)}ka.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new hn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new _i(new Float32Array(s*this.count),s,this.count,Lr,zt));const n=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;n[l]=o,n.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Rl=new E,$f=new E,Qf=new ke;class Yi{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Rl.subVectors(i,t).cross($f.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Rl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/s;return n<0||n>1?null:t.copy(e.start).addScaledVector(i,n)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Qf.getNormalMatrix(e),s=this.coplanarPoint(Rl).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _s=new At,Va=new E;class Jn{constructor(e=new Yi,t=new Yi,i=new Yi,s=new Yi,n=new Yi,a=new Yi){this.planes=[e,t,i,s,n,a]}set(e,t,i,s,n,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(n),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ni){const i=this.planes,s=e.elements,n=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],p=s[8],m=s[9],v=s[10],g=s[11],f=s[12],y=s[13],x=s[14],_=s[15];if(i[0].setComponents(l-n,u-c,g-p,_-f).normalize(),i[1].setComponents(l+n,u+c,g+p,_+f).normalize(),i[2].setComponents(l+a,u+h,g+m,_+y).normalize(),i[3].setComponents(l-a,u-h,g-m,_-y).normalize(),i[4].setComponents(l-o,u-d,g-v,_-x).normalize(),t===ni)i[5].setComponents(l+o,u+d,g+v,_+x).normalize();else if(t===Nn)i[5].setComponents(o,d,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){return _s.center.set(0,0,0),_s.radius=.7071067811865476,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Va.x=s.normal.x>0?e.max.x:e.min.x,Va.y=s.normal.y>0?e.max.y:e.min.y,Va.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Va)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cl(r,e){return r-e}function em(r,e){return r.z-e.z}function tm(r,e){return e.z-r.z}class im{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,s){const n=this.pool,a=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1,index:-1});const o=n[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=s}reset(){this.list.length=0,this.index=0}}const Wt=new Le,sm=new me(1,1,1),Il=new Jn,Ha=new Nt,xs=new At,Kn=new E,hu=new E,nm=new E,Pl=new im,It=new gt,Ga=[];function rm(r,e,t=0){const i=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const s=r.count;for(let n=0;n<s;n++)for(let a=0;a<i;a++)e.setComponent(n+t,a,r.getComponent(n,a))}else e.array.set(r.array,t*i);e.needsUpdate=!0}function ys(r,e){if(r.constructor!==e.constructor){const t=Math.min(r.length,e.length);for(let i=0;i<t;i++)e[i]=r[i]}else{const t=Math.min(r.length,e.length);e.set(new r.constructor(r.buffer,0,t))}}class uu extends gt{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(e,t,i=t*2,s){super(new Ge,s);this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=i,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),i=new _i(t,e,e,Ut,zt);this._matricesTexture=i}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),i=new _i(t,e,e,wn,Ei);this._indirectTexture=i}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),i=new _i(t,e,e,Ut,zt);i.colorSpace=Je.workingColorSpace,this._colorsTexture=i}_initializeGeometry(e){const t=this.geometry,i=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const n in e.attributes){const a=e.getAttribute(n),{array:o,itemSize:l,normalized:c}=a,h=new o.constructor(i*l),d=new at(h,l,c);t.setAttribute(n,d)}if(e.getIndex()!==null){const n=i>65535?new Uint32Array(s):new Uint16Array(s);t.setIndex(new at(n,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(Boolean(e.getIndex())!==Boolean(t.getIndex()))throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const i in t.attributes){if(!e.hasAttribute(i))throw new Error(`THREE.BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);const s=e.getAttribute(i),n=t.getAttribute(i);if(s.itemSize!==n.itemSize||s.normalized!==n.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nt);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let i=0,s=t.length;i<s;i++){if(t[i].active===!1)continue;const n=t[i].geometryIndex;this.getMatrixAt(i,Wt),this.getBoundingBoxAt(n,Ha).applyMatrix4(Wt),e.union(Ha)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new At);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let i=0,s=t.length;i<s;i++){if(t[i].active===!1)continue;const n=t[i].geometryIndex;this.getMatrixAt(i,Wt),this.getBoundingSphereAt(n,xs).applyMatrix4(Wt),e.union(xs)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const t={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Cl),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=t):(i=this._instanceInfo.length,this._instanceInfo.push(t));const s=this._matricesTexture;Wt.identity().toArray(s.image.data,i*16),s.needsUpdate=!0;const n=this._colorsTexture;return n&&(sm.toArray(n.image.data,i*4),n.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,i=-1){this._initializeGeometry(e),this._validateGeometry(e);const s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},n=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const a=e.getIndex();if(a!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=i===-1?a.count:i),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let o;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Cl),o=this._availableGeometryIds.shift(),n[o]=s):(o=this._geometryCount,this._geometryCount++,n.push(s)),this.setGeometryAt(o,e),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,o}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const i=this.geometry,s=i.getIndex()!==null,n=i.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(s&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(const h in i.attributes){const d=t.getAttribute(h),u=i.getAttribute(h);rm(d,u,l);const p=d.itemSize;for(let m=d.count,v=c;m<v;m++){const g=l+m;for(let f=0;f<p;f++)u.setComponent(g,f,0)}u.needsUpdate=!0,u.addUpdateRange(l*p,c*p)}if(s){const h=o.indexStart,d=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let u=0;u<a.count;u++)n.setX(h+u,l+a.getX(u));for(let u=a.count,p=d;u<p;u++)n.setX(h+u,l);n.needsUpdate=!0,n.addUpdateRange(h,o.reservedIndexCount)}return o.start=s?o.indexStart:o.vertexStart,o.count=s?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const i=this._instanceInfo;for(let s=0,n=i.length;s<n;s++)i[s].active&&i[s].geometryIndex===e&&this.deleteInstance(s);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const i=this._geometryInfo,s=i.map((a,o)=>o).sort((a,o)=>i[a].vertexStart-i[o].vertexStart),n=this.geometry;for(let a=0,o=i.length;a<o;a++){const l=s[a],c=i[l];if(c.active!==!1){if(n.index!==null){if(c.indexStart!==t){const{indexStart:h,vertexStart:d,reservedIndexCount:u}=c,p=n.index,m=p.array,v=e-d;for(let g=h;g<h+u;g++)m[g]=m[g]+v;p.array.copyWithin(t,h,h+u),p.addUpdateRange(t,u),c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:h,reservedVertexCount:d}=c,u=n.attributes;for(const p in u){const m=u[p],{array:v,itemSize:g}=m;v.copyWithin(e*g,h*g,(h+d)*g),m.addUpdateRange(e*g,d*g)}c.vertexStart=e}e+=c.reservedVertexCount,c.start=n.index?c.indexStart:c.vertexStart,this._nextIndexStart=n.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const i=this.geometry,s=this._geometryInfo[e];if(s.boundingBox===null){const n=new Nt,a=i.index,o=i.attributes.position;for(let l=s.start,c=s.start+s.count;l<c;l++){let h=l;a&&(h=a.getX(h)),n.expandByPoint(Kn.fromBufferAttribute(o,h))}s.boundingBox=n}return t.copy(s.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const i=this.geometry,s=this._geometryInfo[e];if(s.boundingSphere===null){const n=new At;this.getBoundingBoxAt(e,Ha),Ha.getCenter(n.center);const a=i.index,o=i.attributes.position;let l=0;for(let c=s.start,h=s.start+s.count;c<h;c++){let d=c;a&&(d=a.getX(d)),Kn.fromBufferAttribute(o,d),l=Math.max(l,n.center.distanceToSquared(Kn))}n.radius=Math.sqrt(l),s.boundingSphere=n}return t.copy(s.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const i=this._matricesTexture,s=this._matricesTexture.image.data;return t.toArray(s,e*16),i.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const i=this._geometryInfo[e];return t.vertexStart=i.vertexStart,t.vertexCount=i.vertexCount,t.reservedVertexCount=i.reservedVertexCount,t.indexStart=i.indexStart,t.indexCount=i.indexCount,t.reservedIndexCount=i.reservedIndexCount,t.start=i.start,t.count=i.count,t}setInstanceCount(e){const t=this._availableInstanceIds,i=this._instanceInfo;for(t.sort(Cl);t[t.length-1]===i.length;)i.pop(),t.pop();if(e<i.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const s=new Int32Array(e),n=new Int32Array(e);ys(this._multiDrawCounts,s),ys(this._multiDrawStarts,n),this._multiDrawCounts=s,this._multiDrawStarts=n,this._maxInstanceCount=e;const a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),ys(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),ys(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),ys(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const i=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...i.map(a=>a.vertexStart+a.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...i.map(a=>a.indexStart+a.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const s=this.geometry;s.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Ge,this._initializeGeometry(s));const n=this.geometry;s.index&&ys(s.index.array,n.index.array);for(const a in s.attributes)ys(s.attributes[a].array,n.attributes[a].array)}raycast(e,t){const i=this._instanceInfo,s=this._geometryInfo,n=this.matrixWorld,a=this.geometry;It.material=this.material,It.geometry.index=a.index,It.geometry.attributes=a.attributes,It.geometry.boundingBox===null&&(It.geometry.boundingBox=new Nt),It.geometry.boundingSphere===null&&(It.geometry.boundingSphere=new At);for(let o=0,l=i.length;o<l;o++){if(!i[o].visible||!i[o].active)continue;const c=i[o].geometryIndex,h=s[c];It.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,It.matrixWorld).premultiply(n),this.getBoundingBoxAt(c,It.geometry.boundingBox),this.getBoundingSphereAt(c,It.geometry.boundingSphere),It.raycast(e,Ga);for(let d=0,u=Ga.length;d<u;d++){const p=Ga[d];p.object=this,p.batchId=o,t.push(p)}Ga.length=0}It.material=null,It.geometry.index=null,It.geometry.attributes={},It.geometry.setDrawRange(0,Infinity)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,i,s,n){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=s.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,d=this._geometryInfo,u=this.perObjectFrustumCulled,p=this._indirectTexture,m=p.image.data;u&&(Wt.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),Il.setFromProjectionMatrix(Wt,e.coordinateSystem));let v=0;if(this.sortObjects){Wt.copy(this.matrixWorld).invert(),Kn.setFromMatrixPosition(i.matrixWorld).applyMatrix4(Wt),hu.set(0,0,-1).transformDirection(i.matrixWorld).transformDirection(Wt);for(let y=0,x=l.length;y<x;y++)if(l[y].visible&&l[y].active){const _=l[y].geometryIndex;this.getMatrixAt(y,Wt),this.getBoundingSphereAt(_,xs).applyMatrix4(Wt);let C=!1;if(u&&(C=!Il.intersectsSphere(xs)),!C){const w=d[_],R=nm.subVectors(xs.center,Kn).dot(hu);Pl.push(w.start,w.count,R,y)}}const g=Pl.list,f=this.customSort;f===null?g.sort(n.transparent?tm:em):f.call(this,g,i);for(let y=0,x=g.length;y<x;y++){const _=g[y];c[v]=_.start*o,h[v]=_.count,m[v]=_.index,v++}Pl.reset()}else for(let g=0,f=l.length;g<f;g++)if(l[g].visible&&l[g].active){const y=l[g].geometryIndex;let x=!1;if(u&&(this.getMatrixAt(g,Wt),this.getBoundingSphereAt(y,xs).applyMatrix4(Wt),x=!Il.intersectsSphere(xs)),!x){const _=d[y];c[v]=_.start*o,h[v]=_.count,m[v]=g,v++}}p.needsUpdate=!0,this._multiDrawCount=v,this._visibilityChanged=!1}onBeforeShadow(e,t,i,s,n,a){this.onBeforeRender(e,null,s,n,a)}}class Bt extends Ct{constructor(e){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wa=new E,Xa=new E,du=new Le,$n=new Ys,ja=new At,Ll=new E,pu=new E;class Zi extends $e{constructor(e=new Ge,t=new Bt){super();this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,n=t.count;s<n;s++)Wa.fromBufferAttribute(t,s-1),Xa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Wa.distanceTo(Xa);e.setAttribute("lineDistance",new we(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,n=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ja.copy(i.boundingSphere),ja.applyMatrix4(s),ja.radius+=n,e.ray.intersectsSphere(ja)===!1)return;du.copy(s).invert(),$n.copy(e.ray).applyMatrix4(du);const o=n/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const u=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let m=u,v=p-1;m<v;m+=c){const g=h.getX(m),f=h.getX(m+1),y=qa(this,e,$n,l,g,f,m);y&&t.push(y)}if(this.isLineLoop){const m=h.getX(p-1),v=h.getX(u),g=qa(this,e,$n,l,m,v,p-1);g&&t.push(g)}}else{const u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let m=u,v=p-1;m<v;m+=c){const g=qa(this,e,$n,l,m,m+1,m);g&&t.push(g)}if(this.isLineLoop){const m=qa(this,e,$n,l,p-1,u,p-1);m&&t.push(m)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,n=i.length;s<n;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function qa(r,e,t,i,s,n,a){const o=r.geometry.attributes.position;if(Wa.fromBufferAttribute(o,s),Xa.fromBufferAttribute(o,n),t.distanceSqToSegment(Wa,Xa,Ll,pu)>i)return;Ll.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Ll);if(!(l<e.near||l>e.far))return{distance:l,point:pu.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const fu=new E,mu=new E;class xi extends Zi{constructor(e,t){super(e,t);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,n=t.count;s<n;s+=2)fu.fromBufferAttribute(t,s),mu.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+fu.distanceTo(mu);e.setAttribute("lineDistance",new we(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gu extends Zi{constructor(e,t){super(e,t);this.isLineLoop=!0,this.type="LineLoop"}}class Ul extends Ct{constructor(e){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vu=new Le,Dl=new Ys,Ya=new At,Za=new E;class _u extends $e{constructor(e=new Ge,t=new Ul){super();this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,n=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ya.copy(i.boundingSphere),Ya.applyMatrix4(s),Ya.radius+=n,e.ray.intersectsSphere(Ya)===!1)return;vu.copy(s).invert(),Dl.copy(e.ray).applyMatrix4(vu);const o=n/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);for(let p=d,m=u;p<m;p++){const v=c.getX(p);Za.fromBufferAttribute(h,v),xu(Za,v,l,s,e,t,this)}}else{const d=Math.max(0,a.start),u=Math.min(h.count,a.start+a.count);for(let p=d,m=u;p<m;p++)Za.fromBufferAttribute(h,p),xu(Za,p,l,s,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,n=i.length;s<n;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function xu(r,e,t,i,s,n,a){const o=Dl.distanceSqToPoint(r);if(o<t){const l=new E;Dl.closestPointToPoint(r,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;n.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class yu extends dt{constructor(e,t,i,s,n,a,o,l,c){super(e,t,i,s,n,a,o,l,c);this.isVideoTexture=!0,this.minFilter=a!==void 0?a:_t,this.magFilter=n!==void 0?n:_t,this.generateMipmaps=!1;const h=this;function d(){h.needsUpdate=!0,e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;!("requestVideoFrameCallback"in e)&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class am extends yu{constructor(e,t,i,s,n,a,o,l){super({},e,t,i,s,n,a,o,l);this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}}class om extends dt{constructor(e,t){super({width:e,height:t});this.isFramebufferTexture=!0,this.magFilter=bt,this.minFilter=bt,this.generateMipmaps=!1,this.needsUpdate=!0}}class Ja extends dt{constructor(e,t,i,s,n,a,o,l,c,h,d,u){super(null,a,o,l,c,h,s,n,d,u);this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class lm extends Ja{constructor(e,t,i,s,n,a){super(e,t,i,n,a);this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=Qt,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cm extends Ja{constructor(e,t,i){super(void 0,e[0].width,e[0].height,t,i,wi);this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class hm extends dt{constructor(e,t,i,s,n,a,o,l,c){super(e,t,i,s,n,a,o,l,c);this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nl extends dt{constructor(e,t,i,s,n,a,o,l,c,h=rs){if(h!==rs&&h!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===rs&&(i=Ei),i===void 0&&h===as&&(i=ns),super(null,s,n,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:bt,this.minFilter=l!==void 0?l:bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ci{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),n=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),n+=i.distanceTo(s),t.push(n),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const n=i.length;let a;t?a=t:a=e*i[n-1];let o=0,l=n-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(n-1);const h=i[s],d=i[s+1]-h,u=(a-h)/d;return(s+u)/(n-1)}getTangent(e,t){const i=1e-4;let s=e-i,n=e+i;s<0&&(s=0),n>1&&(n=1);const a=this.getPoint(s),o=this.getPoint(n),l=t||(a.isVector2?new Z:new E);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new E,s=[],n=[],a=[],o=new E,l=new Le;for(let p=0;p<=e;p++){const m=p/e;s[p]=this.getTangentAt(m,new E)}n[0]=new E,a[0]=new E;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),n[0].crossVectors(s[0],o),a[0].crossVectors(s[0],n[0]);for(let p=1;p<=e;p++){if(n[p]=n[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(ze(s[p-1].dot(s[p]),-1,1));n[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(s[p],n[p])}if(t===!0){let p=Math.acos(ze(n[0].dot(n[e]),-1,1));p/=e,s[0].dot(o.crossVectors(n[0],n[e]))>0&&(p=-p);for(let m=1;m<=e;m++)n[m].applyMatrix4(l.makeRotationAxis(s[m],p*m)),a[m].crossVectors(s[m],n[m])}return{tangents:s,normals:n,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ka extends ci{constructor(e=0,t=0,i=1,s=1,n=0,a=Math.PI*2,o=!1,l=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=n,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Z){const i=t,s=Math.PI*2;let n=this.aEndAngle-this.aStartAngle;const a=Math.abs(n)<Number.EPSILON;for(;n<0;)n+=s;for(;n>s;)n-=s;n<Number.EPSILON&&(a?n=0:n=s),this.aClockwise===!0&&!a&&(n===s?n=-s:n=n-s);const o=this.aStartAngle+e*n;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Mu extends Ka{constructor(e,t,i,s,n,a){super(e,t,i,i,s,n,a);this.isArcCurve=!0,this.type="ArcCurve"}}function Ol(){let r=0,e=0,t=0,i=0;function s(n,a,o,l){r=n,e=o,t=-3*n+3*a-2*o-l,i=2*n-2*a+o+l}return{initCatmullRom:function(n,a,o,l,c){s(a,o,c*(o-n),c*(l-a))},initNonuniformCatmullRom:function(n,a,o,l,c,h,d){let u=(a-n)/c-(o-n)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,p*=h,s(a,o,u,p)},calc:function(n){const a=n*n,o=a*n;return r+e*n+t*a+i*o}}}const $a=new E,Fl=new Ol,Bl=new Ol,zl=new Ol;class Su extends ci{constructor(e=[],t=!1,i="centripetal",s=.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new E){const i=t,s=this.points,n=s.length,a=(n-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/n)+1)*n:l===0&&o===n-1&&(o=n-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%n]:($a.subVectors(s[0],s[1]).add(s[0]),c=$a);const d=s[o%n],u=s[(o+1)%n];if(this.closed||o+2<n?h=s[(o+2)%n]:($a.subVectors(s[n-1],s[n-2]).add(s[n-1]),h=$a),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(h),p);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Fl.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,v,g),Bl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,v,g),zl.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(Fl.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Bl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),zl.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Fl.calc(l),Bl.calc(l),zl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new E().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function bu(r,e,t,i,s){const n=(i-e)*.5,a=(s-t)*.5,o=r*r,l=r*o;return(2*t-2*i+n+a)*l+(-3*t+3*i-2*n-a)*o+n*r+t}function um(r,e){const t=1-r;return t*t*e}function dm(r,e){return 2*(1-r)*r*e}function pm(r,e){return r*r*e}function Qn(r,e,t,i){return um(r,e)+dm(r,t)+pm(r,i)}function fm(r,e){const t=1-r;return t*t*t*e}function mm(r,e){const t=1-r;return 3*t*t*r*e}function gm(r,e){return 3*(1-r)*r*r*e}function vm(r,e){return r*r*r*e}function er(r,e,t,i,s){return fm(r,e)+mm(r,t)+gm(r,i)+vm(r,s)}class kl extends ci{constructor(e=new Z,t=new Z,i=new Z,s=new Z){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Z){const i=t,s=this.v0,n=this.v1,a=this.v2,o=this.v3;return i.set(er(e,s.x,n.x,a.x,o.x),er(e,s.y,n.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Tu extends ci{constructor(e=new E,t=new E,i=new E,s=new E){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new E){const i=t,s=this.v0,n=this.v1,a=this.v2,o=this.v3;return i.set(er(e,s.x,n.x,a.x,o.x),er(e,s.y,n.y,a.y,o.y),er(e,s.z,n.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Vl extends ci{constructor(e=new Z,t=new Z){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Z){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wu extends ci{constructor(e=new E,t=new E){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hl extends ci{constructor(e=new Z,t=new Z,i=new Z){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Z){const i=t,s=this.v0,n=this.v1,a=this.v2;return i.set(Qn(e,s.x,n.x,a.x),Qn(e,s.y,n.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gl extends ci{constructor(e=new E,t=new E,i=new E){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new E){const i=t,s=this.v0,n=this.v1,a=this.v2;return i.set(Qn(e,s.x,n.x,a.x),Qn(e,s.y,n.y,a.y),Qn(e,s.z,n.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wl extends ci{constructor(e=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Z){const i=t,s=this.points,n=(s.length-1)*e,a=Math.floor(n),o=n-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(bu(o,l.x,c.x,h.x,d.x),bu(o,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Z().fromArray(s))}return this}}var Qa=Object.freeze({__proto__:null,ArcCurve:Mu,CatmullRomCurve3:Su,CubicBezierCurve:kl,CubicBezierCurve3:Tu,EllipseCurve:Ka,LineCurve:Vl,LineCurve3:wu,QuadraticBezierCurve:Hl,QuadraticBezierCurve3:Gl,SplineCurve:Wl});class Eu extends ci{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qa[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let n=0;for(;n<s.length;){if(s[n]>=i){const a=s[n]-i,o=this.curves[n],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}n++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,n=this.curves;s<n.length;s++){const a=n[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Qa[s.type]().fromJSON(s))}return this}}class tr extends Eu{constructor(e){super();this.type="Path",this.currentPoint=new Z,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Vl(this.currentPoint.clone(),new Z(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const n=new Hl(this.currentPoint.clone(),new Z(e,t),new Z(i,s));return this.curves.push(n),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,n,a){const o=new kl(this.currentPoint.clone(),new Z(e,t),new Z(i,s),new Z(n,a));return this.curves.push(o),this.currentPoint.set(n,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Wl(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,n,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,n,a),this}absarc(e,t,i,s,n,a){return this.absellipse(e,t,i,i,s,n,a),this}ellipse(e,t,i,s,n,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,n,a,o,l),this}absellipse(e,t,i,s,n,a,o,l){const c=new Ka(e,t,i,s,n,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ir extends Ge{constructor(e=[new Z(0,-.5),new Z(.5,0),new Z(0,.5)],t=12,i=0,s=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=ze(s,0,Math.PI*2);const n=[],a=[],o=[],l=[],c=[],h=1/t,d=new E,u=new Z,p=new E,m=new E,v=new E;let g=0,f=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,f=e[y+1].y-e[y].y,p.x=f*1,p.y=-g,p.z=f*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[y+1].x-e[y].x,f=e[y+1].y-e[y].y,p.x=f*1,p.y=-g,p.z=f*0,m.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(m)}for(let y=0;y<=t;y++){const x=i+y*h*s,_=Math.sin(x),C=Math.cos(x);for(let w=0;w<=e.length-1;w++){d.x=e[w].x*_,d.y=e[w].y,d.z=e[w].x*C,a.push(d.x,d.y,d.z),u.x=y/t,u.y=w/(e.length-1),o.push(u.x,u.y);const R=l[3*w+0]*_,I=l[3*w+1],T=l[3*w+0]*C;c.push(R,I,T)}}for(let y=0;y<t;y++)for(let x=0;x<e.length-1;x++){const _=x+y*e.length,C=_,w=_+e.length,R=_+e.length+1,I=_+1;n.push(C,w,I),n.push(R,I,w)}this.setIndex(n),this.setAttribute("position",new we(a,3)),this.setAttribute("uv",new we(o,2)),this.setAttribute("normal",new we(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.points,e.segments,e.phiStart,e.phiLength)}}class eo extends ir{constructor(e=1,t=1,i=4,s=8){const n=new tr;n.absarc(0,-t/2,e,Math.PI*1.5,0),n.absarc(0,t/2,e,0,Math.PI*.5),super(n.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new eo(e.radius,e.length,e.capSegments,e.radialSegments)}}class to extends Ge{constructor(e=1,t=32,i=0,s=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const n=[],a=[],o=[],l=[],c=new E,h=new Z;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const p=i+d/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)n.push(d,d+1,0);this.setIndex(n),this.setAttribute("position",new we(a,3)),this.setAttribute("normal",new we(o,3)),this.setAttribute("uv",new we(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class dn extends Ge{constructor(e=1,t=1,i=1,s=32,n=1,a=!1,o=0,l=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:n,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),n=Math.floor(n);const h=[],d=[],u=[],p=[];let m=0;const v=[],g=i/2;let f=0;y(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new we(d,3)),this.setAttribute("normal",new we(u,3)),this.setAttribute("uv",new we(p,2));function y(){const _=new E,C=new E;let w=0;const R=(t-e)/i;for(let I=0;I<=n;I++){const T=[],M=I/n,L=M*(t-e)+e;for(let F=0;F<=s;F++){const B=F/s,V=B*l+o,Y=Math.sin(V),W=Math.cos(V);C.x=L*Y,C.y=-M*i+g,C.z=L*W,d.push(C.x,C.y,C.z),_.set(Y,R,W).normalize(),u.push(_.x,_.y,_.z),p.push(B,1-M),T.push(m++)}v.push(T)}for(let I=0;I<s;I++)for(let T=0;T<n;T++){const M=v[T][I],L=v[T+1][I],F=v[T+1][I+1],B=v[T][I+1];(e>0||T!==0)&&(h.push(M,L,B),w+=3),(t>0||T!==n-1)&&(h.push(L,F,B),w+=3)}c.addGroup(f,w,0),f+=w}function x(_){const C=m,w=new Z,R=new E;let I=0;const T=_===!0?e:t,M=_===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,g*M,0),u.push(0,M,0),p.push(.5,.5),m++;const L=m;for(let F=0;F<=s;F++){const B=F/s*l+o,V=Math.cos(B),Y=Math.sin(B);R.x=T*Y,R.y=g*M,R.z=T*V,d.push(R.x,R.y,R.z),u.push(0,M,0),w.x=V*.5+.5,w.y=Y*.5*M+.5,p.push(w.x,w.y),m++}for(let F=0;F<s;F++){const B=C+F,V=L+F;_===!0?h.push(V,V+1,B):h.push(V+1,V,B),I+=3}c.addGroup(f,I,_===!0?1:2),f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class io extends dn{constructor(e=1,t=1,i=32,s=1,n=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,n,a,o);this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:n,thetaStart:a,thetaLength:o}}static fromJSON(e){return new io(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ji extends Ge{constructor(e=[],t=[],i=1,s=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const n=[],a=[];o(s),c(i),h(),this.setAttribute("position",new we(n,3)),this.setAttribute("normal",new we(n.slice(),3)),this.setAttribute("uv",new we(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const x=new E,_=new E,C=new E;for(let w=0;w<t.length;w+=3)p(t[w+0],x),p(t[w+1],_),p(t[w+2],C),l(x,_,C,y)}function l(y,x,_,C){const w=C+1,R=[];for(let I=0;I<=w;I++){R[I]=[];const T=y.clone().lerp(_,I/w),M=x.clone().lerp(_,I/w),L=w-I;for(let F=0;F<=L;F++)F===0&&I===w?R[I][F]=T:R[I][F]=T.clone().lerp(M,F/L)}for(let I=0;I<w;I++)for(let T=0;T<2*(w-I)-1;T++){const M=Math.floor(T/2);T%2==0?(u(R[I][M+1]),u(R[I+1][M]),u(R[I][M])):(u(R[I][M+1]),u(R[I+1][M+1]),u(R[I+1][M]))}}function c(y){const x=new E;for(let _=0;_<n.length;_+=3)x.x=n[_+0],x.y=n[_+1],x.z=n[_+2],x.normalize().multiplyScalar(y),n[_+0]=x.x,n[_+1]=x.y,n[_+2]=x.z}function h(){const y=new E;for(let x=0;x<n.length;x+=3){y.x=n[x+0],y.y=n[x+1],y.z=n[x+2];const _=g(y)/2/Math.PI+.5,C=f(y)/Math.PI+.5;a.push(_,1-C)}m(),d()}function d(){for(let y=0;y<a.length;y+=6){const x=a[y+0],_=a[y+2],C=a[y+4],w=Math.max(x,_,C),R=Math.min(x,_,C);w>.9&&R<.1&&(x<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),C<.2&&(a[y+4]+=1))}}function u(y){n.push(y.x,y.y,y.z)}function p(y,x){const _=y*3;x.x=e[_+0],x.y=e[_+1],x.z=e[_+2]}function m(){const y=new E,x=new E,_=new E,C=new E,w=new Z,R=new Z,I=new Z;for(let T=0,M=0;T<n.length;T+=9,M+=6){y.set(n[T+0],n[T+1],n[T+2]),x.set(n[T+3],n[T+4],n[T+5]),_.set(n[T+6],n[T+7],n[T+8]),w.set(a[M+0],a[M+1]),R.set(a[M+2],a[M+3]),I.set(a[M+4],a[M+5]),C.copy(y).add(x).add(_).divideScalar(3);const L=g(C);v(w,M+0,y,L),v(R,M+2,x,L),v(I,M+4,_,L)}}function v(y,x,_,C){C<0&&y.x===1&&(a[x]=y.x-1),_.x===0&&_.z===0&&(a[x]=C/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ji(e.vertices,e.indices,e.radius,e.details)}}class so extends Ji{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=1/i,n=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(n,a,e,t);this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new so(e.radius,e.detail)}}const no=new E,ro=new E,Xl=new E,ao=new Ht;class Au extends Ge{constructor(e=null,t=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(us*t),n=e.getIndex(),a=e.getAttribute("position"),o=n?n.count:a.count,l=[0,0,0],c=["a","b","c"],h=new Array(3),d={},u=[];for(let p=0;p<o;p+=3){n?(l[0]=n.getX(p),l[1]=n.getX(p+1),l[2]=n.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);const{a:m,b:v,c:g}=ao;if(m.fromBufferAttribute(a,l[0]),v.fromBufferAttribute(a,l[1]),g.fromBufferAttribute(a,l[2]),ao.getNormal(Xl),h[0]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,h[1]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,h[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let f=0;f<3;f++){const y=(f+1)%3,x=h[f],_=h[y],C=ao[c[f]],w=ao[c[y]],R=`${x}_${_}`,I=`${_}_${x}`;I in d&&d[I]?(Xl.dot(d[I].normal)<=s&&(u.push(C.x,C.y,C.z),u.push(w.x,w.y,w.z)),d[I]=null):R in d||(d[R]={index0:l[f],index1:l[y],normal:Xl.clone()})}}for(const p in d)if(d[p]){const{index0:m,index1:v}=d[p];no.fromBufferAttribute(a,m),ro.fromBufferAttribute(a,v),u.push(no.x,no.y,no.z),u.push(ro.x,ro.y,ro.z)}this.setAttribute("position",new we(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ms extends tr{constructor(e){super(e);this.uuid=qt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new tr().fromJSON(s))}return this}}const _m={triangulate:function(r,e,t=2){const i=e&&e.length,s=i?e[0]*t:r.length;let n=Ru(r,0,s,t,!0);const a=[];if(!n||n.next===n.prev)return a;let o,l,c,h,d,u,p;if(i&&(n=bm(r,e,n,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let m=t;m<s;m+=t)d=r[m],u=r[m+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return sr(n,a,t,o,l,p,0),a}};function Ru(r,e,t,i,s){let n,a;if(s===Dm(r,e,t,i)>0)for(n=e;n<t;n+=i)a=Pu(n,r[n],r[n+1],a);else for(n=t-i;n>=e;n-=i)a=Pu(n,r[n],r[n+1],a);return a&&oo(a,a.next)&&(rr(a),a=a.next),a}function Ss(r,e){if(!r)return r;e||(e=r);let t=r,i;do if(i=!1,!t.steiner&&(oo(t,t.next)||ht(t.prev,t,t.next)===0)){if(rr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function sr(r,e,t,i,s,n,a){if(!r)return;!a&&n&&Rm(r,i,s,n);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,n?ym(r,i,s,n):xm(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),rr(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=Mm(Ss(r),e,t),sr(r,e,t,i,s,n,2)):a===2&&Sm(r,e,t,i,s,n):sr(Ss(r),e,t,i,s,n,1);break}}}function xm(r){const e=r.prev,t=r,i=r.next;if(ht(e,t,i)>=0)return!1;const s=e.x,n=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=s<n?s<a?s:a:n<a?n:a,d=o<l?o<c?o:c:l<c?l:c,u=s>n?s>a?s:a:n>a?n:a,p=o>l?o>c?o:c:l>c?l:c;let m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=p&&pn(s,o,n,l,a,c,m.x,m.y)&&ht(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ym(r,e,t,i){const s=r.prev,n=r,a=r.next;if(ht(s,n,a)>=0)return!1;const o=s.x,l=n.x,c=a.x,h=s.y,d=n.y,u=a.y,p=o<l?o<c?o:c:l<c?l:c,m=h<d?h<u?h:u:d<u?d:u,v=o>l?o>c?o:c:l>c?l:c,g=h>d?h>u?h:u:d>u?d:u,f=jl(p,m,e,t,i),y=jl(v,g,e,t,i);let x=r.prevZ,_=r.nextZ;for(;x&&x.z>=f&&_&&_.z<=y;){if(x.x>=p&&x.x<=v&&x.y>=m&&x.y<=g&&x!==s&&x!==a&&pn(o,h,l,d,c,u,x.x,x.y)&&ht(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=p&&_.x<=v&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&pn(o,h,l,d,c,u,_.x,_.y)&&ht(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=f;){if(x.x>=p&&x.x<=v&&x.y>=m&&x.y<=g&&x!==s&&x!==a&&pn(o,h,l,d,c,u,x.x,x.y)&&ht(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=y;){if(_.x>=p&&_.x<=v&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&pn(o,h,l,d,c,u,_.x,_.y)&&ht(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Mm(r,e,t){let i=r;do{const s=i.prev,n=i.next.next;!oo(s,n)&&Cu(s,i,i.next,n)&&nr(s,n)&&nr(n,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(n.i/t|0),rr(i),rr(i.next),i=r=n),i=i.next}while(i!==r);return Ss(i)}function Sm(r,e,t,i,s,n){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Pm(a,o)){let l=Iu(a,o);a=Ss(a,a.next),l=Ss(l,l.next),sr(a,e,t,i,s,n,0),sr(l,e,t,i,s,n,0);return}o=o.next}a=a.next}while(a!==r)}function bm(r,e,t,i){const s=[];let n,a,o,l,c;for(n=0,a=e.length;n<a;n++)o=e[n]*i,l=n<a-1?e[n+1]*i:r.length,c=Ru(r,o,l,i,!1),c===c.next&&(c.steiner=!0),s.push(Im(c));for(s.sort(Tm),n=0;n<s.length;n++)t=wm(s[n],t);return t}function Tm(r,e){return r.x-e.x}function wm(r,e){const t=Em(r,e);if(!t)return e;const i=Iu(t,r);return Ss(i,i.next),Ss(t,t.next)}function Em(r,e){let t=e,i=-Infinity,s;const n=r.x,a=r.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const u=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>i&&(i=u,s=t.x<t.next.x?t:t.next,u===n))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,l=s.x,c=s.y;let h=Infinity,d;t=s;do n>=t.x&&t.x>=l&&n!==t.x&&pn(a<c?n:i,a,l,c,a<c?i:n,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(n-t.x),nr(t,r)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&Am(s,t)))&&(s=t,h=d)),t=t.next;while(t!==o);return s}function Am(r,e){return ht(r.prev,r,e.prev)<0&&ht(e.next,r,r.next)<0}function Rm(r,e,t,i){let s=r;do s.z===0&&(s.z=jl(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==r);s.prevZ.nextZ=null,s.prevZ=null,Cm(s)}function Cm(r){let e,t,i,s,n,a,o,l,c=1;do{for(t=r,r=null,n=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,o--):(s=i,i=i.nextZ,l--),n?n.nextZ=s:r=s,s.prevZ=n,n=s;t=i}n.nextZ=null,c*=2}while(a>1);return r}function jl(r,e,t,i,s){return r=(r-t)*s|0,e=(e-i)*s|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Im(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function pn(r,e,t,i,s,n,a,o){return(s-a)*(e-o)>=(r-a)*(n-o)&&(r-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(n-o)>=(s-a)*(i-o)}function Pm(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Lm(r,e)&&(nr(r,e)&&nr(e,r)&&Um(r,e)&&(ht(r.prev,r,e.prev)||ht(r,e.prev,e))||oo(r,e)&&ht(r.prev,r,r.next)>0&&ht(e.prev,e,e.next)>0)}function ht(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function oo(r,e){return r.x===e.x&&r.y===e.y}function Cu(r,e,t,i){const s=co(ht(r,e,t)),n=co(ht(r,e,i)),a=co(ht(t,i,r)),o=co(ht(t,i,e));return!!(s!==n&&a!==o||s===0&&lo(r,t,e)||n===0&&lo(r,i,e)||a===0&&lo(t,r,i)||o===0&&lo(t,e,i))}function lo(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function co(r){return r>0?1:r<0?-1:0}function Lm(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Cu(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function nr(r,e){return ht(r.prev,r,r.next)<0?ht(r,e,r.next)>=0&&ht(r,r.prev,e)>=0:ht(r,e,r.prev)<0||ht(r,r.next,e)<0}function Um(r,e){let t=r,i=!1;const s=(r.x+e.x)/2,n=(r.y+e.y)/2;do t.y>n!=t.next.y>n&&t.next.y!==t.y&&s<(t.next.x-t.x)*(n-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==r);return i}function Iu(r,e){const t=new ql(r.i,r.x,r.y),i=new ql(e.i,e.x,e.y),s=r.next,n=e.prev;return r.next=e,e.prev=r,t.next=s,s.prev=t,i.next=t,t.prev=i,n.next=i,i.prev=n,i}function Pu(r,e,t,i){const s=new ql(r,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function rr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ql(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Dm(r,e,t,i){let s=0;for(let n=e,a=t-i;n<t;n+=i)s+=(r[a]-r[n])*(r[n+1]+r[a+1]),a=n;return s}class yi{static area(e){const t=e.length;let i=0;for(let s=t-1,n=0;n<t;s=n++)i+=e[s].x*e[n].y-e[n].x*e[s].y;return i*.5}static isClockWise(e){return yi.area(e)<0}static triangulateShape(e,t){const i=[],s=[],n=[];Lu(e),Uu(i,e);let a=e.length;t.forEach(Lu);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Uu(i,t[l]);const o=_m.triangulate(i,s);for(let l=0;l<o.length;l+=3)n.push(o.slice(l,l+3));return n}}function Lu(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Uu(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class ho extends Ge{constructor(e=new Ms([new Z(.5,.5),new Z(-.5,.5),new Z(-.5,-.5),new Z(.5,-.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],n=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new we(s,3)),this.setAttribute("uv",new we(n,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Nm;let x,_=!1,C,w,R,I;f&&(x=f.getSpacedPoints(h),_=!0,u=!1,C=f.computeFrenetFrames(h,!1),w=new E,R=new E,I=new E),u||(g=0,p=0,m=0,v=0);const T=o.extractPoints(c);let M=T.shape;const L=T.holes;if(!yi.isClockWise(M)){M=M.reverse();for(let ee=0,$=L.length;ee<$;ee++){const re=L[ee];yi.isClockWise(re)&&(L[ee]=re.reverse())}}const F=yi.triangulateShape(M,L),B=M;for(let ee=0,$=L.length;ee<$;ee++){const re=L[ee];M=M.concat(re)}function V(ee,$,re){return $||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector($,re)}const Y=M.length,W=F.length;function te(ee,$,re){let P,pe,ye;const Se=ee.x-$.x,oe=ee.y-$.y,He=re.x-ee.x,ue=re.y-ee.y,A=Se*Se+oe*oe,S=Se*ue-oe*He;if(Math.abs(S)>Number.EPSILON){const O=Math.sqrt(A),q=Math.sqrt(He*He+ue*ue),K=$.x-oe/O,j=$.y+Se/O,Ae=re.x-ue/q,he=re.y+He/q,Me=((Ae-K)*ue-(he-j)*He)/(Se*ue-oe*He);P=K+Se*Me-ee.x,pe=j+oe*Me-ee.y;const qe=P*P+pe*pe;if(qe<=2)return new Z(P,pe);ye=Math.sqrt(qe/2)}else{let O=!1;Se>Number.EPSILON?He>Number.EPSILON&&(O=!0):Se<-Number.EPSILON?He<-Number.EPSILON&&(O=!0):Math.sign(oe)===Math.sign(ue)&&(O=!0),O?(P=-oe,pe=Se,ye=Math.sqrt(A)):(P=Se,pe=oe,ye=Math.sqrt(A/2))}return new Z(P/ye,pe/ye)}const G=[];for(let ee=0,$=B.length,re=$-1,P=ee+1;ee<$;ee++,re++,P++)re===$&&(re=0),P===$&&(P=0),G[ee]=te(B[ee],B[re],B[P]);const ne=[];let ge,Ue=G.concat();for(let ee=0,$=L.length;ee<$;ee++){const re=L[ee];ge=[];for(let P=0,pe=re.length,ye=pe-1,Se=P+1;P<pe;P++,ye++,Se++)ye===pe&&(ye=0),Se===pe&&(Se=0),ge[P]=te(re[P],re[ye],re[Se]);ne.push(ge),Ue=Ue.concat(ge)}for(let ee=0;ee<g;ee++){const $=ee/g,re=p*Math.cos($*Math.PI/2),P=m*Math.sin($*Math.PI/2)+v;for(let pe=0,ye=B.length;pe<ye;pe++){const Se=V(B[pe],G[pe],P);_e(Se.x,Se.y,-re)}for(let pe=0,ye=L.length;pe<ye;pe++){const Se=L[pe];ge=ne[pe];for(let oe=0,He=Se.length;oe<He;oe++){const ue=V(Se[oe],ge[oe],P);_e(ue.x,ue.y,-re)}}}const Xe=m+v;for(let ee=0;ee<Y;ee++){const $=u?V(M[ee],Ue[ee],Xe):M[ee];_?(R.copy(C.normals[0]).multiplyScalar($.x),w.copy(C.binormals[0]).multiplyScalar($.y),I.copy(x[0]).add(R).add(w),_e(I.x,I.y,I.z)):_e($.x,$.y,0)}for(let ee=1;ee<=h;ee++)for(let $=0;$<Y;$++){const re=u?V(M[$],Ue[$],Xe):M[$];_?(R.copy(C.normals[ee]).multiplyScalar(re.x),w.copy(C.binormals[ee]).multiplyScalar(re.y),I.copy(x[ee]).add(R).add(w),_e(I.x,I.y,I.z)):_e(re.x,re.y,d/h*ee)}for(let ee=g-1;ee>=0;ee--){const $=ee/g,re=p*Math.cos($*Math.PI/2),P=m*Math.sin($*Math.PI/2)+v;for(let pe=0,ye=B.length;pe<ye;pe++){const Se=V(B[pe],G[pe],P);_e(Se.x,Se.y,d+re)}for(let pe=0,ye=L.length;pe<ye;pe++){const Se=L[pe];ge=ne[pe];for(let oe=0,He=Se.length;oe<He;oe++){const ue=V(Se[oe],ge[oe],P);_?_e(ue.x,ue.y+x[h-1].y,x[h-1].x+re):_e(ue.x,ue.y,d+re)}}}tt(),X();function tt(){const ee=s.length/3;if(u){let $=0,re=Y*$;for(let P=0;P<W;P++){const pe=F[P];ae(pe[2]+re,pe[1]+re,pe[0]+re)}$=h+g*2,re=Y*$;for(let P=0;P<W;P++){const pe=F[P];ae(pe[0]+re,pe[1]+re,pe[2]+re)}}else{for(let $=0;$<W;$++){const re=F[$];ae(re[2],re[1],re[0])}for(let $=0;$<W;$++){const re=F[$];ae(re[0]+Y*h,re[1]+Y*h,re[2]+Y*h)}}i.addGroup(ee,s.length/3-ee,0)}function X(){const ee=s.length/3;let $=0;ie(B,$),$+=B.length;for(let re=0,P=L.length;re<P;re++){const pe=L[re];ie(pe,$),$+=pe.length}i.addGroup(ee,s.length/3-ee,1)}function ie(ee,$){let re=ee.length;for(;--re>=0;){const P=re;let pe=re-1;pe<0&&(pe=ee.length-1);for(let ye=0,Se=h+g*2;ye<Se;ye++){const oe=Y*ye,He=Y*(ye+1),ue=$+P+oe,A=$+pe+oe,S=$+pe+He,O=$+P+He;Ie(ue,A,S,O)}}}function _e(ee,$,re){l.push(ee),l.push($),l.push(re)}function ae(ee,$,re){Re(ee),Re($),Re(re);const P=s.length/3,pe=y.generateTopUV(i,s,P-3,P-2,P-1);De(pe[0]),De(pe[1]),De(pe[2])}function Ie(ee,$,re,P){Re(ee),Re($),Re(P),Re($),Re(re),Re(P);const pe=s.length/3,ye=y.generateSideWallUV(i,s,pe-6,pe-3,pe-2,pe-1);De(ye[0]),De(ye[1]),De(ye[3]),De(ye[1]),De(ye[2]),De(ye[3])}function Re(ee){s.push(l[ee*3+0]),s.push(l[ee*3+1]),s.push(l[ee*3+2])}function De(ee){n.push(ee.x),n.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Om(t,i,e)}static fromJSON(e,t){const i=[];for(let n=0,a=e.shapes.length;n<a;n++){const o=t[e.shapes[n]];i.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Qa[s.type]().fromJSON(s)),new ho(i,e.options)}}const Nm={generateTopUV:function(r,e,t,i,s){const n=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new Z(n,a),new Z(o,l),new Z(c,h)]},generateSideWallUV:function(r,e,t,i,s,n){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[s*3],p=e[s*3+1],m=e[s*3+2],v=e[n*3],g=e[n*3+1],f=e[n*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Z(a,1-l),new Z(c,1-d),new Z(u,1-m),new Z(v,1-f)]:[new Z(o,1-l),new Z(h,1-d),new Z(p,1-m),new Z(g,1-f)]}};function Om(r,e,t){if(t.shapes=[],Array.isArray(r))for(let i=0,s=r.length;i<s;i++){const n=r[i];t.shapes.push(n.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class uo extends Ji{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],n=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,n,e,t);this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new uo(e.radius,e.detail)}}class ar extends Ji{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t);this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ar(e.radius,e.detail)}}class fn extends Ge{constructor(e=1,t=1,i=1,s=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const n=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,p=[],m=[],v=[],g=[];for(let f=0;f<h;f++){const y=f*u-a;for(let x=0;x<c;x++){const _=x*d-n;m.push(_,-y,0),v.push(0,0,1),g.push(x/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const x=y+c*f,_=y+c*(f+1),C=y+1+c*(f+1),w=y+1+c*f;p.push(x,_,w),p.push(_,C,w)}this.setIndex(p),this.setAttribute("position",new we(m,3)),this.setAttribute("normal",new we(v,3)),this.setAttribute("uv",new we(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fn(e.width,e.height,e.widthSegments,e.heightSegments)}}class po extends Ge{constructor(e=.5,t=1,i=32,s=1,n=0,a=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:n,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let d=e;const u=(t-e)/s,p=new E,m=new Z;for(let v=0;v<=s;v++){for(let g=0;g<=i;g++){const f=n+g/i*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,h.push(m.x,m.y)}d+=u}for(let v=0;v<s;v++){const g=v*(i+1);for(let f=0;f<i;f++){const y=f+g,x=y,_=y+i+1,C=y+i+2,w=y+1;o.push(x,_,w),o.push(_,C,w)}}this.setIndex(o),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(c,3)),this.setAttribute("uv",new we(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class fo extends Ge{constructor(e=new Ms([new Z(0,.5),new Z(-.5,-.5),new Z(.5,-.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],n=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new we(s,3)),this.setAttribute("normal",new we(n,3)),this.setAttribute("uv",new we(a,2));function c(h){const d=s.length/3,u=h.extractPoints(t);let p=u.shape;const m=u.holes;yi.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,f=m.length;g<f;g++){const y=m[g];yi.isClockWise(y)===!0&&(m[g]=y.reverse())}const v=yi.triangulateShape(p,m);for(let g=0,f=m.length;g<f;g++){const y=m[g];p=p.concat(y)}for(let g=0,f=p.length;g<f;g++){const y=p[g];s.push(y.x,y.y,0),n.push(0,0,1),a.push(y.x,y.y)}for(let g=0,f=v.length;g<f;g++){const y=v[g],x=y[0]+d,_=y[1]+d,C=y[2]+d;i.push(x,_,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Fm(t,e)}static fromJSON(e,t){const i=[];for(let s=0,n=e.shapes.length;s<n;s++){const a=t[e.shapes[s]];i.push(a)}return new fo(i,e.curveSegments)}}function Fm(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,i=r.length;t<i;t++){const s=r[t];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e}class or extends Ge{constructor(e=1,t=32,i=16,s=0,n=Math.PI*2,a=0,o=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:n,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new E,u=new E,p=[],m=[],v=[],g=[];for(let f=0;f<=i;f++){const y=[],x=f/i;let _=0;f===0&&a===0?_=.5/t:f===i&&l===Math.PI&&(_=-.5/t);for(let C=0;C<=t;C++){const w=C/t;d.x=-e*Math.cos(s+w*n)*Math.sin(a+x*o),d.y=e*Math.cos(a+x*o),d.z=e*Math.sin(s+w*n)*Math.sin(a+x*o),m.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),g.push(w+_,1-x),y.push(c++)}h.push(y)}for(let f=0;f<i;f++)for(let y=0;y<t;y++){const x=h[f][y+1],_=h[f][y],C=h[f+1][y],w=h[f+1][y+1];(f!==0||a>0)&&p.push(x,_,w),(f!==i-1||l<Math.PI)&&p.push(_,C,w)}this.setIndex(p),this.setAttribute("position",new we(m,3)),this.setAttribute("normal",new we(v,3)),this.setAttribute("uv",new we(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new or(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class mo extends Ji{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t);this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new mo(e.radius,e.detail)}}class go extends Ge{constructor(e=1,t=.4,i=12,s=48,n=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:n},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new E,d=new E,u=new E;for(let p=0;p<=i;p++)for(let m=0;m<=s;m++){const v=m/s*n,g=p/i*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(v),d.y=(e+t*Math.cos(g))*Math.sin(v),d.z=t*Math.sin(g),o.push(d.x,d.y,d.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(m/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let m=1;m<=s;m++){const v=(s+1)*p+m-1,g=(s+1)*(p-1)+m-1,f=(s+1)*(p-1)+m,y=(s+1)*p+m;a.push(v,g,y),a.push(g,f,y)}this.setIndex(a),this.setAttribute("position",new we(o,3)),this.setAttribute("normal",new we(l,3)),this.setAttribute("uv",new we(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class vo extends Ge{constructor(e=1,t=.4,i=64,s=8,n=2,a=3){super();this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:s,p:n,q:a},i=Math.floor(i),s=Math.floor(s);const o=[],l=[],c=[],h=[],d=new E,u=new E,p=new E,m=new E,v=new E,g=new E,f=new E;for(let x=0;x<=i;++x){const _=x/i*n*Math.PI*2;y(_,n,a,e,p),y(_+.01,n,a,e,m),g.subVectors(m,p),f.addVectors(m,p),v.crossVectors(g,f),f.crossVectors(v,g),v.normalize(),f.normalize();for(let C=0;C<=s;++C){const w=C/s*Math.PI*2,R=-t*Math.cos(w),I=t*Math.sin(w);d.x=p.x+(R*f.x+I*v.x),d.y=p.y+(R*f.y+I*v.y),d.z=p.z+(R*f.z+I*v.z),l.push(d.x,d.y,d.z),u.subVectors(d,p).normalize(),c.push(u.x,u.y,u.z),h.push(x/i),h.push(C/s)}}for(let x=1;x<=i;x++)for(let _=1;_<=s;_++){const C=(s+1)*(x-1)+(_-1),w=(s+1)*x+(_-1),R=(s+1)*x+_,I=(s+1)*(x-1)+_;o.push(C,w,I),o.push(w,R,I)}this.setIndex(o),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(c,3)),this.setAttribute("uv",new we(h,2));function y(x,_,C,w,R){const I=Math.cos(x),T=Math.sin(x),M=C/_*x,L=Math.cos(M);R.x=w*(2+L)*.5*I,R.y=w*(2+L)*T*.5,R.z=w*Math.sin(M)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class _o extends Ge{constructor(e=new Gl(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,i=1,s=8,n=!1){super();this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:n};const a=e.computeFrenetFrames(t,n);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new E,l=new E,c=new Z;let h=new E;const d=[],u=[],p=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new we(d,3)),this.setAttribute("normal",new we(u,3)),this.setAttribute("uv",new we(p,2));function v(){for(let x=0;x<t;x++)g(x);g(n===!1?t:0),y(),f()}function g(x){h=e.getPointAt(x/t,h);const _=a.normals[x],C=a.binormals[x];for(let w=0;w<=s;w++){const R=w/s*Math.PI*2,I=Math.sin(R),T=-Math.cos(R);l.x=T*_.x+I*C.x,l.y=T*_.y+I*C.y,l.z=T*_.z+I*C.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,d.push(o.x,o.y,o.z)}}function f(){for(let x=1;x<=t;x++)for(let _=1;_<=s;_++){const C=(s+1)*(x-1)+(_-1),w=(s+1)*x+(_-1),R=(s+1)*x+_,I=(s+1)*(x-1)+_;m.push(C,w,I),m.push(w,R,I)}}function y(){for(let x=0;x<=t;x++)for(let _=0;_<=s;_++)c.x=x/t,c.y=_/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new _o(new Qa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Du extends Ge{constructor(e=null){super();if(this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,s=new E,n=new E;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const d=l[c],u=d.start,p=d.count;for(let m=u,v=u+p;m<v;m+=3)for(let g=0;g<3;g++){const f=o.getX(m+g),y=o.getX(m+(g+1)%3);s.fromBufferAttribute(a,f),n.fromBufferAttribute(a,y),Nu(s,n,i)===!0&&(t.push(s.x,s.y,s.z),t.push(n.x,n.y,n.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,d=3*o+(c+1)%3;s.fromBufferAttribute(a,h),n.fromBufferAttribute(a,d),Nu(s,n,i)===!0&&(t.push(s.x,s.y,s.z),t.push(n.x,n.y,n.z))}}this.setAttribute("position",new we(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Nu(r,e,t){const i=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}var Ou=Object.freeze({__proto__:null,BoxGeometry:gs,CapsuleGeometry:eo,CircleGeometry:to,ConeGeometry:io,CylinderGeometry:dn,DodecahedronGeometry:so,EdgesGeometry:Au,ExtrudeGeometry:ho,IcosahedronGeometry:uo,LatheGeometry:ir,OctahedronGeometry:ar,PlaneGeometry:fn,PolyhedronGeometry:Ji,RingGeometry:po,ShapeGeometry:fo,SphereGeometry:or,TetrahedronGeometry:mo,TorusGeometry:go,TorusKnotGeometry:vo,TubeGeometry:_o,WireframeGeometry:Du});class Fu extends Ct{constructor(e){super();this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new me(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Bu extends li{constructor(e){super(e);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Yl extends Ct{constructor(e){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ki,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zu extends Yl{constructor(e){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Z(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=Infinity,this.attenuationColor=new me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ku extends Ct{constructor(e){super();this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new me(16777215),this.specular=new me(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ki,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=xn,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vu extends Ct{constructor(e){super();this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new me(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ki,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Hu extends Ct{constructor(e){super();this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ki,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Gu extends Ct{constructor(e){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ki,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=xn,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zl extends Ct{constructor(e){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jl extends Ct{constructor(e){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Wu extends Ct{constructor(e){super();this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new me(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ki,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xu extends Bt{constructor(e){super();this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function bs(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function ju(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function qu(r){function e(s,n){return r[s]-r[n]}const t=r.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Kl(r,e,t){const i=r.length,s=new r.constructor(i);for(let n=0,a=0;a!==i;++n){const o=t[n]*e;for(let l=0;l!==e;++l)s[a++]=r[o+l]}return s}function $l(r,e,t,i){let s=1,n=r[0];for(;n!==void 0&&n[i]===void 0;)n=r[s++];if(n===void 0)return;let a=n[i];if(a!==void 0)if(Array.isArray(a))do a=n[i],a!==void 0&&(e.push(n.time),t.push.apply(t,a)),n=r[s++];while(n!==void 0);else if(a.toArray!==void 0)do a=n[i],a!==void 0&&(e.push(n.time),a.toArray(t,t.length)),n=r[s++];while(n!==void 0);else do a=n[i],a!==void 0&&(e.push(n.time),t.push(a)),n=r[s++];while(n!==void 0)}function Bm(r,e,t,i,s=30){const n=r.clone();n.name=e;const a=[];for(let l=0;l<n.tracks.length;++l){const c=n.tracks[l],h=c.getValueSize(),d=[],u=[];for(let p=0;p<c.times.length;++p){const m=c.times[p]*s;if(!(m<t||m>=i)){d.push(c.times[p]);for(let v=0;v<h;++v)u.push(c.values[p*h+v])}}d.length!==0&&(c.times=bs(d,c.times.constructor),c.values=bs(u,c.values.constructor),a.push(c))}n.tracks=a;let o=Infinity;for(let l=0;l<n.tracks.length;++l)o>n.tracks[l].times[0]&&(o=n.tracks[l].times[0]);for(let l=0;l<n.tracks.length;++l)n.tracks[l].shift(-1*o);return n.resetDuration(),n}function zm(r,e=0,t=r,i=30){i<=0&&(i=30);const s=t.tracks.length,n=e/i;for(let a=0;a<s;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(f){return f.name===o.name&&f.ValueTypeName===l});if(c===void 0)continue;let h=0;const d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let u=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=p/3);const m=o.times.length-1;let v;if(n<=o.times[0]){const f=h,y=d-h;v=o.values.slice(f,y)}else if(n>=o.times[m]){const f=m*d+h,y=f+d-h;v=o.values.slice(f,y)}else{const f=o.createInterpolant(),y=h,x=d-h;f.evaluate(n),v=f.resultBuffer.slice(y,x)}l==="quaternion"&&new Vt().fromArray(v).normalize().conjugate().toArray(v);const g=c.times.length;for(let f=0;f<g;++f){const y=f*p+u;if(l==="quaternion")Vt.multiplyQuaternionsFlat(c.values,y,v,0,c.values,y);else{const x=p-u*2;for(let _=0;_<x;++_)c.values[y+_]-=v[_]}}}return r.blendMode=Ko,r}const km={convertArray:bs,isTypedArray:ju,getKeyframeOrder:qu,sortedArray:Kl,flattenJSON:$l,subclip:Bm,makeClipAdditive:zm};class lr{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],n=t[i-1];e:{t:{let a;i:{s:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<n)break s;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(n=s,s=t[++i],e<s)break t}a=t.length;break i}if(!(e>=n)){const o=t[1];e<o&&(i=2,n=o);for(let l=i-2;;){if(n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=n,n=t[--i-1],e>=n)break t}a=i,i=0;break i}break e}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],n=t[i-1],n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,n,s)}return this.interpolate_(i,n,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,n=e*s;for(let a=0;a!==s;++a)t[a]=i[n+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Yu extends lr{constructor(e,t,i,s){super(e,t,i,s);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:os,endingEnd:os}}intervalChanged_(e,t,i){const s=this.parameterPositions;let n=e-2,a=e+1,o=s[n],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ls:n=e,o=2*t-i;break;case Ln:n=s.length-2,o=t+s[n]-s[n+1];break;default:n=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ls:a=e,l=2*i-t;break;case Ln:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=n*h,this._offsetNext=a*h}interpolate_(e,t,i,s){const n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,m=(i-t)/(s-t),v=m*m,g=v*m,f=-u*g+2*u*v-u*m,y=(1+u)*g+(-1.5-2*u)*v+(-.5+u)*m+1,x=(-1-p)*g+(1.5+p)*v+.5*m,_=p*g-p*v;for(let C=0;C!==o;++C)n[C]=f*a[h+C]+y*a[c+C]+x*a[l+C]+_*a[d+C];return n}}class Ql extends lr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)n[u]=a[c+u]*d+a[l+u]*h;return n}}class Zu extends lr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class hi{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=bs(t,this.TimeBufferType),this.values=bs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:bs(e.times,Array),values:bs(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Zu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Pn:t=this.InterpolantFactoryMethodDiscrete;break;case oa:t=this.InterpolantFactoryMethodLinear;break;case la:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pn;case this.InterpolantFactoryMethodLinear:return oa;case this.InterpolantFactoryMethodSmooth:return la}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let n=0,a=s-1;for(;n!==s&&i[n]<e;)++n;for(;a!==-1&&i[a]>t;)--a;if(++a,n!==0||a!==s){n>=a&&(a=Math.max(a,1),n=a-1);const o=this.getValueSize();this.times=i.slice(n,a),this.values=this.values.slice(n*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,n=i.length;n===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==n;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&ju(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===la,n=e.length-1;let a=1;for(let o=1;o<n;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{const d=o*i,u=d-i,p=d+i;for(let m=0;m!==i;++m){const v=t[d+m];if(v!==t[u+m]||v!==t[p+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*i,u=a*i;for(let p=0;p!==i;++p)t[u+p]=t[d+p]}++a}}if(n>0){e[a]=e[n];for(let o=n*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}hi.prototype.TimeBufferType=Float32Array,hi.prototype.ValueBufferType=Float32Array,hi.prototype.DefaultInterpolation=oa;class Ts extends hi{constructor(e,t,i){super(e,t,i)}}Ts.prototype.ValueTypeName="bool",Ts.prototype.ValueBufferType=Array,Ts.prototype.DefaultInterpolation=Pn,Ts.prototype.InterpolantFactoryMethodLinear=void 0,Ts.prototype.InterpolantFactoryMethodSmooth=void 0;class ec extends hi{}ec.prototype.ValueTypeName="color";class cr extends hi{}cr.prototype.ValueTypeName="number";class Ju extends lr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Vt.slerpFlat(n,0,a,c-o,a,c,l);return n}}class hr extends hi{InterpolantFactoryMethodLinear(e){return new Ju(this.times,this.values,this.getValueSize(),e)}}hr.prototype.ValueTypeName="quaternion",hr.prototype.InterpolantFactoryMethodSmooth=void 0;class ws extends hi{constructor(e,t,i){super(e,t,i)}}ws.prototype.ValueTypeName="string",ws.prototype.ValueBufferType=Array,ws.prototype.DefaultInterpolation=Pn,ws.prototype.InterpolantFactoryMethodLinear=void 0,ws.prototype.InterpolantFactoryMethodSmooth=void 0;class ur extends hi{}ur.prototype.ValueTypeName="vector";class dr{constructor(e="",t=-1,i=[],s=ca){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=qt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(Hm(i[a]).scale(s));const n=new this(e.name,e.duration,t,e.blendMode);return n.uuid=e.uuid,n}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let n=0,a=i.length;n!==a;++n)t.push(hi.toJSON(i[n]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const n=t.length,a=[];for(let o=0;o<n;o++){let l=[],c=[];l.push((o+n-1)%n,o,(o+1)%n),c.push(0,1,0);const h=qu(l);l=Kl(l,1,h),c=Kl(c,1,h),!s&&l[0]===0&&(l.push(n),c.push(c[0])),a.push(new cr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},n=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(n);if(h&&h.length>1){const d=h[1];let u=s[d];u||(s[d]=u=[]),u.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,d,u,p,m){if(u.length!==0){const v=[],g=[];$l(u,v,g,p),v.length!==0&&m.push(new h(d,v,g))}},s=[],n=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const u={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let m=0;m<d[p].morphTargets.length;m++)u[d[p].morphTargets[m]]=-1;for(const m in u){const v=[],g=[];for(let f=0;f!==d[p].morphTargets.length;++f){const y=d[p];v.push(y.time),g.push(y.morphTarget===m?1:0)}s.push(new cr(".morphTargetInfluence["+m+"]",v,g))}l=u.length*a}else{const u=".bones["+t[h].name+"]";i(ur,u+".position",d,"pos",s),i(hr,u+".quaternion",d,"rot",s),i(ur,u+".scale",d,"scl",s)}}return s.length===0?null:new this(n,l,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const n=this.tracks[i];t=Math.max(t,n.times[n.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Vm(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return cr;case"vector":case"vector2":case"vector3":case"vector4":return ur;case"color":return ec;case"quaternion":return hr;case"bool":case"boolean":return Ts;case"string":return ws}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Hm(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Vm(r.type);if(r.times===void 0){const t=[],i=[];$l(r.keys,t,i,"value"),r.times=t,r.values=i}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Ni={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class tc{constructor(e,t,i){const s=this;let n=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,n===!1&&s.onStart!==void 0&&s.onStart(h,a,o),n=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(n=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const p=c[d],m=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}}const Ku=new tc;class Xt{constructor(e){this.manager=e!==void 0?e:Ku,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,n){i.load(e,s,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Xt.DEFAULT_MATERIAL_NAME="__DEFAULT";const Oi={};class Gm extends Error{constructor(e,t){super(e);this.response=t}}class Fi extends Xt{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=Ni.get(e);if(n!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(n),this.manager.itemEnd(e)},0),n;if(Oi[e]!==void 0){Oi[e].push({onLoad:t,onProgress:i,onError:s});return}Oi[e]=[],Oi[e].push({onLoad:t,onProgress:i,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;const h=Oi[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=u?parseInt(u):0,m=p!==0;let v=0;const g=new ReadableStream({start(f){y();function y(){d.read().then(({done:x,value:_})=>{if(x)f.close();else{v+=_.byteLength;const C=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:p});for(let w=0,R=h.length;w<R;w++){const I=h[w];I.onProgress&&I.onProgress(C)}f.enqueue(_),y()}},x=>{f.error(x)})}}});return new Response(g)}else throw new Gm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,u=new TextDecoder(d);return c.arrayBuffer().then(p=>u.decode(p))}}}).then(c=>{Ni.add(e,c);const h=Oi[e];delete Oi[e];for(let d=0,u=h.length;d<u;d++){const p=h[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=Oi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Oi[e];for(let d=0,u=h.length;d<u;d++){const p=h[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Wm extends Xt{constructor(e){super(e)}load(e,t,i,s){const n=this,a=new Fi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(n.parse(JSON.parse(o)))}catch(l){s?s(l):console.error(l),n.manager.itemError(e)}},i,s)}parse(e){const t=[];for(let i=0;i<e.length;i++){const s=dr.parse(e[i]);t.push(s)}return t}}class Xm extends Xt{constructor(e){super(e)}load(e,t,i,s){const n=this,a=[],o=new Ja,l=new Fi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(n.withCredentials);let c=0;function h(d){l.load(e[d],function(u){const p=n.parse(u,!0);a[d]={width:p.width,height:p.height,format:p.format,mipmaps:p.mipmaps},c+=1,c===6&&(p.mipmapCount===1&&(o.minFilter=_t),o.image=a,o.format=p.format,o.needsUpdate=!0,t&&t(o))},i,s)}if(Array.isArray(e))for(let d=0,u=e.length;d<u;++d)h(d);else l.load(e,function(d){const u=n.parse(d,!0);if(u.isCubemap){const p=u.mipmaps.length/u.mipmapCount;for(let m=0;m<p;m++){a[m]={mipmaps:[]};for(let v=0;v<u.mipmapCount;v++)a[m].mipmaps.push(u.mipmaps[m*u.mipmapCount+v]),a[m].format=u.format,a[m].width=u.width,a[m].height=u.height}o.image=a}else o.image.width=u.width,o.image.height=u.height,o.mipmaps=u.mipmaps;u.mipmapCount===1&&(o.minFilter=_t),o.format=u.format,o.needsUpdate=!0,t&&t(o)},i,s);return o}}class pr extends Xt{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,a=Ni.get(e);if(a!==void 0)return n.manager.itemStart(e),setTimeout(function(){t&&t(a),n.manager.itemEnd(e)},0),a;const o=Fn("img");function l(){h(),Ni.add(e,this),t&&t(this),n.manager.itemEnd(e)}function c(d){h(),s&&s(d),n.manager.itemError(e),n.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),n.manager.itemStart(e),o.src=e,o}}class jm extends Xt{constructor(e){super(e)}load(e,t,i,s){const n=new Wn;n.colorSpace=kt;const a=new pr(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){n.images[c]=h,o++,o===6&&(n.needsUpdate=!0,t&&t(n))},void 0,s)}for(let c=0;c<e.length;++c)l(c);return n}}class qm extends Xt{constructor(e){super(e)}load(e,t,i,s){const n=this,a=new _i,o=new Fi(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(n.withCredentials),o.load(e,function(l){let c;try{c=n.parse(l)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Qt,a.wrapT=c.wrapT!==void 0?c.wrapT:Qt,a.magFilter=c.magFilter!==void 0?c.magFilter:_t,a.minFilter=c.minFilter!==void 0?c.minFilter:_t,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=fi),c.mipmapCount===1&&(a.minFilter=_t),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},i,s),a}}class Ym extends Xt{constructor(e){super(e)}load(e,t,i,s){const n=new dt,a=new pr(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){n.image=o,n.needsUpdate=!0,t!==void 0&&t(n)},i,s),n}}class Ki extends $e{constructor(e,t=1){super();this.isLight=!0,this.type="Light",this.color=new me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class $u extends Ki{constructor(e,t,i){super(e,i);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ic=new Le,Qu=new E,ed=new E;class sc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jn,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Qu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qu),ed.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ed),t.updateMatrixWorld(),ic.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ic),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ic)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Zm extends sc{constructor(){super(new Tt(50,1,.5,500));this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=ks*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,n=e.distance||t.far;(i!==t.fov||s!==t.aspect||n!==t.far)&&(t.fov=i,t.aspect=s,t.far=n,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class td extends Ki{constructor(e,t,i=0,s=Math.PI/3,n=0,a=2){super(e,t);this.isSpotLight=!0,this.type="SpotLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.distance=i,this.angle=s,this.penumbra=n,this.decay=a,this.map=null,this.shadow=new Zm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const id=new Le,fr=new E,nc=new E;class Jm extends sc{constructor(){super(new Tt(90,1,.5,500));this.isPointLightShadow=!0,this._frameExtents=new Z(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,n=e.distance||i.far;n!==i.far&&(i.far=n,i.updateProjectionMatrix()),fr.setFromMatrixPosition(e.matrixWorld),i.position.copy(fr),nc.copy(i.position),nc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(nc),i.updateMatrixWorld(),s.makeTranslation(-fr.x,-fr.y,-fr.z),id.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(id)}}class sd extends Ki{constructor(e,t,i=0,s=2){super(e,t);this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Jm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class xo extends Ca{constructor(e=-1,t=1,i=1,s=-1,n=.1,a=2e3){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=n,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,n,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let n=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=c*this.view.offsetX,a=n+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(n,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Km extends sc{constructor(){super(new xo(-5,5,5,-5,.5,500));this.isDirectionalLightShadow=!0}}class nd extends Ki{constructor(e,t){super(e,t);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new Km}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rd extends Ki{constructor(e,t){super(e,t);this.isAmbientLight=!0,this.type="AmbientLight"}}class ad extends Ki{constructor(e,t,i=10,s=10){super(e,t);this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class od{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new E)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const i=e.x,s=e.y,n=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*s),t.addScaledVector(a[2],.488603*n),t.addScaledVector(a[3],.488603*i),t.addScaledVector(a[4],1.092548*(i*s)),t.addScaledVector(a[5],1.092548*(s*n)),t.addScaledVector(a[6],.315392*(3*n*n-1)),t.addScaledVector(a[7],1.092548*(i*n)),t.addScaledVector(a[8],.546274*(i*i-s*s)),t}getIrradianceAt(e,t){const i=e.x,s=e.y,n=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*s),t.addScaledVector(a[2],2*.511664*n),t.addScaledVector(a[3],2*.511664*i),t.addScaledVector(a[4],2*.429043*i*s),t.addScaledVector(a[5],2*.429043*s*n),t.addScaledVector(a[6],.743125*n*n-.247708),t.addScaledVector(a[7],2*.429043*i*n),t.addScaledVector(a[8],.429043*(i*i-s*s)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const i=this.coefficients;for(let s=0;s<9;s++)i[s].fromArray(e,t+s*3);return this}toArray(e=[],t=0){const i=this.coefficients;for(let s=0;s<9;s++)i[s].toArray(e,t+s*3);return e}static getBasisAt(e,t){const i=e.x,s=e.y,n=e.z;t[0]=.282095,t[1]=.488603*s,t[2]=.488603*n,t[3]=.488603*i,t[4]=1.092548*i*s,t[5]=1.092548*s*n,t[6]=.315392*(3*n*n-1),t[7]=1.092548*i*n,t[8]=.546274*(i*i-s*s)}}class ld extends Ki{constructor(e=new od,t=1){super(void 0,t);this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class yo extends Xt{constructor(e){super(e);this.textures={}}load(e,t,i,s){const n=this,a=new Fi(n.manager);a.setPath(n.path),a.setRequestHeader(n.requestHeader),a.setWithCredentials(n.withCredentials),a.load(e,function(o){try{t(n.parse(JSON.parse(o)))}catch(l){s?s(l):console.error(l),n.manager.itemError(e)}},i,s)}parse(e){const t=this.textures;function i(n){return t[n]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",n),t[n]}const s=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(s.uuid=e.uuid),e.name!==void 0&&(s.name=e.name),e.color!==void 0&&s.color!==void 0&&s.color.setHex(e.color),e.roughness!==void 0&&(s.roughness=e.roughness),e.metalness!==void 0&&(s.metalness=e.metalness),e.sheen!==void 0&&(s.sheen=e.sheen),e.sheenColor!==void 0&&(s.sheenColor=new me().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(s.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&s.emissive!==void 0&&s.emissive.setHex(e.emissive),e.specular!==void 0&&s.specular!==void 0&&s.specular.setHex(e.specular),e.specularIntensity!==void 0&&(s.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&s.specularColor!==void 0&&s.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(s.shininess=e.shininess),e.clearcoat!==void 0&&(s.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(s.dispersion=e.dispersion),e.iridescence!==void 0&&(s.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(s.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(s.transmission=e.transmission),e.thickness!==void 0&&(s.thickness=e.thickness),e.attenuationDistance!==void 0&&(s.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&s.attenuationColor!==void 0&&s.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(s.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(s.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(s.fog=e.fog),e.flatShading!==void 0&&(s.flatShading=e.flatShading),e.blending!==void 0&&(s.blending=e.blending),e.combine!==void 0&&(s.combine=e.combine),e.side!==void 0&&(s.side=e.side),e.shadowSide!==void 0&&(s.shadowSide=e.shadowSide),e.opacity!==void 0&&(s.opacity=e.opacity),e.transparent!==void 0&&(s.transparent=e.transparent),e.alphaTest!==void 0&&(s.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(s.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(s.depthFunc=e.depthFunc),e.depthTest!==void 0&&(s.depthTest=e.depthTest),e.depthWrite!==void 0&&(s.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(s.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(s.blendSrc=e.blendSrc),e.blendDst!==void 0&&(s.blendDst=e.blendDst),e.blendEquation!==void 0&&(s.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(s.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(s.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(s.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&s.blendColor!==void 0&&s.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(s.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(s.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(s.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(s.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(s.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(s.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(s.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(s.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(s.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(s.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(s.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(s.rotation=e.rotation),e.linewidth!==void 0&&(s.linewidth=e.linewidth),e.dashSize!==void 0&&(s.dashSize=e.dashSize),e.gapSize!==void 0&&(s.gapSize=e.gapSize),e.scale!==void 0&&(s.scale=e.scale),e.polygonOffset!==void 0&&(s.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(s.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(s.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(s.dithering=e.dithering),e.alphaToCoverage!==void 0&&(s.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(s.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(s.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(s.visible=e.visible),e.toneMapped!==void 0&&(s.toneMapped=e.toneMapped),e.userData!==void 0&&(s.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?s.vertexColors=e.vertexColors>0:s.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const n in e.uniforms){const a=e.uniforms[n];switch(s.uniforms[n]={},a.type){case"t":s.uniforms[n].value=i(a.value);break;case"c":s.uniforms[n].value=new me().setHex(a.value);break;case"v2":s.uniforms[n].value=new Z().fromArray(a.value);break;case"v3":s.uniforms[n].value=new E().fromArray(a.value);break;case"v4":s.uniforms[n].value=new Ke().fromArray(a.value);break;case"m3":s.uniforms[n].value=new ke().fromArray(a.value);break;case"m4":s.uniforms[n].value=new Le().fromArray(a.value);break;default:s.uniforms[n].value=a.value}}if(e.defines!==void 0&&(s.defines=e.defines),e.vertexShader!==void 0&&(s.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(s.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(s.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)s.extensions[n]=e.extensions[n];if(e.lights!==void 0&&(s.lights=e.lights),e.clipping!==void 0&&(s.clipping=e.clipping),e.size!==void 0&&(s.size=e.size),e.sizeAttenuation!==void 0&&(s.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(s.map=i(e.map)),e.matcap!==void 0&&(s.matcap=i(e.matcap)),e.alphaMap!==void 0&&(s.alphaMap=i(e.alphaMap)),e.bumpMap!==void 0&&(s.bumpMap=i(e.bumpMap)),e.bumpScale!==void 0&&(s.bumpScale=e.bumpScale),e.normalMap!==void 0&&(s.normalMap=i(e.normalMap)),e.normalMapType!==void 0&&(s.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),s.normalScale=new Z().fromArray(n)}return e.displacementMap!==void 0&&(s.displacementMap=i(e.displacementMap)),e.displacementScale!==void 0&&(s.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(s.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(s.roughnessMap=i(e.roughnessMap)),e.metalnessMap!==void 0&&(s.metalnessMap=i(e.metalnessMap)),e.emissiveMap!==void 0&&(s.emissiveMap=i(e.emissiveMap)),e.emissiveIntensity!==void 0&&(s.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(s.specularMap=i(e.specularMap)),e.specularIntensityMap!==void 0&&(s.specularIntensityMap=i(e.specularIntensityMap)),e.specularColorMap!==void 0&&(s.specularColorMap=i(e.specularColorMap)),e.envMap!==void 0&&(s.envMap=i(e.envMap)),e.envMapRotation!==void 0&&s.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(s.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(s.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(s.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(s.lightMap=i(e.lightMap)),e.lightMapIntensity!==void 0&&(s.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(s.aoMap=i(e.aoMap)),e.aoMapIntensity!==void 0&&(s.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(s.gradientMap=i(e.gradientMap)),e.clearcoatMap!==void 0&&(s.clearcoatMap=i(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(s.clearcoatRoughnessMap=i(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(s.clearcoatNormalMap=i(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(s.clearcoatNormalScale=new Z().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(s.iridescenceMap=i(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(s.iridescenceThicknessMap=i(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(s.transmissionMap=i(e.transmissionMap)),e.thicknessMap!==void 0&&(s.thicknessMap=i(e.thicknessMap)),e.anisotropyMap!==void 0&&(s.anisotropyMap=i(e.anisotropyMap)),e.sheenColorMap!==void 0&&(s.sheenColorMap=i(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(s.sheenRoughnessMap=i(e.sheenRoughnessMap)),s}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return yo.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:Fu,SpriteMaterial:bl,RawShaderMaterial:Bu,ShaderMaterial:li,PointsMaterial:Ul,MeshPhysicalMaterial:zu,MeshStandardMaterial:Yl,MeshPhongMaterial:ku,MeshToonMaterial:Vu,MeshNormalMaterial:Hu,MeshLambertMaterial:Gu,MeshDepthMaterial:Zl,MeshDistanceMaterial:Jl,MeshBasicMaterial:ji,MeshMatcapMaterial:Wu,LineDashedMaterial:Xu,LineBasicMaterial:Bt,Material:Ct};return new t[e]}}class rc{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch(i){return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class cd extends Ge{constructor(){super();this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=Infinity}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class hd extends Xt{constructor(e){super(e)}load(e,t,i,s){const n=this,a=new Fi(n.manager);a.setPath(n.path),a.setRequestHeader(n.requestHeader),a.setWithCredentials(n.withCredentials),a.load(e,function(o){try{t(n.parse(JSON.parse(o)))}catch(l){s?s(l):console.error(l),n.manager.itemError(e)}},i,s)}parse(e){const t={},i={};function s(u,p){if(t[p]!==void 0)return t[p];const m=u.interleavedBuffers[p],v=n(u,m.buffer),g=Vs(m.type,v),f=new Ua(g,m.stride);return f.uuid=m.uuid,t[p]=f,f}function n(u,p){if(i[p]!==void 0)return i[p];const m=u.arrayBuffers[p],v=new Uint32Array(m).buffer;return i[p]=v,v}const a=e.isInstancedBufferGeometry?new cd:new Ge,o=e.data.index;if(o!==void 0){const u=Vs(o.type,o.array);a.setIndex(new at(u,1))}const l=e.data.attributes;for(const u in l){const p=l[u];let m;if(p.isInterleavedBufferAttribute){const v=s(e.data,p.data);m=new vs(v,p.itemSize,p.offset,p.normalized)}else{const v=Vs(p.type,p.array),g=p.isInstancedBufferAttribute?hn:at;m=new g(v,p.itemSize,p.normalized)}p.name!==void 0&&(m.name=p.name),p.usage!==void 0&&m.setUsage(p.usage),a.setAttribute(u,m)}const c=e.data.morphAttributes;if(c)for(const u in c){const p=c[u],m=[];for(let v=0,g=p.length;v<g;v++){const f=p[v];let y;if(f.isInterleavedBufferAttribute){const x=s(e.data,f.data);y=new vs(x,f.itemSize,f.offset,f.normalized)}else{const x=Vs(f.type,f.array);y=new at(x,f.itemSize,f.normalized)}f.name!==void 0&&(y.name=f.name),m.push(y)}a.morphAttributes[u]=m}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let u=0,p=h.length;u!==p;++u){const m=h[u];a.addGroup(m.start,m.count,m.materialIndex)}const d=e.data.boundingSphere;if(d!==void 0){const u=new E;d.center!==void 0&&u.fromArray(d.center),a.boundingSphere=new At(u,d.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class $m extends Xt{constructor(e){super(e)}load(e,t,i,s){const n=this,a=this.path===""?rc.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new Fi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(d){s!==void 0&&s(d),console.error("THREE:ObjectLoader: Can't parse "+e+".",d.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){s!==void 0&&s(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}n.parse(c,t)},i,s)}async loadAsync(e,t){const i=this,s=this.path===""?rc.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||s;const n=new Fi(this.manager);n.setPath(this.path),n.setRequestHeader(this.requestHeader),n.setWithCredentials(this.withCredentials);const a=await n.loadAsync(e,t),o=JSON.parse(a),l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await i.parseAsync(o)}parse(e,t){const i=this.parseAnimations(e.animations),s=this.parseShapes(e.shapes),n=this.parseGeometries(e.geometries,s),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,n,l,o,i),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),t!==void 0){let d=!1;for(const u in a)if(a[u].data instanceof HTMLImageElement){d=!0;break}d===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,i),n=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,n),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,s,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(e){const t={};if(e!==void 0)for(let i=0,s=e.length;i<s;i++){const n=new Ms().fromJSON(e[i]);t[n.uuid]=n}return t}parseSkeletons(e,t){const i={},s={};if(t.traverse(function(n){n.isBone&&(s[n.uuid]=n)}),e!==void 0)for(let n=0,a=e.length;n<a;n++){const o=new za().fromJSON(e[n],s);i[o.uuid]=o}return i}parseGeometries(e,t){const i={};if(e!==void 0){const s=new hd;for(let n=0,a=e.length;n<a;n++){let o;const l=e[n];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=s.parse(l);break;default:l.type in Ou?o=Ou[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),i[l.uuid]=o}}return i}parseMaterials(e,t){const i={},s={};if(e!==void 0){const n=new yo;n.setTextures(t);for(let a=0,o=e.length;a<o;a++){const l=e[a];i[l.uuid]===void 0&&(i[l.uuid]=n.parse(l)),s[l.uuid]=i[l.uuid]}}return s}parseAnimations(e){const t={};if(e!==void 0)for(let i=0;i<e.length;i++){const s=e[i],n=dr.parse(s);t[n.uuid]=n}return t}parseImages(e,t){const i=this,s={};let n;function a(l){return i.manager.itemStart(l),n.load(l,function(){i.manager.itemEnd(l)},void 0,function(){i.manager.itemError(l),i.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:i.resourcePath+c;return a(h)}else return l.data?{data:Vs(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new tc(t);n=new pr(l),n.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){const d=e[c],u=d.url;if(Array.isArray(u)){const p=[];for(let m=0,v=u.length;m<v;m++){const g=u[m],f=o(g);f!==null&&(f instanceof HTMLImageElement?p.push(f):p.push(new _i(f.data,f.width,f.height)))}s[d.uuid]=new ds(p)}else{const p=o(d.url);s[d.uuid]=new ds(p)}}}return s}async parseImagesAsync(e){const t=this,i={};let s;async function n(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await s.loadAsync(l)}else return a.data?{data:Vs(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){s=new pr(this.manager),s.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const l=e[a],c=l.url;if(Array.isArray(c)){const h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d],m=await n(p);m!==null&&(m instanceof HTMLImageElement?h.push(m):h.push(new _i(m.data,m.width,m.height)))}i[l.uuid]=new ds(h)}else{const h=await n(l.url);i[l.uuid]=new ds(h)}}}return i}parseTextures(e,t){function i(n,a){return typeof n=="number"?n:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",n),a[n])}const s={};if(e!==void 0)for(let n=0,a=e.length;n<a;n++){const o=e[n];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);const l=t[o.image],c=l.data;let h;Array.isArray(c)?(h=new Wn,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new _i:h=new dt,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=i(o.mapping,Qm)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=i(o.wrap[0],ud),h.wrapT=i(o.wrap[1],ud)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=i(o.minFilter,dd)),o.magFilter!==void 0&&(h.magFilter=i(o.magFilter,dd)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.userData!==void 0&&(h.userData=o.userData),s[o.uuid]=h}return s}parseObject(e,t,i,s,n){let a;function o(u){return t[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",u),t[u]}function l(u){if(u!==void 0){if(Array.isArray(u)){const p=[];for(let m=0,v=u.length;m<v;m++){const g=u[m];i[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),p.push(i[g])}return p}return i[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",u),i[u]}}function c(u){return s[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",u),s[u]}let h,d;switch(e.type){case"Scene":a=new qh,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new me(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new La(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new Pa(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new Tt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new xo(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new rd(e.color,e.intensity);break;case"DirectionalLight":a=new nd(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new sd(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new ad(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new td(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new $u(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new ld().fromJSON(e);break;case"SkinnedMesh":h=o(e.geometry),d=l(e.material),a=new ru(h,d),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),d=l(e.material),a=new gt(h,d);break;case"InstancedMesh":h=o(e.geometry),d=l(e.material);const u=e.count,p=e.instanceMatrix,m=e.instanceColor;a=new cu(h,d,u),a.instanceMatrix=new hn(new Float32Array(p.array),16),m!==void 0&&(a.instanceColor=new hn(new Float32Array(m.array),m.itemSize));break;case"BatchedMesh":h=o(e.geometry),d=l(e.material),a=new uu(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,d),a.geometry=h,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._visibility=e.visibility,a._active=e.active,a._bounds=e.bounds.map(v=>{const g=new Nt;g.min.fromArray(v.boxMin),g.max.fromArray(v.boxMax);const f=new At;return f.radius=v.sphereRadius,f.center.fromArray(v.sphereCenter),{boxInitialized:v.boxInitialized,box:g,sphereInitialized:v.sphereInitialized,sphere:f}}),a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._geometryCount=e.geometryCount,a._matricesTexture=c(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=c(e.colorsTexture.uuid));break;case"LOD":a=new Qh;break;case"Line":a=new Zi(o(e.geometry),l(e.material));break;case"LineLoop":a=new gu(o(e.geometry),l(e.material));break;case"LineSegments":a=new xi(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new _u(o(e.geometry),l(e.material));break;case"Sprite":a=new Kh(l(e.material));break;case"Group":a=new rn;break;case"Bone":a=new Al;break;default:a=new $e}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const u=e.children;for(let p=0;p<u.length;p++)a.add(this.parseObject(u[p],t,i,s,n))}if(e.animations!==void 0){const u=e.animations;for(let p=0;p<u.length;p++){const m=u[p];a.animations.push(n[m])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const u=e.levels;for(let p=0;p<u.length;p++){const m=u[p],v=a.getObjectByProperty("uuid",m.object);v!==void 0&&a.addLevel(v,m.distance,m.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(i){if(i.isSkinnedMesh===!0&&i.skeleton!==void 0){const s=t[i.skeleton];s===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",i.skeleton):i.bind(s,i.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const i=t.target,s=e.getObjectByProperty("uuid",i);s!==void 0?t.target=s:t.target=new $e}})}}const Qm={UVMapping:Rr,CubeReflectionMapping:wi,CubeRefractionMapping:zi,EquirectangularReflectionMapping:yn,EquirectangularRefractionMapping:Mn,CubeUVReflectionMapping:Os},ud={RepeatWrapping:Sn,ClampToEdgeWrapping:Qt,MirroredRepeatWrapping:bn},dd={NearestFilter:bt,NearestMipmapNearestFilter:Vo,NearestMipmapLinearFilter:Fs,LinearFilter:_t,LinearMipmapNearestFilter:Tn,LinearMipmapLinearFilter:fi};class eg extends Xt{constructor(e){super(e);this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,a=Ni.get(e);if(a!==void 0){if(n.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),n.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),n.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(n.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ni.add(e,c),t&&t(c),n.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ni.remove(e),n.manager.itemError(e),n.manager.itemEnd(e)});Ni.add(e,l),n.manager.itemStart(e)}}let Mo;class ac{static getContext(){return Mo===void 0&&(Mo=new(window.AudioContext||window.webkitAudioContext)),Mo}static setContext(e){Mo=e}}class tg extends Xt{constructor(e){super(e)}load(e,t,i,s){const n=this,a=new Fi(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const c=l.slice(0);ac.getContext().decodeAudioData(c,function(h){t(h)}).catch(o)}catch(c){o(c)}},i,s);function o(l){s?s(l):console.error(l),n.manager.itemError(e)}}}const pd=new Le,fd=new Le,Es=new Le;class ig{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Tt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Tt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Es.copy(e.projectionMatrix);const i=t.eyeSep/2,s=i*t.near/t.focus,n=t.near*Math.tan(us*t.fov*.5)/t.zoom;let a,o;fd.elements[12]=-i,pd.elements[12]=i,a=-n*t.aspect+s,o=n*t.aspect+s,Es.elements[0]=2*t.near/(o-a),Es.elements[8]=(o+a)/(o-a),this.cameraL.projectionMatrix.copy(Es),a=-n*t.aspect-s,o=n*t.aspect-s,Es.elements[0]=2*t.near/(o-a),Es.elements[8]=(o+a)/(o-a),this.cameraR.projectionMatrix.copy(Es)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(fd),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(pd)}}class md extends Tt{constructor(e=[]){super();this.isArrayCamera=!0,this.cameras=e,this.index=0}}class gd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=vd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function vd(){return performance.now()}const As=new E,_d=new Vt,sg=new E,Rs=new E;class ng extends $e{constructor(){super();this.type="AudioListener",this.context=ac.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new gd}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(As,_d,sg),Rs.set(0,0,-1).applyQuaternion(_d),t.positionX){const s=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(As.x,s),t.positionY.linearRampToValueAtTime(As.y,s),t.positionZ.linearRampToValueAtTime(As.z,s),t.forwardX.linearRampToValueAtTime(Rs.x,s),t.forwardY.linearRampToValueAtTime(Rs.y,s),t.forwardZ.linearRampToValueAtTime(Rs.z,s),t.upX.linearRampToValueAtTime(i.x,s),t.upY.linearRampToValueAtTime(i.y,s),t.upZ.linearRampToValueAtTime(i.z,s)}else t.setPosition(As.x,As.y,As.z),t.setOrientation(Rs.x,Rs.y,Rs.z,i.x,i.y,i.z)}}class xd extends $e{constructor(e){super();this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(console.warn("THREE.Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const Cs=new E,yd=new Vt,rg=new E,Is=new E;class ag extends xd{constructor(e){super(e);this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Cs,yd,rg),Is.set(0,0,1).applyQuaternion(yd);const t=this.panner;if(t.positionX){const i=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Cs.x,i),t.positionY.linearRampToValueAtTime(Cs.y,i),t.positionZ.linearRampToValueAtTime(Cs.z,i),t.orientationX.linearRampToValueAtTime(Is.x,i),t.orientationY.linearRampToValueAtTime(Is.y,i),t.orientationZ.linearRampToValueAtTime(Is.z,i)}else t.setPosition(Cs.x,Cs.y,Cs.z),t.setOrientation(Is.x,Is.y,Is.z)}}class og{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let i=0;i<t.length;i++)e+=t[i];return e/t.length}}class Md{constructor(e,t,i){this.binding=e,this.valueSize=i;let s,n,a;switch(t){case"quaternion":s=this._slerp,n=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,n=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,n=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=n,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,s=this.valueSize,n=e*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)i[n+o]=i[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(i,n,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,s=e*t+t,n=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,n<1){const l=t*this._origIndex;this._mixBufferRegion(i,s,l,1-n,t)}a>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,s=i*this._origIndex;e.getValue(t,s);for(let n=i,a=s;n!==a;++n)t[n]=t[s+n%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,s,n){if(s>=.5)for(let a=0;a!==n;++a)e[t+a]=e[i+a]}_slerp(e,t,i,s){Vt.slerpFlat(e,t,e,t,e,i,s)}_slerpAdditive(e,t,i,s,n){const a=this._workIndex*n;Vt.multiplyQuaternionsFlat(e,a,e,t,e,i),Vt.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,i,s,n){const a=1-s;for(let o=0;o!==n;++o){const l=t+o;e[l]=e[l]*a+e[i+o]*s}}_lerpAdditive(e,t,i,s,n){for(let a=0;a!==n;++a){const o=t+a;e[o]=e[o]+e[i+a]*s}}}const oc="\\[\\]\\.:\\/",lg=new RegExp("["+oc+"]","g"),lc="[^"+oc+"]",cg="[^"+oc.replace("\\.","")+"]",hg=/((?:WC+[\/:])*)/.source.replace("WC",lc),ug=/(WCOD+)?/.source.replace("WCOD",cg),dg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lc),pg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lc),fg=new RegExp("^"+hg+ug+dg+pg+"$"),mg=["material","materials","bones","map"];class gg{constructor(e,t,i){const s=i||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,n=i.length;s!==n;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Qe{constructor(e,t,i){this.path=t,this.parsedPath=i||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,i):new Qe(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lg,"")}static parseTrackName(e){const t=fg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const n=i.nodeName.substring(s+1);mg.indexOf(n)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=n)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(n){for(let a=0;a<n.length;a++){const o=n[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,n=i.length;s!==n;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,n=i.length;s!==n;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,n=i.length;s!==n;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,n=i.length;s!==n;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let n=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[n]!==void 0&&(n=e.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=n}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=gg,Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray],Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class vg{constructor(){this.isAnimationObjectGroup=!0,this.uuid=qt(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let i=0,s=arguments.length;i!==s;++i)e[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,i=this._paths,s=this._parsedPaths,n=this._bindings,a=n.length;let o,l=e.length,c=this.nCachedObjects_;for(let h=0,d=arguments.length;h!==d;++h){const u=arguments[h],p=u.uuid;let m=t[p];if(m===void 0){m=l++,t[p]=m,e.push(u);for(let v=0,g=a;v!==g;++v)n[v].push(new Qe(u,i[v],s[v]))}else if(m<c){o=e[m];const v=--c,g=e[v];t[g.uuid]=m,e[m]=g,t[p]=v,e[v]=u;for(let f=0,y=a;f!==y;++f){const x=n[f],_=x[v];let C=x[m];x[m]=_,C===void 0&&(C=new Qe(u,i[f],s[f])),x[v]=C}}else e[m]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,i=this._bindings,s=i.length;let n=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,h=t[c];if(h!==void 0&&h>=n){const d=n++,u=e[d];t[u.uuid]=h,e[h]=u,t[c]=d,e[d]=l;for(let p=0,m=s;p!==m;++p){const v=i[p],g=v[d],f=v[h];v[h]=g,v[d]=f}}}this.nCachedObjects_=n}uncache(){const e=this._objects,t=this._indicesByUUID,i=this._bindings,s=i.length;let n=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],h=c.uuid,d=t[h];if(d!==void 0)if(delete t[h],d<n){const u=--n,p=e[u],m=--a,v=e[m];t[p.uuid]=d,e[d]=p,t[v.uuid]=u,e[u]=v,e.pop();for(let g=0,f=s;g!==f;++g){const y=i[g],x=y[u],_=y[m];y[d]=x,y[u]=_,y.pop()}}else{const u=--a,p=e[u];u>0&&(t[p.uuid]=d),e[d]=p,e.pop();for(let m=0,v=s;m!==v;++m){const g=i[m];g[d]=g[u],g.pop()}}}this.nCachedObjects_=n}subscribe_(e,t){const i=this._bindingsIndicesByPath;let s=i[e];const n=this._bindings;if(s!==void 0)return n[s];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,d=new Array(c);s=n.length,i[e]=s,a.push(e),o.push(t),n.push(d);for(let u=h,p=l.length;u!==p;++u){const m=l[u];d[u]=new Qe(m,e,t)}return d}unsubscribe_(e){const t=this._bindingsIndicesByPath,i=t[e];if(i!==void 0){const s=this._paths,n=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=e[o];t[c]=i,a[i]=l,a.pop(),n[i]=n[o],n.pop(),s[i]=s[o],s.pop()}}}class Sd{constructor(e,t,i=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=s;const n=t.tracks,a=n.length,o=new Array(a),l={endingStart:os,endingEnd:os};for(let c=0;c!==a;++c){const h=n[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=ch,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=Infinity,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const s=this._clip.duration,n=e._clip.duration,a=n/s,o=s/n;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const s=this._mixer,n=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=n,l[1]=n+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,s){if(!this.enabled){this._updateWeight(e);return}const n=this._startTime;if(n!==null){const l=(e-n)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Ko:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case ca:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;i!==null&&(t*=i.evaluate(e)[0],e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let s=this.time+e,n=this._loopCount;const a=i===hh;if(e===0)return n===-1?s:a&&(n&1)==1?t-s:s;if(i===lh){n===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(n===-1&&(e>=0?(n=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){const o=Math.floor(s/t);s-=t*o,n+=Math.abs(o);const l=this.repetitions-n;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=n,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(n&1)==1)return t-s}return s}_setEndings(e,t,i){const s=this._interpolantSettings;i?(s.endingStart=ls,s.endingEnd=ls):(e?s.endingStart=this.zeroSlopeAtStart?ls:os:s.endingStart=Ln,t?s.endingEnd=this.zeroSlopeAtEnd?ls:os:s.endingEnd=Ln)}_scheduleFading(e,t,i){const s=this._mixer,n=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=n,l[0]=t,o[1]=n+e,l[1]=i,this}}const _g=new Float32Array(1);class xg extends gi{constructor(e){super();this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,s=e._clip.tracks,n=s.length,a=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==n;++d){const u=s[d],p=u.name;let m=h[p];if(m!==void 0)++m.referenceCount,a[d]=m;else{if(m=a[d],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,p));continue}const v=t&&t._propertyBindings[d].binding.parsedPath;m=new Md(Qe.create(i,p,v),u.ValueTypeName,u.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,p),a[d]=m}o[d].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,s=e._clip.uuid,n=this._actionsByClip[s];this._bindAction(e,n&&n.knownActions[0]),this._addInactiveAction(e,s,i)}const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const n=t[i];n.useCount++==0&&(this._lendBinding(n),n.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const n=t[i];--n.useCount==0&&(n.restoreOriginalState(),this._takeBackBinding(n))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const s=this._actions,n=this._actionsByClip;let a=n[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,n[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],s=e._cacheIndex;i._cacheIndex=s,t[s]=i,t.pop(),e._cacheIndex=null;const n=e._clip.uuid,a=this._actionsByClip,o=a[n],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const d=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],l.length===0&&delete a[n],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const n=t[i];--n.referenceCount==0&&this._removeInactiveBinding(n)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,s=this._nActiveActions++,n=t[s];e._cacheIndex=s,t[s]=e,n._cacheIndex=i,t[i]=n}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,s=--this._nActiveActions,n=t[s];e._cacheIndex=s,t[s]=e,n._cacheIndex=i,t[i]=n}_addInactiveBinding(e,t,i){const s=this._bindingsByRootAndName,n=this._bindings;let a=s[t];a===void 0&&(a={},s[t]=a),a[i]=e,e._cacheIndex=n.length,n.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,s=i.rootNode.uuid,n=i.path,a=this._bindingsByRootAndName,o=a[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[n],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,s=this._nActiveBindings++,n=t[s];e._cacheIndex=s,t[s]=e,n._cacheIndex=i,t[i]=n}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,s=--this._nActiveBindings,n=t[s];e._cacheIndex=s,t[s]=e,n._cacheIndex=i,t[i]=n}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Ql(new Float32Array(2),new Float32Array(2),1,_g),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,s=--this._nActiveControlInterpolants,n=t[s];e.__cacheIndex=s,t[s]=e,n.__cacheIndex=i,t[i]=n}clipAction(e,t,i){const s=t||this._root,n=s.uuid;let a=typeof e=="string"?dr.findByName(s,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=ca),l!==void 0){const d=l.actionByRoot[n];if(d!==void 0&&d.blendMode===i)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new Sd(this,a,t,i);return this._bindAction(h,c),this._addInactiveAction(h,o,n),h}existingAction(e,t){const i=t||this._root,s=i.uuid,n=typeof e=="string"?dr.findByName(i,e):e,a=n?n.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,s=this.time+=e,n=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(s,e,n,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,s=this._actionsByClip,n=s[i];if(n!==void 0){const a=n.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const a in i){const o=i[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const s=this._bindingsByRootAndName,n=s[t];if(n!==void 0)for(const a in n){const o=n[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class yg extends ha{constructor(e=1,t=1,i=1,s={}){super(e,t,s);this.isRenderTarget3D=!0,this.depth=i,this.texture=new ua(null,e,t,i),this.texture.isRenderTargetTexture=!0}}class Mg extends ha{constructor(e=1,t=1,i=1,s={}){super(e,t,s);this.isRenderTargetArray=!0,this.depth=i,this.texture=new Bn(null,e,t,i),this.texture.isRenderTargetTexture=!0}}class cc{constructor(e){this.value=e}clone(){return new cc(this.value.clone===void 0?this.value:this.value.clone())}}let Sg=0;class bg extends gi{constructor(){super();this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Sg++}),this.name="",this.usage=Dn,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let i=0,s=t.length;i<s;i++){const n=Array.isArray(t[i])?t[i]:[t[i]];for(let a=0;a<n.length;a++)this.uniforms.push(n[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class Tg extends Ua{constructor(e,t,i=1){super(e,t);this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class wg{constructor(e,t,i,s,n){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=s,this.count=n,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const bd=new Le;class Eg{constructor(e,t,i=0,s=Infinity){this.ray=new Ys(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new _a,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return bd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bd),this}intersectObject(e,t=!0,i=[]){return hc(e,this,i,t),i.sort(Td),i}intersectObjects(e,t=!0,i=[]){for(let s=0,n=e.length;s<n;s++)hc(e[s],this,i,t);return i.sort(Td),i}}function Td(r,e){return r.distance-e.distance}function hc(r,e,t,i){let s=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const n=r.children;for(let a=0,o=n.length;a<o;a++)hc(n[a],e,t,!0)}}class Ag{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){const e=1e-6;return this.phi=ze(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Rg{constructor(e=1,t=0,i=0){return this.radius=e,this.theta=t,this.y=i,this}set(e,t,i){return this.radius=e,this.theta=t,this.y=i,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+i*i),this.theta=Math.atan2(e,i),this.y=t,this}clone(){return new this.constructor().copy(this)}}class uc{constructor(e,t,i,s){uc.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const n=this.elements;return n[0]=e,n[2]=t,n[1]=i,n[3]=s,this}}const wd=new Z;class Cg{constructor(e=new Z(Infinity,Infinity),t=new Z(-Infinity,-Infinity)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=wd.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=Infinity,this.max.x=this.max.y=-Infinity,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wd).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ed=new E,So=new E;class Ig{constructor(e=new E,t=new E){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Ed.subVectors(e,this.start),So.subVectors(this.end,this.start);const i=So.dot(So);let s=So.dot(Ed)/i;return t&&(s=ze(s,0,1)),s}closestPointToPoint(e,t,i){const s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Ad=new E;class Pg extends $e{constructor(e,t){super();this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const i=new Ge,s=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,h=o/l*Math.PI*2;s.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}i.setAttribute("position",new we(s,3));const n=new Bt({fog:!1,toneMapped:!1});this.cone=new xi(i,n),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Ad.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Ad),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const $i=new E,bo=new Le,dc=new Le;class Lg extends xi{constructor(e){const t=Rd(e),i=new Ge,s=[],n=[],a=new me(0,0,1),o=new me(0,1,0);for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(s.push(0,0,0),s.push(0,0,0),n.push(a.r,a.g,a.b),n.push(o.r,o.g,o.b))}i.setAttribute("position",new we(s,3)),i.setAttribute("color",new we(n,3));const l=new Bt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,l);this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,i=this.geometry,s=i.getAttribute("position");dc.copy(this.root.matrixWorld).invert();for(let n=0,a=0;n<t.length;n++){const o=t[n];o.parent&&o.parent.isBone&&(bo.multiplyMatrices(dc,o.matrixWorld),$i.setFromMatrixPosition(bo),s.setXYZ(a,$i.x,$i.y,$i.z),bo.multiplyMatrices(dc,o.parent.matrixWorld),$i.setFromMatrixPosition(bo),s.setXYZ(a+1,$i.x,$i.y,$i.z),a+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function Rd(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,Rd(r.children[t]));return e}class Ug extends gt{constructor(e,t,i){const s=new or(t,4,2),n=new ji({wireframe:!0,fog:!1,toneMapped:!1});super(s,n);this.light=e,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Dg=new E,Cd=new me,Id=new me;class Ng extends $e{constructor(e,t,i){super();this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="HemisphereLightHelper";const s=new ar(t);s.rotateY(Math.PI*.5),this.material=new ji({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const n=s.getAttribute("position"),a=new Float32Array(n.count*3);s.setAttribute("color",new at(a,3)),this.add(new gt(s,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Cd.copy(this.light.color),Id.copy(this.light.groundColor);for(let i=0,s=t.count;i<s;i++){const n=i<s/2?Cd:Id;t.setXYZ(i,n.r,n.g,n.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(Dg.setFromMatrixPosition(this.light.matrixWorld).negate())}}class Og extends xi{constructor(e=10,t=10,i=4473924,s=8947848){i=new me(i),s=new me(s);const n=t/2,a=e/t,o=e/2,l=[],c=[];for(let u=0,p=0,m=-o;u<=t;u++,m+=a){l.push(-o,0,m,o,0,m),l.push(m,0,-o,m,0,o);const v=u===n?i:s;v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3}const h=new Ge;h.setAttribute("position",new we(l,3)),h.setAttribute("color",new we(c,3));const d=new Bt({vertexColors:!0,toneMapped:!1});super(h,d);this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Fg extends xi{constructor(e=10,t=16,i=8,s=64,n=4473924,a=8947848){n=new me(n),a=new me(a);const o=[],l=[];if(t>1)for(let d=0;d<t;d++){const u=d/t*(Math.PI*2),p=Math.sin(u)*e,m=Math.cos(u)*e;o.push(0,0,0),o.push(p,0,m);const v=d&1?n:a;l.push(v.r,v.g,v.b),l.push(v.r,v.g,v.b)}for(let d=0;d<i;d++){const u=d&1?n:a,p=e-e/i*d;for(let m=0;m<s;m++){let v=m/s*(Math.PI*2),g=Math.sin(v)*p,f=Math.cos(v)*p;o.push(g,0,f),l.push(u.r,u.g,u.b),v=(m+1)/s*(Math.PI*2),g=Math.sin(v)*p,f=Math.cos(v)*p,o.push(g,0,f),l.push(u.r,u.g,u.b)}}const c=new Ge;c.setAttribute("position",new we(o,3)),c.setAttribute("color",new we(l,3));const h=new Bt({vertexColors:!0,toneMapped:!1});super(c,h);this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Pd=new E,To=new E,Ld=new E;class Bg extends $e{constructor(e,t,i){super();this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",t===void 0&&(t=1);let s=new Ge;s.setAttribute("position",new we([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const n=new Bt({fog:!1,toneMapped:!1});this.lightPlane=new Zi(s,n),this.add(this.lightPlane),s=new Ge,s.setAttribute("position",new we([0,0,0,0,0,1],3)),this.targetLine=new Zi(s,n),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Pd.setFromMatrixPosition(this.light.matrixWorld),To.setFromMatrixPosition(this.light.target.matrixWorld),Ld.subVectors(To,Pd),this.lightPlane.lookAt(To),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(To),this.targetLine.scale.z=Ld.length()}}const wo=new E,pt=new Ca;class zg extends xi{constructor(e){const t=new Ge,i=new Bt({color:16777215,vertexColors:!0,toneMapped:!1}),s=[],n=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(m,v){l(m),l(v)}function l(m){s.push(0,0,0),n.push(0,0,0),a[m]===void 0&&(a[m]=[]),a[m].push(s.length/3-1)}t.setAttribute("position",new we(s,3)),t.setAttribute("color",new we(n,3)),super(t,i),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new me(16755200),h=new me(16711680),d=new me(43775),u=new me(16777215),p=new me(3355443);this.setColors(c,h,d,u,p)}setColors(e,t,i,s,n){const a=this.geometry.getAttribute("color");a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,i.r,i.g,i.b),a.setXYZ(33,i.r,i.g,i.b),a.setXYZ(34,i.r,i.g,i.b),a.setXYZ(35,i.r,i.g,i.b),a.setXYZ(36,i.r,i.g,i.b),a.setXYZ(37,i.r,i.g,i.b),a.setXYZ(38,s.r,s.g,s.b),a.setXYZ(39,s.r,s.g,s.b),a.setXYZ(40,n.r,n.g,n.b),a.setXYZ(41,n.r,n.g,n.b),a.setXYZ(42,n.r,n.g,n.b),a.setXYZ(43,n.r,n.g,n.b),a.setXYZ(44,n.r,n.g,n.b),a.setXYZ(45,n.r,n.g,n.b),a.setXYZ(46,n.r,n.g,n.b),a.setXYZ(47,n.r,n.g,n.b),a.setXYZ(48,n.r,n.g,n.b),a.setXYZ(49,n.r,n.g,n.b),a.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,i=1,s=1;pt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse);const n=this.camera.coordinateSystem===ni?-1:0;ft("c",t,e,pt,0,0,n),ft("t",t,e,pt,0,0,1),ft("n1",t,e,pt,-i,-s,n),ft("n2",t,e,pt,i,-s,n),ft("n3",t,e,pt,-i,s,n),ft("n4",t,e,pt,i,s,n),ft("f1",t,e,pt,-i,-s,1),ft("f2",t,e,pt,i,-s,1),ft("f3",t,e,pt,-i,s,1),ft("f4",t,e,pt,i,s,1),ft("u1",t,e,pt,i*.7,s*1.1,n),ft("u2",t,e,pt,-i*.7,s*1.1,n),ft("u3",t,e,pt,0,s*2,n),ft("cf1",t,e,pt,-i,0,1),ft("cf2",t,e,pt,i,0,1),ft("cf3",t,e,pt,0,-s,1),ft("cf4",t,e,pt,0,s,1),ft("cn1",t,e,pt,-i,0,n),ft("cn2",t,e,pt,i,0,n),ft("cn3",t,e,pt,0,-s,n),ft("cn4",t,e,pt,0,s,n),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function ft(r,e,t,i,s,n,a){wo.set(s,n,a).unproject(i);const o=e[r];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],wo.x,wo.y,wo.z)}}const Eo=new Nt;class kg extends xi{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(8*3),n=new Ge;n.setIndex(new at(i,1)),n.setAttribute("position",new at(s,3)),super(n,new Bt({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Eo.setFromObject(this.object),Eo.isEmpty())return;const t=Eo.min,i=Eo.max,s=this.geometry.attributes.position,n=s.array;n[0]=i.x,n[1]=i.y,n[2]=i.z,n[3]=t.x,n[4]=i.y,n[5]=i.z,n[6]=t.x,n[7]=t.y,n[8]=i.z,n[9]=i.x,n[10]=t.y,n[11]=i.z,n[12]=i.x,n[13]=i.y,n[14]=t.z,n[15]=t.x,n[16]=i.y,n[17]=t.z,n[18]=t.x,n[19]=t.y,n[20]=t.z,n[21]=i.x,n[22]=t.y,n[23]=t.z,s.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Vg extends xi{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],n=new Ge;n.setIndex(new at(i,1)),n.setAttribute("position",new we(s,3)),super(n,new Bt({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class Hg extends Zi{constructor(e,t=1,i=16776960){const s=i,n=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new Ge;a.setAttribute("position",new we(n,3)),a.computeBoundingSphere(),super(a,new Bt({color:s,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Ge;l.setAttribute("position",new we(o,3)),l.computeBoundingSphere(),this.add(new gt(l,new ji({color:s,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Ud=new E;let Ao,pc;class Gg extends $e{constructor(e=new E(0,0,1),t=new E(0,0,0),i=1,s=16776960,n=i*.2,a=n*.2){super();this.type="ArrowHelper",Ao===void 0&&(Ao=new Ge,Ao.setAttribute("position",new we([0,0,0,0,1,0],3)),pc=new dn(0,.5,1,5,1),pc.translate(0,-.5,0)),this.position.copy(t),this.line=new Zi(Ao,new Bt({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new gt(pc,new ji({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,n,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Ud.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Ud,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Wg extends xi{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Ge;s.setAttribute("position",new we(t,3)),s.setAttribute("color",new we(i,3));const n=new Bt({vertexColors:!0,toneMapped:!1});super(s,n);this.type="AxesHelper"}setColors(e,t,i){const s=new me,n=this.geometry.attributes.color.array;return s.set(e),s.toArray(n,0),s.toArray(n,3),s.set(t),s.toArray(n,6),s.toArray(n,9),s.set(i),s.toArray(n,12),s.toArray(n,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Xg{constructor(){this.type="ShapePath",this.color=new me,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new tr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,s){return this.currentPath.quadraticCurveTo(e,t,i,s),this}bezierCurveTo(e,t,i,s,n,a){return this.currentPath.bezierCurveTo(e,t,i,s,n,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(f){const y=[];for(let x=0,_=f.length;x<_;x++){const C=f[x],w=new Ms;w.curves=C.curves,y.push(w)}return y}function i(f,y){const x=y.length;let _=!1;for(let C=x-1,w=0;w<x;C=w++){let R=y[C],I=y[w],T=I.x-R.x,M=I.y-R.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(R=y[w],T=-T,I=y[C],M=-M),f.y<R.y||f.y>I.y)continue;if(f.y===R.y){if(f.x===R.x)return!0}else{const L=M*(f.x-R.x)-T*(f.y-R.y);if(L===0)return!0;if(L<0)continue;_=!_}}else{if(f.y!==R.y)continue;if(I.x<=f.x&&f.x<=R.x||R.x<=f.x&&f.x<=I.x)return!0}}return _}const s=yi.isClockWise,n=this.subPaths;if(n.length===0)return[];let a,o,l;const c=[];if(n.length===1)return o=n[0],l=new Ms,l.curves=o.curves,c.push(l),c;let h=!s(n[0].getPoints());h=e?!h:h;const d=[],u=[];let p=[],m=0,v;u[m]=void 0,p[m]=[];for(let f=0,y=n.length;f<y;f++)o=n[f],v=o.getPoints(),a=s(v),a=e?!a:a,a?(!h&&u[m]&&m++,u[m]={s:new Ms,p:v},u[m].s.curves=o.curves,h&&m++,p[m]=[]):p[m].push({h:o,p:v[0]});if(!u[0])return t(n);if(u.length>1){let f=!1,y=0;for(let x=0,_=u.length;x<_;x++)d[x]=[];for(let x=0,_=u.length;x<_;x++){const C=p[x];for(let w=0;w<C.length;w++){const R=C[w];let I=!0;for(let T=0;T<u.length;T++)i(R.p,u[T].p)&&(x!==T&&y++,I?(I=!1,d[T].push(R)):f=!0);I&&d[x].push(R)}}y>0&&f===!1&&(p=d)}let g;for(let f=0,y=u.length;f<y;f++){l=u[f].s,c.push(l),g=p[f];for(let x=0,_=g.length;x<_;x++)l.holes.push(g[x].h)}return c}}class jg extends gi{constructor(e,t=null){super();this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function qg(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2):(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0),r}function Yg(r,e){const t=r.image&&r.image.width?r.image.width/r.image.height:1;return t>e?(r.repeat.x=e/t,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0):(r.repeat.x=1,r.repeat.y=t/e,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2),r}function Zg(r){return r.repeat.x=1,r.repeat.y=1,r.offset.x=0,r.offset.y=0,r}function fc(r,e,t,i){const s=Jg(i);switch(t){case Xo:return r*e;case qo:return r*e;case Yo:return r*e*2;case Lr:return r*e/s.components*s.byteLength;case wn:return r*e/s.components*s.byteLength;case Zo:return r*e*2/s.components*s.byteLength;case Ur:return r*e*2/s.components*s.byteLength;case jo:return r*e*3/s.components*s.byteLength;case Ut:return r*e*4/s.components*s.byteLength;case Dr:return r*e*4/s.components*s.byteLength;case En:case An:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Rn:case Cn:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Or:case Br:return Math.max(r,16)*Math.max(e,8)/4;case Nr:case Fr:return Math.max(r,8)*Math.max(e,8)/2;case zr:case kr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Vr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Hr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Gr:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Wr:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Xr:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case jr:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case qr:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Yr:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Zr:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Jr:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Kr:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case $r:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Qr:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ea:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ta:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case In:case ia:case sa:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Jo:case na:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ra:case aa:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jg(r){switch(r){case mi:case Ho:return{byteLength:1,components:1};case Bs:case Go:case zs:return{byteLength:2,components:1};case Ir:case Pr:return{byteLength:2,components:4};case Ei:case Cr:case zt:return{byteLength:4,components:1};case Wo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}const Kg={contain:qg,cover:Yg,fill:Zg,getByteLength:fc};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_r}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_r);/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/function Dd(){let r=null,e=!1,t=null,i=null;function s(n,a){t(n,a),i=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){r=n}}}function $g(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,h);else{d.sort((p,m)=>p.start-m.start);let u=0;for(let p=1;p<d.length;p++){const m=d[u],v=d[p];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++u,d[u]=v)}d.length=u+1;for(let p=0,m=d.length;p<m;p++){const v=d[p];r.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:n,update:a}}var Qg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ev=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,av=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ov=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_v=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Sv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Tv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ev=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Av=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Lv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ov=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$v=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,e0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,i0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,r0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,o0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,l0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,d0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,p0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,m0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,v0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,M0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,S0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,b0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,T0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,w0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,R0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,L0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,N0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,O0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,F0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,B0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,z0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,k0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,H0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,X0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,j0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,q0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,K0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,r_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,a_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,o_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,l_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,u_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,p_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,v_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,__=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,x_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,y_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,b_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,A_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,I_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,P_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:Qg,alphahash_pars_fragment:ev,alphamap_fragment:tv,alphamap_pars_fragment:iv,alphatest_fragment:sv,alphatest_pars_fragment:nv,aomap_fragment:rv,aomap_pars_fragment:av,batching_pars_vertex:ov,batching_vertex:lv,begin_vertex:cv,beginnormal_vertex:hv,bsdfs:uv,iridescence_fragment:dv,bumpmap_pars_fragment:pv,clipping_planes_fragment:fv,clipping_planes_pars_fragment:mv,clipping_planes_pars_vertex:gv,clipping_planes_vertex:vv,color_fragment:_v,color_pars_fragment:xv,color_pars_vertex:yv,color_vertex:Mv,common:Sv,cube_uv_reflection_fragment:bv,defaultnormal_vertex:Tv,displacementmap_pars_vertex:wv,displacementmap_vertex:Ev,emissivemap_fragment:Av,emissivemap_pars_fragment:Rv,colorspace_fragment:Cv,colorspace_pars_fragment:Iv,envmap_fragment:Pv,envmap_common_pars_fragment:Lv,envmap_pars_fragment:Uv,envmap_pars_vertex:Dv,envmap_physical_pars_fragment:Xv,envmap_vertex:Nv,fog_vertex:Ov,fog_pars_vertex:Fv,fog_fragment:Bv,fog_pars_fragment:zv,gradientmap_pars_fragment:kv,lightmap_pars_fragment:Vv,lights_lambert_fragment:Hv,lights_lambert_pars_fragment:Gv,lights_pars_begin:Wv,lights_toon_fragment:jv,lights_toon_pars_fragment:qv,lights_phong_fragment:Yv,lights_phong_pars_fragment:Zv,lights_physical_fragment:Jv,lights_physical_pars_fragment:Kv,lights_fragment_begin:$v,lights_fragment_maps:Qv,lights_fragment_end:e0,logdepthbuf_fragment:t0,logdepthbuf_pars_fragment:i0,logdepthbuf_pars_vertex:s0,logdepthbuf_vertex:n0,map_fragment:r0,map_pars_fragment:a0,map_particle_fragment:o0,map_particle_pars_fragment:l0,metalnessmap_fragment:c0,metalnessmap_pars_fragment:h0,morphinstance_vertex:u0,morphcolor_vertex:d0,morphnormal_vertex:p0,morphtarget_pars_vertex:f0,morphtarget_vertex:m0,normal_fragment_begin:g0,normal_fragment_maps:v0,normal_pars_fragment:_0,normal_pars_vertex:x0,normal_vertex:y0,normalmap_pars_fragment:M0,clearcoat_normal_fragment_begin:S0,clearcoat_normal_fragment_maps:b0,clearcoat_pars_fragment:T0,iridescence_pars_fragment:w0,opaque_fragment:E0,packing:A0,premultiplied_alpha_fragment:R0,project_vertex:C0,dithering_fragment:I0,dithering_pars_fragment:P0,roughnessmap_fragment:L0,roughnessmap_pars_fragment:U0,shadowmap_pars_fragment:D0,shadowmap_pars_vertex:N0,shadowmap_vertex:O0,shadowmask_pars_fragment:F0,skinbase_vertex:B0,skinning_pars_vertex:z0,skinning_vertex:k0,skinnormal_vertex:V0,specularmap_fragment:H0,specularmap_pars_fragment:G0,tonemapping_fragment:W0,tonemapping_pars_fragment:X0,transmission_fragment:j0,transmission_pars_fragment:q0,uv_pars_fragment:Y0,uv_pars_vertex:Z0,uv_vertex:J0,worldpos_vertex:K0,background_vert:$0,background_frag:Q0,backgroundCube_vert:e_,backgroundCube_frag:t_,cube_vert:i_,cube_frag:s_,depth_vert:n_,depth_frag:r_,distanceRGBA_vert:a_,distanceRGBA_frag:o_,equirect_vert:l_,equirect_frag:c_,linedashed_vert:h_,linedashed_frag:u_,meshbasic_vert:d_,meshbasic_frag:p_,meshlambert_vert:f_,meshlambert_frag:m_,meshmatcap_vert:g_,meshmatcap_frag:v_,meshnormal_vert:__,meshnormal_frag:x_,meshphong_vert:y_,meshphong_frag:M_,meshphysical_vert:S_,meshphysical_frag:b_,meshtoon_vert:T_,meshtoon_frag:w_,points_vert:E_,points_frag:A_,shadow_vert:R_,shadow_frag:C_,sprite_vert:I_,sprite_frag:P_},ce={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},ui={basic:{uniforms:Ot([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Ot([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new me(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Ot([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Ot([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Ot([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new me(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Ot([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Ot([ce.points,ce.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Ot([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Ot([ce.common,ce.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Ot([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Ot([ce.sprite,ce.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Ot([ce.common,ce.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Ot([ce.lights,ce.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};ui.physical={uniforms:Ot([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Ro={r:0,b:0,g:0},Ps=new Zt,L_=new Le;function U_(r,e,t,i,s,n,a){const o=new me(0);let l=n===!0?0:1,c,h,d=null,u=0,p=null;function m(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?t:e).get(_)),_}function v(x){let _=!1;const C=m(x);C===null?f(o,l):C&&C.isColor&&(f(C,1),_=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(x,_){const C=m(_);C&&(C.isCubeTexture||C.mapping===Os)?(h===void 0&&(h=new gt(new gs(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:tn(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ps.copy(_.backgroundRotation),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(L_.makeRotationFromEuler(Ps)),h.material.toneMapped=Je.getTransfer(C.colorSpace)!==st,(d!==C||u!==C.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,d=C,u=C.version,p=r.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new gt(new fn(2,2),new li({name:"BackgroundMaterial",uniforms:tn(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Je.getTransfer(C.colorSpace)!==st,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||u!==C.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,d=C,u=C.version,p=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function f(x,_){x.getRGB(Ro,Vh(r)),i.buffers.color.setClear(Ro.r,Ro.g,Ro.b,_,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),l=_,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,f(o,l)},render:v,addToRenderList:g,dispose:y}}function D_(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},s=u(null);let n=s,a=!1;function o(M,L,F,B,V){let Y=!1;const W=d(B,F,L);n!==W&&(n=W,c(n.object)),Y=p(M,B,F,V),Y&&m(M,B,F,V),V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,_(M,L,F,B),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function d(M,L,F){const B=F.wireframe===!0;let V=i[M.id];V===void 0&&(V={},i[M.id]=V);let Y=V[L.id];Y===void 0&&(Y={},V[L.id]=Y);let W=Y[B];return W===void 0&&(W=u(l()),Y[B]=W),W}function u(M){const L=[],F=[],B=[];for(let V=0;V<t;V++)L[V]=0,F[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:B,object:M,attributes:{},index:null}}function p(M,L,F,B){const V=n.attributes,Y=L.attributes;let W=0;const te=F.getAttributes();for(const G in te)if(te[G].location>=0){const ne=V[G];let ge=Y[G];if(ge===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor)),ne===void 0||ne.attribute!==ge||ge&&ne.data!==ge.data)return!0;W++}return n.attributesNum!==W||n.index!==B}function m(M,L,F,B){const V={},Y=L.attributes;let W=0;const te=F.getAttributes();for(const G in te)if(te[G].location>=0){let ne=Y[G];ne===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor));const ge={};ge.attribute=ne,ne&&ne.data&&(ge.data=ne.data),V[G]=ge,W++}n.attributes=V,n.attributesNum=W,n.index=B}function v(){const M=n.newAttributes;for(let L=0,F=M.length;L<F;L++)M[L]=0}function g(M){f(M,0)}function f(M,L){const F=n.newAttributes,B=n.enabledAttributes,V=n.attributeDivisors;F[M]=1,B[M]===0&&(r.enableVertexAttribArray(M),B[M]=1),V[M]!==L&&(r.vertexAttribDivisor(M,L),V[M]=L)}function y(){const M=n.newAttributes,L=n.enabledAttributes;for(let F=0,B=L.length;F<B;F++)L[F]!==M[F]&&(r.disableVertexAttribArray(F),L[F]=0)}function x(M,L,F,B,V,Y,W){W===!0?r.vertexAttribIPointer(M,L,F,V,Y):r.vertexAttribPointer(M,L,F,B,V,Y)}function _(M,L,F,B){v();const V=B.attributes,Y=F.getAttributes(),W=L.defaultAttributeValues;for(const te in Y){const G=Y[te];if(G.location>=0){let ne=V[te];if(ne===void 0&&(te==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),te==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor)),ne!==void 0){const ge=ne.normalized,Ue=ne.itemSize,Xe=e.get(ne);if(Xe===void 0)continue;const tt=Xe.buffer,X=Xe.type,ie=Xe.bytesPerElement,_e=X===r.INT||X===r.UNSIGNED_INT||ne.gpuType===Cr;if(ne.isInterleavedBufferAttribute){const ae=ne.data,Ie=ae.stride,Re=ne.offset;if(ae.isInstancedInterleavedBuffer){for(let De=0;De<G.locationSize;De++)f(G.location+De,ae.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let De=0;De<G.locationSize;De++)g(G.location+De);r.bindBuffer(r.ARRAY_BUFFER,tt);for(let De=0;De<G.locationSize;De++)x(G.location+De,Ue/G.locationSize,X,ge,Ie*ie,(Re+Ue/G.locationSize*De)*ie,_e)}else{if(ne.isInstancedBufferAttribute){for(let ae=0;ae<G.locationSize;ae++)f(G.location+ae,ne.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ae=0;ae<G.locationSize;ae++)g(G.location+ae);r.bindBuffer(r.ARRAY_BUFFER,tt);for(let ae=0;ae<G.locationSize;ae++)x(G.location+ae,Ue/G.locationSize,X,ge,Ue*ie,Ue/G.locationSize*ae*ie,_e)}}else if(W!==void 0){const ge=W[te];if(ge!==void 0)switch(ge.length){case 2:r.vertexAttrib2fv(G.location,ge);break;case 3:r.vertexAttrib3fv(G.location,ge);break;case 4:r.vertexAttrib4fv(G.location,ge);break;default:r.vertexAttrib1fv(G.location,ge)}}}}y()}function C(){I();for(const M in i){const L=i[M];for(const F in L){const B=L[F];for(const V in B)h(B[V].object),delete B[V];delete L[F]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const F in L){const B=L[F];for(const V in B)h(B[V].object),delete B[V];delete L[F]}delete i[M.id]}function R(M){for(const L in i){const F=i[L];if(F[M.id]===void 0)continue;const B=F[M.id];for(const V in B)h(B[V].object),delete B[V];delete F[M.id]}}function I(){T(),a=!0,n!==s&&(n=s,c(n.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}function N_(r,e,t){let i;function s(c){i=c}function n(c,h){r.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,d){d!==0&&(r.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let u=0;for(let p=0;p<d;p++)u+=h[p];t.update(u,i,1)}function l(c,h,d,u){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)a(c[m],h[m],u[m]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let m=0;for(let v=0;v<d;v++)m+=h[v]*u[v];t.update(m,i,1)}}this.setMode=s,this.render=n,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function O_(r,e,t,i){let s;function n(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Ut&&i.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const I=R===zs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==mi&&i.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==zt&&!I)}function l(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:C,maxSamples:w}}function F_(r){const e=this;let t=null,i=0,s=!1,n=!1;const a=new Yi,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||s;return s=u,i=d.length,p},this.beginShadows=function(){n=!0,h(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){const m=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,f=r.get(d);if(!s||m===null||m.length===0||n&&!g)n?h(null):c();else{const y=n?0:i,x=y*4;let _=f.clippingState||null;l.value=_,_=h(m,u,x,p);for(let C=0;C!==x;++C)_[C]=t[C];f.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,p,m){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const f=p+v*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<f)&&(g=new Float32Array(f));for(let x=0,_=p;x!==v;++x,_+=4)a.copy(d[x]).applyMatrix4(y,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function B_(r){let e=new WeakMap;function t(a,o){return o===yn?a.mapping=wi:o===Mn&&(a.mapping=zi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===yn||o===Mn)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new jh(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function n(){e=new WeakMap}return{get:i,dispose:n}}const mn=4,Nd=[.125,.215,.35,.446,.526,.582],Ls=20,mc=new xo,Od=new me;let gc=null,vc=0,_c=0,xc=!1;const Us=(1+Math.sqrt(5))/2,gn=1/Us,Fd=[new E(-Us,gn,0),new E(Us,gn,0),new E(-gn,0,Us),new E(gn,0,Us),new E(0,Us,-gn),new E(0,Us,gn),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)];class yc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){gc=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const n=this._allocateTargets();return n.depthBuffer=!0,this._sceneToCubeUV(e,i,s,n),t>0&&this._blur(n,0,0,t),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gc,vc,_c),this._renderer.xr.enabled=xc,e.scissorTest=!1,Co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wi||e.mapping===zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gc=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,16*7),t=4*this._cubeSize,i={magFilter:_t,minFilter:_t,generateMipmaps:!1,type:zs,format:Ut,colorSpace:cs,depthBuffer:!1},s=Bd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bd(e,t,i);const{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=z_(n)),this._blurMaterial=k_(n,e,t)}return s}_compileMaterial(e){const t=new gt(this._lodPlanes[0],e);this._renderer.compile(t,mc)}_sceneToCubeUV(e,t,i,s){const n=90,a=1,o=new Tt(n,a,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Od),h.toneMapping=Ti,h.autoClear=!1;const p=new ji({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),m=new gt(new gs,p);let v=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,v=!0):(p.color.copy(Od),v=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):y===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const x=this._cubeSize;Co(s,y*x,f>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(m,o),h.render(e,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===wi||e.mapping===zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=kd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zd());const n=s?this._cubemapMaterial:this._equirectMaterial,a=new gt(this._lodPlanes[0],n),o=n.uniforms;o.envMap.value=e;const l=this._cubeSize;Co(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,mc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let n=1;n<s;n++){const a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=Fd[(s-n-1)%Fd.length];this._blur(e,n-1,n,a,o)}t.autoClear=i}_blur(e,t,i,s,n){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",n),this._halfBlur(a,e,i,i,s,"longitudinal",n)}_halfBlur(e,t,i,s,n,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new gt(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[i]-1,m=isFinite(n)?Math.PI/(2*p):2*Math.PI/(2*Ls-1),v=n/m,g=isFinite(n)?1+Math.floor(h*v):Ls;g>Ls&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ls}`);const f=[];let y=0;for(let R=0;R<Ls;++R){const I=R/v,T=Math.exp(-I*I/2);f.push(T),R===0?y+=T:R<g&&(y+=2*T)}for(let R=0;R<f.length;R++)f[R]=f[R]/y;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:x}=this;u.dTheta.value=m,u.mipInt.value=x-i;const _=this._sizeLods[s],C=3*_*(s>x-mn?s-x+mn:0),w=4*(this._cubeSize-_);Co(t,C,w,3*_,2*_),l.setRenderTarget(t),l.render(d,mc)}}function z_(r){const e=[],t=[],i=[];let s=r;const n=r-mn+1+Nd.length;for(let a=0;a<n;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>r-mn?l=Nd[a-r+mn-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,m=6,v=3,g=2,f=1,y=new Float32Array(v*m*p),x=new Float32Array(g*m*p),_=new Float32Array(f*m*p);for(let w=0;w<p;w++){const R=w%3*2/3-1,I=w>2?0:-1,T=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];y.set(T,v*m*w),x.set(u,g*m*w);const M=[w,w,w,w,w,w];_.set(M,f*m*w)}const C=new Ge;C.setAttribute("position",new at(y,v)),C.setAttribute("uv",new at(x,g)),C.setAttribute("faceIndex",new at(_,f)),e.push(C),s>mn&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Bd(r,e,t){const i=new vi(r,e,t);return i.texture.mapping=Os,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Co(r,e,t,i,s){r.viewport.set(e,t,i,s),r.scissor.set(e,t,i,s)}function k_(r,e,t){const i=new Float32Array(Ls),s=new E(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function zd(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function kd(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Mc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function V_(r){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===yn||l===Mn,h=l===wi||l===zi;if(c||h){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new yc(r)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new yc(r)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",n),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function n(o){const l=o.target;l.removeEventListener("dispose",n);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function H_(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Hs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function G_(r,e,t,i){const s={},n=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete s[u.id];const p=n.get(u);p&&(e.remove(p),n.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const p in u)e.update(u[p],r.ARRAY_BUFFER)}function c(d){const u=[],p=d.index,m=d.attributes.position;let v=0;if(p!==null){const y=p.array;v=p.version;for(let x=0,_=y.length;x<_;x+=3){const C=y[x+0],w=y[x+1],R=y[x+2];u.push(C,w,w,R,R,C)}}else if(m!==void 0){const y=m.array;v=m.version;for(let x=0,_=y.length/3-1;x<_;x+=3){const C=x+0,w=x+1,R=x+2;u.push(C,w,w,R,R,C)}}else return;const g=new(Sh(u)?yl:xl)(u,1);g.version=v;const f=n.get(d);f&&e.remove(f),n.set(d,g)}function h(d){const u=n.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return n.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function W_(r,e,t){let i;function s(u){i=u}let n,a;function o(u){n=u.type,a=u.bytesPerElement}function l(u,p){r.drawElements(i,p,n,u*a),t.update(p,i,1)}function c(u,p,m){m!==0&&(r.drawElementsInstanced(i,p,n,u*a,m),t.update(p,i,m))}function h(u,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,n,u,0,m);let v=0;for(let g=0;g<m;g++)v+=p[g];t.update(v,i,1)}function d(u,p,m,v){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<u.length;f++)c(u[f]/a,p[f],v[f]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,n,u,0,v,0,m);let f=0;for(let y=0;y<m;y++)f+=p[y]*v[y];t.update(f,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function X_(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(n/3);break;case r.LINES:t.lines+=o*(n/2);break;case r.LINE_STRIP:t.lines+=o*(n-1);break;case r.LINE_LOOP:t.lines+=o*n;break;case r.POINTS:t.points+=o*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function j_(r,e,t){const i=new WeakMap,s=new Ke;function n(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let p=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",p)};u!==void 0&&u.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let _=0;m===!0&&(_=1),v===!0&&(_=2),g===!0&&(_=3);let C=o.attributes.position.count*_,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const R=new Float32Array(C*w*4*d),I=new Bn(R,C,w,d);I.type=zt,I.needsUpdate=!0;const T=_*4;for(let M=0;M<d;M++){const L=f[M],F=y[M],B=x[M],V=C*w*4*M;for(let Y=0;Y<L.count;Y++){const W=Y*T;m===!0&&(s.fromBufferAttribute(L,Y),R[V+W+0]=s.x,R[V+W+1]=s.y,R[V+W+2]=s.z,R[V+W+3]=0),v===!0&&(s.fromBufferAttribute(F,Y),R[V+W+4]=s.x,R[V+W+5]=s.y,R[V+W+6]=s.z,R[V+W+7]=0),g===!0&&(s.fromBufferAttribute(B,Y),R[V+W+8]=s.x,R[V+W+9]=s.y,R[V+W+10]=s.z,R[V+W+11]=B.itemSize===4?s.w:1)}}u={count:d,texture:I,size:new Z(C,w)},i.set(o,u),o.addEventListener("dispose",p)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];const m=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:n}}function q_(r,e,t,i){let s=new WeakMap;function n(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:n,dispose:a}}const Vd=new dt,Hd=new Nl(1,1),Gd=new Bn,Wd=new ua,Xd=new Wn,jd=[],qd=[],Yd=new Float32Array(16),Zd=new Float32Array(9),Jd=new Float32Array(4);function vn(r,e,t){const i=r[0];if(i<=0||i>0)return r;const s=e*t;let n=jd[s];if(n===void 0&&(n=new Float32Array(s),jd[s]=n),e!==0){i.toArray(n,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(n,o)}return n}function xt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function yt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Io(r,e){let t=qd[e];t===void 0&&(t=new Int32Array(e),qd[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function Y_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Z_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2fv(this.addr,e),yt(t,e)}}function J_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;r.uniform3fv(this.addr,e),yt(t,e)}}function K_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4fv(this.addr,e),yt(t,e)}}function $_(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,i))return;Jd.set(i),r.uniformMatrix2fv(this.addr,!1,Jd),yt(t,i)}}function Q_(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,i))return;Zd.set(i),r.uniformMatrix3fv(this.addr,!1,Zd),yt(t,i)}}function ex(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,i))return;Yd.set(i),r.uniformMatrix4fv(this.addr,!1,Yd),yt(t,i)}}function tx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ix(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2iv(this.addr,e),yt(t,e)}}function sx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;r.uniform3iv(this.addr,e),yt(t,e)}}function nx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4iv(this.addr,e),yt(t,e)}}function rx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ax(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2uiv(this.addr,e),yt(t,e)}}function ox(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;r.uniform3uiv(this.addr,e),yt(t,e)}}function lx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4uiv(this.addr,e),yt(t,e)}}function cx(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s);let n;this.type===r.SAMPLER_2D_SHADOW?(Hd.compareFunction=Qo,n=Hd):n=Vd,t.setTexture2D(e||n,s)}function hx(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Wd,s)}function ux(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Xd,s)}function dx(r,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(r.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Gd,s)}function px(r){switch(r){case 5126:return Y_;case 35664:return Z_;case 35665:return J_;case 35666:return K_;case 35674:return $_;case 35675:return Q_;case 35676:return ex;case 5124:case 35670:return tx;case 35667:case 35671:return ix;case 35668:case 35672:return sx;case 35669:case 35673:return nx;case 5125:return rx;case 36294:return ax;case 36295:return ox;case 36296:return lx;case 35678:case 36198:case 36298:case 36306:case 35682:return cx;case 35679:case 36299:case 36307:return hx;case 35680:case 36300:case 36308:case 36293:return ux;case 36289:case 36303:case 36311:case 36292:return dx}}function fx(r,e){r.uniform1fv(this.addr,e)}function mx(r,e){const t=vn(e,this.size,2);r.uniform2fv(this.addr,t)}function gx(r,e){const t=vn(e,this.size,3);r.uniform3fv(this.addr,t)}function vx(r,e){const t=vn(e,this.size,4);r.uniform4fv(this.addr,t)}function _x(r,e){const t=vn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function xx(r,e){const t=vn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function yx(r,e){const t=vn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Mx(r,e){r.uniform1iv(this.addr,e)}function Sx(r,e){r.uniform2iv(this.addr,e)}function bx(r,e){r.uniform3iv(this.addr,e)}function Tx(r,e){r.uniform4iv(this.addr,e)}function wx(r,e){r.uniform1uiv(this.addr,e)}function Ex(r,e){r.uniform2uiv(this.addr,e)}function Ax(r,e){r.uniform3uiv(this.addr,e)}function Rx(r,e){r.uniform4uiv(this.addr,e)}function Cx(r,e,t){const i=this.cache,s=e.length,n=Io(t,s);xt(i,n)||(r.uniform1iv(this.addr,n),yt(i,n));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Vd,n[a])}function Ix(r,e,t){const i=this.cache,s=e.length,n=Io(t,s);xt(i,n)||(r.uniform1iv(this.addr,n),yt(i,n));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Wd,n[a])}function Px(r,e,t){const i=this.cache,s=e.length,n=Io(t,s);xt(i,n)||(r.uniform1iv(this.addr,n),yt(i,n));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Xd,n[a])}function Lx(r,e,t){const i=this.cache,s=e.length,n=Io(t,s);xt(i,n)||(r.uniform1iv(this.addr,n),yt(i,n));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Gd,n[a])}function Ux(r){switch(r){case 5126:return fx;case 35664:return mx;case 35665:return gx;case 35666:return vx;case 35674:return _x;case 35675:return xx;case 35676:return yx;case 5124:case 35670:return Mx;case 35667:case 35671:return Sx;case 35668:case 35672:return bx;case 35669:case 35673:return Tx;case 5125:return wx;case 36294:return Ex;case 36295:return Ax;case 36296:return Rx;case 35678:case 36198:case 36298:case 36306:case 35682:return Cx;case 35679:case 36299:case 36307:return Ix;case 35680:case 36300:case 36308:case 36293:return Px;case 36289:case 36303:case 36311:case 36292:return Lx}}class Dx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=px(t.type)}}class Nx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ux(t.type)}}class Ox{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let n=0,a=s.length;n!==a;++n){const o=s[n];o.setValue(e,t[o.id],i)}}}const Sc=/(\w+)(\])?(\[|\.)?/g;function Kd(r,e){r.seq.push(e),r.map[e.id]=e}function Fx(r,e,t){const i=r.name,s=i.length;for(Sc.lastIndex=0;;){const n=Sc.exec(i),a=Sc.lastIndex;let o=n[1];const l=n[2]==="]",c=n[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Kd(t,c===void 0?new Dx(o,r,e):new Nx(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new Ox(o),Kd(t,h)),t=h}}}class Po{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const n=e.getActiveUniform(t,s),a=e.getUniformLocation(t,n.name);Fx(n,a,this)}}setValue(e,t,i,s){const n=this.map[t];n!==void 0&&n.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let n=0,a=t.length;n!==a;++n){const o=t[n],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,n=e.length;s!==n;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function $d(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const Bx=37297;let zx=0;function kx(r,e){const t=r.split(`
`),i=[],s=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let a=s;a<n;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Qd=new ke;function Vx(r){Je._getMatrix(Qd,Je.workingColorSpace,r);const e=`mat3( ${Qd.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(r)){case Un:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function ep(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),s=r.getShaderInfoLog(e).trim();if(i&&s==="")return"";const n=/ERROR: 0:(\d+)/.exec(s);if(n){const a=parseInt(n[1]);return t.toUpperCase()+`

`+s+`

`+kx(r.getShaderSource(e),a)}else return s}function Hx(r,e){const t=Vx(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Gx(r,e){let t;switch(e){case eh:t="Linear";break;case th:t="Reinhard";break;case ih:t="Cineon";break;case sh:t="ACESFilmic";break;case rh:t="AgX";break;case ah:t="Neutral";break;case nh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Lo=new E;function Wx(){Je.getLuminanceCoefficients(Lo);const r=Lo.x.toFixed(4),e=Lo.y.toFixed(4),t=Lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function jx(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function qx(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const n=r.getActiveAttrib(e,s),a=n.name;let o=1;n.type===r.FLOAT_MAT2&&(o=2),n.type===r.FLOAT_MAT3&&(o=3),n.type===r.FLOAT_MAT4&&(o=4),t[a]={type:n.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function mr(r){return r!==""}function tp(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ip(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yx=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(r){return r.replace(Yx,Jx)}const Zx=new Map;function Jx(r,e){let t=We[e];if(t===void 0){const i=Zx.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return bc(t)}const Kx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sp(r){return r.replace(Kx,$x)}function $x(r,e,t,i){let s="";for(let n=parseInt(e);n<parseInt(t);n++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return s}function np(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Oo?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Uc?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function ey(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case wi:case zi:e="ENVMAP_TYPE_CUBE";break;case Os:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ty(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case zi:e="ENVMAP_MODE_REFRACTION";break}return e}function iy(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case xn:e="ENVMAP_BLENDING_MULTIPLY";break;case $c:e="ENVMAP_BLENDING_MIX";break;case Qc:e="ENVMAP_BLENDING_ADD";break}return e}function sy(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function ny(r,e,t,i){const s=r.getContext(),n=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Qx(t),c=ey(t),h=ty(t),d=iy(t),u=sy(t),p=Xx(t),m=jx(n),v=s.createProgram();let g,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(mr).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(mr).join(`
`),f.length>0&&(f+=`
`)):(g=[np(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),f=[np(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?We.tonemapping_pars_fragment:"",t.toneMapping!==Ti?Gx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Hx("linearToOutputTexel",t.outputColorSpace),Wx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),a=bc(a),a=tp(a,t),a=ip(a,t),o=bc(o),o=tp(o,t),o=ip(o,t),a=sp(a),o=sp(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",t.glslVersion===el?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===el?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=y+g+a,_=y+f+o,C=$d(s,s.VERTEX_SHADER,x),w=$d(s,s.FRAGMENT_SHADER,_);s.attachShader(v,C),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(L){if(r.debug.checkShaderErrors){const F=s.getProgramInfoLog(v).trim(),B=s.getShaderInfoLog(C).trim(),V=s.getShaderInfoLog(w).trim();let Y=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,v,C,w);else{const te=ep(s,C,"vertex"),G=ep(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+te+`
`+G)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||V==="")&&(W=!1);W&&(L.diagnostics={runnable:Y,programLog:F,vertexShader:{log:B,prefix:g},fragmentShader:{log:V,prefix:f}})}s.deleteShader(C),s.deleteShader(w),I=new Po(s,v),T=qx(s,v)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,Bx)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zx++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=w,this}let ry=0;class ay{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),n=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(n)===!1&&(a.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new oy(e),t.set(e,i)),i}}class oy{constructor(e){this.id=ry++,this.code=e,this.usedTimes=0}}function ly(r,e,t,i,s,n,a){const o=new _a,l=new ay,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let p=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function g(T,M,L,F,B){const V=F.fog,Y=B.geometry,W=T.isMeshStandardMaterial?F.environment:null,te=(T.isMeshStandardMaterial?t:e).get(T.envMap||W),G=!!te&&te.mapping===Os?te.image.height:null,ne=m[T.type];T.precision!==null&&(p=s.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const ge=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ue=ge!==void 0?ge.length:0;let Xe=0;Y.morphAttributes.position!==void 0&&(Xe=1),Y.morphAttributes.normal!==void 0&&(Xe=2),Y.morphAttributes.color!==void 0&&(Xe=3);let tt,X,ie,_e;if(ne){const it=ui[ne];tt=it.vertexShader,X=it.fragmentShader}else tt=T.vertexShader,X=T.fragmentShader,l.update(T),ie=l.getVertexShaderID(T),_e=l.getFragmentShaderID(T);const ae=r.getRenderTarget(),Ie=r.state.buffers.depth.getReversed(),Re=B.isInstancedMesh===!0,De=B.isBatchedMesh===!0,ee=!!T.map,$=!!T.matcap,re=!!te,P=!!T.aoMap,pe=!!T.lightMap,ye=!!T.bumpMap,Se=!!T.normalMap,oe=!!T.displacementMap,He=!!T.emissiveMap,ue=!!T.metalnessMap,A=!!T.roughnessMap,S=T.anisotropy>0,O=T.clearcoat>0,q=T.dispersion>0,K=T.iridescence>0,j=T.sheen>0,Ae=T.transmission>0,he=S&&!!T.anisotropyMap,Me=O&&!!T.clearcoatMap,qe=O&&!!T.clearcoatNormalMap,se=O&&!!T.clearcoatRoughnessMap,be=K&&!!T.iridescenceMap,Pe=K&&!!T.iridescenceThicknessMap,Ne=j&&!!T.sheenColorMap,Te=j&&!!T.sheenRoughnessMap,Ye=!!T.specularMap,je=!!T.specularColorMap,ot=!!T.specularIntensityMap,U=Ae&&!!T.transmissionMap,de=Ae&&!!T.thicknessMap,H=!!T.gradientMap,J=!!T.alphaMap,fe=T.alphaTest>0,le=!!T.alphaHash,Ze=!!T.extensions;let ut=Ti;T.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ut=r.toneMapping);const wt={shaderID:ne,shaderType:T.type,shaderName:T.name,vertexShader:tt,fragmentShader:X,defines:T.defines,customVertexShaderID:ie,customFragmentShaderID:_e,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:De,batchingColor:De&&B._colorsTexture!==null,instancing:Re,instancingColor:Re&&B.instanceColor!==null,instancingMorph:Re&&B.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ae===null?r.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:cs,alphaToCoverage:!!T.alphaToCoverage,map:ee,matcap:$,envMap:re,envMapMode:re&&te.mapping,envMapCubeUVHeight:G,aoMap:P,lightMap:pe,bumpMap:ye,normalMap:Se,displacementMap:u&&oe,emissiveMap:He,normalMapObjectSpace:Se&&T.normalMapType===ph,normalMapTangentSpace:Se&&T.normalMapType===ki,metalnessMap:ue,roughnessMap:A,anisotropy:S,anisotropyMap:he,clearcoat:O,clearcoatMap:Me,clearcoatNormalMap:qe,clearcoatRoughnessMap:se,dispersion:q,iridescence:K,iridescenceMap:be,iridescenceThicknessMap:Pe,sheen:j,sheenColorMap:Ne,sheenRoughnessMap:Te,specularMap:Ye,specularColorMap:je,specularIntensityMap:ot,transmission:Ae,transmissionMap:U,thicknessMap:de,gradientMap:H,opaque:T.transparent===!1&&T.blending===is&&T.alphaToCoverage===!1,alphaMap:J,alphaTest:fe,alphaHash:le,combine:T.combine,mapUv:ee&&v(T.map.channel),aoMapUv:P&&v(T.aoMap.channel),lightMapUv:pe&&v(T.lightMap.channel),bumpMapUv:ye&&v(T.bumpMap.channel),normalMapUv:Se&&v(T.normalMap.channel),displacementMapUv:oe&&v(T.displacementMap.channel),emissiveMapUv:He&&v(T.emissiveMap.channel),metalnessMapUv:ue&&v(T.metalnessMap.channel),roughnessMapUv:A&&v(T.roughnessMap.channel),anisotropyMapUv:he&&v(T.anisotropyMap.channel),clearcoatMapUv:Me&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:qe&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:Te&&v(T.sheenRoughnessMap.channel),specularMapUv:Ye&&v(T.specularMap.channel),specularColorMapUv:je&&v(T.specularColorMap.channel),specularIntensityMapUv:ot&&v(T.specularIntensityMap.channel),transmissionMapUv:U&&v(T.transmissionMap.channel),thicknessMapUv:de&&v(T.thicknessMap.channel),alphaMapUv:J&&v(T.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Se||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(ee||J),fog:!!V,useFog:T.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ie,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:Xe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:ut,decodeVideoTexture:ee&&T.map.isVideoTexture===!0&&Je.getTransfer(T.map.colorSpace)===st,decodeVideoTextureEmissive:He&&T.emissiveMap.isVideoTexture===!0&&Je.getTransfer(T.emissiveMap.colorSpace)===st,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===pi,flipSided:T.side===Lt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ze&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&T.extensions.multiDraw===!0||De)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function f(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)M.push(L),M.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(y(M,T),x(M,T),M.push(r.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function y(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function x(T,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),T.push(o.mask)}function _(T){const M=m[T.type];let L;if(M){const F=ui[M];L=Hh.clone(F.uniforms)}else L=T.uniforms;return L}function C(T,M){let L;for(let F=0,B=h.length;F<B;F++){const V=h[F];if(V.cacheKey===M){L=V,++L.usedTimes;break}}return L===void 0&&(L=new ny(r,M,T,n),h.push(L)),L}function w(T){if(--T.usedTimes==0){const M=h.indexOf(T);h[M]=h[h.length-1],h.pop(),T.destroy()}}function R(T){l.remove(T)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:_,acquireProgram:C,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:I}}function cy(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function s(a,o,l){r.get(a)[o]=l}function n(){r=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:n}}function hy(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function rp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ap(){const r=[];let e=0;const t=[],i=[],s=[];function n(){e=0,t.length=0,i.length=0,s.length=0}function a(d,u,p,m,v,g){let f=r[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:m,renderOrder:d.renderOrder,z:v,group:g},r[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=m,f.renderOrder=d.renderOrder,f.z=v,f.group=g),e++,f}function o(d,u,p,m,v,g){const f=a(d,u,p,m,v,g);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(d,u,p,m,v,g){const f=a(d,u,p,m,v,g);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(d,u){t.length>1&&t.sort(d||hy),i.length>1&&i.sort(u||rp),s.length>1&&s.sort(u||rp)}function h(){for(let d=e,u=r.length;d<u;d++){const p=r[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:n,push:o,unshift:l,finish:h,sort:c}}function uy(){let r=new WeakMap;function e(i,s){const n=r.get(i);let a;return n===void 0?(a=new ap,r.set(i,[a])):s>=n.length?(a=new ap,n.push(a)):a=n[s],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function dy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new me};break;case"SpotLight":t={position:new E,direction:new E,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new me,groundColor:new me};break;case"RectAreaLight":t={color:new me,position:new E,halfWidth:new E,halfHeight:new E};break}return r[e.id]=t,t}}}function py(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let fy=0;function my(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function gy(r){const e=new dy,t=py(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new E);const s=new E,n=new Le,a=new Le;function o(c){let h=0,d=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,m=0,v=0,g=0,f=0,y=0,x=0,_=0,C=0,w=0,R=0;c.sort(my);for(let T=0,M=c.length;T<M;T++){const L=c[T],F=L.color,B=L.intensity,V=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=F.r*B,d+=F.g*B,u+=F.b*B;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],B);R++}else if(L.isDirectionalLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const te=L.shadow,G=t.get(L);G.shadowIntensity=te.intensity,G.shadowBias=te.bias,G.shadowNormalBias=te.normalBias,G.shadowRadius=te.radius,G.shadowMapSize=te.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=L.shadow.matrix,y++}i.directional[p]=W,p++}else if(L.isSpotLight){const W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(F).multiplyScalar(B),W.distance=V,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[v]=W;const te=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,te.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[v]=te.matrix,L.castShadow){const G=t.get(L);G.shadowIntensity=te.intensity,G.shadowBias=te.bias,G.shadowNormalBias=te.normalBias,G.shadowRadius=te.radius,G.shadowMapSize=te.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=Y,_++}v++}else if(L.isRectAreaLight){const W=e.get(L);W.color.copy(F).multiplyScalar(B),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=W,g++}else if(L.isPointLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const te=L.shadow,G=t.get(L);G.shadowIntensity=te.intensity,G.shadowBias=te.bias,G.shadowNormalBias=te.normalBias,G.shadowRadius=te.radius,G.shadowMapSize=te.mapSize,G.shadowCameraNear=te.camera.near,G.shadowCameraFar=te.camera.far,i.pointShadow[m]=G,i.pointShadowMap[m]=Y,i.pointShadowMatrix[m]=L.shadow.matrix,x++}i.point[m]=W,m++}else if(L.isHemisphereLight){const W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(B),W.groundColor.copy(L.groundColor).multiplyScalar(B),i.hemi[f]=W,f++}}g>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const I=i.hash;(I.directionalLength!==p||I.pointLength!==m||I.spotLength!==v||I.rectAreaLength!==g||I.hemiLength!==f||I.numDirectionalShadows!==y||I.numPointShadows!==x||I.numSpotShadows!==_||I.numSpotMaps!==C||I.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=g,i.point.length=m,i.hemi.length=f,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=_+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,I.directionalLength=p,I.pointLength=m,I.spotLength=v,I.rectAreaLength=g,I.hemiLength=f,I.numDirectionalShadows=y,I.numPointShadows=x,I.numSpotShadows=_,I.numSpotMaps=C,I.numLightProbes=R,i.version=fy++)}function l(c,h){let d=0,u=0,p=0,m=0,v=0;const g=h.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){const x=c[f];if(x.isDirectionalLight){const _=i.directional[d];_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),d++}else if(x.isSpotLight){const _=i.spot[p];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),p++}else if(x.isRectAreaLight){const _=i.rectArea[m];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),a.identity(),n.copy(x.matrixWorld),n.premultiply(g),a.extractRotation(n),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){const _=i.point[u];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),u++}else if(x.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:i}}function op(r){const e=new gy(r),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function n(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:n,pushShadow:a}}function vy(r){let e=new WeakMap;function t(s,n=0){const a=e.get(s);let o;return a===void 0?(o=new op(r),e.set(s,[o])):n>=a.length?(o=new op(r),a.push(o)):o=a[n],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const _y=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yy(r,e,t){let i=new Jn;const s=new Z,n=new Z,a=new Ke,o=new Zl({depthPacking:dh}),l=new Jl,c={},h=t.maxTextureSize,d={[Si]:Lt,[Lt]:Si,[pi]:pi},u=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:_y,fragmentShader:xy}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const m=new Ge;m.setAttribute("position",new at(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new gt(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oo;let f=this.type;this.render=function(w,R,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const T=r.getRenderTarget(),M=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),F=r.state;F.setBlending(bi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=f!==di&&this.type===di,V=f===di&&this.type!==di;for(let Y=0,W=w.length;Y<W;Y++){const te=w[Y],G=te.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ne=G.getFrameExtents();if(s.multiply(ne),n.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(n.x=Math.floor(h/ne.x),s.x=n.x*ne.x,G.mapSize.x=n.x),s.y>h&&(n.y=Math.floor(h/ne.y),s.y=n.y*ne.y,G.mapSize.y=n.y)),G.map===null||B===!0||V===!0){const Ue=this.type!==di?{minFilter:bt,magFilter:bt}:{};G.map!==null&&G.map.dispose(),G.map=new vi(s.x,s.y,Ue),G.map.texture.name=te.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const ge=G.getViewportCount();for(let Ue=0;Ue<ge;Ue++){const Xe=G.getViewport(Ue);a.set(n.x*Xe.x,n.y*Xe.y,n.x*Xe.z,n.y*Xe.w),F.viewport(a),G.updateMatrices(te,Ue),i=G.getFrustum(),_(R,I,G.camera,te,this.type)}G.isPointLightShadow!==!0&&this.type===di&&y(G,I),G.needsUpdate=!1}f=this.type,g.needsUpdate=!1,r.setRenderTarget(T,M,L)};function y(w,R){const I=e.update(v);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new vi(s.x,s.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(R,null,I,u,v,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(R,null,I,p,v,null)}function x(w,R,I,T){let M=null;const L=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)M=L;else if(M=I.isPointLight===!0?l:o,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const F=M.uuid,B=R.uuid;let V=c[F];V===void 0&&(V={},c[F]=V);let Y=V[B];Y===void 0&&(Y=M.clone(),V[B]=Y,R.addEventListener("dispose",C)),M=Y}if(M.visible=R.visible,M.wireframe=R.wireframe,T===di?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:d[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=r.properties.get(M);F.light=I}return M}function _(w,R,I,T,M){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===di)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const F=e.update(w),B=w.material;if(Array.isArray(B)){const V=F.groups;for(let Y=0,W=V.length;Y<W;Y++){const te=V[Y],G=B[te.materialIndex];if(G&&G.visible){const ne=x(w,G,T,M);w.onBeforeShadow(r,w,R,I,F,ne,te),r.renderBufferDirect(I,null,F,ne,w,te),w.onAfterShadow(r,w,R,I,F,ne,te)}}}else if(B.visible){const V=x(w,B,T,M);w.onBeforeShadow(r,w,R,I,F,V,null),r.renderBufferDirect(I,null,F,V,w,null),w.onAfterShadow(r,w,R,I,F,V,null)}}const L=w.children;for(let F=0,B=L.length;F<B;F++)_(L[F],R,I,T,M)}function C(w){w.target.removeEventListener("dispose",C);for(const R in c){const I=c[R],T=w.target.uuid;T in I&&(I[T].dispose(),delete I[T])}}}const My={[Mr]:Sr,[br]:Er,[Tr]:Ar,[ss]:wr,[Sr]:Mr,[Er]:br,[Ar]:Tr,[wr]:ss};function Sy(r,e){function t(){let U=!1;const de=new Ke;let H=null;const J=new Ke(0,0,0,0);return{setMask:function(fe){H!==fe&&!U&&(r.colorMask(fe,fe,fe,fe),H=fe)},setLocked:function(fe){U=fe},setClear:function(fe,le,Ze,ut,wt){wt===!0&&(fe*=ut,le*=ut,Ze*=ut),de.set(fe,le,Ze,ut),J.equals(de)===!1&&(r.clearColor(fe,le,Ze,ut),J.copy(de))},reset:function(){U=!1,H=null,J.set(-1,0,0,0)}}}function i(){let U=!1,de=!1,H=null,J=null,fe=null;return{setReversed:function(le){if(de!==le){const Ze=e.get("EXT_clip_control");de?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT);const ut=fe;fe=null,this.setClear(ut)}de=le},getReversed:function(){return de},setTest:function(le){le?ae(r.DEPTH_TEST):Ie(r.DEPTH_TEST)},setMask:function(le){H!==le&&!U&&(r.depthMask(le),H=le)},setFunc:function(le){if(de&&(le=My[le]),J!==le){switch(le){case Mr:r.depthFunc(r.NEVER);break;case Sr:r.depthFunc(r.ALWAYS);break;case br:r.depthFunc(r.LESS);break;case ss:r.depthFunc(r.LEQUAL);break;case Tr:r.depthFunc(r.EQUAL);break;case wr:r.depthFunc(r.GEQUAL);break;case Er:r.depthFunc(r.GREATER);break;case Ar:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=le}},setLocked:function(le){U=le},setClear:function(le){fe!==le&&(de&&(le=1-le),r.clearDepth(le),fe=le)},reset:function(){U=!1,H=null,J=null,fe=null,de=!1}}}function s(){let U=!1,de=null,H=null,J=null,fe=null,le=null,Ze=null,ut=null,wt=null;return{setTest:function(it){U||(it?ae(r.STENCIL_TEST):Ie(r.STENCIL_TEST))},setMask:function(it){de!==it&&!U&&(r.stencilMask(it),de=it)},setFunc:function(it,ti,Mi){(H!==it||J!==ti||fe!==Mi)&&(r.stencilFunc(it,ti,Mi),H=it,J=ti,fe=Mi)},setOp:function(it,ti,Mi){(le!==it||Ze!==ti||ut!==Mi)&&(r.stencilOp(it,ti,Mi),le=it,Ze=ti,ut=Mi)},setLocked:function(it){U=it},setClear:function(it){wt!==it&&(r.clearStencil(it),wt=it)},reset:function(){U=!1,de=null,H=null,J=null,fe=null,le=null,Ze=null,ut=null,wt=null}}}const n=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,p=[],m=null,v=!1,g=null,f=null,y=null,x=null,_=null,C=null,w=null,R=new me(0,0,0),I=0,T=!1,M=null,L=null,F=null,B=null,V=null;const Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,te=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=te>=1):G.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=te>=2);let ne=null,ge={};const Ue=r.getParameter(r.SCISSOR_BOX),Xe=r.getParameter(r.VIEWPORT),tt=new Ke().fromArray(Ue),X=new Ke().fromArray(Xe);function ie(U,de,H,J){const fe=new Uint8Array(4),le=r.createTexture();r.bindTexture(U,le),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ze=0;Ze<H;Ze++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(de,0,r.RGBA,1,1,J,0,r.RGBA,r.UNSIGNED_BYTE,fe):r.texImage2D(de+Ze,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,fe);return le}const _e={};_e[r.TEXTURE_2D]=ie(r.TEXTURE_2D,r.TEXTURE_2D,1),_e[r.TEXTURE_CUBE_MAP]=ie(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[r.TEXTURE_2D_ARRAY]=ie(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),_e[r.TEXTURE_3D]=ie(r.TEXTURE_3D,r.TEXTURE_3D,1,1),n.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(r.DEPTH_TEST),a.setFunc(ss),ye(!1),Se(No),ae(r.CULL_FACE),P(bi);function ae(U){h[U]!==!0&&(r.enable(U),h[U]=!0)}function Ie(U){h[U]!==!1&&(r.disable(U),h[U]=!1)}function Re(U,de){return d[U]!==de?(r.bindFramebuffer(U,de),d[U]=de,U===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=de),U===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=de),!0):!1}function De(U,de){let H=p,J=!1;if(U){H=u.get(de),H===void 0&&(H=[],u.set(de,H));const fe=U.textures;if(H.length!==fe.length||H[0]!==r.COLOR_ATTACHMENT0){for(let le=0,Ze=fe.length;le<Ze;le++)H[le]=r.COLOR_ATTACHMENT0+le;H.length=fe.length,J=!0}}else H[0]!==r.BACK&&(H[0]=r.BACK,J=!0);J&&r.drawBuffers(H)}function ee(U){return m!==U?(r.useProgram(U),m=U,!0):!1}const $={[Bi]:r.FUNC_ADD,[Nc]:r.FUNC_SUBTRACT,[Oc]:r.FUNC_REVERSE_SUBTRACT};$[Fc]=r.MIN,$[Bc]=r.MAX;const re={[zc]:r.ZERO,[kc]:r.ONE,[Vc]:r.SRC_COLOR,[xr]:r.SRC_ALPHA,[qc]:r.SRC_ALPHA_SATURATE,[Xc]:r.DST_COLOR,[Gc]:r.DST_ALPHA,[Hc]:r.ONE_MINUS_SRC_COLOR,[yr]:r.ONE_MINUS_SRC_ALPHA,[jc]:r.ONE_MINUS_DST_COLOR,[Wc]:r.ONE_MINUS_DST_ALPHA,[Yc]:r.CONSTANT_COLOR,[Zc]:r.ONE_MINUS_CONSTANT_COLOR,[Jc]:r.CONSTANT_ALPHA,[Kc]:r.ONE_MINUS_CONSTANT_ALPHA};function P(U,de,H,J,fe,le,Ze,ut,wt,it){if(U===bi){v===!0&&(Ie(r.BLEND),v=!1);return}if(v===!1&&(ae(r.BLEND),v=!0),U!==Dc){if(U!==g||it!==T){if((f!==Bi||_!==Bi)&&(r.blendEquation(r.FUNC_ADD),f=Bi,_=Bi),it)switch(U){case is:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fo:r.blendFunc(r.ONE,r.ONE);break;case Bo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case zo:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case is:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fo:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Bo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case zo:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,x=null,C=null,w=null,R.set(0,0,0),I=0,g=U,T=it}return}fe=fe||de,le=le||H,Ze=Ze||J,(de!==f||fe!==_)&&(r.blendEquationSeparate($[de],$[fe]),f=de,_=fe),(H!==y||J!==x||le!==C||Ze!==w)&&(r.blendFuncSeparate(re[H],re[J],re[le],re[Ze]),y=H,x=J,C=le,w=Ze),(ut.equals(R)===!1||wt!==I)&&(r.blendColor(ut.r,ut.g,ut.b,wt),R.copy(ut),I=wt),g=U,T=!1}function pe(U,de){U.side===pi?Ie(r.CULL_FACE):ae(r.CULL_FACE);let H=U.side===Lt;de&&(H=!H),ye(H),U.blending===is&&U.transparent===!1?P(bi):P(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),n.setMask(U.colorWrite);const J=U.stencilWrite;o.setTest(J),J&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),He(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ae(r.SAMPLE_ALPHA_TO_COVERAGE):Ie(r.SAMPLE_ALPHA_TO_COVERAGE)}function ye(U){M!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),M=U)}function Se(U){U!==Pc?(ae(r.CULL_FACE),U!==L&&(U===No?r.cullFace(r.BACK):U===Lc?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ie(r.CULL_FACE),L=U}function oe(U){U!==F&&(W&&r.lineWidth(U),F=U)}function He(U,de,H){U?(ae(r.POLYGON_OFFSET_FILL),(B!==de||V!==H)&&(r.polygonOffset(de,H),B=de,V=H)):Ie(r.POLYGON_OFFSET_FILL)}function ue(U){U?ae(r.SCISSOR_TEST):Ie(r.SCISSOR_TEST)}function A(U){U===void 0&&(U=r.TEXTURE0+Y-1),ne!==U&&(r.activeTexture(U),ne=U)}function S(U,de,H){H===void 0&&(ne===null?H=r.TEXTURE0+Y-1:H=ne);let J=ge[H];J===void 0&&(J={type:void 0,texture:void 0},ge[H]=J),(J.type!==U||J.texture!==de)&&(ne!==H&&(r.activeTexture(H),ne=H),r.bindTexture(U,de||_e[U]),J.type=U,J.texture=de)}function O(){const U=ge[ne];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qe(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(U){tt.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),tt.copy(U))}function Te(U){X.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),X.copy(U))}function Ye(U,de){let H=c.get(de);H===void 0&&(H=new WeakMap,c.set(de,H));let J=H.get(U);J===void 0&&(J=r.getUniformBlockIndex(de,U.name),H.set(U,J))}function je(U,de){const H=c.get(de).get(U);l.get(de)!==H&&(r.uniformBlockBinding(de,H,U.__bindingPointIndex),l.set(de,H))}function ot(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ne=null,ge={},d={},u=new WeakMap,p=[],m=null,v=!1,g=null,f=null,y=null,x=null,_=null,C=null,w=null,R=new me(0,0,0),I=0,T=!1,M=null,L=null,F=null,B=null,V=null,tt.set(0,0,r.canvas.width,r.canvas.height),X.set(0,0,r.canvas.width,r.canvas.height),n.reset(),a.reset(),o.reset()}return{buffers:{color:n,depth:a,stencil:o},enable:ae,disable:Ie,bindFramebuffer:Re,drawBuffers:De,useProgram:ee,setBlending:P,setMaterial:pe,setFlipSided:ye,setCullFace:Se,setLineWidth:oe,setPolygonOffset:He,setScissorTest:ue,activeTexture:A,bindTexture:S,unbindTexture:O,compressedTexImage2D:q,compressedTexImage3D:K,texImage2D:be,texImage3D:Pe,updateUBOMapping:Ye,uniformBlockBinding:je,texStorage2D:qe,texStorage3D:se,texSubImage2D:j,texSubImage3D:Ae,compressedTexSubImage2D:he,compressedTexSubImage3D:Me,scissor:Ne,viewport:Te,reset:ot}}function by(r,e,t,i,s,n,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Z,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(A){}function m(A,S){return p?new OffscreenCanvas(A,S):Fn("canvas")}function v(A,S,O){let q=1;const K=ue(A);if((K.width>O||K.height>O)&&(q=O/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){const j=Math.floor(q*K.width),Ae=Math.floor(q*K.height);d===void 0&&(d=m(j,Ae));const he=S?m(j,Ae):d;return he.width=j,he.height=Ae,he.getContext("2d").drawImage(A,0,0,j,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+j+"x"+Ae+")."),he}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function g(A){return A.generateMipmaps}function f(A){r.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(A,S,O,q,K=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=S;if(S===r.RED&&(O===r.FLOAT&&(j=r.R32F),O===r.HALF_FLOAT&&(j=r.R16F),O===r.UNSIGNED_BYTE&&(j=r.R8)),S===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(j=r.R8UI),O===r.UNSIGNED_SHORT&&(j=r.R16UI),O===r.UNSIGNED_INT&&(j=r.R32UI),O===r.BYTE&&(j=r.R8I),O===r.SHORT&&(j=r.R16I),O===r.INT&&(j=r.R32I)),S===r.RG&&(O===r.FLOAT&&(j=r.RG32F),O===r.HALF_FLOAT&&(j=r.RG16F),O===r.UNSIGNED_BYTE&&(j=r.RG8)),S===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(j=r.RG8UI),O===r.UNSIGNED_SHORT&&(j=r.RG16UI),O===r.UNSIGNED_INT&&(j=r.RG32UI),O===r.BYTE&&(j=r.RG8I),O===r.SHORT&&(j=r.RG16I),O===r.INT&&(j=r.RG32I)),S===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(j=r.RGB8UI),O===r.UNSIGNED_SHORT&&(j=r.RGB16UI),O===r.UNSIGNED_INT&&(j=r.RGB32UI),O===r.BYTE&&(j=r.RGB8I),O===r.SHORT&&(j=r.RGB16I),O===r.INT&&(j=r.RGB32I)),S===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),O===r.UNSIGNED_INT&&(j=r.RGBA32UI),O===r.BYTE&&(j=r.RGBA8I),O===r.SHORT&&(j=r.RGBA16I),O===r.INT&&(j=r.RGBA32I)),S===r.RGB&&O===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),S===r.RGBA){const Ae=K?Un:Je.getTransfer(q);O===r.FLOAT&&(j=r.RGBA32F),O===r.HALF_FLOAT&&(j=r.RGBA16F),O===r.UNSIGNED_BYTE&&(j=Ae===st?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function _(A,S){let O;return A?S===null||S===Ei||S===ns?O=r.DEPTH24_STENCIL8:S===zt?O=r.DEPTH32F_STENCIL8:S===Bs&&(O=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ei||S===ns?O=r.DEPTH_COMPONENT24:S===zt?O=r.DEPTH_COMPONENT32F:S===Bs&&(O=r.DEPTH_COMPONENT16),O}function C(A,S){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==bt&&A.minFilter!==_t?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function w(A){const S=A.target;S.removeEventListener("dispose",w),I(S),S.isVideoTexture&&h.delete(S)}function R(A){const S=A.target;S.removeEventListener("dispose",R),M(S)}function I(A){const S=i.get(A);if(S.__webglInit===void 0)return;const O=A.source,q=u.get(O);if(q){const K=q[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&T(A),Object.keys(q).length===0&&u.delete(O)}i.remove(A)}function T(A){const S=i.get(A);r.deleteTexture(S.__webglTexture);const O=A.source,q=u.get(O);delete q[S.__cacheKey],a.memory.textures--}function M(A){const S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let K=0;K<S.__webglFramebuffer[q].length;K++)r.deleteFramebuffer(S.__webglFramebuffer[q][K]);else r.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)r.deleteFramebuffer(S.__webglFramebuffer[q]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=A.textures;for(let q=0,K=O.length;q<K;q++){const j=i.get(O[q]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(O[q])}i.remove(A)}let L=0;function F(){L=0}function B(){const A=L;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),L+=1,A}function V(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function Y(A,S){const O=i.get(A);if(A.isVideoTexture&&oe(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){const q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(O,A,S);return}}t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+S)}function W(A,S){const O=i.get(A);if(A.version>0&&O.__version!==A.version){X(O,A,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+S)}function te(A,S){const O=i.get(A);if(A.version>0&&O.__version!==A.version){X(O,A,S);return}t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+S)}function G(A,S){const O=i.get(A);if(A.version>0&&O.__version!==A.version){ie(O,A,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+S)}const ne={[Sn]:r.REPEAT,[Qt]:r.CLAMP_TO_EDGE,[bn]:r.MIRRORED_REPEAT},ge={[bt]:r.NEAREST,[Vo]:r.NEAREST_MIPMAP_NEAREST,[Fs]:r.NEAREST_MIPMAP_LINEAR,[_t]:r.LINEAR,[Tn]:r.LINEAR_MIPMAP_NEAREST,[fi]:r.LINEAR_MIPMAP_LINEAR},Ue={[fh]:r.NEVER,[yh]:r.ALWAYS,[mh]:r.LESS,[Qo]:r.LEQUAL,[gh]:r.EQUAL,[xh]:r.GEQUAL,[vh]:r.GREATER,[_h]:r.NOTEQUAL};function Xe(A,S){if(S.type===zt&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===_t||S.magFilter===Tn||S.magFilter===Fs||S.magFilter===fi||S.minFilter===_t||S.minFilter===Tn||S.minFilter===Fs||S.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,ne[S.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,ne[S.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,ne[S.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,ge[S.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,ge[S.minFilter]),S.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,Ue[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===bt||S.minFilter!==Fs&&S.minFilter!==fi||S.type===zt&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");r.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function tt(A,S){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",w));const q=S.source;let K=u.get(q);K===void 0&&(K={},u.set(q,K));const j=V(S);if(j!==A.__cacheKey){K[j]===void 0&&(K[j]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),K[j].usedTimes++;const Ae=K[A.__cacheKey];Ae!==void 0&&(K[A.__cacheKey].usedTimes--,Ae.usedTimes===0&&T(S)),A.__cacheKey=j,A.__webglTexture=K[j].texture}return O}function X(A,S,O){let q=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=r.TEXTURE_3D);const K=tt(A,S),j=S.source;t.bindTexture(q,A.__webglTexture,r.TEXTURE0+O);const Ae=i.get(j);if(j.version!==Ae.__version||K===!0){t.activeTexture(r.TEXTURE0+O);const he=Je.getPrimaries(Je.workingColorSpace),Me=S.colorSpace===Ai?null:Je.getPrimaries(S.colorSpace),qe=S.colorSpace===Ai||he===Me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let se=v(S.image,!1,s.maxTextureSize);se=He(S,se);const be=n.convert(S.format,S.colorSpace),Pe=n.convert(S.type);let Ne=x(S.internalFormat,be,Pe,S.colorSpace,S.isVideoTexture);Xe(q,S);let Te;const Ye=S.mipmaps,je=S.isVideoTexture!==!0,ot=Ae.__version===void 0||K===!0,U=j.dataReady,de=C(S,se);if(S.isDepthTexture)Ne=_(S.format===as,S.type),ot&&(je?t.texStorage2D(r.TEXTURE_2D,1,Ne,se.width,se.height):t.texImage2D(r.TEXTURE_2D,0,Ne,se.width,se.height,0,be,Pe,null));else if(S.isDataTexture)if(Ye.length>0){je&&ot&&t.texStorage2D(r.TEXTURE_2D,de,Ne,Ye[0].width,Ye[0].height);for(let H=0,J=Ye.length;H<J;H++)Te=Ye[H],je?U&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,Te.width,Te.height,be,Pe,Te.data):t.texImage2D(r.TEXTURE_2D,H,Ne,Te.width,Te.height,0,be,Pe,Te.data);S.generateMipmaps=!1}else je?(ot&&t.texStorage2D(r.TEXTURE_2D,de,Ne,se.width,se.height),U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se.width,se.height,be,Pe,se.data)):t.texImage2D(r.TEXTURE_2D,0,Ne,se.width,se.height,0,be,Pe,se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){je&&ot&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,Ne,Ye[0].width,Ye[0].height,se.depth);for(let H=0,J=Ye.length;H<J;H++)if(Te=Ye[H],S.format!==Ut)if(be!==null)if(je){if(U)if(S.layerUpdates.size>0){const fe=fc(Te.width,Te.height,S.format,S.type);for(const le of S.layerUpdates){const Ze=Te.data.subarray(le*fe/Te.data.BYTES_PER_ELEMENT,(le+1)*fe/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,le,Te.width,Te.height,1,be,Ze)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,0,Te.width,Te.height,se.depth,be,Te.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,H,Ne,Te.width,Te.height,se.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?U&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,0,Te.width,Te.height,se.depth,be,Pe,Te.data):t.texImage3D(r.TEXTURE_2D_ARRAY,H,Ne,Te.width,Te.height,se.depth,0,be,Pe,Te.data)}else{je&&ot&&t.texStorage2D(r.TEXTURE_2D,de,Ne,Ye[0].width,Ye[0].height);for(let H=0,J=Ye.length;H<J;H++)Te=Ye[H],S.format!==Ut?be!==null?je?U&&t.compressedTexSubImage2D(r.TEXTURE_2D,H,0,0,Te.width,Te.height,be,Te.data):t.compressedTexImage2D(r.TEXTURE_2D,H,Ne,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?U&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,Te.width,Te.height,be,Pe,Te.data):t.texImage2D(r.TEXTURE_2D,H,Ne,Te.width,Te.height,0,be,Pe,Te.data)}else if(S.isDataArrayTexture)if(je){if(ot&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,Ne,se.width,se.height,se.depth),U)if(S.layerUpdates.size>0){const H=fc(se.width,se.height,S.format,S.type);for(const J of S.layerUpdates){const fe=se.data.subarray(J*H/se.data.BYTES_PER_ELEMENT,(J+1)*H/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,se.width,se.height,1,be,Pe,fe)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,be,Pe,se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ne,se.width,se.height,se.depth,0,be,Pe,se.data);else if(S.isData3DTexture)je?(ot&&t.texStorage3D(r.TEXTURE_3D,de,Ne,se.width,se.height,se.depth),U&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,be,Pe,se.data)):t.texImage3D(r.TEXTURE_3D,0,Ne,se.width,se.height,se.depth,0,be,Pe,se.data);else if(S.isFramebufferTexture){if(ot)if(je)t.texStorage2D(r.TEXTURE_2D,de,Ne,se.width,se.height);else{let H=se.width,J=se.height;for(let fe=0;fe<de;fe++)t.texImage2D(r.TEXTURE_2D,fe,Ne,H,J,0,be,Pe,null),H>>=1,J>>=1}}else if(Ye.length>0){if(je&&ot){const H=ue(Ye[0]);t.texStorage2D(r.TEXTURE_2D,de,Ne,H.width,H.height)}for(let H=0,J=Ye.length;H<J;H++)Te=Ye[H],je?U&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,be,Pe,Te):t.texImage2D(r.TEXTURE_2D,H,Ne,be,Pe,Te);S.generateMipmaps=!1}else if(je){if(ot){const H=ue(se);t.texStorage2D(r.TEXTURE_2D,de,Ne,H.width,H.height)}U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,be,Pe,se)}else t.texImage2D(r.TEXTURE_2D,0,Ne,be,Pe,se);g(S)&&f(q),Ae.__version=j.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ie(A,S,O){if(S.image.length!==6)return;const q=tt(A,S),K=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+O);const j=i.get(K);if(K.version!==j.__version||q===!0){t.activeTexture(r.TEXTURE0+O);const Ae=Je.getPrimaries(Je.workingColorSpace),he=S.colorSpace===Ai?null:Je.getPrimaries(S.colorSpace),Me=S.colorSpace===Ai||Ae===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const qe=S.isCompressedTexture||S.image[0].isCompressedTexture,se=S.image[0]&&S.image[0].isDataTexture,be=[];for(let J=0;J<6;J++)!qe&&!se?be[J]=v(S.image[J],!0,s.maxCubemapSize):be[J]=se?S.image[J].image:S.image[J],be[J]=He(S,be[J]);const Pe=be[0],Ne=n.convert(S.format,S.colorSpace),Te=n.convert(S.type),Ye=x(S.internalFormat,Ne,Te,S.colorSpace),je=S.isVideoTexture!==!0,ot=j.__version===void 0||q===!0,U=K.dataReady;let de=C(S,Pe);Xe(r.TEXTURE_CUBE_MAP,S);let H;if(qe){je&&ot&&t.texStorage2D(r.TEXTURE_CUBE_MAP,de,Ye,Pe.width,Pe.height);for(let J=0;J<6;J++){H=be[J].mipmaps;for(let fe=0;fe<H.length;fe++){const le=H[fe];S.format!==Ut?Ne!==null?je?U&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,0,0,le.width,le.height,Ne,le.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,Ye,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,0,0,le.width,le.height,Ne,Te,le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,Ye,le.width,le.height,0,Ne,Te,le.data)}}}else{if(H=S.mipmaps,je&&ot){H.length>0&&de++;const J=ue(be[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,de,Ye,J.width,J.height)}for(let J=0;J<6;J++)if(se){je?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,be[J].width,be[J].height,Ne,Te,be[J].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ye,be[J].width,be[J].height,0,Ne,Te,be[J].data);for(let fe=0;fe<H.length;fe++){const le=H[fe].image[J].image;je?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,0,0,le.width,le.height,Ne,Te,le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,Ye,le.width,le.height,0,Ne,Te,le.data)}}else{je?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ne,Te,be[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ye,Ne,Te,be[J]);for(let fe=0;fe<H.length;fe++){const le=H[fe];je?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,0,0,Ne,Te,le.image[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,Ye,Ne,Te,le.image[J])}}}g(S)&&f(r.TEXTURE_CUBE_MAP),j.__version=K.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function _e(A,S,O,q,K,j){const Ae=n.convert(O.format,O.colorSpace),he=n.convert(O.type),Me=x(O.internalFormat,Ae,he,O.colorSpace),qe=i.get(S),se=i.get(O);if(se.__renderTarget=S,!qe.__hasExternalTextures){const be=Math.max(1,S.width>>j),Pe=Math.max(1,S.height>>j);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?t.texImage3D(K,j,Me,be,Pe,S.depth,0,Ae,he,null):t.texImage2D(K,j,Me,be,Pe,0,Ae,he,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),Se(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,K,se.__webglTexture,0,ye(S)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,K,se.__webglTexture,j),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ae(A,S,O){if(r.bindRenderbuffer(r.RENDERBUFFER,A),S.depthBuffer){const q=S.depthTexture,K=q&&q.isDepthTexture?q.type:null,j=_(S.stencilBuffer,K),Ae=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=ye(S);Se(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,he,j,S.width,S.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,he,j,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,j,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ae,r.RENDERBUFFER,A)}else{const q=S.textures;for(let K=0;K<q.length;K++){const j=q[K],Ae=n.convert(j.format,j.colorSpace),he=n.convert(j.type),Me=x(j.internalFormat,Ae,he,j.colorSpace),qe=ye(S);O&&Se(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,qe,Me,S.width,S.height):Se(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qe,Me,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Me,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ie(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const O=i.get(S.depthTexture);O.__renderTarget=S,(!O.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y(S.depthTexture,0);const q=O.__webglTexture,K=ye(S);if(S.depthTexture.format===rs)Se(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,q,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,q,0);else if(S.depthTexture.format===as)Se(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,q,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Re(A){const S=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const q=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){const K=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),S.__depthDisposeCallback=K}S.__boundDepthTexture=q}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ie(S.__webglFramebuffer,A)}else if(O){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=r.createRenderbuffer(),ae(S.__webglDepthbuffer[q],A,!1);else{const K=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,j)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),ae(S.__webglDepthbuffer,A,!1);else{const q=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,q,r.RENDERBUFFER,K)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function De(A,S,O){const q=i.get(A);S!==void 0&&_e(q.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&Re(A)}function ee(A){const S=A.texture,O=i.get(A),q=i.get(S);A.addEventListener("dispose",R);const K=A.textures,j=A.isWebGLCubeRenderTarget===!0,Ae=K.length>1;if(Ae||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=S.version,a.memory.textures++),j){O.__webglFramebuffer=[];for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[he]=[];for(let Me=0;Me<S.mipmaps.length;Me++)O.__webglFramebuffer[he][Me]=r.createFramebuffer()}else O.__webglFramebuffer[he]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let he=0;he<S.mipmaps.length;he++)O.__webglFramebuffer[he]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(Ae)for(let he=0,Me=K.length;he<Me;he++){const qe=i.get(K[he]);qe.__webglTexture===void 0&&(qe.__webglTexture=r.createTexture(),a.memory.textures++)}if(A.samples>0&&Se(A)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let he=0;he<K.length;he++){const Me=K[he];O.__webglColorRenderbuffer[he]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[he]);const qe=n.convert(Me.format,Me.colorSpace),se=n.convert(Me.type),be=x(Me.internalFormat,qe,se,Me.colorSpace,A.isXRRenderTarget===!0),Pe=ye(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,be,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,O.__webglColorRenderbuffer[he])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),ae(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),Xe(r.TEXTURE_CUBE_MAP,S);for(let he=0;he<6;he++)if(S.mipmaps&&S.mipmaps.length>0)for(let Me=0;Me<S.mipmaps.length;Me++)_e(O.__webglFramebuffer[he][Me],A,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Me);else _e(O.__webglFramebuffer[he],A,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);g(S)&&f(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let he=0,Me=K.length;he<Me;he++){const qe=K[he],se=i.get(qe);t.bindTexture(r.TEXTURE_2D,se.__webglTexture),Xe(r.TEXTURE_2D,qe),_e(O.__webglFramebuffer,A,qe,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,0),g(qe)&&f(r.TEXTURE_2D)}t.unbindTexture()}else{let he=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(he=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(he,q.__webglTexture),Xe(he,S),S.mipmaps&&S.mipmaps.length>0)for(let Me=0;Me<S.mipmaps.length;Me++)_e(O.__webglFramebuffer[Me],A,S,r.COLOR_ATTACHMENT0,he,Me);else _e(O.__webglFramebuffer,A,S,r.COLOR_ATTACHMENT0,he,0);g(S)&&f(he),t.unbindTexture()}A.depthBuffer&&Re(A)}function $(A){const S=A.textures;for(let O=0,q=S.length;O<q;O++){const K=S[O];if(g(K)){const j=y(A),Ae=i.get(K).__webglTexture;t.bindTexture(j,Ae),f(j),t.unbindTexture()}}}const re=[],P=[];function pe(A){if(A.samples>0){if(Se(A)===!1){const S=A.textures,O=A.width,q=A.height;let K=r.COLOR_BUFFER_BIT;const j=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=i.get(A),he=S.length>1;if(he)for(let Me=0;Me<S.length;Me++)t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Me=0;Me<S.length;Me++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),he){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ae.__webglColorRenderbuffer[Me]);const qe=i.get(S[Me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,qe,0)}r.blitFramebuffer(0,0,O,q,0,0,O,q,K,r.NEAREST),l===!0&&(re.length=0,P.length=0,re.push(r.COLOR_ATTACHMENT0+Me),A.depthBuffer&&A.resolveDepthBuffer===!1&&(re.push(j),P.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,P)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),he)for(let Me=0;Me<S.length;Me++){t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,Ae.__webglColorRenderbuffer[Me]);const qe=i.get(S[Me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,qe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function ye(A){return Math.min(s.maxSamples,A.samples)}function Se(A){const S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function oe(A){const S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function He(A,S){const O=A.colorSpace,q=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==cs&&O!==Ai&&(Je.getTransfer(O)===st?(q!==Ut||K!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function ue(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=Y,this.setTexture2DArray=W,this.setTexture3D=te,this.setTextureCube=G,this.rebindTextures=De,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Se}function lp(r,e){function t(i,s=Ai){let n;const a=Je.getTransfer(s);if(i===mi)return r.UNSIGNED_BYTE;if(i===Ir)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Pr)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Wo)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Ho)return r.BYTE;if(i===Go)return r.SHORT;if(i===Bs)return r.UNSIGNED_SHORT;if(i===Cr)return r.INT;if(i===Ei)return r.UNSIGNED_INT;if(i===zt)return r.FLOAT;if(i===zs)return r.HALF_FLOAT;if(i===Xo)return r.ALPHA;if(i===jo)return r.RGB;if(i===Ut)return r.RGBA;if(i===qo)return r.LUMINANCE;if(i===Yo)return r.LUMINANCE_ALPHA;if(i===rs)return r.DEPTH_COMPONENT;if(i===as)return r.DEPTH_STENCIL;if(i===Lr)return r.RED;if(i===wn)return r.RED_INTEGER;if(i===Zo)return r.RG;if(i===Ur)return r.RG_INTEGER;if(i===Dr)return r.RGBA_INTEGER;if(i===En||i===An||i===Rn||i===Cn)if(a===st)if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(i===En)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===An)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Rn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Cn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=e.get("WEBGL_compressed_texture_s3tc"),n!==null){if(i===En)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===An)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Rn)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Cn)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nr||i===Or||i===Fr||i===Br)if(n=e.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(i===Nr)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Or)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fr)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Br)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zr||i===kr||i===Vr)if(n=e.get("WEBGL_compressed_texture_etc"),n!==null){if(i===zr||i===kr)return a===st?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(i===Vr)return a===st?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Hr||i===Gr||i===Wr||i===Xr||i===jr||i===qr||i===Yr||i===Zr||i===Jr||i===Kr||i===$r||i===Qr||i===ea||i===ta)if(n=e.get("WEBGL_compressed_texture_astc"),n!==null){if(i===Hr)return a===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gr)return a===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wr)return a===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xr)return a===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jr)return a===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qr)return a===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yr)return a===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zr)return a===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jr)return a===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kr)return a===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$r)return a===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qr)return a===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ea)return a===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ta)return a===st?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===In||i===ia||i===sa)if(n=e.get("EXT_texture_compression_bptc"),n!==null){if(i===In)return a===st?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ia)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sa)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jo||i===na||i===ra||i===aa)if(n=e.get("EXT_texture_compression_rgtc"),n!==null){if(i===In)return n.COMPRESSED_RED_RGTC1_EXT;if(i===na)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ra)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===aa)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ns?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}const Ty=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ey{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new dt,n=e.properties.get(s);n.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new li({vertexShader:Ty,fragmentShader:wy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new fn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ay extends gi{constructor(e,t){super();const i=this;let s=null,n=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,m=null;const v=new Ey,g=t.getContextAttributes();let f=null,y=null;const x=[],_=[],C=new Z;let w=null;const R=new Tt;R.viewport=new Ke;const I=new Tt;I.viewport=new Ke;const T=[R,I],M=new md;let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ie=x[X];return ie===void 0&&(ie=new Ia,x[X]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(X){let ie=x[X];return ie===void 0&&(ie=new Ia,x[X]=ie),ie.getGripSpace()},this.getHand=function(X){let ie=x[X];return ie===void 0&&(ie=new Ia,x[X]=ie),ie.getHandSpace()};function B(X){const ie=_.indexOf(X.inputSource);if(ie===-1)return;const _e=x[ie];_e!==void 0&&(_e.update(X.inputSource,X.frame,c||a),_e.dispatchEvent({type:X.type,data:X.inputSource}))}function V(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",Y);for(let X=0;X<x.length;X++){const ie=_[X];ie!==null&&(_[X]=null,x[X].disconnect(ie))}L=null,F=null,v.reset(),e.setRenderTarget(f),p=null,u=null,d=null,s=null,y=null,tt.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){n=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",V),s.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding!="undefined"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,_e=null,ae=null;g.depth&&(ae=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=g.stencil?as:rs,_e=g.stencil?ns:Ei);const Ie={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:n};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(Ie),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new vi(u.textureWidth,u.textureHeight,{format:Ut,type:mi,depthTexture:new Nl(u.textureWidth,u.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}else{const ie={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:n};p=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new vi(p.framebufferWidth,p.framebufferHeight,{format:Ut,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),tt.setContext(s),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y(X){for(let ie=0;ie<X.removed.length;ie++){const _e=X.removed[ie],ae=_.indexOf(_e);ae>=0&&(_[ae]=null,x[ae].disconnect(_e))}for(let ie=0;ie<X.added.length;ie++){const _e=X.added[ie];let ae=_.indexOf(_e);if(ae===-1){for(let Re=0;Re<x.length;Re++)if(Re>=_.length){_.push(_e),ae=Re;break}else if(_[Re]===null){_[Re]=_e,ae=Re;break}if(ae===-1)break}const Ie=x[ae];Ie&&Ie.connect(_e)}}const W=new E,te=new E;function G(X,ie,_e){W.setFromMatrixPosition(ie.matrixWorld),te.setFromMatrixPosition(_e.matrixWorld);const ae=W.distanceTo(te),Ie=ie.projectionMatrix.elements,Re=_e.projectionMatrix.elements,De=Ie[14]/(Ie[10]-1),ee=Ie[14]/(Ie[10]+1),$=(Ie[9]+1)/Ie[5],re=(Ie[9]-1)/Ie[5],P=(Ie[8]-1)/Ie[0],pe=(Re[8]+1)/Re[0],ye=De*P,Se=De*pe,oe=ae/(-P+pe),He=oe*-P;if(ie.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(He),X.translateZ(oe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ie[10]===-1)X.projectionMatrix.copy(ie.projectionMatrix),X.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const ue=De+oe,A=ee+oe,S=ye-He,O=Se+(ae-He),q=$*ee/A*ue,K=re*ee/A*ue;X.projectionMatrix.makePerspective(S,O,q,K,ue,A),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ne(X,ie){ie===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ie.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let ie=X.near,_e=X.far;v.texture!==null&&(v.depthNear>0&&(ie=v.depthNear),v.depthFar>0&&(_e=v.depthFar)),M.near=I.near=R.near=ie,M.far=I.far=R.far=_e,(L!==M.near||F!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,F=M.far),R.layers.mask=X.layers.mask|2,I.layers.mask=X.layers.mask|4,M.layers.mask=R.layers.mask|I.layers.mask;const ae=X.parent,Ie=M.cameras;ne(M,ae);for(let Re=0;Re<Ie.length;Re++)ne(Ie[Re],ae);Ie.length===2?G(M,R,I):M.projectionMatrix.copy(R.projectionMatrix),ge(X,M,ae)};function ge(X,ie,_e){_e===null?X.matrix.copy(ie.matrixWorld):(X.matrix.copy(_e.matrixWorld),X.matrix.invert(),X.matrix.multiply(ie.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ie.projectionMatrix),X.projectionMatrixInverse.copy(ie.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ks*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Ue=null;function Xe(X,ie){if(h=ie.getViewerPose(c||a),m=ie,h!==null){const _e=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let ae=!1;_e.length!==M.cameras.length&&(M.cameras.length=0,ae=!0);for(let Re=0;Re<_e.length;Re++){const De=_e[Re];let ee=null;if(p!==null)ee=p.getViewport(De);else{const re=d.getViewSubImage(u,De);ee=re.viewport,Re===0&&(e.setRenderTargetTextures(y,re.colorTexture,u.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(y))}let $=T[Re];$===void 0&&($=new Tt,$.layers.enable(Re),$.viewport=new Ke,T[Re]=$),$.matrix.fromArray(De.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(De.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(ee.x,ee.y,ee.width,ee.height),Re===0&&(M.matrix.copy($.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ae===!0&&M.cameras.push($)}const Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){const Re=d.getDepthInformation(_e[0]);Re&&Re.isValid&&Re.texture&&v.init(e,Re,s.renderState)}}for(let _e=0;_e<x.length;_e++){const ae=_[_e],Ie=x[_e];ae!==null&&Ie!==void 0&&Ie.update(ae,ie,c||a)}Ue&&Ue(X,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),m=null}const tt=new Dd;tt.setAnimationLoop(Xe),this.setAnimationLoop=function(X){Ue=X},this.dispose=function(){}}}const Ds=new Zt,Ry=new Le;function Cy(r,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,Vh(r)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,y,x,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?n(g,f):f.isMeshToonMaterial?(n(g,f),d(g,f)):f.isMeshPhongMaterial?(n(g,f),h(g,f)):f.isMeshStandardMaterial?(n(g,f),u(g,f),f.isMeshPhysicalMaterial&&p(g,f,_)):f.isMeshMatcapMaterial?(n(g,f),m(g,f)):f.isMeshDepthMaterial?n(g,f):f.isMeshDistanceMaterial?(n(g,f),v(g,f)):f.isMeshNormalMaterial?n(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,y,x):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function n(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Lt&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Lt&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const y=e.get(f),x=y.envMap,_=y.envMapRotation;x&&(g.envMap.value=x,Ds.copy(_),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),g.envMapRotation.value.setFromMatrix4(Ry.makeRotationFromEuler(Ds)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,y,x){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*y,g.scale.value=x*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,y){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Lt&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function v(g,f){const y=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Iy(r,e,t,i){let s={},n={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const _=x.program;i.uniformBlockBinding(y,_)}function c(y,x){let _=s[y.id];_===void 0&&(m(y),_=h(y),s[y.id]=_,y.addEventListener("dispose",g));const C=x.program;i.updateUBOMapping(y,C);const w=e.render.frame;n[y.id]!==w&&(u(y),n[y.id]=w)}function h(y){const x=d();y.__bindingPointIndex=x;const _=r.createBuffer(),C=y.__size,w=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,C,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,_),_}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const x=s[y.id],_=y.uniforms,C=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let w=0,R=_.length;w<R;w++){const I=Array.isArray(_[w])?_[w]:[_[w]];for(let T=0,M=I.length;T<M;T++){const L=I[T];if(p(L,w,T,C)===!0){const F=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let V=0;for(let Y=0;Y<B.length;Y++){const W=B[Y],te=v(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,F+V,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,V),V+=te.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(y,x,_,C){const w=y.value,R=x+"_"+_;if(C[R]===void 0)return typeof w=="number"||typeof w=="boolean"?C[R]=w:C[R]=w.clone(),!0;{const I=C[R];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return C[R]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function m(y){const x=y.uniforms;let _=0;const C=16;for(let R=0,I=x.length;R<I;R++){const T=Array.isArray(x[R])?x[R]:[x[R]];for(let M=0,L=T.length;M<L;M++){const F=T[M],B=Array.isArray(F.value)?F.value:[F.value];for(let V=0,Y=B.length;V<Y;V++){const W=B[V],te=v(W),G=_%C,ne=G%te.boundary,ge=G+ne;_+=ne,ge!==0&&C-ge<te.storage&&(_+=C-ge),F.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=te.storage}}}const w=_%C;return w>0&&(_+=C-w),y.__size=_,y.__cache={},this}function v(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function g(y){const x=y.target;x.removeEventListener("dispose",g);const _=a.indexOf(x.__bindingPointIndex);a.splice(_,1),r.deleteBuffer(s[x.id]),delete s[x.id],delete n[x.id]}function f(){for(const y in s)r.deleteBuffer(s[y]);a=[],s={},n={}}return{bind:l,update:c,dispose:f}}class Py{constructor(e={}){const{canvas:t=bh(),context:i=null,depth:s=!0,stencil:n=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,f=null;const y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this.toneMapping=Ti,this.toneMappingExposure=1;const _=this;let C=!1,w=0,R=0,I=null,T=-1,M=null;const L=new Ke,F=new Ke;let B=null;const V=new me(0);let Y=0,W=t.width,te=t.height,G=1,ne=null,ge=null;const Ue=new Ke(0,0,W,te),Xe=new Ke(0,0,W,te);let tt=!1;const X=new Jn;let ie=!1,_e=!1;this.transmissionResolutionScale=1;const ae=new Le,Ie=new Le,Re=new E,De=new Ke,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $=!1;function re(){return I===null?G:1}let P=i;function pe(b,N){return t.getContext(b,N)}try{const b={alpha:!0,depth:s,stencil:n,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_r}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",le,!1),P===null){const N="webgl2";if(P=pe(N,b),P===null)throw pe(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ye,Se,oe,He,ue,A,S,O,q,K,j,Ae,he,Me,qe,se,be,Pe,Ne,Te,Ye,je,ot,U;function de(){ye=new H_(P),ye.init(),je=new lp(P,ye),Se=new O_(P,ye,e,je),oe=new Sy(P,ye),Se.reverseDepthBuffer&&u&&oe.buffers.depth.setReversed(!0),He=new X_(P),ue=new cy,A=new by(P,ye,oe,ue,Se,je,He),S=new B_(_),O=new V_(_),q=new $g(P),ot=new D_(P,q),K=new G_(P,q,He,ot),j=new q_(P,K,q,He),Ne=new j_(P,Se,A),se=new F_(ue),Ae=new ly(_,S,O,ye,Se,ot,se),he=new Cy(_,ue),Me=new uy,qe=new vy(ye),Pe=new U_(_,S,O,oe,j,p,l),be=new yy(_,j,Se),U=new Iy(P,He,Se,oe),Te=new N_(P,ye,He),Ye=new W_(P,ye,He),He.programs=Ae.programs,_.capabilities=Se,_.extensions=ye,_.properties=ue,_.renderLists=Me,_.shadowMap=be,_.state=oe,_.info=He}de();const H=new Ay(_,P);this.xr=H,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=ye.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ye.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(W,te,!1))},this.getSize=function(b){return b.set(W,te)},this.setSize=function(b,N,z=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=b,te=N,t.width=Math.floor(b*G),t.height=Math.floor(N*G),z===!0&&(t.style.width=b+"px",t.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(W*G,te*G).floor()},this.setDrawingBufferSize=function(b,N,z){W=b,te=N,G=z,t.width=Math.floor(b*z),t.height=Math.floor(N*z),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(Ue)},this.setViewport=function(b,N,z,k){b.isVector4?Ue.set(b.x,b.y,b.z,b.w):Ue.set(b,N,z,k),oe.viewport(L.copy(Ue).multiplyScalar(G).round())},this.getScissor=function(b){return b.copy(Xe)},this.setScissor=function(b,N,z,k){b.isVector4?Xe.set(b.x,b.y,b.z,b.w):Xe.set(b,N,z,k),oe.scissor(F.copy(Xe).multiplyScalar(G).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(b){oe.setScissorTest(tt=b)},this.setOpaqueSort=function(b){ne=b},this.setTransparentSort=function(b){ge=b},this.getClearColor=function(b){return b.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(b=!0,N=!0,z=!0){let k=0;if(b){let D=!1;if(I!==null){const Q=I.texture.format;D=Q===Dr||Q===Ur||Q===wn}if(D){const Q=I.texture.type,ve=Q===mi||Q===Ei||Q===Bs||Q===ns||Q===Ir||Q===Pr,xe=Pe.getClearColor(),Ee=Pe.getClearAlpha(),Fe=xe.r,Oe=xe.g,Be=xe.b;ve?(m[0]=Fe,m[1]=Oe,m[2]=Be,m[3]=Ee,P.clearBufferuiv(P.COLOR,0,m)):(v[0]=Fe,v[1]=Oe,v[2]=Be,v[3]=Ee,P.clearBufferiv(P.COLOR,0,v))}else k|=P.COLOR_BUFFER_BIT}N&&(k|=P.DEPTH_BUFFER_BIT),z&&(k|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Pe.dispose(),Me.dispose(),qe.dispose(),ue.dispose(),S.dispose(),O.dispose(),j.dispose(),ot.dispose(),U.dispose(),Ae.dispose(),H.dispose(),H.removeEventListener("sessionstart",Tc),H.removeEventListener("sessionend",wc),Qi.stop()};function J(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const b=He.autoReset,N=be.enabled,z=be.autoUpdate,k=be.needsUpdate,D=be.type;de(),He.autoReset=b,be.enabled=N,be.autoUpdate=z,be.needsUpdate=k,be.type=D}function le(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ze(b){const N=b.target;N.removeEventListener("dispose",Ze),ut(N)}function ut(b){wt(b),ue.remove(b)}function wt(b){const N=ue.get(b).programs;N!==void 0&&(N.forEach(function(z){Ae.releaseProgram(z)}),b.isShaderMaterial&&Ae.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,z,k,D,Q){N===null&&(N=ee);const ve=D.isMesh&&D.matrixWorld.determinant()<0,xe=cp(b,N,z,k,D);oe.setMaterial(k,ve);let Ee=z.index,Fe=1;if(k.wireframe===!0){if(Ee=K.getWireframeAttribute(z),Ee===void 0)return;Fe=2}const Oe=z.drawRange,Be=z.attributes.position;let et=Oe.start*Fe,nt=(Oe.start+Oe.count)*Fe;Q!==null&&(et=Math.max(et,Q.start*Fe),nt=Math.min(nt,(Q.start+Q.count)*Fe)),Ee!==null?(et=Math.max(et,0),nt=Math.min(nt,Ee.count)):Be!=null&&(et=Math.max(et,0),nt=Math.min(nt,Be.count));const vt=nt-et;if(vt<0||vt===Infinity)return;ot.setup(D,k,xe,z,Ee);let rt,lt=Te;if(Ee!==null&&(rt=q.get(Ee),lt=Ye,lt.setIndex(rt)),D.isMesh)k.wireframe===!0?(oe.setLineWidth(k.wireframeLinewidth*re()),lt.setMode(P.LINES)):lt.setMode(P.TRIANGLES);else if(D.isLine){let Ce=k.linewidth;Ce===void 0&&(Ce=1),oe.setLineWidth(Ce*re()),D.isLineSegments?lt.setMode(P.LINES):D.isLineLoop?lt.setMode(P.LINE_LOOP):lt.setMode(P.LINE_STRIP)}else D.isPoints?lt.setMode(P.POINTS):D.isSprite&&lt.setMode(P.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)lt.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))lt.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const Ce=D._multiDrawStarts,Pt=D._multiDrawCounts,es=D._multiDrawCount,ii=Ee?q.get(Ee).bytesPerElement:1,Ns=ue.get(k).currentProgram.getUniforms();for(let jt=0;jt<es;jt++)Ns.setValue(P,"_gl_DrawID",jt),lt.render(Ce[jt]/ii,Pt[jt])}else if(D.isInstancedMesh)lt.renderInstances(et,vt,D.count);else if(z.isInstancedBufferGeometry){const Ce=z._maxInstanceCount!==void 0?z._maxInstanceCount:Infinity,Pt=Math.min(z.instanceCount,Ce);lt.renderInstances(et,vt,Pt)}else lt.render(et,vt)};function it(b,N,z){b.transparent===!0&&b.side===pi&&b.forceSinglePass===!1?(b.side=Lt,b.needsUpdate=!0,vr(b,N,z),b.side=Si,b.needsUpdate=!0,vr(b,N,z),b.side=pi):vr(b,N,z)}this.compile=function(b,N,z=null){z===null&&(z=b),f=qe.get(z),f.init(N),x.push(f),z.traverseVisible(function(D){D.isLight&&D.layers.test(N.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),b!==z&&b.traverseVisible(function(D){D.isLight&&D.layers.test(N.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),f.setupLights();const k=new Set;return b.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const Q=D.material;if(Q)if(Array.isArray(Q))for(let ve=0;ve<Q.length;ve++){const xe=Q[ve];it(xe,z,D),k.add(xe)}else it(Q,z,D),k.add(Q)}),x.pop(),f=null,k},this.compileAsync=function(b,N,z=null){const k=this.compile(b,N,z);return new Promise(D=>{function Q(){if(k.forEach(function(ve){ue.get(ve).currentProgram.isReady()&&k.delete(ve)}),k.size===0){D(b);return}setTimeout(Q,10)}ye.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let ti=null;function Mi(b){ti&&ti(b)}function Tc(){Qi.stop()}function wc(){Qi.start()}const Qi=new Dd;Qi.setAnimationLoop(Mi),typeof self!="undefined"&&Qi.setContext(self),this.setAnimationLoop=function(b){ti=b,H.setAnimationLoop(b),b===null?Qi.stop():Qi.start()},H.addEventListener("sessionstart",Tc),H.addEventListener("sessionend",wc),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(N),N=H.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,N,I),f=qe.get(b,x.length),f.init(N),x.push(f),Ie.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X.setFromProjectionMatrix(Ie),_e=this.localClippingEnabled,ie=se.init(this.clippingPlanes,_e),g=Me.get(b,y.length),g.init(),y.push(g),H.enabled===!0&&H.isPresenting===!0){const Q=_.xr.getDepthSensingMesh();Q!==null&&Uo(Q,N,-Infinity,_.sortObjects)}Uo(b,N,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(ne,ge),$=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,$&&Pe.addToRenderList(g,b),this.info.render.frame++,ie===!0&&se.beginShadows();const z=f.state.shadowsArray;be.render(z,b,N),ie===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=g.opaque,D=g.transmissive;if(f.setupLights(),N.isArrayCamera){const Q=N.cameras;if(D.length>0)for(let ve=0,xe=Q.length;ve<xe;ve++){const Ee=Q[ve];Ac(k,D,b,Ee)}$&&Pe.render(b);for(let ve=0,xe=Q.length;ve<xe;ve++){const Ee=Q[ve];Ec(g,b,Ee,Ee.viewport)}}else D.length>0&&Ac(k,D,b,N),$&&Pe.render(b),Ec(g,b,N);I!==null&&R===0&&(A.updateMultisampleRenderTarget(I),A.updateRenderTargetMipmap(I)),b.isScene===!0&&b.onAfterRender(_,b,N),ot.resetDefaultState(),T=-1,M=null,x.pop(),x.length>0?(f=x[x.length-1],ie===!0&&se.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function Uo(b,N,z,k){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||X.intersectsSprite(b)){k&&De.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ie);const Q=j.update(b),ve=b.material;ve.visible&&g.push(b,Q,ve,z,De.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||X.intersectsObject(b))){const Q=j.update(b),ve=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),De.copy(b.boundingSphere.center)):(Q.boundingSphere===null&&Q.computeBoundingSphere(),De.copy(Q.boundingSphere.center)),De.applyMatrix4(b.matrixWorld).applyMatrix4(Ie)),Array.isArray(ve)){const xe=Q.groups;for(let Ee=0,Fe=xe.length;Ee<Fe;Ee++){const Oe=xe[Ee],Be=ve[Oe.materialIndex];Be&&Be.visible&&g.push(b,Q,Be,z,De.z,Oe)}}else ve.visible&&g.push(b,Q,ve,z,De.z,null)}}const D=b.children;for(let Q=0,ve=D.length;Q<ve;Q++)Uo(D[Q],N,z,k)}function Ec(b,N,z,k){const D=b.opaque,Q=b.transmissive,ve=b.transparent;f.setupLightsView(z),ie===!0&&se.setGlobalState(_.clippingPlanes,z),k&&oe.viewport(L.copy(k)),D.length>0&&gr(D,N,z),Q.length>0&&gr(Q,N,z),ve.length>0&&gr(ve,N,z),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function Ac(b,N,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[k.id]===void 0&&(f.state.transmissionRenderTarget[k.id]=new vi(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?zs:mi,minFilter:fi,samples:4,stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const D=f.state.transmissionRenderTarget[k.id],Q=k.viewport||L;D.setSize(Q.z*_.transmissionResolutionScale,Q.w*_.transmissionResolutionScale);const ve=_.getRenderTarget();_.setRenderTarget(D),_.getClearColor(V),Y=_.getClearAlpha(),Y<1&&_.setClearColor(16777215,.5),_.clear(),$&&Pe.render(z);const xe=_.toneMapping;_.toneMapping=Ti;const Ee=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),ie===!0&&se.setGlobalState(_.clippingPlanes,k),gr(b,z,k),A.updateMultisampleRenderTarget(D),A.updateRenderTargetMipmap(D),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Oe=0,Be=N.length;Oe<Be;Oe++){const et=N[Oe],nt=et.object,vt=et.geometry,rt=et.material,lt=et.group;if(rt.side===pi&&nt.layers.test(k.layers)){const Ce=rt.side;rt.side=Lt,rt.needsUpdate=!0,Rc(nt,z,k,vt,rt,lt),rt.side=Ce,rt.needsUpdate=!0,Fe=!0}}Fe===!0&&(A.updateMultisampleRenderTarget(D),A.updateRenderTargetMipmap(D))}_.setRenderTarget(ve),_.setClearColor(V,Y),Ee!==void 0&&(k.viewport=Ee),_.toneMapping=xe}function gr(b,N,z){const k=N.isScene===!0?N.overrideMaterial:null;for(let D=0,Q=b.length;D<Q;D++){const ve=b[D],xe=ve.object,Ee=ve.geometry,Fe=k===null?ve.material:k,Oe=ve.group;xe.layers.test(z.layers)&&Rc(xe,N,z,Ee,Fe,Oe)}}function Rc(b,N,z,k,D,Q){b.onBeforeRender(_,N,z,k,D,Q),b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),D.onBeforeRender(_,N,z,k,b,Q),D.transparent===!0&&D.side===pi&&D.forceSinglePass===!1?(D.side=Lt,D.needsUpdate=!0,_.renderBufferDirect(z,N,k,D,b,Q),D.side=Si,D.needsUpdate=!0,_.renderBufferDirect(z,N,k,D,b,Q),D.side=pi):_.renderBufferDirect(z,N,k,D,b,Q),b.onAfterRender(_,N,z,k,D,Q)}function vr(b,N,z){N.isScene!==!0&&(N=ee);const k=ue.get(b),D=f.state.lights,Q=f.state.shadowsArray,ve=D.state.version,xe=Ae.getParameters(b,D.state,Q,N,z),Ee=Ae.getProgramCacheKey(xe);let Fe=k.programs;k.environment=b.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(b.isMeshStandardMaterial?O:S).get(b.envMap||k.environment),k.envMapRotation=k.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Fe===void 0&&(b.addEventListener("dispose",Ze),Fe=new Map,k.programs=Fe);let Oe=Fe.get(Ee);if(Oe!==void 0){if(k.currentProgram===Oe&&k.lightsStateVersion===ve)return Ic(b,xe),Oe}else xe.uniforms=Ae.getUniforms(b),b.onBeforeCompile(xe,_),Oe=Ae.acquireProgram(xe,Ee),Fe.set(Ee,Oe),k.uniforms=xe.uniforms;const Be=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Be.clippingPlanes=se.uniform),Ic(b,xe),k.needsLights=up(b),k.lightsStateVersion=ve,k.needsLights&&(Be.ambientLightColor.value=D.state.ambient,Be.lightProbe.value=D.state.probe,Be.directionalLights.value=D.state.directional,Be.directionalLightShadows.value=D.state.directionalShadow,Be.spotLights.value=D.state.spot,Be.spotLightShadows.value=D.state.spotShadow,Be.rectAreaLights.value=D.state.rectArea,Be.ltc_1.value=D.state.rectAreaLTC1,Be.ltc_2.value=D.state.rectAreaLTC2,Be.pointLights.value=D.state.point,Be.pointLightShadows.value=D.state.pointShadow,Be.hemisphereLights.value=D.state.hemi,Be.directionalShadowMap.value=D.state.directionalShadowMap,Be.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Be.spotShadowMap.value=D.state.spotShadowMap,Be.spotLightMatrix.value=D.state.spotLightMatrix,Be.spotLightMap.value=D.state.spotLightMap,Be.pointShadowMap.value=D.state.pointShadowMap,Be.pointShadowMatrix.value=D.state.pointShadowMatrix),k.currentProgram=Oe,k.uniformsList=null,Oe}function Cc(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=Po.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Ic(b,N){const z=ue.get(b);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function cp(b,N,z,k,D){N.isScene!==!0&&(N=ee),A.resetTextureUnits();const Q=N.fog,ve=k.isMeshStandardMaterial?N.environment:null,xe=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:cs,Ee=(k.isMeshStandardMaterial?O:S).get(k.envMap||ve),Fe=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Oe=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Be=!!z.morphAttributes.position,et=!!z.morphAttributes.normal,nt=!!z.morphAttributes.color;let vt=Ti;k.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(vt=_.toneMapping);const rt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,lt=rt!==void 0?rt.length:0,Ce=ue.get(k),Pt=f.state.lights;if(ie===!0&&(_e===!0||b!==M)){const St=b===M&&k.id===T;se.setState(k,b,St)}let es=!1;k.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Pt.state.version||Ce.outputColorSpace!==xe||D.isBatchedMesh&&Ce.batching===!1||!D.isBatchedMesh&&Ce.batching===!0||D.isBatchedMesh&&Ce.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Ce.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Ce.instancing===!1||!D.isInstancedMesh&&Ce.instancing===!0||D.isSkinnedMesh&&Ce.skinning===!1||!D.isSkinnedMesh&&Ce.skinning===!0||D.isInstancedMesh&&Ce.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Ce.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Ce.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Ce.instancingMorph===!1&&D.morphTexture!==null||Ce.envMap!==Ee||k.fog===!0&&Ce.fog!==Q||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==se.numPlanes||Ce.numIntersection!==se.numIntersection)||Ce.vertexAlphas!==Fe||Ce.vertexTangents!==Oe||Ce.morphTargets!==Be||Ce.morphNormals!==et||Ce.morphColors!==nt||Ce.toneMapping!==vt||Ce.morphTargetsCount!==lt)&&(es=!0):(es=!0,Ce.__version=k.version);let ii=Ce.currentProgram;es===!0&&(ii=vr(k,N,D));let Ns=!1,jt=!1,_n=!1;const ct=ii.getUniforms(),Kt=Ce.uniforms;if(oe.useProgram(ii.program)&&(Ns=!0,jt=!0,_n=!0),k.id!==T&&(T=k.id,jt=!0),Ns||M!==b){oe.buffers.depth.getReversed()?(ae.copy(b.projectionMatrix),xf(ae),yf(ae),ct.setValue(P,"projectionMatrix",ae)):ct.setValue(P,"projectionMatrix",b.projectionMatrix),ct.setValue(P,"viewMatrix",b.matrixWorldInverse);const St=ct.map.cameraPosition;St!==void 0&&St.setValue(P,Re.setFromMatrixPosition(b.matrixWorld)),Se.logarithmicDepthBuffer&&ct.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ct.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,jt=!0,_n=!0)}if(D.isSkinnedMesh){ct.setOptional(P,D,"bindMatrix"),ct.setOptional(P,D,"bindMatrixInverse");const St=D.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),ct.setValue(P,"boneTexture",St.boneTexture,A))}D.isBatchedMesh&&(ct.setOptional(P,D,"batchingTexture"),ct.setValue(P,"batchingTexture",D._matricesTexture,A),ct.setOptional(P,D,"batchingIdTexture"),ct.setValue(P,"batchingIdTexture",D._indirectTexture,A),ct.setOptional(P,D,"batchingColorTexture"),D._colorsTexture!==null&&ct.setValue(P,"batchingColorTexture",D._colorsTexture,A));const $t=z.morphAttributes;if(($t.position!==void 0||$t.normal!==void 0||$t.color!==void 0)&&Ne.update(D,z,ii),(jt||Ce.receiveShadow!==D.receiveShadow)&&(Ce.receiveShadow=D.receiveShadow,ct.setValue(P,"receiveShadow",D.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Kt.envMap.value=Ee,Kt.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(Kt.envMapIntensity.value=N.environmentIntensity),jt&&(ct.setValue(P,"toneMappingExposure",_.toneMappingExposure),Ce.needsLights&&hp(Kt,_n),Q&&k.fog===!0&&he.refreshFogUniforms(Kt,Q),he.refreshMaterialUniforms(Kt,k,G,te,f.state.transmissionRenderTarget[b.id]),Po.upload(P,Cc(Ce),Kt,A)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Po.upload(P,Cc(Ce),Kt,A),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ct.setValue(P,"center",D.center),ct.setValue(P,"modelViewMatrix",D.modelViewMatrix),ct.setValue(P,"normalMatrix",D.normalMatrix),ct.setValue(P,"modelMatrix",D.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const St=k.uniformsGroups;for(let si=0,Do=St.length;si<Do;si++){const ts=St[si];U.update(ts,ii),U.bind(ts,ii)}}return ii}function hp(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function up(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,N,z){ue.get(b.texture).__webglTexture=N,ue.get(b.depthTexture).__webglTexture=z;const k=ue.get(b);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,N){const z=ue.get(b);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0};const dp=P.createFramebuffer();this.setRenderTarget=function(b,N=0,z=0){I=b,w=N,R=z;let k=!0,D=null,Q=!1,ve=!1;if(b){const xe=ue.get(b);if(xe.__useDefaultFramebuffer!==void 0)oe.bindFramebuffer(P.FRAMEBUFFER,null),k=!1;else if(xe.__webglFramebuffer===void 0)A.setupRenderTarget(b);else if(xe.__hasExternalTextures)A.rebindTextures(b,ue.get(b.texture).__webglTexture,ue.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Oe=b.depthTexture;if(xe.__boundDepthTexture!==Oe){if(Oe!==null&&ue.has(Oe)&&(b.width!==Oe.image.width||b.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(b)}}const Ee=b.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ve=!0);const Fe=ue.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Fe[N])?D=Fe[N][z]:D=Fe[N],Q=!0):b.samples>0&&A.useMultisampledRTT(b)===!1?D=ue.get(b).__webglMultisampledFramebuffer:Array.isArray(Fe)?D=Fe[z]:D=Fe,L.copy(b.viewport),F.copy(b.scissor),B=b.scissorTest}else L.copy(Ue).multiplyScalar(G).floor(),F.copy(Xe).multiplyScalar(G).floor(),B=tt;if(z!==0&&(D=dp),oe.bindFramebuffer(P.FRAMEBUFFER,D)&&k&&oe.drawBuffers(b,D),oe.viewport(L),oe.scissor(F),oe.setScissorTest(B),Q){const xe=ue.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,xe.__webglTexture,z)}else if(ve){const xe=ue.get(b.texture),Ee=N;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,xe.__webglTexture,z,Ee)}else if(b!==null&&z!==0){const xe=ue.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,xe.__webglTexture,z)}T=-1},this.readRenderTargetPixels=function(b,N,z,k,D,Q,ve){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=ue.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ve!==void 0&&(xe=xe[ve]),xe){oe.bindFramebuffer(P.FRAMEBUFFER,xe);try{const Ee=b.texture,Fe=Ee.format,Oe=Ee.type;if(!Se.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-k&&z>=0&&z<=b.height-D&&P.readPixels(N,z,k,D,je.convert(Fe),je.convert(Oe),Q)}finally{const Ee=I!==null?ue.get(I).__webglFramebuffer:null;oe.bindFramebuffer(P.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(b,N,z,k,D,Q,ve){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=ue.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ve!==void 0&&(xe=xe[ve]),xe){const Ee=b.texture,Fe=Ee.format,Oe=Ee.type;if(!Se.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=b.width-k&&z>=0&&z<=b.height-D){oe.bindFramebuffer(P.FRAMEBUFFER,xe);const Be=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Be),P.bufferData(P.PIXEL_PACK_BUFFER,Q.byteLength,P.STREAM_READ),P.readPixels(N,z,k,D,je.convert(Fe),je.convert(Oe),0);const et=I!==null?ue.get(I).__webglFramebuffer:null;oe.bindFramebuffer(P.FRAMEBUFFER,et);const nt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await _f(P,nt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Be),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Q),P.deleteBuffer(Be),P.deleteSync(nt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,N=null,z=0){b.isTexture!==!0&&(Hs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,b=arguments[1]);const k=Math.pow(2,-z),D=Math.floor(b.image.width*k),Q=Math.floor(b.image.height*k),ve=N!==null?N.x:0,xe=N!==null?N.y:0;A.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,z,0,0,ve,xe,D,Q),oe.unbindTexture()};const pp=P.createFramebuffer(),fp=P.createFramebuffer();this.copyTextureToTexture=function(b,N,z=null,k=null,D=0,Q=null){b.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1],N=arguments[2],Q=arguments[3]||0,z=null),Q===null&&(D!==0?(Hs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=D,D=0):Q=0);let ve,xe,Ee,Fe,Oe,Be,et,nt,vt;const rt=b.isCompressedTexture?b.mipmaps[Q]:b.image;if(z!==null)ve=z.max.x-z.min.x,xe=z.max.y-z.min.y,Ee=z.isBox3?z.max.z-z.min.z:1,Fe=z.min.x,Oe=z.min.y,Be=z.isBox3?z.min.z:0;else{const $t=Math.pow(2,-D);ve=Math.floor(rt.width*$t),xe=Math.floor(rt.height*$t),b.isDataArrayTexture?Ee=rt.depth:b.isData3DTexture?Ee=Math.floor(rt.depth*$t):Ee=1,Fe=0,Oe=0,Be=0}k!==null?(et=k.x,nt=k.y,vt=k.z):(et=0,nt=0,vt=0);const lt=je.convert(N.format),Ce=je.convert(N.type);let Pt;N.isData3DTexture?(A.setTexture3D(N,0),Pt=P.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(A.setTexture2DArray(N,0),Pt=P.TEXTURE_2D_ARRAY):(A.setTexture2D(N,0),Pt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const es=P.getParameter(P.UNPACK_ROW_LENGTH),ii=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ns=P.getParameter(P.UNPACK_SKIP_PIXELS),jt=P.getParameter(P.UNPACK_SKIP_ROWS),_n=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,rt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,rt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Fe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Oe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Be);const ct=b.isDataArrayTexture||b.isData3DTexture,Kt=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){const $t=ue.get(b),St=ue.get(N),si=ue.get($t.__renderTarget),Do=ue.get(St.__renderTarget);oe.bindFramebuffer(P.READ_FRAMEBUFFER,si.__webglFramebuffer),oe.bindFramebuffer(P.DRAW_FRAMEBUFFER,Do.__webglFramebuffer);for(let ts=0;ts<Ee;ts++)ct&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ue.get(b).__webglTexture,D,Be+ts),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ue.get(N).__webglTexture,Q,vt+ts)),P.blitFramebuffer(Fe,Oe,ve,xe,et,nt,ve,xe,P.DEPTH_BUFFER_BIT,P.NEAREST);oe.bindFramebuffer(P.READ_FRAMEBUFFER,null),oe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(D!==0||b.isRenderTargetTexture||ue.has(b)){const $t=ue.get(b),St=ue.get(N);oe.bindFramebuffer(P.READ_FRAMEBUFFER,pp),oe.bindFramebuffer(P.DRAW_FRAMEBUFFER,fp);for(let si=0;si<Ee;si++)ct?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,$t.__webglTexture,D,Be+si):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,$t.__webglTexture,D),Kt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,St.__webglTexture,Q,vt+si):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,St.__webglTexture,Q),D!==0?P.blitFramebuffer(Fe,Oe,ve,xe,et,nt,ve,xe,P.COLOR_BUFFER_BIT,P.NEAREST):Kt?P.copyTexSubImage3D(Pt,Q,et,nt,vt+si,Fe,Oe,ve,xe):P.copyTexSubImage2D(Pt,Q,et,nt,Fe,Oe,ve,xe);oe.bindFramebuffer(P.READ_FRAMEBUFFER,null),oe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Kt?b.isDataTexture||b.isData3DTexture?P.texSubImage3D(Pt,Q,et,nt,vt,ve,xe,Ee,lt,Ce,rt.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(Pt,Q,et,nt,vt,ve,xe,Ee,lt,rt.data):P.texSubImage3D(Pt,Q,et,nt,vt,ve,xe,Ee,lt,Ce,rt):b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Q,et,nt,ve,xe,lt,Ce,rt.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Q,et,nt,rt.width,rt.height,lt,rt.data):P.texSubImage2D(P.TEXTURE_2D,Q,et,nt,ve,xe,lt,Ce,rt);P.pixelStorei(P.UNPACK_ROW_LENGTH,es),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ii),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ns),P.pixelStorei(P.UNPACK_SKIP_ROWS,jt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,_n),Q===0&&N.generateMipmaps&&P.generateMipmap(Pt),oe.unbindTexture()},this.copyTextureToTexture3D=function(b,N,z=null,k=null,D=0){return b.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,k=arguments[1]||null,b=arguments[2],N=arguments[3],D=arguments[4]||0),Hs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,N,z,k,D)},this.initRenderTarget=function(b){ue.get(b).__webglFramebuffer===void 0&&A.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),oe.unbindTexture()},this.resetState=function(){w=0,R=0,I=null,oe.reset(),ot.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}export{_a as $,sh as A,Lt as B,ih as C,ua as D,Bn as E,rs as F,as as G,Nl as H,pi as I,Gc as J,Xc as K,gh as L,Tr as M,yn as N,Mn as O,Zt as P,gi as Q,zt as R,Si as S,Jn as T,el as U,vh as V,Er as W,xh as X,wr as Y,zs as Z,Cr as _,Bi as a,Hr as a$,mh as a0,br as a1,Qo as a2,ss as a3,_t as a4,fi as a5,Tn as a6,cs as a7,eh as a8,Un as a9,ph as aA,kc as aB,Kc as aC,Zc as aD,Wc as aE,jc as aF,yr as aG,Hc as aH,xo as aI,Oo as aJ,Uc as aK,yc as aL,Tt as aM,Yi as aN,fn as aO,ra as aP,Jo as aQ,_r as aR,dh as aS,Ut as aT,Dr as aU,Qr as aV,Jr as aW,Kr as aX,$r as aY,ea as aZ,ta as a_,Yo as aa,qo as ab,ke as ac,Le as ad,Bc as ae,gt as af,ji as ag,Zl as ah,Jl as ai,Fc as aj,bn as ak,$c as al,zo as am,xn as an,bt as ao,Fs as ap,Vo as aq,ah as ar,fh as as,Mr as at,bi as au,Ai as av,Ti as aw,is as ax,_h as ay,Ar as az,Qc as b,lp as b$,Gr as b0,Wr as b1,Xr as b2,jr as b3,qr as b4,Yr as b5,Zr as b6,In as b7,Vr as b8,Br as b9,Go as bA,xr as bB,qc as bC,Vc as bD,Nc as bE,Bo as bF,ki as bG,dt as bH,xl as bI,yl as bJ,ce as bK,Hh as bL,mi as bM,ns as bN,Wo as bO,Ei as bP,Ir as bQ,Pr as bR,Bs as bS,di as bT,Z as bU,E as bV,Ke as bW,ni as bX,jh as bY,vi as bZ,Py as b_,Fr as ba,An as bb,Rn as bc,Cn as bd,jo as be,ia as bf,sa as bg,zr as bh,kr as bi,Or as bj,Nr as bk,En as bl,Zo as bm,Ur as bn,Lr as bo,wn as bp,th as bq,Sn as br,Oc as bs,aa as bt,na as bu,kt as bv,st as bw,We as bx,ui as by,li as bz,Fo as c,nd as c$,Ia as c0,zc as c1,bh as c2,Ko as c3,$o as c4,rd as c5,Sd as c6,dr as c7,Wm as c8,xg as c9,Su as cA,to as cB,gd as cC,ec as cD,lm as cE,cm as cF,Ja as cG,Xm as cH,io as cI,jg as cJ,Xh as cK,jm as cL,kl as cM,Tu as cN,Yu as cO,vp as cP,ci as cQ,Eu as cR,dn as cS,Rg as cT,_i as cU,qm as cV,Nf as cW,Lp as cX,Dp as cY,Ku as cZ,oh as c_,vg as ca,km as cb,Mu as cc,Gg as cd,ko as ce,xd as cf,og as cg,ac as ch,ng as ci,tg as cj,Wg as ck,uh as cl,_p as cm,uu as cn,Al as co,Ts as cp,Cg as cq,Nt as cr,Vg as cs,kg as ct,hd as cu,Ni as cv,Ca as cw,zg as cx,hm as cy,eo as cz,rh as d,Mp as d$,Bg as d0,Zu as d1,so as d2,Zp as d3,Gp as d4,jp as d5,Au as d6,Ka as d7,Bp as d8,ho as d9,Vf as dA,Ff as dB,Ua as dC,vs as dD,lr as dE,Pn as dF,oa as dG,la as dH,Np as dI,hs as dJ,hi as dK,Qh as dL,ir as dM,zp as dN,Fp as dO,Ki as dP,ld as dQ,Zi as dR,Ig as dS,Bt as dT,Vl as dU,wu as dV,Xu as dW,gu as dX,xi as dY,Ql as dZ,Sp as d_,Fi as da,Hf as db,we as dc,La as dd,Pa as de,om as df,wg as dg,Kp as dh,Hp as di,kp as dj,Og as dk,rn as dl,$u as dm,Ng as dn,uo as dp,eg as dq,pr as dr,Ah as ds,Pp as dt,Up as du,hn as dv,cd as dw,Tg as dx,cu as dy,kf as dz,Xo as e,ru as e$,Xt as e0,rc as e1,tc as e2,lh as e3,hh as e4,ch as e5,mp as e6,Ct as e7,yo as e8,gf as e9,Qe as eA,Md as eB,Hl as eC,Gl as eD,Vt as eE,hr as eF,Ju as eG,Ap as eH,bp as eI,Rp as eJ,Bu as eK,Ys as eL,Eg as eM,ad as eN,ha as eO,yg as eP,Mg as eQ,Ip as eR,po as eS,qh as eT,Fu as eU,Ms as eV,fo as eW,Xg as eX,yi as eY,za as eZ,Lg as e_,uc as ea,Gu as eb,Wu as ec,Hu as ed,ku as ee,zu as ef,Yl as eg,Vu as eh,yp as ei,xp as ej,Op as ek,ca as el,Vp as em,cr as en,$e as eo,$m as ep,ar as eq,tr as er,Hg as es,sd as et,Ug as eu,_u as ev,Ul as ew,Fg as ex,Ji as ey,ag as ez,yh as f,ds as f0,At as f1,or as f2,Ag as f3,od as f4,Wl as f5,td as f6,Pg as f7,Kh as f8,bl as f9,am as fA,yu as fB,wf as fC,Tf as fD,Nn as fE,Du as fF,Ln as fG,os as fH,ls as fI,Cp as fJ,Yp as fa,Dn as fb,Xp as fc,ig as fd,Jp as fe,Wp as ff,qp as fg,ws as fh,gp as fi,mo as fj,Ym as fk,Kg as fl,$p as fm,go as fn,vo as fo,Ht as fp,Ep as fq,wp as fr,Tp as fs,_o as ft,Rr as fu,Bf as fv,zf as fw,cc as fx,bg as fy,ur as fz,Sr as g,md as h,gs as i,at as j,Ge as k,Ho as l,Qt as m,me as n,Je as o,Jc as p,Yc as q,wi as r,zi as s,Wn as t,Os as u,No as v,Lc as w,Pc as x,Dc as y,nh as z};
