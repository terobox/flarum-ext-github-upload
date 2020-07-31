module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e,n){"use strict";function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return o}))},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/TextEditor"]},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},function(t,e){t.exports=flarum.core.compat["components/Alert"]},,,function(t,e,n){"use strict";n.r(e);var o=n(2),i=n(0),r=n.n(i),a=n(3),s=n.n(a),u=n(1),l=n(4),p=n.n(l),c=n(5),f=n.n(c),d=n(6),h=n.n(d),b=function(t){function e(){return t.apply(this,arguments)||this}Object(u.a)(e,t);var n=e.prototype;return n.init=function(){this.textAreaObj=null},n.view=function(){return m("div",{className:"Button hasIcon irony-github-upload-button Button--icon"},[f()("fas fa-cloud-upload-alt",{className:"Button-icon file-icon"}),m("span",{className:"Button-label"},r.a.translator.trans("flarum-ext-github-upload.forum.buttons.attach")),m("form#irony-github-upload-form",[m("input",{type:"file",multiple:!0,onchange:this.process.bind(this)})])])},n.process=function(t){var e=$(t.target)[0].files;$(".file-icon").removeClass("fas fa-cloud-upload-alt"),$(".file-icon").addClass("fas fa-spinner fa-spin"),this.uploadFiles(e,this.success,this.failure)},n.uploadFiles=function(t,e,n){for(var o=new FormData,i=0;i<t.length;i++)o.append("files[]",t[i]);return r.a.request({method:"POST",url:r.a.forum.attribute("apiUrl")+"/irony/github/upload",serialize:function(t){return t},data:o}).then(this.success.bind(this),this.failure.bind(this))},n.alertNotice=function(t,e){var n;r.a.alerts.show(n=new h.a({type:t,children:e})),setTimeout((function(){r.a.alerts.dismiss(n)}),3e3)},n.failure=function(t){$(".file-icon").removeClass("fas fa-spinner fa-spin"),$(".file-icon").addClass("fas fa-cloud-upload-alt"),this.alertNotice("error",t)},n.success=function(t){var e=this;$(".file-icon").removeClass("fas fa-spinner fa-spin"),$(".file-icon").addClass("fas fa-cloud-upload-alt"),t.forEach((function(t){e.textAreaObj.insertAtCursor(t+"\n")})),setTimeout((function(){document.getElementById("irony-github-upload-form").reset()}),1e3)},e}(p.a),g=function(){function t(t){this.initialized||(this.uploadButton=t,this.textarea=$("#composer .Composer"),$(this.textarea).on("dragover",this.in.bind(this)),$(this.textarea).on("dragleave",this.out.bind(this)),$(this.textarea).on("dragend",this.out.bind(this)),$(this.textarea).on("drop",this.dropping.bind(this)),this.isDropping=this.over=!1,this.initialized=!0)}var e=t.prototype;return e.in=function(t){t.preventDefault(),this.over||(this.textarea.toggleClass("irony-github-upload-dragging",!0),this.over=!0)},e.out=function(t){t.preventDefault(),this.over&&(this.textarea.toggleClass("irony-github-upload-dragging",!1),this.over=!1)},e.dropping=function(t){var e=this;t.preventDefault(),this.isDropping||(this.isDropping=!0,this.textarea.addClass("irony-github-upload-dropping"),m.redraw(),this.uploadButton.uploadFiles(t.originalEvent.dataTransfer.files).then((function(){e.textarea.removeClass("irony-github-upload-dropping"),e.isDropping=!1})))},t}(),v=function(){function t(t){this.initialized||(this.uploadButton=t,document.addEventListener("paste",this.paste.bind(this)))}return t.prototype.paste=function(t){if(t.clipboardData&&t.clipboardData.items){for(var e=t.clipboardData.items,n=[],o=0;o<e.length;o++)-1!==e[o].type.indexOf("image")&&n.push(e[o].getAsFile());n.length>0&&(m.redraw(),this.uploadButton.uploadFiles(n))}},t}();r.a.initializers.add("irony-github-upload",(function(t){var e,n,i;Object(o.extend)(s.a.prototype,"controlItems",(function(n){t.forum.attribute("canUploadToGithub")&&((e=new b).textAreaObj=this,n.add("irony-github-upload",e,0))})),Object(o.extend)(s.a.prototype,"configTextarea",(function(){t.forum.attribute("canUploadToGithub")&&(n||(n=new g(e)),i||(i=new v(e)))}))}))}]);
//# sourceMappingURL=forum.js.map