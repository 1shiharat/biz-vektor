function getCookieVal(a){var b=document.cookie.indexOf(";",a);return-1==b&&(b=document.cookie.length),unescape(document.cookie.substring(a,b))}function GetCookie(a){for(var b=a+"=",c=b.length,d=document.cookie.length,e=0;d>e;){var f=e+c;if(document.cookie.substring(e,f)==b)return getCookieVal(f);if(e=document.cookie.indexOf(" ",e)+1,0==e)break}return null}function SetCookie(a,b){var c=SetCookie.arguments,d=SetCookie.arguments.length,e=d>2?c[2]:null,f=d>3?c[3]:null,g=d>4?c[4]:null,h=d>5?c[5]:!1;document.cookie=a+"="+escape(b)+(null==e?"":"; expires="+e.toGMTString())+(null==f?"":"; path="+f)+(null==g?"":"; domain="+g)+(1==h?"; secure":"")}function eraseTA(a){a.value==a.defaultValue&&(a.value="")}function highlightActiveInput(){currentlyActiveInputRef&&(currentlyActiveInputRef.className=currentlyActiveInputClassName),currentlyActiveInputClassName=this.className,this.className="inputHighlighted",currentlyActiveInputRef=this}function blurActiveInput(){this.className=currentlyActiveInputClassName}function m_win(a,b,c,d){var e="location=no, menubar=no, status=yes, scrollbars=yes, resizable=yes, toolbar=no";c&&(window.screen.width>c?e+=", left="+(window.screen.width-c)/2:c=window.screen.width,e+=", width="+c),d&&(window.screen.height>d?e+=", top="+(window.screen.height-d)/2:d=window.screen.height,e+=", height="+d),window.open(a,b,e)}function resVektorRun(){resThumbTxtFix();var a=jQuery(window).width();breakPoint2>=a&&"mode_mobile"!=mode&&(showHide_mode_mobile(),changeImageFile_mode_mobile(),resImgTxtChange_mode_mobile(),dropNavReset(),dropNavFunctions(),dropNavSubControlLinkDelete(),mode="mode_mobile"),a>breakPoint2&&breakPoint1>a&&"mode_tab"!=mode&&(showHide_mode_tab(),changeImageFile_mode_tab(),resImgTxtChange_mode_tab(),dropNavReset(),dropNavFunctions(),dropNavSubControlLinkDelete(),mode="mode_tab"),a>=breakPoint1&&"mode_full"!=mode&&(showHide_mode_full(),changeImageFile_mode_full(),resImgTxtChange_mode_full(),dropNavReset(),dropNavSubControlLinkRedo(),mode="mode_full")}function showHide_mode_full(){jQuery(".show-tab-full,.show-full-only").each(function(){jQuery(this).show()}),jQuery(".show-mobile-only,.show-mobile-tab,.show-tab-only").each(function(){jQuery(this).hide()})}function showHide_mode_tab(){jQuery(".show-mobile-tab,.show-tab-only,.show-tab-full").each(function(){jQuery(this).show()}),jQuery(".show-mobile-only,.show-full-only").each(function(){jQuery(this).hide()})}function showHide_mode_mobile(){jQuery(".show-mobile-only,.show-mobile-tab").each(function(){jQuery(this).show()}),jQuery(".show-tab-only,.show-tab-full,.show-full-only").each(function(){jQuery(this).hide()})}function changeImageFile_mode_mobile(){mobileImageChange()}function changeImageFile_mode_tab(){mobileImageBack()}function changeImageFile_mode_full(){mobileImageBack()}function mobileImageChange(){jQuery("img.resImage-mobile").each(function(){if(1!=jQuery(this).hasClass("resImgMobile")){var a=jQuery(this).attr("src").replace(/(\.[a-zA-Z]+)$/,"_mobile$1");jQuery(this).attr("src",a).addClass("resImgMobile")}})}function mobileImageBack(){jQuery("img.resImage-mobile").each(function(){if(jQuery(this).hasClass("resImgMobile")){var a=jQuery(this).attr("src").replace(/_mobile(\.[a-zA-Z]+)$/,"$1");jQuery(this).attr("src",a).removeClass("resImgMobile")}})}function dropNavFunctions(){jQuery(".dropNavControl").each(function(){var a=jQuery(this).next();jQuery(this).click(function(){if(jQuery(this).hasClass("dropNavOpen"))jQuery(this).removeClass("dropNavOpen"),a.animate({height:"0"});else{jQuery(this).removeClass("dropNavOpen"),a.css({position:"absolute",opacity:"0",height:"auto"});var b=a.height();a.css({position:"relative",opacity:"1",height:"0",display:"block"}),a.animate({height:b},function(){jQuery(this).css({height:"auto"})}),jQuery(this).addClass("dropNavOpen")}})})}function dropNavReset(){jQuery("a.dropNavControl.dropNavSubControl").each(function(){jQuery(this).next().hide()})}function dropNavSubControlLinkDelete(){jQuery("a.dropNavControl.dropNavSubControl").each(function(){if(jQuery(this).hasClass("subControlMode")!==!0){jQuery(this).addClass("subControlMode");var a=jQuery(this).attr("href");jQuery(this).attr("href","#").before('<span class="subControlLinkUrl">'+a+"</span>"),jQuery(this).prev().hide()}})}function dropNavSubControlLinkRedo(){jQuery("span.subControlLinkUrl").each(function(){var a=jQuery(this).html();jQuery(this).next().attr("href",a).removeClass("subControlMode"),jQuery(this).remove()})}function resImgTxtChange_mode_mobile(){resImgTxtChange_mobile_only(),resImgTxtChange_mobile_tab()}function resImgTxtChange_mode_tab(){resImgTxtChange_mobile_tab(),resImgTxtBack_mobile_only()}function resImgTxtChange_mode_full(){resImgTxtBack_mobile_tab()}function resImgTxtChange_mobile_only(){jQuery("img.resImgTxtChange-mobile-only").each(function(){var a=jQuery(this).prev().hasClass("resTxtChange-mobile-only");if(a===!1){var b='<span class="resTxtChange-mobile-only">'+jQuery(this).attr("alt")+"</span>";jQuery(this).before(b),jQuery(this).hide()}})}function resImgTxtChange_mobile_tab(){jQuery("img.resImgTxtChange-mobile-tab").each(function(){var a=jQuery(this).prev().hasClass("resTxtChange-mobile-tab");if(a===!1){var b='<span class="resTxtChange-mobile-tab">'+jQuery(this).attr("alt")+"</span>";jQuery(this).before(b),jQuery(this).hide()}})}function resImgTxtBack_mobile_tab(){jQuery("span.resTxtChange-mobile-tab").each(function(){jQuery(this).next().show(),jQuery(this).remove()})}function resImgTxtBack_mobile_only(){jQuery("span.resTxtChange-mobile-only").each(function(){jQuery(this).next().show(),jQuery(this).remove()})}function resThumbTxtFix(){jQuery(".ttBox").each(function(){var a=jQuery(this).width(),b=jQuery(this).children(".ttBoxThumb").width();txtWidth=a-b-15,jQuery(this).children(".ttBoxTxt").css({width:txtWidth})})}function showHide(a){if(document.getElementById(a)){var b="#"+a;document.getElementById(a).className=jQuery(b).hasClass("itemOpen")?"itemClose":"itemOpen"}}var currentlyActiveInputRef=!1,currentlyActiveInputClassName=!1,initInputHighlightScript=window.onload;window.onload=function(){var a=["INPUT","TEXTAREA"];for(tagCounter=0;tagCounter<a.length;tagCounter++)for(var b=document.getElementsByTagName(a[tagCounter]),c=0;c<b.length;c++)b[c].className&&"doNotHighlightThisInput"==b[c].className||("textarea"==b[c].tagName.toLowerCase()||"input"==b[c].tagName.toLowerCase()&&"text"==b[c].type.toLowerCase())&&(b[c].onfocus=highlightActiveInput,b[c].onblur=blurActiveInput);initInputHighlightScript&&initInputHighlightScript()};var initRollovers=window.onload;window.onload=function(){if(document.getElementById){var a,b=new Array,c=function(c){for(var d=0;d<c.length;d++)if("imgover"==c[d].className){var e=c[d].getAttribute("src"),f=e.substring(e.lastIndexOf("."),e.length),g=e.replace(f,"_on"+f);c[d].setAttribute("hsrc",g),b[d]=new Image,b[d].src=g,c[d].onmouseover=function(){a=this.getAttribute("src"),this.setAttribute("src",this.getAttribute("hsrc"))},c[d].onmouseout=function(){a||(a=this.getAttribute("src").replace("_on"+f,f)),this.setAttribute("src",a)}}},d=document.getElementsByTagName("img");c(d);var e=document.getElementsByTagName("input");c(e),initRollovers&&initRollovers()}},jQuery(document).ready(function(){jQuery("a[href*=#]").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=jQuery(this.hash);if(a=a.length&&a||jQuery("[name="+this.hash.slice(1)+"]"),a.length){var b=a.offset().top;return jQuery("html,body").animate({scrollTop:b},1200,"quart"),!1}}})}),jQuery.easing.quart=function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},jQuery(document).ready(function(){jQuery("body :first-child").addClass("firstChild"),jQuery("body :last-child").addClass("lastChild"),jQuery("body li:nth-child(odd)").addClass("odd"),jQuery("body li:nth-child(even)").addClass("even")}),jQuery(document).ready(function(){jQuery(".topPrTit").flatHeights(),jQuery(".topPrDescription").flatHeights(),jQuery(".child_page_block").flatHeights(),jQuery(".child_page_block p").flatHeights(),jQuery("#content .child_page_block h4 a").flatHeights()}),jQuery.changeLetterSize={handlers:[],interval:1e3,currentSize:0},function(a){var b=a.changeLetterSize,c=a("<ins>M</ins>").css({display:"block",visibility:"hidden",position:"absolute",padding:"0",top:"0"}),d=function(){c.appendTo("body");var a=c[0].offsetHeight;return c.remove(),b.currentSize==a?!1:(b.currentSize=a,!0)};a(d);var e=function(){d()&&a.each(b.handlers,function(a,b){b()})};b.addHandler=function(a){b.handlers.push(a),1==b.handlers.length&&setInterval(e,b.interval)}}(jQuery),function(a){var b=[],c=function(a){var b=0;a.each(function(){var a=this.offsetHeight;a>b&&(b=a)}),a.css("height",b+"px")};jQuery.fn.flatHeights=function(){return this.length>1&&(c(this),b.push(this)),this};var d=function(){a.each(b,function(){this.height("auto"),c(this)})};a.changeLetterSize.addHandler(d),a(window).resize(d)}(jQuery),new function(){function a(){document.getElementsByTagName("body")[0].clientHeight;document.getElementById(d).style.top="0px";var a=document.getElementById(d).offsetTop,b=document.getElementById(d).offsetHeight;if(window.innerHeight)var c=window.innerHeight;else if(document.documentElement&&0!=document.documentElement.clientHeight)var c=document.documentElement.clientHeight;c>a+b&&(document.getElementById(d).style.position="relative",document.getElementById(d).style.top=c-b-a-1+"px")}function b(a){function b(){e!=c.offsetHeight&&(a(),e=c.offsetHeight)}var c=document.createElement("div"),d=document.createTextNode("S");c.appendChild(d),c.style.visibility="hidden",c.style.position="absolute",c.style.top="0",document.body.appendChild(c);var e=c.offsetHeight;setInterval(b,1e3)}function c(a,b,c){try{a.addEventListener(b,c,!1)}catch(d){a.attachEvent("on"+b,c)}}var d="footerSection";c(window,"load",a),c(window,"load",function(){b(a)}),c(window,"resize",a)},jQuery("#btn").on("click",function(){jQuery(this).next().next().slideToggle(),jQuery(this).toggleClass("active")}),function(a){a.flexslider=function(b,c){var d=a(b);a.data(b,"flexslider",d),d.init=function(){function e(a){if(!d.animating&&(39==a.keyCode||37==a.keyCode)){if(39==a.keyCode)var b=d.getTarget("next");else if(37==a.keyCode)var b=d.getTarget("prev");d.canAdvance(b)&&d.flexAnimate(b,d.vars.pauseOnAction)}}function f(a){d.animating?a.preventDefault():1==a.touches.length&&(d.pause(),s=d.vertical?d.height():d.width(),u=Number(new Date),r=d.vertical?(d.currentSlide+d.cloneOffset)*d.height():(d.currentSlide+d.cloneOffset)*d.width(),p=d.vertical?a.touches[0].pageY:a.touches[0].pageX,q=d.vertical?a.touches[0].pageX:a.touches[0].pageY,d.setTransition(0),this.addEventListener("touchmove",g,!1),this.addEventListener("touchend",h,!1))}function g(a){t=d.vertical?p-a.touches[0].pageY:p-a.touches[0].pageX,v=d.vertical?Math.abs(t)<Math.abs(a.touches[0].pageX-q):Math.abs(t)<Math.abs(a.touches[0].pageY-q),v||(a.preventDefault(),"slide"==d.vars.animation&&d.transitions&&(d.vars.animationLoop||(t/=0==d.currentSlide&&0>t||d.currentSlide==d.count-1&&t>0?Math.abs(t)/s+2:1),d.args[d.prop]=d.vertical?"translate3d(0,"+(-r-t)+"px,0)":"translate3d("+(-r-t)+"px,0,0)",d.container.css(d.args)))}function h(){if(d.animating=!1,d.animatingTo==d.currentSlide&&!v&&null!=t){var a=d.getTarget(t>0?"next":"prev");d.canAdvance(a)&&Number(new Date)-u<550&&Math.abs(t)>20||Math.abs(t)>s/2?d.flexAnimate(a,d.vars.pauseOnAction):d.flexAnimate(d.currentSlide,d.vars.pauseOnAction)}this.removeEventListener("touchmove",g,!1),this.removeEventListener("touchend",h,!1),p=null,q=null,t=null,r=null}if(d.vars=a.extend({},a.flexslider.defaults,c),a.data(b,"flexsliderInit",!0),d.container=a(".slides",d).first(),d.slides=a(".slides:first > li",d),d.count=d.slides.length,d.animating=!1,d.currentSlide=d.vars.slideToStart,d.animatingTo=d.currentSlide,d.atEnd=0==d.currentSlide?!0:!1,d.eventType="ontouchstart"in document.documentElement?"touchstart":"click",d.cloneCount=0,d.cloneOffset=0,d.manualPause=!1,d.vertical="vertical"==d.vars.slideDirection,d.prop=d.vertical?"top":"marginLeft",d.args={},d.transitions="webkitTransition"in document.body.style,d.transitions&&(d.prop="-webkit-transform"),""!=d.vars.controlsContainer&&(d.controlsContainer=a(d.vars.controlsContainer).eq(a(".slides").index(d.container)),d.containerExists=d.controlsContainer.length>0),""!=d.vars.manualControls&&(d.manualControls=a(d.vars.manualControls,d.containerExists?d.controlsContainer:d),d.manualExists=d.manualControls.length>0),d.vars.randomize&&(d.slides.sort(function(){return Math.round(Math.random())-.5}),d.container.empty().append(d.slides)),"slide"==d.vars.animation.toLowerCase()){d.transitions&&d.setTransition(0),d.css({overflow:"hidden"}),d.vars.animationLoop&&(d.cloneCount=2,d.cloneOffset=1,d.container.append(d.slides.filter(":first").clone().addClass("clone")).prepend(d.slides.filter(":last").clone().addClass("clone"))),d.newSlides=a(".slides:first > li",d);var i=-1*(d.currentSlide+d.cloneOffset);d.vertical?(d.newSlides.css({display:"block",width:"100%","float":"left"}),d.container.height(200*(d.count+d.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){d.css({position:"relative"}).height(d.slides.filter(":first").height()),d.args[d.prop]=d.transitions?"translate3d(0,"+i*d.height()+"px,0)":i*d.height()+"px",d.container.css(d.args)},100)):(d.args[d.prop]=d.transitions?"translate3d("+i*d.width()+"px,0,0)":i*d.width()+"px",d.container.width(200*(d.count+d.cloneCount)+"%").css(d.args),setTimeout(function(){d.newSlides.width(d.width()).css({"float":"left",display:"block"})},100))}else d.transitions=!1,d.slides.css({width:"100%","float":"left",marginRight:"-100%"}).eq(d.currentSlide).fadeIn(d.vars.animationDuration);if(d.vars.controlNav){if(d.manualExists)d.controlNav=d.manualControls;else{for(var j=a('<ol class="flex-control-nav"></ol>'),k=1,l=0;l<d.count;l++)j.append("<li><a>"+k+"</a></li>"),k++;d.containerExists?(a(d.controlsContainer).append(j),d.controlNav=a(".flex-control-nav li a",d.controlsContainer)):(d.append(j),d.controlNav=a(".flex-control-nav li a",d))}d.controlNav.eq(d.currentSlide).addClass("active"),d.controlNav.bind(d.eventType,function(b){b.preventDefault(),a(this).hasClass("active")||(d.direction=d.controlNav.index(a(this))>d.currentSlide?"next":"prev",d.flexAnimate(d.controlNav.index(a(this)),d.vars.pauseOnAction))})}if(d.vars.directionNav){var m=a('<ul class="flex-direction-nav"><li><a class="prev" href="#">'+d.vars.prevText+'</a></li><li><a class="next" href="#">'+d.vars.nextText+"</a></li></ul>");d.containerExists?(a(d.controlsContainer).append(m),d.directionNav=a(".flex-direction-nav li a",d.controlsContainer)):(d.append(m),d.directionNav=a(".flex-direction-nav li a",d)),d.vars.animationLoop||(0==d.currentSlide?d.directionNav.filter(".prev").addClass("disabled"):d.currentSlide==d.count-1&&d.directionNav.filter(".next").addClass("disabled")),d.directionNav.bind(d.eventType,function(b){b.preventDefault();var c=d.getTarget(a(this).hasClass("next")?"next":"prev");d.canAdvance(c)&&d.flexAnimate(c,d.vars.pauseOnAction)})}if(d.vars.keyboardNav&&1==a("ul.slides").length&&a(document).bind("keyup",e),d.vars.mousewheel&&(d.mousewheelEvent=/Firefox/i.test(navigator.userAgent)?"DOMMouseScroll":"mousewheel",d.bind(d.mousewheelEvent,function(a){a.preventDefault(),a=a?a:window.event;var b=a.detail?-1*a.detail:a.originalEvent.wheelDelta/40,c=d.getTarget(0>b?"next":"prev");d.canAdvance(c)&&d.flexAnimate(c,d.vars.pauseOnAction)})),d.vars.slideshow&&(d.vars.pauseOnHover&&d.vars.slideshow&&d.hover(function(){d.pause()},function(){d.manualPause||d.resume()}),d.animatedSlides=setInterval(d.animateSlides,d.vars.slideshowSpeed)),d.vars.pausePlay){var n=a('<div class="flex-pauseplay"><span></span></div>');d.containerExists?(d.controlsContainer.append(n),d.pausePlay=a(".flex-pauseplay span",d.controlsContainer)):(d.append(n),d.pausePlay=a(".flex-pauseplay span",d));var o=d.vars.slideshow?"pause":"play";d.pausePlay.addClass(o).text("pause"==o?d.vars.pauseText:d.vars.playText),d.pausePlay.bind(d.eventType,function(b){b.preventDefault(),a(this).hasClass("pause")?(d.pause(),d.manualPause=!0):(d.resume(),d.manualPause=!1)})}if("ontouchstart"in document.documentElement){var p,q,r,s,t,u,v=!1;d.each(function(){"ontouchstart"in document.documentElement&&this.addEventListener("touchstart",f,!1)})}"slide"==d.vars.animation.toLowerCase()&&a(window).resize(function(){!d.animating&&d.is(":visible")&&(d.vertical?(d.height(d.slides.filter(":first").height()),d.args[d.prop]=-1*(d.currentSlide+d.cloneOffset)*d.slides.filter(":first").height()+"px",d.transitions&&(d.setTransition(0),d.args[d.prop]=d.vertical?"translate3d(0,"+d.args[d.prop]+",0)":"translate3d("+d.args[d.prop]+",0,0)"),d.container.css(d.args)):(d.newSlides.width(d.width()),d.args[d.prop]=-1*(d.currentSlide+d.cloneOffset)*d.width()+"px",d.transitions&&(d.setTransition(0),d.args[d.prop]=d.vertical?"translate3d(0,"+d.args[d.prop]+",0)":"translate3d("+d.args[d.prop]+",0,0)"),d.container.css(d.args)))}),d.vars.start(d)},d.flexAnimate=function(a,b){if(!d.animating&&d.is(":visible"))if(d.animating=!0,d.animatingTo=a,d.vars.before(d),b&&d.pause(),d.vars.controlNav&&d.controlNav.removeClass("active").eq(a).addClass("active"),d.atEnd=0==a||a==d.count-1?!0:!1,!d.vars.animationLoop&&d.vars.directionNav&&(0==a?d.directionNav.removeClass("disabled").filter(".prev").addClass("disabled"):a==d.count-1?d.directionNav.removeClass("disabled").filter(".next").addClass("disabled"):d.directionNav.removeClass("disabled")),d.vars.animationLoop||a!=d.count-1||(d.pause(),d.vars.end(d)),"slide"==d.vars.animation.toLowerCase()){var c=d.vertical?d.slides.filter(":first").height():d.slides.filter(":first").width();d.slideString=0==d.currentSlide&&a==d.count-1&&d.vars.animationLoop&&"next"!=d.direction?"0px":d.currentSlide==d.count-1&&0==a&&d.vars.animationLoop&&"prev"!=d.direction?-1*(d.count+1)*c+"px":-1*(a+d.cloneOffset)*c+"px",d.args[d.prop]=d.slideString,d.transitions?(d.setTransition(d.vars.animationDuration),d.args[d.prop]=d.vertical?"translate3d(0,"+d.slideString+",0)":"translate3d("+d.slideString+",0,0)",d.container.css(d.args).one("webkitTransitionEnd transitionend",function(){d.wrapup(c)})):d.container.animate(d.args,d.vars.animationDuration,function(){d.wrapup(c)})}else d.slides.eq(d.currentSlide).fadeOut(d.vars.animationDuration),d.slides.eq(a).fadeIn(d.vars.animationDuration,function(){d.wrapup()})},d.wrapup=function(a){"slide"==d.vars.animation&&(0==d.currentSlide&&d.animatingTo==d.count-1&&d.vars.animationLoop?(d.args[d.prop]=-1*d.count*a+"px",d.transitions&&(d.setTransition(0),d.args[d.prop]=d.vertical?"translate3d(0,"+d.args[d.prop]+",0)":"translate3d("+d.args[d.prop]+",0,0)"),d.container.css(d.args)):d.currentSlide==d.count-1&&0==d.animatingTo&&d.vars.animationLoop&&(d.args[d.prop]=-1*a+"px",d.transitions&&(d.setTransition(0),d.args[d.prop]=d.vertical?"translate3d(0,"+d.args[d.prop]+",0)":"translate3d("+d.args[d.prop]+",0,0)"),d.container.css(d.args))),d.animating=!1,d.currentSlide=d.animatingTo,d.vars.after(d)},d.animateSlides=function(){d.animating||d.flexAnimate(d.getTarget("next"))},d.pause=function(){clearInterval(d.animatedSlides),d.vars.pausePlay&&d.pausePlay.removeClass("pause").addClass("play").text(d.vars.playText)},d.resume=function(){d.animatedSlides=setInterval(d.animateSlides,d.vars.slideshowSpeed),d.vars.pausePlay&&d.pausePlay.removeClass("play").addClass("pause").text(d.vars.pauseText)},d.canAdvance=function(a){return!d.vars.animationLoop&&d.atEnd?0==d.currentSlide&&a==d.count-1&&"next"!=d.direction?!1:d.currentSlide==d.count-1&&0==a&&"next"==d.direction?!1:!0:!0},d.getTarget=function(a){return d.direction=a,"next"==a?d.currentSlide==d.count-1?0:d.currentSlide+1:0==d.currentSlide?d.count-1:d.currentSlide-1},d.setTransition=function(a){d.container.css({"-webkit-transition-duration":a/1e3+"s"})},d.init()},a.flexslider.defaults={animation:"fade",slideDirection:"horizontal",slideshow:!0,slideshowSpeed:5e3,animationDuration:600,directionNav:!0,controlNav:!0,keyboardNav:!0,mousewheel:!1,prevText:"Previous",nextText:"Next",pausePlay:!1,pauseText:"Pause",playText:"Play",randomize:!1,slideToStart:0,animationLoop:!0,pauseOnAction:!0,pauseOnHover:!1,controlsContainer:"",manualControls:"",start:function(){},before:function(){},after:function(){},end:function(){}},a.fn.flexslider=function(b){return this.each(function(){1==a(this).find(".slides > li").length?a(this).find(".slides > li").fadeIn(400):1!=a(this).data("flexsliderInit")&&new a.flexslider(this,b)})}}(jQuery),jQuery(".flexslider").flexslider();var breakPoint1=950,breakPoint2=655;jQuery(function(){resVektorRun()}),jQuery(document).ready(function(){resVektorRun()}),jQuery(window).resize(function(){resVektorRun()});var mode;jQuery(document).ready(function(){jQuery("#back-top").hide(),jQuery(function(){jQuery(window).scroll(function(){jQuery(this).scrollTop()>100?jQuery("#back-top").fadeIn():jQuery("#back-top").stop().fadeOut()}),jQuery("#back-top a").click(function(){return jQuery("body,html").animate({scrollTop:0},800),!1})})}),function(a){"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],a):a(jQuery)}(function(a){function b(a){return a}function c(a){return decodeURIComponent(a.replace(e," "))}function d(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return f.json?JSON.parse(a):a}catch(b){}}var e=/\+/g,f=a.cookie=function(e,g,h){if(void 0!==g){if(h=a.extend({},f.defaults,h),"number"==typeof h.expires){var i=h.expires,j=h.expires=new Date;j.setDate(j.getDate()+i)}return g=f.json?JSON.stringify(g):String(g),document.cookie=[encodeURIComponent(e),"=",f.raw?g:encodeURIComponent(g),h.expires?"; expires="+h.expires.toUTCString():"",h.path?"; path="+h.path:"",h.domain?"; domain="+h.domain:"",h.secure?"; secure":""].join("")}for(var k=f.raw?b:c,l=document.cookie.split("; "),m=e?void 0:{},n=0,o=l.length;o>n;n++){var p=l[n].split("="),q=k(p.shift()),r=k(p.join("="));if(e&&e===q){m=d(r);break}e||(m[q]=d(r))}return m};f.defaults={},a.removeCookie=function(b,c){return void 0!==a.cookie(b)?(a.cookie(b,"",a.extend(c,{expires:-1})),!0):!1}});