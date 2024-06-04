document.addEventListener('DOMContentLoaded', function() {
    let soluongInput = document.getElementById('soluong');
    let soluong;

    // Lấy số lượng dự tính lưu trong Local storage nếu có
    let saveSoluong = localStorage.getItem('soluong');
    if(saveSoluong) {
        soluongInput.value = saveSoluong;
    }

    soluongInput.addEventListener('input', function() {
        localStorage.setItem('soluong', soluongInput.value);
    });
    document.getElementById('buyingButton').addEventListener('click', function() {
        alert('Thêm sản phẩm vào giỏ hàng thành công!');
        alert('Vào giỏ hàng để xem thông tin chi tiết.');
    });
});