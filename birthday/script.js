const container = document.querySelector('.container');
const fireworks = new Fireworks.default(container, {
  autoresize: true,
  gravity: 1.25,
  particles: 75,
  explosion: 15,
  intensity: 30,
  hue: {
    min: 360,
    max: 360,
  },
  brightness: {
    min: 60,
    max: 100,
  },
});

fireworks.start();

setTimeout(() => {
  fireworks.waitStop();
}, 4000);
