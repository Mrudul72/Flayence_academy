const exclusive = document.querySelector("#exclusive-pkg");
const pro = document.querySelector("#pro-pkg");
const pkg = document.querySelector("#pkg-sec");
const proTick = document.querySelectorAll(".pro-tick");
const excTick = document.querySelectorAll(".exc-tick");
const proIco = document.querySelector("#pro-ico");
const excIco = document.querySelector("#exc-ico");

const pkgSlide = () => {
  const exclusive = document.querySelector("#exclusive-pkg");
  const pro = document.querySelector("#pro-pkg");
  const pkg = document.querySelector("#pkg-sec");

  if (window.innerWidth <= 480) {
    exclusive.addEventListener("click", () => {
      pkg.classList.add("pkg-ex");
      exclusive.classList.add("active-pkg");
      pro.classList.remove("active-pkg");
      excIco.src = "./assets/images/exclusive-ico-light.svg";
      proIco.src = "./assets/images/pro-ico-dark.svg";
      for (eachTick of excTick) {
        eachTick.src = "./assets/images/tick-light.svg";
      }
      for (eachTick of proTick) {
        eachTick.src = "./assets/images/tick.svg";
      }
    });
    pro.addEventListener("click", () => {
      pkg.classList.remove("pkg-ex");
      pro.classList.add("active-pkg");
      exclusive.classList.remove("active-pkg");
      proIco.src = "./assets/images/pro-ico.svg";
      excIco.src = "./assets/images/exclusive-ico.svg";
      for (eachTick of excTick) {
        eachTick.src = "./assets/images/tick.svg";
      }
      for (eachTick of proTick) {
        eachTick.src = "./assets/images/tick-light.svg";
      }
    });
  }
};

pkgSlide();

const pkgActive = () => {
  if (window.innerWidth > 480) {
    exclusive.addEventListener("click", () => {
      exclusive.classList.add("active-pkg");
      pro.classList.remove("active-pkg");
      excIco.src = "./assets/images/exclusive-ico-light.svg";
      proIco.src = "./assets/images/pro-ico-dark.svg";
      for (eachTick of excTick) {
        eachTick.src = "./assets/images/tick-light.svg";
      }
      for (eachTick of proTick) {
        eachTick.src = "./assets/images/tick.svg";
      }
    });
    pro.addEventListener("click", () => {
      pro.classList.add("active-pkg");
      exclusive.classList.remove("active-pkg");
      proIco.src = "./assets/images/pro-ico.svg";
      excIco.src = "./assets/images/exclusive-ico.svg";
      for (eachTick of excTick) {
        eachTick.src = "./assets/images/tick.svg";
      }
      for (eachTick of proTick) {
        eachTick.src = "./assets/images/tick-light.svg";
      }
    });
  }
};

pkgActive();
