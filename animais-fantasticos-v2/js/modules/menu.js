export default class Menu {
  constructor(button, list, events) {
    this.menuButton = document.querySelector(button);
    this.menuList = document.querySelector(list);
    this.events = events || ['click', 'touchstart'];

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    const isVisible = this.menuList.classList.toggle('ativo');
    this.menuButton.setAttribute('aria-expanded', isVisible);
    this.menuButton.classList.toggle('ativo');
  }

  addEvent() {
    this.events.forEach((event) => {
      this.menuButton.addEventListener(event, this.toggleMenu);
    });
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addEvent();
    }

    return this;
  }
}
