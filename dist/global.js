document.addEventListener("DOMContentLoaded",function(){(function(e,t){"use strict";var n=function(e){return new r(e)};var r=function(e){var n=0;var r=t.querySelectorAll(e);if(r.length===0){r=t.createElement("div");this[0]=r;return this}this.length=r.length;for(n;n<this.length;n++){this[n]=r[n]}return this};n.fn=r.prototype={each:function(e){this.map(e);return this},map:function(e){var t=[];for(var n=0;n<this.length;n++){t.push(e.call(this,this[n],n))}return t},eachOnce:function(e){var t=this.map(e);return t.length>1?t:t[0]},_forEach:function(e){return this.each(function(t){e(t)})},html:function(e){if(!e){return this.eachOnce(function(e){return e.innerHTML})}return this.each(function(t){t.innerHTML=e})},text:function(e){if(!e){return this.eachOnce(function(e){return e.textContent})}return this.each(function(t){t.textContent=e})},on:function(e,t){if(document.addEventListener){return this.each(function(n){n.addEventListener(e,t,false)})}},addClass:function(e){return this.each(function(t){t.classList.add(e)})},removeClass:function(e){return this.each(function(t){t.classList.remove(e)})},css:function(e){return this.each(function(t){var n=t.getAttribute("style");var r=e;t.setAttribute("style",n+r)})},style:function(e,t){return this.each(function(n){n.style[e]=t})},value:function(){return this.eachOnce(function(e){return e.value})},disable:function(){return this.each(function(e){return e.disabled=true})},enable:function(){return this.each(function(e){return e.disabled=false})},scrollTo:function(){return this.eachOnce(function(e){var t=e.getBoundingClientRect();var n=document.body.scrollTop||document.documentElement.scrollTop;window.scrollTo(0,t.top+n-10)})}};if(!e.$){e.$=n}})(window,document);(function e(t,n){"use strict";var r=n.createElement("div");var a=function(e,t,n){n=n||"success";var r=$(".wrap-modal")[0];var a=document.createElement("div");a.innerText=e;a.classList.add("modal");a.classList.add("modal-"+n);setTimeout(function(){a.classList.add("modal-show")},20);r.appendChild(a);setTimeout(function(){a.classList.remove("modal-show");setTimeout(function(){r.removeChild(a)},250)},t)};var o=function(e){var t=$("#loading");e?t.style("opacity","1").style("display","block"):t.style("opacity","0").style("display","none")};var s=function(e){};var i=function(){$("#search_reset").on("click",function(){$("#search-input")[0].value="";$("#results-container").html(" ")});$("#searchWrapper").style("display","block");SimpleJekyllSearch.init({searchInput:document.getElementById("search-input"),resultsContainer:document.getElementById("results-container"),dataSource:postJSONCache,searchResultTemplate:"{card}",noResultsText:'<li>Nichts passendes dabei. Hast du eine Idee für einen Artikel? <a style="text-align:center" href="mailto:mail@glossboss.de">Kontaktiere uns!</a></li>',limit:25,fuzzy:false})};var c=function(e){var t={url:"",method:"GET",data:"",success:function(){return},error:function(){},useJSON:false};e=e||t;var n=new XMLHttpRequest;try{n.onreadystatechange=function(){if(n.readyState==4&&n.status==200){var t=e.useJSON?JSON.parse(n.responseText,"text/json"):n.responseText;e.success(t)}};n.open(e.method,e.url);if(e.method==="POST"){n.setRequestHeader("Content-Type","application/json;charset=UTF-8");n.send(JSON.stringify(e.data))}else if(e.method==="GET"){n.send()}}catch(r){console.error("AJAX Error: "+r)}};t.WebFontConfig={google:{families:["Roboto::latin"]}};(function(){var e=document.createElement("script");e.src=("https:"==document.location.protocol?"https":"http")+"://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";e.type="text/javascript";e.async="true";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})();t.ajax=c;t.searchRender=i;t.markActiveLinkNavbar=s;t.loader=o;t.appendModal=a;t.DIV=r})(window,document);(function t(e,n){var r=$("#mischungInput1")[0],a=$("#mischungInput2")[0],o={},s=$("#mischungResult"),i=$("#mischung--highlight"),c="",u=$("#mischungsrechner input"),l=$("#mischung--heading"),d=$(".mischungenpredefined");var f=function(){var e,t,n,o,s,i,u,l;l=p();cPart1=r.value;cPart2=a.value;e=parseInt(cPart1)+parseInt(cPart2);t=parseInt(l)/e;n=Math.round(t*cPart1).toFixed(2);o=Math.round(t*cPart2).toFixed(2);s=n.slice(0,n.length-3);i=o.slice(0,o.length-3);c=""+s+"ml:"+i+"ml";return c};var h=function(e){s.style("display","block");i.text(e)};var p=function(){var e=$('input[type="radio"]:checked')[0].value||0;if(e>0){return e}else{return 0}};var m=function(e){var t=p();if(r.value>0&&a.value>0&&t>0){return true}else{return false}};var g=function(){var e=m();if(e){h(f())}};var v=function(){d.on("click",function(){var e=this.innerHTML.split(":");o={part1:e[0],part2:e[1]};r.value=o.part1;a.value=o.part2;g()});u.on("change",g);u.on("paste",g)}()})(window,document);!function n(e,t,r){function a(s,i){if(!t[s]){if(!e[s]){var c="function"==typeof require&&require;if(!i&&c)return c(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+s+"'")}var u=t[s]={exports:{}};e[s][0].call(u.exports,function(t){var n=e[s][1][t];return a(n?n:t)},u,u.exports,n,e,t,r)}return t[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)a(r[s]);return a}({1:[function(e,t){t.exports=function(){function e(e){return 200==e.status&&4==e.readyState}function t(t,n){t.onreadystatechange=function(){if(e(t))try{n(null,JSON.parse(t.responseText))}catch(r){n(r,null)}}}var n=this;n.load=function(e,n){var r=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");r.open("GET",e,!0),t(r,n),r.send()}}},{}],2:[function(e,t){function n(){function e(e){return new RegExp(e.split("").join(".*?"),"gi")}var t=this;t.matches=function(t,n){return"string"!=typeof t?!1:(t=t.trim(),!!t.match(e(n)))}}t.exports=new n},{}],3:[function(e,t){function n(){function e(e,t){return e.toLowerCase().indexOf(t.toLowerCase())>=0}var t=this;t.matches=function(t,n){return"string"!=typeof t?!1:(t=t.trim(),e(t,n))}}t.exports=new n},{}],4:[function(e,t){t.exports=function(){function t(e,t,r){for(var a=e.get(),s=0;s<a.length&&o.length<i;s++)n(a[s],t,r);return o}function n(e,t,n){for(var r in e)if(n.matches(e[r],t)){o.push(e);break}}function r(){return s?c:u}var a=this,o=[],s=!1,i=10,c=e("./SearchStrategies/fuzzy"),u=e("./SearchStrategies/literal");a.setFuzzy=function(e){s=!!e},a.setLimit=function(e){i=parseInt(e,10)||i},a.search=function(e,n){return n?(o.length=0,t(e,n,r())):[]}}},{"./SearchStrategies/fuzzy":2,"./SearchStrategies/literal":3}],5:[function(e,t){t.exports=function(e){function t(e){return!!e&&"[object Object]"==Object.prototype.toString.call(e)}function n(e){return!!e&&"[object Array]"==Object.prototype.toString.call(e)}function r(e){return s.push(e),e}function a(e){for(var n=[],a=0;a<e.length;a++)t(e[a])&&n.push(r(e[a]));return n}var o=this,s=[];n(e)&&a(e),o.clear=function(){return s.length=0,s},o.get=function(){return s},o.put=function(e){return t(e)?r(e):n(e)?a(e):void 0}}},{}],6:[function(e,t){t.exports=function(){var e=this,t=/\{(.*?)\}/g;e.setTemplatePattern=function(e){t=e},e.render=function(e,n){return e.replace(t,function(e,t){return n[t]||e})}}},{}],7:[function(e){!function(t){"use strict";function n(){function e(){u.put(g.dataSource),f()}function t(e){l.load(e,function(t,r){t?n("failed to get JSON ("+e+")"):(u.put(r),f())})}function n(e){throw new Error("SimpleJekyllSearch --- "+e)}function r(e){for(var t=0;t<m.length;t++){var r=m[t];e[r]||n("You must specify a "+r)}}function a(e){for(var t in g)g[t]=e[t]||g[t]}function o(e){try{return e instanceof Object&&JSON.parse(JSON.stringify(e))}catch(t){return!1}}function s(){g.resultsContainer.innerHTML=""}function d(e){g.resultsContainer.innerHTML+=e}function f(){g.searchInput.addEventListener("keyup",function(e){return 0==e.target.value.length?void s():void h(i.search(u,e.target.value))})}function h(e){if(s(),0==e.length)return d(g.noResultsText);for(var t=0;t<e.length;t++)d(c.render(g.searchResultTemplate,e[t]))}var p=this,m=["searchInput","resultsContainer","dataSource"],g={searchInput:null,resultsContainer:null,dataSource:[],searchResultTemplate:'<li><a href="{url}" title="{desc}">{title}</a></li>',noResultsText:"No results found",limit:10,fuzzy:!1};p.init=function(n){r(n),a(n),o(g.dataSource)?e(g.dataSource):t(g.dataSource)}}var r=e("./Searcher"),a=e("./Templater"),o=e("./Store"),s=e("./JSONLoader"),i=new r,c=new a,u=new o,l=new s;t.SimpleJekyllSearch=new n}(window,document)},{"./JSONLoader":1,"./Searcher":4,"./Store":5,"./Templater":6}]},{},[7]);(function r(e,t){var n=$("#linklist"),r=$("#toggleMenu"),a=$(".hamburger li:nth-child(1)"),o=$(".hamburger li:nth-child(2)"),s=$(".hamburger li:nth-child(3)"),i=$("#sharecounter"),c=$("#eastereggNavbar"),u=$("#search_reset"),l=$(".post--sharing"),d=$(".scroll-top"),f=$(".showCommentsContainer"),h=$(".page-heading"),p=$("#header-style"),m="230px";var g=function(){if(l&&navigator.userAgent.match(/(iPhone)/g)){var e=$(".share--whatsapp");e.style("display","inline-block");e.href="WhatsApp://send?text="+document.title+": "+location.href}}();var v=function(){var e=$("select[name=kategorie]");var t=e[0];e.on("change",function(){location.href="/"+t.options[t.selectedIndex].value})}();var y=function(){if(randomHeader){var e=["merc-8.jpg","1mcoupe.jpg","530dteamwork.jpg","965turbo.jpg","9914s1.jpg","997cabrio.jpg","991turbos.jpg","997grau.jpg","997rot.jpg","alfagtv.jpg","audir8.jpg","audis5.jpg","bmw2002.jpg","eosschwarz.jpg","golf7gtd.jpg","lotuselise.jpg","m3csl.jpg","shelby.jpg","mclaren.jpg"];random=Math.floor(Math.random()*(e.length-1));var t="https://glossbossimages.s3.eu-central-1.amazonaws.com/headerimg/"+e[random];p.html("header {background: "+headerGradient+", url("+t+") center 50%; background-size:cover}")}}();var b=function(){var t="https://graph.facebook.com/"+e.location.href;var n=t.slice(0,t.length-1);var r=0,a=0,o=setInterval(u,100),s=false,c=false;ajax({method:"GET",url:t,useJSON:true,success:function(e){r=e.shares;s=true}});ajax({method:"GET",url:n,useJSON:true,success:function(e){a=e.shares;c=true}});function u(){if(s&&c){var e=r+a;var t="Sei der erste Glossboss der diesen Beitrag teilt!";if(r===a)e/=2;if(e>1){t=e+" Glossbosse haben diesen Beitrag bereits geteilt!"}clearInterval(o);i.text(t)}}}();var S=function(){d.on("click",function(){n.scrollTo()});f.on("click",function(){var e="glossboss";(function(){var t=document.createElement("script");t.type="text/javascript";t.async=true;t.src="//"+e+".disqus.com/embed.js";(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(t)})();f.style("display","none")})};function w(){var t=e.innerHeight;var r=e.innerWidth;r>=750?n.style("maxHeight",m):x()}function x(e){var t=function(){n.style("maxHeight",m);s.addClass("hidden");a.addClass("rot45deg");o.addClass("rot-45deg")};var i=function(){n.style("maxHeight","0");s.removeClass("hidden");a.removeClass("rot45deg");o.removeClass("rot-45deg")};r[0].checked?t():i()}S()})(window,document);(function a(e,t){var n=$(".post--list"),r=$("#post--list__container"),a=$("#page-heading"),o=$("#loadmoreajax");var s,i=0,c=10,u=5;var l={routes:[],add:function(e,t){this.routes.push({re:e,fn:t});return this},checkRoute:function(e){for(var t in this.routes){var n=e.match(this.routes[t].re);if(n){n.shift();this.routes[t].fn.apply({},n);return this}}try{if($("#indexContainer")&&!e&&ItseMeIndex){this.parser("index","Die neuesten Beiträge",true)}}catch(r){console.log("i dont care: "+r)}},getPosts:function(e,t,n){var l=e;s=[];i=0;for(var d=0;d<l.length;d++){if(l[d].category===t||n||t==="alle"){if(i<c){var f=$(".post--list").html();$(".post--list").html(f+l[d].card);i++}s.push(l[d].card)}}r.removeClass("opacity-0");a.removeClass("opacity-0");loader(0);$(".post--list li").length<c?o.style("display","none"):o.style("display","block");o[0].onclick=function(e){postListLI=$(".post--list li");if(n&&location.hash!="alle"){location.hash="alle"}var t=0;showDelay=function(e,t){setTimeout(function(){$(".post--list li")[e].classList.remove("displayNone")},t)};for(var r=0;r<u;r++){$(".post--list")[0].innerHTML+=s[i];$(".post--list li")[i].classList.add("displayNone");t+=100;showDelay(i,t);i++;if(!s[i]){o.style("display","none");return}}return}},parser:function(e,t,s){$("#toggleMenu")[0].checked=false;$("#searchWrapper").style("display","none");markActiveLinkNavbar(e);var i=e.charAt(0).toUpperCase()+e.slice(1,e.length);t=t||i;loader(1);o.style("display","none");a.addClass("opacity-0");a.text(t);n.html(" ");r.addClass("opacity-0");if(e==="suche"){r.removeClass("opacity-0");searchRender();loader(0);return}ajax({method:"GET",useJSON:true,url:postJSONCache,success:function(t){this.getPosts(t,e,s)}.bind(this)})}};l.add("allgemein",function(){l.parser("allgemein")});l.add("anleitung",function(){l.parser("anleitungen")});l.add("pflegeberichte",function(){l.parser("pflegeberichte")});l.add("tipps-tricks",function(){l.parser("tipps-tricks","Tipps & Tricks")});l.add("produkttest",function(){l.parser("produkttest")});l.add("suche",function(){l.parser("suche")});l.add("test",function(){l.parser("test","TESTSEITE!")});l.add("alle",function(){l.parser("alle","Alle Beiträge");setTimeout(function(){$("#loadmoreajax").scrollTo();$("#loadmoreajax")[0].click()},50)});window.addEventListener("hashchange",function(){l.checkRoute(location.hash)});window.addEventListener("load",function(){l.checkRoute(location.hash)})})(window,document);(function o(e,t){var n=$("#SENDEN"),r=$("#form_msg"),a=$("#name"),o=$("#xyz"),s=$("#msg"),i=$(".selectGlossboss input[name=glossboss]"),c={},u=$("#kontakt_inputs"),l="R61bXP70NEnJXC2c__cvgg";function d(e,t){if(e.value()===""){n.style("visibility","");e.addClass("form__error");loader(0);appendModal("Unvollständige Angabe: "+e[0].placeholder,3e3,"error");return false}else{if(t){var r=/\S+@\S+\.\S+/;if(!r.test(e.value())){o.addClass("form__error");appendModal("eMail Adresse ungültig!",2e3,"error");n.style("visibility","");loader(0);return false}}return true}}function f(){a.removeClass("form__error");o.removeClass("form__error");s.removeClass("form__error");n.style("visibility","hidden");loader(1)}function h(){u.style("opacity","1");n.enable();n.removeClass("cursor-not-allowed");c.Mail=$(".selectGlossboss input[name=glossboss]:checked").value();c.Name=$(".selectGlossboss input[name=glossboss]:checked")[0].getAttribute("data-boss")}function p(){u.style("opacity",".3");n.disable();n.addClass("cursor-not-allowed");g()}function m(){f();var e=d(a),t=d(o,true),r=d(s);if(e&&t&&r){var i={key:l,message:{text:s.value(),subject:"GLOSSBOSS Kontaktanfrage",from_email:o.value(),from_name:a.value(),to:[{email:c.Mail,name:c.Name,type:"to"}],headers:{"Reply-To":o.value()}},async:false,ip_pool:"Main Pool"};ajax({method:"POST",url:"https://mandrillapp.com/api/1.0/messages/send.json",data:i,useJSON:true,success:function(e){loader(1);if(e[0].status==="sent"){n.style("visibility","hidden");loader(0);appendModal("Danke für deine eMail! Wir werden so schnell wie möglich darauf antworten.",4500)}}})}}function g(){n.on("click",function(e){e.preventDefault();m()},false);i.on("change",h)}p()})(window,document)});