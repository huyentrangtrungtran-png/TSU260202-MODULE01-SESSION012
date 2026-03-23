let a = parseFloat(prompt("Nhập hệ số a:"));
let b = parseFloat(prompt("Nhập hệ số b:"));
if (isNaN(a) || isNaN(b)) {
    alert("Vui lòng nhập số!");


}


if (a === 0) {
    if (b === 0) {
        alert("Phương trình có vô số nghiệm.");
    } else {
        alert("Phương trình vô nghiệm.");
    }
} else {
    let x = -b / a;
    alert(`Nghiệm của phương trình là x = ${x}`);
}