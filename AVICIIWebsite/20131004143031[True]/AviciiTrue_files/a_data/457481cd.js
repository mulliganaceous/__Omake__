var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var analytics=function(){"use strict";window.ga=null;var a=function(){!function(a,b,c,d,e,f,g){a.GoogleAnalyticsObject=e,a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)},a[e].l=1*new Date,f=b.createElement(c),g=b.getElementsByTagName(c)[0],f.async=1,f.src=d,g.parentNode.insertBefore(f,g)}(window,document,"script","//web.archive.org/web/20131015173332/https://www.google-analytics.com/analytics.js","ga"),window.ga("create","UA-5784146-20",{sampleRate:100,siteSpeedSampleRate:100,cookieDomain:"embed.spotify.com"});var a=window.location!==window.parent.location?document.referrer:document.location;window.ga("set","referrer",a),window.ga("send","pageview")},b=function(){a()},c=function(a,b,c){window.ga("send","event",{eventCategory:a,eventAction:b,eventLabel:c})},d=function(a,b,c,d){var e=["send","timing",a,b,c];d&&e.push(d),window.ga.apply(void 0,e)};return{init:b,trackEvent:c,trackTiming:d}}(),followApi=function(a){"use strict";function b(a,b){return this.category=a,this.variable=b,this.label=null,this.startTime=null,this.endTime=null,this}function c(a,b){var c=[];for(var d in b)b.hasOwnProperty(d)&&c.push(encodeURIComponent(d)+"="+encodeURIComponent(b[d]));return c.join("&"),c.length&&(a+="?"+c.join("&")),a}function d(a,b,d){var e={};"oauth_token"in a&&(e.oauth_token=a.oauth_token),a.fields&&(e.fields=a.fields.join(","));var f=c(g+"/follow/"+a.type+"/"+a.id,e);h({url:f,trackLabel:"Get follow data"},function(a){b(a)},function(a){d(a)})}function e(a,b,d){var e={oauth_token:a.oauth_token};a.fields&&(e.fields=a.fields.join(","));var f=c(g+"/follow/"+a.type+"/"+a.id,e);h({url:f,type:"put",trackLabel:"Follow"},function(a){b(a)},function(a){d(a)})}function f(a,b,d){var e={oauth_token:a.oauth_token};a.fields&&(e.fields=a.fields.join(","));var f=c(g+"/follow/"+a.type+"/"+a.id,e);h({url:f,type:"delete",trackLabel:"Unfollow"},function(a){b(a)},function(a){d(a)})}b.prototype.start=function(){return this.startTime=(new Date).getTime(),this},b.prototype.end=function(a){return void 0!==a&&(this.label=a),this.endTime=(new Date).getTime(),this},b.prototype.send=function(){var b=this.endTime-this.startTime,c=36e5;return a&&b>0&&c>b&&a.trackTiming(this.category,this.variable,b,this.label),this};var g="http://web.archive.org/web/20131015173332/https://ws.spotify.com/v1",h=function(a,c,d){function e(a,b){var c=new XMLHttpRequest;return"withCredentials"in c?c.open(a,b,!0):"undefined"!=typeof XDomainRequest?(c=new XDomainRequest,c.open(a,b),c.timeout=1e4,c.onprogress=function(){},c.ontimeout=function(){d&&d({type:"timeout",code:g.status.toString()})}):c=null,c}var f=new b("Follow API",a.trackLabel);f.start();var g=e(a.type||"get",a.url);g&&(g.onload=function(){if(f.end(g.status).send(),200===g.status){if(c)try{var a=JSON.parse(g.responseText);c(a)}catch(b){d({type:"invalid",code:g.status.toString()})}}else d&&d({type:"error",code:g.status.toString()})},g.onerror=function(){f.end(g.status).send(),d&&d({type:"error",code:g.status.toString()})},setTimeout(function(){g.send()},0))};return{getFollowData:d,follow:e,unfollow:f}},formatter=function(){"use strict";function a(a){var c=b(a),d=c.number.toString();return 1e3===c.multiplier?d+="k":1e6===c.multiplier&&(d+="m"),d}function b(a){var b=1;return a>1e6?(a/=1e6,a=Math.floor(10*a)/10,b=1e6):a>1e3&&(a/=1e3,a=Math.floor(10*a)/10,b=1e3),{number:a,multiplier:b}}return{formatNumber:a}}(),oauth=function(){var a=function(){try{return"localStorage"in window&&null!==window.localStorage}catch(a){return!1}}(),b="oauth_token",c="oauth_cached",d=300,e=function(){function a(a,b,c){var d=new Date;c=void 0===c?30:c,d.setTime(d.getTime()+1e3*60*60*24*c);var e="; expires="+d.toGMTString();document.cookie=a+"="+b+e+"; path=/"}function e(a){for(var b=a+"=",c=document.cookie.split(";"),d=0,e=c.length;e>d;d++){for(var f=c[d];" "===f.charAt(0);)f=f.substring(1,f.length);if(0===f.indexOf(b))return f.substring(b.length,f.length)}return null}return{readToken:function(){return e(b)},storeToken:function(c){return this.tempPreventRefresh(),a(b,c)},emptyToken:function(){this.tempPreventRefresh(),a(b,"",-1)},shouldCheck:function(){var a=+e(c);return a<(new Date).getTime()},tempPreventRefresh:function(){a(c,(new Date).getTime()+1e3*d)}}},f=function(){return{readToken:function(){return localStorage.getItem(b)},storeToken:function(a){return this.tempPreventRefresh(),localStorage.setItem(b,a)},emptyToken:function(){this.tempPreventRefresh(),localStorage.removeItem(b)},shouldCheck:function(){var a=+localStorage.getItem(c);return a<(new Date).getTime()},tempPreventRefresh:function(){localStorage.setItem(c,(new Date).getTime()+1e3*d)}}};return a?new f:new e}(),commandExecutor=function(){"use strict";function a(a){return e=2,d=a,this}function b(){if(null!==d){if(e--,!(e>=0))throw"Max attempts reached";d.execute(function(){d=null})}}function c(){d=null}var d,e;return{store:a,executePending:b,removePending:c}}(),utils=function(){var a=function(b,c){return a=document.documentElement.classList?function(a,b){return a.classList.contains(b)}:function(a,b){if(!a||!a.className)return!1;var c=new RegExp("(^|\\s)"+b+"(\\s|$)");return a.className.match(c)},a(b,c)},b=function(c,d){b=document.documentElement.classList?function(a,b){a.classList.add(b)}:function(b,c){return b?(a(b,c)||(b.className+=(b.className?" ":"")+c),void 0):!1},b(c,d)},c=function(a,b){c=document.documentElement.classList?function(a,b){a.classList.remove(b)}:function(a,b){if(!a||!a.className)return!1;var c=new RegExp("(^|\\s)"+b+"(\\s|$)","g");a.className=a.className.replace(c,"$2")},c(a,b)},d=function(a,b,c,e){d=window.addEventListener?function(a,b,c,d){return a.addEventListener(b,c,d)}:function(a,b,c,d){return a.attachEvent("on"+b,c,d)},d(a,b,c,e)},e=function(a,b,c,d){e=window.removeEventListener?function(a,b,c,d){return a.removeEventListener(b,c,d)}:function(a,b,c,d){return a.detachEvent("on"+b,c,d)},e(a,b,c,d)};return{addEventListener:d,removeEventListener:e,addClass:b,removeClass:c,containsClass:a}}(),SP=SP||{};SP.FollowButton=function(a,b,c,d,e,f,g){function h(){g.addEventListener(z,"click",function(){var a=n()?new L(K):new L(J);e.store(a).executePending()},!1)}function i(a){B&&(B.innerHTML=b.formatNumber(a))}function j(a,b){var c=document.createElement("a");c.href=b,c.target="_blank",c.innerHTML=a.outerHTML,a.outerHTML=c.outerHTML}function k(a){var b=null,c=function(){var a=x.querySelector(".img");g.addClass(a,"placeholder"),m()};if(a){var d=new Image;d.onload=function(){null!==b&&clearTimeout(b);var a=x.querySelector(".img");g.removeClass(a,"placeholder"),d.className="img-image";var c=d.width,e=d.height;if(c>e){d.height=56;var f=parseInt(56*c/e,10);d.width=f,d.style.left=-parseInt((f-56)/2,10)+"px"}else{d.width=56;var h=parseInt(56*(e/c),10);d.height=h,d.style.top=-parseInt((h-56)/2,10)+"px"}a.appendChild(d),m()},d.src=a,b=setTimeout(c,2e3)}else c()}function l(a){if(i(a.followers),a.following?(y.innerHTML=c.following,g.addClass(x,"following")):y.innerHTML=c.follow,o(a.following),"detail"===M.size){D.innerHTML=a.detail.name;var b=a.detail.url;b&&j(D,b),k(a.detail.image)}else m()}function m(){g.removeClass(document.body,"hidden")}function n(){return E}function o(a){E=a}function p(){f.trackEvent("Follow","Options-Size",M.size),f.trackEvent("Follow","Options-ShowCount",M["show-count"]),f.trackEvent("Follow","Options-Id",M.id),f.trackEvent("Follow","Options-Type",M.type),f.trackEvent("Follow","Options-Theme",M.theme),d.shouldCheck()?(d.tempPreventRefresh(),u()):r()}function q(){var a=["following"];M["show-count"]&&a.push("count"),"detail"===M.size&&a.push("detail");var b={type:M.type,id:M.id,fields:a},c=d.readToken();return c&&(b.oauth_token=c),b}function r(){var a=q();w.getFollowData(a,function(a){N=a.following?a.followers-1:a.followers,l(a),window.performance.timing&&f.trackTiming("Follow Widget","From start to rendered",(new Date).getTime()-window.performance.timing.navigationStart)},function(a){"401"===a.code?(f.trackEvent("Follow","API call - Get initial data","Token expired"),d.emptyToken(),r()):(console.error("Spotify Follow Button is kept hidden because there is an error in the parameters"),f.trackEvent("Follow","API call - Get initial data","Other error: "+[a.type,a.code].join("/")))})}function s(){f.trackEvent("Follow","AuthDialog","Show");var a=400,b=700,c=screen.width/2-a/2,d=screen.height/2-b/2;F=window.open("http://web.archive.org/web/20131015173332/https://www.spotify.com/service-login?client_id=Spotify&redirect_uri=https%3A%2F%2Fembed.spotify.com%2Fcallback%2F","Spotify","menubar=no,location=no,resizable=no,scrollbars=no,status=no, width="+a+", height="+b+", top="+d+", left="+c)}function t(a){f.init(),M=a,h(),p()}function u(){f.trackEvent("Follow","API call","Renewing token"),O=!0;var a=document.createElement("iframe");a.setAttribute("src","http://web.archive.org/web/20131015173332/https://www.spotify.com/us/service-login/check-login/?client_id=Spotify&redirect_uri=https%3A%2F%2Fembed.spotify.com%2Fcallback%2F"),a.frameBorder=0,a.width="0px",a.height="0px",a.style.display="hidden",document.body.appendChild(a)}function v(){null!==F?(F.close(),F=null,e.executePending()):O&&r()}var w=a(f),x=document.querySelector(".widget"),y=x.querySelector(".bt-text"),z=x.querySelector("button"),A=x.querySelector(".count"),B=x.querySelector(".count .count-num.front"),C=x.querySelector(".count .count-num.back"),D=x.querySelector("h1"),E=!1,F=null,G=function(){var a="flip",b=500;g.removeClass(x,"can-unfollow"),g.addClass(x,"following"),y.innerHTML=c.following,z.setAttribute("title",c["unfollow-tooltip"]),o(!0);var d=function(){var b=N+1;i(b),g.removeClass(A,a),g.removeEventListener(A,e,f,!1)},e=H();if(null!==e){B&&C&&(C.style.width=B.offsetWidth+"px");var f=function(){setTimeout(d,b)};A&&(g.addEventListener(A,e,f,!1),g.addClass(A,a))}else d()},H=function(){var a,b=document.createElement("fakeelement"),c={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},d=null;for(a in c)if(void 0!==b.style[a]){d=c[a];break}return H=function(){return d},H()},I=function(){g.removeClass(x,"can-unfollow"),g.removeClass(x,"following"),y.innerHTML=c.follow,z.setAttribute("title",c["follow-tooltip"]),i(N),o(!1)},J=function(a,b){var c=n();G(),w.follow({oauth_token:d.readToken(),type:M.type,id:M.id},function(){f.trackEvent("Follow","Follow",[M.type,M.id].join("/")),a()},function(a){c||I(),"401"===a.code?f.trackEvent("Follow","API call - Follow","Token expired"):f.trackEvent("Follow","API call - Follow","Other error: "+[a.type,a.code].join("/")),d.emptyToken(),b()})},K=function(a,b){var c=n();I(),w.unfollow({oauth_token:d.readToken(),type:M.type,id:M.id},function(){f.trackEvent("Follow","Unfollow",[M.type,M.id].join("/")),a()},function(a){c&&G(),"401"===a.code?f.trackEvent("Follow","API call - Unfollow","Token expired"):f.trackEvent("Follow","API call - Unfollow","Other error: "+[a.type,a.code].join("/")),d.emptyToken(),b()})},L=function(a){this.execute=function(b){var c=d.readToken();c?a(function(){b()},function(){s()}):s()}};g.addEventListener(z,"mouseover",function(){g.containsClass(x,"can-unfollow")&&(y.innerHTML=c.unfollow)},!1),g.addEventListener(z,"mouseout",function(a){a=a||window.event;var b=window.event?a.srcElement:a.target,d=a.relatedTarget?a.relatedTarget:a.toElement;if(!d||"BUTTON"!==d.nodeName){for(;d!==b&&null!==d&&"BODY"!==d.nodeName;)d=d.parentNode;d!==b&&n()&&(y.innerHTML=c.following,g.containsClass(x,"can-unfollow")||g.addClass(x,"can-unfollow"))}},!1);var M,N,O=!1;return{init:t,closeAuthDialog:v}}(followApi,formatter,lang,oauth,commandExecutor,analytics,utils),SP.AuthDialog=function(){function a(a){a?(analytics.trackEvent("Follow","AuthDialog","Valid token returned"),oauth.storeToken(a)):(analytics.trackEvent("Follow","AuthDialog","Empty token returned"),oauth.emptyToken()),SP.FollowButton.closeAuthDialog()}function b(a){"wrong_authentication"!==a&&(console.error(a),analytics.trackEvent("Follow","AuthDialog","Error "+a)),SP.FollowButton.closeAuthDialog()}return{reportError:b,setOAuthToken:a}}();

}
/*
     FILE ARCHIVED ON 17:33:32 Oct 15, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:29:29 Jan 12, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 104.388 (3)
  PetaboxLoader3.datanode: 120.741 (4)
  CDXLines.iter: 23.112 (3)
  RedisCDXSource: 0.764
  exclusion.robots: 0.149
  load_resource: 131.193
  esindex: 0.01
  PetaboxLoader3.resolve: 85.784
  exclusion.robots.policy: 0.14
  captures_list: 131.105
*/