window.onload = function() {
	var contentWrapper = document.querySelector('.header .content-wrapper');
	document.querySelector('.header').onmousemove = (e) => {
		contentWrapper.style.left = e.pageX/100+'px';
		contentWrapper.style.top = e.pageY/100+'px';
	};
	$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
          };
        });
      }
    }
  });
};
