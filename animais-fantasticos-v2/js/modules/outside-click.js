export default function outsideClick(eventsListeners, targets, callback) {
  eventsListeners.forEach((eventListener) => {
    document.addEventListener(eventListener, (event) => closeItem(event));
  });

  function closeItem(event) {
    const isClickOutside = targets.every((target) => !target.contains(event.target));
    
    if (isClickOutside) {
      callback();
    }
  }
}
