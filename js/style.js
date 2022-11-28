// focus input


function focusInput(windowWidth) {
    if (windowWidth <= 520) {
        console.log('wd:' + windowWidth)
        $('.search').focusin(function () {
            $('.focus-input').hide()
        })
        $('.search').focusout(function () {
            $('.focus-input').show()
        })
    } else
        $('.search').focusin(function () {
            $('.focus-input').show()
        })

}
let windowWidth = document.getElementById('website').clientWidth
focusInput(windowWidth)

$(document).ready(function () {
    $(window).resize(function () {
        windowWidth = document.getElementById('website').clientWidth
        focusInput(windowWidth)
    })
})

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

// toggle
$(document).ready(function () {
    $('#toggle').click(function () {
        $('.navbar-btn').slideToggle()
    })
})

//slickSlider
let selling

$(document).ready(function () {
    selling = document.getElementById('best-selling').clientWidth
    console.error(selling)
    if (selling >= 1024) {
        $('.autoplay').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    }
    else if (selling >= 920) {
        $('.autoplay').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        });
    }
    else if (selling >= 400) {
        console.log(selling)
        $('.autoplay').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        });
    }
    else {
        console.warn(selling)
        $('.autoplay').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        });
    }
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

// Navbar
// hover navbar
function unHidden() {
    document.getElementById('list-item').addEventListener('mouseover', function () {
        document.getElementById('list-item').style.overflow = 'unset';
    })
    document.getElementById('list-item').addEventListener('mouseleave', function () {
        document.getElementById('list-item').style.overflow = 'hidden';
    })
}

function unNavHidden() {
    document.getElementById('item-nav').addEventListener('mouseover', function () {
        document.getElementById('item-nav').style.overflow = 'unset';
    })
    document.getElementById('item-nav').addEventListener('mouseleave', function () {
        document.getElementById('item-nav').style.overflow = 'hidden';
    })
}

unHidden();
unNavHidden();


// Bo loc
// Ẩn bộ lọc
function hiddenFilter() {
    let hidden = document.getElementById('hidden')
    let resultFilter = document.getElementById('result-filter')
    let hiddenFilter = document.getElementById('hidden-filter')
    let leftFilter = document.getElementById('left-filter')
    let x = document.getElementById('x')

    if (x.value == '0') {
        hidden.style.display = 'unset';
        resultFilter.style.width = '60%';
        hiddenFilter.style.maxWidth = '20%';
        hiddenFilter.style.minWidth = '255.82px';
        leftFilter.style.display = 'block';
        x.value = '1';
    } else {
        hidden.style.display = 'none';
        resultFilter.style.width = '72%';
        hiddenFilter.style.maxWidth = '2%';
        hiddenFilter.style.minWidth = '40px';
        leftFilter.style.display = 'none';
        x.value = '0';
    }
};

// Sắp xếp bộ lọc
function sortFilter() {
    if (document.getElementById('down').value == '0') {
        document.getElementById('offer-sort').style.display = 'none';
        document.getElementById('down').value = '1';
    }
    else {
        document.getElementById('offer-sort').style.display = 'block';
        document.getElementById('down').value = '0';
    }
}

// Ẩn phong cách
let minusOne = document.getElementById('minusOne')
let plusOne = document.getElementById('plusOne')
let styleOne = document.getElementById('styleOne')
let minusTwo = document.getElementById('minusTwo')
let plusTwo = document.getElementById('plusTwo')
let styleTwo = document.getElementById('styleTwo')
let minusThree = document.getElementById('minusThree')
let plusThree = document.getElementById('plusThree')
let styleThree = document.getElementById('styleThree')

minusOne.addEventListener('click', function (event) {
    event.currentTarget.style.display = 'none'
    styleOne.style.display = 'none'
    plusOne.style.display = 'block'
})
plusOne.addEventListener('click', function (event) {
    event.currentTarget.style.display = 'none'
    styleOne.style.display = 'flex'
    minusOne.style.display = 'block'
})

minusTwo.addEventListener('click', function (event) {
    event.currentTarget.style.display = 'none'
    styleTwo.style.display = 'none'
    plusTwo.style.display = 'block'
})
plusTwo.addEventListener('click', function (event) {
    event.currentTarget.style.display = 'none'
    styleTwo.style.display = 'flex'
    minusTwo.style.display = 'block'
})

minusThree.addEventListener('click', function (event) {
    event.currentTarget.style.display = 'none'
    styleThree.style.display = 'none'
    plusThree.style.display = 'block'
})
plusThree.addEventListener('click', function (event) {
    event.currentTarget.style.display = 'none'
    styleThree.style.display = 'flex'
    minusThree.style.display = 'block'
})

//heart
let likeButton = document.getElementsByClassName('btn-like')

for (i = 0; i < likeButton.length; i++) {
    likeButton[i].addEventListener('click', function (event) {
        event.currentTarget.classList.toggle('pink');
    })
}

