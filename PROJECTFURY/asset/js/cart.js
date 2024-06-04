document.addEventListener('DOMContentLoaded', function() {
    let gia = parseInt(document.getElementById('gia').innerText);
    let soluongInput = document.getElementById('soluong');
    let tamtinh1Output = document.getElementById('tamtinh1');
    let tamtinh2Output = document.getElementById('tamtinh2');
    let tongOutput = document.getElementById('tong');
    let soluong;
    let tamtinh;
    let donggiatext = document.getElementById('donggia').innerText;
    let donggia = parseInt(donggiatext, 10);
    let tong;
    // Lấy số lượng dự tính lưu trong Local storage nếu có
    let saveSoluong = localStorage.getItem('soluong');
    if(saveSoluong) {
        soluongInput.value = saveSoluong;
    }

    // Tính giá trị tạm tính
    function updateTamTinh() {
        soluong = parseInt(soluongInput.value);
        tamtinh = soluong * gia;
        tong = tamtinh + donggia;
        tamtinh1Output.innerHTML = tamtinh;
        tamtinh2Output.innerHTML = tamtinh;
        tongOutput.innerHTML = tong;
    }
    updateTamTinh();

    // 
    soluongInput.addEventListener('input', function() {
        localStorage.setItem('soluong', soluongInput.value);
        updateTamTinh();
    });
    
    console.log(gia, '   ', soluong, '   ', tamtinh);

    // Lưu dữ liệu vào localStorage
    function saveData() {
        localStorage.setItem('gia', gia);
        localStorage.setItem('soluong', soluong);
        localStorage.setItem('tamtinh', tamtinh);
    }
    saveData();
    document.getElementById('cartButton').addEventListener('click', function() {
        saveData();
    });
});