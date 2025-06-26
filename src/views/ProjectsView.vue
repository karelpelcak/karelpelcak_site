<template>
    <div class="p-4">
        <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard title="E-Shop"
                description="Jednoduchý e-shop určený k prodeji výrobků z epoxidu a 3D tisku. Projekt byl později přepsán do Next.js jako součást sbírání zkušeností."
                :technologies="['Svelte', 'Postgres', 'Tailwind', 'NextJS']"
                github="https://github.com/karelpelcak/3depox_eshop" />
            <ProjectCard title="Template project managment system"
                description="Systém na správu pracovního plánu pro firmu. Umožňuje přehledné řízení projektů a týmové spolupráce."
                :technologies="['CSharp', 'Postgres', 'Tailwind', 'React']"
                github="https://github.com/karelpelcak/Template_project_managment_system" />
            <ProjectCard title="Food API"
                description="Backend API pro vlastní verzi kalorických tabulek. Projekt čeká na dokončení frontendové části."
                :technologies="['Go', 'Postgres']" />
            <ProjectCard title="CryptoCurency"
                description="Jednoduchá aplikace pro sledování aktuálních cen kryptoměn."
                :technologies="['NextJS']" github="https://github.com/karelpelcak/CryptoCurency" />
            <ProjectCard title="Rust site"
                description="Informační web k hernímu serveru populární survival hry Rust."
                :technologies="['React', 'Tailwind']" github="https://github.com/karelpelcak/rust_site" />
            <ProjectCard title="Karel Pelčák"
                description="Moje osobní webová vizitka s informacemi o mně, sloužící především jako online životopis."
                :technologies="['Vue', 'Tailwind']" github="https://github.com/karelpelcak/karelpelcak_site" />
            <ProjectCard title="VibeCoding chat template"
                description="Šablona jednoduché chatovací aplikace vytvořená v Cursor IDE."
                :technologies="['React', 'Go']" github="https://github.com/karelpelcak/VibeCoding_chat_template" />
            <ProjectCard title="NestJS auth api"
                description="Ukázkový backend v NestJS sloužící jako vzorová implementace autentikace."
                :technologies="['NestJS']" github="https://github.com/karelpelcak/nestjs_auth" />
      </div>
    </div>
</template>

<script setup>
import ProjectCard from "../components/projects/ProjectCard.vue";
</script>

