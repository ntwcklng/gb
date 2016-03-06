(function routerEngine(w, d) {
  function addActiveCatFilter(hash) {
    $(".cat-filter-a").each(function(a) {
      a.classList.remove("active");
      if(a.href.indexOf(hash) > 1) {
        a.classList.add("active");
      }
    });
  }

  var postList = $(".post--list")
  , postContainer = $("#post--list__container")
  , pageHeading = $("#page-heading")
  , loadmoreButton = $("#loadmoreajax");

  var postDB
  , numCat = 0
  , maxIndex = 15
  , maxReload = 5;

  var router = {
    routes: [],
    add: function(hash, fn) {
      this.routes.push({re: hash, fn: fn});
      return this;
    },
    checkRoute: function(hash) {
      addActiveCatFilter(hash);
      for(var i in this.routes) {
        var match = hash.match(this.routes[i].re);
        if(match) {
          match.shift();
          this.routes[i].fn.apply({}, match);
          return this;
        }
      }
      try {
        if($("#indexContainer") && !hash && ItseMeIndex) {
          this.parser("index", "Die neuesten Beiträge", true);
        }
      } catch(up) {
        console.log("i dont care: " + up);
      }

    },
    getPosts: function(data, hash, isIndex) {
      // var post = data;
      numCat = 0;
      postDB = [];
      data.filter(function(post) {
        return (post.category.toLowerCase() === hash || isIndex || hash === "alle");
      }).map(function(post) {
        if(numCat < maxIndex) {
          var cacheHTML = $(".post--list").html();
          $(".post--list").html(cacheHTML + post.card);
          numCat++;
          }
          postDB.push(post.card);
      });
      // postDB = [];
      // for(var i = 0; i<post.length; i++) {
      //   // console.log(post[i].category);
      //   if(post[i].category.toLowerCase() === hash || isIndex || hash === "alle") {
      //     if(numCat < maxIndex) {
      //       var cacheHTML = $(".post--list").html();
      //       $(".post--list").html(cacheHTML + post[i].card);
      //       numCat++;
      //     }
      //     postDB.push(post[i].card);
      //   }
      // }

      postContainer.removeClass("opacity-0");
      pageHeading.removeClass("opacity-0");
      loader(0);
      ($(".post--list li").length < maxIndex)
        ?
        loadmoreButton.style("display", "none")
        :
        loadmoreButton.style("display", "block");

      loadmoreButton[0].onclick = function(e) {
        postListLI = $(".post--list li");
        if(isIndex && location.hash != "alle") {
          location.hash = "alle";
        }
        var showDelayTime = 0;
        showDelay = function(p, t) {
          setTimeout(function() {
            $(".post--list li")[p].classList.remove("displayNone");
          }, t);

        };

        for (var i = 0; i < maxReload; i++) {
          $(".post--list")[0].innerHTML += postDB[numCat];
          $(".post--list li")[numCat].classList.add('displayNone');
          showDelayTime += 100;
          showDelay(numCat, showDelayTime);
          numCat++;

          if(!postDB[numCat]) {
            loadmoreButton.style("display", "none");
            return;
          }
        }
        return;
      }

    },
    parser: function(hash, title, isIndex) {
      $("#toggleMenu")[0].checked = false;
      $("#searchWrapper").style("display", "none");
      var _hash = hash.charAt(0).toUpperCase() + hash.slice(1, hash.length);
      title = title || _hash;
      // RESET
      loader(1);
      loadmoreButton.style("display", "none");
      postList.html(" ");
      postContainer.addClass("opacity-0");
      if(hash === "suche") {
        postContainer.removeClass("opacity-0");
        searchRender();
        loader(0);
        $(".cat-filter-wrap").addClass("displayNone")
        return;
      }
      $(".cat-filter-wrap").removeClass("displayNone")

      ajax({
        method: "GET",
        useJSON: true,
        url: postJSONCache,
        success: function(data) {
          this.getPosts(data, hash, isIndex);
        }.bind(this)
      });
    }
  };










  router.add('allgemein', function() {
    router.parser("allgemein", 'Allgemein');
  });

  router.add('anleitung', function() {
    router.parser("anleitungen", "Anleitungen");
  });

  router.add('pflegeberichte', function() {
    router.parser("pflegeberichte", "Pflegeberichte");
  });

  // router.add('tipps-tricks', function() {
  //   router.parser("tipps-tricks", 'Tipps & Tricks');
  // });

  router.add('produkttest', function() {
    router.parser("produkttest", "Produkttests");
  });

  router.add('suche', function() {
    router.parser("suche");
  });

  router.add('test', function() {
    router.parser("test", "TESTSEITE!");
  });

  router.add('alle', function() {
    router.parser("alle", 'Alle Beiträge');
    setTimeout(function() {
      $("#loadmoreajax").scrollTo();
      $("#loadmoreajax")[0].click();
    },50);
  });

  window.addEventListener("hashchange", function() {
    router.checkRoute(location.hash);
  });

  window.addEventListener("load", function() {
    router.checkRoute(location.hash);
  });


})(window, document);
