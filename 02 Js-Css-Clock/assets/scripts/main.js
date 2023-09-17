console.log("hkhjk")

const hourHand = document.querySelector(".hour-hand")
const minuteHand = document.querySelector(".minute-hand")
const secondHand = document.querySelector(".second-hand")

const setDate = ()=>{
    const current = new Date();
    const hours = current.getHours();
    const hours_degree = hours*30 + 90;
    hourHand.style.transform = `translate(35px, -2px) rotate(${hours_degree}deg)`

    const minutes = current.getMinutes();
    const minutes_degree = minutes*6 + 90
    minuteHand.style.transform = `translate(8px, -2px) rotate(${minutes_degree}deg)`

    const seconds = current.getSeconds();
    const seconds_degree = seconds*6 + 90
    secondHand.style.transform = `translate(0px, -2px) rotate(${seconds_degree}deg)`
}

setInterval(() => {
    setDate()
}, 1000);