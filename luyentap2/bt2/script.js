let met = prompt("Nhập số mét cần chuyển:");
let feet = (parseFloat(met) * 3.28084);

if (!isNaN(feet)) {
    alert(`${met} mét tương ứng với ${feet} feet`);
} else {
    alert("Vui lòng nhập một số hợp lệ!");
}