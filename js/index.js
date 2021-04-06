const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navBar = document.querySelectorAll("nav a")
navBar[0].textContent = siteContent["nav"]["nav-item-1"]
navBar[1].textContent = siteContent["nav"]["nav-item-2"]
navBar[2].textContent = siteContent["nav"]["nav-item-3"]
navBar[3].textContent = siteContent.nav["nav-item-4"]
navBar[4].textContent = siteContent.nav["nav-item-5"]
navBar[5].textContent = siteContent.nav["nav-item-6"]

// navBar.forEach(navBar => console.log(navBar.textContent));

const header = document.querySelector("h1")

// console.log(header);


const button = document.querySelector("button")
button.textContent = siteContent.cta.button;

const imageCTA = document.querySelector("#cta-img");
imageCTA.setAttribute("src", siteContent.cta["img-src"]);

const featureh4 = document.querySelector(".top-content .text-content h4");
featureh4.textContent = siteContent["main-content"]["features-h4"]

const featurep = document.querySelector(".top-content .text-content p");
featurep.textContent = siteContent["main-content"]["features-content"];

const h4Content = document.querySelectorAll("h4");
h4Content[1].textContent = siteContent["main-content"]["about-h4"]
h4Content[2].textContent = siteContent["main-content"]["services-h4"]
h4Content[3].textContent = siteContent["main-content"]["product-h4"]
h4Content[4].textContent = siteContent["main-content"]["vision-h4"]
h4Content[5].textContent = siteContent["contact"]["contact-h4"]

const pContent = document.querySelectorAll("p");
pContent[1].textContent = siteContent["main-content"]["about-content"]
pContent[2].textContent = siteContent["main-content"]["services-content"]
pContent[3].textContent = siteContent["main-content"]["product-content"]
pContent[4].textContent = siteContent["main-content"]["vision-content"]
pContent[5].textContent = siteContent["contact"]["address"]
pContent[6].textContent = siteContent["contact"]["phone"]
pContent[7].textContent = siteContent["contact"]["email"]
pContent[8].textContent = siteContent["footer"]["copyright"]

const ctaImg = document.querySelector("#cta-img")
ctaImg.setAttribute("src", siteContent.cta["img-src"])

const middleImg = document.querySelector(".middle-img")
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);


navBar.forEach(item => item.style.color = "green");

const will = document.createElement("a")
will.setAttribute("href", "#")
will.textContent = "Will"

const linh = document.createElement("a")
linh.setAttribute("href", "#")
linh.textContent = "Linh"

const theNav = document.querySelector("nav")

theNav.appendChild(will);
theNav.prepend(linh);

 

