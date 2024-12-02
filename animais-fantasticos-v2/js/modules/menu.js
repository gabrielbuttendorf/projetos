import outsideClick from './outside-click.js';

export default class Menu {
  constructor(button, list, events) {
    this.menuButton = document.querySelector(button);
    this.menuList = document.querySelector(list);
    this.events = events || ['click', 'touchstart'];

    this.toggleMenu = this.toggleMenu.bind(this);
    this.clickFora = this.clickFora.bind(this);
  }

  toggleMenu() {
    const isVisible = this.menuList.classList.toggle('ativo');
    this.menuButton.setAttribute('aria-expanded', isVisible);
    this.menuButton.classList.toggle('ativo');
  }

  clickFora(event) {
    if (!this.menuButton.contains(event.target) && !this.menuList.contains(event.target)) {
      this.menuList.classList.remove('ativo');
      this.menuButton.setAttribute('aria-expanded', false);
      this.menuButton.classList.remove('ativo');
    }
  }

  addEvent() {
    this.events.forEach((event) => {
      this.menuButton.addEventListener(event, this.toggleMenu);
      document.addEventListener(event, this.clickFora)
    });
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addEvent();
    }

    return this;
  }
}
