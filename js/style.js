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

// Phan trang
let thisPage = 1;
let limit = 10;
let list = document.querySelectorAll('.product-product .box-product');

function loadItem() {
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    list.forEach((item, key) => {
        if (key >= beginGet && key <= endGet)
            item.style.display = 'block';
        else
            item.style.display = 'none';
    })
    listPage();
}
loadItem();

function listPage() {
    let count = Math.ceil(list.length / limit);
    document.querySelector('.listPage').innerHTML = '';

    // prev
    if (thisPage != 1) {
        let prev = document.createElement('li');
        prev.classList.add('fa-solid', 'fa-chevron-left');
        prev.setAttribute('onclick', 'changePage(' + (thisPage - 1) + ')');
        document.querySelector('.listPage').appendChild(prev);
    }

    for (i = 1; i <= count; i++) {
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if (i == thisPage)
            newPage.classList.add('active');
        newPage.setAttribute('onclick', 'changePage(' + i + ')');
        document.querySelector('.listPage').appendChild(newPage);
    }

    // next
    if (thisPage < count) {
        let next = document.createElement('li');
        next.classList.add('fa-solid', 'fa-chevron-right');
        next.setAttribute('onclick', 'changePage(' + (thisPage + 1) + ')');
        document.querySelector('.listPage').appendChild(next);
    }
}

function changePage(i) {
    thisPage = i;
    loadItem();
}

//heart
let likeButton = document.querySelector('.btn-like')
likeButton.addEventListener('click', function (event) {
    event.currentTarget.classList.toggle('pink');
})
