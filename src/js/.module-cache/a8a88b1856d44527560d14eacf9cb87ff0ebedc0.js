require(['jquery'], function ($) {

    var resolveHash = function(hash, animate) {
        if (typeof(animate) === 'undefined') animate = true;

        var $fullView = $('#fullview');
        var $articles = $('#articles');
        var transitionTime = 500;
        
        if (hash !== -1) {
            console.log(hash);
        } else {
        }
    }

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