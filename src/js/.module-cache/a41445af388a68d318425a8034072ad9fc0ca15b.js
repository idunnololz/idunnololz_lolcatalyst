require(['jquery'], function ($) {
    if (document.location.hash.length > 0) {
        resolveHash(parseInt(document.location.hash.substr(1)), false);
    }
    $(window).on('hashchange', function() {
        if (document.location.hash.length > 0) {
            resolveHash(parseInt(document.location.hash.substr(1)));
        } else {
            resolveHash(-1);
        }
    });
});