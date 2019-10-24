function dependOn(){"use strict";return[require("communicate"),require("util"),require("common"),require("proxy"),require("analytics")]}var def;require=function(e){"use strict";return e},def=window.define?window.define:function(e,n){"use strict";return n.apply(null,[{ajax:$.ajax.bind($)}])};var exports=acom_analytics={};def(dependOn(),function(e,i,o,s,u){"use strict";var n,a,r=null;function p(e){return e.replace(/\/$/,"").split("/").splice(-1)[0].replace(/\?\S*/,"")}for(n in a=function(){return e.getModule("session")},r||(r=new function(){this.LOG=o.LOG,this.proxy=s.proxy.bind(this),this.ajaxRequest=function(e){var n=i.Deferred();return o.ajaxReady(!0).then(function(){a().newSession(null,!0,{filename:e.filename}),n.resolve()},this.proxy(function(){a().sign_in(e).then(function(){n.resolve()},function(){n.reject(),i.consoleLog("upload rejected")})})),n},this.sendIt=function(e,n){var r,t=i.newFormData();return r={name:n.filename,parent_id:o.settings.files_root,on_dup_name:"auto_rename",ignore_content_type:!0,source_url:n.url},t.append("metadata",JSON.stringify(r)),t.append("file",e,n.filename),i.ajax({url:o.settings.files_upload+"assets",type:"POST",processData:!1,data:t,contentType:!1,headers:o.GET_headers()}).then(function(e){return e.request=n,e},this.proxy(function(e){return s.REST_error(e,this),e}))},this.upload=function(t){return t.upload_promise=i.Deferred(),t.filename||(t.filename=p(t.url)),a().sessionRequest(t),this.ajaxRequest(t).then(this.proxy(function(){var r;if(u.event(u.e.UPLOAD_PROGRESS_SHOWN),0===t.url.indexOf("data"))throw new Error("Can't upload Data URIs (Yet)");(r=i.newXHR()).open("GET",t.url,!0),r.responseType="blob",r.onload=this.proxy(function(e){if(200===r.status){t.mime&&r.response.type!==t.mime&&(a().error({error:"Unexpected mime type",received:r.response.type,expected:t.mime,url:t.url,timestamp:(new Date).getTime()}),this.LOG("UnexpectedMimeType: "+r.response.type+" ExpectedMimeType"+t.mime),u.event(u.e.ERROR_WRONG_MIME_TYPE),t.upload_promise.reject(r));var n=i.newBlob([r.response]);this.sendIt(n,t).then(this.proxy(function(e){return i.consoleLogDir(e),t.upload_promise.resolve(e),e}),this.proxy(function(e){return t.upload_promise.reject(e),s.REST_error(e,this),e}))}}),r.send()})),t.upload_promise.promise()},this.uploadHTML=function(e,n){return n.upload_promise=i.Deferred(),n.filename||(n.filename=p(n.url)),n.filename=n.filename.replace(".pdf",".zip"),this.sendIt(e,n).then(this.proxy(function(e){return i.consoleLogDir(e),n.upload_promise.resolve(e),e})),n.upload_promise.promise()}},e.registerModule("upload",r)),r)r.hasOwnProperty(n)&&("function"==typeof r[n]?exports[n]=r[n].bind(r):exports[n]=r[n]);return r});