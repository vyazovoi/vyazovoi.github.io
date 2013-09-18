jQuery(document).ready(function($) {
    $("a:has(img)").fancybox({
        helpers : {
            title: {
                type: 'over'
            }
        }
    });
    // $('article a[href$="jpg"], article a[href$="png"]').each(function() {
    //     $(this).fancybox();
    // });
});