function seeMore() {
    if (document.getElementById('see-more').value == '0') {
        document.getElementById('product-product').style.maxHeight = '1060px';
        document.getElementById('see-more').style.margin = '32px 0 20px';
        document.getElementById('see').innerHTML = 'Ẩn Bớt';
        document.getElementById('see-more').value = '1';

    }
    else {
        document.getElementById('product-product').style.maxHeight = '710px';
        document.getElementById('see-more').style.margin = '20px 0';
        document.getElementById('see').innerHTML = 'Xem Thêm';
        document.getElementById('see-more').value = '0';
    }
}