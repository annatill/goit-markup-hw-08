(() => {
  //   const mobileMenu = document.querySelector(".js-menu-container");
  //   const openMenuBtn = document.querySelector(".js-open-menu");
  //   const closeMenuBtn = document.querySelector(".js-close-menu");

  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  const toggleMenu = () => {
    const isMenuOpen =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenuRef.classList.toggle("is-open");
    menuBtnRef.classList.toggle("is-open");

    const scrollLockMethod = !isMenuOpen
      ? "disableBodyScroll"
      : "enableBodyScroll";
    bodyScrollLock[scrollLockMethod](document.body);
  };

  menuBtnRef.addEventListener("click", toggleMenu);
  //   closeMenuBtn.addEventListener("click", toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenuRef.classList.remove("is-open");
    menuBtnRef.setAttribute("aria-expanded", false);
    //bodyScrollLock.enableBodyScroll(document.body);
  });
})();
