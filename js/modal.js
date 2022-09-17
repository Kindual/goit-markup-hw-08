
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
    
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");

    document.body.classList.toggle("body--hidden");
    }



  // const menuBtnRef = document.querySelector("[data-menu-button]");
  // const mobileMenuRef = document.querySelector("[data-menu]");

  // menuBtnRef.addEventListener("click", () => {
  //   const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  //   menuBtnRef.setAttribute("aria-expanded", !expanded);

  
  //   menuBtnRef.classList.toggle("is-open");
  //   mobileMenuRef.classList.toggle("is-open");
  // });
