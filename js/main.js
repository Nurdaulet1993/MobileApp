new WOW().init();

//SECTION-HEADER, FOOTER
let navLink = document.querySelectorAll('.section-header .nav__link');
let navLinkFooter = document.querySelectorAll('.section-footer .nav__link');

function nav(mass, section) {
    mass.forEach(function(item, i, navLink){

        item.onclick = function(){
            let activeLink = section.querySelector('.nav__link.active');
            activeLink.classList.remove('active');
            this.classList.add('active');
        }
    
    });
}
nav(navLink, document.querySelector('.section-header'));

nav(navLinkFooter, document.querySelector('.section-footer'));



// SECTION-WIDGETS

let arrow = document.querySelectorAll('.arrow');

slider(arrow);

function slider(value) {

    let [left, right] = value;

    left.onclick = function() {

        let left = document.querySelector('.slider-content.left');
        let center = document.querySelector('.slider-content.center');
        let right = document.querySelector('.slider-content.right');
    
        right.classList.remove('right');
        right.classList.add('center');
    
        center.classList.remove('center');
        center.classList.add('left')
    
        left.classList.remove('left');
        left.classList.add('right');
    
        console.log(left, center, right);
    }

    right.onclick = function() {
    
        let left = document.querySelector('.slider-content.left');
        let center = document.querySelector('.slider-content.center');
        let right = document.querySelector('.slider-content.right');
    
        right.classList.remove('right');
        right.classList.add('left');
    
        center.classList.remove('center');
        center.classList.add('right')
    
        left.classList.remove('left');
        left.classList.add('center');
    
        console.log(left, center, right);
    }    
}

// SCROllING

let $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1200);
    return false;
});

// MOBILE-MENU

let cloneNav = document.querySelector('.section-header .nav').cloneNode(true);
let mobileMenu = document.querySelector('.mobile-menu');

mobileMenu.appendChild(cloneNav);

let mobileLink = document.querySelectorAll('.mobile-menu .nav__link');
nav(mobileLink, document.querySelector('.mobile-menu'));

let mobileButton = document.querySelector('.mobile-button');

mobileButton.addEventListener('click', function() {
    let open = this.getAttribute('data-open');
    let openMenu = document.querySelector(open);
    openMenu.classList.toggle('show');
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mobileMenu.classList.remove('show');
  } else {
    
  }
}



