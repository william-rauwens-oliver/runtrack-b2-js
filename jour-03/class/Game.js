import Board from './Board.js';

class Game {
    constructor(players, board) {
        this.players = players;
        this.board = board;
        this.currentTurn = this.players[0];
        this.turnCount = 0;
    }

    //démarre une nouvelle partie
    startNewGame() {
        this.board.resetBoard();
        this.currentTurn = this.players[0];
        this.turnCount = 0;
        this.updateTurnDisplay();
        this.registerMove();
        document.getElementById('message').textContent = '';
        document.getElementById('current-player').textContent = `Joueur actuel : ${this.currentTurn.symbol}`;
    }

    // effectue un mouvement
    makeMove(row, col) {
        if (this.board.placeMove(row, col, this.currentTurn.symbol)) {
            this.board.displayBoard();
            this.turnCount++;
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

    // regarde si la partie est terminée
    checkGameOver() {
        if (this.board.checkVictory()) {
            return true;
        }
        if (this.board.isFull()) {
            return true;
        }
        return false;
    }

    // annonce le gagnant ou une égalité
    announceWinner() {
        const messageElement = document.getElementById('message');
        if (this.board.hasWinner) {
            messageElement.textContent = `Le joueur ${this.currentTurn.symbol} a gagné !`;
        } else {
            messageElement.textContent = `Match nul !`;
        }
    }

    // réinitialise le jeu
    resetGame() {
        this.board.resetBoard();
        this.currentTurn = this.players[0];
        this.turnCount = 0;
        document.getElementById('message').textContent = '';
        document.getElementById('current-player').textContent = `Joueur actuel : ${this.currentTurn.symbol}`;
        this.updateTurnDisplay();
    }

    updateTurnDisplay() {
        document.getElementById('turn').textContent = `Nombre de tours : ${this.turnCount}`;
    }
}

export default Game;
  