// Date



// Navbar

const linksUl = document.querySelector(".links");
const links = linksUl.querySelectorAll(".link");

links.forEach(function (link) {
    link.addEventListener("click", function (e) {
        console.log(e.target);
        for (let i = 0; i < links.length; i++) {
            if (links[i].classList.contains("active")) {
                links[i].classList.remove("active");
                e.target.classList.add("active");
            }
        }
    })

})

// Navbar Scroll

const navbar = document.getElementById("nav");
const mybutton = document.getElementById("myBtn");

window.addEventListener("scroll", function () {
    let scrollHeight = window.pageYOffset;
    let navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
});

// Scroll to top

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", function () {
    topFunction();
});

function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Nav Toggle 

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");

navToggle.addEventListener("click", function () {
    // linksContainer.classList.toggle("show-links");
    let linksHeight = linksUl.getBoundingClientRect().height;
    let containerHeight = linksContainer.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }

    navToggle.classList.toggle("rotate");
});

// Switch button

const btn = document.getElementById("switch");
const video = document.querySelector(".intro");
const body = document.querySelector("body");

btn.addEventListener("click", function () {
    if (video.paused) {
        video.play()
    } else {
        video.pause();
    }
});

// Counters
const count1 = document.getElementById("count1");
const count2 = document.getElementById("count2");

counter1();
counter2();

function counter1() {
    let i = 0;

    const inv = setInterval(function () {
        if (i < 60)
            count1.innerHTML = ++i;
        else
            clearInterval(inv);
    }, 3000 / 100);

}

function counter2() {
    let i = 0;

    const inv = setInterval(function () {
        if (i < 52)
           count2.innerHTML = ++i;
        else
            clearInterval(inv);
    }, 3000 / 100);

}



const select1 = document.getElementById("select1");
const select2 = document.getElementById("select2");
const calculator = document.querySelector(".calculator");
const input = parseFloat(calculator.querySelector("input").value);
const result = document.querySelector(".calculator-result-value");
const convertBtn = document.querySelector(".convert-btn");
const rates = {
    EUR : {
        EUR : 1,
        USD : 1.13,
        RSD : 117,
    },

    USD : {
        USD: 1,
        EUR: 0.88,
        RSD: 101.40,
    },

    RSD: {
        RSD: 1,
        USD: 0.0096,
        EUR: 0.0085,
    }
    
}

convertBtn.addEventListener("click", function() {
    convertCurrency();
})

function convertCurrency() {
    if(rates[select1.value] && rates[select1.value][select2.value]){
        result.value = input * rates[select1.value][select2.value];
    }
}
