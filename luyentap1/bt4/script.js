// Nhập số nguyên
const a = parseInt(prompt("Nhập số thứ nhất: "));
const b = parseInt(prompt("Nhập số thứ hai: "));
const c = parseInt(prompt("Nhập số thứ ba: "));

// Tìm giá trị lớn nhất
const max = Math.max(a, b, c);

// Xuất kết quả
alert(`Số lớn nhất trong ${a}, ${b}, ${c} là: ${max}`);