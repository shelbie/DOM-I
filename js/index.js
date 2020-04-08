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


//Update links
let link = document.querySelectorAll("nav a");
link.forEach( (e, i) => {
  e.textContent = siteContent.nav[`nav-item-${i + 1}`];
})

//update h1
let h1 = document.querySelector(".cta-text h1");
h1.textContent = siteContent.cta["h1"];

//update bordered button text (Get Started)
let button = document.querySelector(".cta-text button");
button.textContent = siteContent.cta["button"]

//update code snippet photo (round image)
let headerImg = document.querySelector("#cta-img");
headerImg.setAttribute("src", siteContent["cta"]["img-src"])

//update h4 headers in main-content
let h4 = document.getElementsByClassName("text-content");
// let i = 0; i < h4.length; i++;
h4.textContent = siteContent["main-content"]
h4[0].querySelector('h4').textContent = siteContent["main-content"]["features-h4"];
h4[1].querySelector('h4').textContent = siteContent["main-content"]["about-h4"];
h4[2].querySelector('h4').textContent = siteContent["main-content"]["services-h4"];
h4[3].querySelector('h4').textContent = siteContent["main-content"]["product-h4"];
h4[4].querySelector('h4').textContent = siteContent["main-content"]["vision-h4"];


// h4.forEach( (el, index) => {
//   el.textContent = siteContent.mainContent.length;
// })

//update section paragraphs
let p = document.getElementsByClassName('text-content');
p[0].querySelector('p').textContent = siteContent["main-content"]["features-content"]
p[1].querySelector('p').textContent = siteContent["main-content"]["about-content"]
p[2].querySelector('p').textContent = siteContent["main-content"]["services-content"]
p[3].querySelector('p').textContent = siteContent["main-content"]["product-content"]
p[4].querySelector('p').textContent = siteContent["main-content"]["vision-content"]


//update middle image
let middleImg = document.querySelector("#middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])


//update contact
let contact = document.getElementsByClassName('contact');
contact[0].querySelector('h4').textContent = siteContent["contact"]["contact-h4"];
contact[0].querySelectorAll('p')[0].innerHTML = "123 Way 456 Street<br>Somewhere, USA";
contact[0].querySelectorAll('p')[1].textContent = siteContent["contact"]["phone"];
contact[0].querySelectorAll('p')[2].textContent = siteContent["contact"]["email"];


//update footer
let footer = document.querySelector("footer");
footer.textContent = siteContent.footer["copyright"]