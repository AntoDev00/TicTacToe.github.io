const { createApp } = Vue;

createApp({
  data() {
    return {
      title: 'Tic Tac Toe (Tris)',
      board: Array(9).fill(''),
      currentPlayer: 'X',
      gameOver: false,
      winner: null,
      winningCombinations: [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
      ],
      darkMode: false
    };
  },
  computed: {
    gameStatus() {
      if (this.winner) {
        return `Player ${this.winner} wins!`;
      } else if (this.gameOver) {
        return 'Game ended in a draw!';
      } else {
        return `Current player: ${this.currentPlayer}`;
      }
    },
    statusClass() {
      if (this.winner) {
        return 'alert-success';
      } else if (this.gameOver) {
        return 'alert-warning';
      } else {
        return 'alert-info';
      }
    }
  },
  methods: {
    makeMove(index) {
      // If the cell is already filled or game is over, do nothing
      if (this.board[index] || this.gameOver) {
        return;
      }
      
      // Update the board with the current player's mark
      this.board[index] = this.currentPlayer;
      
      // Check if the current move results in a win
      if (this.checkWinner()) {
        this.winner = this.currentPlayer;
        this.gameOver = true;
        return;
      }
      
      // Check for a draw
      if (!this.board.includes('')) {
        this.gameOver = true;
        return;
      }
      
      // Switch to the next player
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    },
    
    checkWinner() {
      return this.winningCombinations.some(combination => {
        return combination.every(index => {
          return this.board[index] === this.currentPlayer;
        });
      });
    },
    
    resetGame() {
      this.board = Array(9).fill('');
      this.currentPlayer = 'X';
      this.gameOver = false;
      this.winner = null;
    },
    
    toggleDarkMode() {
      if (this.darkMode) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
      }
    }
  },
  mounted() {
    // Ensure light mode is set on initial load
    document.body.classList.add('light-mode');
  }
}).mount('#app');
