class Player {
    constructor(symbol, isCurrentPlayer = false) {
        this.symbol = symbol;
        this.isCurrentPlayer = isCurrentPlayer;
    }

    setAsCurrentPlayer() {
        this.isCurrentPlayer = true;
    }

    removeAsCurrentPlayer() {
        this.isCurrentPlayer = false;
    }
}

export default Player;
