var current_slide = 1;
var totalSlides = jQuery(".logo-slider").length;
function runTimer() {
    var next_slide = current_slide+1;
    if (current_slide == totalSlides){
        jQuery.when(jQuery('.logo-slider:nth-child(' + current_slide + ')').addClass('inactive')).done(function(){
            jQuery.when(jQuery('.logo-slider:nth-child(1)').removeClass('inactive')).done(function(){
                    current_slide = 1;
            });
        });
    } else {
        jQuery.when(jQuery('.logo-slider:nth-child(' + current_slide + ')').addClass('inactive')).done(function(){
            jQuery.when(jQuery('.logo-slider:nth-child(' + next_slide + ')').removeClass('inactive')).done(function(){
                current_slide++;
            });
        });
    }
    var timeout = setTimeout("runTimer()",2500);
}
jQuery(document).ready(function($){
    var timeout = setTimeout("runTimer()",2500);
});
