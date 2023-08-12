import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IUser } from '@/types/user'

export const useUserStore = defineStore('user', () => {
  const user = ref<IUser>({
    username: '',
    email: ''
  })


  return { user }
})
