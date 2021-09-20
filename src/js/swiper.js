import Swiper from 'swiper';
import 'swiper/swiper-bundle';
import SwiperCore, { EffectFade, Autoplay } from 'swiper'

SwiperCore.use([EffectFade, Autoplay]);

const swiper = new Swiper('.swiper-container', {

  direction: 'horizontal',
  observeSlideChildren: true,
  slidesPerView: 1,
  spaceBetween: 10,
  autoHeight: true,
  loop: true,
  preventInteractionOnTransition: true,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },

  effect: 'fade'

});