function centerImageVideo() {
	var windowHeight = jQuery( window ).height();
	var windowWidth = jQuery( window ).width();
	var windowHeight = windowHeight-100;
	jQuery("#wrapper .centering-image-video-container").each(function() {
		var imageWidth = jQuery(this).find(".img-wpr-centering").width();	
		if(imageWidth > windowWidth){
			jQuery(this).height(windowHeight);
			var imageHeight = jQuery(this).find(".img-wpr-centering").height();
			var topPosition = (imageHeight - windowHeight) / 2;
			contentWrapperPosition  = topPosition*1.1;
			topPosition = topPosition-topPosition-topPosition;
			jQuery(this).find(".img-wpr-centering").css("bottom", topPosition);
			var leftPosition = (imageWidth - windowWidth) / 2;
			var divWidth = jQuery(this).parent().width();
			var leftContent = (imageWidth - divWidth) / 2;
			divWidth = divWidth-20;
			jQuery(this).find(".content-wrapper").css("left", leftContent);
			
			jQuery(this).find(".content-wrapper").css("width", divWidth);
			leftPosition = leftPosition-leftPosition-leftPosition;
			jQuery(this).find(".img-wpr-centering").css("left", leftPosition);
			jQuery(this).find(".content-wrapper").css("bottom", contentWrapperPosition);
			
			
		}
		else {
			jQuery(this).addClass("center");
			jQuery(this).find(".img-wpr-centering").attr({
				style:"position:relative;display:block"
			});
			var itemHeight = jQuery(this).find(".img-wpr-centering").height();
			jQuery(this).css("height", itemHeight);
			jQuery(this).find(".content-wrapper").css("bottom", "20px")
		}
	});	
}
jQuery(document).ready(function() {
	jQuery("#open-search, #close-search").on("click", function() {
		jQuery("#site-search").toggleClass("open");
	});	
	$('#content .img-wpr-centering video').each(function(index) {
		$(this).attr('id', 'video'+index);
	});
	$('#content .img-wpr-centering a.play-icon').each(function(index) {
		$(this).attr('id', index);
	});	
	jQuery("#content .centering-image-video-container .img-wpr-centering a.play-icon.video").on("click", function(e) {	
		var currentVideo = $(this).attr('id');
		var currentVideo = document.getElementById("video"+currentVideo);
		currentVideo.play(); 
		
		$(this).prev().remove();
		$(this).next().remove();
		$(this).remove();
		$(currentVideo).css("display", "inline-block");
		$(this).parent().find(".iframe-wpr").css("display", "block");
		centerImageVideo();
	});	
	jQuery("#content .centering-image-video-container .img-wpr a.play-icon.iframe").on("click", function(e) {		
		$(this).prev().remove();
		$(this).next().remove();
		var iframeUrl = $(this).parent().find(".iframe-wpr").attr("url");
		var iframeWidth = $(this).parent().find(".iframe-wpr").attr("iframeWidth");
		var windowHeight = jQuery( window ).height()
		windowHeight = windowHeight-80;
		$(this).parent().find(".iframe-wpr").html(" <iframe frameborder='0' allowfullscreen src='"+iframeUrl+"' height='"+windowHeight+"'></iframe>");
		$(this).parent().find(".iframe-wpr").css("display", "block");
		$(this).remove();
		centerImageVideo();
	});
	setTimeout(function(){ centerImageVideo(); }, 1000);
	$( window ).resize(function() {
		centerImageVideo();
	});			
	jQuery("#wrapper .nav-link-mobile").on("click", function(e) {	
		jQuery("#wrapper .navigation-content-mobile").toggleClass("open");
	});	
	var clickedLink = -1;
	jQuery("#wrapper .navigation-content-mobile .open-menu").on("click", function(e) {
		
		var linkIndex = ($(this).parent().index());
		
		if(clickedLink  != linkIndex) {
			jQuery("#wrapper .navigation-content-mobile li.first-lvl").removeClass("open");
			jQuery("#wrapper .navigation-content-mobile li.first-lvl").eq(linkIndex).toggleClass("open");
			clickedLink = linkIndex;
		}
		else {
			jQuery("#wrapper .navigation-content-mobile li.first-lvl").removeClass("open");
			clickedLink = -1;
		}
		
	});	
	$(".regular").slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});	
	$(".article-acccordion a.acccordion-link").on("click", function(e) {
		$(this).parent().toggleClass("open");
	});
	
	
	$( window ).resize(function() {
		setTimeout(function(){ resizeWindow(); }, 500);
	});
		setTimeout(function(){ resizeWindow(); }, 500);
	jQuery("#wrapper .slick-arrow, .slick-dots button").on("click", function(e) {
		setTimeout(function(){ resizeWindow(); }, 500);
	});
	jQuery("#wrapper .accordion-wpr .wpr a").on("click", function(e) {	
		jQuery(this).parent().toggleClass("open");
	});		
	
});
function resizeWindow() {
	var windowHeight = jQuery( window ).height();
	windowHeight = windowHeight-80;
	jQuery("#content .img-wpr").each(function(index) {
		var imgHeight = jQuery(this).height();
		if(windowHeight < imgHeight) {
			jQuery(this).height(windowHeight);
		}
	});	
	var currentSlideHeight = jQuery("#content .slick-active").height();
	jQuery("#content .regular.slider").css("height",currentSlideHeight);
	currentSlideHeight = currentSlideHeight-50;
	jQuery("#content .slick-dots").css("top",currentSlideHeight);

}
