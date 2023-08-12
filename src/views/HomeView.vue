<template>
  <main>
    <p>
      User: {{ user.username }}
    </p>
    <p>
      Email: {{ user.email }}
    </p>
    <button @click.prevent="userLogout">Logout</button>
    <button @click.prevent="$router.push({ name: 'about' })">Goto about</button>
    <RouterLink :to="{ name: 'about' }">Go to about link</RouterLink>
    <TheWelcome />
  </main>
</template>
<script setup lang="ts">
import { getUserInfo, logout } from '@/services/user';
import TheWelcome from '../components/TheWelcome.vue'
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';
const router = useRouter()

const userStore = useUserStore()
const { user } = storeToRefs(userStore)

const userLogout = () => {
  logout().then(() => {
    router.push({ name: 'login' })
  })
  
}

getUserInfo().then(res => {
  userStore.user = res.data
  user.value = res.data
}).catch(() => {
  router.push({ name: 'login' })
})

</script>