<template>
  <section class="min-h-screen py-20 px-5 relative">
    <div class="max-w-7xl mx-auto relative z-10">
      <div class="flex flex-col items-center">
        <div class="w-full max-w-xl mb-12">
          <div class="relative group">
            <div class="relative w-[400px] h-[400px] mx-auto">
              <img
                src="/src/assets/copols-wedding.jpg"
                alt="Wedding Rings"
                class="w-full h-full object-cover rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transform transition-all duration-500 group-hover:scale-105 border-4 border-primary/20 will-change-transform"
              />
              <div
                class="absolute inset-0 bg-primary/10 rounded-full transition-opacity duration-300 group-hover:opacity-0"
              ></div>
            </div>
          </div>
        </div>

        <h1
          class="font-gathering text-6xl md:text-7xl text-primary text-center mb-6"
        >
          Jacob & Paty.
        </h1>
        <p
          class="font-raleway text-xl text-secondary text-center mb-12 max-w-2xl"
        >
          Nos complace invitarte a celebrar nuestra boda
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <button
            @click="scrollToRsvp"
            class="inline-block bg-primary hover:bg-secondary text-white font-raleway font-medium py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
          >
            RSVP
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No se requiere lógica adicional por ahora
function scrollToRsvp() {
  const rsvpElement = document.getElementById("rsvp");
  if (rsvpElement) {
    rsvpElement.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<style scoped>
/* Optimizar el rendimiento de las animaciones */
.transform {
  will-change: transform;
}

/* Optimizar las sombras */
.shadow-optimized {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.3s ease;
}

.shadow-optimized:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.16);
}
</style>
