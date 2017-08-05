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


    var docHeight, winHeight, maxScroll;
    
    var bgHeight = 1200;  
    var $body = $(".page1-body");
    var $win = $(window);
    var $doc = $(document);

    function onResize(){
        docHeight = $doc.height();
        winHeight = $win.height();
        maxScroll = docHeight - winHeight;
        moveParallax();
    }
                
    function moveParallax(){
                                                    
        var bgYPos = -(bgHeight-winHeight) * ($win.scrollTop() / maxScroll);
        
        TweenLite.to($body, 0.1, {backgroundPosition: "50% " + bgYPos + "px"}); 
    }

    $win.on("scroll", moveParallax).on("resize", onResize).resize();

});