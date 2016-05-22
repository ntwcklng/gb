!function(e,t){"use strict";var n=function(e){return new r(e)},r=function(e){var n=0,r=t.querySelectorAll(e);if(0===r.length)return r=t.createElement("div"),this[0]=r,this;for(this.length=r.length,n;n<this.length;n++)this[n]=r[n];return this};n.fn=r.prototype={each:function(e){return this.map(e),this},map:function(e){for(var t=[],n=0;n<this.length;n++)t.push(e.call(this,this[n],n));return t},eachOnce:function(e){var t=this.map(e);return t.length>1?t:t[0]},_forEach:function(e){return this.each(function(t){e(t)})},html:function(e){return e?this.each(function(t){t.innerHTML=e}):this.eachOnce(function(e){return e.innerHTML})},text:function(e){return e?this.each(function(t){t.textContent=e}):this.eachOnce(function(e){return e.textContent})},on:function(e,t){return document.addEventListener?this.each(function(n){n.addEventListener(e,t,!1)}):void 0},off:function(e,t){return document.addEventListener?this.each(function(n){n.removeEventListener(e,t,!1)}):void 0},addClass:function(e){return this.each(function(t){t.classList.add(e)})},removeClass:function(e){return this.each(function(t){t.classList.remove(e)})},containsClass:function(e){return this.each(function(t){return console.log(t.classList.contains(e)),t.classList.contains(e)})},css:function(e){return this.each(function(t){var n=t.getAttribute("style"),r=e;t.setAttribute("style",n+r)})},style:function(e,t){return this.each(function(n){n.style[e]=t})},value:function(){return this.eachOnce(function(e){return e.value})},disable:function(){return this.each(function(e){return e.disabled=!0})},enable:function(){return this.each(function(e){return e.disabled=!1})},scrollTo:function(){return this.eachOnce(function(e){var t=e.getBoundingClientRect(),n=document.body.scrollTop||document.documentElement.scrollTop;window.scrollTo(0,t.top+n-10)})}},e.$||(e.$=n)}(window,document),function(e,t){"use strict";var n=t.createElement("div"),r=function(e,t,n){n=n||"success";var r=$(".wrap-modal")[0],o=document.createElement("div");o.innerText=e,o.classList.add("modal"),o.classList.add("modal-"+n),setTimeout(function(){o.classList.add("modal-show")},20),r.appendChild(o),setTimeout(function(){o.classList.remove("modal-show"),setTimeout(function(){r.removeChild(o)},250)},t)},o=function(e){var t=$("#loading");e?t.style("opacity","1").style("display","block"):t.style("opacity","0").style("display","none")},i=function(){$("#search_reset").on("click",function(){$("#search-input")[0].value="",$("#results-container").html(" ")}),$("#searchWrapper").style("display","block"),SimpleJekyllSearch.init({templateMiddleware:function(e,t,n){return n.classList.remove("displayNone")},searchInput:document.getElementById("search-input"),resultsContainer:document.getElementById("results-container"),dataSource:postJSONCache,searchResultTemplate:"{card}",noResultsText:'<li>Nichts passendes dabei. Hast du eine Idee für einen Artikel? <a style="text-align:center" href="mailto:mail@glossboss.de">Kontaktiere uns!</a></li>',limit:25,fuzzy:!1})},a=function(e){var t={url:"",method:"GET",data:"",success:function(){},error:function(){},useJSON:!1};e=e||t;var n=new XMLHttpRequest;try{n.onreadystatechange=function(){if(4==n.readyState&&200==n.status){var t=e.useJSON?JSON.parse(n.responseText,"text/json"):n.responseText;e.success(t)}},n.open(e.method,e.url,!0),"POST"===e.method?(n.setRequestHeader("Content-Type","application/json;charset=UTF-8"),n.send(JSON.stringify(e.data))):"GET"===e.method&&n.send()}catch(r){console.error("AJAX Error: "+r)}};e.WebFontConfig={google:{families:["Lato::latin"]}},function(){var e=document.createElement("script");e.src=("https:"==document.location.protocol?"https":"http")+"://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js",e.type="text/javascript",e.async="true";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();var t=new Date,s=("0"+t.getDate()).slice(-2),c=("0"+(t.getMonth()+1)).slice(-2),u=t.getFullYear(),l=[u,c,s];e.ajax=a,e.searchRender=i,e.loader=o,e.appendModal=r,e.DIV=n,e.getCurDate=l}(window,document),function(e,t){var n=$("#mischungInput1")[0],r=$("#mischungInput2")[0],o={},i=$("#mischungResult"),a=$("#mischung--highlight"),s="",c=$("#mischungsrechner input"),u=($("#mischung--heading"),$(".mischungenpredefined")),l=function(){var e,t,o,i,a,c,u;return u=f(),cPart1=n.value,cPart2=r.value,e=parseInt(cPart1)+parseInt(cPart2),t=parseInt(u)/e,o=Math.round(t*cPart1).toFixed(2),i=Math.round(t*cPart2).toFixed(2),a=o.slice(0,o.length-3),c=i.slice(0,i.length-3),s=""+a+"ml:"+c+"ml"},h=function(e){i.style("display","block"),a.text(e)},f=function(){var e=$('input[type="radio"]:checked')[0].value||0;return e>0?e:0},d=function(e){var t=f();return n.value>0&&r.value>0&&t>0},p=function(){var e=d();e&&h(l())};(function(){u.on("click",function(){var e=this.innerHTML.split(":");o={part1:e[0],part2:e[1]},n.value=o.part1,r.value=o.part2,p()}),c.on("change",p),c.on("paste",p)})()}(window,document),!function e(t,n,r){function o(a,s){if(!n[a]){if(!t[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+a+"'")}var u=n[a]={exports:{}};t[a][0].call(u.exports,function(e){var n=t[a][1][e];return o(n?n:e)},u,u.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t){t.exports=function(){function e(e){return 200==e.status&&4==e.readyState}function t(t,n){t.onreadystatechange=function(){if(e(t))try{n(null,JSON.parse(t.responseText))}catch(r){n(r,null)}}}var n=this;n.load=function(e,n){var r=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");r.open("GET",e,!0),t(r,n),r.send()}}},{}],2:[function(e,t){function n(){function e(e){return new RegExp(e.split("").join(".*?"),"gi")}var t=this;t.matches=function(t,n){return"string"!=typeof t?!1:(t=t.trim(),!!t.match(e(n)))}}t.exports=new n},{}],3:[function(e,t){function n(){function e(e,t){return e.toLowerCase().indexOf(t.toLowerCase())>=0}var t=this;t.matches=function(t,n){return"string"!=typeof t?!1:(t=t.trim(),e(t,n))}}t.exports=new n},{}],4:[function(e,t){t.exports=function(){function t(e,t,r){for(var o=e.get(),a=0;a<o.length&&i.length<s;a++)n(o[a],t,r);return i}function n(e,t,n){for(var r in e)if(n.matches(e[r],t)){i.push(e);break}}function r(){return a?c:u}var o=this,i=[],a=!1,s=10,c=e("./SearchStrategies/fuzzy"),u=e("./SearchStrategies/literal");o.setFuzzy=function(e){a=!!e},o.setLimit=function(e){s=parseInt(e,10)||s},o.search=function(e,n){return n?(i.length=0,t(e,n,r())):[]}}},{"./SearchStrategies/fuzzy":2,"./SearchStrategies/literal":3}],5:[function(e,t){t.exports=function(e){function t(e){return!!e&&"[object Object]"==Object.prototype.toString.call(e)}function n(e){return!!e&&"[object Array]"==Object.prototype.toString.call(e)}function r(e){return a.push(e),e}function o(e){for(var n=[],o=0;o<e.length;o++)t(e[o])&&n.push(r(e[o]));return n}var i=this,a=[];n(e)&&o(e),i.clear=function(){return a.length=0,a},i.get=function(){return a},i.put=function(e){return t(e)?r(e):n(e)?o(e):void 0}}},{}],6:[function(e,t){t.exports=function(){var e=this,t=/\{(.*?)\}/g;e.setTemplatePattern=function(e){t=e},e.render=function(e,n){return e.replace(t,function(e,t){return n[t]||e})}}},{}],7:[function(e){!function(t){"use strict";function n(){function e(){u.put(m.dataSource),f()}function t(e){l.load(e,function(t,r){t?n("failed to get JSON ("+e+")"):(u.put(r),f())})}function n(e){throw new Error("SimpleJekyllSearch --- "+e)}function r(e){for(var t=0;t<g.length;t++){var r=g[t];e[r]||n("You must specify a "+r)}}function o(e){for(var t in m)m[t]=e[t]||m[t]}function i(e){try{return e instanceof Object&&JSON.parse(JSON.stringify(e))}catch(t){return!1}}function a(){m.resultsContainer.innerHTML=""}function h(e){m.resultsContainer.innerHTML+=e,$("#results-container li").each(function(e){e.classList.remove("displayNone")})}function f(){m.searchInput.addEventListener("keyup",function(e){return 0==e.target.value.length?void a():void d(s.search(u,e.target.value))})}function d(e){if(a(),0==e.length)return h(m.noResultsText);for(var t=0;t<e.length;t++)h(c.render(m.searchResultTemplate,e[t]))}var p=this,g=["searchInput","resultsContainer","dataSource"],m={searchInput:null,resultsContainer:null,dataSource:[],searchResultTemplate:'<li><a href="{url}" title="{desc}">{title}</a></li>',noResultsText:"No results found",limit:10,fuzzy:!1};p.init=function(n){r(n),o(n),i(m.dataSource)?e(m.dataSource):t(m.dataSource)}}var r=e("./Searcher"),o=e("./Templater"),i=e("./Store"),a=e("./JSONLoader"),s=new r,c=new o,u=new i,l=new a;t.SimpleJekyllSearch=new n}(window,document)},{"./JSONLoader":1,"./Searcher":4,"./Store":5,"./Templater":6}]},{},[7]),function(e,t){function n(){g.removeClass("menuOut"),p.off("click",r),d.off("click",n),p.removeClass("opacity03")}function r(e){e.preventDefault(),n()}function o(){function t(){if(c&&u){var e=o+a,t="Sei der erste Glossboss der diesen Beitrag teilt!";o===a&&(e/=2),e>1&&(t=e+" Glossbosse haben diesen Beitrag bereits geteilt!"),clearInterval(s),i.text(t)}}console.log("Get Shares");var n="https://graph.facebook.com/"+e.location.href,r=n.slice(0,n.length-1),o=0,a=0,s=setInterval(t,100),c=!1,u=!1;ajax({method:"GET",url:n,useJSON:!0,success:function(e){o=e.shares,c=!0}}),ajax({method:"GET",url:r,useJSON:!0,success:function(e){a=e.shares,u=!0}})}var i=$("#sharecounter"),a=($("#search_reset"),$(".post--sharing")),s=$(".scroll-top"),c=$(".showCommentsContainer"),u=($(".page-heading"),$("#header-style")),l=$(".cookies-hinweis"),h=$("#cookies_acc"),f=$("#slidemenutoggle"),d=$(".menucontent a.closeSlideMenuOnClick"),p=$("#fullpage"),g=$(".slidemenu");$(".menucontent");n(),f.on("click",function(){ga("send","event","Navigation","click","Burger Menu"),g[0].classList.contains("menuOut")?(p.on("click",r),d.on("click",n)):(p.addClass("opacity03"),g.addClass("menuOut"),setTimeout(function(){p.on("click",r),d.on("click",n)},50))});var m=(function(){$(".post--content a")._forEach(function(e){e.setAttribute("target","_blank")}),$(".autor-box a")._forEach(function(e){e.setAttribute("target","_blank")})}(),function(){function e(){$("li[data-author]").style("display","none")}e(),$("span[data-authorToggle]").on("click",function(){console.log("clicked on an author :)"),e();var t=this.getAttribute("data-authorToggle");$("li[data-author="+t+"]").style("display","block")})}(),function(){localStorage.getItem("GLOSSBOSS_COOKIES_ACCEPTED")||l.style("display","block"),h.on("click",function(){l.style("display","none"),localStorage.setItem("GLOSSBOSS_COOKIES_ACCEPTED","1")})}(),function(){if(a&&navigator.userAgent.match(/(iPhone)/g)){var e=$(".share--whatsapp");e.style("display","inline-block"),e[0].href="WhatsApp://send?text="+document.title+": "+location.href}}(),function(){if(randomHeader){var e=["merc-8.jpg","1mcoupe.jpg","530dteamwork.jpg","DSC00627.jpg","DSC00624.jpg","965turbo.jpg","9914s1.jpg","997cabrio.jpg","991turbos.jpg","997grau.jpg","997rot.jpg","alfagtv.jpg","audir8.jpg","audis5.jpg","bmw2002.jpg","eosschwarz.jpg","golf7gtd.jpg","lotuselise.jpg","m3csl.jpg","shelby.jpg","mclaren.jpg"];random=Math.floor(Math.random()*(e.length-1));var t="https://glossbossimages.s3.eu-central-1.amazonaws.com/headerimg/"+e[random];u.html("header {background: "+headerGradient+", url("+t+") center 50%; background-size:cover}")}}(),["/spenden/","/mischungsrechner/","/impressum/","/","/blog-abonnieren/","/kontakt/","/preview/","/allgemein/","/pflegeberichte/","/anleitungen/","/produkttest/"]),v=!0;m.map(function(e){location.pathname===e&&(v=!1)}),v&&o();var y=function(){s.on("click",function(){f.scrollTo()}),c.on("click",function(){var e="glossboss";!function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="//"+e+".disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(t)}(),c.style("display","none")})};y()}(window,document),function(e,t){function n(e,t){setTimeout(function(){$(".post--list li")[e].classList.remove("displayNone")},t)}var r,o=$(".post--list"),i=$("#post--list__container"),a=$("#loadmoreajax"),s=[],c=0,u=15,l=5,h={routes:[],add:function(e,t){return this.routes.push({re:e,fn:t}),this},checkRoute:function(e){for(var t in this.routes){var n=e.match(this.routes[t].re);if(n)return n.shift(),this.routes[t].fn.apply({},n),this}try{$("#indexContainer")&&!e&&ItseMeIndex&&this.parser("index","Die neuesten Beiträge",!0)}catch(r){console.log("i dont care: "+r)}},getPosts:function(e,t,o){var s=0;c=0,r=[],e.filter(function(e){return e.category.toLowerCase()===t||o||"alle"===t}).map(function(e){if(u>c){var t=$(".post--list").html();$(".post--list").html(t+e.card),s+=100,n(c,s),c++}r.push(e.card)}),i.removeClass("opacity-0"),loader(0),$(".post--list li").length<u||r.length<=u?a.style("display","none"):a.style("display","block"),a[0].onclick=function(e){postListLI=$(".post--list li"),o&&"alle"!=location.hash&&(location.hash="alle");for(var t=0,i=0;l>i;i++)if($(".post--list")[0].innerHTML+=r[c],t+=100,n(c,t),c++,!r[c])return void a.style("display","none")}},parser:function(e,t,n){return $("#toggleMenu")[0].checked=!1,$("#searchWrapper").style("display","none"),loader(1),a.style("display","none"),o.html(" "),i.addClass("opacity-0"),"suche"===e?(i.removeClass("opacity-0"),searchRender(),void loader(0)):void(s.length<=1?ajax({method:"GET",useJSON:!0,url:postJSONCache,success:function(t){s=t,this.getPosts(t,e,n)}.bind(this)}):this.getPosts(s,e,n))}};try{var f=document.getElementById("kategorieSeite").getAttribute("data-cat");switch(f){case"allgemein":h.parser("allgemein","Allgemein");break;case"pflegeberichte":h.parser("pflegeberichte","Pflegeberichte");break;case"anleitungen":h.parser("anleitungen","Anleitungen");break;case"produkttests":h.parser("produkttest","Produkttests")}}catch(d){console.log(d)}h.add("suche",function(){h.parser("suche")}),h.add("alle",function(){h.parser("alle","Alle Beiträge"),setTimeout(function(){$("#loadmoreajax").scrollTo(),$("#loadmoreajax")[0].click()},50)}),e.router=h,window.addEventListener("hashchange",function(){h.checkRoute(location.hash)}),window.addEventListener("load",function(){h.checkRoute(location.hash)})}(window,document);