function centerImageVideo() {
	var windowHeight = jQuery( window ).height();
	var windowWidth = jQuery( window ).width();
	var windowHeight = windowHeight-100;
	jQuery("#wrapper .centering-image-video-container").each(function() {
		var imageWidth = jQuery(this).find(".img-wpr").width();	
		if(imageWidth > windowWidth){
			jQuery(this).height(windowHeight);
			var imageHeight = jQuery(this).find(".img-wpr").height();
			var topPosition = (imageHeight - windowHeight) / 2;
			contentWrapperPosition  = topPosition*1.1;
			topPosition = topPosition-topPosition-topPosition;
			jQuery(this).find(".img-wpr").css("top", topPosition);
			var leftPosition = (imageWidth - windowWidth) / 2;
			leftPosition = leftPosition-leftPosition-leftPosition;
			jQuery(this).find(".img-wpr").css("left", leftPosition);
			jQuery(this).find(".content-wrapper").css("top", contentWrapperPosition) 
		}
		else {
			jQuery(this).addClass("center");
			jQuery(this).find(".img-wpr").attr("style", "position:relative");
			var itemHeight = jQuery(this).find(".img-wpr").height();
			jQuery(this).css("height", itemHeight);
			jQuery(this).find(".content-wrapper").css("top", "20px")
		}
	});	
}
jQuery(document).ready(function() {
	jQuery("#open-search, #close-search").on("click", function() {
		jQuery("#site-search").toggleClass("open");
	});	
	jQuery('#content .img-wpr video').each(function(index) {
		jQuery(this).attr('id', 'video'+index);
	});
	jQuery('#content .img-wpr a.play-icon').each(function(index) {
		jQuery(this).attr('id', index);
	});	
	
	jQuery("#content .centering-image-video-container .img-wpr a.play-icon").on("click", function(e) {	
		var currentVideo = jQuery(this).attr('id');
		var currentVideo = document.getElementById("video"+currentVideo);
		currentVideo.play(); 
		
		jQuery(this).prev().remove();
		jQuery(this).remove();
		jQuery(currentVideo).css("display", "block");
		centerImageVideo();
	});
	setTimeout(function(){ centerImageVideo(); }, 1000);
	jQuery( window ).resize(function() {
		centerImageVideo();
	});			
	jQuery("#wrapper .nav-link-mobile").on("click", function(e) {	
		jQuery("#wrapper .navigation-content-mobile").toggleClass("open");
	});	
	var clickedLink = -1;
	jQuery("#wrapper .navigation-content-mobile .open-menu").on("click", function(e) {
		
		var linkIndex = (jQuery(this).parent().index());
		
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
	
	jQuery(".article-acccordion a.acccordion-link").on("click", function(e) {
	jQuery(this).parent().toggleClass("open");
	});
	
	
	jQuery( window ).resize(function() {
		resizeWindow();
	});
	setTimeout(function(){ resizeWindow(); }, 500);
	jQuery("#wrapper .slick-arrow, .slick-dots button").on("click", function(e) {
		setTimeout(function(){ resizeWindow(); }, 500);
	});
	
	jQuery("#wrapper .accordion-wpr .wpr a").on("click", function(e) {	
		jQuery(this).parent().toggleClass("open");
	});	
	
	jQuery(".regular").slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});	
});

function resizeWindow() {
	var currentSlideHeight = jQuery("#content .slick-active").height();
	jQuery("#content .regular.slider").css("height",currentSlideHeight);
	currentSlideHeight = currentSlideHeight-50;
	jQuery("#content .slick-dots").css("top",currentSlideHeight);

	var imgWidth = jQuery(".slick-slide").width();
	jQuery(".slick-slide .content-wpr-top").width(imgWidth-50);
	jQuery(".slick-slide .content-wpr-bottom").width(imgWidth-50);	
}
