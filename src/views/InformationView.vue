<template>
  <div class="space-y-6">
    <div class="border p-4 rounded shadow">
      <h2 class="text-2xl font-semibold mb-2">O mně</h2>
      <ul class="list-disc list-inside space-y-1">
        <li>Bydliště: Zlín</li>
        <li>Angličtina: B1</li>
        <li>Dobrovolný hasič se školením na dýchací techniku</li>
        <li>Maturita: SPŠP Zlín - Informační technologie (úspěšně dokončena)</li>
      </ul>
    </div>

    <div class="border p-4 rounded shadow">
      <h2 class="text-2xl font-semibold mb-4">Moje cesta v oboru</h2>
      <div class="relative border-l-2 border-gray-300 pl-4 space-y-4">
        <div class="relative">
          <div class="absolute -left-2 top-1 w-3 h-3 bg-blue-500 rounded-full"></div>
          <h3 class="font-semibold ml-2">Praxe ve firmě Blogic.cz</h3>
          <p class="text-sm text-gray-600">Vývoj v C#, ASP.NET MVC</p>
        </div>

        <div class="relative">
          <div class="absolute -left-2 top-1 w-3 h-3 bg-blue-500 rounded-full"></div>
          <h3 class="font-semibold ml-2">Brigáda ve firmě TCservis s.r.o.</h3>
          <p class="text-sm text-gray-600">Zpráva sítě</p>
        </div>

        <div class="relative">
          <div class="absolute -left-2 top-1 w-3 h-3 bg-blue-500 rounded-full"></div>
          <h3 class="font-semibold ml-2">Praxe ve firmě TCservis s.r.o.</h3>
          <p class="text-sm text-gray-600">Zpráva sítě během studia</p>
        </div>


        <div class="relative">
          <div class="absolute -left-2 top-1 w-3 h-3 bg-blue-500 rounded-full"></div>
          <h3 class="font-semibold ml-2">Práce ve firmě TCservis s.r.o.</h3>
          <p class="text-sm text-gray-600">Krátká pracovní zkušenost jako opravař sítě</p>
          <p class="text-sm text-gray-600">1.11.2024 - 15.11.2024</p>
        </div>

        <div class="relative">
          <div class="absolute -left-2 top-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <h3 class="font-semibold ml-2">RegioJet - Frontend vývojář</h3>
          <p class="text-sm text-gray-600">NextJS junior frontend vývojář</p>
          <p class="text-sm text-gray-600">18.11.2024 - Současnost</p>
        </div>
      </div>

      <h2 class="text-2xl font-semibold mb-4 mt-4">Samostudie</h2>
      <div class="relative border-l-2 border-gray-300 pl-4 space-y-4">
        <div class="relative">
          <div class="absolute -left-2 top-1 w-3 h-3 bg-purple-500 rounded-full"></div>
          <h3 class="font-semibold ml-2">Zkušenosti se správou serverů</h3>
          <p class="text-sm text-gray-600">
            Docker, GitHub CI/CD pipeline, základy Kubernetes, konfigurace serverů
          </p>
        </div>

        <div class="relative">
          <div class="absolute -left-2 top-1 w-3 h-3 bg-purple-500 rounded-full"></div>
          <h3 class="font-semibold ml-2">Backend Vývoj</h3>
          <p class="text-sm text-gray-600">
            Vývoj backend v NestJS, Go
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped></style>
