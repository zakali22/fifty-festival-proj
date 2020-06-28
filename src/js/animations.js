const marquee = () => {
    const marqueeElement = document.querySelector('.marquee span');
    const marqueeText = "FIFTY Music Festival — November 10–12, Desert Valley"

    // Method 1: loop 
    // for(let i=0; i<=100; i++){
    //     marqueeElement.append(marqueeText)
    // }

    // Method 2: create an array and join (Efficient Method)
    const textArr = new Array(50).fill(marqueeText) // Create an empty array with 50 spaces and fill with our text
    marqueeElement.append(textArr.join(" — "))
    console.log(marqueeElement)
}

const pulsateAnimDelay = () => {
    const circles = document.querySelectorAll('.circle')
    circles.forEach((circle, index) => {
        circle.style.animationDelay = `${index+1}00ms`
    })
}

export {
    marquee,
    pulsateAnimDelay
}

