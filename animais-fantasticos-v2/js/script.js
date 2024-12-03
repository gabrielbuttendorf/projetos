import Menu from './modules/menu.js';
import DropdownMenu from './modules/dropdown-menu.js';

const menu = new Menu('[data-menu="button"]', '[data-menu="list"]');
menu.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();
