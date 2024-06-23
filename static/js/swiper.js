document.addEventListener('DOMContentLoaded', function () {
  // Initialize Swiper for the home tab
  var homeSwiper = new Swiper('#nav-home .swiper-container', {
      direction: 'vertical',
      mousewheelControl: true,
      slidesPerView: 1,
      loop: true
  });

  var recentSwiper;

  // Bootstrap tab shown event
  document.querySelector('#nav-recent-tab').addEventListener('shown.bs.tab', function () {
      if (!recentSwiper) {
          // Initialize Swiper for the recent tab
          recentSwiper = new Swiper('#nav-recent .swiper-container', {
              direction: 'vertical',
              mousewheelControl: true,
              slidesPerView: 1,
              loop: true
          });
      }
  });
});
