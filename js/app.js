$(document).ready(function(){
    $(".header__burger").on('click', function(){
        $(this).toggleClass("is-cross");
        $(this).toggleClass("bright");
        $(".header__logo").toggleClass("bright");
        $(".header__menu").toggleClass("is-active");
    });

    $(".header__nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $(".header__menu").removeClass("is-active");
        $(".header__burger").removeClass("is-cross");
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(".js-play").on("click", function(e) {
        e.preventDefault();
       $("#bgvid").trigger('play');
    });

    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 10,
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 4
            }
        }
    });

    $( function() {
        $( "#accordion" ).accordion({
            collapsible: true,
            active : 'none'
        });
    } );
});
