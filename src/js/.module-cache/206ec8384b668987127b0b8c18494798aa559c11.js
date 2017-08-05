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
            var $elem = $("#" + hash);
            if (animate) {
                $('html, body').animate({
                    scrollTop: $elem.offset().top
                }, 300, function() {
                    window.location.hash = hash;
                });
            } else {
                $('html, body').scrollTop($elem.offset().top);
            }
        } else {
        }
    }

    $(".header > a").click(function(e) {
        e.preventDefault();
        console.log("locHash: " + location.hash + " href: "+ this.href.split('#')[1]);
        resolveHash(this.href.split('#')[1]);
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
    var $p1body = $(".page1-body > .bg");
    var $win = $(window);
    var $doc = $(document);
    var $body = $("body");
    
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

    var parallaxBg2Top;
    var $parallaxBg2 = $(".get-the-app-bg");

    function onResize(){
        docHeight = $doc.height();
        winHeight = $win.height();
        maxScroll = $p1body.height();

        parallaxBg2Top = $parallaxBg2.offset().top;

        p2Trigger = $p2.offset().top + $p2.height() / 2 - winHeight;
        p3Trigger = $p3.offset().top + $p3.height() / 2 - winHeight;
        p4Trigger = $p4.offset().top - (winHeight * 2 / 3);
        
        moveParallax();
    }

    function moveParallax() {
        console.log("scroll: " + $win.scrollTop());
        if ($win.scrollTop() < maxScroll) {                                           
            var bgYPos = 0.3 * bgHeight * ($win.scrollTop() / maxScroll);
            TweenLite.to($p1body, 0.01, {y: bgYPos}); 
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

        var bgYPos = 0.3 * bgHeight * (($win.scrollTop() - parallaxBg2Top) / maxScroll) - ($parallaxBg2.height() / 2);
        console.log("para: " + bgYPos);
        TweenLite.to($parallaxBg2, 0.01, {y: bgYPos}); 
    }

    // hide all elements since javascript is enabled...
    TweenLite.set($p2Screen, {autoAlpha: 0, x: -200});
    TweenLite.set($p1body, {y: 0}); 
    TweenLite.set($p2text.children(), {autoAlpha: 0, x: 200});
    TweenLite.set($p3title, {autoAlpha: 0, x: -200});
    TweenLite.set($p3ul, {autoAlpha: 0, x: 200});
    TweenLite.set($p4title, {autoAlpha: 0, x: -200});
    TweenLite.set($p4sscontainer, {autoAlpha: 0, y: 200});


    $win.on("scroll", moveParallax).on("resize", onResize);

    onResize();

    var $imageView = $(".image-view");
    var $imageContainer = $(".image-container");
    var $loadingView = $(".loading");

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
    };

    resize = function(elem) {
        var borderVt=150; //value based on css style. bottom bar + padding of photoContain
        var borderHz=40; //value based on css style photoContain padding

        elem.css("width", "auto").css("height", "auto"); // Remove existing CSS
        elem.removeAttr("width").removeAttr("height"); // Remove HTML attributes   

        var origSizeW = elem.width();
        var origSizeH = elem.height();
        var ratioVt=(origSizeW/origSizeH);
        var ratioHz=(origSizeH/origSizeW);
        var winW = $(window).width();
        var winH = $(window).height();
        var screenSizeW=Math.round(winW-borderHz);
        var screenSizeH=Math.round(winH-borderVt);

        if (origSizeW>=origSizeH){

            var newHeight = Math.round(screenSizeW*ratioHz);
            if (newHeight <= screenSizeH) {
                elem.css("width", screenSizeW); // Set new width
                elem.css("height", newHeight);
            } else {
                elem.css("height", screenSizeH);
            }
        } else {
            elem.css("height", screenSizeH); // Set new height
        }
    };

    $(".ss-container > a").click(function (e) {
        e.preventDefault();
        $imageContainer.empty();

        $loadingView.css("display", "block");
            
        disableScrolling();
        $imageView.css("display", "flex");

        var img = new Image();
        $(img).load(function(){
            var $img = $(this);
            setTimeout(function(){
                $loadingView.css("display", "none");
                $img.css("max-width", "100%");
                $img.css("max-height", "100%");
                $imageContainer.append($img);

                resize($img);
            }, 5000);
        }).attr({
            src: $(this).attr('href')
        });

        console.log("clicked");
    });

    $imageView.click(function (e) {
        enableScrolling();
        $imageView.css("display", "none");
    });

    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
            enableScrolling();
            $imageView.css("display", "none");
        }
    });

    // we are done loading... show everything

    $("#loading-view").css("display", "none");
    $body.css("overflow", "visible");

});