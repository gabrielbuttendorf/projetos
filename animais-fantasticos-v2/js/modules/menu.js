import outsideClick from './outside-click.js';

export default class Menu {
  constructor(button, list, events) {
    this.menuButton = document.querySelector(button);
    this.menuList = document.querySelector(list);
    this.events = events || ['click', 'touchstart'];
    this.activeClass = 'ativo';

    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  toggleMenu() {
    const isVisible = this.menuList.classList.toggle(this.activeClass);
    this.menuButton.setAttribute('aria-expanded', isVisible);
    this.menuButton.classList.toggle(this.activeClass);
  }

  closeMenu() {
    this.menuList.classList.remove(this.activeClass);
    this.menuButton.setAttribute('aria-expanded', false);
    this.menuButton.classList.remove(this.activeClass);
  }

  addEvent() {
    this.events.forEach((event) => {
      this.menuButton.addEventListener(event, this.toggleMenu);
    });

    outsideClick(this.events, [this.menuButton, this.menuList], this.closeMenu);
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addEvent();
    }

    return this;
  }
}
