// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/**
 * jQuery.deparam - The oposite of jQuery param. Creates an object of query string parameters.
 *
 * Credits for the idea and Regex:
 * http://stevenbenner.com/2010/03/javascript-regex-trick-parse-a-query-string-into-an-object/
 */
(function($){
    $.deparam = $.deparam || function(uri){
            if(uri === undefined){
                uri = window.location.search;
            }
            var queryString = {};
            uri.replace(
                new RegExp(
                    "([^?=&]+)(=([^&#]*))?", "g"),
                function($0, $1, $2, $3) { queryString[$1] = $3; }
            );
            return queryString;
        };
})(jQuery);


// Place any jQuery/helper plugins in here.
