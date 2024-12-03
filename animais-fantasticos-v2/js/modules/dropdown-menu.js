export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.events = events || ['click', 'touchstart'];
    this.activeClass = 'ativo';

    this.showMenu = this.showMenu.bind(this);
  }

  showMenu(menu, event) {
    event.preventDefault();
    menu.classList.add(this.activeClass)
  }

  addEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, (event) => this.showMenu(menu, event))
      })
    })
  }

  init() {
    this.addEvent();
  }
}