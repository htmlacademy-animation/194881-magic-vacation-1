export default () => {
  const curtain = document.querySelector(`.curtain`);
  const prizeLink = document.querySelector(`a[href="#prizes"]`);
  const TIME_DELAY = 600;

  prizeLink.addEventListener(`click`, (e) => {
    e.preventDefault();
    curtain.classList.toggle(`curtain--closed`);
    setTimeout(() => {
      window.location = prizeLink;
      curtain.classList.toggle(`curtain--closed`);
    }, TIME_DELAY);
  });
};
