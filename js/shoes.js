
// Ẩn bộ lọc
function hiddenFilter() {
    if (document.getElementById('x').value == '0') {
        document.getElementById('hidden').style.display = 'unset';
        document.getElementById('result-filter').style.width = '60%';
        document.getElementById('hidden-filter').style.width = '20%';
        document.getElementById('right-filter').style.width = '78%';
        document.getElementById('left-filter').style.display = 'block';
        document.getElementById('x').value = '1';
    } else {
        document.getElementById('result-filter').style.width = '72%';
        document.getElementById('hidden-filter').style.width = '2%';
        document.getElementById('right-filter').style.width = '100%';
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
let btnHidden = document.getElementsByClassName('fa-minus')
for (i = 0; i < btnHidden.length; i++) {
    btnHidden[i].addEventListener('click', function (event) {    
        let styles = document.getElementsByClassName('style')
        let plus = document.getElementsByClassName('fa-plus')
        for(j = 0; j < styles.length; j++) {
            event.currentTarget.classList.toggle('show');
            styles[j].style.display = 'none'
            plus[j].style.display = 'block'
        }
    })
}

let btnUnHidden = document.getElementsByClassName('fa-plus')
for (i = 0; i < btnUnHidden.length; i++) {
    btnUnHidden[i].addEventListener('click', function (event) {     
        let styles = document.getElementsByClassName('style')
        let minus = document.getElementsByClassName('fa-minus')
        for(j = 0; j < styles.length; j++) {
            event.currentTarget.classList.toggle('show');
            styles[j].style.display = 'flex'
            minus[j].style.display = 'block'
        }
    })
}