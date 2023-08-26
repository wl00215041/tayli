import { onMounted, ref } from "vue"

export default (fn: any) => {

  const loading = ref(false)

  const execute = (): Promise<any> => {
    loading.value = true
    return fn().finally(() => {
      loading.value = false
    })
  }

  onMounted(() => {
    
  })

  return {
    loading,
    execute
  }
}