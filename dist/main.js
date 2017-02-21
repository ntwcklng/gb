"use strict";function getPosts(e){return getPostDB().then(function(s){postDB=s.filter(function(s){return"alle"===e?s.category.toLowerCase()===s.category.toLowerCase():s.category.toLowerCase()===e})})}function appendRandomImage(){var e=$('<div class="randomHeroImg displayNone">GLOSSBOSS</div>'),s=Math.floor(Math.random()*(headerImages.length-1)),a=headerImages[s];return e.attr("style","background: "+headerGradient+", url("+a+") bottom left no-repeat"),e}function loadPosts(){var e=0,s=0,a=50;postDB.map(function(t,n){return e=$(".post--list li").length,(e<MAXINDEX&&s<MAXINDEX||n>=e&&s<MAXRELOAD)&&($(t.card).appendTo($POSTLIST),a+=100,s++,e>=6&&e%6===0&&$(appendRandomImage()).appendTo($POSTLIST),setTimeout(function(){$(".post--list li").eq(postsLoaded).removeClass("displayNone"),$(".randomHeroImg").removeClass("displayNone"),postsLoaded++},a),n===postDB.length-1&&$LOADMOREBTN.slideUp("fast")),0})}function initPostLoader(){var e=$("#kategorieSeite");e.length>0&&(loadingScreen(!0),category=e.attr("data-cat"),getPosts(category).then(function(){$LOADMOREBTN.fadeIn("slow"),$LOADMOREBTN.on("click",loadPosts),loadPosts(),loadingScreen(!1)}))}function scrollDelay(e,s){isScrolling||(isScrolling=!0,setTimeout(function(){s(),isScrolling=!1},e))}function getPostDB(){return $.getJSON("/posts.json")}function appendLatestPosts(e){var s=getPostDB();s.then(function(s){s.filter(function(s){return s.author===e}).map(function(e,s){s>=5||$autorBox.append($('<li><a href="'+e.url+'">'+e.title+"</a></li>"))})})}function loadingScreen(e){var s=$("#loading");e?s.show():s.hide()}function updateSliderMarkPos(){$sliderPosMarks.find("span").each(function(e,s){$(s).removeClass("active")}),$(".slider-position-marks span:nth-child("+(slidePos+1)+")").addClass("active")}function swapImage(){updateSliderMarkPos(),$img.fadeOut("fast",function(){$img.attr("src",sliderItems[slidePos].img),$url.attr("href",sliderItems[slidePos].url),$img.fadeIn("slow")})}function startSliderInterval(){clearInterval(sliderInt),sliderInt=setInterval(function(){nextImage()},sliderIntTime)}function prevImage(){slidePos--,slidePos<0&&(slidePos=maxSliderImages-1),swapImage(),startSliderInterval()}function nextImage(){slidePos++,slidePos===maxSliderImages&&(slidePos=0),swapImage(),startSliderInterval()}function initSlider(){$(".js-slider-images").each(function(e,s){sliderItems[e]={img:$(s).attr("src"),url:$(s).attr("data-url")},maxSliderImages++,$sliderPosMarks.append($("<span> </span>"))}),$img.attr("src",sliderItems[0].img),$url.attr("href",sliderItems[0].url),$sliderContainer.removeClass("displayNone"),startSliderInterval(),updateSliderMarkPos()}function validateEmail(e){var s=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return s.test(e)}function checkQuestion(e){var s=0;return e.split("").map(function(e){">"!==e&&"<"!==e||s++}),s>=2}function resetInputs(){askGlossbossEmail.removeClass("formerror"),askGlossbossName.removeClass("formerror"),askGlossbossFrage.removeClass("formerror")}function checkInputs(){var e=0;return checkQuestion(askGlossbossFrage.val())&&e++,askGlossbossName.val().length<=2&&(askGlossbossName.addClass("formerror"),e++),askGlossbossFrage.val().length<=2&&(askGlossbossFrage.addClass("formerror"),e++),(!validateEmail(askGlossbossEmail.val())||askGlossbossEmail.val().length<=2)&&(askGlossbossEmail.addClass("formerror"),e++),$("#askGlossboss-message").val().length>1&&e++,0===e}var headerImages=["https://glossbossimages.s3.eu-central-1.amazonaws.com/alexbrose/E30_Pflegebericht/001.jpg","https://glossbossimages.s3.eu-central-1.amazonaws.com/jones/berichte/m4gts/0079.jpg","https://glossbossimages.s3.eu-central-1.amazonaws.com/ralf/porsche910/DSC01937.jpg","https://glossbossimages.s3.eu-central-1.amazonaws.com/ralf/porsche910/DSC01933.jpg","https://glossbossimages.s3.eu-central-1.amazonaws.com/chiller/aston-martin/Aston097.jpg","https://glossbossimages.s3.eu-central-1.amazonaws.com/jones/berichte/bmw_m6_coupe/0021.jpg","https://glossbossimages.s3.eu-central-1.amazonaws.com/RBdetailing/focus-rs-500-matt/RS500-34.jpg","https://glossbossimages.s3.eu-central-1.amazonaws.com/jones/berichte/m3_csl_erdi/0070.jpg","https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/porsche993_schwarz_csl_exo/DSC01893.jpg","https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/opel_admiral/DSC00858.jpg","https://glossbossimages.s3.eu-central-1.amazonaws.com/RBdetailing/gtr/DSC_1588.jpg","https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/amg-gts-grau/DSC01439.jpg"];window.headerImages=headerImages;var category=null,postDB=[],postsLoaded=0,MAXRELOAD=5,MAXINDEX=15,$POSTLIST=$(".post--list"),$LOADMOREBTN=$("#loadmoreajax");$(function(){initPostLoader()});var $cookieAlert=$(".cookies-hinweis"),$cookieAccept=$("#cookies_acc"),$autorBox=$(".autor-box-moreposts"),$headerMenu=$(".header-menu"),$headerMenuPlaceholder=$(".header-menu-placeholder"),shouldStickPos=$headerMenu.offset().top,$searchForm=$("#search_form"),isScrolling=!1,totalHeight=parseInt(100+$headerMenu.outerHeight());$headerMenuPlaceholder.css({height:totalHeight});var stickyNav=function(){$(window).scrollTop()>=shouldStickPos?($headerMenu.addClass("sticky"),$headerMenuPlaceholder.addClass("sticky-placeholder")):($headerMenu.removeClass("sticky"),$headerMenuPlaceholder.removeClass("sticky-placeholder"))};$(window).on("scroll",function(){scrollDelay(100,stickyNav)}),$autorBox.length>0&&appendLatestPosts($autorBox.attr("data-author"));var acceptCookies=function(){localStorage.getItem("GLOSSBOSS_COOKIES_ACCEPTED")||($cookieAlert.show(),$cookieAccept.on("click",function(){$cookieAlert.hide(),localStorage.setItem("GLOSSBOSS_COOKIES_ACCEPTED","1")}))};acceptCookies();var randomHeader=function(){if(randomHeader){var e=$("#header-style"),s=Math.floor(Math.random()*(headerImages.length-1)),a=headerImages[s];e.html("\n        header {background: "+headerGradient+",\n        url("+a+") center 50% no-repeat; background-size:cover;}\n      ")}}(),addWhatsAppShareButton=function(){if($(".post--sharing")&&navigator.userAgent.match(/(iPhone)/g)){var e=$(".share--whatsapp");e.css("display","inline-block"),e.attr("href","WhatsApp://send?text="+document.title+": "+location.href)}};addWhatsAppShareButton();var addEvents=function(){$(".scroll-top").on("click",function(){$("body,html").animate({scrollTop:0},500)}),$searchForm.on("submit",function(e){e.preventDefault(),$searchForm.serialize();var s=$("#search_input_nav").val();location.href="/suche/?q="+s}),$(".showCommentsContainer").on("click",function(){var e="glossboss",s=document.createElement("script");s.type="text/javascript",s.async=!0,s.src="//"+e+".disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(s),$(".showCommentsContainer").fadeOut("fast")})};addEvents();var part1=$("#mischungInput1"),part2=$("#mischungInput2"),result=$("#mischungResult"),resultMl=$("#mischung--highlight"),mischungInputs=$("#mischungsrechner input"),predefinedDil=$(".mischungenpredefined"),predefinedValues={},Mischungsrechner={};Mischungsrechner.initialize=function(){predefinedDil.on("click",function(){var e=$(this).html().split(":");predefinedValues={part1:e[0],part2:e[1]},part1.val(predefinedValues.part1),part2.val(predefinedValues.part2),Mischungsrechner.updateEvent()}).bind(void 0),mischungInputs.on("change",Mischungsrechner.updateEvent),mischungInputs.on("paste",Mischungsrechner.updateEvent)},Mischungsrechner.calculateDil=function(){var e=part1.val(),s=part2.val(),a=Mischungsrechner.getBottleValue(),t=parseInt(e)+parseInt(s),n=parseInt(a)/t,o=Math.round(n*e).toFixed(2),r=Math.round(n*s).toFixed(2),i=o.slice(0,o.length-3),l=r.slice(0,r.length-3);return i+"ml:"+l+"ml"},Mischungsrechner.updateOutput=function(e){result.show(),resultMl.text(e)},Mischungsrechner.getBottleValue=function(){var e=$('input[type="radio"]:checked').val()||0;return e>0?e:0},Mischungsrechner.shouldOutput=function(){var e=Mischungsrechner.getBottleValue();return part1.val()>0&&part2.val()>0&&e>0},Mischungsrechner.updateEvent=function(){var e=Mischungsrechner.shouldOutput();e&&Mischungsrechner.updateOutput(Mischungsrechner.calculateDil())},$(function(){Mischungsrechner.initialize()});var sliderItems={},slidePos=0,sliderInt=void 0,maxSliderImages=0,$img=$("#slider-item-img"),$url=$("#slider-item-a"),$sliderContainer=$(".slider"),$sliderPosMarks=$(".slider-position-marks"),sliderIntTime=5e3;$(".js-slide-prev").on("click",function(e){e.preventDefault(),prevImage()}),$(".js-slide-next").on("click",function(e){e.preventDefault(),nextImage()}),$(".slider").length>0&&initSlider();var askGlossbossSubmit=$("#askGlossboss-Submit"),$form=$("#askGlossboss-Form"),askGlossbossEmail=$("input[name=Email]"),askGlossbossName=$("input[name=Name]"),askGlossbossFrage=$("textarea[name=Frage]"),$kontaktModal=$(".js-modal-kontakt");askGlossbossSubmit.on("click",function(e){e.preventDefault(),resetInputs(),checkInputs()&&$form.submit()}),$form.submit(function(e){e.preventDefault(),$.post($form.attr("action"),$form.serialize()).then(function(){$kontaktModal.fadeIn(),askGlossbossSubmit.addClass("btn-disabled"),setTimeout(function(){$kontaktModal.fadeOut()},3e3)})}),$kontaktModal.hide();var prepareSearch=function(){var e=$("#searchWrapper");try{e.length>0&&($("#search-input").focus(),$("#search_reset").on("click",function(){$("#search-input").val(""),$("#results-container").html("")}),e.show(),SimpleJekyllSearch.init({templateMiddleware:function(e,s,a){return a.classList.remove("displayNone")},searchInput:document.getElementById("search-input"),resultsContainer:document.getElementById("results-container"),dataSource:"/posts.json",searchResultTemplate:"{card}",noResultsText:'<li>Nichts passendes dabei. Hast du eine Idee für einen Artikel? <a style="text-align:center" href="mailto:mail@glossboss.de">Kontaktiere uns!</a></li>',limit:25,fuzzy:!1}),location.search.length>3&&(loadingScreen(1),$("#search-input").val(location.search.substr(3,location.search.length)),$.getJSON("/posts.json").then(function(){setTimeout(function(){SimpleJekyllSearch.renderExternal(),loadingScreen(0)},200)})))}catch(e){throw new Error(e)}};prepareSearch();var $sideMenu=$("#sidemenu"),$fullPage=$("#fullpage"),$toggleNav=$("#mainnav"),$closeSideMenu=$(".js-close-sidemenu"),$body=$("body"),SideMenu={};SideMenu.close=function(){$sideMenu.removeClass("menuOut"),$fullPage.off("click",SideMenu.closeFullpage),$body.off("keydown",SideMenu.closeOnEscape),$fullPage.removeClass("opacity03"),$toggleNav.attr("aria-expanded","false"),$toggleNav.attr("aria-label","Menü"),$toggleNav.attr("aria-controls","sidemenu"),$sideMenu.attr("aria-hidden","true"),$sideMenu.attr("aria-labelledby","mainnav")},SideMenu.open=function(e){e.stopPropagation(),e.preventDefault(),$sideMenu.hasClass("menuOut")||($fullPage.addClass("opacity03"),$sideMenu.addClass("menuOut")),setTimeout(function(){$toggleNav.attr("aria-expanded","true"),$sideMenu.attr("aria-hidden","false"),$fullPage.on("click",SideMenu.closeFullpage),$body.on("keydown",SideMenu.closeOnEscape),$closeSideMenu.on("click",SideMenu.close)},100)},SideMenu.closeFullpage=function(e){e.preventDefault(),SideMenu.close()},SideMenu.closeOnEscape=function(e){27===e.which&&(e.stopPropagation(),e.preventDefault(),SideMenu.close())},SideMenu.initialize=function(){SideMenu.close(),$toggleNav.on("click",SideMenu.open)},SideMenu.initialize();