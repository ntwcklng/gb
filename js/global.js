document.addEventListener('DOMContentLoaded', function() {(function() {

	var debug = true,
	ls        = localStorage,
	i, conf, postArr, hash;

	conf = {
		maxPostReload: 5,
		maxIndexPosts: 10
	};

	_ = function( elem ) {

		elemSliced   = elem.slice(1, elem.length);
		elemSelector = elem.charAt(0);
		returnNode   = [];

		if ( /[^\w#.-]/.test(elem) ) {
			//do the querySelectorAll, if:
			//* there is a whitespace
			//* there is a special char except # . -
			//example: "input[type="radio"]:checked" OR
			//".post-content p img"

			getElements = document.querySelectorAll(elem);
			getLength = getElements.length;

			for( i = 0; i < getElements.length; i++ ) {

				returnNode.push(getElements[i]);

			}

		} else {

			switch ( elemSelector ) {
				//get the IDs
				case '#':

					returnNode.push(document.getElementById( elemSliced ));
					break;
				//get the classes
				case '.':

					getClassNames = document.getElementsByClassName( elemSliced );

					for( i = 0; i < getClassNames.length; i++ ) {

						returnNode.push( getClassNames[i] );

					}
					break;
				//get the tag names
				default:

					getTagNames = document.getElementsByTagName(elem);
					for( i = 0; i < getTagNames.length; i++ ) {

						returnNode.push( getTagNames[i] );

					}
					break;
			}
		}  

		returnNodeFinal = ( returnNode.length > 1 ) ? returnNode : returnNode[0];

		if( returnNodeFinal ) {

			return returnNodeFinal;

		} else {

			return;

		}
	};

	Element.prototype.addClass = function( className ) {

		_addClass = function( elem ) {

			if( elem.classList ) {

				elem.classList.add(className);

			} else {

				elem.className += ' ' + className;
			}
		};
		return _addClass( this );
	};


	Element.prototype.removeClass = function( className ) {

		_removeClass = function( elem ) {

			if ( elem.classList ) {

				elem.classList.remove(className);

			} else {

				elem.className = elem.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
			}
		};
		return _removeClass( this );
	};

	Element.prototype.hide = function () {

		_hide = function( elem ) {

			elem.style.display = 'none';
		};

		return _hide( this );
	};
	/**
	 * Hide/Show the Loader
	 * @param  {[BOOL]} show [1 = show, 0 = hide]
	 */
	loader = function ( show ) {

		_self = _("#loading");

		if ( show ) {

			_self.style.opacity = '1';
			_self.style.display = 'block';

		} else {

			_self.style.opacity = '0';
			_self.style.display = 'none';

		}
	};
	/**
	 * Jump to a DOM Element
	 * @param  {[type]} elem [use _('element')]
	 */
	jumpTo = function ( elem ) {

			theOffset = elem.getBoundingClientRect();
			window.scrollTo(0,theOffset.top + document.body.scrollTop - 10);
	};

	log = function ( arg ) {

		if ( debug ) {

			console.log(arg);

		}

	};

	/**
	 * add acive CSS Class to the linklist item
	 * @return null
	 */
	markActiveLinklist = function() {
		_(".linklistloop a").forEach(function(_self) {

			if(_self.getAttribute("data-kat") === hash ) {

				_self.addClass("cat--active");
				setTimeout(function() {
					jumpTo(_self);
				}, 50);
				

			} else {

				_self.removeClass("cat--active");

			}
		});
	};

	/**
	 * check if this article is already read
	 * @param  {[String]} post [the Post]
	 * @param  {[String]} li   [add read-mark to the Listitem]
	 */
	checkRead = function( post, li ) {

		if(ls.getItem(post)) {

			li.addClass("is-viewed");
			parseDate = new Date(ls.getItem(post));

			tag = parseDate.getDate();
			monat = parseDate.getMonth()+1;
			jahr = parseDate.getFullYear();

			li.querySelectorAll(".post--read")[0].textContent = 'Gelesen am: ' + tag + '.' + monat + '.' + jahr + ' | ';
		}
	};
	router = {

		routes: [],
		add: function(hash, func) {

			this.routes.push({re: hash, func: func});
			return this;
		},
		checker: function(hash) {

			for(var i in this.routes) {

				var match = hash.match(this.routes[i].re);

				if( match ) {

					match.shift();
					this.routes[i].func.apply({}, match);
					return this;
				}
			}
			loader(false);

			if( _("#indexContainer") && !hash ) {
				this.parser('index', 'Unsere neusten Beiträge', true);

			}
		},
		parser: function( hash, title, isIndex ) {
			hashNice = hash.charAt(0).toUpperCase() + hash.slice(1,hash.length);
			title = title || hashNice;

			loader(true);

			postList = _(".post--list");
			postContainer = _("#post--list__container");
			pageHeading = _("#page-heading");
			loadmoreButton = _("#loadmoreajax");

			

			postList.innerHTML = '';
			postContainer.addClass("opacity-0");

			pageHeading.addClass("opacity-0");
			pageHeading.textContent = title;

			xhr = new XMLHttpRequest();

			markActiveLinklist();

			xhr.onreadystatechange = function(e) {

				if(xhr.readyState == 4 && xhr.status == 200) {

					post = JSON.parse(xhr.responseText,"text/json");
					numCat = 0;
					postArr = [];

					/**
					 * loop through all posts and put them in an array
					 * if the category is identical with the hash, then 
					 * append it to the postlist
					 */
					for( var i = 0; i < post.length; i++ ) {
						if(post[i].category === hash || (isIndex) || hash === 'alle') {

						
							if(numCat <= conf.maxIndexPosts) {
								_(".post--list").innerHTML += post[i].card;
								numCat++;
							}
							postArr.push(post[i].card);
						}
					}
					_(".post--list li").forEach(function(post, i) {

						checkRead(post.getAttribute("data-read"), post);

					});
					loader(false);
					pageHeading.removeClass("opacity-0");
					postContainer.removeClass("opacity-0");

					if(_(".post--list li").length <= conf.maxIndexPosts) {

						loadmoreButton.style.display = 'none';

					} else {

						loadmoreButton.style.display = 'block';
					}

				}
			};
			
			loadmoreButton.onclick = function(e) {
				e.preventDefault();
				e.stopPropagation();
				postListLI = _(".post--list li");
				if( isIndex && location.hash != 'alle' ) {
					location.hash = 'alle';
				}
				var showDelayTime = 0;
				showDelay = function(p, t) {
					setTimeout(function() {
						_(".post--list li")[p].removeClass("displayNone");
					}, t);
					
				};

				for (var i = 0; i < conf.maxPostReload; i++) {
					_(".post--list").innerHTML += postArr[numCat];
					_(".post--list li")[numCat].addClass('displayNone');
					showDelayTime += 100;
					showDelay(numCat, showDelayTime);
					numCat++;

					if(!postArr[numCat]) {
						loadmoreButton.style.display = 'none';
						return;
					}
				}

				_(".post--list li").forEach(function(post, i) {

						checkRead(post.getAttribute("data-read"), post);

				});

				return;
			};

			progressBar.style.display = 'block';
			progressBar.style.width = '5%';
			xhr.addEventListener('progress', function(_self) {

				var progressBar = _('#progressBar');

				if( _self.lengthComputable ) {

					var percentComplete = Math.floor((_self.loaded / _self.total) * 100);

					progressBar.style.width = percentComplete + '%';

					if( percentComplete === 100 ) {

						setTimeout(function() {

							progressBar.style.display = 'none';

						}, 350);
						
					}

				}
			});
			xhr.open("GET", "/posts.json", true);
			xhr.send();
		}

	};
})();
var
	linklist              = _("#linklist"),
	linklistAnchor        = _("#linklist a"),
	toggleMenuBox         = _("#toggleMenu"),
	docHeight             = window.innerHeight,
	docWidth              = window.innerWidth,
	contOverlay           = _("#containeroverlay"),
	contOverlayInner      = _("#containeroverlay-inner"),
	contImage             = _(".post--content p img"),
	breadtop              = _(".hamburger li:nth-child(1)"),
	beef                  = _(".hamburger li:nth-child(2)"),
	breadbottom           = _(".hamburger li:nth-child(3)"),
	linklistMaxHeight     = '230px',
	postsToLoad           = _('.post--list li'),
	dellocalStorage       = _('.dellocalStorage'),
	localStorageContainer = _('.localStorageContainer'),
	activeScrollResize    = false;

linklist.style.maxHeight = linklistMaxHeight;

if ( postsToLoad ) {

	postsToLoad.forEach(function(post) {

			checkRead(post.getAttribute("data-read"), post);

	});
}

function hamburgerToggle() {

	if( toggleMenuBox.checked ) {

		linklist.style.maxHeight = linklistMaxHeight;
		breadbottom.addClass("hidden");
		breadtop.addClass("rot45deg");
		beef.addClass("rot-45deg");

	} else {

		linklist.style.maxHeight = "0";
		breadbottom.removeClass("hidden");
		breadtop.removeClass("rot45deg");
		beef.removeClass("rot-45deg");

	}
}

function updateMenu() {

	docHeight = window.innerHeight;
	docWidth  = window.innerWidth;

	if( docWidth >= 750 ) {

		linklist.style.maxHeight = linklistMaxHeight;

	} else {

		hamburgerToggle();

	}
}

linklistAnchor.forEach(function(_self) {

	anchor = _self.getAttribute('href');
	_self.setAttribute('href', '/#' + anchor.slice( 1, anchor.length ));

	_self.addEventListener('click', function() {

		toggleMenuBox.click();

	});
});


updateMenu();

// if(contImage) {

// 	contImage.forEach(function(_self) {

// 		_self.addEventListener('click', function() {

// 			imgsrc = this.getAttribute('src');
// 			contOverlayInner.innerHTML = '<img src="" id="parse"><div class="containeroverlay-alt"></div>';
// 			contOverlayInner.querySelector('#parse').setAttribute('src', imgsrc);

// 			if( this.getAttribute('alt').length !== 0 ) {

// 				_(".containeroverlay-alt").innerHTML = this.getAttribute('alt');

// 			}

// 			contOverlay.addClass("scaleIn");

// 		    contOverlay.addEventListener('click', function() {

// 		    	contOverlay.removeClass("scaleIn");

// 		    });
// 		});
// 	});
// }

(function(ci) {
	if(ci) {

		contImage.forEach(function(_self) {

			_self.addEventListener('click', function() {

				imgsrc = this.getAttribute('src');
				contOverlayInner.innerHTML = '<img src="" id="parse"><div class="containeroverlay-alt"></div>';
				contOverlayInner.querySelector('#parse').setAttribute('src', imgsrc);

				if( this.getAttribute('alt').length !== 0 ) {

					_(".containeroverlay-alt").innerHTML = this.getAttribute('alt');

				}

				contOverlay.addClass("scaleIn");

			    contOverlay.addEventListener('click', function() {

			    	contOverlay.removeClass("scaleIn");

			    });
			});
		});
	}

})(contImage);

toggleMenuBox.addEventListener('click', function(e) {

	updateMenu();

});

window.addEventListener('resize', function() {

	updateMenu();

});


(function(lsc) {
	if(lsc) {
		for ( var i = 0; i < localStorage.length; i++) {
		localStorageContainer.innerHTML += '<li>' + localStorage.key(i) + ' - ' + localStorage.getItem(localStorage.key(i)) + '</li>';
		}

		if(localStorage.length === 0) {
			localStorageContainer.innerHTML = 'Keine Daten vorhanden.';
			dellocalStorage.hide();
		}

		dellocalStorage.addEventListener('click', function(e) {
			e.preventDefault();
			localStorage.clear();
			localStorageContainer.innerHTML = 'Alle Daten erfolgreich gelöscht!';
		});
	}
})(localStorageContainer);

WebFontConfig = {
    google: { families: [ 'Roboto::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
// 480390
var kontaktSenden   = _("#SENDEN"),
kontaktMessageError = _("#form_msg_error"),
kontaktMessage      = _("#form_msg"),
kontaktForm         = _(".kontakt__form"),
kontaktPostContent = _(".post--content"),
kontaktLoading = _("#loading");


if(kontaktLoading) kontaktLoading.style.opacity = '0';

kontaktSubmit = function() {

	jumpTo( kontaktMessage );

	var kontaktName  = _("#name"),
	kontaktMail      = _("#xyz"),
	kontaktNachricht = _("#msg");

	kontaktName.removeClass("form__error");
	kontaktMail.removeClass("form__error");
	kontaktNachricht.removeClass("form__error");

	kontaktLoading.style.opacity = '1';

	kontaktSenden.style.display = 'none';

	kontaktMessage.innerHTML = '';

	var data = new FormData();
	data.append('name', kontaktName.value);
	data.append('xyz', kontaktMail.value);
	data.append('msg', kontaktNachricht.value);

	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'mailajax.php', true);
	
	xhr.onload = function() {

		_self = JSON.parse(this.responseText);

		if(!_self.success) {

			kontaktLoading.style.opacity = '0';

			if(_self.errors.name) {

				kontaktMessageError.innerHTML = '<span class="kontakt__error">' + _self.errors.name + '</span>';
				kontaktMessageError.style.display = '';

				kontaktSenden.style.display = '';

				if( _self.errors.badmail ) {

					kontaktMail.addClass("form__error");

				}
				if( _self.errors.badname ) {

					kontaktName.addClass("form__error");

				}
				if( _self.errors.badmsg ) {

					kontaktNachricht.addClass("form__error");

				}

			}
		} else {

			kontaktLoading.style.opacity = '0';

			kontaktMessageError.style.display = 'none';
			kontaktForm.style.display = 'none';

			if( !_self.phpmail_bad ) {

				kontaktPostContent.style.display = 'none';
				kontaktMessage.innerHTML = '<span class="kontakt__success">Danke für deine eMail!</span>';

			} else {

				kontaktMessageError.style.display = '';
				kontaktMessageError.innerHTML = '<span class="kontakt__error">Es gab ein Problem mit unseren eMail-Server. Bitte versuch es später nochmal oder schreibe direkt an mail@glossboss.de</span>';

			}
		}

	};

	xhr.send(data);

};
if( kontaktSenden ) {

	kontaktSenden.addEventListener('click', function(e) {

		e.preventDefault();
		kontaktSubmit();

	});
}

var teil1         = _("#mischungInput1"),
teil2             = _("#mischungInput2"),
ergebnis          = _("#mischungResult"),
ergebnisML        = _("#mischung--highlight"),
getMischungInputs = _("#mischungsrechner input"),
header            = _("#mischung--heading");

updateMischung = function() {
	flascheVal = _('input[type="radio"]:checked');

	if( teil1.value && teil2.value && flascheVal.value ) {

		if(ergebnis.style.display !== 'block') jumpTo( header );

		gesamt        = parseInt(teil1.value) + parseInt(teil2.value);
		step          = flascheVal.value / gesamt;
		
		result1       = Math.round(step*teil1.value).toFixed(2);
		result2       = Math.round(step*teil2.value).toFixed(2);
		
		result1Finish = result1.slice(0,result1.length-3);
		result2Finish = result2.slice(0,result2.length-3);

		ergebnis.style.display = 'block';
		ergebnis.style.background = '#49fb35';
		
		setTimeout(function() {

			ergebnis.addClass("mischungsDelay");
		 	ergebnis.style.background = '#fff';

		 },100);
		ergebnisML.innerHTML = result1Finish + "ml:" + result2Finish + "ml";

	}

};

if(getMischungInputs) {

	getMischungInputs.forEach(function(el) {

		el.addEventListener('change', function() {

			ergebnis.removeClass("mischungsDelay");
			updateMischung();

		});
	});
}


router.add('allgemein', function() {

	router.parser("allgemein");

});

router.add('anleitung', function() {

	router.parser("anleitungen");

});

router.add('pflegeberichte', function() {

	router.parser("pflegeberichte");

});

router.add('tipps-tricks', function() {

	router.parser("tipps-tricks", 'Tipps & Tricks');

});

router.add('produkttest', function() {

	router.parser("produkttest");

});

router.add('alle', function() {

	router.parser("alle", 'Alle Beiträge');
	
	setTimeout(function() {

		jumpTo(_("#loadmoreajax"));
		_("#loadmoreajax").click();

	},50);

});

window.addEventListener("hashchange", function() {

	loader(true);
	router.checker(location.hash);
	
});

window.addEventListener("load", function() {

	loader(true);
	router.checker(location.hash);

});});