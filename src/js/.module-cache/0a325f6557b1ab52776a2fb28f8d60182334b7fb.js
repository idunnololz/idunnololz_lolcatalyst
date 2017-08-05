require(['jquery'], function ($) {

    var resolveHash = function(hash, animate) {
        if (typeof(animate) === 'undefined') animate = true;

        var $fullView = $('#fullview');
        var $articles = $('#articles');
        var transitionTime = 500;

        var divName;
        if (hash === "about") {
            divName = ".page2";
        } else if (hash === "features") {
            divName = ".page3";
        } else if (hash === "screenshots") {
            divName = ".page4";
        } else if (hash === "disclaimer") {
            divName = ".page5";
        }
        
        if (hash !== -1) {
            console.log("hash: " + hash);
            var $elem = $(divName);
            if (animate) {
                $('html, body').animate({
                    scrollTop: $elem.offset().top
                }, 300);
            } else {
                $('html, body').scrollTop($elem.offset().top);
            }
        } else {
        }
    }

    $(".header > a").click(function() {
        console.log("locHash: " + location.hash + " href: "+ this.href.split('#')[1]);
        location.hash === ("#" + this.href.split('#')[1]) ? resolveHash(document.location.hash.substr(1)) : null;
    });

    if (document.location.hash.length > 0) {
        resolveHash(document.location.hash.substr(1), false);
    }

    $(window).on('hashchange', function() {
        if (document.location.hash.length > 0) {
            resolveHash(document.location.hash.substr(1));
        } else {
            resolveHash(-1);
        }
    });



    // // init controller
    // var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

    // // build scenes
    // new ScrollMagic.Scene({triggerElement: ".page1-body"})
    //                 .setTween(".page1-body > .bg", {y: "0%", ease: Linear.easeNone})
    //                 .addIndicators()
    //                 .addTo(controller);


    var docHeight, winHeight, maxScroll;
    
    var bgHeight = 906;  
    var $body = $(".page1-body > .bg");
    var $win = $(window);
    var $doc = $(document);

    function onResize(){
        docHeight = $doc.height();
        winHeight = $win.height();
        maxScroll = $body.height();
        moveParallax();
    }
                
    function moveParallax() {                                           
        var bgYPos = 0.3 * bgHeight * ($win.scrollTop() / maxScroll);
        console.log("pos: " + bgYPos + " scrollTop: " + $win.scrollTop());
        
        TweenLite.to($body, 0.01, {y: bgYPos}); 
    }

    $win.on("scroll", moveParallax).on("resize", onResize).resize();

});