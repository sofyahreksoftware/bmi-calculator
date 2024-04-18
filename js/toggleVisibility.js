{
  const toggleNavigationVisibility = () => {
    const navigation = document.querySelector(".js-nav");
    navigation.classList.toggle("navigation--visible");
  };

  const init = () => {
    const burgerButton = document.querySelector(".js-burgerButton");
    burgerButton.addEventListener("click", toggleNavigationVisibility);
  };

  init();
}
