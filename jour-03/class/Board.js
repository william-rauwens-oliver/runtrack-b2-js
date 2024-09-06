class Board {
    constructor() {
        this.grid = [];
        this.hasWinner = false;
        this.initializeBoard();
    }

    // Méthode pour initialiser le plateau avec des cases vides et réinitialiser hasWinner
    initializeBoard() {
        this.grid = [
            ['-', '-', '-'],
            ['-', '-', '-'],
            ['-', '-', '-']
        ];
        this.hasWinner = false;
    }

    // Méthode pour afficher le plateau dans l'élément avec l'id 'board'
    displayBoard() {
        const boardDiv = document.getElementById('board');
        boardDiv.innerHTML = ''; // Vider le contenu avant d'afficher la nouvelle grille

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

    // Méthode pour placer un symbole sur le plateau
    placeMove(row, col, symbol) {
        if (this.grid[row][col] !== '-') {
            return false; // La case est déjà prise
        }
        this.grid[row][col] = symbol;
        return true;
    }

    // Méthode pour vérifier si un joueur a gagné
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

        for (let combination of winningCombinations) {
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

    // Méthode pour vérifier si le plateau est plein (match nul)
    isFull() {
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (this.grid[row][col] === '-') {
                    return false;
                }
            }
        }
        return true;
    }

    // Méthode pour réinitialiser le plateau et l'afficher
    resetBoard() {
        this.initializeBoard();
        this.displayBoard();
    }
}

export default Board;
