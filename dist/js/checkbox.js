/*! Formstone v0.0.1 [checkbox.js] 2014-12-23 | MIT License | formstone.it */

!function(a,b){"use strict";function c(b){var c=this.closest("label"),d=c.length?c.eq(0):a("label[for="+this.attr("id")+"]"),e=(this.attr("type"),[m.base,b.customClass].join(" ")),f='<div class="'+m.marker+'"></div>';d.length?d.addClass(m.label).wrap('<div class="'+e+'"></div>').before(f):this.before('<div class=" '+e+'">'+f+"</div>"),b.$checkbox=d.length?d.parents(l.base):this.prev(l.base),b.$handle=b.$checkbox.find(l.handle),b.$labels=b.$checkbox.find(l.label),this.is(":checked")&&b.$checkbox.addClass(m.checked),this.is(":disabled")&&b.$checkbox.addClass(m.disabled),this.on(n.focus,b,h).on(n.blur,b,i).on(n.change,b,j).on(n.click,b,g),b.$checkbox.touch({tap:!0}).on(n.tap,b,g)}function d(){}function e(a){this.prop("disabled",!1),a.$checkbox.removeClass(m.disabled)}function f(a){this.prop("disabled",!0),a.$checkbox.addClass(m.disabled)}function g(b){var c=b.data;a(b.target).is(c.$input)||(b.preventDefault(),c.$el.trigger("click"))}function h(){}function i(){}function j(){}{var k=b.Plugin("checkbox",{widget:!0,defaults:{customClass:"",toggle:!1,labels:{on:"ON",off:"OFF"}},classes:["label","marker","checked","disabled"],methods:{_construct:c,_destruct:d,enable:e,disable:f},events:{tap:"tap"}}),l=k.classes,m=l.raw,n=k.events;k.functions}}(jQuery,Formstone);