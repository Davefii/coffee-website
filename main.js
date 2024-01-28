const swiper = new Swiper(".mySwiper",{
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay:{
        delay:2900,
        disableOnInteraction: false,
    },
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    }
    }
);