goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____4932 = reader;

if(cljs.core.truth_(and__3546__auto____4932))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____4932;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____4933 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____4933))
{return or__3548__auto____4933;
} else
{var or__3548__auto____4934 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____4934))
{return or__3548__auto____4934;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____4935 = reader;

if(cljs.core.truth_(and__3546__auto____4935))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____4935;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____4936 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____4936))
{return or__3548__auto____4936;
} else
{var or__3548__auto____4937 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____4937))
{return or__3548__auto____4937;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});

/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,index_atom,buffer_atom){
this.s = s;
this.index_atom = index_atom;
this.buffer_atom = buffer_atom;
})
cljs.reader.StringPushbackReader.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.reader.StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char = (function (reader){
var this__4938 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__4938.buffer_atom))))
{var idx__4939 = cljs.core.deref.call(null,this__4938.index_atom);

cljs.core.swap_BANG_.call(null,this__4938.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__4938.s,idx__4939);
} else
{var buf__4940 = cljs.core.deref.call(null,this__4938.buffer_atom);

cljs.core.swap_BANG_.call(null,this__4938.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__4940);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__4941 = this;
return cljs.core.swap_BANG_.call(null,this__4941.buffer_atom,(function (p1__4931_SHARP_){
return cljs.core.cons.call(null,ch,p1__4931_SHARP_);
}));
});
cljs.reader.StringPushbackReader;
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.call(null,0),cljs.core.atom.call(null,null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3548__auto____4942 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____4942))
{return or__3548__auto____4942;
} else
{return cljs.core._EQ_.call(null,",",ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
return goog.string.isNumeric.call(null,ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return cljs.core._EQ_.call(null,";",ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
var or__3548__auto____4943 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____4943))
{return or__3548__auto____4943;
} else
{var and__3546__auto____4945 = (function (){var or__3548__auto____4944 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____4944))
{return or__3548__auto____4944;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____4945))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__4946 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__4946);
return next_ch__4946;
})());
} else
{return and__3546__auto____4945;
}
}
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
throw cljs.core.apply.call(null,cljs.core.str,msg);
};
var reader_error = function (rdr,var_args){
var msg = null;
if (goog.isDef(var_args)) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reader_error__delegate.call(this, rdr, msg);
};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__4947){
var rdr = cljs.core.first(arglist__4947);
var msg = cljs.core.rest(arglist__4947);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____4948 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____4948))
{var and__3546__auto____4949 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____4949))
{var and__3546__auto____4950 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____4950))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____4950;
}
} else
{return and__3546__auto____4949;
}
} else
{return and__3546__auto____4948;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__4951 = (new goog.string.StringBuffer(initch));
var ch__4952 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4953 = (ch__4952 === null);

if(cljs.core.truth_(or__3548__auto____4953))
{return or__3548__auto____4953;
} else
{var or__3548__auto____4954 = cljs.reader.whitespace_QMARK_.call(null,ch__4952);

if(cljs.core.truth_(or__3548__auto____4954))
{return or__3548__auto____4954;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__4952);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__4952);
return sb__4951.toString();
} else
{{
var G__4955 = (function (){sb__4951.append(ch__4952);
return sb__4951;
})();
var G__4956 = cljs.reader.read_char.call(null,rdr);
sb__4951 = G__4955;
ch__4952 = G__4956;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){

while(true){
var ch__4957 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____4958 = cljs.core._EQ_.call(null,ch__4957,"n");

if(cljs.core.truth_(or__3548__auto____4958))
{return or__3548__auto____4958;
} else
{var or__3548__auto____4959 = cljs.core._EQ_.call(null,ch__4957,"r");

if(cljs.core.truth_(or__3548__auto____4959))
{return or__3548__auto____4959;
} else
{return (ch__4957 === null);
}
}
})()))
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern.call(null,"([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+)\/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.symbol_pattern = cljs.core.re_pattern.call(null,"[:]?([^0-9\/].*\/)?([^0-9\/][^\/]*)");
cljs.reader.match_int = (function match_int(s){
var groups__4960 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__4961 = cljs.core.nth.call(null,groups__4960,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____4962 = (void 0 === group3__4961);

if(cljs.core.truth_(or__3548__auto____4962))
{return or__3548__auto____4962;
} else
{return (group3__4961.length < 1);
}
})())))
{return 0;
} else
{var negate__4964 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__4960,1)))?-1:1);
var vec__4963__4965 = (cljs.core.truth_(cljs.core.nth.call(null,groups__4960,3))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__4960,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__4960,4))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__4960,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__4960,5))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__4960,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__4960,7))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__4960,7),parseInt.call(null,cljs.core.nth.call(null,groups__4960,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.Vector.fromArray([null,null]):null)))));
var n__4966 = cljs.core.nth.call(null,vec__4963__4965,0,null);
var radix__4967 = cljs.core.nth.call(null,vec__4963__4965,1,null);

if(cljs.core.truth_((n__4966 === null)))
{return null;
} else
{return (negate__4964 * parseInt.call(null,n__4966,radix__4967));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__4968 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__4969 = cljs.core.nth.call(null,groups__4968,1);
var denominator__4970 = cljs.core.nth.call(null,groups__4968,2);

return (parseInt.call(null,numinator__4969) / parseInt.call(null,denominator__4970));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat.call(null,s);
});
cljs.reader.match_number = (function match_number(s){
if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.int_pattern,s)))
{return cljs.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.float_pattern,s)))
{return cljs.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = cljs.core.HashMap.fromArrays(["t","r","n","\\","\"","b","f"],["\t","\r","\n","\\","\"","\b","\f"]);
cljs.reader.read_unicode_char = (function read_unicode_char(reader,initch){
return cljs.reader.reader_error.call(null,reader,"Unicode characters not supported by reader (yet)");
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__4971 = cljs.reader.read_char.call(null,reader);
var mapresult__4972 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__4971);

if(cljs.core.truth_(mapresult__4972))
{return mapresult__4972;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____4973 = cljs.core._EQ_.call(null,"u",ch__4971);

if(cljs.core.truth_(or__3548__auto____4973))
{return or__3548__auto____4973;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__4971);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__4971);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__4971);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__4974 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__4974)))
{{
var G__4975 = cljs.reader.read_char.call(null,rdr);
ch__4974 = G__4975;
continue;
}
} else
{return ch__4974;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__4976 = cljs.core.Vector.fromArray([]);

while(true){
var ch__4977 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__4977))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__4977)))
{return a__4976;
} else
{var temp__3695__auto____4978 = cljs.core.get.call(null,cljs.reader.macros,ch__4977);

if(cljs.core.truth_(temp__3695__auto____4978))
{var macrofn__4979 = temp__3695__auto____4978;

var mret__4980 = macrofn__4979.call(null,rdr,ch__4977);

{
var G__4982 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__4980,rdr))?a__4976:cljs.core.conj.call(null,a__4976,mret__4980));
a__4976 = G__4982;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__4977);
var o__4981 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__4983 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__4981,rdr))?a__4976:cljs.core.conj.call(null,a__4976,o__4981));
a__4976 = G__4983;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch__4984 = cljs.reader.read_char.call(null,rdr);
var dm__4985 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__4984);

if(cljs.core.truth_(dm__4985))
{return dm__4985.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__4984);
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Unmached delimiter ",ch);
});
cljs.reader.read_list = (function read_list(rdr,_){
return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){
return cljs.reader.read_delimited_list.call(null,"]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){
var l__4986 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__4986))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__4986);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__4987 = (new goog.string.StringBuffer(initch));
var ch__4988 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4989 = (ch__4988 === null);

if(cljs.core.truth_(or__3548__auto____4989))
{return or__3548__auto____4989;
} else
{var or__3548__auto____4990 = cljs.reader.whitespace_QMARK_.call(null,ch__4988);

if(cljs.core.truth_(or__3548__auto____4990))
{return or__3548__auto____4990;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__4988);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__4988);
var s__4991 = buffer__4987.toString();

var or__3548__auto____4992 = cljs.reader.match_number.call(null,s__4991);

if(cljs.core.truth_(or__3548__auto____4992))
{return or__3548__auto____4992;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__4991,"]");
}
} else
{{
var G__4993 = (function (){buffer__4987.append(ch__4988);
return buffer__4987;
})();
var G__4994 = cljs.reader.read_char.call(null,reader);
buffer__4987 = G__4993;
ch__4988 = G__4994;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__4995 = (new goog.string.StringBuffer());
var ch__4996 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__4996 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__4996)))
{{
var G__4997 = (function (){buffer__4995.append(cljs.reader.escape_char.call(null,buffer__4995,reader));
return buffer__4995;
})();
var G__4998 = cljs.reader.read_char.call(null,reader);
buffer__4995 = G__4997;
ch__4996 = G__4998;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__4996)))
{return buffer__4995.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__4999 = (function (){buffer__4995.append(ch__4996);
return buffer__4995;
})();
var G__5000 = cljs.reader.read_char.call(null,reader);
buffer__4995 = G__4999;
ch__4996 = G__5000;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.reader.special_symbols = cljs.core.ObjMap.fromObject(["nil","true","false"],{"nil":null,"true":true,"false":false});
cljs.reader.read_symbol = (function read_symbol(reader,initch){
var token__5001 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__5001,"\/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__5001,0,token__5001.indexOf("\/")),cljs.core.subs.call(null,token__5001,(token__5001.indexOf("\/") + 1),token__5001.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__5001,cljs.core.symbol.call(null,token__5001));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__5003 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__5002__5004 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__5003);
var token__5005 = cljs.core.nth.call(null,vec__5002__5004,0,null);
var ns__5006 = cljs.core.nth.call(null,vec__5002__5004,1,null);
var name__5007 = cljs.core.nth.call(null,vec__5002__5004,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____5009 = (function (){var and__3546__auto____5008 = cljs.core.not.call(null,(void 0 === ns__5006));

if(cljs.core.truth_(and__3546__auto____5008))
{return (ns__5006.substring((ns__5006.length - 2),ns__5006.length) === ":\/");
} else
{return and__3546__auto____5008;
}
})();

if(cljs.core.truth_(or__3548__auto____5009))
{return or__3548__auto____5009;
} else
{var or__3548__auto____5010 = ((name__5007[(name__5007.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____5010))
{return or__3548__auto____5010;
} else
{return cljs.core.not.call(null,(token__5005.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__5005);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__5006.substring(0,ns__5006.indexOf("\/")),name__5007);
} else
{return cljs.core.keyword.call(null,token__5005);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,f)))
{return cljs.core.HashMap.fromArrays([f],[true]);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return f;
} else
{return null;
}
}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){
return (function (rdr,_){
return cljs.core.list.call(null,sym,cljs.reader.read.call(null,rdr,true,null,true));
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.call(null,rdr,msg);
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){
var m__5011 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__5011)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__5012 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__450__auto____5013 = o__5012;

if(cljs.core.truth_((function (){var and__3546__auto____5014 = x__450__auto____5013;

if(cljs.core.truth_(and__3546__auto____5014))
{var and__3546__auto____5015 = x__450__auto____5013.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____5015))
{return cljs.core.not.call(null,x__450__auto____5013.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____5015;
}
} else
{return and__3546__auto____5014;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__450__auto____5013);
}
})()))
{return cljs.core.with_meta.call(null,o__5012,cljs.core.merge.call(null,cljs.core.meta.call(null,o__5012),m__5011));
} else
{return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function read_set(rdr,_){
return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){
return cljs.core.re_pattern.call(null,cljs.reader.read_string.call(null,rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){
cljs.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.reader.macros = cljs.core.HashMap.fromArrays(["@","`","\"","#","%","'","(",")",":",";","[","{","\\","]","}","^","~"],[cljs.reader.wrapping_reader.call(null,"\uFDD1'deref"),cljs.reader.not_implemented,cljs.reader.read_string,cljs.reader.read_dispatch,cljs.reader.not_implemented,cljs.reader.wrapping_reader.call(null,"\uFDD1'quote"),cljs.reader.read_list,cljs.reader.read_unmatched_delimiter,cljs.reader.read_keyword,cljs.reader.not_implemented,cljs.reader.read_vector,cljs.reader.read_map,cljs.reader.read_char,cljs.reader.read_unmatched_delimiter,cljs.reader.read_unmatched_delimiter,cljs.reader.read_meta,cljs.reader.not_implemented]);
cljs.reader.dispatch_macros = cljs.core.ObjMap.fromObject(["{","<","\"","!","_"],{"{":cljs.reader.read_set,"<":cljs.reader.throwing_reader.call(null,"Unreadable form"),"\"":cljs.reader.read_regex,"!":cljs.reader.read_comment,"_":cljs.reader.read_discard});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch__5016 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__5016 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__5016)))
{{
var G__5018 = reader;
var G__5019 = eof_is_error;
var G__5020 = sentinel;
var G__5021 = is_recursive;
reader = G__5018;
eof_is_error = G__5019;
sentinel = G__5020;
is_recursive = G__5021;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__5016)))
{{
var G__5022 = cljs.reader.read_comment.call(null,reader,ch__5016);
var G__5023 = eof_is_error;
var G__5024 = sentinel;
var G__5025 = is_recursive;
reader = G__5022;
eof_is_error = G__5023;
sentinel = G__5024;
is_recursive = G__5025;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__5017 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__5016))?cljs.reader.macros.call(null,ch__5016).call(null,reader,ch__5016):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__5016))?cljs.reader.read_number.call(null,reader,ch__5016):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__5016):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__5017,reader)))
{{
var G__5026 = reader;
var G__5027 = eof_is_error;
var G__5028 = sentinel;
var G__5029 = is_recursive;
reader = G__5026;
eof_is_error = G__5027;
sentinel = G__5028;
is_recursive = G__5029;
continue;
}
} else
{return res__5017;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){
var r__5030 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__5030,true,null,false);
});
