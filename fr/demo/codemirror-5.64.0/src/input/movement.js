import{Pos}from"../line/pos.js";import{prepareMeasureForLine,measureCharPrepared,wrappedLineExtentChar}from"../measurement/position_measurement.js";import{getBidiPartAt,getOrder}from"../util/bidi.js";import{findFirst,lst,skipExtendingChars}from"../util/misc.js";function moveCharLogically(e,t,r){let n=skipExtendingChars(e.text,t+r,r);return n<0||n>e.text.length?null:n}export function moveLogically(e,t,r){let n=moveCharLogically(e,t.ch,r);return null==n?null:new Pos(t.line,n,r<0?"after":"before")}export function endOfLine(e,t,r,n,o){if(e){"rtl"==t.doc.direction&&(o=-o);let e=getOrder(r,t.doc.direction);if(e){let i,l=o<0?lst(e):e[0],a=o<0==(1==l.level)?"after":"before";if(l.level>0||"rtl"==t.doc.direction){let e=prepareMeasureForLine(t,r);i=o<0?r.text.length-1:0;let n=measureCharPrepared(t,e,i).top;i=findFirst((r=>measureCharPrepared(t,e,r).top==n),o<0==(1==l.level)?l.from:l.to-1,i),"before"==a&&(i=moveCharLogically(r,i,1))}else i=o<0?l.to:l.from;return new Pos(n,i,a)}}return new Pos(n,o<0?r.text.length:0,o<0?"before":"after")}export function moveVisually(e,t,r,n){let o=getOrder(t,e.doc.direction);if(!o)return moveLogically(t,r,n);r.ch>=t.text.length?(r.ch=t.text.length,r.sticky="before"):r.ch<=0&&(r.ch=0,r.sticky="after");let i=getBidiPartAt(o,r.ch,r.sticky),l=o[i];if("ltr"==e.doc.direction&&l.level%2==0&&(n>0?l.to>r.ch:l.from<r.ch))return moveLogically(t,r,n);let a,f=(e,r)=>moveCharLogically(t,e instanceof Pos?e.ch:e,r),c=r=>e.options.lineWrapping?(a=a||prepareMeasureForLine(e,t),wrappedLineExtentChar(e,t,a,r)):{begin:0,end:t.text.length},s=c("before"==r.sticky?f(r,-1):r.ch);if("rtl"==e.doc.direction||1==l.level){let e=1==l.level==n<0,t=f(r,e?1:-1);if(null!=t&&(e?t<=l.to&&t<=s.end:t>=l.from&&t>=s.begin)){let n=e?"before":"after";return new Pos(r.line,t,n)}}let d=(e,t,n)=>{let i=(e,t)=>t?new Pos(r.line,f(e,1),"before"):new Pos(r.line,e,"after");for(;e>=0&&e<o.length;e+=t){let r=o[e],l=t>0==(1!=r.level),a=l?n.begin:f(n.end,-1);if(r.from<=a&&a<r.to)return i(a,l);if(a=l?r.from:f(r.to,-1),n.begin<=a&&a<n.end)return i(a,l)}},u=d(i+n,n,s);if(u)return u;let h=n>0?s.end:f(s.begin,-1);return null==h||n>0&&h==t.text.length||(u=d(n>0?0:o.length-1,n,c(h)),!u)?null:u}