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
        <div class="flex justify-center">
          <p class="font-raleway text-secondary text-lg max-w-2xl text-center">
            A special day full of unforgettable moments. We invite you to be
            part of each instant.
          </p>
        </div>
      </div>

      <!-- Timeline Principal -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Ceremonia -->
        <div
          class="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-primary/20 transform hover:scale-105 transition-transform duration-300"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="200"
        >
          <div class="flex items-center gap-4 mb-4">
            <div
              class="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
            >
              <span class="text-3xl">💒</span>
            </div>
            <div>
              <h3 class="font-gathering text-3xl text-primary">Ceremony</h3>
              <p class="font-raleway text-secondary/80 text-sm">
                The most special moment
              </p>
            </div>
          </div>
          <div class="space-y-4">
            <p class="font-raleway text-secondary">
              An intimate and meaningful ceremony where we will celebrate our
              love.
            </p>
            <div
              class="flex items-center gap-2 text-secondary bg-primary/5 p-3 rounded-lg"
            >
              <span class="text-xl">🕒</span>
              <span class="font-raleway">3:00 PM - 4:00 PM</span>
            </div>
            <div
              class="flex items-center gap-2 text-secondary bg-primary/5 p-3 rounded-lg"
            >
              <span class="text-xl">📍</span>
              <span class="font-raleway">St. Joseph's Church</span>
            </div>
          </div>
        </div>

        <!-- Coctel -->
        <div
          class="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-primary/20 transform hover:scale-105 transition-transform duration-300"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="400"
        >
          <div class="flex items-center gap-4 mb-4">
            <div
              class="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
            >
              <span class="text-3xl">🥂</span>
            </div>
            <div>
              <h3 class="font-gathering text-3xl text-primary">
                Cocktail Hour
              </h3>
              <p class="font-raleway text-secondary/80 text-sm">
                A moment to toast
              </p>
            </div>
          </div>
          <div class="space-y-4">
            <p class="font-raleway text-secondary">
              A moment to toast and share with our loved ones.
            </p>
            <div
              class="flex items-center gap-2 text-secondary bg-primary/5 p-3 rounded-lg"
            >
              <span class="text-xl">🕒</span>
              <span class="font-raleway">4:30 PM - 6:00 PM</span>
            </div>
            <div
              class="flex items-center gap-2 text-secondary bg-primary/5 p-3 rounded-lg"
            >
              <span class="text-xl">📍</span>
              <span class="font-raleway">Main Garden</span>
            </div>
          </div>
        </div>

        <!-- Recepción -->
        <div
          class="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-primary/20 transform hover:scale-105 transition-transform duration-300"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="600"
        >
          <div class="flex items-center gap-4 mb-4">
            <div
              class="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
            >
              <span class="text-3xl">🎉</span>
            </div>
            <div>
              <h3 class="font-gathering text-3xl text-primary">Reception</h3>
              <p class="font-raleway text-secondary/80 text-sm">
                The grand celebration
              </p>
            </div>
          </div>
          <div class="space-y-4">
            <p class="font-raleway text-secondary">
              A celebration full of joy, music, and dance.
            </p>
            <div
              class="flex items-center gap-2 text-secondary bg-primary/5 p-3 rounded-lg"
            >
              <span class="text-xl">🕒</span>
              <span class="font-raleway">6:30 PM - 11:00 PM</span>
            </div>
            <div
              class="flex items-center gap-2 text-secondary bg-primary/5 p-3 rounded-lg"
            >
              <span class="text-xl">📍</span>
              <span class="font-raleway">Event Hall</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Nota al final -->
      <div class="mt-16 text-center">
        <div
          class="inline-block p-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-primary/20"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="800"
        >
          <p class="font-raleway text-secondary italic text-lg">
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
.wedding-itinerary {
  font-family: Arial, sans-serif;
  padding: 20px;
}

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
