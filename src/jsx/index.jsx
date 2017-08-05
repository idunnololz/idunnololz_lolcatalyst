require(['jquery'], function ($) {

    var mobilecheck = function() {
        var check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    }

    if (mobilecheck()) {
        var bg = jQuery(".page1");
        jQuery(window).resize("resizeBackground");
        function resizeBackground() {
            bg.height(jQuery(window).height());
        }
        resizeBackground();   
    }

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

    var paraTigger2;
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

        paraTigger2 = parallaxBg2Top - winHeight;
        
        moveParallax();
    }

    function moveParallax() {
        if ($win.scrollTop() < maxScroll) {                                           
            var bgYPos = 0.3 * bgHeight * ($win.scrollTop() / maxScroll) - 50;
            TweenLite.set($p1body, {y: bgYPos}); 
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
        if ($win.scrollTop() > paraTigger2) {      
            var bgYPos = 0.3 * bgHeight * (($win.scrollTop() - parallaxBg2Top) / maxScroll) - ($parallaxBg2.height() / 4);
            TweenLite.set($parallaxBg2, {y: bgYPos}); 
        }
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
        var borderVt=80; //value based on css style. bottom bar + padding of photoContain
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

    $(".ss-container > div > a").click(function (e) {
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

    console.log("Scripts done!");

});