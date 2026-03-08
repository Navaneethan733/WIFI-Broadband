(function ($) {
  'use strict';

  

  
  function handlePreloader() {
    var $preloader = $('.preloader');
    if ($preloader.length) {
      $preloader.delay(500).fadeOut(600, function () {
        $(this).addClass('loaded');
      });
    }
  }

  
  function scrollToTop() {
    var $btn = $('.scroll-to-top');
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 300) {
        $btn.addClass('open');
      } else {
        $btn.removeClass('open');
      }
    });
    $btn.on('click', function () {
      $('html, body').animate({ scrollTop: 0 }, 600, 'swing');
    });
  }

  
  function mobileMenu() {
    
    var $mainNav = $('.main-menu .navigation').first().clone(true);
    var $stickyNav = $('.sticky-header .navigation').first();
    $mainNav.addClass('clearfix');
    $('.mobile-menu .menu-box .navigation').html($mainNav);
    $stickyNav.html($mainNav.clone(true));

    
    $('.mobile-nav-toggler').on('click', function () {
      $('body').addClass('mobile-menu-visible');
    });

    
    $('.mobile-menu .menu-backdrop, .mobile-menu .close-btn').on('click', function () {
      $('body').removeClass('mobile-menu-visible');
    });

    
    $('.mobile-menu li.dropdown > a').on('click', function (e) {
      var $li = $(this).parent();
      if ($li.hasClass('open')) {
        $li.removeClass('open');
        $li.find('ul').slideUp(300);
      } else {
        $li.addClass('open');
        $li.children('ul').slideDown(300);
      }
      e.preventDefault();
      e.stopPropagation();
    });
  }

  
  function searchPopup() {
    var $popup = $('.search-popup');

    $('.search-btn').on('click', function () {
      $popup.addClass('popup-visible');
      setTimeout(function () { $popup.find('input').focus(); }, 200);
    });

    $('.search-back-drop, .close-search').on('click', function () {
      $popup.removeClass('popup-visible');
    });

    $(document).on('keyup', function (e) {
      if (e.key === 'Escape') {
        $popup.removeClass('popup-visible');
        if ($('body').hasClass('mobile-menu-visible')) {
          $('body').removeClass('mobile-menu-visible');
        }
      }
    });
  }

  
  function initCarousels() {
    if (typeof $.fn.owlCarousel === 'undefined') return;

    
    if ($('.mavies-carousel').length) {
      $('.mavies-carousel').owlCarousel({
        loop: true,
        margin: 24,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 700,
        responsive: {
          0:   { items: 1 },
          576: { items: 2 },
          768: { items: 3 },
          1024:{ items: 4 }
        }
      });
    }

    
    if ($('.testimonial-carousel').length) {
      $('.testimonial-carousel').owlCarousel({
        loop: true,
        margin: 24,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 700,
        responsive: {
          0:   { items: 1 },
          768: { items: 2 },
          1024:{ items: 3 }
        }
      });
    }
  }

  
  function initWow() {
    if (typeof WOW === 'undefined') return;
    new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 60,
      mobile: false,
      live: true
    }).init();
  }

  
  function initFancybox() {
    if (typeof $.fn.fancybox === 'undefined') return;
    $('[data-fancybox]').fancybox({
      animationDuration: 366,
      transitionDuration: 366
    });
  }

  
  function stickyHeader() {
    var $sticky = $('.sticky-header');
    if (!$sticky.length) return;
    
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 300) {
        $sticky.addClass('fixed-header');
      } else {
        $sticky.removeClass('fixed-header');
      }
    });
  }

  
  function counterAnimation() {
    if (typeof $.fn.appear === 'undefined') return;
    $('.count').appear(function () {
      var $this = $(this);
      var target = parseFloat($this.text().replace(/[^0-9.]/g, ''));
      var suffix = $this.text().replace(/[0-9.]/g, '');
      $({ count: 0 }).animate({ count: target }, {
        duration: 2000,
        easing: 'swing',
        step: function () {
          $this.text(Math.ceil(this.count) + suffix);
        },
        complete: function () {
          $this.text(target + suffix);
        }
      });
    });
  }

  
  function newsletterForm() {
    $('.subscribe-form form').on('submit', function (e) {
      e.preventDefault();
      var $input = $(this).find('input[type="email"]');
      if ($input.val()) {
        $input.val('');
        $input.attr('placeholder', 'Thank you for subscribing!');
        setTimeout(function () { $input.attr('placeholder', 'Your Email'); }, 3000);
      }
    });
    $('.subscribe-form .theme-btn').on('click', function () {
      $(this).closest('form').trigger('submit');
    });
  }

  
  function serviceHover() {
    
  }

  
  function smoothScroll() {
    $('a[href*="#"]').not('[href="#"]').on('click', function (e) {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && 
          location.hostname === this.hostname) {
        var $target = $(this.hash);
        if ($target.length) {
          e.preventDefault();
          $('html, body').animate({ scrollTop: $target.offset().top - 80 }, 700);
        }
      }
    });
  }

  
  function activeNavHighlight() {
    var sections = $('section[class]');
    $(window).on('scroll', function () {
      var scrollPos = $(this).scrollTop() + 100;
      sections.each(function () {
        var top    = $(this).offset().top;
        var height = $(this).outerHeight();
        var id     = $(this).attr('id');
        if (id && scrollPos >= top && scrollPos < top + height) {
          $('.navigation .current').removeClass('current');
          $('.navigation a[href="#' + id + '"]').closest('li').addClass('current');
        }
      });
    });
  }

  
  function heroSlider() {
    var $slides = $('.hero-slide');
    var $dots   = $('.hero-dot');
    var $prev   = $('.hero-prev');
    var $next   = $('.hero-next');
    if (!$slides.length) return;

    var current  = 0;
    var total    = $slides.length;
    var interval = null;
    var speed    = 5000;

    function goTo(idx) {
      $slides.eq(current).removeClass('active');
      $dots.eq(current).removeClass('active');
      current = (idx + total) % total;
      $slides.eq(current).addClass('active');
      $dots.eq(current).addClass('active');
    }

    function startAuto() {
      interval = setInterval(function () { goTo(current + 1); }, speed);
    }

    function stopAuto() {
      clearInterval(interval);
    }

    $prev.on('click', function () { stopAuto(); goTo(current - 1); startAuto(); });
    $next.on('click', function () { stopAuto(); goTo(current + 1); startAuto(); });

    $dots.on('click', function () {
      stopAuto();
      goTo(parseInt($(this).data('slide'), 10));
      startAuto();
    });

    
    $('.hero-slider').on('mouseenter', stopAuto).on('mouseleave', startAuto);

    startAuto();
  }

  
  $(document).ready(function () {
    handlePreloader();
    mobileMenu();
    searchPopup();
    scrollToTop();
    stickyHeader();
    heroSlider();
    initCarousels();
    initWow();
    initFancybox();
    counterAnimation();
    newsletterForm();
    smoothScroll();
    activeNavHighlight();
  });

})(jQuery);