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
    popItem3()
    popTextItem3()
    popItem4()
    popTextItem4()
    popItem5()
    popTextItem5()
    popItem6()
    popTextItem6()
    popItem7()
    popTextItem7()
    popItem8()
    popTextItem8()
    popItem9()
    popTextItem9()
    culinaryOp()
    culinaryOp1()
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
let image3 = document.getElementById("item3")
let image4 = document.getElementById("item4")
let image5 = document.getElementById("item5")
let image6 = document.getElementById("item6")
let image7 = document.getElementById("item7")
let image8 = document.getElementById("item8")
let image9 = document.getElementById("item9")
let textItem1 = document.getElementById("ItemText1")
let textItem2 = document.getElementById("ItemText2")
let textItem3 = document.getElementById("ItemText3")
let textItem4 = document.getElementById("ItemText4")
let textItem5 = document.getElementById("ItemText5")
let textItem6 = document.getElementById("ItemText6")
let textItem7 = document.getElementById("ItemText7")
let textItem8 = document.getElementById("ItemText8")
let textItem9 = document.getElementById("ItemText9")

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
    let negateBy = 2015 * (window.scrollY / 1200)
    negateBy = Math.min(Math.max(negateBy, 0), 2015)
    let xPos =  3000 - negateBy
    textItem2.style.transform = `translateX(${xPos}px) translateY(-100px)`
    let y0 = 1
    let yN = 2
    let t = window.scrollY - 816
    let n = 1200 - 816

    let interpolatedVal = expinterpolate(y0, yN, t, n) / 2
    textItem2.style.opacity = interpolatedVal
}

function popItem3() {
    let negateBy = 900 * (window.scrollY / 1912)
    negateBy = Math.min(Math.max(negateBy, 0), 900)
    let xPos = (2000 - negateBy)
    image3.style.transform = `translateX(${xPos}px) translateY(0px)`
    let y0 = 1
    let yN = 2
    let t = window.scrollY - 1312
    let n = 1912 - 1312

    let interpolatedVal = expinterpolate(y0, yN, t, n) / 2
    image3.style.opacity = interpolatedVal
}

function popTextItem3() {
    let addBy = 400 * (window.scrollY / 1912)
    addBy = Math.min(Math.max(addBy, 0), 400)
    let xPos = -200 + addBy
    textItem3.style.transform = `translateX(${xPos}px) translateY(-100px)`
    let y0 = 1
    let yN = 2
    let t = window.scrollY - 1312
    let n = 1912 - 1312

    let interpolatedVal = expinterpolate(y0, yN, t, n) / 2
    textItem3.style.opacity = interpolatedVal
}

function popItem4() {
    let addBy = 1200 * (window.scrollY / 2500)
    addBy = Math.min(Math.max(addBy, 0), 1200)
    let xPos = (-1000 + addBy)
    image4.style.transform = `translateX(${xPos}px) translateY(0px)`
    let y0 = 1
    let yN = 2
    let t = window.scrollY - 1933
    let n = 2500 - 1933

    let interpolatedVal = expinterpolate(y0, yN, t, n) / 2
    image4.style.opacity = interpolatedVal
}

function popTextItem4() {
    let negateBy = 2015 * (window.scrollY / 2500)
    negateBy = Math.min(Math.max(negateBy, 0), 2015)
    let xPos =  3000 - negateBy
    textItem4.style.transform = `translateX(${xPos}px) translateY(-100px)`
    let y0 = 1
    let yN = 2
    let t = window.scrollY - 1933
    let n = 2500 - 1933

    let interpolatedVal = expinterpolate(y0, yN, t, n) / 2
    textItem4.style.opacity = interpolatedVal
}

function popItem5() {
    let negateBy = 900 * (window.scrollY / 3122)
    negateBy = Math.min(Math.max(negateBy, 0), 900)
    let xPos = (2000 - negateBy)
    image5.style.transform = `translateX(${xPos}px) translateY(0px)`
    let y0 = 1
    let yN = 2
    let t = window.scrollY - 2524
    let n = 3122 - 2596

    let interpolatedVal = expinterpolate(y0, yN, t, n) / 2
    image5.style.opacity = interpolatedVal
}

function popTextItem5() {
    let addBy = 400 * (window.scrollY / 3122)
    addBy = Math.min(Math.max(addBy, 0), 400)
    let xPos = -200 + addBy
    textItem5.style.transform = `translateX(${xPos}px) translateY(-100px)`
    let y0 = 1
    let yN = 2
    let t = window.scrollY - 2524
    let n = 3122 - 2596

    let interpolatedVal = expinterpolate(y0, yN, t, n) / 2
    textItem5.style.opacity = interpolatedVal
}

function popItem6() {
    let addBy = 1200 * (window.scrollY / 3761)
    addBy = Math.min(Math.max(addBy, 0), 1200)
    let xPos = (-1000 + addBy)
    image6.style.transform = `translateX(${xPos}px) translateY(0px)`
    let y0 = 1
    let yN = 2
    let t = window.scrollY - 3239
    let n = 3761 - 3239

    let interpolatedVal = expinterpolate(y0, yN, t, n) / 2
    image6.style.opacity = interpolatedVal
}

function popTextItem6() {
    let negateBy = 2015 * (window.scrollY / 3761)
    negateBy = Math.min(Math.max(negateBy, 0), 2015)
    let xPos =  3000 - negateBy
    textItem6.style.transform = `translateX(${xPos}px) translateY(-100px)`
    let y0 = 1
    let yN = 2
    let t = window.scrollY - 3239
    let n = 3761 - 3239

    let interpolatedVal = expinterpolate(y0, yN, t, n) / 2
    textItem6.style.opacity = interpolatedVal
}

function popItem7() {
    let negateBy = 900 * (window.scrollY / 4375)
    negateBy = Math.min(Math.max(negateBy, 0), 900)
    let xPos = (2000 - negateBy)
    image7.style.transform = `translateX(${xPos}px) translateY(0px)`
    let y0 = 1
    let yN = 2
    let t = window.scrollY - 3796
    let n = 4375 - 3796

    let interpolatedVal = expinterpolate(y0, yN, t, n) / 2
    image7.style.opacity = interpolatedVal
}

function popTextItem7() {
    let addBy = 400 * (window.scrollY / 4375)
    addBy = Math.min(Math.max(addBy, 0), 400)
    let xPos = -200 + addBy
    textItem7.style.transform = `translateX(${xPos}px) translateY(-100px)`
    let y0 = 1
    let yN = 2
    let t = window.scrollY - 3796
    let n = 4375 - 3796

    let interpolatedVal = expinterpolate(y0, yN, t, n) / 2
    textItem7.style.opacity = interpolatedVal
}

function popItem8() {
    let addBy = 1200 * (window.scrollY / 4910)
    addBy = Math.min(Math.max(addBy, 0), 1200)
    let xPos = (-1000 + addBy)
    image8.style.transform = `translateX(${xPos}px) translateY(0px)`
    let y0 = 1
    let yN = 2
    let t = window.scrollY - 4340
    let n = 4910 - 4340

    let interpolatedVal = expinterpolate(y0, yN, t, n) / 2
    image8.style.opacity = interpolatedVal
}

function popTextItem8() {
    let negateBy = 2015 * (window.scrollY / 4910)
    negateBy = Math.min(Math.max(negateBy, 0), 2015)
    let xPos =  3000 - negateBy
    textItem8.style.transform = `translateX(${xPos}px) translateY(-100px)`
    let y0 = 1
    let yN = 2
    let t = window.scrollY - 4340
    let n = 4910 - 4340

    let interpolatedVal = expinterpolate(y0, yN, t, n) / 2
    textItem8.style.opacity = interpolatedVal
}

function popItem9() {
    let negateBy = 900 * (window.scrollY / 5567)
    negateBy = Math.min(Math.max(negateBy, 0), 900)
    let xPos = (2000 - negateBy)
    image9.style.transform = `translateX(${xPos}px) translateY(0px)`
    let y0 = 1
    let yN = 2
    let t = window.scrollY - 5066
    let n = 5567 - 5066

    let interpolatedVal = expinterpolate(y0, yN, t, n) / 2
    image9.style.opacity = interpolatedVal
}

function popTextItem9() {
    let addBy = 400 * (window.scrollY / 5567)
    addBy = Math.min(Math.max(addBy, 0), 400)
    let xPos = -200 + addBy
    textItem9.style.transform = `translateX(${xPos}px) translateY(-100px)`
    let y0 = 1
    let yN = 2
    let t = window.scrollY - 5066
    let n = 5567 - 5066

    let interpolatedVal = expinterpolate(y0, yN, t, n) / 2
    textItem9.style.opacity = interpolatedVal
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
let CIP4 = document.getElementById("culinaryItem4")
let CIP5 = document.getElementById("culinaryItem5")
let CIP6 = document.getElementById("culinaryItem6")
let Loc1 = document.getElementById("location1")
let Loc2 = document.getElementById("location2")
let Loc3 = document.getElementById("location3")
let Loc4 = document.getElementById("location4")
let Loc5 = document.getElementById("location5")
let Loc6 = document.getElementById("location6")
let Loc7 = document.getElementById("location7")
let Loc8 = document.getElementById("location8")
let Loc9 = document.getElementById("location9")

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

CIP4.addEventListener("mouseover", () => {
   CIP4.style.transform = `scale(1.05)`
   CIP4.style.cursor = 'pointer'
})

CIP4.addEventListener("mouseleave", () => {
   CIP4.style.transform = `scale(1.0)`
   CIP4.style.cursor = 'default'
})

CIP5.addEventListener("mouseover", () => {
   CIP5.style.transform = `scale(1.05)`
   CIP5.style.cursor = 'pointer'
})

CIP5.addEventListener("mouseleave", () => {
   CIP5.style.transform = `scale(1.0)`
   CIP5.style.cursor = 'default'
})

CIP6.addEventListener("mouseover", () => {
   CIP6.style.transform = `scale(1.05)`
   CIP6.style.cursor = 'pointer'
})

CIP6.addEventListener("mouseleave", () => {
   CIP6.style.transform = `scale(1.0)`
   CIP6.style.cursor = 'default'
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

Loc3.addEventListener("mouseover", () => {
    Loc3.style.color = 'blue'
    Loc3.style.cursor = 'pointer'
})

Loc3.addEventListener("mouseleave", () => {
    Loc3.style.color = 'white'
    Loc3.style.cursor = 'default'
})

Loc3.addEventListener("click", () => {
    window.open("https://maps.app.goo.gl/AkKebMtVt1g65dMd8")
})

Loc4.addEventListener("mouseover", () => {
    Loc4.style.color = 'blue'
    Loc4.style.cursor = 'pointer'
})

Loc4.addEventListener("mouseleave", () => {
    Loc4.style.color = 'white'
    Loc4.style.cursor = 'default'
})

Loc4.addEventListener("click", () => {
    window.open("https://maps.app.goo.gl/AkKebMtVt1g65dMd8")
})

Loc5.addEventListener("mouseover", () => {
    Loc5.style.color = 'blue'
    Loc5.style.cursor = 'pointer'
})

Loc5.addEventListener("mouseleave", () => {
    Loc5.style.color = 'white'
    Loc5.style.cursor = 'default'
})

Loc5.addEventListener("click", () => {
    window.open("https://maps.app.goo.gl/AkKebMtVt1g65dMd8")
})

Loc6.addEventListener("mouseover", () => {
    Loc6.style.color = 'blue'
    Loc6.style.cursor = 'pointer'
})

Loc6.addEventListener("mouseleave", () => {
    Loc6.style.color = 'white'
    Loc6.style.cursor = 'default'
})

Loc6.addEventListener("click", () => {
    window.open("https://maps.app.goo.gl/AkKebMtVt1g65dMd8")
})

Loc7.addEventListener("mouseover", () => {
    Loc7.style.color = 'blue'
    Loc7.style.cursor = 'pointer'
})

Loc7.addEventListener("mouseleave", () => {
    Loc7.style.color = 'white'
    Loc7.style.cursor = 'default'
})

Loc7.addEventListener("click", () => {
    window.open("https://maps.app.goo.gl/AkKebMtVt1g65dMd8")
})

Loc8.addEventListener("mouseover", () => {
    Loc8.style.color = 'blue'
    Loc8.style.cursor = 'pointer'
})

Loc8.addEventListener("mouseleave", () => {
    Loc8.style.color = 'white'
    Loc8.style.cursor = 'default'
})

Loc8.addEventListener("click", () => {
    window.open("https://maps.app.goo.gl/AkKebMtVt1g65dMd8")
})

Loc9.addEventListener("mouseover", () => {
    Loc9.style.color = 'blue'
    Loc9.style.cursor = 'pointer'
})

Loc9.addEventListener("mouseleave", () => {
    Loc9.style.color = 'white'
    Loc9.style.cursor = 'default'
})

Loc9.addEventListener("click", () => {
    window.open("https://maps.app.goo.gl/AkKebMtVt1g65dMd8")
})

function culinaryOp() {
    let y0 = 1
    let yN = 2
    let t = window.scrollY - 5551
    let n = 6438 - 5551

    let interpolatedVal = expinterpolate(y0, yN, t, n) / 2
    CIP1.style.opacity = interpolatedVal
    CIP2.style.opacity = interpolatedVal
    CIP3.style.opacity = interpolatedVal
}

function culinaryOp1() {
    let y0 = 1
    let yN = 2
    let t = window.scrollY - 6438
    let n = 6770 - 6438

    let interpolatedVal = expinterpolate(y0, yN, t, n) / 2
    CIP4.style.opacity = interpolatedVal
    CIP5.style.opacity = interpolatedVal
    CIP6.style.opacity = interpolatedVal
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
}, 100)

//918