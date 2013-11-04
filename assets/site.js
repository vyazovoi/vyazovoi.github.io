jQuery(document).ready(function($) {
    $(".entry a.screenshot:has(img)").fancybox({
        helpers : {
            title: {
                type: 'over'
            }
        }
    });
    $(".entry a.screenshot>img").addClass('img-thumbnail img-responsive')
    // $('article a[href$="jpg"], article a[href$="png"]').each(function() {
    //     $(this).fancybox();
    // });
});