// sticky
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('header').addClass('sticky');
        }
        else
            $('header').removeClass('sticky');
    })
})

//slickSlider
$(document).ready(function () {
    $('.autoplay').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

// singleItem
$(document).ready(function () {
    $('.single-item-rtl').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    });
})

// hover navbar
function unHidden() {
    document.getElementById('list-item').addEventListener('mouseover', function () {
        document.getElementById('list-item').style.overflow = 'unset';
    })
    document.getElementById('list-item').addEventListener('mouseleave', function () {
        document.getElementById('list-item').style.overflow = 'hidden';
    })
}

//heart
let likeButton = document.getElementsByClassName('btn-like')
likeButton.addEventListener('click', function (event) {
    event.currentTarget.classList.toggle('pink');
})
