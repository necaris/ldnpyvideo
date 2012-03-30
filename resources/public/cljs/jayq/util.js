goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__4853 = cljs.core.js_obj.call(null);

var G__4854__4855 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__4854__4855))
{var G__4857__4859 = cljs.core.first.call(null,G__4854__4855);
var vec__4858__4860 = G__4857__4859;
var k__4861 = cljs.core.nth.call(null,vec__4858__4860,0,null);
var v__4862 = cljs.core.nth.call(null,vec__4858__4860,1,null);
var G__4854__4863 = G__4854__4855;

var G__4857__4864 = G__4857__4859;
var G__4854__4865 = G__4854__4863;

while(true){
var vec__4866__4867 = G__4857__4864;
var k__4868 = cljs.core.nth.call(null,vec__4866__4867,0,null);
var v__4869 = cljs.core.nth.call(null,vec__4866__4867,1,null);
var G__4854__4870 = G__4854__4865;

(out__4853[cljs.core.name.call(null,k__4868)] = v__4869);
var temp__3698__auto____4871 = cljs.core.next.call(null,G__4854__4870);

if(cljs.core.truth_(temp__3698__auto____4871))
{var G__4854__4872 = temp__3698__auto____4871;

{
var G__4873 = cljs.core.first.call(null,G__4854__4872);
var G__4874 = G__4854__4872;
G__4857__4864 = G__4873;
G__4854__4865 = G__4874;
continue;
}
} else
{}
break;
}
} else
{}
return out__4853;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__4875 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__4875);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__4876){
var v = cljs.core.first(arglist__4876);
var text = cljs.core.rest(arglist__4876);
return log__delegate.call(this, v, text);
});
return log;
})()
;
