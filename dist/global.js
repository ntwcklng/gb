!function(e,t){"use strict";var n=function(e){return new o(e)},o=function(e){var n=0,o=t.querySelectorAll(e);if(0===o.length)return o=t.createElement("div"),this[0]=o,this;for(this.length=o.length,n;n<this.length;n++)this[n]=o[n];return this};n.fn=o.prototype={each:function(e){return this.map(e),this},map:function(e){for(var t=[],n=0;n<this.length;n++)t.push(e.call(this,this[n],n));return t},eachOnce:function(e){var t=this.map(e);return t.length>1?t:t[0]},_forEach:function(e){return this.each(function(t){e(t)})},html:function(e){return e?this.each(function(t){t.innerHTML=e}):this.eachOnce(function(e){return e.innerHTML})},text:function(e){return e?this.each(function(t){t.textContent=e}):this.eachOnce(function(e){return e.textContent})},on:function(e,t){return document.addEventListener?this.each(function(n){n.addEventListener(e,t,!1)}):void 0},off:function(e,t){return document.addEventListener?this.each(function(n){n.removeEventListener(e,t,!1)}):void 0},addClass:function(e){return this.each(function(t){t.classList.add(e)})},removeClass:function(e){return this.each(function(t){t.classList.remove(e)})},containsClass:function(e){return this.each(function(t){return console.log(t.classList.contains(e)),t.classList.contains(e)})},css:function(e){return this.each(function(t){var n=t.getAttribute("style"),o=e;t.setAttribute("style",n+o)})},style:function(e,t){return this.each(function(n){n.style[e]=t})},value:function(){return this.eachOnce(function(e){return e.value})},disable:function(){return this.each(function(e){return e.disabled=!0})},enable:function(){return this.each(function(e){return e.disabled=!1})},scrollTo:function(){return this.eachOnce(function(e){var t=e.getBoundingClientRect(),n=document.body.scrollTop||document.documentElement.scrollTop;window.scrollTo(0,t.top+n-10)})}},e.$||(e.$=n)}(window,document),function(e,t){"use strict";var n=t.createElement("div"),o=function(e,t,n){n=n||"success";var o=$(".wrap-modal")[0],r=document.createElement("div");r.innerText=e,r.classList.add("modal"),r.classList.add("modal-"+n),setTimeout(function(){r.classList.add("modal-show")},20),o.appendChild(r),setTimeout(function(){r.classList.remove("modal-show"),setTimeout(function(){o.removeChild(r)},250)},t)},r=function(e){var t=$("#loading");e?t.style("opacity","1").style("display","block"):t.style("opacity","0").style("display","none")},a=function(e){},i=function(){$("#search_reset").on("click",function(){$("#search-input")[0].value="",$("#results-container").html(" ")}),$("#searchWrapper").style("display","block"),SimpleJekyllSearch.init({searchInput:document.getElementById("search-input"),resultsContainer:document.getElementById("results-container"),dataSource:postJSONCache,searchResultTemplate:"{card}",noResultsText:'<li>Nichts passendes dabei. Hast du eine Idee für einen Artikel? <a style="text-align:center" href="mailto:mail@glossboss.de">Kontaktiere uns!</a></li>',limit:25,fuzzy:!1})},s=function(e){var t={url:"",method:"GET",data:"",success:function(){},error:function(){},useJSON:!1};e=e||t;var n=new XMLHttpRequest;try{n.onreadystatechange=function(){if(4==n.readyState&&200==n.status){var t=e.useJSON?JSON.parse(n.responseText,"text/json"):n.responseText;e.success(t)}},n.open(e.method,e.url,!0),"POST"===e.method?(n.setRequestHeader("Content-Type","application/json;charset=UTF-8"),n.send(JSON.stringify(e.data))):"GET"===e.method&&n.send()}catch(o){console.error("AJAX Error: "+o)}};e.WebFontConfig={google:{families:["Roboto::latin"]}},function(){var e=document.createElement("script");e.src=("https:"==document.location.protocol?"https":"http")+"://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js",e.type="text/javascript",e.async="true";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();var t=new Date,c=("0"+t.getDate()).slice(-2),u=("0"+(t.getMonth()+1)).slice(-2),l=t.getFullYear(),d=[l,u,c];e.ajax=s,e.searchRender=i,e.markActiveLinkNavbar=a,e.loader=r,e.appendModal=o,e.DIV=n,e.getCurDate=d}(window,document),function(e,t){var n=$("#mischungInput1")[0],o=$("#mischungInput2")[0],r={},a=$("#mischungResult"),i=$("#mischung--highlight"),s="",c=$("#mischungsrechner input"),u=($("#mischung--heading"),$(".mischungenpredefined")),l=function(){var e,t,r,a,i,c,u;return u=f(),cPart1=n.value,cPart2=o.value,e=parseInt(cPart1)+parseInt(cPart2),t=parseInt(u)/e,r=Math.round(t*cPart1).toFixed(2),a=Math.round(t*cPart2).toFixed(2),i=r.slice(0,r.length-3),c=a.slice(0,a.length-3),s=""+i+"ml:"+c+"ml"},d=function(e){a.style("display","block"),i.text(e)},f=function(){var e=$('input[type="radio"]:checked')[0].value||0;return e>0?e:0},h=function(e){var t=f();return n.value>0&&o.value>0&&t>0?!0:!1},p=function(){var e=h();e&&d(l())};(function(){u.on("click",function(){var e=this.innerHTML.split(":");r={part1:e[0],part2:e[1]},n.value=r.part1,o.value=r.part2,p()}),c.on("change",p),c.on("paste",p)})()}(window,document),!function e(t,n,o){function r(i,s){if(!n[i]){if(!t[i]){var c="function"==typeof require&&require;if(!s&&c)return c(i,!0);if(a)return a(i,!0);throw new Error("Cannot find module '"+i+"'")}var u=n[i]={exports:{}};t[i][0].call(u.exports,function(e){var n=t[i][1][e];return r(n?n:e)},u,u.exports,e,t,n,o)}return n[i].exports}for(var a="function"==typeof require&&require,i=0;i<o.length;i++)r(o[i]);return r}({1:[function(e,t){t.exports=function(){function e(e){return 200==e.status&&4==e.readyState}function t(t,n){t.onreadystatechange=function(){if(e(t))try{n(null,JSON.parse(t.responseText))}catch(o){n(o,null)}}}var n=this;n.load=function(e,n){var o=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");o.open("GET",e,!0),t(o,n),o.send()}}},{}],2:[function(e,t){function n(){function e(e){return new RegExp(e.split("").join(".*?"),"gi")}var t=this;t.matches=function(t,n){return"string"!=typeof t?!1:(t=t.trim(),!!t.match(e(n)))}}t.exports=new n},{}],3:[function(e,t){function n(){function e(e,t){return e.toLowerCase().indexOf(t.toLowerCase())>=0}var t=this;t.matches=function(t,n){return"string"!=typeof t?!1:(t=t.trim(),e(t,n))}}t.exports=new n},{}],4:[function(e,t){t.exports=function(){function t(e,t,o){for(var r=e.get(),i=0;i<r.length&&a.length<s;i++)n(r[i],t,o);return a}function n(e,t,n){for(var o in e)if(n.matches(e[o],t)){a.push(e);break}}function o(){return i?c:u}var r=this,a=[],i=!1,s=10,c=e("./SearchStrategies/fuzzy"),u=e("./SearchStrategies/literal");r.setFuzzy=function(e){i=!!e},r.setLimit=function(e){s=parseInt(e,10)||s},r.search=function(e,n){return n?(a.length=0,t(e,n,o())):[]}}},{"./SearchStrategies/fuzzy":2,"./SearchStrategies/literal":3}],5:[function(e,t){t.exports=function(e){function t(e){return!!e&&"[object Object]"==Object.prototype.toString.call(e)}function n(e){return!!e&&"[object Array]"==Object.prototype.toString.call(e)}function o(e){return i.push(e),e}function r(e){for(var n=[],r=0;r<e.length;r++)t(e[r])&&n.push(o(e[r]));return n}var a=this,i=[];n(e)&&r(e),a.clear=function(){return i.length=0,i},a.get=function(){return i},a.put=function(e){return t(e)?o(e):n(e)?r(e):void 0}}},{}],6:[function(e,t){t.exports=function(){var e=this,t=/\{(.*?)\}/g;e.setTemplatePattern=function(e){t=e},e.render=function(e,n){return e.replace(t,function(e,t){return n[t]||e})}}},{}],7:[function(e){!function(t){"use strict";function n(){function e(){u.put(g.dataSource),f()}function t(e){l.load(e,function(t,o){t?n("failed to get JSON ("+e+")"):(u.put(o),f())})}function n(e){throw new Error("SimpleJekyllSearch --- "+e)}function o(e){for(var t=0;t<m.length;t++){var o=m[t];e[o]||n("You must specify a "+o)}}function r(e){for(var t in g)g[t]=e[t]||g[t]}function a(e){try{return e instanceof Object&&JSON.parse(JSON.stringify(e))}catch(t){return!1}}function i(){g.resultsContainer.innerHTML=""}function d(e){g.resultsContainer.innerHTML+=e}function f(){g.searchInput.addEventListener("keyup",function(e){return 0==e.target.value.length?void i():void h(s.search(u,e.target.value))})}function h(e){if(i(),0==e.length)return d(g.noResultsText);for(var t=0;t<e.length;t++)d(c.render(g.searchResultTemplate,e[t]))}var p=this,m=["searchInput","resultsContainer","dataSource"],g={searchInput:null,resultsContainer:null,dataSource:[],searchResultTemplate:'<li><a href="{url}" title="{desc}">{title}</a></li>',noResultsText:"No results found",limit:10,fuzzy:!1};p.init=function(n){o(n),r(n),a(g.dataSource)?e(g.dataSource):t(g.dataSource)}}var o=e("./Searcher"),r=e("./Templater"),a=e("./Store"),i=e("./JSONLoader"),s=new o,c=new r,u=new a,l=new i;t.SimpleJekyllSearch=new n}(window,document)},{"./JSONLoader":1,"./Searcher":4,"./Store":5,"./Templater":6}]},{},[7]),function(e,t){function n(){m.removeClass("menuOut"),h.off("click",o),p.off("click",n),h.removeClass("opacity03")}function o(e){e.preventDefault(),n()}function r(){function t(){if(c&&u){var e=r+i,t="Sei der erste Glossboss der diesen Beitrag teilt!";r===i&&(e/=2),e>1&&(t=e+" Glossbosse haben diesen Beitrag bereits geteilt!"),clearInterval(s),a.text(t)}}console.log("Get Shares");var n="https://graph.facebook.com/"+e.location.href,o=n.slice(0,n.length-1),r=0,i=0,s=setInterval(t,100),c=!1,u=!1;ajax({method:"GET",url:n,useJSON:!0,success:function(e){r=e.shares,c=!0}}),ajax({method:"GET",url:o,useJSON:!0,success:function(e){i=e.shares,u=!0}})}var a=$("#sharecounter"),i=($("#search_reset"),$(".post--sharing")),s=$(".scroll-top"),c=$(".showCommentsContainer"),u=($(".page-heading"),$("#header-style")),l=$(".cookies-hinweis"),d=$("#cookies_acc"),f=$("#slidemenutoggle"),h=$("#fullpage"),p=$(".menucontent a.closeSlideMenuOnClick"),m=$(".slidemenu");$(".menucontent");n(),f.on("click",function(){m[0].classList.contains("menuOut")?(h.on("click",o),p.on("click",n)):(h.addClass("opacity03"),m.addClass("menuOut"),setTimeout(function(){h.on("click",o),p.on("click",n)},50))});var g=(function(){$(".post--content a")._forEach(function(e){e.setAttribute("target","_blank")}),$(".autor-box a")._forEach(function(e){e.setAttribute("target","_blank")})}(),function(){function e(){$("li[data-author]").style("display","none")}e(),$("span[data-authorToggle]").on("click",function(){console.log("clicked on an author :)"),e();var t=this.getAttribute("data-authorToggle");$("li[data-author="+t+"]").style("display","block")})}(),function(){localStorage.getItem("GLOSSBOSS_COOKIES_ACCEPTED")||l.style("display","block"),d.on("click",function(){l.style("display","none"),localStorage.setItem("GLOSSBOSS_COOKIES_ACCEPTED","1")})}(),function(){if(i&&navigator.userAgent.match(/(iPhone)/g)){var e=$(".share--whatsapp");e.style("display","inline-block"),e[0].href="WhatsApp://send?text="+document.title+": "+location.href}}(),function(){if(randomHeader){var e=["merc-8.jpg","1mcoupe.jpg","530dteamwork.jpg","DSC00627.jpg","DSC00624.jpg","965turbo.jpg","9914s1.jpg","997cabrio.jpg","991turbos.jpg","997grau.jpg","997rot.jpg","alfagtv.jpg","audir8.jpg","audis5.jpg","bmw2002.jpg","eosschwarz.jpg","golf7gtd.jpg","lotuselise.jpg","m3csl.jpg","shelby.jpg","mclaren.jpg"];random=Math.floor(Math.random()*(e.length-1));var t="https://glossbossimages.s3.eu-central-1.amazonaws.com/headerimg/"+e[random];u.html("header {background: "+headerGradient+", url("+t+") center 50%; background-size:cover}")}}(),["/spenden/","/mischungsrechner/","/impressum/","/","/blog-abonnieren/","/kontakt/","/preview/"]),v=!0;g.map(function(e){location.pathname===e&&(v=!1)}),v&&r();var y=function(){s.on("click",function(){f.scrollTo()}),c.on("click",function(){var e="glossboss";!function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="//"+e+".disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(t)}(),c.style("display","none")})};y()}(window,document),function(e,t){var n,o=$(".post--list"),r=$("#post--list__container"),a=$("#page-heading"),i=$("#loadmoreajax"),s=0,c=15,u=5,l={routes:[],add:function(e,t){return this.routes.push({re:e,fn:t}),this},checkRoute:function(e){for(var t in this.routes){var n=e.match(this.routes[t].re);if(n)return n.shift(),this.routes[t].fn.apply({},n),this}try{$("#indexContainer")&&!e&&ItseMeIndex&&this.parser("index","Die neuesten Beiträge",!0)}catch(o){console.log("i dont care: "+o)}},getPosts:function(e,t,o){s=0,n=[],e.filter(function(e){return e.category.toLowerCase()===t||o||"alle"===t}).map(function(e){if(c>s){var t=$(".post--list").html();$(".post--list").html(t+e.card),s++}n.push(e.card)}),$("#indexContainer li").each(function(e){getCurDate-e.getAttribute("data-published");postDate=e.getAttribute("data-published").split("-"),getCurDate[0]===postDate[0]&&getCurDate[1]===postDate[1]&&(e.innerHTML='<span class="post--new">NEU</span>'+e.innerHTML)}),r.removeClass("opacity-0"),a.removeClass("opacity-0"),loader(0),$(".post--list li").length<c?i.style("display","none"):i.style("display","block"),i[0].onclick=function(e){postListLI=$(".post--list li"),o&&"alle"!=location.hash&&(location.hash="alle");var t=0;showDelay=function(e,t){setTimeout(function(){$(".post--list li")[e].classList.remove("displayNone")},t)};for(var r=0;u>r;r++)if($(".post--list")[0].innerHTML+=n[s],$(".post--list li")[s].classList.add("displayNone"),t+=100,showDelay(s,t),s++,!n[s])return void i.style("display","none")}},parser:function(e,t,n){$("#toggleMenu")[0].checked=!1,$("#searchWrapper").style("display","none"),markActiveLinkNavbar(e);var s=e.charAt(0).toUpperCase()+e.slice(1,e.length);return t=t||s,loader(1),i.style("display","none"),a.addClass("opacity-0"),a.text(t),o.html(" "),r.addClass("opacity-0"),"suche"===e?(r.removeClass("opacity-0"),searchRender(),void loader(0)):void ajax({method:"GET",useJSON:!0,url:postJSONCache,success:function(t){this.getPosts(t,e,n)}.bind(this)})}};l.add("allgemein",function(){l.parser("allgemein","Allgemein")}),l.add("anleitung",function(){l.parser("anleitungen","Anleitungen")}),l.add("pflegeberichte",function(){l.parser("pflegeberichte","Pflegeberichte")}),l.add("produkttest",function(){l.parser("produkttest","Produkttests")}),l.add("suche",function(){l.parser("suche")}),l.add("test",function(){l.parser("test","TESTSEITE!")}),l.add("alle",function(){l.parser("alle","Alle Beiträge"),setTimeout(function(){$("#loadmoreajax").scrollTo(),$("#loadmoreajax")[0].click()},50)}),window.addEventListener("hashchange",function(){l.checkRoute(location.hash)}),window.addEventListener("load",function(){l.checkRoute(location.hash)})}(window,document),function(e,t){function n(e,t){if(""===e.value())return c.style("visibility",""),e.addClass("form__error"),loader(0),appendModal("Unvollständige Angabe: "+e[0].placeholder,3e3,"error"),!1;if(t){var n=/\S+@\S+\.\S+/;if(!n.test(e.value()))return l.addClass("form__error"),appendModal("eMail Adresse ungültig!",2e3,"error"),c.style("visibility",""),loader(0),!1}return!0}function o(){u.removeClass("form__error"),l.removeClass("form__error"),d.removeClass("form__error"),c.style("visibility","hidden"),loader(1)}function r(){p.style("opacity","1"),c.enable(),c.removeClass("cursor-not-allowed"),h.Mail=$(".selectGlossboss input[name=glossboss]:checked").value(),h.Name=$(".selectGlossboss input[name=glossboss]:checked")[0].getAttribute("data-boss")}function a(){p.style("opacity",".3"),c.disable(),c.addClass("cursor-not-allowed"),s()}function i(){o();var e=n(u),t=n(l,!0),r=n(d);if(e&&t&&r){var a={key:m,message:{text:d.value(),subject:"GLOSSBOSS Kontaktanfrage",from_email:l.value(),from_name:u.value(),to:[{email:h.Mail,name:h.Name,type:"to"}],bcc_address:"ntwcklng@gmail.com",headers:{"Reply-To":l.value()}},async:!1,ip_pool:"Main Pool"};ajax({method:"POST",url:"https://mandrillapp.com/api/1.0/messages/send.json",data:a,useJSON:!0,success:function(e){loader(1),"sent"===e[0].status&&(c.style("visibility","hidden"),loader(0),appendModal("Danke für deine eMail! Wir werden so schnell wie möglich darauf antworten.",4500))}})}}function s(){c.on("click",function(e){e.preventDefault(),i()},!1),f.on("change",r)}var c=$("#SENDEN"),u=($("#form_msg"),$("#name")),l=$("#xyz"),d=$("#msg"),f=$(".selectGlossboss input[name=glossboss]"),h={},p=$("#kontakt_inputs"),m="R61bXP70NEnJXC2c__cvgg";a()}(window,document);