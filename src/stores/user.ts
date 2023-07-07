import { acceptHMRUpdate, defineStore } from 'pinia'
import { computed, ref } from 'vue'
import supabase from '@/libs/supabase-client'
import { notify } from '@/libs/notiwind'
import type { IUser_Fragment } from '@/types/graphql.types'
import router from '@/router'

export const useUserStore = defineStore('user', () => {
  const user = ref<IUser_Fragment | null>(null)
  const isLoading = ref(false)
  const isLoggedIn = computed(() => !!user.value)

  const logIn = (newUser: IUser_Fragment) => {
    if (!newUser) return
    user.value = newUser
  }

  const logOut = async () => {
    try {
      isLoading.value = true
      const { error } = await supabase.auth.signOut()
      if (error) throw error
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message)
      } else {
        console.error('Unexpected error', error)
        notify(
          {
            group: 'bottom',
            title: 'Error',
            text: 'Ops, something unexpected happened',
            type: 'error'
          },
          2000
        )
      }
    } finally {
      isLoading.value = true
      user.value = null
      router.push('/')
    }
  }

  return { user, isLoading, logIn, logOut, isLoggedIn }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
