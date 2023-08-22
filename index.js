$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 1,
        margin: 20,
        nav:true,
        dots:true,
        loop:true,
        autoplay:true,
        // custom prev and next arrow setup
        navText:['<div class="slick-arrow prev"><span class="fa fa-angle-left"></span> </   div>','<div class="slick-arrow next"><span class="fa fa-angle-right"></span> </   div>'],
        rewind:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        animateOut: 'slideOutDown',
        animateIn: 'bounceIn',
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:true
            },
            1000:{
                items:1,
                nav:true,
                loop:false
            }
        }
    })
})


