import { swiperInit, adaptiveSwiper } from './helper'

const productsSwiperOpt = {
  'small': {
    perView: 1,
  },
  'medium': {
    perView: 2,
  },
  'large': {
    perView: 4,
  }
}



document.addEventListener('DOMContentLoaded', () => {
  swiperInit({
    className: '.home-swiper',
    nextBtnClass: '.home-swiper__btn-next',
    prevBtnClass: '.home-swiper__btn-prev',
    spaceBetween: 1,
  })

  adaptiveSwiper({
    className: '.products-swiper',
    nextBtnClass: '.products-swiper__btn-next',
    prevBtnClass: '.products-swiper__btn-prev',
    spaceBetween: 20,
  }, productsSwiperOpt)
});
