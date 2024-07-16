var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var y = document.getElementsByClassName("text-overlay");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < y.length; i++) {
    y[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  if (slideIndex > y.length) {slideIndex = 1}
  if(x[slideIndex - 1]) x[slideIndex - 1].style.display = "block";
  if (y[slideIndex - 1]) y[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 8000); 
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.vision-paragraph, .mission-paragraph').forEach(paragraph => {
        paragraph.style.display = 'none';
    });
    const aboutUsLinks = document.querySelectorAll('.about-us-li');
    aboutUsLinks.forEach(link => {
        link.addEventListener('click', () => {
            aboutUsLinks.forEach(item => {
                item.querySelector('h3').classList.remove('active-link');
            });
            link.querySelector('h3').classList.add('active-link');
            document.querySelectorAll('.about-us-paragraph, .vision-paragraph, .mission-paragraph').forEach(paragraph => {
                paragraph.style.display = 'none';
            });
            const paraClass = link.getAttribute('data-linkname');
            document.querySelector(`.${paraClass}`).style.display = 'block';
        });
    });

    const msgCard = document.querySelectorAll(".msg-card");
    msgCard.forEach(card => {
      card.querySelector('.message').style.display = "none";
      card.addEventListener('mouseover', () => {
        card.querySelector('.message').style.display = "block";
      });
      card.addEventListener('mouseout', () => {
        card.querySelector('.message').style.display = "none";
      });
    });
});

var slideIndex = 1;
var slideInterval;

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function autoSlide() {
  plusSlides(1);
}

function resumeSlides() {
  slideInterval = setInterval(autoSlide, 6000); 
}

resumeSlides();