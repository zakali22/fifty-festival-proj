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

const rotateSquiggle = () => {
    const squiggles = document.querySelectorAll('.squiggle')
    squiggles.forEach((squiggle, index) => {
        squiggle.animate([
            {transform: 'rotate(0deg)'},
            {transform: `rotate(${Math.floor(Math.random() * 45) + 1}deg)`}
        ], {
            direction: 'alternate',
            ease: 'ease-in-out',
            duration: 3000,
            iterations: Infinity,
            delay: 200 * index
        })
    })
}

const staggeredFadeIn = () => {
    const sections = document.querySelectorAll('section')

    inView('.section')
        .on('enter', el => {
            el.classList.add('in-viewport')
        })
        .on('exit', el => {
            el.classList.remove('in-viewport')
        })

    inView.threshold(0.3) // Trigger 30% of the way
    
    // Staggered transition (delay)
    sections.forEach(section => { // To limit the transition-delay numbers, constrain to each section
        const lists = section.querySelectorAll('section li');
        const shapes = section.querySelectorAll('.shape');
        const dates = section.querySelectorAll('.fifty-section--days__day-text');

        dates.forEach((date, index) => {
            date.style.transitionDelay = `${100*index}ms`
        })
        lists.forEach((list, index) => {
            list.style.transitionDelay = `${100*index}ms`
        })

        // The shapes should fade in once the lists have all faded in (lists.length)
        shapes.forEach((shape, index) => {
            shape.style.transitionDelay = `${100*(lists.length + index)}ms`
        })
    })
}

const scrollingToElement = () => {
    const links = document.querySelectorAll('.js-scrollto')
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            const linkToText = link.getAttribute('href')
            event.preventDefault();
            console.log(linkToText)
            document.querySelector(linkToText.toString()).scrollIntoView({behavior: 'smooth'})
        })
    })
}

export {
    marquee,
    pulsateAnimDelay,
    rotateSquiggle,
    staggeredFadeIn,
    scrollingToElement
}

