document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".faq-accordion-button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.classList.remove("is-open");
        button.classList.remove("is-open");
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.classList.add("is-open");
        button.classList.add("is-open");
      }
    });
  });
});
