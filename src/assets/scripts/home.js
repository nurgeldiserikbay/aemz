import { swiperInit, getWindowSize } from './helper'

document.addEventListener('DOMContentLoaded', () => {
  const windowSize = getWindowSize()

  swiperInit({
    className: '.home-swiper',
    nextBtnClass: '.home-swiper__btn-next',
    prevBtnClass: '.home-swiper__btn-prev',
    spaceBetween: 1,
  })

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

  swiperInit({
    className: '.products-swiper',
    nextBtnClass: '.products-swiper__btn-next',
    prevBtnClass: '.products-swiper__btn-prev',
    perView: productsSwiperOpt[windowSize]?.perView || 2,
    spaceBetween: 20,
  })
});
