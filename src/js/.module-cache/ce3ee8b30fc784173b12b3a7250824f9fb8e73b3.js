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
    
    // page 2 stuff:
    var p2Trigger;
    var p2Entered = false;
    var $p2 = $(".page2-content");
    var $p2Screen = $(".page2-content > .screen-class");
    var $p2text = $(".page2-content > .text >");

    // page 3 stuff:
    var p3Trigger;
    var p3Entered = false;
    var $p3 = $(".page3-content");
    var $p3title = $(".page3-content h1");
    var $p3ul = $(".page3-content ul");

    // page 3 stuff:
    var p4Trigger;
    var p4Entered = false;
    var $p4 = $(".page4 .content");
    var $p4title = $(".page4 .content h1");
    var $p4sscontainer = $(".page4 .content .ss-container");

    function onResize(){
        docHeight = $doc.height();
        winHeight = $win.height();
        maxScroll = $body.height();

        p2Trigger = $p2.offset().top + $p2.height() / 2 - winHeight;
        p3Trigger = $p3.offset().top + $p3.height() / 2 - winHeight;
        p4Trigger = $p4.offset().top - (winHeight / 2);
        
        moveParallax();
    }

    function moveParallax() {
        console.log("scroll: " + $win.scrollTop());
        if ($win.scrollTop() < maxScroll) {                                           
            var bgYPos = 0.3 * bgHeight * ($win.scrollTop() / maxScroll);
            TweenLite.to($body, 0.01, {y: bgYPos}); 
        }
        if (!p2Entered && $win.scrollTop() > p2Trigger) {
            TweenLite.to($p2Screen, ANIMATION_DURATION, {autoAlpha: 1, x: 0});
            TweenMax.staggerTo($p2text.children(), ANIMATION_DURATION, 
                   {autoAlpha: 1, x: 0}, 0.2);
            p2Entered = true;
        }
        if (!p3Entered && $win.scrollTop() > p3Trigger) {
            TweenLite.to($p3title, ANIMATION_DURATION, {autoAlpha: 1, x: 0});
            TweenLite.to($p3ul, ANIMATION_DURATION, {delay: 0.2, autoAlpha: 1, x: 0});
            p3Entered = true;
        }
        if (!p4Entered && $win.scrollTop() > p4Trigger) {
            TweenLite.to($p4title, ANIMATION_DURATION, {autoAlpha: 1, x: 0});
            TweenLite.to($p4sscontainer, ANIMATION_DURATION, {delay: 0.2, autoAlpha: 1, y: 0});
            p4Entered = true;
        }
    }

    // hide all elements since javascript is enabled...
    TweenLite.set($p2Screen, {autoAlpha: 0, x: -200});
    TweenLite.set($body, {y: 0}); 
    TweenLite.set($p2text.children(), {autoAlpha: 0, x: 200});
    TweenLite.set($p3title, {autoAlpha: 0, x: -200});
    TweenLite.set($p3ul, {autoAlpha: 0, x: 200});
    TweenLite.set($p4title, {autoAlpha: 0, x: -200});
    TweenLite.set($p4sscontainer, {autoAlpha: 0, y: 200});


    $win.on("scroll", moveParallax).on("resize", onResize);

    onResize();

    // we are done loading... show everything

    $("#loading-view").css("display", "none");
    $body.css("overflow", "visible");

    var $imageView = $(".image-view");

    var disableScrolling = function() {
        var pos = $win.scrollTop();
        $body.data('scroll-position', pos);
        $body.css("overflow", "hidden");
        window.scrollTo(0, pos);
    };

    var enableScrolling = function() {
        var pos = $body.data('scroll-position');
        $body.css('overflow', "visible");
        window.scrollTo(0, pos);   
    }

    $(".ss-container > a").click(function (e) {
        e.preventDefault();

        disableScrolling();
        $imageView.css("display", "flex");

        var img = new Image();
        $(img).load(function(){
          $('.container').append($(this));
        }).attr({
            src: $(this).attr('href')
        });
    });
});