class Board {
    constructor() {
        this.grid = [];
        this.hasWinner = false;
        this.initializeBoard();
    }

    // plateau avec des valeurs vides ('-')
    initializeBoard() {
        this.grid = [
            ['-', '-', '-'],
            ['-', '-', '-'],
            ['-', '-', '-']
        ];
        this.hasWinner = false;
    }

    // affiche le contenu de la grille dans la div avec id "board"
    displayBoard() {
        const boardDiv = document.getElementById('board');
        boardDiv.innerHTML = '';

        for (let row = 0; row < 3; row++) {
            const rowDiv = document.createElement('div');
            rowDiv.classList.add('row');

            for (let col = 0; col < 3; col++) {
                const button = document.createElement('button');
                button.classList.add('case');
                button.id = `btn-${row}-${col}`;
                button.textContent = this.grid[row][col];

                rowDiv.appendChild(button);
            }

            boardDiv.appendChild(rowDiv);
        }
    }

    // place un symbole dans la grille à une position donnée
    placeMove(row, col, symbol) {
        if (this.grid[row][col] === '-') {
            this.grid[row][col] = symbol;
            return true;
        }
        return false;
    }

    // victoire
    checkVictory() {
        const winningCombinations = [
            // Lignes
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            // Colonnes
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            // Diagonales
            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]]
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (
                this.grid[a[0]][a[1]] !== '-' &&
                this.grid[a[0]][a[1]] === this.grid[b[0]][b[1]] &&
                this.grid[a[0]][a[1]] === this.grid[c[0]][c[1]]
            ) {
                this.hasWinner = true;
                return true;
            }
        }

        return false;
    }

    // Vérifie si la grille est pleine
    isFull() {
        return this.grid.every(row => row.every(cell => cell !== '-'));
    }

    // Réinitialise le plateau pour une nouvelle partie
    resetBoard() {
        this.initializeBoard();
        this.displayBoard();
    }
}

export default Board;
