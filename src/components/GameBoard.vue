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

<script setup>
import { ref, computed } from 'vue';
import Cell from './Cell.vue';

const board = ref(Array(9).fill(''));
const currentPlayer = ref('X');
const gameOver = ref(false);
const winner = ref(null);
const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

const gameStatus = computed(() => {
  if (winner.value) {
    return `Player ${winner.value} wins!`;
  } else if (gameOver.value) {
    return 'Game ended in a draw!';
  } else {
    return `Current player: ${currentPlayer.value}`;
  }
});

const statusClass = computed(() => {
  if (winner.value) {
    return 'alert-success';
  } else if (gameOver.value) {
    return 'alert-warning';
  } else {
    return 'alert-info';
  }
});

function makeMove(index) {
  if (board.value[index] || gameOver.value) {
    return;
  }
  board.value[index] = currentPlayer.value;
  if (checkWinner()) {
    winner.value = currentPlayer.value;
    gameOver.value = true;
    return;
  }
  if (!board.value.includes('')) {
    gameOver.value = true;
    return;
  }
  currentPlayer.value = currentPlayer.value === 'X' ? 'O' : 'X';
}

function checkWinner() {
  return winningCombinations.some(combination => {
    const [a, b, c] = combination;
    return (
      board.value[a] &&
      board.value[a] === board.value[b] &&
      board.value[a] === board.value[c]
    );
  });
}

function resetGame() {
  board.value = Array(9).fill('');
  currentPlayer.value = 'X';
  gameOver.value = false;
  winner.value = null;
}
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
