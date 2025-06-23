<template>
  <div 
    class="cell"
    :class="{ 'x-mark': value === 'X', 'o-mark': value === 'O' }"
    @click="handleClick"
  >
    {{ value }}
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  value: {
    type: String,
    default: ''
  },
  index: {
    type: Number,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['cell-click']);

function handleClick() {
  if (!props.value && !props.disabled) {
    emit('cell-click', props.index);
  }
}
</script>

<style scoped>
.cell {
  width: 100px;
  height: 100px;
  background-color: var(--cell-bg);
  border: 2px solid var(--cell-border);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}
.cell.x-mark { color: var(--x-color); }
.cell.o-mark { color: var(--o-color); }
.cell[disabled] { cursor: not-allowed; opacity: 0.6; }
</style>
