// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " sticky-header";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top sticky-header", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

function scrollFade() {
    const scrollOffset = 300;
 
    const scrollElements = document.querySelectorAll(".js-scroll");

    if (window.getComputedStyle(scrollElements[0]).transition == "none") {
        return;
    }
    
    const elementInView = (el, offset = 0) => {
        const elementTop = el.getBoundingClientRect().top;
        
        return (
            elementTop <= 
            ((window.innerHeight || document.documentElement.clientHeight) - offset)
        );
    };
    
    const displayScrollElement = (scrollElement) => {
        scrollElement.classList.add('scrolled');
    }
    
    const hideScrollElement = (scrollElement) => {
        scrollElement.classList.remove('scrolled');
    }
    
    const handleScrollAnimation = (scrollElements) => {
        scrollElements.forEach(scrollElement => {
            if (elementInView(scrollElement, scrollOffset)) {
                displayScrollElement(scrollElement);
            } else {
                hideScrollElement(scrollElement);
            }
        })
    }

    //initialize throttleTimer as false
    let throttleTimer = false;
    
    const throttle = (callback, time) => {
        //don't run the function while throttle timer is true
        if (throttleTimer) return;
        
        //first set throttle timer to true so the function doesn't run
        throttleTimer = true;
        
        setTimeout(() => {
            //call the callback function in the setTimeout and set the throttle timer to false after the indicated time has passed 
            callback;
            throttleTimer = false;
        }, time);
    }
    
    window.addEventListener('scroll', () => {
        throttle(handleScrollAnimation(scrollElements), 250);
    })

    return;
}
scrollFade()