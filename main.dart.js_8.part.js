self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={bmB:function bmB(){},
bwD(d,e,f,g){return new A.RX(g,d,f,e,null)},
RX:function RX(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.w=g
_.a=h},
azR:function azR(d){var _=this
_.d=null
_.e=0
_.f=!0
_.a=null
_.b=d
_.c=null},
bfU:function bfU(d){this.a=d},
bfT:function bfT(d){this.a=d},
bfV:function bfV(d){this.a=d},
arl:function arl(d,e){this.a=d
this.b=e},
aq3:function aq3(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.a=o},
b_k:function b_k(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bB2(d){var x=C.q.bz(B.bV(0,0,d.a-Date.now(),0).a,6e7)
if(x>0)return x
else return 0}},C,B,D,E
A=a.updateHolder(c[10],A)
C=c[2]
B=c[0]
D=c[22]
E=c[23]
A.RX.prototype={
Y(){return new A.azR(C.y)}}
A.azR.prototype={
n(){this.f=!0
var x=this.d
if(x!=null)x.ac(0)
this.b0()},
H(d){var x=this
if(x.a.w.gj2()!=null&&x.f){x.f=!1
x.e=A.bB2(B.hW(x.a.w.gj2().ghf()))
x.d=B.Sb(C.i1,new A.bfU(x))}return new B.fO(new A.bfV(x),null)}}
A.arl.prototype={
j(d){return"TickAlignment."+this.b}}
A.aq3.prototype={
aB(d,e){var x,w,v,u,t,s,r,q,p,o,n=this,m=null
n.aqK(d)
x=n.d
w=x/2/4
v=B.be()
v.saj(0,n.f)
v.scD(0,C.bi)
v.soK(C.dD)
u=w/2
v.sic(u)
t=n.b
s=t+u
r=n.c
u=r+u
q=x-w
d.lw(new B.L(s,u,s+q,u+q),-1.5707963267948966,n.z*2*3.141592653589793,!1,v)
u=n.at
if(u){s=n.Q
p=B.OB(m,m,m,m,B.bC(m,m,B.jg(C.aI,48,m,C.aD,0.8,m),s),C.aS,C.aG,m,1,C.ac)
p.mB(q,0)
p.aB(d,new B.j((t+w+x-w)/2-s.length*12,(r+w+x-w)/2-24))}s=n.as
o=B.OB(m,m,m,m,B.bC(m,m,B.jg(C.eu,24,m,C.aD,0.8,m),s),C.aS,C.aG,m,1,C.ac)
o.mB(q,0)
s=s.length
t=t+w+x
x=r+w+x
o.aB(d,u?new B.j((t-w)/2-s*6,(x-w)/2+12):new B.j((t-w)/2-s*5.5,(x-w)/2-10))},
aqK(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.d,l=m/2/4,k=B.be(),j=n.f
k.saj(0,j)
k.scD(0,C.bi)
k.soK(C.dD)
x=l/2
k.sic(x)
w=n.e
v=6.283185307179586/w
u=v/(1+1/n.w)
t=w-0.5
s=C.q.hV(w)
r=n.b+x
x=n.c+x
m-=l
q=new A.b_k(-1.5707963267948966+-u/2,d,new B.L(r,x,r+m,x+m),k)
for(m=u+0,x=t>=0,r=n.r,p=0;p<w;++p){if(t>=p)k.saj(0,r)
else{o=p-t
if(o<=1){o=B.a8(r,j,o)
o.toString
k.saj(0,o)}else k.saj(0,x&&p<=s?r:j)}q.$2(p*v-0,m)}},
fz(d){return!0}}
var z=a.updateTypes([])
A.bmB.prototype={
$1(d){var x
if(d==null)x=B.S1(B.b([],y.h),y.d)
else{x=$.Kc().a_V(0,"orderedByUserId",d).m4()
x=new B.cz(D.r2,x,x.$ti.i("cz<am.T,r<bd>>"))}return x},
$S:249}
A.bfU.prototype={
$1(d){var x=this.a
return x.P(new A.bfT(x))},
$S:75}
A.bfT.prototype={
$0(){var x=this.a
x.e=A.bB2(B.hW(x.a.w.gj2().ghf()))},
$S:1}
A.bfV.prototype={
$2(d,e){var x,w,v,u,t,s=null,r=this.a,q=r.a,p=q.c,o=q.d,n=Math.min(p,o)
if(q.w.gmg()!=null&&r.a.w.gj2()!=null){q=B.hW(r.a.w.gmg().ghf())
x=C.q.bz(B.bV(0,0,B.hW(r.a.w.gj2().ghf()).a-q.a,0).a,6e7)
x=x>60?x:60
w=x}else w=60
q=r.a.e
v=r.e
u=C.q.j(C.i.hT(v))
t=r.a.w.gmg()!=null?"min":"waiting"
r=r.a.w.gmg()!=null&&!0
return B.bY(B.Gm(s,s,s,new A.aq3((p-n)/2,(o-n)/2,n,q,C.aI,C.eu,0.7,v/w,u,t,r,s),C.O,!0),o,p)},
$S:852}
A.b_k.prototype={
$2(d,e){var x=this
x.b.lw(x.c,d+x.a,e,!1,x.d)},
$S:853};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.d8,[A.bmB,A.bfU])
w(A.RX,B.W)
w(A.azR,B.a9)
w(A.bfT,B.Hr)
x(B.IM,[A.bfV,A.b_k])
w(A.arl,B.SC)
w(A.aq3,B.Q3)})()
B.M8(b.typeUniverse,JSON.parse('{"RX":{"W":[],"h":[]},"azR":{"a9":["RX"]},"arl":{"a6":[]},"aq3":{"aF":[]}}'))
var y={h:B.a_("z<bd>"),d:B.a_("r<bd>")};(function constants(){E.aqR=new A.arl(1,"center")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"clT","bnk",()=>B.b2e($.bsf(),new A.bmB(),B.a_("i?"),y.d))})()}
$__dart_deferred_initializers__["QAAOwb8y1OBzPKNlUZ+wywH1B/E="] = $__dart_deferred_initializers__.current
