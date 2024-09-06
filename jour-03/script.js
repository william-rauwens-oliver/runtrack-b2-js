import Player from './class/Player.js';
import Board from './class/Board.js';
import Game from './class/Game.js';

const players = [
    new Player('X', true),
    new Player('O', false)
];

const board = new Board();
const game = new Game(players, board);

document.getElementById('play').addEventListener('click', () => {
    game.resetGame();
});

game.startNewGame();
