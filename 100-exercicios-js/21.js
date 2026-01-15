// Faça um programa em Python que abra e reproduza um arquivo mp3

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const musicas = ['0', 'autobahn', 'now-or-never', 'xtranho'];

rl.question("\nEscolha uma música da lista abaixo para tocar: \n\n1. AUTOBAHN \n2. NOW OR NEVER \n3. XTRANHO \n\n", (item) => {
  const player = require("play-sound")();
  player.play(`./external-files/${musicas[item]}.mp3`, (err) => {
    if (err) console.log("\n\nErro: ", err);
  });

  rl.close()
})
