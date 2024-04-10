function updateClock() {
    var now = new Date();
    var second = now.getSeconds();
    var minute = now.getMinutes();
    var hour = now.getHours();

    var secondDegree = (second / 60) * 360;
    var minuteDegree = ((minute / 60) * 360) + (second / 60) * 6;
    var hourDegree = ((hour / 12) * 360) + (minute / 60) * 30;

    document.getElementById('second-hand').style.transform = `rotate(${secondDegree}deg)`;
    document.getElementById('minute-hand').style.transform = `rotate(${minuteDegree}deg)`;
    document.getElementById('hour-hand').style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(updateClock, 1000);