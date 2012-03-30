goog.provide('fetch.core');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('clojure.string');
goog.require('fetch.util');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
fetch.core.__GT_method = (function __GT_method(m){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,m));
});
fetch.core.parse_route = (function parse_route(route){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,route)))
{return cljs.core.Vector.fromArray(["GET",route]);
} else
{if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,route)))
{var vec__4907__4908 = route;
var m__4909 = cljs.core.nth.call(null,vec__4907__4908,0,null);
var u__4910 = cljs.core.nth.call(null,vec__4907__4908,1,null);

return cljs.core.Vector.fromArray([fetch.core.__GT_method.call(null,m__4909),u__4910]);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.Vector.fromArray(["GET",route]);
} else
{return null;
}
}
}
});
fetch.core.__GT_data = (function __GT_data(d){
var cur__4911 = fetch.util.clj__GT_js.call(null,d);
var query__4912 = goog.Uri.QueryData.createFromMap.call(null,(new goog.structs.Map(cur__4911)));

return cljs.core.str.call(null,query__4912);
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__4913 = req.getResponseText();

return callback.call(null,data__4913);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__4914){
var vec__4915__4916 = p__4914;
var opts__4917 = cljs.core.nth.call(null,vec__4915__4916,0,null);

var req__4919 = (new goog.net.XhrIo());
var vec__4918__4920 = fetch.core.parse_route.call(null,route);
var method__4921 = cljs.core.nth.call(null,vec__4918__4920,0,null);
var uri__4922 = cljs.core.nth.call(null,vec__4918__4920,1,null);
var data__4923 = fetch.core.__GT_data.call(null,content);
var callback__4924 = fetch.core.__GT_callback.call(null,callback);

if(cljs.core.truth_(callback__4924))
{goog.events.listen.call(null,req__4919,goog.net.EventType.COMPLETE,(function (){
return callback__4924.call(null,req__4919);
}));
} else
{}
return req__4919.send(uri__4922,method__4921,data__4923,(cljs.core.truth_(opts__4917)?fetch.util.clj__GT_js.call(null,opts__4917):null));
};
var xhr = function (route,content,callback,var_args){
var p__4914 = null;
if (goog.isDef(var_args)) {
  p__4914 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__4914);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__4925){
var route = cljs.core.first(arglist__4925);
var content = cljs.core.first(cljs.core.next(arglist__4925));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4925)));
var p__4914 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4925)));
return xhr__delegate.call(this, route, content, callback, p__4914);
});
return xhr;
})()
;
