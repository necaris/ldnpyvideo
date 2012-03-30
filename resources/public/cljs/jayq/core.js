goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('jayq.util');
goog.require('clojure.string');
jayq.core.crate_meta = (function crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function __GT_selector(sel){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,sel)))
{return sel;
} else
{if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,sel)))
{return cljs.core.str.call(null,"[crateGroup=",jayq.core.crate_meta.call(null,sel),"]");
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,sel)))
{return cljs.core.name.call(null,sel);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return sel;
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.$ = (function() { 
var $__delegate = function (sel,p__4778){
var vec__4779__4780 = p__4778;
var context__4781 = cljs.core.nth.call(null,vec__4779__4780,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__4781)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__4781);
}
};
var $ = function (sel,var_args){
var p__4778 = null;
if (goog.isDef(var_args)) {
  p__4778 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__4778);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__4782){
var sel = cljs.core.first(arglist__4782);
var p__4778 = cljs.core.rest(arglist__4782);
return $__delegate.call(this, sel, p__4778);
});
return $;
})()
;
jQuery.prototype.cljs$core$IReduce$ = true;
jQuery.prototype.cljs$core$IReduce$_reduce = (function (this$,f){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,cljs.core.first.call(null,this$),cljs.core.count.call(null,this$));
});
jQuery.prototype.cljs$core$IReduce$_reduce = (function (this$,f,start){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,start,jayq.core.i);
});
jQuery.prototype.cljs$core$ILookup$ = true;
jQuery.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4784 = null;
var G__4784__4785 = (function (this$,k){
var or__3548__auto____4783 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____4783))
{return or__3548__auto____4783;
} else
{return null;
}
});
var G__4784__4786 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__4784 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__4784__4785.call(this,this$,k);
case  3 :
return G__4784__4786.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4784;
})()
;
jQuery.prototype.cljs$core$ISequential$ = true;
jQuery.prototype.cljs$core$IIndexed$ = true;
jQuery.prototype.cljs$core$IIndexed$_nth = (function (this$,n){
if(cljs.core.truth_((n < cljs.core.count.call(null,this$))))
{return this$.slice(n,(n + 1));
} else
{return null;
}
});
jQuery.prototype.cljs$core$IIndexed$_nth = (function (this$,n,not_found){
if(cljs.core.truth_((n < cljs.core.count.call(null,this$))))
{return this$.slice(n,(n + 1));
} else
{if(cljs.core.truth_((void 0 === not_found)))
{return null;
} else
{return not_found;
}
}
});
jQuery.prototype.cljs$core$ICounted$ = true;
jQuery.prototype.cljs$core$ICounted$_count = (function (this$){
return this$.size();
});
jQuery.prototype.cljs$core$ISeq$ = true;
jQuery.prototype.cljs$core$ISeq$_first = (function (this$){
return this$.slice(0,1);
});
jQuery.prototype.cljs$core$ISeq$_rest = (function (this$){
if(cljs.core.truth_((cljs.core.count.call(null,this$) > 1)))
{return this$.slice(1);
} else
{return cljs.core.list.call(null);
}
});
jQuery.prototype.cljs$core$ISeqable$ = true;
jQuery.prototype.cljs$core$ISeqable$_seq = (function (this$){
if(cljs.core.truth_(this$.get(0)))
{return this$;
} else
{return null;
}
});
jQuery.prototype.call = (function() {
var G__4788 = null;
var G__4788__4789 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__4788__4790 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__4788 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__4788__4789.call(this,_,k);
case  3 :
return G__4788__4790.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4788;
})()
;
jayq.core.anim = (function anim(elem,props,dur){
return elem.animate(jayq.util.map__GT_js.call(null,props),dur);
});
jayq.core.text = (function text($elem,txt){
return $elem.text(txt);
});
jayq.core.css = (function css($elem,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,opts)))
{return $elem.css(cljs.core.name.call(null,opts));
} else
{return $elem.css(jayq.util.map__GT_js.call(null,opts));
}
});
/**
* @param {...*} var_args
*/
jayq.core.attr = (function() { 
var attr__delegate = function ($elem,a,p__4792){
var vec__4793__4794 = p__4792;
var v__4795 = cljs.core.nth.call(null,vec__4793__4794,0,null);

var a__4796 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__4795)))
{return $elem.attr(a__4796);
} else
{return $elem.attr(a__4796,v__4795);
}
};
var attr = function ($elem,a,var_args){
var p__4792 = null;
if (goog.isDef(var_args)) {
  p__4792 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__4792);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__4797){
var $elem = cljs.core.first(arglist__4797);
var a = cljs.core.first(cljs.core.next(arglist__4797));
var p__4792 = cljs.core.rest(cljs.core.next(arglist__4797));
return attr__delegate.call(this, $elem, a, p__4792);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__4798){
var vec__4799__4800 = p__4798;
var v__4801 = cljs.core.nth.call(null,vec__4799__4800,0,null);

var k__4802 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__4801)))
{return $elem.data(k__4802);
} else
{return $elem.data(k__4802,v__4801);
}
};
var data = function ($elem,k,var_args){
var p__4798 = null;
if (goog.isDef(var_args)) {
  p__4798 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__4798);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__4803){
var $elem = cljs.core.first(arglist__4803);
var k = cljs.core.first(cljs.core.next(arglist__4803));
var p__4798 = cljs.core.rest(cljs.core.next(arglist__4803));
return data__delegate.call(this, $elem, k, p__4798);
});
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__4804 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__4804);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__4805 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__4805);
});
jayq.core.append = (function append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.remove = (function remove($elem){
return $elem.remove();
});
/**
* @param {...*} var_args
*/
jayq.core.hide = (function() { 
var hide__delegate = function ($elem,p__4806){
var vec__4807__4808 = p__4806;
var speed__4809 = cljs.core.nth.call(null,vec__4807__4808,0,null);
var on_finish__4810 = cljs.core.nth.call(null,vec__4807__4808,1,null);

return $elem.hide(speed__4809,on_finish__4810);
};
var hide = function ($elem,var_args){
var p__4806 = null;
if (goog.isDef(var_args)) {
  p__4806 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__4806);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__4811){
var $elem = cljs.core.first(arglist__4811);
var p__4806 = cljs.core.rest(arglist__4811);
return hide__delegate.call(this, $elem, p__4806);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__4812){
var vec__4813__4814 = p__4812;
var speed__4815 = cljs.core.nth.call(null,vec__4813__4814,0,null);
var on_finish__4816 = cljs.core.nth.call(null,vec__4813__4814,1,null);

return $elem.show(speed__4815,on_finish__4816);
};
var show = function ($elem,var_args){
var p__4812 = null;
if (goog.isDef(var_args)) {
  p__4812 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__4812);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__4817){
var $elem = cljs.core.first(arglist__4817);
var p__4812 = cljs.core.rest(arglist__4817);
return show__delegate.call(this, $elem, p__4812);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__4818){
var vec__4819__4820 = p__4818;
var speed__4821 = cljs.core.nth.call(null,vec__4819__4820,0,null);
var on_finish__4822 = cljs.core.nth.call(null,vec__4819__4820,1,null);

return $elem.fadeOut(speed__4821,on_finish__4822);
};
var fade_out = function ($elem,var_args){
var p__4818 = null;
if (goog.isDef(var_args)) {
  p__4818 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__4818);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__4823){
var $elem = cljs.core.first(arglist__4823);
var p__4818 = cljs.core.rest(arglist__4823);
return fade_out__delegate.call(this, $elem, p__4818);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__4824){
var vec__4825__4826 = p__4824;
var speed__4827 = cljs.core.nth.call(null,vec__4825__4826,0,null);
var on_finish__4828 = cljs.core.nth.call(null,vec__4825__4826,1,null);

return $elem.fadeIn(speed__4827,on_finish__4828);
};
var fade_in = function ($elem,var_args){
var p__4824 = null;
if (goog.isDef(var_args)) {
  p__4824 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__4824);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__4829){
var $elem = cljs.core.first(arglist__4829);
var p__4824 = cljs.core.rest(arglist__4829);
return fade_in__delegate.call(this, $elem, p__4824);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__4830){
var vec__4831__4832 = p__4830;
var speed__4833 = cljs.core.nth.call(null,vec__4831__4832,0,null);
var on_finish__4834 = cljs.core.nth.call(null,vec__4831__4832,1,null);

return $elem.slideUp(speed__4833,on_finish__4834);
};
var slide_up = function ($elem,var_args){
var p__4830 = null;
if (goog.isDef(var_args)) {
  p__4830 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__4830);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__4835){
var $elem = cljs.core.first(arglist__4835);
var p__4830 = cljs.core.rest(arglist__4835);
return slide_up__delegate.call(this, $elem, p__4830);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__4836){
var vec__4837__4838 = p__4836;
var speed__4839 = cljs.core.nth.call(null,vec__4837__4838,0,null);
var on_finish__4840 = cljs.core.nth.call(null,vec__4837__4838,1,null);

return $elem.slideDown(speed__4839,on_finish__4840);
};
var slide_down = function ($elem,var_args){
var p__4836 = null;
if (goog.isDef(var_args)) {
  p__4836 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__4836);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__4841){
var $elem = cljs.core.first(arglist__4841);
var p__4836 = cljs.core.rest(arglist__4841);
return slide_down__delegate.call(this, $elem, p__4836);
});
return slide_down;
})()
;
jayq.core.bind = (function bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.find = (function find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.trigger = (function trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.inner = (function inner($elem,v){
return $elem.html(v);
});
jayq.core.empty = (function empty($elem){
return $elem.empty();
});
/**
* @param {...*} var_args
*/
jayq.core.val = (function() { 
var val__delegate = function ($elem,p__4842){
var vec__4843__4844 = p__4842;
var v__4845 = cljs.core.nth.call(null,vec__4843__4844,0,null);

if(cljs.core.truth_(v__4845))
{return $elem.val(v__4845);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__4842 = null;
if (goog.isDef(var_args)) {
  p__4842 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__4842);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__4846){
var $elem = cljs.core.first(arglist__4846);
var p__4842 = cljs.core.rest(arglist__4846);
return val__delegate.call(this, $elem, p__4842);
});
return val;
})()
;
jayq.core.queue = (function queue($elem,callback){
return $elem.queue(callback);
});
jayq.core.dequeue = (function dequeue(elem){
return jayq.core.$.call(null,elem).dequeue();
});
jayq.core.xhr = (function xhr(p__4847,content,callback){
var vec__4848__4849 = p__4847;
var method__4850 = cljs.core.nth.call(null,vec__4848__4849,0,null);
var uri__4851 = cljs.core.nth.call(null,vec__4848__4849,1,null);

var params__4852 = jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__4850)),"\uFDD0'data":jayq.util.map__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__4851,params__4852);
});
