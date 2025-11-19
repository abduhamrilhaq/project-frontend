document.addEventListener("DOMContentLoaded", () => {
    document.body.style.overflow = "hidden";
})

let balls = false

document.addEventListener("keypress", function(event) {
    event.preventDefault();
    if (event.key === "Enter" && balls === false) {
        balls = true;
        autoSDown()
    }
});

document.addEventListener("scroll", function(event) {
    let offset = window.scrollY
    let target = document.getElementById("cool-cinematic")
    target.style.transform = `translateY(${offset * 0.4}px)`; 
    popItem()
    popTextItem()
    popItem2()
    popTextItem2()
    console.log("scrolled")
})

function autoSDown() {
    let startDist = window.scrollY / 306;
    let endDist = window.scrollY / 940;

    startDist = Math.min(Math.max(startDist, 0), 1);
    endDist = Math.min(Math.max(endDist, 0), 1);

    let speed = startDist * 45 + 5 - 50 * endDist
    window.scrollBy(0, speed);
    let reqID = requestAnimationFrame(autoSDown);
    if (window.scrollY >= 918) {
        window.scrollBy(0, 0);
        cancelAnimationFrame(reqID)
        document.body.style.overflow = "auto";
        clearInterval(flicker)
        let div = document.getElementById("EnterText");
        div.remove()
        let div1 = document.getElementById("PressText");
        div1.textContent = "{NGAWI CITY | WEB INFOGRAPHIC}"
    }
    console.log(speed, window.scrollY)
}

function popItem() {
    let image1 = document.getElementById("item1")
    let negateBy = 900 * (window.scrollY / 812)
    negateBy = Math.min(Math.max(negateBy, 0), 900)
    let xPos = (2000 - negateBy)
    image1.style.transform = `translateX(${xPos}px) translateY(0px)`
    image1.style.opacity = window.scrollY / 812
}

function popTextItem() {
    let textItem1 = document.getElementById("ItemText1")
    let addBy = 400 * (window.scrollY / 812)
    addBy = Math.min(Math.max(addBy, 0), 400)
    let xPos = -200 + addBy
    textItem1.style.transform = `translateX(${xPos}px) translateY(-100px)`
    textItem1.style.opacity = window.scrollY / 812
}

function popItem2() {
    let image1 = document.getElementById("item2")
    let addBy = 1200 * (window.scrollY / 1300)
    addBy = Math.min(Math.max(addBy, 0), 1200)
    let xPos = (-1000 + addBy)
    image1.style.transform = `translateX(${xPos}px) translateY(0px)`
    image1.style.opacity = window.scrollY / 1300
    console.log(xPos)
}

function popTextItem2() {
    let textItem1 = document.getElementById("ItemText2")
    let negateBy = 2015 * (window.scrollY / 1300)
    negateBy = Math.min(Math.max(negateBy, 0), 2015)
    let xPos =  3000 - negateBy
    textItem1.style.transform = `translateX(${xPos}px) translateY(-100px)`
    textItem1.style.opacity = window.scrollY / 1300
}

let CIP1 = document.getElementById("culinaryItemParent1")
CIP1.addEventListener("mouseover", () => {
   CIP1.style.transform = `scale(1.1)`
})

CIP1.addEventListener("mouseleave", () => {
   CIP1.style.transform = `scale(1.0)`
})

let oscillate = false;

let flicker = setInterval(() => {
    if (oscillate === false) {
        oscillate = true;
        let div = document.getElementById("EnterText");
        div.classList.remove("text-white");
        div.classList.add("text-black");
    }
    else {
        oscillate = false;
        let div = document.getElementById("EnterText");
        div.classList.remove("text-black");
        div.classList.add("text-white");
    }
}, 1000);

setInterval(() => {
    console.log(window.scrollY)
}, 1000)

//918