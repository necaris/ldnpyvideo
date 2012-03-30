goog.provide('fetch.remotes');
goog.require('cljs.core');
goog.require('fetch.core');
goog.require('cljs.reader');
fetch.remotes.remote_uri = "\/pinotremotecall";
fetch.remotes.remote_callback = (function remote_callback(remote,params,callback){
return fetch.core.xhr.call(null,cljs.core.Vector.fromArray(["\uFDD0'post",fetch.remotes.remote_uri]),cljs.core.ObjMap.fromObject(["\uFDD0'remote","\uFDD0'params"],{"\uFDD0'remote":remote,"\uFDD0'params":cljs.core.pr_str.call(null,params)}),(cljs.core.truth_(callback)?(function (data){
var data__4906 = (cljs.core.truth_(cljs.core._EQ_.call(null,data,""))?"nil":data);

return callback.call(null,cljs.reader.read_string.call(null,data__4906));
}):null));
});
