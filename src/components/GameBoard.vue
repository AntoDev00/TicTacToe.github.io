<template>
  <div>
    <div class="status-container">
      <div class="alert player-status" :class="statusClass" role="alert">
        {{ gameStatus }}
      </div>
    </div>
    <div class="game-board">
      <div class="grid">
        <Cell
          v-for="(cell, index) in board"
          :key="index"
          :value="cell"
          :index="index"
          :disabled="gameOver"
          @cell-click="makeMove"
        />
      </div>
    </div>
    <button class="btn btn-primary mt-3" @click="resetGame">Reset</button>
  </div>
</template>

<script>
import Cell from './Cell.vue';

export default {
  name: 'GameBoard',
  components: { Cell },
  data() {
    return {
      board: Array(9).fill(''),
      currentPlayer: 'X',
      gameOver: false,
      winner: null,
      winningCombinations: [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ]
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
      if (this.board[index] || this.gameOver) return;
      this.board[index] = this.currentPlayer;
      if (this.checkWinner()) {
        this.winner = this.currentPlayer;
        this.gameOver = true;
        return;
      }
      if (!this.board.includes('')) {
        this.gameOver = true;
        return;
      }
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    },
    checkWinner() {
      return this.winningCombinations.some(comb => {
        const [a, b, c] = comb;
        return (
          this.board[a] &&
          this.board[a] === this.board[b] &&
          this.board[a] === this.board[c]
        );
      });
    },
    resetGame() {
      this.board = Array(9).fill('');
      this.currentPlayer = 'X';
      this.gameOver = false;
      this.winner = null;
    }
  }
};
</script>

<style scoped>
.status-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.player-status {
  max-width: 250px;
  text-align: center;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
}
.game-board {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  gap: 8px;
}
</style>
