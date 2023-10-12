import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export function swiperInit({ className, perView, spaceBetween, nextBtnClass, prevBtnClass, direction }) {
  const slidesPerView = perView || 1
  const space = spaceBetween

  new Swiper(className, {
    direction: direction || 'horizontal',
    modules: [Navigation],
    slidesPerView: slidesPerView,
    spaceBetween: space,
    navigation: {
      nextEl: nextBtnClass,
      prevEl: prevBtnClass,
    },
  });
}

export function getWindowSize() {
  const width = document.body.offsetWidth;

  if (width < 780) return 'small'
  else if (width < 1025) return 'medium'
  else return 'large'
}

export function adaptiveSwiper(opt, sizes) {
  let initedSize;

  const init = () => {
    const windowSize = getWindowSize()

    if (windowSize === initedSize) return

    initedSize = windowSize

    swiperInit({
      ...opt,
      perView: sizes[initedSize]?.perView || opt.perView || 2,
    })
  }
  
  init()

  window.addEventListener('resize', init)
}
