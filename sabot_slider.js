var tpj=jQuery;
				tpj.noConflict();
				
				tpj(document).ready(function() {
				
				if (tpj.fn.cssOriginal!=undefined)
					tpj.fn.css = tpj.fn.cssOriginal;

					tpj('.bannercontainer').kenburn(
						{										
												
							thumbWidth:100,
							thumbHeight:100,
							
							thumbAmount:7,																					
							thumbStyle:"thumb",			//thumb, bullet, none, both
							thumbVideoIcon:"off",
							
							thumbVertical:"bottom",
							thumbHorizontal:"center",							
							thumbXOffset:20,
							thumbYOffset:40,
							bulletXOffset:0,
							bulletYOffset:-16,
							
							hideThumbs:"off",
							repairChromeBug:"on",
																																										
							touchenabled:'on',
							pauseOnRollOverThumbs:'on',
							pauseOnRollOverMain:'off',
							preloadedSlides:2,							
							
							timer:7,
							
							debug:"off",						
							
							
						});
						
					
			});
