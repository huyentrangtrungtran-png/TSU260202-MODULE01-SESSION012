let a = prompt("Nhập độ dài cạnh a:");
let b = prompt("Nhập độ dài cạnh b:");
a = parseFloat(a);
b = parseFloat(b);


if (!isNaN(a) && !isNaN(b)) {
    let dienTich = (a * b) * 0.5;
    alert(`Cạnh a là: ${a},Cạnh b là: ${b},  Diện tích tam giác vuông là: ${dienTich}`);
} else {
    alert("Vui lòng nhập số!");
}