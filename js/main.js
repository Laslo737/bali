$(document).ready(function () {
   let dom = $('.form__main input[name=Недвижимость]');
   let room = $('.form__second input[name=Спальня]');
   let money = $('.form__third input[name=Бюджет]');

   let roombtn1 = $('.form__second-btn');
   let roombtn2 = $('.form__third-btn');

   let soc2 = $('#item__whatsapp');
   let soc3 = $('#item__tel');

   $('#header__btn').click(function () {
      setTimeout(function () {
         $('.header').css({
            'opacity': '0',
            'pointer-events': 'none',
         })
      }, 100);
      setTimeout(function () {
         $('.wrap').css({
            'opacity': '1',
            'pointer-events': 'all',
         })
      }, 1100);
   });

   $(soc2).click(function () {
      $('#formDisplay').css({
         'display': 'block',
      });
      $('#phone_phone').css({'display': 'none'})
      $('#whatsapp_phone').css({'display': 'block'})
      $(this).addClass('social__item-active');
      $('#item__tel').removeClass('social__item-active');
      $('#input__whatsapp, .form__btn, #input__name').css({
         'display': 'block',
      });
      $('#input__telefon,#input__telegram').css({
         'display': 'none',
      });
      $('.last__label').css({
         'height': '130px',
      });
      $('#input__whatsapp').attr('required', 'required');
      $('#input__telefon').removeAttr('required')
   });
   $(soc3).click(function () {
      $('#whatsapp_phone').css({'display': 'none'})
      $('#phone_phone').css({'display': 'block'})
      $('#formDisplay').css({
         'display': 'block',
      });
      $(this).addClass('social__item-active');
      $('#item__whatsapp').removeClass('social__item-active');
      $('#input__telefon, .form__btn, #input__name').css({
         'display': 'block',
      });
      $('#input__whatsapp,#input__telegram').css({
         'display': 'none',
      });
      $('.last__label').css({
         'height': '130px',
      });
      $('#input__whatsapp').removeAttr('required')
      $('#input__telefon').attr('required', 'required');
   });

   $(dom).click(function () {
      if ($(this).is(':checked')) {
         setTimeout(function () {
            $('.form__main').addClass('visible');
            $('.form__second').removeClass('visible');
         }, 500);
      };
   });
   $(room).click(function () {
      if ($(this).is(':checked')) {
         setTimeout(function () {
            $('.form__second').addClass('visible');
            $('.form__third').removeClass('visible');
         }, 500);
      };
   });
   $(money).click(function () {
      if ($(this).is(':checked')) {
         setTimeout(function () {
            $('.form__third').addClass('visible');
            $('.form__last').removeClass('visible');
         }, 500);
      };
   });
   $(roombtn1).click(function () {
      $('.form__main').removeClass('visible');
      $('.form__second').addClass('visible');
   });
   $(roombtn2).click(function () {
      $('.form__third').addClass('visible');
      $('.form__second').removeClass('visible');
   });


});