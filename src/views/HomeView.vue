<template>
  <main>
    <v-chip class="ma-2" color="success" variant="outlined"> welcome User </v-chip>

    <p>User: {{ user.username }}</p>
    <p>Email: {{ user.email }}</p>
    <v-chip class="ma-2" color="primary" @click.prevent="$router.push({ name: 'about' })">
      寫router.push,Goto about
    </v-chip>
    <br />
    <RouterLink :to="{ name: 'helloWorld' }">
      <v-chip class="ma-2 pointer" color="green" text-color="white">
        用RouterLink導頁,Go to helloWorld
      </v-chip>
    </RouterLink>
    <br />
    <v-chip class="ma-2" variant="outlined"> 引入components 以下顯示slot範例 </v-chip>
    <TheWelcome />
    <v-chip class="ma-2" color="red" text-color="white" @click.prevent="userLogout">
      Logout
    </v-chip>
  </main>
</template>
<script setup lang="ts">
import { getUserInfo, logout } from '@/services/user'
import TheWelcome from '../components/TheWelcome.vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
const router = useRouter()

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

const userLogout = () => {
  logout().then(() => {
    router.push({ name: 'login' })
  })
}

getUserInfo()
  .then((res) => {
    userStore.user = res.data
    user.value = res.data
  })
  .catch(() => {
    router.push({ name: 'login' })
  })
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
