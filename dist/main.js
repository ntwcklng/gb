"use strict";function generateAndAppendPost(e,t){var s='\n  <li class="blogPostCard displayNone '+(e.highlight&&"blogPostCard--highlight")+'">\n    <a href="'+e.url+'"><div class="blogPostCard--image" style="background:url('+e.header_image+') 50% 50% no-repeat;background-size:cover;">'+(e.gesponsort&&'<div class="blogPostCard--gesponsort">gesponsort</div>')+'</div></a>\n    <div class="blogPostCard--date">'+e.date+" | "+e.category+'</div>\n    <a class="blogPostCard--title" href="'+e.url+'">'+e.title+'</a>\n    <div class="blogPostCard--titleSeperator"></div>\n  \n    <a class="blogPostCard--subTitle" href="'+e.url+'">'+e.subtitle+'</a>\n  \n    <div class="blogPostCard--readMore">\n      <div class="buttonWrapper">\n        <a href="'+e.url+'" class="button_readMore">Weiterlesen</a>\n      </div>\n  </div>\n  </li>\n  \n  \n  ';return e.title&&$(s).appendTo(t)}function getPosts(e){return getPostDB().then(function(t){postDB=t.filter(function(t){return"alle"===e?t.category.toLowerCase()===t.category.toLowerCase():t.category.toLowerCase()===e})})}function appendRandomImage(){var e=$('<div class="randomHeroImg displayNone">GLOSSBOSS</div>'),t=Math.floor(Math.random()*(headerImages.length-1)),s=headerImages[t];return e.attr("style","background: "+headerGradient+", url("+s+") bottom left no-repeat"),e}function loadPosts(){var e=0,t=0,s=50;postDB.map(function(a,n){return e=$(".post--list li").length,(e<MAXINDEX&&t<MAXINDEX||n>=e&&t<MAXRELOAD)&&(generateAndAppendPost(a,$POSTLIST),s+=100,t++,e>=6&&e%6==0&&$(appendRandomImage()).appendTo($POSTLIST),setTimeout(function(){$(".post--list li").eq(postsLoaded).removeClass("displayNone"),$(".randomHeroImg").removeClass("displayNone"),postsLoaded++},s),n===postDB.length-1&&$LOADMOREBTN.slideUp("fast")),0})}function initPostLoader(){var e=$("#kategorieSeite");e.length>0&&(loadingScreen(!0),category=e.attr("data-cat"),getPosts(category).then(function(){$LOADMOREBTN.fadeIn("slow"),$LOADMOREBTN.on("click",loadPosts),loadPosts(),loadingScreen(!1)}))}function scrollDelay(e,t){isScrolling||(isScrolling=!0,setTimeout(function(){t(),isScrolling=!1},e))}function getPostDB(){return $.getJSON(postsVersion)}function appendLatestPosts(e){getPostDB().then(function(t){t.filter(function(t){return t.author===e}).map(function(e,t){t>=5||$autorBox.append($('<li><a href="'+e.url+'">'+e.title+"</a></li>"))})})}function loadingScreen(e){var t=$("#loading");e?t.show():t.hide()}function updateSliderMarkPos(){$sliderPosMarks.find("span").each(function(e,t){$(t).removeClass("active")}),$(".slider-position-marks span:nth-child("+(slidePos+1)+")").addClass("active")}function swapImage(){updateSliderMarkPos(),$img.fadeOut("fast",function(){$img.attr("src",sliderItems[slidePos].img),$url.attr("href",sliderItems[slidePos].url),$img.fadeIn("slow")})}function startSliderInterval(){clearInterval(sliderInt),sliderInt=setInterval(function(){nextImage()},sliderIntTime)}function prevImage(){slidePos--,slidePos<0&&(slidePos=maxSliderImages-1),swapImage(),startSliderInterval()}function nextImage(){slidePos++,slidePos===maxSliderImages&&(slidePos=0),swapImage(),startSliderInterval()}function initSlider(){$(".js-slider-images").each(function(e,t){sliderItems[e]={img:$(t).attr("src"),url:$(t).attr("data-url")},maxSliderImages++,$sliderPosMarks.append($("<span> </span>"))}),$img.attr("src",sliderItems[0].img),$url.attr("href",sliderItems[0].url),$sliderContainer.removeClass("displayNone"),startSliderInterval(),updateSliderMarkPos()}var headerImages=["https://glossbossimages.s3.eu-central-1.amazonaws.com/alexbrose/E30_Pflegebericht/001.jpg","https://glossbossimages.s3.eu-central-1.amazonaws.com/jones/berichte/m4gts/0079.jpg","https://glossbossimages.s3.eu-central-1.amazonaws.com/ralf/porsche910/DSC01937.jpg","https://glossbossimages.s3.eu-central-1.amazonaws.com/ralf/porsche910/DSC01933.jpg","https://glossbossimages.s3.eu-central-1.amazonaws.com/chiller/aston-martin/Aston097.jpg","https://glossbossimages.s3.eu-central-1.amazonaws.com/jones/berichte/bmw_m6_coupe/0021.jpg","https://glossbossimages.s3.eu-central-1.amazonaws.com/RBdetailing/focus-rs-500-matt/RS500-34.jpg","https://glossbossimages.s3.eu-central-1.amazonaws.com/jones/berichte/m3_csl_erdi/0070.jpg","https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/porsche993_schwarz_csl_exo/DSC01893.jpg","https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/opel_admiral/DSC00858.jpg","https://glossbossimages.s3.eu-central-1.amazonaws.com/RBdetailing/gtr/DSC_1588.jpg","https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/amg-gts-grau/DSC01439.jpg"];window.headerImages=headerImages;var category=null,postDB=[],postsLoaded=0,MAXRELOAD=5,MAXINDEX=15,$POSTLIST=$(".post--list"),$LOADMOREBTN=$("#loadmoreajax");$(function(){initPostLoader()});var $cookieAlert=$(".cookies-hinweis"),$cookieAccept=$("#cookies_acc"),$autorBox=$(".autor-box-moreposts"),$headerMenu=$(".header-menu"),$headerMenuPlaceholder=$(".header-menu-placeholder"),shouldStickPos=$headerMenu.offset().top,$searchForm=$("#search_form"),$showPhonenumber=$("#showPhonenumber"),isScrolling=!1,clicked=1,totalHeight=parseInt(100+$headerMenu.outerHeight());$headerMenuPlaceholder.css({height:totalHeight});var stickyNav=function(){$(window).scrollTop()>=shouldStickPos?($headerMenu.addClass("sticky"),$headerMenuPlaceholder.addClass("sticky-placeholder")):($headerMenu.removeClass("sticky"),$headerMenuPlaceholder.removeClass("sticky-placeholder"))};$(window).on("scroll",function(){scrollDelay(100,stickyNav)}),$autorBox.length>0&&appendLatestPosts($autorBox.attr("data-author"));var acceptCookies=function(){localStorage.getItem("GLOSSBOSS_COOKIES_ACCEPTED")||($cookieAlert.show(),$cookieAccept.on("click",function(){$cookieAlert.hide(),localStorage.setItem("GLOSSBOSS_COOKIES_ACCEPTED","1")}))};acceptCookies();var randomHeader=function(){if(randomHeader){var e=$("#header-style"),t=Math.floor(Math.random()*(headerImages.length-1)),s=headerImages[t];e.html("\n        header {background: "+headerGradient+",\n        url("+s+") center 50% no-repeat; background-size:cover;}\n      ")}}(),addWhatsAppShareButton=function(){if($(".post--sharing")&&navigator.userAgent.match(/(iPhone)/g)){var e=$(".share--whatsapp");e.css("display","inline-block"),e.attr("href","WhatsApp://send?text="+document.title+": "+location.href)}};addWhatsAppShareButton();var addEvents=function(){$(".scroll-top").on("click",function(){$("body,html").animate({scrollTop:0},500)}),$searchForm.on("submit",function(e){e.preventDefault(),$searchForm.serialize();var t=$("#search_input_nav").val();location.href="/suche/?q="+t}),$showPhonenumber.on("click",function(){switch(clicked){case 1:$showPhonenumber.text("Achtung! Kein Telefonsupport zum Thema Autopflege!");break;case 2:$showPhonenumber.text("01703262412"),$showPhonenumber.off("click");break;default:return}clicked++}),$(".showCommentsContainer").on("click",function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="//glossboss.disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e),$(".showCommentsContainer").fadeOut("fast")})};addEvents();var part1=$("#mischungInput1"),part2=$("#mischungInput2"),result=$("#mischungResult"),resultMl=$("#mischung--highlight"),mischungInputs=$("#mischungsrechner input"),predefinedDil=$(".mischungenpredefined"),predefinedValues={},Mischungsrechner={};Mischungsrechner.initialize=function(){predefinedDil.on("click",function(){var e=$(this).html().split(":");predefinedValues={part1:e[0],part2:e[1]},part1.val(predefinedValues.part1),part2.val(predefinedValues.part2),Mischungsrechner.updateEvent()}).bind(void 0),mischungInputs.on("change",Mischungsrechner.updateEvent),mischungInputs.on("paste",Mischungsrechner.updateEvent)},Mischungsrechner.calculateDil=function(){var e=part1.val(),t=part2.val(),s=Mischungsrechner.getBottleValue(),a=parseInt(e)+parseInt(t),n=parseInt(s)/a,o=Math.round(n*e).toFixed(2),r=Math.round(n*t).toFixed(2);return o.slice(0,o.length-3)+"ml:"+r.slice(0,r.length-3)+"ml"},Mischungsrechner.updateOutput=function(e){result.show(),resultMl.text(e)},Mischungsrechner.getBottleValue=function(){var e=$('input[type="radio"]:checked').val()||0;return e>0?e:0},Mischungsrechner.shouldOutput=function(){var e=Mischungsrechner.getBottleValue();return part1.val()>0&&part2.val()>0&&e>0},Mischungsrechner.updateEvent=function(){Mischungsrechner.shouldOutput()&&Mischungsrechner.updateOutput(Mischungsrechner.calculateDil())},$(function(){Mischungsrechner.initialize()});var sliderItems={},slidePos=0,sliderInt=void 0,maxSliderImages=0,$img=$("#slider-item-img"),$url=$("#slider-item-a"),$sliderContainer=$(".slider"),$sliderPosMarks=$(".slider-position-marks"),sliderIntTime=5e3;$(".js-slide-prev").on("click",function(e){e.preventDefault(),prevImage()}),$(".js-slide-next").on("click",function(e){e.preventDefault(),nextImage()}),$(".slider").length>0&&initSlider();var $sideMenu=$("#sidemenu"),$fullPage=$("#fullpage"),$toggleNav=$("#mainnav"),$closeSideMenu=$(".js-close-sidemenu"),$body=$("body"),SideMenu={};SideMenu.close=function(){$sideMenu.removeClass("menuOut"),$fullPage.off("click",SideMenu.closeFullpage),$body.off("keydown",SideMenu.closeOnEscape),$fullPage.removeClass("opacity03"),$toggleNav.attr("aria-expanded","false"),$toggleNav.attr("aria-label","Menü"),$toggleNav.attr("aria-controls","sidemenu"),$sideMenu.attr("aria-hidden","true"),$sideMenu.attr("aria-labelledby","mainnav")},SideMenu.open=function(e){e.stopPropagation(),e.preventDefault(),$sideMenu.hasClass("menuOut")||($fullPage.addClass("opacity03"),$sideMenu.addClass("menuOut")),setTimeout(function(){$toggleNav.attr("aria-expanded","true"),$sideMenu.attr("aria-hidden","false"),$fullPage.on("click",SideMenu.closeFullpage),$body.on("keydown",SideMenu.closeOnEscape),$closeSideMenu.on("click",SideMenu.close)},100)},SideMenu.closeFullpage=function(e){e.preventDefault(),SideMenu.close()},SideMenu.closeOnEscape=function(e){27===e.which&&(e.stopPropagation(),e.preventDefault(),SideMenu.close())},SideMenu.initialize=function(){SideMenu.close(),$toggleNav.on("click",SideMenu.open)},SideMenu.initialize();