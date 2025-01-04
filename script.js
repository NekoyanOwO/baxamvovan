function updateClock() {
    var now = new Date();
    var second = now.getSeconds();
    var minute = now.getMinutes();
    var hour = now.getHours();

    var secondDegree = (second / 60) * 360;
    var minuteDegree = ((minute / 60) * 360) + (second / 60) * 6;
    var hourDegree = ((hour / 12) * 360) + (minute / 60) * 30;

    var secondHand = document.getElementById('second-hand');
    var minuteHand = document.getElementById('minute-hand');
    var hourHand = document.getElementById('hour-hand');

    if (second === 0) {
        secondHand.style.transition = 'none';
    } else {
        secondHand.style.transition = 'transform 0.05s linear';
    }

    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(updateClock, 1000);
