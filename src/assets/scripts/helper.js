import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export function swiperInit({ className, perView, spaceBetween, nextBtnClass, prevBtnClass, direction }, sizes) {
  const wSize = getWindowSize()
  let slidesPerView = perView || (sizes && sizes[wSize]?.perView) || 1
  const space = spaceBetween

  let swiper = getSwiper()

  function getSwiper() {
    let swiper = new Swiper(className, {
      direction: direction || 'horizontal',
      modules: [Navigation],
      slidesPerView: slidesPerView,
      spaceBetween: space,
      loop: true,
      navigation: {
        nextEl: nextBtnClass,
        prevEl: prevBtnClass,
      },
    });

    let initedSize;

    swiper.on('resize', () => {
      if (!sizes) return
  
      const windowSize = getWindowSize()
  
      if (windowSize === initedSize) return
  
      initedSize = windowSize
  
      slidesPerView = sizes[initedSize]?.perView || 1
      swiper.destroy()
      swiper = getSwiper(slidesPerView)
    })
  
    slideChange(swiper)
    
    swiper.on('slideChangeTransitionEnd', slideChange)

    return swiper
  }

  function slideChange(sw) {
    if (slidesPerView === 1) return

    const activeEl = sw.slides.find((e) => e.classList.contains('swiper-slide-active'))
    if (activeEl) {
      if (activeEl.previousElementSibling) activeEl.previousElementSibling.style.opacity = 0;
      
      const elemOpacFunc = swiperHide(slidesPerView)

      elemOpacFunc(activeEl)
    }
  }

  function swiperHide(count) {
    let c = 0

    function rec(el) {
      c += 1
      if (c > count) return
      el.style.opacity = 1;
      if (el.nextElementSibling) rec(el.nextElementSibling)
    }

    return rec
  }
}

export function getWindowSize() {
  const width = document.body.offsetWidth;

  if (width < 780) return 'small'
  else if (width < 1025) return 'medium'
  else return 'large'
}

export function adaptiveSwiper(opt, sizes) {
  swiperInit(opt, sizes)
}
