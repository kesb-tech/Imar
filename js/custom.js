(function() {
	'use strict';

	var tinyslider = function() {
		var el = document.querySelectorAll('.testimonial-slider');

		if (el.length > 0) {
			var slider = tns({
				container: '.testimonial-slider',
				items: 1,
				axis: "horizontal",
				controlsContainer: "#testimonial-nav",
				swipeAngle: false,
				speed: 700,
				nav: true,
				controls: true,
				autoplay: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false
			});
		}
	};
	tinyslider();

	


	var sitePlusMinus = function() {

		var value,
    		quantity = document.getElementsByClassName('quantity-container');

		function createBindings(quantityContainer) {
	      var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
	      var increase = quantityContainer.getElementsByClassName('increase')[0];
	      var decrease = quantityContainer.getElementsByClassName('decrease')[0];
	      increase.addEventListener('click', function (e) { increaseValue(e, quantityAmount); });
	      decrease.addEventListener('click', function (e) { decreaseValue(e, quantityAmount); });
	    }

	    function init() {
	        for (var i = 0; i < quantity.length; i++ ) {
						createBindings(quantity[i]);
	        }
	    };

	    function increaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        console.log(quantityAmount, quantityAmount.value);

	        value = isNaN(value) ? 0 : value;
	        value++;
	        quantityAmount.value = value;
	    }

	    function decreaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        value = isNaN(value) ? 0 : value;
	        if (value > 0) value--;

	        quantityAmount.value = value;
	    }
	    
	    init();
		
	};
	sitePlusMinus();

	// Scroll-triggered animations
	var scrollAnimations = function() {
		var elements = document.querySelectorAll('.animate-on-scroll');
		
		var observerOptions = {
			threshold: 0.1,
			rootMargin: '0px 0px -50px 0px'
		};

		var observer = new IntersectionObserver(function(entries) {
			entries.forEach(function(entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add('animated');
					observer.unobserve(entry.target);
				}
			});
		}, observerOptions);

		elements.forEach(function(el) {
			observer.observe(el);
		});
	};

	// Initialize scroll animations when DOM is ready
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', scrollAnimations);
	} else {
		scrollAnimations();
	}

	// Smooth scroll for anchor links
	var smoothScroll = function() {
		document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
			anchor.addEventListener('click', function(e) {
				var href = this.getAttribute('href');
				if (href !== '#' && href.length > 1) {
					var target = document.querySelector(href);
					if (target) {
						e.preventDefault();
						target.scrollIntoView({
							behavior: 'smooth',
							block: 'start'
						});
					}
				}
			});
		});
	};
	smoothScroll();

	// Navbar scroll effect
	var navbarScroll = function() {
		var navbar = document.querySelector('.custom-navbar');
		if (navbar) {
			var lastScroll = 0;
			window.addEventListener('scroll', function() {
				var currentScroll = window.pageYOffset;
				if (currentScroll > 100) {
					navbar.style.paddingTop = '10px';
					navbar.style.paddingBottom = '10px';
					navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
				} else {
					navbar.style.paddingTop = '20px';
					navbar.style.paddingBottom = '20px';
					navbar.style.boxShadow = 'none';
				}
				lastScroll = currentScroll;
			});
		}
	};
	navbarScroll();

})()