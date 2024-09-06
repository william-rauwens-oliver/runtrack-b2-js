import Player from './Player.js';
import Board from './Board.js';

class Game {
    constructor(players, board) {
        this.players = players;
        this.board = board;
        this.currentTurn = this.players[0];
        this.turnCount = 0;
        this.playerXCount = 0;
        this.playerOCount = 0;
        this.turnsPerPlayer = { 'X': 0, 'O': 0 };
    }

    // nouvelle partie
    startNewGame() {
        this.board.resetBoard();
        this.currentTurn = this.players[0];
        this.turnCount = 0;
        this.playerXCount = 0;
        this.playerOCount = 0;
        this.turnsPerPlayer = { 'X': 0, 'O': 0 };
        this.updateTurnDisplay();
        this.registerMove();
        document.getElementById('message').textContent = '';
        document.getElementById('current-player').textContent = `Joueur actuel : ${this.currentTurn.symbol}`;
        document.getElementById('player-x-count').textContent = `Tours de X : 0`;
        document.getElementById('player-o-count').textContent = `Tours de O : 0`;
    }

    // effectue un mouvement
    makeMove(row, col) {
        if (this.board.placeMove(row, col, this.currentTurn.symbol)) {
            this.board.displayBoard();
            this.turnCount++;
            this.turnsPerPlayer[this.currentTurn.symbol]++;
            this.updateTurnDisplay();
            if (this.checkGameOver()) {
                this.announceWinner();
            } else {
                this.switchTurn();
            }
        }
    }

    // enregistrement des mouvements des joueurs
    registerMove() {
        const boardDiv = document.getElementById('board');
        boardDiv.addEventListener('click', (event) => {
            if (event.target.classList.contains('case')) {
                const [_, row, col] = event.target.id.split('-').map(Number);
                this.makeMove(row, col);
            }
        });
    }

    // change de tour entre les joueurs
    switchTurn() {
        this.currentTurn = this.currentTurn === this.players[0] ? this.players[1] : this.players[0];
        document.getElementById('current-player').textContent = `Joueur actuel : ${this.currentTurn.symbol}`;
    }

    // vérifie si la partie est terminée
    checkGameOver() {
        if (this.board.checkVictory()) {
            return true;
        }
        if (this.board.isFull()) {
            return true;
        }
        return false;
    }

    // gagnant ou égalité
    announceWinner() {
        const messageElement = document.getElementById('message');
        if (this.board.hasWinner) {
            messageElement.textContent = `Le joueur ${this.currentTurn.symbol} a gagné en ${this.turnsPerPlayer[this.currentTurn.symbol]} tours !`;
        } else {
            messageElement.textContent = `Match nul !`;
        }
    }

    // réinitialise la partie
    resetGame() {
        this.board.resetBoard();
        this.currentTurn = this.players[0];
        this.turnCount = 0;
        this.playerXCount = 0;
        this.playerOCount = 0;
        this.turnsPerPlayer = { 'X': 0, 'O': 0 };
        document.getElementById('message').textContent = '';
        document.getElementById('current-player').textContent = `Joueur actuel : ${this.currentTurn.symbol}`;
        this.updateTurnDisplay();
    }

    // affichage du nombre de tours mis à jour sans rafraichir la page
    updateTurnDisplay() {
        document.getElementById('turn').textContent = `Nombre de tours total : ${this.turnCount}`;
        document.getElementById('player-x-count').textContent = `Tours de X : ${this.turnsPerPlayer['X']}`;
        document.getElementById('player-o-count').textContent = `Tours de O : ${this.turnsPerPlayer['O']}`;
    }
}

export default Game;
