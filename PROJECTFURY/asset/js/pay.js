document.getElementById('sale1').addEventListener('click', function() {
    let extraInput = document.getElementById('sale1-value');
    if (extraInput.style.display === 'none' || extraInput.style.display === '') {
        extraInput.style.display = 'block';
    } else {
        extraInput.style.display = 'none';
    }
});

// Tạo mã ưu đãi
function TaoMaUuDai(length, TPMa){
    let MaUuDai = '';
    let TPMaDai = TPMa.length;
    for(let i = 0; i < length; i++){
         MaUuDai += TPMa.charAt(Math.floor(Math.random() * TPMaDai));
     }
    return MaUuDai;
}
let TPMa = '0123456789QƯERTYUIOPASDFGHJKLZXCVBNM';
let MaUuDai = TaoMaUuDai(6, TPMa);
console.log(MaUuDai);

// Kiểm tra mã ưu đãi
document.getElementById('saleButton').addEventListener('click', function(event) {
    let sale = document.getElementById('sale').value;
    if(sale === MaUuDai){
        alert('Nhập mã ưu đãi thành công!');
    }
    else{
        alert('Mã ưu đãi không tồn tại');
    }
});

// Kiểm tra thông tin thanh toán
document.getElementById('payButton').addEventListener('click', function(event) {
    // Ngăn chặn việc gửi biểu mẫu để xác thực
    event.preventDefault();

    document.querySelectorAll('.error').forEach(function(error) {
        error.classList.remove('show');
    });

    const namePattern = /^[A-Za-zÀ-ÿÁÀẢÃẠáàảãạẮẰẲẲẶắằẳẵặẤẦẨẪẬấầẩẫậĐđÉÈẺẼẸéèẻẽẹẾỀỂỄỆếềểễệÍÌỈĨỊíìỉĩịÓÒỎÕỌóòỏõọỐỒỔỖỘốồổỗộỚỜỞỠỢớờởỡợÚÙỦŨỤúùủũụỨỪỬỮỰứừửữựÝỲỶỸỴýỳỷỹỵ\s]+$/;
    const numberPattern = /^[0-9]+$/;
    const emailPattern = /^\S+@\S+\.\S+$/;

    let lastname = document.getElementById('lastname').value;
    if(!namePattern.test(lastname)){
        document.getElementById('lastname-error').classList.add('show');
    }
    let firstname = document.getElementById('lastname').value;
    if(!namePattern.test(firstname)){
        document.getElementById('firstname-error').classList.add('show');
    }
    let postal = document.getElementById('postal').value;
    if(postal && !numberPattern.test(postal)){
        document.getElementById('postal-error').classList.add('show');
    }
    let city = document.getElementById('city').value;
    if(!namePattern.test(city)){
        document.getElementById('city-error').classList.add('show');
    }
    let phone = document.getElementById('phone').value;
    if(!numberPattern.test(phone)){
        document.getElementById('phone-error').classList.add('show');
    }
    let email = document.getElementById('email').value;
    if(!emailPattern.test(email)){
        document.getElementById('email-error').classList.add('show');
    }

    let errors = document.querySelectorAll('.error.show');
    if(errors.length === 0){
        alert('Đặt hàng thành công!');
    }
    else{
        alert('Vui lòng nhập đầy đủ thông tin có gắn * và sửa các thông tin sai ký tự!');
    }
});

let gia, soluong, tamtinh;
// Lấy dữ liệu từ localStorage
document.addEventListener('DOMContentLoaded', function() {
    gia = parseInt(localStorage.getItem('gia'));
    soluong = parseInt(localStorage.getItem('soluong'));
    tamtinh = parseInt(localStorage.getItem('tamtinh'));
    
    document.getElementById('soluong').innerHTML = soluong;
    document.getElementById('tamtinh').innerHTML = tamtinh;
    let donggiatext = document.getElementById('donggia').innerText;
    let donggia = parseInt(donggiatext, 10);
    let tong = tamtinh + donggia;
    document.getElementById('tong').innerHTML = tong;
});