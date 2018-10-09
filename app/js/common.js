$(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    dots: true,
    dotsContainer: '.dots',
    nav: false,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    items: 1,
    animateOut: 'zoomOut',
    animateIn: 'zoomIn',
    navSpeed: 2000,
    responsive: {
      800: {
        nav: true
      }
    }
  })

  $('.event__btn').on('click', function(e) {
    e.preventDefault();
  })

  $('.hamburger').on('click', function() {
    $(this).toggleClass('is-active');
    $('.nav').toggleClass('nav-active');
  })

  $('.flowing-scroll').on( 'click', function(){ 
  let el = $(this);
  let dest = el.attr('href'); // получаем направление
  if(dest !== undefined && dest !== '') { // проверяем существование
      $('html').animate({ 
          scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
      }, 1000 // скорость прокрутки
      );
  }
  return false;
  });

  let target = $('.tour');
  let targetPos = target.offset().top;
  let winHeight = $(window).height();
  let scrollToElem = targetPos - winHeight;
  $(window).scroll(function(){
    var winScrollTop = $(this).scrollTop();
    if(winScrollTop > scrollToElem){
      $('.scroll-top').css({
        display: 'block'
      });
    } else {
      $('.scroll-top').css({
            display: 'none'
      });
    }
  });
    let map;

    DG.then(function () {
        map = DG.map('map', {
            center: [42.842088, 74.621858],
            zoom: 16,
            dragging : true,
            touchZoom: true,
            scrollWheelZoom: false,
            doubleClickZoom: false,
            boxZoom: false,
            geoclicker: false,
            zoomControl: true,
            fullscreenControl: true
        });

        DG.marker([42.842088, 74.621858]).addTo(map).bindPopup('Hiking Travel').bindLabel('Hiking Travel', {static: true});

    });
    
    $("#phone").mask("+999 (999) 999-999");
    new WOW().init();

    // $('.banner__link').on('click', function(e) {
    // //   let popupSign = $('<div/>', {
    // //     class: 'popup-sign'
    // //   });
    // //   $('body').append(popupSign);
    // //   let signBlock = $('<div/>', {
    // //     class: 'sign-block'
    // //   })
    // //   $(popupSign).append(signBlock);
    // //   $('<h4/>', {
    // //     class: 'sign-caption',
    // //     text: 'Please provide your contact details'
    // //   }).appendTo(signBlock);
    // //   $('<button/>', {
    // //     class: 'popup-close',
    // //     text: 'Закрыть'
    // //   }).appendTo(signBlock);
    // //   let form = $('<form/>',{
    // //     action: '#'
    // //   }).appendTo(signBlock);
    // //   let input1 = $('<input/>', {
    // //     type: 'text',
    // //     name: 'user-name',
    // //     id: 'name',
    // //     placeholder: 'Name'
    // //   }).appendTo(form);
    // //   let input2 = $('<input/>', {
    // //     type: 'tel',
    // //     name: 'user-phone',
    // //     id: 'phone',
    // //     placeholder: 'Phone Number'
    // //   }).appendTo(form);
    // //   let input3 = $('<input/>', {
    // //     type: 'email',
    // //     name: 'user-mail',
    // //     id: 'email',
    // //     placeholder: 'E-Mail'
    // //   }).appendTo(form);
    // //   let input4 = $('<input/>', {
    // //     type: 'text',
    // //     name: 'tour-package',
    // //     id: 'tour-package',
    // //     placeholder: 'Tour Package'
    // //   }).appendTo(form);
    // //   let input5 = $('<input/>', {
    // //     type: 'text',
    // //     name: 'members',
    // //     id: 'members',
    // //     placeholder: 'Number of persons'
    // //   }).appendTo(form);
    // //   let p = $('<p/>').appendTo(form);
    // //   $('<button/>', {
    // //     class: 'btn contact__link',
    // //     type: 'submit',
    // //     text: 'send'
    // //   }).appendTo(p);
    // //   $("#phone").mask("+999 (999) 999-999");
    // // new WOW().init();
    // $('.popup-sign').addClass('popup-active')
    // $('.popup-close').on('click', function(e) {
    //   e.preventDefault();
    //   $
    // });
    // });
});