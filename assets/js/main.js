$(function() {
	var pagetop = $('.pagetop'),
		header = $('.header');

  //M.AutoInit();

	$('.testionials .slick').slick({
		slidesToShow: 3,
		centerMode: true,
		variableWidth: true,
		autoplay: true,
		dots: true,
		arrows: false
	});

	$('.recommended-tech-slide').slick({
		slidesToShow: 3,
		// centerMode: true,
		// variableWidth: true,
		autoplay: false,
		dots: true,
		arrows: false,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});

	$(window).on('load scroll', function() {
		var value = $(this).scrollTop();
		if ( value > 150 ) {
			pagetop.fadeIn();
			header.addClass('scroll')
		} else {
			pagetop.fadeOut();
			header.removeClass('scroll')
		}
	});

	$('a[href*=\\#]:not([href=\\#])').not('.inline').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

	$('.search-cat p').click(function(event) {
		$(this).toggleClass('show').next('ul').slideToggle();
	});

	$('.btn__menu').click(function(event) {
		$(this).toggleClass('open').next('.gnav').toggleClass('open');
		$('body').toggleClass('menu-show');
	});

	$('.search-menu p').click(function(event) {
		var el = $(this).next('div');
		$('body').addClass('dropdown');
		$('.search-menu__box').not(el).slideUp();
		$('.search-form .pc_only').slideUp();
		if (el+':visible') {
			el.slideDown();
		}else{
			el.slideUp();
		}
		$(this).toggleClass('open');
	});
	$('.search-icon').click(function(event) {
		$('body').addClass('dropdown');
		$('.search-menu__box').slideUp();
		$(this).toggleClass('open').next('div').slideToggle();
	});
	$('.overlay').click(function(event) {
		$('body').removeClass('dropdown');
		$('.search-menu__box').slideUp();
		$('.search-form .pc_only').slideUp();
	});

	$('.gnav ul li span').click(function(event) {
		$(this).toggleClass('open').next('ul').slideToggle();
	});

	$('.nav-info .photo span').click(function(event) {
		$(this).parent().parent().toggleClass('open').find('ul').slideToggle();
	});

	$('.time-range li').click(function(event) {
		$('.time-range li').removeClass('active');
		$(this).addClass('active');
	});
	$('.daysofw li').click(function(event) {
		$('.daysofw li').removeClass('active');
		$(this).addClass('active');
	});

	$(".tabs li").click(function() {
		var num = $(this).index();
		$(this).closest('.tabs').next(".tabs-contents").find('.tabs-content').hide();
		$(this).closest('.tabs').next(".tabs-contents").find('.tabs-content').eq(num).show();
		$(this).closest('.tabs').find("li").removeClass('select');
		$(this).addClass('select');
	});

	$('.lang-list li').click(function(event) {
		$('.lang-list li').removeClass('active');
		$(this).addClass('active');
	});
	
	$(window).on('load resize', function(event) {
		var vw = $(window).width();
		if (vw < 767) {
			$('.gnav > ul > li > a.hasChild').click(function(e) {
				e.preventDefault();
				$(this).next('.submenu').addClass('show');
			});
		}
	});

	$('.menu-back').click(function(event) {
		$(this).closest('.submenu').removeClass('show');
	});

	$('.quality .plus').click(function(event) {
		var x = parseInt($(this).prev('input').val()) + 1;
		$(this).prev('input').val(x);
	});
	$('.quality .mins').click(function(event) {
		var x = parseInt($(this).next('input').val()) - 1;
		$(this).next('input').val(x);
	});

	$('.successful .overlay').click(function(event) {
		$(this).closest('.successful').addClass('hidden');
	});

	var cboxOptions = {
		width: '100%',
		maxWidth: '750px',
		inline:true
	}
	$(".inline").colorbox({
		width: '100%',
		maxWidth: '750px',
		inline:true
	});

	$(window).resize(function(){
		$.colorbox.resize({
			width: window.innerWidth > parseInt(cboxOptions.maxWidth) ? cboxOptions.maxWidth : cboxOptions.width,
		});
	});

  $('.c-dropdown-trigger').click(function(event) {
    $(this).toggleClass('open').next('.c-dropdown-content').slideToggle();
  });

});
function openModal(e) {
	$.colorbox({
		href:e,
		width: '100%',
		maxWidth: '750px',
		inline:true
	});
};
(function ($, window, document, undefined) {
	var colorboxResize = function(resize) {
		var width = "100%";

		$(window).on('load resize', function(event) {
			var vw = $(window).width();
			if (vw < 767) {
				width = "100%";
			}else{
				width = "750px";
			}
		});
		$.colorbox.settings.width = width;

		if(resize) {
			$.colorbox.resize({
				'width': width
			});
		}
	}

	$(window).resize(function() {
		colorboxResize(true);
	});

})(jQuery, this, this.document);

$(document).on('click', function (e) {
  if ($(e.target).closest(".dropdown").length === 0) {
    $(".dropdown-content").slideUp();
    $(".dropdown-trigger").removeClass('open');
  }
});

	 $('input[name="lesson"]').click(function(){
	        var $radio = $(this);

	        // if this was previously checked
	        if ($radio.data('waschecked') == true)
	        {
	            $radio.prop('checked', false);
	            $radio.data('waschecked', false);
	        }
	        else
	            $radio.data('waschecked', true);

	        // remove was checked from other radios
	        $radio.siblings('input[name="lesson"]').data('waschecked', false);
	        if ($(".teacher-checkout-if-fivelesson .checkout-if-lesson-time input#checkbox-lesson").prop("checked")) {
			   $(".teacher-checkout-info-lessons .email-2student-fivelessons").show();
			}else{
			   $(".teacher-checkout-info-lessons .email-2student-fivelessons").hide();
			}
	        if ($(".teacher-checkout-if-tenlessson .checkout-if-lesson-time input#checkbox-lesson").prop("checked")) {
			   $(".teacher-checkout-info-lessons .email-2student-tenlessons").show();
			}else{
			   $(".teacher-checkout-info-lessons .email-2student-tenlessons").hide();
			}
	    });

$(".img-option").click(function(){
  $("ul.option-for-teacher").toggle();
});



const thumbs = document.querySelectorAll('.thumb');
  // console.log(thumbs);
  thumbs.forEach(function(item,index){
    item.onclick = function(){
      document.getElementById('bigimg').src = this.dataset.image;
    }
  });


  function countChar(val) {
        var len = val.value.length;
        if (len >= 200) {
          val.value = val.value.substring(0, 200);
        } else {
          $('#charNum').text(len++);
        }
      };

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})