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
    culinaryOp()
    quotePop()
    alunPop()
    etPop()
    asalPop()
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
        console.log("succeeded")
    }
}

let image1 = document.getElementById("item1")
let image2 = document.getElementById("item2")

function popItem() {
    let negateBy = 900 * (window.scrollY / 812)
    negateBy = Math.min(Math.max(negateBy, 0), 900)
    let xPos = (2000 - negateBy)
    image1.style.transform = `translateX(${xPos}px) translateY(0px)`
    let y0 = 1
    let yN = 2
    let t = window.scrollY - 295
    let n = 812 - 295

    let interpolatedVal = expinterpolate(y0, yN, t, n) / 2
    image1.style.opacity = interpolatedVal
}

function popTextItem() {
    let textItem1 = document.getElementById("ItemText1")
    let addBy = 400 * (window.scrollY / 812)
    addBy = Math.min(Math.max(addBy, 0), 400)
    let xPos = -200 + addBy
    textItem1.style.transform = `translateX(${xPos}px) translateY(-100px)`
    let y0 = 1
    let yN = 2
    let t = window.scrollY - 295
    let n = 812 - 295

    let interpolatedVal = expinterpolate(y0, yN, t, n) / 2
    textItem1.style.opacity = interpolatedVal
}

function popItem2() {
    let addBy = 1200 * (window.scrollY / 1200)
    addBy = Math.min(Math.max(addBy, 0), 1200)
    let xPos = (-1000 + addBy)
    image2.style.transform = `translateX(${xPos}px) translateY(0px)`
    let y0 = 1
    let yN = 2
    let t = window.scrollY - 816
    let n = 1200 - 816

    let interpolatedVal = expinterpolate(y0, yN, t, n) / 2
    image2.style.opacity = interpolatedVal
}

function popTextItem2() {
    let textItem1 = document.getElementById("ItemText2")
    let negateBy = 2015 * (window.scrollY / 1200)
    negateBy = Math.min(Math.max(negateBy, 0), 2015)
    let xPos =  3000 - negateBy
    textItem1.style.transform = `translateX(${xPos}px) translateY(-100px)`
    let y0 = 1
    let yN = 2
    let t = window.scrollY - 816
    let n = 1200 - 816

    let interpolatedVal = expinterpolate(y0, yN, t, n) / 2
    textItem1.style.opacity = interpolatedVal
}

function quotePop() {
    let quoteText = "One cannot think well, love well, sleep well, if one has not dined well - Virginia Woolf"
    let quote1 = document.getElementById("quote1")
    let t = window.scrollY - 2029
    let n = 2291 - 2029

    let interpolatedVal = Math.round(88 * (t / n))
    quote1.textContent = quoteText.substring(0, interpolatedVal)
}

let alun = document.getElementById("alun")

function alunPop() {
    let y0 = 1
    let yN = 2
    let t = window.scrollY - 2701
    let n = 3619 - 2701

    let interpolatedVal = expinterpolate(y0, yN, t, n) / 2
    interpolatedVal = Math.min(Math.max(interpolatedVal, 0), 1)
    alun.style.opacity = interpolatedVal
    alun.style.transform = `scale(${interpolatedVal})`
}

let etimologi = document.getElementById("etimologi")
let asal = document.getElementById("asal")

function etPop() {
    let y0 = -550
    let yN = -750
    let t = window.scrollY - 3617
    let n = 4035 - 3617

    let interpolatedVal = expinterpolate(y0, yN, t, n)
    interpolatedVal = Math.min(Math.max(interpolatedVal, -750), -550)
    etimologi.style.transform = `translateX(550px) translateY(${interpolatedVal}px)`
}

function asalPop() {
    let y0 = -350
    let yN = -475
    let t = window.scrollY - 4025
    let n = 4331 - 4025

    let interpolatedVal = expinterpolate(y0, yN, t, n)
    interpolatedVal = Math.min(Math.max(interpolatedVal, -475), -350)
    asal.style.transform = `translateX(550px) translateY(${interpolatedVal}px)`
}

let CIP1 = document.getElementById("culinaryItem1")
let CIP2 = document.getElementById("culinaryItem2")
let CIP3 = document.getElementById("culinaryItem3")
let Loc1 = document.getElementById("location1")
let Loc2 = document.getElementById("location2")

CIP1.addEventListener("mouseover", () => {
   CIP1.style.transform = `scale(1.05)`
   CIP1.style.cursor = 'pointer'
})

CIP1.addEventListener("mouseleave", () => {
   CIP1.style.transform = `scale(1.0)`
   CIP1.style.cursor = 'default'
})

CIP2.addEventListener("mouseover", () => {
   CIP2.style.transform = `scale(1.05)`
   CIP2.style.cursor = 'pointer'
})

CIP2.addEventListener("mouseleave", () => {
   CIP2.style.transform = `scale(1.0)`
   CIP2.style.cursor = 'default'
})

CIP3.addEventListener("mouseover", () => {
   CIP3.style.transform = `scale(1.05)`
   CIP3.style.cursor = 'pointer'
})

CIP3.addEventListener("mouseleave", () => {
   CIP3.style.transform = `scale(1.0)`
   CIP3.style.cursor = 'default'
})

Loc1.addEventListener("mouseover", () => {
    Loc1.style.color = 'blue'
    Loc1.style.cursor = 'pointer'
})

Loc1.addEventListener("mouseleave", () => {
    Loc1.style.color = 'white'
    Loc1.style.cursor = 'default'
})

Loc1.addEventListener("click", () => {
    window.open("https://maps.app.goo.gl/iYz2p153mjim1kpU7")
})

Loc2.addEventListener("mouseover", () => {
    Loc2.style.color = 'blue'
    Loc2.style.cursor = 'pointer'
})

Loc2.addEventListener("mouseleave", () => {
    Loc2.style.color = 'white'
    Loc2.style.cursor = 'default'
})

Loc2.addEventListener("click", () => {
    window.open("https://maps.app.goo.gl/AkKebMtVt1g65dMd8")
})

function culinaryOp() {
    let y0 = 1
    let yN = 2
    let t = window.scrollY - 1621
    let n = 2233 - 1621

    let interpolatedVal = expinterpolate(y0, yN, t, n) / 2
    CIP1.style.opacity = interpolatedVal
    CIP2.style.opacity = interpolatedVal
    CIP3.style.opacity = interpolatedVal
}

function expinterpolate(y0, yN, t, n) {
    let val = y0 * (yN / y0) ** (t/n)

    return val
}

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