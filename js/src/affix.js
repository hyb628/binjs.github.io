"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};+function(t){function e(e){return this.each(function(){var i=t(this),f=i.data("bs.affix"),n="object"==(void 0===e?"undefined":_typeof(e))&&e;f||i.data("bs.affix",f=new o(this,n)),"string"==typeof e&&f[e]()})}var o=function e(o,i){this.options=t.extend({},e.DEFAULTS,i),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(o),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};o.VERSION="3.3.5",o.RESET="affix affix-top affix-bottom",o.DEFAULTS={offset:0,target:window},o.prototype.getState=function(t,e,o,i){var f=this.$target.scrollTop(),n=this.$element.offset(),s=this.$target.height();if(null!=o&&"top"==this.affixed)return f<o&&"top";if("bottom"==this.affixed)return null!=o?!(f+this.unpin<=n.top)&&"bottom":!(f+s<=t-i)&&"bottom";var a=null==this.affixed,h=a?f:n.top,r=a?s:e;return null!=o&&f<=o?"top":null!=i&&h+r>=t-i&&"bottom"},o.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(o.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},o.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},o.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=this.$element.height(),i=this.options.offset,f=i.top,n=i.bottom,s=Math.max(t(document).height(),t(document.body).height());"object"!=(void 0===i?"undefined":_typeof(i))&&(n=f=i),"function"==typeof f&&(f=i.top(this.$element)),"function"==typeof n&&(n=i.bottom(this.$element));var a=this.getState(s,e,f,n);if(this.affixed!=a){null!=this.unpin&&this.$element.css("top","");var h="affix"+(a?"-"+a:""),r=t.Event(h+".bs.affix");if(this.$element.trigger(r),r.isDefaultPrevented())return;this.affixed=a,this.unpin="bottom"==a?this.getPinnedOffset():null,this.$element.removeClass(o.RESET).addClass(h).trigger(h.replace("affix","affixed")+".bs.affix")}"bottom"==a&&this.$element.offset({top:s-e-n})}};var i=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=o,t.fn.affix.noConflict=function(){return t.fn.affix=i,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var o=t(this),i=o.data();i.offset=i.offset||{},null!=i.offsetBottom&&(i.offset.bottom=i.offsetBottom),null!=i.offsetTop&&(i.offset.top=i.offsetTop),e.call(o,i)})})}(jQuery);