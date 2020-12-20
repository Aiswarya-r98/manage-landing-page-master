window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  }

document.querySelector(".navbar-toggler").addEventListener("click", function () {
        
    document.querySelector(".nav-links").classList.toggle('nav-active');
    document.querySelector(".toggler-icon").classList.toggle('dissapear');
    document.querySelector(".close").classList.toggle('appear');
    document.querySelector(".box").classList.toggle('box-active');
  });


  $('#carouselExampleIndicators').carousel({
    interval: 2000,
    wrap: true,
    keyboard: true
});