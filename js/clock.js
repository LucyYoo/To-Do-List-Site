//clock은 greeting에서 선언해두었음.

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    $clock.innerHTML = `${hours} : ${minutes}`;
}

getClock();
setInterval(getClock, 1000);