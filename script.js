const scrollToTopButton = document.getElementById("scrollToTop");

const handleScroll = () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopButton.style.display = "block";
  } 
  else {
    scrollToTopButton.style.display = "none";
  }
};

const scrollToTop = () => {
  const distanceFromTop = document.documentElement.scrollTop || document.body.scrollTop;

  if (distanceFromTop > 0) {
    window.scrollTo(0, 0);
  }
};

document.addEventListener("scroll", handleScroll);
scrollToTopButton.addEventListener("click", function(e) {
  e.preventDefault();
  scrollToTop();
});

////////////menu///////////
const iconMenu = document.querySelector('.hamburger-menu');
  if(iconMenu) {
    const menuBody = document.querySelector('.menu-body');
    iconMenu.addEventListener('click', function(e){
      document.body.classList.toggle('lock');
      iconMenu.classList.toggle('active');
      menuBody.classList.toggle('active');
    });
  }