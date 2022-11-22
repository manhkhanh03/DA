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
function checkWidth() {
    let selling = document.getElementById('best-selling').clientWidth

    $(document).ready(function () {
        if (selling >= 1220) {
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
                autoplaySpeed: 2000,
            });
        }
        else if (selling >= 740) {
            $('.autoplay').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
            });
        }
        else {
            $('.autoplay').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
            });
        }
    });
}

// $(document).ready(function () {
//     $(window).resize(function () {
//         checkWidth()
//     })
// })

checkWidth()

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

// Ẩn bộ lọc
function hiddenFilter() {
    if (document.getElementById('x').value == '0') {
        document.getElementById('hidden').style.display = 'unset';
        document.getElementById('result-filter').style.width = '60%';
        document.getElementById('hidden-filter').style.maxWidth = '20%';
        document.getElementById('hidden-filter').style.minWidth = '255.82px';
        document.getElementById('right-filter').style.width = '78%';
        document.getElementById('left-filter').style.display = 'block';
        // let modifier = document.getElementsByClassName('modifier')
        // for (i = 0; i < modifier.length; i++)
        //     modifier[i].classList.remove('margin')
        document.getElementById('x').value = '1';
    } else {
        document.getElementById('result-filter').style.width = '72%';
        document.getElementById('hidden-filter').style.maxWidth = '2%';
        document.getElementById('hidden-filter').style.minWidth = '40px';
        document.getElementById('right-filter').style.width = '100%';
        document.getElementById('hidden').style.display = 'none';
        document.getElementById('left-filter').style.display = 'none';
        // let modifier = document.getElementsByClassName('modifier')
        // for (i = 0; i < modifier.length; i++)
        //     modifier[i].classList.add('margin')
        document.getElementById('x').value = '0';
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
