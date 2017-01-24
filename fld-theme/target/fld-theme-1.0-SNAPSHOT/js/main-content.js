jQuery(document).ready(function() {
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
		resizeWindow();
	});
	resizeWindow();
	jQuery("#wrapper .slick-arrow, .slick-dots button").on("click", function(e) {
		setTimeout(function(){ resizeWindow(); }, 500);
	});
	jQuery("#wrapper .accordion-wpr .wpr a").on("click", function(e) {	
		jQuery(this).parent().toggleClass("open");
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
