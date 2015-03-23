document.addEventListener("DOMContentLoaded",function(){function a(){e.checked?(c.style.maxHeight=n,m.addClass("hidden"),k.addClass("rot45deg"),l.addClass("rot-45deg")):(c.style.maxHeight="0",m.removeClass("hidden"),k.removeClass("rot45deg"),l.removeClass("rot-45deg"))}function b(){f=window.innerHeight,g=window.innerWidth,g>=750?c.style.maxHeight=n:a()}!function(){var a,b,c,d,e=!0,f=localStorage;b={maxPostReload:5,maxIndexPosts:10},_=function(b){if(elemSliced=b.slice(1,b.length),elemSelector=b.charAt(0),returnNode=[],/[^\w#.-]/.test(b))for(getElements=document.querySelectorAll(b),getLength=getElements.length,a=0;a<getElements.length;a++)returnNode.push(getElements[a]);else switch(elemSelector){case"#":returnNode.push(document.getElementById(elemSliced));break;case".":for(getClassNames=document.getElementsByClassName(elemSliced),a=0;a<getClassNames.length;a++)returnNode.push(getClassNames[a]);break;default:for(getTagNames=document.getElementsByTagName(b),a=0;a<getTagNames.length;a++)returnNode.push(getTagNames[a])}return returnNodeFinal=returnNode.length>1?returnNode:returnNode[0],returnNodeFinal?returnNodeFinal:void 0},Element.prototype.addClass=function(a){return _addClass=function(b){b.classList?b.classList.add(a):b.className+=" "+a},_addClass(this)},Element.prototype.removeClass=function(a){return _removeClass=function(b){b.classList?b.classList.remove(a):b.className=b.className.replace(new RegExp("(^|\\b)"+a.split(" ").join("|")+"(\\b|$)","gi")," ")},_removeClass(this)},Element.prototype.hide=function(){return _hide=function(a){a.style.display="none"},_hide(this)},loader=function(a){_self=_("#loading"),a?(_self.style.opacity="1",_self.style.display="block"):(_self.style.opacity="0",_self.style.display="none")},jumpTo=function(a){theOffset=a.getBoundingClientRect(),window.scrollTo(0,theOffset.top+document.body.scrollTop-10)},log=function(a){e&&console.log(a)},markActiveLinklist=function(){_(".linklistloop a").forEach(function(a){a.getAttribute("data-kat")===d?(a.addClass("cat--active"),setTimeout(function(){jumpTo(a)},50)):a.removeClass("cat--active")})},checkRead=function(a,b){f.getItem(a)&&(b.addClass("is-viewed"),parseDate=new Date(f.getItem(a)),tag=parseDate.getDate(),monat=parseDate.getMonth()+1,jahr=parseDate.getFullYear(),b.querySelectorAll(".post--read")[0].textContent="Gelesen am: "+tag+"."+monat+"."+jahr+" | ")},router={routes:[],add:function(a,b){return this.routes.push({re:a,func:b}),this},checker:function(a){for(var b in this.routes){var c=a.match(this.routes[b].re);if(c)return c.shift(),this.routes[b].func.apply({},c),this}loader(!1),_("#indexContainer")&&!a&&this.parser("index","Die neusten Beiträge",!0)},parser:function(a,d,e){hashNice=a.charAt(0).toUpperCase()+a.slice(1,a.length),d=d||hashNice,loader(!0),postList=_(".post--list"),postContainer=_("#post--list__container"),pageHeading=_("#page-heading"),loadmoreButton=_("#loadmoreajax"),postList.innerHTML="",postContainer.addClass("opacity-0"),pageHeading.addClass("opacity-0"),pageHeading.textContent=d,xhr=new XMLHttpRequest,markActiveLinklist(),xhr.onreadystatechange=function(){if(4==xhr.readyState&&200==xhr.status){post=JSON.parse(xhr.responseText,"text/json"),numCat=0,c=[];for(var d=0;d<post.length;d++)(post[d].category===a||e||"alle"===a)&&(numCat<=b.maxIndexPosts&&(_(".post--list").innerHTML+=post[d].card,numCat++),c.push(post[d].card));_(".post--list li").forEach(function(a){checkRead(a.getAttribute("data-read"),a)}),loader(!1),pageHeading.removeClass("opacity-0"),postContainer.removeClass("opacity-0"),loadmoreButton.style.display=_(".post--list li").length<=b.maxIndexPosts?"none":"block"}},loadmoreButton.onclick=function(a){a.preventDefault(),a.stopPropagation(),postListLI=_(".post--list li"),e&&"alle"!=location.hash&&(location.hash="alle");var d=0;showDelay=function(a,b){setTimeout(function(){_(".post--list li")[a].removeClass("displayNone")},b)};for(var f=0;f<b.maxPostReload;f++)if(_(".post--list").innerHTML+=c[numCat],_(".post--list li")[numCat].addClass("displayNone"),d+=100,showDelay(numCat,d),numCat++,!c[numCat])return void(loadmoreButton.style.display="none");_(".post--list li").forEach(function(a){checkRead(a.getAttribute("data-read"),a)})},progressBar.style.display="block",progressBar.style.width="5%",xhr.addEventListener("progress",function(a){var b=_("#progressBar");if(a.lengthComputable){var c=Math.floor(a.loaded/a.total*100);b.style.width=c+"%",100===c&&setTimeout(function(){b.style.display="none"},350)}}),xhr.open("GET","/posts.json",!0),xhr.send()}}}();var c=_("#linklist"),d=_("#linklist a"),e=_("#toggleMenu"),f=window.innerHeight,g=window.innerWidth,h=_("#containeroverlay"),i=_("#containeroverlay-inner"),j=_(".post--content p img"),k=_(".hamburger li:nth-child(1)"),l=_(".hamburger li:nth-child(2)"),m=_(".hamburger li:nth-child(3)"),n="230px",o=_(".post--list li"),p=_(".dellocalStorage"),q=_(".localStorageContainer");c.style.maxHeight=n,o&&o.forEach(function(a){checkRead(a.getAttribute("data-read"),a)}),d.forEach(function(a){anchor=a.getAttribute("href"),a.setAttribute("href","/#"+anchor.slice(1,anchor.length)),a.addEventListener("click",function(){e.click()})}),b(),function(a){a&&j.forEach(function(a){a.addEventListener("click",function(){imgsrc=this.getAttribute("src"),i.innerHTML='<img src="" id="parse"><div class="containeroverlay-alt"></div>',i.querySelector("#parse").setAttribute("src",imgsrc),0!==this.getAttribute("alt").length&&(_(".containeroverlay-alt").innerHTML=this.getAttribute("alt")),h.addClass("scaleIn"),h.addEventListener("click",function(){h.removeClass("scaleIn")})})})}(j),e.addEventListener("click",function(){b()}),window.addEventListener("resize",function(){b()}),function(a){if(a){for(var b=0;b<localStorage.length;b++)q.innerHTML+="<li>"+localStorage.key(b)+" - "+localStorage.getItem(localStorage.key(b))+"</li>";0===localStorage.length&&(q.innerHTML="Keine Daten vorhanden.",p.hide()),p.addEventListener("click",function(a){a.preventDefault(),localStorage.clear(),q.innerHTML="Alle Daten erfolgreich gelöscht!"})}}(q),WebFontConfig={google:{families:["Roboto::latin"]}},function(){var a=document.createElement("script");a.src=("https:"==document.location.protocol?"https":"http")+"://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js",a.type="text/javascript",a.async="true";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}(),function(){var a=document.createElement("script");a.src=("https:"==document.location.protocol?"https":"http")+"://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",a.type="text/javascript",a.async="true",_("#ad_container").appendChild(a)}(),(adsbygoogle=window.adsbygoogle||[]).push({});var r=_("#SENDEN"),s=_("#form_msg_error"),t=_("#form_msg"),u=_(".kontakt__form"),v=_(".post--content"),w=_("#loading");w&&(w.style.opacity="0"),kontaktSubmit=function(){jumpTo(t);var a=_("#name"),b=_("#xyz"),c=_("#msg");a.removeClass("form__error"),b.removeClass("form__error"),c.removeClass("form__error"),w.style.opacity="1",r.style.display="none",t.innerHTML="";var d=new FormData;d.append("name",a.value),d.append("xyz",b.value),d.append("msg",c.value);var e=new XMLHttpRequest;e.open("POST","mailajax.php",!0),e.onload=function(){_self=JSON.parse(this.responseText),_self.success?(w.style.opacity="0",s.style.display="none",u.style.display="none",_self.phpmail_bad?(s.style.display="",s.innerHTML='<span class="kontakt__error">Es gab ein Problem mit unseren eMail-Server. Bitte versuch es später nochmal oder schreibe direkt an mail@glossboss.de</span>'):(v.style.display="none",t.innerHTML='<span class="kontakt__success">Danke für deine eMail!</span>')):(w.style.opacity="0",_self.errors.name&&(s.innerHTML='<span class="kontakt__error">'+_self.errors.name+"</span>",s.style.display="",r.style.display="",_self.errors.badmail&&b.addClass("form__error"),_self.errors.badname&&a.addClass("form__error"),_self.errors.badmsg&&c.addClass("form__error")))},e.send(d)},r&&r.addEventListener("click",function(a){a.preventDefault(),kontaktSubmit()});var x=_("#mischungInput1"),y=_("#mischungInput2"),z=_("#mischungResult"),A=_("#mischung--highlight"),B=_("#mischungsrechner input"),C=_("#mischung--heading");updateMischung=function(){flascheVal=_('input[type="radio"]:checked'),x.value&&y.value&&flascheVal.value&&("block"!==z.style.display&&jumpTo(C),gesamt=parseInt(x.value)+parseInt(y.value),step=flascheVal.value/gesamt,result1=Math.round(step*x.value).toFixed(2),result2=Math.round(step*y.value).toFixed(2),result1Finish=result1.slice(0,result1.length-3),result2Finish=result2.slice(0,result2.length-3),z.style.display="block",z.style.background="#49fb35",setTimeout(function(){z.addClass("mischungsDelay"),z.style.background="#fff"},100),A.innerHTML=result1Finish+"ml:"+result2Finish+"ml")},B&&B.forEach(function(a){a.addEventListener("change",function(){z.removeClass("mischungsDelay"),updateMischung()})}),router.add("allgemein",function(){router.parser("allgemein")}),router.add("anleitung",function(){router.parser("anleitungen")}),router.add("pflegeberichte",function(){router.parser("pflegeberichte")}),router.add("tipps-tricks",function(){router.parser("tipps-tricks","Tipps & Tricks")}),router.add("produkttest",function(){router.parser("produkttest")}),router.add("alle",function(){router.parser("alle","Alle Beiträge"),setTimeout(function(){jumpTo(_("#loadmoreajax")),_("#loadmoreajax").click()},50)}),window.addEventListener("hashchange",function(){loader(!0),router.checker(location.hash)}),window.addEventListener("load",function(){loader(!0),router.checker(location.hash)})});