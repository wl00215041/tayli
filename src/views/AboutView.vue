<template>
  <div class="about">
    <h1>This is an about page</h1>
    
    <v-chip class="ma-2" color="primary">
      username : {{ user.username  }}
    </v-chip>
    
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
