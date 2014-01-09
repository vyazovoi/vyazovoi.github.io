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

    $(".slider").hover(function() {
        // $(this).find('.hover-text').show();
        $(this).find('.hover-text').css('opacity', '0.9');
    }, function() {
        // $(this).find('.hover-text').hide();
        $(this).find('.hover-text').css('opacity', '0.6');
    });

});