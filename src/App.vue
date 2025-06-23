<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { changeLang } from './i18n'
import { ref } from 'vue'

const { t, locale } = useI18n()
const menuOpen = ref(false)

const toggleLang = () => {
  const newLang = locale.value === 'cs' ? 'en' : 'cs'
  changeLang(newLang)
  locale.value = newLang
}
</script>

<template>
  <header class="w-full bg-black text-white shadow-md mb-5">
    <nav class="max-w-7xl mx-auto flex items-center justify-between h-20 px-4">

      <!-- Logo / Name -->

      <RouterLink
        class="px-4 py-2 rounded-xl hover:bg-white hover:text-black transition-colors duration-300 font-extrabold text-2xl"
        to="/">Karel Pelčák</RouterLink>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-6">
        <RouterLink
          class="px-4 py-2 rounded-xl hover:bg-white hover:text-black transition-colors duration-300 font-semibold text-lg"
          to="/">{{ t('route_home') }}</RouterLink>
        <RouterLink
          class="px-4 py-2 rounded-xl hover:bg-white hover:text-black transition-colors duration-300 font-semibold text-lg"
          to="/contact">{{ t('route_contacts') }}</RouterLink>
        <RouterLink
          class="px-4 py-2 rounded-xl hover:bg-white hover:text-black transition-colors duration-300 font-semibold text-lg"
          to="/projects">{{ t('route_projects') }}</RouterLink>
      </div>

      <!-- Language Switch + Hamburger -->
      <div class="flex items-center gap-4">
        <button
          class="px-4 py-2 border-2 border-white rounded-xl hover:bg-white hover:text-black transition-colors duration-300 font-semibold text-lg"
          @click="toggleLang">
          {{ locale === 'cs' ? 'CZ' : 'EN' }}
        </button>

        <!-- Hamburger icon (visible on mobile) -->
        <button class="md:hidden" @click="menuOpen = !menuOpen">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <div v-if="menuOpen" class="md:hidden px-4 pb-4 space-y-2">
      <RouterLink
        class="block px-4 py-2 rounded-xl hover:bg-white hover:text-black transition-colors duration-300 font-semibold text-lg"
        to="/">{{ t('route_home') }}</RouterLink>
      <RouterLink
        class="block px-4 py-2 rounded-xl hover:bg-white hover:text-black transition-colors duration-300 font-semibold text-lg"
        to="/contact">{{ t('route_contacts') }}</RouterLink>
      <RouterLink
        class="block px-4 py-2 rounded-xl hover:bg-white hover:text-black transition-colors duration-300 font-semibold text-lg"
        to="/projects">{{ t('route_projects') }}</RouterLink>
    </div>
  </header>

  <RouterView />
</template>
