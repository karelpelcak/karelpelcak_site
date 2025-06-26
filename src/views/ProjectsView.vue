<template>
    <div class="p-4">
        <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard title="E-Shop"
                description="Jednoduchý eshop, který měl sloužit pro prodej věcí z epoxidu a 3D tisku, později byl nahrazen frameworkem NextJS kvůli zkušenostem"
                :technologies="['Svelte', 'Postgres', 'Tailwind', 'NextJS']"
                github="https://github.com/karelpelcak/3depox_eshop" />
            <ProjectCard title="Template project managment system"
                description="Project managment system na správu pracovního plánu pro firmu"
                :technologies="['CSharp', 'Postgres', 'Tailwind', 'React']"
                github="https://github.com/karelpelcak/Template_project_managment_system" />
            <ProjectCard title="Food API"
                description="Food API, která měla slouzit jako backend vlástních kalorických tabulek, akorát druhá část týmu se stále nedostala k vývoji frontend části"
                :technologies="['Go', 'Postgres']" />
            <ProjectCard title="CryptoCurency" description="Aplikace sloužící na sledovaní cen kryptoměn"
                :technologies="['NextJS']" github="https://github.com/karelpelcak/CryptoCurency" />
            <ProjectCard title="Rust site" description="Informační stránka k hernímu serveru hry Rust"
                :technologies="['React', 'Tailwind']" github="https://github.com/karelpelcak/rust_site" />
            <ProjectCard title="Karel Pelčák"
                description="Moje osobní stránka s informacemi o mně sloužící především jako CV"
                :technologies="['Vue', 'Tailwind']" github="https://github.com/karelpelcak/karelpelcak_site" />
            <ProjectCard title="VibeCoding chat template"
                description="Template chat aplikace vytvořen v cursor IDE"
                :technologies="['React', 'Go']" github="https://github.com/karelpelcak/VibeCoding_chat_template" />
            <ProjectCard title="NestJS auth api"
                description="NestJS backend sloužící jako vzor pro authentikaci"
                :technologies="['NestJS']" github="https://github.com/karelpelcak/nestjs_auth" />
      </div>
    </div>
</template>

<script setup>
import ProjectCard from "../components/projects/ProjectCard.vue";
</script>
