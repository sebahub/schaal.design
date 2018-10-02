//- Variables

let burger = document.querySelector('.nav-mobile-burger');

let close = document.querySelector ('.nav-mobile-close');

let navMobile = document.querySelector ('.nav-mobile');

let buns = document.querySelectorAll ('.bun');

let wrapper = document.querySelector ('main')

//- Burger-Menu

close.addEventListener('click', (event) => {
    navMobile.classList.remove('visible');

});

burger.addEventListener('click', (event) => {
  navMobile.classList.toggle('visible');
  //buns.classList.toggle('animation');
  
  buns.forEach((element) => {
    element.classList.toggle('animation');

    });

});

wrapper.addEventListener('click', (event) => {
    navMobile.classList.remove('visible');
  //buns.classList.toggle('animation');
  
  buns.forEach((element) => {
    element.classList.remove('animation');

    });

});

const TypeWriter = function(txtElement, words, wait = 3000) {
    this.txtElement = txtElement,
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;

}

// Type Method

TypeWriter.prototype.type = function() {
    // Current index of Word
    const current = this.wordIndex % this.words.length;
    // Get full text of current Word
    const fullTxt = this.words[current];

    // Check if deleting
    if(this.isDeleting) {
        //Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Type Speed
    let typeSpeed = 300;

    if(this.isDeleting) {
        typeSpeed /= 2;

    }

    // If word is complete
    if(!this.isDeleting && this.txt == fullTxt) {
        //Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
    } else if(this.isDeleting && this.txt == '') {
        this.isDeleting = false;
        // Move to next Word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed)
}

// Init On Dom Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    // Innit Typewriter
    new TypeWriter(txtElement, words, wait);

}

// OnScroll Event


let printAnimation = document.querySelector('.print');
let aliveAnimation = document.querySelector('.alive');


window.addEventListener('scroll', () => {
    // Maximum Scroll
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;

    // OnScroll-Animation


    const scrolled = window.scrollY;

    if (scrolled >= 150) {
        printAnimation.classList.add('animation');
        //aliveAnimation.classList.remove('hidden');
        aliveAnimation.classList.add('animation');

    }

    console.log(scrolled);
    

});