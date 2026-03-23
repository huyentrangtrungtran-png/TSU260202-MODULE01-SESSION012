let celsius = prompt("Nhập độ C cần chuyển:");
let fahrenheit = (parseFloat(celsius) * 1.8) + 32;

if (!isNaN(fahrenheit)) {
    alert(`${celsius}°C tương ứng với ${fahrenheit}°F`);
} else {
    alert("Vui lòng nhập một số hợp lệ!");
}