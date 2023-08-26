<script setup lang="ts">
import { provide } from 'vue';


provide('theme', 'dark')
provide('version', '2.2.0')

</script>

<template>
  <RouterView />
</template>


