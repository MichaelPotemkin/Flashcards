

// FOR flipper

const cards = document.querySelectorAll('.the_card');

$(".the_card").click(function (){
    this.classList.toggle('is_flipped');
})

// Slider for cards

new Swiper('.swiper',{
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination:{
        el: '.swiper-pagination',
        type: 'fraction'
    }
});

