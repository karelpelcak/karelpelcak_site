<template>
    <div class="border rounded-lg p-4 shadow hover:shadow-lg transition bg-gray-50!">
        <h2 class="text-xl font-semibold mb-2 text-black">{{ title }}</h2>
        <p class="text-gray-600 mb-2">{{ description }}</p>

        <a v-if="github" :href="github" target="_blank" class="text-blue-600 hover:underline mb-4 inline-block">
            GitHub
        </a>

        <div class="flex flex-wrap gap-2 text-black">
            <span v-for="tech in technologies" :key="tech"
                class="px-2 py-1 bg-gray-300 rounded text-sm flex items-center gap-1">
                <img v-if="getTechIcon(tech)" :src="getTechIcon(tech)" alt="icon" class="w-4 h-4" />
                {{ tech }}
            </span>
        </div>
    </div>
</template>

<script setup>
import reactIcon from '@/assets/stack/react.png';
import csharpIcon from '@/assets/stack/csharp.png';
import goIcon from '@/assets/stack/go.png';
import nestjsIcon from '@/assets/stack/nestjs.png';
import nextjsIcon from '@/assets/stack/nextjs.png';
import postgresIcon from '@/assets/stack/postgresql.png';
import tailwindIcon from '@/assets/stack/tailwind.png';
import vueIcon from '@/assets/stack/Vue.png';
import svelteIcon from '@/assets/stack/sveltekit.png';

const props = defineProps({
    title: String,
    description: String,
    technologies: Array,
    github: String, // odkaz na repo (nepovinný)
});

const getTechIcon = (tech) => {
    const icons = {
        React: reactIcon,
        CSharp: csharpIcon,
        Go: goIcon,
        NestJS: nestjsIcon,
        NextJS: nextjsIcon,
        Postgres: postgresIcon,
        Tailwind: tailwindIcon,
        Vue: vueIcon,
        Svelte: svelteIcon,
    };
    return icons[tech] || null;
};
</script>
