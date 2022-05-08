let name = prompt("Lütfen adınızı girin:")

if (name) {
    document.querySelector("#myName").innerHTML = name
} else {
    document.querySelector("#myName").innerHTML = "İsimsiz"
}

function showTime() {
let date = new Date();
let days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
let curDay = days[date.getDay()];

let h = date.getHours(); // 0 - 23
let m = date.getMinutes(); // 0 - 59
let s = date.getSeconds(); // 0 - 59
    
h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;
    
let time = h + ":" + m + ":" + s + " " + curDay;
document.querySelector("#myClock").innerHTML = time;
    
setTimeout(showTime, 1000);
}

showTime();