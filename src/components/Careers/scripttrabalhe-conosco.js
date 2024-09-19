"use strict";

(function () {
	// Global variables
	var userAgent = navigator.userAgent.toLowerCase(),
		initialDate = new Date(),

		$document = $( document ),
		$window = $( window ),
		$html = $( "html" ),
		$body = $( "body" ),

		isDesktop = $html.hasClass( "desktop" ),
		isIE = userAgent.indexOf( "msie" ) !== -1 ? parseInt( userAgent.split( "msie" )[ 1 ], 10 ) : userAgent.indexOf( "trident" ) !== -1 ? 11 : userAgent.indexOf( "edge" ) !== -1 ? 12 : false,
		isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent ),
		windowReady = false,
		isNoviBuilder = false,
		loaderTimeoutId,

		plugins = {
			bootstrapModalDialog:    $( '.modal' ),
			bootstrapTabs:           $( ".tabs-custom" ),
			rdNavbar:                $( ".rd-navbar" ),
			materialParallax:        $( ".parallax-container" ),
			rdMailForm:              $( ".rd-mailform" ),
			rdInputLabel:            $( ".form-label" ),
			swiper:                  $( ".swiper-slider" ),
			radio:                   $( "input[type='radio']" ),
			checkbox:                $( "input[type='checkbox']" ),
			customToggle:            $( "[data-custom-toggle]" ),
			preloader:               $( ".preloader" ),
			captcha:                 $( '.recaptcha' ),
			scroller:                $( ".scroll-wrap" ),
			lightGallery:            $( '[data-lightgallery="group"]' ),
			lightGalleryItem:        $( '[data-lightgallery="item"]' ),
			lightDynamicGalleryItem: $( '[data-lightgallery="dynamic"]' ),
			copyrightYear:           $( ".copyright-year" ),
			particlesJs:             $( '#particles-js' )
		};


	/**
	 * @desc Check the element was been scrolled into the view
	 * @param {object} elem - jQuery object
	 * @return {boolean}
	 */
	function isScrolledIntoView ( elem ) {
		if ( isNoviBuilder ) return true;
		return elem.offset().top + elem.outerHeight() >= $window.scrollTop() && elem.offset().top <= $window.scrollTop() + $window.height();
	}

	/**
	 * @desc Calls a function when element has been scrolled into the view
	 * @param {object} element - jQuery object
	 * @param {function} func - init function
	 */
	function lazyInit ( element, func ) {
		var scrollHandler = function () {
			if ( (!element.hasClass( 'lazy-loaded' ) && (isScrolledIntoView( element ))) ) {
				func.call();
				element.addClass( 'lazy-loaded' );
			}
		};

		scrollHandler();
		$window.on( 'scroll', scrollHandler );
	}


	// Initialize scripts that require a finished document
	$( function () {
		isNoviBuilder = window.xMode;

		/**
		 * @desc Calculate the height of swiper slider basing on data attr
		 * @param {object} object - slider jQuery object
		 * @param {string} attr - attribute name
		 * @return {number} slider height
		 */
		function getSwiperHeight ( object, attr ) {
			var val = object.attr( "data-" + attr ),
				dim;

			if ( !val ) {
				return undefined;
			}

			dim = val.match( /(px)|(%)|(vh)|(vw)$/i );

			if ( dim.length ) {
				switch ( dim[ 0 ] ) {
					case "px":
						return parseFloat( val );
					case "vh":
						return $window.height() * (parseFloat( val ) / 100);
					case "vw":
						return $window.width() * (parseFloat( val ) / 100);
					case "%":
						return object.width() * (parseFloat( val ) / 100);
				}
			} else {
				return undefined;
			}
		}

		/**
		 * @desc Toggle swiper videos on active slides
		 * @param {object} swiper - swiper slider
		 */
		function toggleSwiperInnerVideos ( swiper ) {
			var prevSlide = $( swiper.slides[ swiper.previousIndex ] ),
				nextSlide = $( swiper.slides[ swiper.activeIndex ] ),
				videos,
				videoItems = prevSlide.find( "video" );

			for ( var i = 0; i < videoItems.length; i++ ) {
				videoItems[ i ].pause();
			}

			videos = nextSlide.find( "video" );
			if ( videos.length ) {
				videos.get( 0 ).play();
			}
		}

		/**
		 * @desc Toggle swiper animations on active slides
		 * @param {object} swiper - swiper slider
		 */
		function toggleSwiperCaptionAnimation ( swiper ) {
			var prevSlide = $( swiper.container ).find( "[data-caption-animate]" ),
				nextSlide = $( swiper.slides[ swiper.activeIndex ] ).find( "[data-caption-animate]" ),
				delay,
				duration,
				nextSlideItem,
				prevSlideItem;

			for ( var i = 0; i < prevSlide.length; i++ ) {
				prevSlideItem = $( prevSlide[ i ] );

				prevSlideItem.removeClass( "animated" )
					.removeClass( prevSlideItem.attr( "data-caption-animate" ) )
					.addClass( "not-animated" );
			}


			var tempFunction = function ( nextSlideItem, duration ) {
				return function () {
					nextSlideItem
						.removeClass( "not-animated" )
						.addClass( nextSlideItem.attr( "data-caption-animate" ) )
						.addClass( "animated" );
					if ( duration ) {
						nextSlideItem.css( 'animation-duration', duration + 'ms' );
					}
				};
			};

			for ( var i = 0; i < nextSlide.length; i++ ) {
				nextSlideItem = $( nextSlide[ i ] );
				delay = nextSlideItem.attr( "data-caption-delay" );
				duration = nextSlideItem.attr( 'data-caption-duration' );
				if ( !isNoviBuilder ) {
					if ( delay ) {
						setTimeout( tempFunction( nextSlideItem, duration ), parseInt( delay, 10 ) );
					} else {
						tempFunction( nextSlideItem, duration );
					}

				} else {
					nextSlideItem.removeClass( "not-animated" )
				}
			}
		}

		/**
		 * @desc Initialize owl carousel plugin
		 * @param {object} c - carousel jQuery object
		 */
		function initOwlCarousel ( c ) {
			var aliaces = [ "-", "-sm-", "-md-", "-lg-", "-xl-", "-xxl-" ],
				values = [ 0, 576, 768, 992, 1200, 1600 ],
				responsive = {};

			for ( var j = 0; j < values.length; j++ ) {
				responsive[ values[ j ] ] = {};
				for ( var k = j; k >= -1; k-- ) {
					if ( !responsive[ values[ j ] ][ "items" ] && c.attr( "data" + aliaces[ k ] + "items" ) ) {
						responsive[ values[ j ] ][ "items" ] = k < 0 ? 1 : parseInt( c.attr( "data" + aliaces[ k ] + "items" ), 10 );
					}
					if ( !responsive[ values[ j ] ][ "stagePadding" ] && responsive[ values[ j ] ][ "stagePadding" ] !== 0 && c.attr( "data" + aliaces[ k ] + "stage-padding" ) ) {
						responsive[ values[ j ] ][ "stagePadding" ] = k < 0 ? 0 : parseInt( c.attr( "data" + aliaces[ k ] + "stage-padding" ), 10 );
					}
					if ( !responsive[ values[ j ] ][ "margin" ] && responsive[ values[ j ] ][ "margin" ] !== 0 && c.attr( "data" + aliaces[ k ] + "margin" ) ) {
						responsive[ values[ j ] ][ "margin" ] = k < 0 ? 30 : parseInt( c.attr( "data" + aliaces[ k ] + "margin" ), 10 );
					}
				}
			}
		}

		// Additional class on html if mac os.
		if ( navigator.platform.match( /(Mac)/i ) ) {
			$html.addClass( "mac-os" );
		}

		// Adds some loosing functionality to IE browsers (IE Polyfills)
		if (isIE) {
			if (isIE === 12) $html.addClass("ie-edge");
			if (isIE === 11) $html.addClass("ie-11");
			if (isIE < 10) $html.addClass("lt-ie-10");
			if (isIE < 11) $html.addClass("ie-10");
		}

		// Stop vioeo in bootstrapModalDialog
		if ( plugins.bootstrapModalDialog.length ) {

			$( '[data-toggle=modal]' ).on( 'click', function () {
				// console.log( 321321 );
				$html.addClass( 'html-modal-open' )
			} )

			for ( var i = 0; i < plugins.bootstrapModalDialog.length; i++ ) {
				var modalItem = $( plugins.bootstrapModalDialog[ i ] );

				modalItem.on( 'hidden.bs.modal', $.proxy( function () {
					var activeModal = $( this ),
						rdVideoInside = activeModal.find( 'video' ),
						youTubeVideoInside = activeModal.find( 'iframe' );

					if ( rdVideoInside.length ) {
						rdVideoInside[ 0 ].pause();
					}

					if ( youTubeVideoInside.length ) {
						var videoUrl = youTubeVideoInside.attr( 'src' );

						youTubeVideoInside
							.attr( 'src', '' )
							.attr( 'src', videoUrl );
					}
				}, modalItem ) )
			}
		}

		// Bootstrap tabs
		if ( plugins.bootstrapTabs.length ) {
			for ( var i = 0; i < plugins.bootstrapTabs.length; i++ ) {
				var bootstrapTabsItem = $( plugins.bootstrapTabs[ i ] );

				//If have slick carousel inside tab - resize slick carousel on click
				if ( bootstrapTabsItem.find( '.slick-slider' ).length ) {
					bootstrapTabsItem.find( '.tabs-custom-list > li > a' ).on( 'click', $.proxy( function () {
						var $this = $( this );
						var setTimeOutTime = isNoviBuilder ? 1500 : 300;

						setTimeout( function () {
							$this.find( '.tab-content .tab-pane.active .slick-slider' ).slick( 'setPosition' );
						}, setTimeOutTime );
					}, bootstrapTabsItem ) );
				}
			}
		}

		// Copyright Year (Evaluates correct copyright year)
		if ( plugins.copyrightYear.length ) {
			plugins.copyrightYear.text( initialDate.getFullYear() );
		}

		// Page loader
		if ( plugins.preloader.length ) {
			loaderTimeoutId = setTimeout( function () {
				if ( !windowReady && !isNoviBuilder ) plugins.preloader.removeClass( 'loaded' );
			}, 2000 );
		}

		// Add custom styling options for input[type="radio"]
		if (plugins.radio.length) {
			for (var i = 0; i < plugins.radio.length; i++) {
				$(plugins.radio[i]).addClass("radio-custom").after("<span class='radio-custom-dummy'></span>")
			}
		}

		// Add custom styling options for input[type="checkbox"]
		if (plugins.checkbox.length) {
			for (var i = 0; i < plugins.checkbox.length; i++) {
				$(plugins.checkbox[i]).addClass("checkbox-custom").after("<span class='checkbox-custom-dummy'></span>")
			}
		}


		// RD Navbar
		if ( plugins.rdNavbar.length ) {
			var aliaces, i, j, len, value, values, responsiveNavbar;

			aliaces = [ "-", "-sm-", "-md-", "-lg-", "-xl-", "-xxl-" ];
			values = [ 0, 576, 768, 992, 1200, 1600 ];
			responsiveNavbar = {};

			for ( i = j = 0, len = values.length; j < len; i = ++j ) {
				value = values[ i ];
				if ( !responsiveNavbar[ values[ i ] ] ) {
					responsiveNavbar[ values[ i ] ] = {};
				}
				if ( plugins.rdNavbar.attr( 'data' + aliaces[ i ] + 'layout' ) ) {
					responsiveNavbar[ values[ i ] ].layout = plugins.rdNavbar.attr( 'data' + aliaces[ i ] + 'layout' );
				}
				if ( plugins.rdNavbar.attr( 'data' + aliaces[ i ] + 'device-layout' ) ) {
					responsiveNavbar[ values[ i ] ][ 'deviceLayout' ] = plugins.rdNavbar.attr( 'data' + aliaces[ i ] + 'device-layout' );
				}
				if ( plugins.rdNavbar.attr( 'data' + aliaces[ i ] + 'hover-on' ) ) {
					responsiveNavbar[ values[ i ] ][ 'focusOnHover' ] = plugins.rdNavbar.attr( 'data' + aliaces[ i ] + 'hover-on' ) === 'true';
				}
				if ( plugins.rdNavbar.attr( 'data' + aliaces[ i ] + 'auto-height' ) ) {
					responsiveNavbar[ values[ i ] ][ 'autoHeight' ] = plugins.rdNavbar.attr( 'data' + aliaces[ i ] + 'auto-height' ) === 'true';
				}

				if ( isNoviBuilder ) {
					responsiveNavbar[ values[ i ] ][ 'stickUp' ] = false;
				} else if ( plugins.rdNavbar.attr( 'data' + aliaces[ i ] + 'stick-up' ) ) {
					responsiveNavbar[ values[ i ] ][ 'stickUp' ] = plugins.rdNavbar.attr( 'data' + aliaces[ i ] + 'stick-up' ) === 'true';
				}

				if ( plugins.rdNavbar.attr( 'data' + aliaces[ i ] + 'stick-up-offset' ) ) {
					responsiveNavbar[ values[ i ] ][ 'stickUpOffset' ] = plugins.rdNavbar.attr( 'data' + aliaces[ i ] + 'stick-up-offset' );
				}
			}


			plugins.rdNavbar.RDNavbar( {
				anchorNav:    !isNoviBuilder,
				stickUpClone: (plugins.rdNavbar.attr( "data-stick-up-clone" ) && !isNoviBuilder) ? plugins.rdNavbar.attr( "data-stick-up-clone" ) === 'true' : false,
				responsive:   responsiveNavbar,
				callbacks:    {
					onStuck:        function () {
						var navbarSearch = this.$element.find( '.rd-search input' );

						if ( navbarSearch ) {
							navbarSearch.val( '' ).trigger( 'propertychange' );
						}
					},
					onDropdownOver: function () {
						return !isNoviBuilder;
					},
					onUnstuck:      function () {
						if ( this.$clone === null )
							return;

						var navbarSearch = this.$clone.find( '.rd-search input' );

						if ( navbarSearch ) {
							navbarSearch.val( '' ).trigger( 'propertychange' );
							navbarSearch.trigger( 'blur' );
						}

					}
				}
			} );


			if ( plugins.rdNavbar.attr( "data-body-class" ) ) {
				document.body.className += ' ' + plugins.rdNavbar.attr( "data-body-class" );
			}
		}

		// Swiper
		if ( plugins.swiper.length ) {
			for ( var i = 0; i < plugins.swiper.length; i++ ) {
				var s = $( plugins.swiper[ i ] );
				var pag = s.find( ".swiper-pagination" ),
					next = s.find( ".swiper-button-next" ),
					prev = s.find( ".swiper-button-prev" ),
					bar = s.find( ".swiper-scrollbar" ),
					swiperSlide = s.find( ".swiper-slide" ),
					autoplay = false;

				for ( var j = 0; j < swiperSlide.length; j++ ) {
					var $this = $( swiperSlide[ j ] ),
						url;

					if ( url = $this.attr( "data-slide-bg" ) ) {
						$this.css( {
							"background-image": "url(" + url + ")",
							"background-size":  "cover"
						} )
					}
				}

				swiperSlide.end()
					.find( "[data-caption-animate]" )
					.addClass( "not-animated" )
					.end();

				s.swiper( {
					autoplay:                 s.attr( 'data-autoplay' ) ? s.attr( 'data-autoplay' ) === "false" ? undefined : s.attr( 'data-autoplay' ) : 5000,
					direction:                s.attr( 'data-direction' ) && isDesktop ? s.attr( 'data-direction' ) : "horizontal",
					effect:                   s.attr( 'data-slide-effect' ) ? s.attr( 'data-slide-effect' ) : "slide",
					speed:                    s.attr( 'data-slide-speed' ) ? s.attr( 'data-slide-speed' ) : 600,
					keyboardControl:          s.attr( 'data-keyboard' ) === "true",
					mousewheelControl:        s.attr( 'data-mousewheel' ) === "true",
					mousewheelReleaseOnEdges: s.attr( 'data-mousewheel-release' ) === "true",
					nextButton:               next.length ? next.get( 0 ) : null,
					prevButton:               prev.length ? prev.get( 0 ) : null,
					pagination:               pag.length ? pag.get( 0 ) : null,
					paginationClickable:      pag.length ? pag.attr( "data-clickable" ) !== "false" : false,
					paginationBulletRender:   function ( swiper, index, className ) {
						if ( pag.attr( "data-index-bullet" ) === "true" ) {
							return '<span class="' + className + '">' + (index + 1) + '</span>';
						} else if ( pag.attr( "data-bullet-custom" ) === "true" ) {
							return '<span class="' + className + '"><span></span></span>';
						} else {
							return '<span class="' + className + '"></span>';
						}
					},
					scrollbar:                bar.length ? bar.get( 0 ) : null,
					scrollbarDraggable:       bar.length ? bar.attr( "data-draggable" ) !== "false" : true,
					scrollbarHide:            bar.length ? bar.attr( "data-draggable" ) === "false" : false,
					loop:                     isNoviBuilder ? false : s.attr( 'data-loop' ) !== "false",
					simulateTouch:            s.attr( 'data-simulate-touch' ) && !isNoviBuilder ? s.attr( 'data-simulate-touch' ) === "true" : false,
					onTransitionStart:        function ( swiper ) {
						toggleSwiperInnerVideos( swiper );
					},
					onTransitionEnd:          function ( swiper ) {
						toggleSwiperCaptionAnimation( swiper );
					},
					onInit:                   (function ( s ) {
						return function ( swiper ) {
							toggleSwiperInnerVideos( swiper );
							toggleSwiperCaptionAnimation( swiper );

							var $swiper = $( s );

							var swiperCustomIndex = $swiper.find( '.swiper-pagination__fraction-index' ).get( 0 ),
								swiperCustomCount = $swiper.find( '.swiper-pagination__fraction-count' ).get( 0 );

							if ( swiperCustomIndex && swiperCustomCount ) {
								swiperCustomIndex.innerHTML = formatIndex( swiper.realIndex + 1 );
								if ( swiperCustomCount ) {
									if ( isNoviBuilder ? false : s.attr( 'data-loop' ) !== "false" ) {
										swiperCustomCount.innerHTML = formatIndex( swiper.slides.length - 2 );
									} else {
										swiperCustomCount.innerHTML = formatIndex( swiper.slides.length );
									}
								}
							}
						}
					}( s )),
					onSlideChangeStart:       (function ( s ) {
						return function ( swiper ) {
							var swiperCustomIndex = $( s ).find( '.swiper-pagination__fraction-index' ).get( 0 );

							if ( swiperCustomIndex ) {
								swiperCustomIndex.innerHTML = formatIndex( swiper.realIndex + 1 );
							}
						}
					}( s ))
				} );

				$window.on( "resize", (function ( s ) {
					return function () {
						var mh = getSwiperHeight( s, "min-height" ),
							h = getSwiperHeight( s, "height" );
						if ( h ) {
							s.css( "height", mh ? mh > h ? mh : h : h );
						}
					}
				})( s ) ).trigger( "resize" );
			}
		}

		function formatIndex ( index ) {
			return index < 10 ? '0' + index : index;
		}

		// RD Input Label
		if (plugins.rdInputLabel.length) {
			plugins.rdInputLabel.RDInputLabel();
		}

		// Custom Toggles
		if ( plugins.customToggle.length ) {
			for ( var i = 0; i < plugins.customToggle.length; i++ ) {
				var $this = $( plugins.customToggle[ i ] );

				$this.on( 'click', $.proxy( function ( event ) {
					event.preventDefault();

					var $ctx = $( this );
					$( $ctx.attr( 'data-custom-toggle' ) ).add( this ).toggleClass( 'active' );
				}, $this ) );

				if ( $this.attr( "data-custom-toggle-hide-on-blur" ) === "true" ) {
					$body.on( "click", $this, function ( e ) {
						if ( e.target !== e.data[ 0 ]
							&& $( e.data.attr( 'data-custom-toggle' ) ).find( $( e.target ) ).length
							&& e.data.find( $( e.target ) ).length === 0 ) {
							$( e.data.attr( 'data-custom-toggle' ) ).add( e.data[ 0 ] ).removeClass( 'active' );
						}
					} )
				}

				if ( $this.attr( "data-custom-toggle-disable-on-blur" ) === "true" ) {
					$body.on( "click", $this, function ( e ) {
						if ( e.target !== e.data[ 0 ] && $( e.data.attr( 'data-custom-toggle' ) ).find( $( e.target ) ).length === 0 && e.data.find( $( e.target ) ).length === 0 ) {
							$( e.data.attr( 'data-custom-toggle' ) ).add( e.data[ 0 ] ).removeClass( 'active' );
						}
					} )
				}
			}
		}


		// Material Parallax
		if ( plugins.materialParallax.length ) {
			if ( !isNoviBuilder && !isIE && !isMobile ) {
				plugins.materialParallax.parallax();

				// heavy pages fix
				$window.on( 'load', function () {
					setTimeout( function () {
						$window.scroll();
					}, 500 );
				} );
			} else {
				for ( var i = 0; i < plugins.materialParallax.length; i++ ) {
					var parallax = $( plugins.materialParallax[ i ] ),
						imgPath = parallax.data( "parallax-img" );

					parallax.css( {
						"background-image": 'url(' + imgPath + ')',
						"background-size":  "cover"
					} );
				}
			}
		}

	} );
}());

// modal
