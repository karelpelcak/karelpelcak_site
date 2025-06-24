<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="mb-10">
    <h1 class="text-center text-4xl font-bold mb-6">{{ t('stack_text') }}</h1>
    <div class="!bg-white p-4 flex flex-wrap justify-center gap-4 w-[90%] max-w-[1000px] mx-auto rounded-2xl">
      <img src="/src/assets/stack/typescript.png" class="w-auto h-16 !bg-transparent" />
      <img src="/src/assets/stack/tailwind.png" class="w-auto h-16 !bg-transparent" />
      <img src="/src/assets/stack/nodejs.webp" class="w-auto h-16 !bg-transparent" />
      <img src="/src/assets/stack/nextjs.png" class="w-auto h-16 !bg-transparent" />
      <img src="/src/assets/stack/nestjs.png" class="w-auto h-16 !bg-transparent" />
      <img src="/src/assets/stack/react.png" class="w-auto h-16 !bg-transparent" />
      <img src="/src/assets/stack/Vue.png" class="w-auto h-16 !bg-transparent" />
      <img src="/src/assets/stack/sveltekit.png" class="w-auto h-16 !bg-transparent" />
      <img src="/src/assets/stack/go.png" class="w-auto h-16 !bg-transparent" />
      <img src="/src/assets/stack/csharp.png" class="w-auto h-16 !bg-transparent" />
      <img src="/src/assets/stack/python.png" class="w-auto h-16 !bg-transparent" />
      <img src="/src/assets/stack/postgresql.png" class="w-auto h-16 !bg-transparent" />
      <img src="/src/assets/stack/docker.png" class="w-auto h-16 !bg-transparent" />
      <img src="/src/assets/stack/git.png" class="w-auto h-16 !bg-transparent" />
      <img src="/src/assets/stack/strapi.png" class="w-auto h-16 !bg-transparent" />
    </div>
    <div class="w-screen flex justify-center mt-6">
      <RouterLink to="/projects">
        <h3 class="text-gray-500! hover:text-white! transition-colors text-xl font-bold w-auto">{{ t('route_work')
        }}</h3>
      </RouterLink>
    </div>
  </div>
</template>
