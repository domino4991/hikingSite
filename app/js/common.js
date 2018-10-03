$(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    dots: true,
    dotsContainer: '.dots',
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    items: 1,
    animateOut: 'zoomOut',
    animateIn: 'zoomIn',
    navSpeed: 2000
  })

  $('.event__btn').on('click', function(e) {
    e.preventDefault();
  })

  // $('.dots__button').on('click', function (e) {
  //   e.preventDefault;
  //   $(this).toggleClass('dots-active')
  // })
  //  $('.hamburger').on('click', function() {
  //    $(this).toggleClass('is-active');
  //    $('.top-line__nav').toggleClass('if-active');
  //    $('.nav__item').toggleClass('if-active-item');
  //  })

  //  $('.flowing-scroll').on( 'click', function(){ 
  //   let el = $(this);
  //   let dest = el.attr('href'); // получаем направление
  //   if(dest !== undefined && dest !== '') { // проверяем существование
  //       $('html').animate({ 
  //           scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
  //       }, 1000 // скорость прокрутки
  //       );
  //   }
  //   return false;
  //   });

    // let target = $('.artists');
    // let targetPos = target.offset().top;
    // let winHeight = $(window).height();
    // let scrollToElem = targetPos - winHeight;
    // $(window).scroll(function(){
    //   var winScrollTop = $(this).scrollTop();
    //   if(winScrollTop > scrollToElem){
    //     $('.scroll-top').css({
    //       display: 'block'
    //     });
    //   } else {
    //     $('.scroll-top').css({
    //           display: 'none'
    //     });
    //   }
    // });
    let map;

    DG.then(function () {
        map = DG.map('map', {
            center: [42.842088, 74.621858],
            zoom: 16
        });

        DG.marker([42.842088, 74.621858]).addTo(map).bindPopup('Hiking Travel').bindLabel('Hiking Travel', {static: true});

    });
});