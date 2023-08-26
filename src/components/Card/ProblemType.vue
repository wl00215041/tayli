<template>
    <div class="problem-type">
      <div class="problem-type__circle"></div>
      <span class="problem-type__title">{{ problemType }}</span>
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';


const problemType = inject('problemType')

</script>

<style lang="scss" scoped>
  .problem-type {
    margin-bottom: 16px;
    &__circle {
      display: inline-block;
      width: 12px;
      height: 12px;
      background-color: #588e68;
      border-radius: 50%;
      margin-right: 4px;
    }
    &__title {
      color: #588e68;
    }
  }

</style>
