<script setup lang="ts">
import { Auth, ThemeSupa, type Appereance, type Provider } from 'vue-auth-ui'
import { type EmailCred } from '@/types/index'
import supabase from '@/libs/supabase-client'

const appearance: Appereance = {
  theme: ThemeSupa,
  themeVariant: 'light'
}
</script>

<template>
  <div className="w-3/4 md:w-2/4 mx-auto">
    <h1 className="font-semibold text-xl tracking-tight mb-5">Login</h1>
    <Auth
      :providers="['github']"
      socialLayout="col"
      :appearance="appearance"
      @signInWithPassword="(creds: EmailCred) => supabase.auth.signInWithPassword(creds)"
      @signUp="(creds: EmailCred) => supabase.auth.signUp(creds)"
      @signInWithOAuth="(provider: Provider) => supabase.auth.signInWithOAuth(provider)"
    />
  </div>
</template>

<style>
:root {
  --colors-brand: #ed8936;
  --colors-brandAccent: #fb923c;
}
</style>
