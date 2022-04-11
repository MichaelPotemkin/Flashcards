

// FOR flipper

const cards = document.querySelectorAll('.the_card');

$(".the_card").click(function (){
    this.classList.toggle('is_flipped');
})

// Slider for cards

new Swiper('.swiper');

