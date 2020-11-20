function slider(){
    var slide = document.querySelectorAll(".slide");
    function autoSlide() {
        var activeSlide = document.querySelector(".active.slide");
        for (var i = 0; i < slide.length; i++){
            slide[i].className = "slide";
        }
    
        if (activeSlide.nextElementSibling == null) {
            slide[0].classList.add("active")
        }else{
            activeSlide.nextElementSibling.className = "active slide";
        }
    }

    var setTime = setInterval(autoSlide, 7000)
}

slider()

function header(){
    var header = document.querySelectorAll(".header");
    window.addEventListener("scroll", function(){
        var y = window.scrollY;
        if (y > 100) {
            header[0].classList.add("active")
        }else {
            header[0].classList.remove("active")
        }
    })
}

header()

$('#about-us').owlCarousel({
    dots: true,
    loop:true,
    margin:10,
    nav: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#service').owlCarousel({
    autoplay: true,
    dots: false,
    loop:true,
    margin:30,
    nav: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('#project').owlCarousel({
    autoplay: true,
    dots: false,
    loop:true,
    margin:0,
    nav: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

$('#team').owlCarousel({
    autoplay: true,
    dots: true,
    loop:true,
    margin:15,
    nav: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})

new WOW().init();