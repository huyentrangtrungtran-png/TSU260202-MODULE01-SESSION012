let a = prompt("Nhập độ dài cạnh a:");
let b = prompt("Nhập độ dài cạnh b:");
a = parseFloat(a);
b = parseFloat(b);


if (!isNaN(a) && !isNaN(b)) {
    let dienTich = a * b;
    alert(`Cạnh a là: ${a},Cạnh b là: ${b},  Diện tích hình chữ nhật là: ${dienTich}`);
} else {
    alert("Vui lòng nhập số!");
}