$('.testimonial-img').click(function(){
  var element = $(this);
  var testimonial_text = $(this).attr("testimonial-text");
  var testimonial_name = $(this).attr("testimonial-name");
  var testimonial_title = $(this).attr("testimonial-title");
  $.when($('.testimonial-img:not(.inactive)').addClass("inactive")).done(function(){
    element.removeClass("inactive");
  });
  $.when($('#testimonial-title p').fadeOut()).done(function(){
    $.when($(this).html(testimonial_title)).done(function(){
      $(this).fadeIn();
    })
  });
  $.when($('#testimonial-name p').fadeOut()).done(function(){
    $.when($(this).html(testimonial_name)).done(function(){
      $(this).fadeIn();
    })
  });
  $.when($('#testimonial-text p').fadeOut()).done(function(){
    $.when($(this).html(testimonial_text)).done(function(){
      $(this).fadeIn();
    })
  });
});
