// ! Tính tiền lương
// input:
// + Lương một ngày
// + Số ngày làm
// progress:
// + Lương = Lương một ngày * Số ngày làm
// output:
// + Lương
function quyDoiTienSangVN(tien) {
  var tienVN = tien.toLocaleString("vn-VN", {
    style: "currency",
    currency: "VND",
  });
  return tienVN;
}
function progressSalary() {
  var salaryADay = document.getElementById("salaryADay").value;
  var workingDay = document.getElementById("workingDay").value;
  var salary = workingDay * salaryADay;
  document.querySelector(".htprogressSalary").innerHTML =
    quyDoiTienSangVN(salary);
}
// ! Bài 2 Tính trung bình
// input:
// + Các số từ 1 đến 4.

// progress:
// +  Trung bình = (so1 + so2 + so3 + so4)/4
// output:
// + Trung bình
function trungBinh() {
  var so1 = document.getElementById("so1").value * 1;
  var so2 = document.getElementById("so2").value * 1;
  var so3 = document.getElementById("so3").value * 1;
  var so4 = document.getElementById("so4").value * 1;

  var trungBinh = (so1 + so2 + so3 + so4) / 4;
  document.querySelector(".htTrungBinh").innerHTML = trungBinh;
}
/*
! Bài 3: Quy đổi tiền tệ
!input:
Nhập vào số tiền
progress:
+  tienQD = soTienNhap*23500
output:
số tiền sau quy đổi
 */
function quyDoiTien() {
  var tienNhap = document.getElementById("tienNhap").value * 1;
  var tienQD = tienNhap * 23500;
  document.querySelector(".htQuyDoiTien").innerHTML = quyDoiTienSangVN(tienQD);
}

function quyDoiTien() {
  var tienNhap = document.getElementById("tienNhap").value * 1;
  var tienQD = tienNhap * 23500;
  document.querySelector(".htQuyDoiTien").innerHTML = quyDoiTienSangVN(tienQD);
}
/*
! Bài 4: Tính chu vi và diện tích hình chữ nhật
!input:
Nhập chiều dài và rộng
progress:
+  dt = d * r;
cv =  (d+r)*2
output:
cv và dt
 */
function CvDtHCN() {
  var heightHCN = Number(document.getElementById("heightHCN").value);
  var weightHCN = Number(document.getElementById("weightHCN").value);
  var cv = (heightHCN + weightHCN) * 2;
  var dt = heightHCN * weightHCN;
  var htCvDtHCN =
    "Chu vi hình chữ nhật: " +
    cv +
    "<br>" +
    "Diện tích hình chữ nhật là: " +
    dt;
  document.querySelector(".htCvDtHCN").innerHTML = htCvDtHCN;
}
/*
! Bài 4: Tính tổng 2 ký số:
input:
Nhập vào một số có 2 chữa số
progress:
soThuNhat = Math.floor(soHaiSo / 10);
soThuHai = soHaiSo - soThuNhat * 10;
tongHaiSo = soThuHai + soThuHai;
output:
Tổng của 2 chữa số trong số có 2 chứa số.
 */
function tongHaiKySo() {
  var soHaiSo = Number(document.getElementById("soHaiSo").value);
  var htCvDtHCN = "";
  if (soHaiSo >= 10 && soHaiSo < 100) {
    var soThuNhat = Math.floor(soHaiSo / 10);
    var soThuHai = soHaiSo - soThuNhat * 10;
    var tongHaiSo = soThuHai + soThuNhat;
    htCvDtHCN = "Tổng 2 ký số là: " + tongHaiSo;
  } else {
    htCvDtHCN = "Nhập lại số!";
  }

  document.querySelector(".htTongHaiKySo").innerHTML = htCvDtHCN;
}
