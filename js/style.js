let like = document.getElementsByClassName('btn-like')
for (i = 0; i < like.length; i++) {
    like[i].addEventListener('click', function (event) {
        event.currentTarget.classList.toggle('pink');
    })
}

$(document).ready(function () {
    $('.barsButton').click(function () {
        $('.left-filter').slideToggle()
        $('.right-filter').css('display', 'none');
        $('.body').css('max-width', '100%')
    })
})

$(document).ready(function () {
    $('.close-filter').click(function () {
        $('.left-filter').hide()
        $('.right-filter').css('display', 'block');
        $('.body').css('max-width', '96%')
    })
})

// tang tong so luong san pham
// all in input and thanh toan
var allInput = document.getElementsByClassName('checkbox')
var action = document.getElementById('action')
var sumProduct = document.getElementById('sumProduct')
var sumPrice = document.getElementById('sumPrice')
function actionn() {
    action.onclick = function () {
        if (this.checked) {
            $('input[type=checkbox]').prop('checked', true)
        } else {
            $('input[type=checkbox]').prop('checked', false)
        }
    }
}

// Tang so luong san pham
let plus = document.getElementsByClassName('plus')
let minus = document.getElementsByClassName('minus')
let node = document.getElementsByClassName('p')
let sum = document.getElementsByClassName('sum-product')
let money = document.getElementsByClassName('amount-money')
let rootPrice = document.getElementsByClassName('root-price')
let sp, price
for (let j = 0; j < node.length; j++) {

    sp = [j]
    price = [j]
    if (sum[j].innerHTML == 0) {
        minus[j].classList.add('P-N')
        node[j].innerHTML = sum[j].innerHTML
        plus[j].classList.add('P-N')
    }
    else {
        let amountMoney = [j]
        amountMoney[j] = money[j].innerHTML
        let count = [j]
        count[j] = node[j].innerHTML
        let textStock
        var stock = document.getElementsByClassName('stock')
        plus[j].addEventListener('click', function () {
            if (node[j].innerHTML < sum[j].innerHTML) {
                if (node[j].innerHTML == 0)
                    minus[j].classList.remove('P-N')
                ++node[j].innerHTML
                count[j] = node[j].innerHTML
                money[j].innerHTML = Number(amountMoney[j]) + Number(money[j].innerHTML)
                if (allInput[j].value == 1)
                    check(node, money)
            }
            else if (count[j] == sum[j].innerHTML) {
                plus[j].classList.add('P-N')
                textStock = document.createElement('p')
                textStock.innerText = 'Hết hàng'
                stock[j].appendChild(textStock)
                count[j]++
            }
            console.log(sp[j], price[j])
        })

        minus[j].addEventListener('click', function () {
            if (count[j] > sum[j].innerHTML) {
                plus[j].classList.remove('P-N')
                stock[j].removeChild(textStock)
                count[j]--
            }
            if (node[j].innerHTML > 0) {
                --node[j].innerHTML
                money[j].innerHTML = Number(money[j].innerHTML) - Number(amountMoney[j])
                if (allInput[j].value == 1)
                    check(node, money)
                if (node[j].innerHTML == 0)
                    minus[j].classList.add('P-N')
            }
            console.log(sp[j], price[j])
        })
    }
}

function Minus(node, money, i) {
    if (allInput[i].value == 1) {
        sp[i] = Number(node[i].innerHTML)
        price[i] = Number(money[i].innerHTML)
    }
    else {
        sp[i] = 0
        price[i] = 0
    }
    sumProduct.innerHTML = sp[i]
    sumPrice.innerHTML = price[i]
}

function Plus(node, money, i) {
    if (allInput[i].value == 1) {
        sp[i] = Number(node[i].innerHTML)
        price[i] = Number(money[i].innerHTML)
    } else {
        sp[i] = 0
        price[i] = 0
    }
    sumProduct.innerHTML = sp[i]
    sumPrice.innerHTML = price[i]
}


function check(node, money) {
    let b = 0
    let a = 0
    let c = 0
    for (let i = 0; i < allInput.length; i++) {
        allInput[i].addEventListener('click', function () {
            if (allInput[i].checked)
                allInput[i].value = '1'
            else
                allInput[i].value = '0'

            if (allInput[i].value == 1) {
                // if (node[i].innerHTML != 0) {
                a += Number(allInput[i].value)
                Plus(node, money, i)

                c += Number(money[i].innerHTML)
                if (a >= 2) {
                    if (node[i].innerHTML >= 2) {
                        console.log(b, sp[i])
                        b += sp[i]
                    }
                } else {
                    console.log(money[i].innerHTML)
                    c = Number(money[i].innerHTML)
                }
                b += Number(node[i].innerHTML)
            }
            else {
                Minus(node, money, i)
                if (node[i].innerHTML != 0) {
                    c -= Number(money[i].innerHTML)
                    b--
                    if (node[i].innerHTML >= 2) {
                        c = Number(money[i].innerHTML) - Number(money[i].innerHTML)
                        b = Number(node[i].innerHTML) - Number(node[i].innerHTML)
                    }
                    if (a >= 2) {
                    }
                }
                else {
                    c = 0
                    b = 0
                }
                a--
            }
            console.log(a, b, c)

            sumProduct.innerHTML = b
            sumPrice.innerHTML = c
            console.log(sp, price)
        })
    }
}
check(node, money)

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

// hien thi thanh navbar
function grow(windowWidth) {
    if (windowWidth > 1024)
        document.getElementById('navbar-btn').style.display = 'flex'
    else {
        document.getElementById('navbar-btn').style.display = 'none'
    }
}

function onclick(windowWidth) {
    $(document).ready(function () {
        if (windowWidth <= 1024) {
            $('.navbar li').click(function () {
                document.getElementById('navbar-btn').style.display = 'none'
            })
        }
        else {
            $('.navbar li').click(function () {
                document.getElementById('navbar-btn').style.display = 'flex'
            })
        }
    })
}

let windowWidth = document.getElementById('website').clientWidth
focusInput(windowWidth)
grow(windowWidth)
onclick(windowWidth)
reADD(windowWidth)
sort(windowWidth)
slide(windowWidth)

$(document).ready(function () {
    $(window).resize(function () {
        windowWidth = document.getElementById('website').clientWidth
        focusInput(windowWidth)
        grow(windowWidth)
        onclick(windowWidth)
        reADD(windowWidth)
        sort(windowWidth)
        slide(windowWidth)
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
function slide(windowWidth) {
    if (windowWidth >= 1024) {
        $('.autoplay').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    }
    else if (windowWidth >= 740) {
        $('.autoplay').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        });
    }
    // else if (windowWidth >= 320) {
    //     $('.autoplay').slick({
    //         slidesToShow: 3,
    //         slidesToScroll: 1,
    //         autoplay: true,
    //         autoplaySpeed: 2000
    //     });
    // }
    else {
        console.warn(windowWidth)
        $('.autoplay').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        });
    }
}


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

// bo loc
$(document).ready(function () {
    var x = $('.x').toArray()
    var hidden = $('.hidden').toArray()
    var resultFilter = $('.result-filter').toArray()
    var hiddenFilter = $('.hidden-filter').toArray()
    var leftFilter = $('.left-filter').toArray()
    for (let i = 0; i < x.length; i++) {
        x[i].addEventListener('click', function () {
            if (x[i].value == '0') {
                hidden[i].style.display = 'unset'
                resultFilter[i].style.width = '60%';
                hiddenFilter[i].style.maxWidth = '20%';
                hiddenFilter[i].style.minWidth = '255.82px';
                leftFilter[i].style.display = 'block';
                x[i].value = '1'
            } else {
                hidden[i].style.display = 'none';
                resultFilter[i].style.width = '72%';
                hiddenFilter[i].style.maxWidth = '2%';
                hiddenFilter[i].style.minWidth = '40px';
                leftFilter[i].style.display = 'none';
                x[i].value = '0';
            }
        })
    }
})

var offer = document.getElementsByClassName('offer-sort')
// var sortScroll = document.getElementsByClassName('sort-scroll')
var down = document.getElementsByClassName('down')
console.log(offer)
for (let i = 0; i < down.length; i++) {
    down[i].addEventListener('click', function () {
        offer[i].style.display = 'block'
        offer[i].addEventListener('mouseleave', function () {
            offer[i].style.display = 'none'
        })
    })
}


// Ẩn phong cách
function reADD(windowWidth) {
    var more = document.getElementsByClassName('more')

    for (let i = 0; i < more.length; i++) {
        if (windowWidth > 1024) {
            more[i].classList.add('fa-minus')
            more[i].classList.remove('fa-chevron-up')
            more[i].classList.remove('fa-chevron-down')
        } else {
            more[i].classList.add('fa-chevron-up')
            more[i].classList.remove('fa-plus')
            more[i].classList.remove('fa-minus')
        }
    }
}

function sort(windowWidth) {
    var more = document.getElementsByClassName('more')
    var style = document.getElementsByClassName('style')
    var info = document.getElementsByClassName('info')
    console.log(info)

    for (let i = 0; i < more.length; i++) {
        more[i].addEventListener('click', function () {
            if (more[i].value == '0') {
                more[i].value = '1'
                style[i].style.display = 'flex'
                if (windowWidth > 1024) {
                    more[i].classList.remove('fa-plus')
                    more[i].classList.add('fa-minus')
                    more[i].classList.remove('fa-chevron-up')
                    more[i].classList.remove('fa-chevron-down')
                } else {
                    more[i].classList.remove('fa-chevron-down')
                    more[i].classList.remove('fa-plus')
                    more[i].classList.remove('fa-minus')
                    more[i].classList.add('fa-chevron-up')
                    info[i].style.display = 'none'
                }
            }
            else {
                more[i].value = '0'
                style[i].style.display = 'none'
                if (windowWidth > 1024) {
                    more[i].classList.remove('fa-minus')
                    more[i].classList.add('fa-plus')
                    more[i].classList.remove('fa-chevron-up')
                    more[i].classList.remove('fa-chevron-down')
                } else {
                    more[i].classList.remove('fa-chevron-up')
                    more[i].classList.add('fa-chevron-down')
                    more[i].classList.remove('fa-plus')
                    more[i].classList.remove('fa-minus')
                    info[i].style.display = 'block'
                }
            }
        })
    }
}


// Phan trang
// limit: gioi han
let limit = 0;
let thisPage = 1;
let list = document.querySelectorAll('.product-product .box-product');
function checkLimit(widthPage) {
    console.log(widthPage)
    if (widthPage >= 400 && widthPage <= 1024) {
        limit = 12;
    }
    else {
        limit = 10;
    }
    loadItem()
}

let widthPage = document.getElementById('website').clientWidth
checkLimit(widthPage)
$(document).ready(function () {
    $(window).resize(function () {
        widthPage = document.getElementById('website').clientWidth
        checkLimit(widthPage)
    })
})

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
    if (thisPage >= 1) {
        let prev = document.createElement('li');
        prev.classList.add('fa-solid', 'fa-chevron-left');
        if (thisPage > 1) {
            prev.setAttribute('onclick', 'changePage(' + (thisPage - 1) + ')');
        } else {
            prev.classList.add('P-N')
        }
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
    if (thisPage <= count) {
        let next = document.createElement('li');
        next.classList.add('fa-solid', 'fa-chevron-right');
        if (thisPage < count) {
            next.setAttribute('onclick', 'changePage(' + (thisPage + 1) + ')');
        } else {
            next.classList.add('P-N')
        }
        document.querySelector('.listPage').appendChild(next);
    }
}

function changePage(i) {

    thisPage = i;
    loadItem();
}

