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

    var ANIMATION_DURATION = 0.3;

    var docHeight, winHeight, maxScroll;
    
    var bgHeight = 906;  
    var $body = $(".page1-body > .bg");
    var $win = $(window);
    var $doc = $(document);

    var p2Trigger;
    
    // page 2 stuff:
    var p2Entered = false;
    var $p2 = $(".page2-content");
    var $p2Screen = $(".page2-content > .screen-class");
    var $p2text = $(".page2-content > .text");

    function onResize(){
        docHeight = $doc.height();
        winHeight = $win.height();
        maxScroll = $body.height();
        moveParallax();

        p2Trigger = $p2.offset().top + $p2.height() / 2 - winHeight;
        console.log("p2Trigger: " + p2Trigger);
    }

    function moveParallax() {
        console.log("scroll: " + $win.scrollTop());
        if ($win.scrollTop() < maxScroll) {                                           
            var bgYPos = 0.3 * bgHeight * ($win.scrollTop() / maxScroll);
            TweenLite.to($body, 0.01, {y: bgYPos}); 
        }
        if (!p2Entered && $win.scrollTop() > p2Trigger) {
            TweenLite.to($p2Screen, ANIMATION_DURATION, {autoAlpha: 1, x: 0});
        }
    }

    // hide all elements since javascript is enabled...
    TweenLite.set($p2Screen, {autoAlpha: 0, x: -200});
    TweenLite.set($body, {y: 0}); 
    TweenLite.set($p2text.children(), {autoAlpha: 0, x: 200});

    $win.on("scroll", moveParallax).on("resize", onResize).resize();

});