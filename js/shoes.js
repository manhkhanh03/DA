
// Ẩn bộ lọc
function hiddenFilter() {
    if (document.getElementById('x').value == '0') {
        document.getElementById('hidden').style.display = 'unset';
        document.getElementById('result-filter').style.width = '60%';
        document.getElementById('hidden-filter').style.width = '20%';
        document.getElementById('left-filter').style.display = 'block';
        document.getElementById('x').value = '1';
    } else {
        document.getElementById('result-filter').style.width = '72%';
        document.getElementById('hidden-filter').style.width = '8%';
        document.getElementById('hidden').style.display = 'none';
        document.getElementById('left-filter').style.display = 'none';
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
let btnHidden = document.querySelector('.fa-minus')
btnHidden.addEventListener('click', function (event) {
    event.currentTarget.classList.toggle('show');
    document.getElementById('style').style.display = 'none';
    document.getElementById('plus').style.display = 'block';
    document.getElementById('minus').style.display = 'none';

})

let btnUnHidden = document.querySelector('.fa-plus')
btnUnHidden.addEventListener('click', function (event) {
    event.currentTarget.classList.toggle('show');
    document.getElementById('style').style.display = 'flex';
    document.getElementById('plus').style.display = 'none';
    document.getElementById('minus').style.display = 'block';
})

