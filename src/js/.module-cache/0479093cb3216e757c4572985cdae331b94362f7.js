require(['jquery'], function ($) {

    var resolveHash = function(hash, animate) {
        if (typeof(animate) === 'undefined') animate = true;

        var $fullView = $('#fullview');
        var $articles = $('#articles');
        var transitionTime = 500;

        var divName;
        if (hash === "about") {
            divName = ".page2";
        }
        
        if (hash !== -1) {
            var elem = $(divName);
            if (animate) {
                TweenLite.to(elem, 2, {scrollTo:{y:250}, ease:Power2.easeOut});
            }
        } else {
        }
    }

    $(".header > a").click(function() {
        //Do stuff when clicked
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
});