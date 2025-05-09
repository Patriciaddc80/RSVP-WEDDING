<!-- filepath: c:\rsvp-boda\src\components\WeddingItinerary.vue -->
<template>
  <section class="min-h-screen py-20 px-5 relative overflow-hidden">
    <div class="max-w-6xl mx-auto relative z-10">
      <!-- Encabezado -->
      <div class="text-center mb-16">
        <h2 class="font-gathering text-6xl text-primary mb-4">
          Wedding Itinerary
        </h2>
        <div class="w-24 h-1 bg-primary/30 mx-auto mb-6"></div>
        <p
          class="font-raleway text-secondary dark:text-secondary-light text-lg max-w-2xl mx-auto"
        >
          A special day full of unforgettable moments. We invite you to be part
          of each instant.
        </p>
      </div>

      <!-- Timeline Principal -->
      <div class="relative">
        <!-- Línea de tiempo vertical -->
        <div
          class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20 dark:bg-primary-light/20"
        ></div>

        <!-- Ceremonia -->
        <div class="relative mb-16">
          <div class="flex flex-col md:flex-row items-center gap-8">
            <!-- Contenido izquierdo -->
            <div class="w-full md:w-1/2 md:pr-16 md:text-right">
              <div
                class="backdrop-blur-sm bg-white/30 dark:bg-transparent p-8 rounded-lg shadow-lg border border-primary/20 dark:border-primary-light/20 transform hover:scale-105 transition-all duration-300"
              >
                <h3 class="font-gathering text-3xl text-primary mb-4">
                  Ceremony
                </h3>
                <p
                  class="font-raleway text-secondary dark:text-secondary-light mb-4"
                >
                  An intimate and meaningful ceremony where we will celebrate
                  our love.
                </p>
                <div class="space-y-3">
                  <div class="flex items-center justify-end gap-3">
                    <span class="font-raleway text-secondary dark:text-white"
                      >3:00 PM - 4:00 PM</span
                    >
                    <span class="text-2xl">🕒</span>
                  </div>
                  <div class="flex items-center justify-end gap-3">
                    <span class="font-raleway text-secondary dark:text-white"
                      >St. Joseph's Church</span
                    >
                    <span class="text-2xl">📍</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Punto central -->
            <div
              class="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white/80 dark:bg-gray-900/80 border-2 border-primary/30 dark:border-primary-light/30 shadow-lg flex items-center justify-center"
            >
              <i
                class="fas fa-church text-2xl text-primary dark:text-primary-light"
              ></i>
            </div>

            <!-- Imagen derecha -->
            <div class="w-full md:w-1/2 md:pl-16">
              <img
                src="/src/assets/wedding-rings.jpg"
                alt="Ceremony"
                class="w-full h-64 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        <!-- Coctel -->
        <div class="relative mb-16">
          <div class="flex flex-col md:flex-row items-center gap-8">
            <!-- Imagen izquierda -->
            <div class="w-full md:w-1/2 md:pr-16">
              <img
                src="/src/assets/hands-to-hands.jpg"
                alt="Cocktail"
                class="w-full h-64 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              />
            </div>

            <!-- Punto central -->
            <div
              class="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white/80 dark:bg-gray-900/80 border-2 border-primary/30 dark:border-primary-light/30 shadow-lg flex items-center justify-center"
            >
              <i
                class="fas fa-glass-cheers text-2xl text-primary dark:text-primary-light"
              ></i>
            </div>

            <!-- Contenido derecho -->
            <div class="w-full md:w-1/2 md:pl-16">
              <div
                class="backdrop-blur-sm bg-white/30 dark:bg-transparent p-8 rounded-lg shadow-lg border border-primary/20 dark:border-primary-light/20 transform hover:scale-105 transition-all duration-300"
              >
                <h3 class="font-gathering text-3xl text-primary mb-4">
                  Cocktail Hour
                </h3>
                <p
                  class="font-raleway text-secondary dark:text-secondary-light mb-4"
                >
                  A moment to toast and share with our loved ones.
                </p>
                <div class="space-y-3">
                  <div class="flex items-center gap-3">
                    <span class="text-2xl">🕒</span>
                    <span
                      class="font-raleway text-secondary dark:text-secondary-light"
                      >4:30 PM - 6:00 PM</span
                    >
                  </div>
                  <div class="flex items-center gap-3">
                    <span class="text-2xl">📍</span>
                    <span
                      class="font-raleway text-secondary dark:text-secondary-light"
                      >Main Garden</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Recepción -->
        <div class="relative">
          <div class="flex flex-col md:flex-row items-center gap-8">
            <!-- Contenido izquierdo -->
            <div class="w-full md:w-1/2 md:pr-16 md:text-right">
              <div
                class="backdrop-blur-sm bg-white/30 dark:bg-transparent p-8 rounded-lg shadow-lg border border-primary/20 dark:border-primary-light/20 transform hover:scale-105 transition-all duration-300"
              >
                <h3 class="font-gathering text-3xl text-primary mb-4">
                  Reception
                </h3>
                <p
                  class="font-raleway text-secondary dark:text-secondary-light mb-4"
                >
                  A celebration full of joy, music, and dance.
                </p>
                <div class="space-y-3">
                  <div class="flex items-center justify-end gap-3">
                    <span
                      class="font-raleway text-secondary dark:text-secondary-light"
                      >6:30 PM - 11:00 PM</span
                    >
                    <span class="text-2xl">🕒</span>
                  </div>
                  <div class="flex items-center justify-end gap-3">
                    <span
                      class="font-raleway text-secondary dark:text-secondary-light"
                      >Event Hall</span
                    >
                    <span class="text-2xl">📍</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Punto central -->
            <div
              class="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white/80 dark:bg-gray-900/80 border-2 border-primary/30 dark:border-primary-light/30 shadow-lg flex items-center justify-center"
            >
              <i
                class="fas fa-music text-2xl text-primary dark:text-primary-light"
              ></i>
            </div>

            <!-- Imagen derecha -->
            <div class="w-full md:w-1/2 md:pl-16">
              <img
                src="/src/assets/botanica.jpg"
                alt="Reception"
                class="w-full h-64 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Nota al final -->
      <div class="mt-16 text-center">
        <div
          class="inline-block backdrop-blur-sm bg-white/30 dark:bg-transparent p-6 rounded-lg shadow-lg border border-primary/20 dark:border-primary-light/20"
        >
          <p
            class="font-raleway text-secondary dark:text-secondary-light italic text-lg"
          >
            "Life is a celebration, and today we celebrate love"
          </p>
          <div class="w-16 h-0.5 bg-primary/30 mx-auto mt-4"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No se requiere lógica adicional por ahora
</script>

<style scoped>
/* Optimizar las transiciones */
.transform {
  will-change: transform;
}

/* Optimizar el rendimiento de las animaciones */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.v-motion {
  animation: fadeIn 0.5s ease-out forwards;
}
</style>
