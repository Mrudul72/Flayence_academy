const pkgSlide = () => {
  const exclusive = document.querySelector("#exclusive-pkg");
  const pro = document.querySelector("#pro-pkg");
  const pkg = document.querySelector("#pkg-sec");

  if (window.innerWidth <= 480) {
    exclusive.addEventListener("click", () => {
        pkg.classList.add("pkg-ex");
    });
    pro.addEventListener("click", () => {
        pkg.classList.remove("pkg-ex");
    });
  }
};

pkgSlide();
