const navSlide = () => {
  const burguer = document.querySelector('.burguer');
  const nav = document.querySelector('ul');
  const navLinks = document.querySelectorAll('ul.nav li');

  
  burguer.addEventListener('click', () => {
    //toggle nav
    nav.classList.toggle('nav-active');

    // //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
      }
    });

    //Burguer animation
    burguer.classList.toggle('burguer-close');
  });

}

navSlide();