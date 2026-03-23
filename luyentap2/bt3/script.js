let a = prompt("Nhập độ dài cạnh a:");
a = parseFloat(a);



if (!isNaN(a)) {
    let dienTich = a * a;
    alert(`Cạnh a là: ${a},  Diện tích hình vuông là: ${dienTich}`);
} else {
    alert("Vui lòng nhập số!");
}